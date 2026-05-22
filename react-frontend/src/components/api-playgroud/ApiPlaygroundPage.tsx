import { useState, useEffect, useRef } from "react";
import CollectionsPane from "../collectionsPane/CollectionsPane";
import { handleImportCurl } from "./importCurl";
import * as buildCurl from "./buildCurl";
import * as util from "./util";
import { useApiPlaygroundState } from "./useApiPlaygroundState";
import styles from "./apiPlayground.module.css";
import * as springCall from "../springAPIBackEndCalls/springApiCalls";
import { usePlaygroundAgent } from "../chatbot/PlaygroundAgentContext";
import { shouldInterceptUrl, getMockInterceptResponse } from "../chatbot/chatbotService";

export default function ApiPlaygroundView() {
    const { collections, expandedCollectionIds, method, setMethod, url, setUrl, paramsRows, setParamsRows, headerRows,
        setHeaderRows, bodyInput, setBodyInput, activeTab, setActiveTab, importCurlText, setImportCurlText, importMessage,
        setImportMessage, copyMessage, setCopyMessage, saveMessage, isSaveDialogOpen, saveCollectionName, setSaveCollectionName,
        saveRequestName, setSaveRequestName, savedCollectionNoticeId, collectionsPaneMessage, pendingImportConflict,
        showSuccessToast, setShowSuccessToast, responsePreview, setResponsePreview, responseStatus, setResponseStatus,
        responseStatusText, setResponseStatusText, responseHeaders, setResponseHeaders, responseTime, setResponseTime,
        canSendBody, toggleSaveDialog, saveRequestToCollection, toggleCollectionExpanded, addCollection, importCollection,
        cancelImportConflict, importCollectionAsCopy, replaceExistingCollectionWithImport, removeCollection, openSavedRequest,
        setResetRequestState, buildApiExecuteJson } = useApiPlaygroundState();

    const [responseTab, setResponseTab] = useState<"Body" | "Headers">("Body");
    const [bodyJsonError, setBodyJsonError] = useState("");

    // ── Register playground actions for the chatbot agent ──
    const { register } = usePlaygroundAgent();
    const bodyInputRef = useRef(bodyInput);
    const urlRef = useRef(url);
    bodyInputRef.current = bodyInput;
    urlRef.current = url;

    useEffect(() => {
        register({
            setUrl,
            setMethod,
            setBodyInput,
            getBodyInput: () => bodyInputRef.current,
            getUrl: () => urlRef.current,
            triggerSend: () => {/* not used directly; responses are pushed */},
            setResponse: (preview, status, statusText, headers, time) => {
                setResponsePreview(preview);
                setResponseStatus(status);
                setResponseStatusText(statusText);
                setResponseHeaders(headers);
                setResponseTime(time);
            },
        });
        return () => register(null as any);
    }, []);
    // ── End agent registration ──

    const { requestUrlPreview } = buildCurl.buildRequestUrlPreview({ paramsRows, url });
    const isInvalidSaveMessage = saveMessage === util.SAVE_MESSAGE_INVALID_REQUEST;
    const isSelectCollectionMessage = saveMessage === util.SAVE_MESSAGE_SELECT_COLLECTION;
    const { curlCommand } = buildCurl.buildCurlParts({ headerRows, canSendBody, bodyInput, method, requestUrlPreview });

    const onImportCurlClick = () => {
        handleImportCurl({
            importCurlText, setUrl, setParamsRows, setHeaderRows, setBodyInput, setMethod, setImportCurlText,
            setImportMessage, setShowSuccessToast, setActiveTab
        });
    };

    const onCopyCurlClick = () => {
        buildCurl.onCopyCurlClick({ curlCommand, setCopyMessage });
    };

    const onNewClick = () => {
        setResetRequestState("new", {});
    };

    const onSendClick = async () => {
        onSending({ body: { message: "Loading..." }, status: null, statusText: "", headers: {}, executionTimeMs: null });
        setResponseTab("Body");

        // Intercept hardcoded mock URLs with a realistic delay
        if (shouldInterceptUrl(url)) {
            setTimeout(() => {
                const mock = getMockInterceptResponse(bodyInput);
                onSending(mock);
            }, 800);
            return;
        }

        try {
            const result = await springCall.executeCurlRequest(buildApiExecuteJson());
            onSending(result);
        } catch (err) {
            onSending({ body: { error: err.message }, status: null, statusText: "", headers: {}, executionTimeMs: null });
        }
    };

    const onSending = (result) => {
        setResponsePreview(typeof result.body === "object" ? JSON.stringify(result.body, null, 2) : String(result.body));
        setResponseStatus(result?.status ?? null);
        setResponseStatusText(result?.statusText ?? "");
        setResponseHeaders(result?.headers ?? {});
        setResponseTime(result?.executionTimeMs ?? null);
    };

    return (
        <main className={styles.main} style={{ fontFamily: util.APP_FONT }}>
            {showSuccessToast && (
                <div className={styles.toast}>
                    Imported cURL successfully.
                </div>
            )}

            <div className={styles.layout}>
                <CollectionsPane collections={collections} expandedCollectionIds={expandedCollectionIds}
                    savedCollectionNoticeId={savedCollectionNoticeId} collectionsPaneMessage={collectionsPaneMessage}
                    onToggleCollection={toggleCollectionExpanded} onOpenRequest={openSavedRequest}
                    onAddCollection={addCollection} onImportCollection={importCollection}
                    pendingImportConflict={pendingImportConflict} onCancelImportConflict={cancelImportConflict}
                    onImportCollectionAsCopy={importCollectionAsCopy}
                    onReplaceCollectionWithImport={replaceExistingCollectionWithImport}
                    onRemoveCollection={removeCollection} />

                <section className={styles.section}>

                    <div className={styles.requestRow}>
                        <select value={method} onChange={(e) => setMethod(e.target.value)} className={styles.methodSelect} >
                            {util.HTTP_METHODS.map((httpMethod) => (
                                <option key={httpMethod} value={httpMethod}>
                                    {httpMethod}
                                </option>
                            ))}
                        </select>

                        <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter request URL"
                            className={styles.urlInput} />
                        <button type="button" onClick={onSendClick} className={styles.primaryBtn} >Send</button>
                        <button type="button" onClick={onNewClick} className={styles.primaryBtn} >Cancel</button>
                    </div>

                    <div className={styles.requestUrlPreview}> Request URL: {requestUrlPreview} </div>

                    <div className={styles.tabsRow}>
                        {util.REQUEST_TABS.map((tab) => {
                            const isActive = activeTab === tab;
                            return (
                                <button key={tab} type="button" onClick={() => setActiveTab(tab)}
                                    className={`${styles.tabButton} ${isActive ? styles.tabButtonActive : styles.tabButtonInactive}`} >
                                    {tab}
                                </button>
                            );
                        })}

                        <div className={styles.rightActions}>
                            <button type="button" onClick={onNewClick} className={styles.secondaryBtn} >
                                New
                            </button>
                            <button type="button" onClick={() => toggleSaveDialog("open")} className={styles.secondaryBtn} >
                                Save to Collection
                            </button>
                            {saveMessage && isInvalidSaveMessage && (
                                <span className={`${styles.saveStatus} ${isInvalidSaveMessage ? styles.saveStatusError : ""}`}>
                                    {saveMessage}
                                </span>
                            )}
                        </div>
                    </div>

                    {activeTab === "Params" && (
                        <div className={styles.tabPanel}>
                            <div className={styles.dataCard}>
                                <div className={styles.tableHeaderRow} style={{ gridTemplateColumns: util.TABLE_COLUMNS }}>
                                    <div className={styles.tableHeaderCell}>On</div>
                                    <div className={styles.tableHeaderCell}>Key</div>
                                    <div className={styles.tableHeaderCell}>Value</div>
                                    <div className={styles.tableHeaderCell}>Description</div>
                                    <div className={styles.tableHeaderCell} />
                                </div>

                                <div className={styles.tableBody}>
                                    {paramsRows.map((row, rowIndex) => (
                                        <div key={`param-${rowIndex}`} className={styles.tableDataRow} style={{ gridTemplateColumns: util.TABLE_COLUMNS }}>
                                            <div className={styles.tableCellPad}>
                                                <input type="checkbox" checked={row.enabled}
                                                    onChange={(e) => util.updateRow(setParamsRows, rowIndex, "enabled", e.target.checked)} />
                                            </div>
                                            <input value={row.key} onChange={(e) => util.updateRow(setParamsRows, rowIndex, "key", e.target.value)}
                                                className={styles.tableInput} />
                                            <input value={row.value} onChange={(e) => util.updateRow(setParamsRows, rowIndex, "value", e.target.value)}
                                                className={styles.tableInput} />
                                            <input value={row.description} onChange={(e) => util.updateRow(setParamsRows, rowIndex, "description", e.target.value)}
                                                className={styles.tableInput} />
                                            <button type="button" onClick={() => util.removeRow(setParamsRows, rowIndex)} className={styles.iconBtn} > x </button>
                                        </div>
                                    ))}
                                </div>

                                <button type="button" onClick={() => util.addRow(setParamsRows)} className={styles.addRowBtn} >
                                    + Add Param
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === "Headers" && (
                        <div className={styles.tabPanel}>
                            <div className={styles.dataCard}>
                                <div className={styles.tableHeaderRow} style={{ gridTemplateColumns: util.TABLE_COLUMNS }}>
                                    <div className={styles.tableHeaderCell}>On</div>
                                    <div className={styles.tableHeaderCell}>Key</div>
                                    <div className={styles.tableHeaderCell}>Value</div>
                                    <div className={styles.tableHeaderCell}>Description</div>
                                    <div className={styles.tableHeaderCell} />
                                </div>

                                <div className={styles.tableBody}>
                                    {headerRows.map((row, rowIndex) => (
                                        <div key={`header-${rowIndex}`} className={styles.tableDataRow} style={{ gridTemplateColumns: util.TABLE_COLUMNS }}>
                                            <div className={styles.tableCellPad}>
                                                <input type="checkbox" checked={row.enabled}
                                                    onChange={(e) => util.updateRow(setHeaderRows, rowIndex, "enabled", e.target.checked)} />
                                            </div>
                                            <input value={row.key} onChange={(e) => util.updateRow(setHeaderRows, rowIndex, "key", e.target.value)}
                                                className={styles.tableInput} />
                                            <input value={row.value} onChange={(e) => util.updateRow(setHeaderRows, rowIndex, "value", e.target.value)}
                                                className={styles.tableInput} />
                                            <input value={row.description} onChange={(e) => util.updateRow(setHeaderRows, rowIndex, "description", e.target.value)}
                                                className={styles.tableInput} />
                                            <button type="button" onClick={() => util.removeRow(setHeaderRows, rowIndex)}
                                                className={styles.iconBtn} > x </button>
                                        </div>
                                    ))}
                                </div>

                                <button type="button" onClick={() => util.addRow(setHeaderRows)} className={styles.addRowBtn} >
                                    + Add Header
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === "Body" && (
                        <div className={styles.textareaWrap}>
                            <textarea
                                value={bodyInput}
                                onChange={(e) => { setBodyInput(e.target.value); setBodyJsonError(util.validateBodyJson(e.target.value, canSendBody)); }}
                                onBlur={() => { const formatted = util.formatJson(bodyInput); setBodyInput(formatted); setBodyJsonError(util.validateBodyJson(formatted, canSendBody)); }}
                                disabled={!canSendBody}
                                className={`${styles.textarea} ${canSendBody ? (bodyJsonError ? styles.textareaInvalid : styles.textareaEnabled) : styles.textareaDisabled}`} />
                            {bodyJsonError && <span className={styles.bodyJsonError}>{bodyJsonError}</span>}
                        </div>
                    )}

                    {activeTab === "cURL" && (
                        <div className={styles.curlWrap}>
                            <div className={styles.curlRelative}>
                                <button type="button" onClick={onCopyCurlClick} className={styles.copyBtn}
                                    aria-label="Copy cURL" title="Copy cURL" >
                                    <img src="/assets/copy.svg" alt="" width={16} height={16} aria-hidden="true" />
                                </button>
                                {copyMessage && (
                                    <span className={styles.copyMessage}>
                                        {copyMessage}
                                    </span>
                                )}

                                <textarea value={curlCommand} readOnly className={`${styles.textarea} ${styles.textareaReadOnly}`} />
                            </div>
                        </div>
                    )}

                    {activeTab === "Import cURL" && (
                        <div className={styles.importPanel}>
                            <textarea value={importCurlText} onChange={(e) => setImportCurlText(e.target.value)}
                                placeholder="Paste cURL here..." className={`${styles.textarea} ${styles.textareaEnabled}`} />

                            <div className={styles.importActions}>
                                <button type="button" onClick={onImportCurlClick} className={styles.primaryBtn} >
                                    Import to Request
                                </button>

                                <span className={styles.importStatus}>{importMessage}</span>
                            </div>
                        </div>
                    )}

                    <div className={styles.responseSection}>
                        <div className={styles.responseMeta}>
                            <span className={styles.responseTitle}>Response</span>
                            {responseStatus !== null && (
                                <span className={`${styles.responseStatusBadge} ${responseStatus >= 200 && responseStatus < 300 ? styles.responseStatusOk : responseStatus >= 400 ? styles.responseStatusErr : styles.responseStatusWarn}`}>
                                    {responseStatus}{responseStatusText ? ` ${responseStatusText}` : ""}
                                </span>
                            )}
                            {responseTime !== null && (
                                <span className={styles.responseTimeBadge}>{responseTime} ms</span>
                            )}
                            <div className={styles.responseTabsRight}>
                                {(["Body", "Headers"] as const).map((tab) => (
                                    <button key={tab} type="button"
                                        onClick={() => setResponseTab(tab)}
                                        className={`${styles.responseTabBtn} ${responseTab === tab ? styles.responseTabBtnActive : styles.responseTabBtnInactive}`}>
                                        {tab}{tab === "Headers" && Object.keys(responseHeaders).length > 0 && (
                                            <span className={styles.responseHeaderCount}>{Object.keys(responseHeaders).length}</span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {responseTab === "Body" && (
                            <textarea value={responsePreview} readOnly className={styles.responseText} />
                        )}

                        {responseTab === "Headers" && (
                            <div className={styles.responseHeadersTable}>
                                {Object.keys(responseHeaders).length === 0 ? (
                                    <div className={styles.responseHeadersEmpty}>No headers received.</div>
                                ) : (
                                    Object.entries(responseHeaders).map(([key, value]) => (
                                        <div key={key} className={styles.responseHeaderRow}>
                                            <span className={styles.responseHeaderKey}>{key}</span>
                                            <span className={styles.responseHeaderValue}>{value}</span>
                                        </div>
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                </section>
            </div>

            {isSaveDialogOpen && (
                <div className={styles.overlay}>
                    <div className={styles.modal}>
                        <div className={styles.modalTitle}>Save Request</div>
                        <div className={styles.modalText}>
                            Select a collection and optionally define a request name. If left blank, a default name "(method/endpoint)" is used.
                        </div>
                        <input value={saveRequestName} onChange={(e) => setSaveRequestName(e.target.value)}
                            placeholder="Request name (optional)" className={styles.modalInput} />
                        <select value={saveCollectionName} onChange={(e) => setSaveCollectionName(e.target.value)}
                            className={styles.modalInput} >
                            <option value="">Select collection</option>
                            {collections.map((collection) => (
                                <option key={collection.id} value={collection.name}>
                                    {collection.name}
                                </option>
                            ))}
                        </select>
                        {isSelectCollectionMessage && (
                            <div className={styles.modalError}>{saveMessage}</div>
                        )}
                        <div className={styles.modalActions}>
                            <button type="button" onClick={() => toggleSaveDialog("close")}
                                className={styles.modalCancel} >
                                Cancel
                            </button>
                            <button type="button" onClick={saveRequestToCollection}
                                className={styles.modalPrimary} >
                                Save Request
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}