"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "../api-playgroud/apiPlayground.module.css";
import { PANEL_WIDTH } from "../api-playgroud/util";

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

export default function CollectionsPane({
    collections, expandedCollectionIds, savedCollectionNoticeId, collectionsPaneMessage,
    onToggleCollection, onOpenRequest, onAddCollection, onImportCollection, onRemoveCollection,
    pendingImportConflict, onCancelImportConflict, onImportCollectionAsCopy, onReplaceCollectionWithImport, }) {
    const [newCollection, setNewCollection] = useState("");
    const [pendingDeleteId, setPendingDeleteId] = useState(null);
    const [panelWidth, setPanelWidth] = useState(PANEL_WIDTH.initial);
    const [isResizingPanel, setIsResizingPanel] = useState(false);
    const panelRef = useRef(null);
    const importInputRef = useRef(null);

    const startPanelResize = useCallback((e) => {
        e.preventDefault();
        setIsResizingPanel(true);
        document.body.style.cursor = "col-resize";
        document.body.style.userSelect = "none";
    }, []);

    const stopPanelResize = useCallback(() => {
        setIsResizingPanel(false);
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
    }, []);

    const handlePanelResize = useCallback((e) => {
        if (!isResizingPanel || !panelRef.current) return;

        const panelRect = panelRef.current.getBoundingClientRect();
        const containerWidth = panelRef.current.parentElement?.clientWidth ?? 960;
        const maxWidth = Math.min(
            PANEL_WIDTH.max,
            Math.max(
                PANEL_WIDTH.preferredMin,
                containerWidth - PANEL_WIDTH.contentReserve - PANEL_WIDTH.gap
            )
        );
        const minWidth = Math.min(PANEL_WIDTH.min, maxWidth);
        const nextWidth = clamp(e.clientX - panelRect.left, minWidth, maxWidth);

        setPanelWidth(nextWidth);
    }, [isResizingPanel]);

    useEffect(() => {
        if (!isResizingPanel) return undefined;

        window.addEventListener("mousemove", handlePanelResize);
        window.addEventListener("mouseup", stopPanelResize);

        return () => {
            window.removeEventListener("mousemove", handlePanelResize);
            window.removeEventListener("mouseup", stopPanelResize);
        };
    }, [handlePanelResize, isResizingPanel, stopPanelResize]);

    const addCollection = () => {
        if (onAddCollection(newCollection)) {
            setNewCollection("");
        }
    };

    const removeCollection = (collectionId) => {
        onRemoveCollection(collectionId);
        setPendingDeleteId(null);
    };

    const onImportFileClick = () => {
        importInputRef.current?.click();
    };

    const onImportFileChange = async (e) => {
        const file = e.target.files?.[0];
        if (!file) {
            return;
        }

        try {
            const text = await file.text();
            onImportCollection(text);
        } finally {
            e.target.value = "";
        }
    };

    return (
        <aside
            ref={panelRef} className={styles.collectionsAside}
            style={{
                width: `${panelWidth}px`, maxWidth: `calc(100% - ${PANEL_WIDTH.gap}px)`, transition: isResizingPanel ? "none" : "width 0.12s ease",
            }} >
            <h2 className={styles.collectionsTitle}>Collections</h2>
            {collectionsPaneMessage && (
                <div className={`${styles.collectionsPaneMessage} ${collectionsPaneMessage === "Collection name cannot be empty." ? styles.collectionsPaneMessageError : ""}`}>
                    {collectionsPaneMessage}
                </div>
            )}

            <div className={styles.collectionsInputRow}>
                <input type="text" value={newCollection} onChange={(e) => setNewCollection(e.target.value)}
                    placeholder="New collection name" className={styles.collectionsInput} />
                <button type="button" onClick={addCollection} className={styles.collectionsActionBtn} disabled={!newCollection.trim()}>
                    Add
                </button>
                <button type="button" onClick={onImportFileClick} className={styles.collectionsActionBtn}>
                    Import Collection
                </button>
                <input ref={importInputRef} type="file" accept="application/json,.json"
                    onChange={onImportFileChange} className={styles.collectionsHiddenInput} />
            </div>

            <div className={styles.collectionsListWrap}>
                <ul className={styles.collectionsList}>
                    {collections.map((collection, index) => (
                        <li key={collection.id}
                            className={`${styles.collectionItem} ${index === collections.length - 1 ? styles.collectionItemLast : ""}`} >
                            <button type="button" onClick={() => onToggleCollection(collection.id)}
                                className={styles.collectionButton} >
                                <span className={`${styles.collectionCaret} ${expandedCollectionIds.includes(collection.id) ? styles.collectionCaretExpanded : ""}`}>
                                    &gt;
                                </span>
                                <span className={styles.collectionLabel}>{collection.name}</span>
                                <span className={styles.collectionCount}>{collection.requests.length}</span>
                            </button>

                            <div className={styles.collectionActions}>
                                {savedCollectionNoticeId === collection.id && (
                                    <span className={styles.collectionSavedBadge}>Saved</span>)}
                                <button type="button" onClick={() => setPendingDeleteId(collection.id)}
                                    aria-label={`Delete ${collection.name}`} className={styles.collectionIconBtn} >
                                    <img src="/assets/trash.svg" alt="" width={16} height={16} aria-hidden="true" />
                                </button>
                            </div>

                            {expandedCollectionIds.includes(collection.id) && (
                                <div className={styles.requestList}>
                                    {collection.requests.length > 0 ? (
                                        collection.requests.map((request) => (
                                            <button key={request.id} type="button"
                                                onClick={() => onOpenRequest(collection.id, request.id)} className={styles.requestItem} >
                                                <span className={styles.requestMethod}>{request.method}</span>
                                                <span className={styles.requestName}>{request.name}</span>
                                            </button>
                                        ))
                                    ) : (
                                        <div className={styles.collectionEmpty}>No saved requests yet.</div>
                                    )}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {pendingDeleteId !== null && (
                <div className={styles.overlay}>
                    <div className={styles.modal}>
                        <div className={styles.modalTitle}>Delete Collection?</div>
                        <div className={styles.modalText}>
                            Are you sure you want to delete {" "}
                            <strong>{collections.find((collection) => collection.id === pendingDeleteId)?.name}</strong>
                            ?. This action cannot be undone.
                        </div>
                        <div className={styles.modalActions}>
                            <button type="button" onClick={() => setPendingDeleteId(null)} className={styles.modalCancel} >
                                Cancel
                            </button>
                            <button type="button" onClick={() => removeCollection(pendingDeleteId)} className={styles.modalDelete} >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {pendingImportConflict && (
                <div className={styles.overlay}>
                    <div className={styles.modal}>
                        <div className={styles.modalTitle}>Collection Already Exists</div>
                        <div className={styles.modalText}>
                            {pendingImportConflict.existingCollectionName} already exists. Do you want to import as a copy or replace the existing collection?
                        </div>
                        <div className={styles.modalActions}>
                            <button type="button" onClick={onCancelImportConflict} className={`${styles.modalCancel} ${styles.modalCompactBtn}`}>
                                Cancel
                            </button>
                            <button type="button" onClick={onImportCollectionAsCopy} className={`${styles.modalPrimary} ${styles.modalCompactBtn}`}>
                                Import Copy
                            </button>
                            <button type="button" onClick={onReplaceCollectionWithImport} className={`${styles.modalDelete} ${styles.modalCompactBtn}`}>
                                Replace Existing
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div onMouseDown={startPanelResize} title="Drag to resize"
                className={`${styles.resizeHandle} ${isResizingPanel ? styles.resizeHandleActive : styles.resizeHandleIdle}`}
            />
        </aside>
    );
}