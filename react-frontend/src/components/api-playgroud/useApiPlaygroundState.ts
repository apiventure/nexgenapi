import { useEffect, useRef, useState } from "react";
import * as util from "./util";

// Centralizes API Playground UI state and exposes handlers used by the page and sidebar.
export function useApiPlaygroundState() {
    const timeOutRefs = useRef(null);
    const [collectionState, setCollectionState] = useState(() => {
        const initialCollections = util.createDefaultCollections();

        return {
            collections: initialCollections,
            expandedCollectionIds: initialCollections[0] ? [initialCollections[0].id] : [],
        };
    });
    const [method, setMethod] = useState(util.DEFAULT_REQUEST_METHOD);
    const [url, setUrl] = useState("");
    const [paramsRows, setParamsRows] = useState([]);
    const [headerRows, setHeaderRows] = useState([{ ...util.DEFAULT_HEADER_ROW }]);
    const [bodyInput, setBodyInput] = useState(util.DEFAULT_BODY_INPUT);
    const [activeTab, setActiveTab] = useState(util.DEFAULT_ACTIVE_TAB);
    const [importCurlText, setImportCurlText] = useState("");
    const [importMessage, setImportMessage] = useState("");
    const [copyMessage, setCopyMessage] = useState("");
    const [saveMessage, setSaveMessage] = useState("");
    const [isSaveDialogOpen, setIsSaveDialogOpen] = useState(false);
    const [saveCollectionName, setSaveCollectionName] = useState("");
    const [saveRequestName, setSaveRequestName] = useState("");
    const [savedCollectionNoticeId] = useState("");
    const [collectionsPaneMessage, setCollectionsPaneMessage] = useState("");
    const [pendingImportConflict, setPendingImportConflict] = useState(null);
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [responsePreview, setResponsePreview] = useState(util.RESPONSE_PREVIEW_TEXT);
    const [responseStatus, setResponseStatus] = useState<number | null>(null);
    const [responseStatusText, setResponseStatusText] = useState("");
    const [responseHeaders, setResponseHeaders] = useState<Record<string, string>>({});
    const [responseTime, setResponseTime] = useState<number | null>(null);
    const canSendBody = method !== "GET" && method !== "DELETE";

    const { collections, expandedCollectionIds } = collectionState;

    const updateCollectionStateField = (field, updater) => {
        setCollectionState((prev) => ({
            ...prev,
            [field]: typeof updater === "function" ? updater(prev[field]) : updater,
        }));
    };

    // Updates only the collections array while preserving other collection-related state.
    const setCollections = (updater) => {
        updateCollectionStateField("collections", updater);
    };

    // Updates only expanded collection ids while preserving the collection list.
    const setExpandedCollectionIds = (updater) => {
        updateCollectionStateField("expandedCollectionIds", updater);
    };

    useEffect(() => () => {
        window.clearTimeout(timeOutRefs.current);
    }, []);

    const setResetRequestState = (state, request) => {
        setMethod(state == "new" ? util.DEFAULT_REQUEST_METHOD : request.method || util.DEFAULT_REQUEST_METHOD);
        setUrl(state == "new" ? "" : request.url || "");
        setParamsRows(state == "new" ? [] : util.cloneRows(request.paramsRows || []));
        setHeaderRows(state == "new" ? [{ ...util.DEFAULT_HEADER_ROW }] : request.headerRows && request.headerRows.length > 0 ? util.cloneRows(request.headerRows) : [{ ...util.DEFAULT_HEADER_ROW }]);
        setBodyInput(state == "new" ? util.DEFAULT_BODY_INPUT : request.bodyInput || util.DEFAULT_BODY_INPUT);
        setImportCurlText("");
        setImportMessage("");
        setCopyMessage("");
        setSaveMessage("");
        setShowSuccessToast(false);
        setResponsePreview(util.RESPONSE_PREVIEW_TEXT);
        setResponseStatus(null);
        setResponseStatusText("");
        setResponseHeaders({});
        setResponseTime(null);
        setActiveTab(state == "new" ? util.DEFAULT_ACTIVE_TAB : request.activeTab || util.DEFAULT_ACTIVE_TAB);
    };

    // Sets a message via the given setter and auto-clears it after a timeout.
    const queueTransientMessage = (setter, message) => {
        setter(message);
        window.clearTimeout(timeOutRefs.current);
        timeOutRefs.current = window.setTimeout(() => {
            setter("");
        }, util.SAVE_MESSAGE_DURATION_MS);
    };

    const queueSaveMessage = (message) => queueTransientMessage(setSaveMessage, message);
    const queueCollectionsPaneMessage = (message) => queueTransientMessage(setCollectionsPaneMessage, message);

    // Close or open the save dialog. If opening, also reset the input fields and validate URL presence.
    const toggleSaveDialog = (toggleType) => {
        setSaveCollectionName("");
        setSaveRequestName("");
        if (!url) {
            queueSaveMessage(util.SAVE_MESSAGE_INVALID_REQUEST);
            return;
        }
        if (toggleType === "close") {
            setIsSaveDialogOpen(false);
        } else {
            setIsSaveDialogOpen(true);
        }
    };

    // Finds a collection by name using case-insensitive comparison.
    const findCollectionByName = (name) => {
        const normalizedName = util.normalizeCollectionName(name);
        return collections.find(
            (collection) => util.normalizeCollectionName(collection.name) === normalizedName
        );
    };

    const buildUniqueCollectionCopyName = (baseName) => {
        const trimmedBaseName = String(baseName ?? "").trim() || "Imported Collection";
        const candidateName = `${trimmedBaseName} Copy`;

        if (!findCollectionByName(candidateName)) {
            return candidateName;
        }

        let suffix = 2;
        let nextName = `${candidateName} (${suffix})`;
        while (findCollectionByName(nextName)) {
            suffix += 1;
            nextName = `${candidateName} (${suffix})`;
        }

        return nextName;
    };

    // Expands or collapses a collection node in the sidebar tree.
    const toggleCollectionExpanded = (collectionId) => {
        setExpandedCollectionIds((prev) => (
            prev.includes(collectionId)
                ? prev.filter((id) => id !== collectionId)
                : [...prev, collectionId]
        ));
    };

    // Removes a collection and its saved requests from state.
    const removeCollection = (collectionId) => {
        setCollections((prev) => prev.filter((collection) => collection.id !== collectionId));
        setExpandedCollectionIds((prev) => prev.filter((id) => id !== collectionId));
        queueCollectionsPaneMessage("Collection deleted.");
    };

    // Creates a new collection when the name is valid and not already present.
    const addCollection = (name) => {
        const trimmedName = String(name ?? "").trim();
        
        const existingCollection = findCollectionByName(trimmedName);

        if (existingCollection) {
            setExpandedCollectionIds((prev) => (
                prev.includes(existingCollection.id) ? prev : [...prev, existingCollection.id]
            ));
            queueCollectionsPaneMessage(`${existingCollection.name} already exists.`);
            return false;
        }

        const nextCollection = util.createCollection(trimmedName);
        setCollections((prev) => [...prev, nextCollection]);
        setExpandedCollectionIds((prev) => [...prev, nextCollection.id]);
        queueCollectionsPaneMessage(`Added Collection ${trimmedName}.`);
        return true;
    };

    const cancelImportConflict = () => {
        setPendingImportConflict(null);
    };

    const importCollection = (rawText) => {
        try {
            const { collectionName, requests } = util.parseImportedCollection(rawText);
            const existingCollection = findCollectionByName(collectionName);
            if (existingCollection) {
                setPendingImportConflict({
                    existingCollectionId: existingCollection.id,
                    existingCollectionName: existingCollection.name,
                    importedCollectionName: collectionName,
                    requests,
                });
                return false;
            } else {
                const importedCollection = util.createCollection(collectionName);
                setCollections((prev) => [...prev, { ...importedCollection, requests }]);
                setExpandedCollectionIds((prev) => (
                    importedCollection.id && !prev.includes(importedCollection.id)
                        ? [...prev, importedCollection.id]
                        : prev
                ));
                queueCollectionsPaneMessage(`Imported ${requests.length} request(s) into ${importedCollection.name}.`);
                return true;
            }
        } catch (err) {
            queueCollectionsPaneMessage(err instanceof Error ? err.message : "Collection import failed.");
            return false;
        }
    };

    const importCollectionAsCopy = () => {
        if (!pendingImportConflict) {
            return false;
        }

        const copyCollectionName = buildUniqueCollectionCopyName(
            pendingImportConflict.importedCollectionName || pendingImportConflict.existingCollectionName
        );
        const copiedCollection = util.createCollection(copyCollectionName);
        const copiedRequests = pendingImportConflict.requests;

        setCollections((prev) => [...prev, { ...copiedCollection, requests: copiedRequests }]);
        setExpandedCollectionIds((prev) => (
            copiedCollection.id && !prev.includes(copiedCollection.id)
                ? [...prev, copiedCollection.id]
                : prev
        ));
        queueCollectionsPaneMessage(`Imported ${copiedRequests.length} request(s) into ${copyCollectionName}.`);
        setPendingImportConflict(null);
        return true;
    };

    const replaceExistingCollectionWithImport = () => {
        if (!pendingImportConflict) {
            return false;
        }

        const { existingCollectionId, existingCollectionName, requests } = pendingImportConflict;
        setCollections((prev) => prev.map((collection) => (
            collection.id === existingCollectionId
                ? { ...collection, requests }
                : collection
        )));
        setExpandedCollectionIds((prev) => (
            existingCollectionId && !prev.includes(existingCollectionId)
                ? [...prev, existingCollectionId]
                : prev
        ));
        queueCollectionsPaneMessage(`Replaced ${existingCollectionName} with ${requests.length} imported request(s).`);
        setPendingImportConflict(null);
        return true;
    };

    // Saves the current request into an existing or newly created collection.
    const saveRequestToCollection = () => {
        const trimmedName = String(saveCollectionName ?? "").trim();
        if (!trimmedName) {
            queueSaveMessage(util.SAVE_MESSAGE_SELECT_COLLECTION);
            return false;
        }

        const request = util.createSavedRequest({
            method, url, paramsRows, headerRows, bodyInput, activeTab, requestName: saveRequestName,
        });
        const existingCollection = findCollectionByName(trimmedName);
        let savedCollectionName = trimmedName;
        let targetCollectionId = "";

        if (existingCollection) {
            savedCollectionName = existingCollection.name;
            targetCollectionId = existingCollection.id;
            setCollections((prev) => prev.map((collection) => (
                collection.id === existingCollection.id
                    ? { ...collection, requests: [...collection.requests, request] }
                    : collection
            )));
        } else {
            const nextCollection = util.createCollection(trimmedName);
            savedCollectionName = nextCollection.name;
            targetCollectionId = nextCollection.id;
            setCollections((prev) => [...prev, { ...nextCollection, requests: [request] }]);
        }

        setExpandedCollectionIds((prev) => (
            targetCollectionId && !prev.includes(targetCollectionId)
                ? [...prev, targetCollectionId]
                : prev
        ));
        toggleSaveDialog("close");
        queueCollectionsPaneMessage(`Saved request to ${savedCollectionName}.`);
        return true;
    };

    // Opens a saved request from a collection into the request editor.
    const openSavedRequest = (collectionId, requestId) => {
        const collection = collections.find((item) => item.id === collectionId);
        const request = collection?.requests.find((item) => item.id === requestId);
        if (!request) {
            return;
        }

        setResetRequestState("existing", request);
        setExpandedCollectionIds((prev) => (
            prev.includes(collectionId) ? prev : [...prev, collectionId]
        ));
        queueCollectionsPaneMessage(`Opened ${request.name}.`);
    };

    const mapRowKeyValue = (rows, target) => {
        rows.forEach((row) => {
            if (row.enabled && row.key && row.value) {
                target[row.key] = row.value;
            }
        });
    };

    // Builds the backend payload from current method, URL, headers, params, and body.
    const buildApiExecuteJson = () => {
        const headers = {};
        const queryParams = {};
        mapRowKeyValue(headerRows, headers);
        mapRowKeyValue(paramsRows, queryParams);

        let body = null;
        if (bodyInput && bodyInput.trim() !== "" && bodyInput.trim() !== "{}") {
            try {
                body = JSON.parse(bodyInput);
            } catch {
                body = bodyInput;
            }
        }
        return { method, url, headers, queryParams, body };
    };

    return {
        collections, expandedCollectionIds, method, setMethod, url, setUrl, paramsRows, setParamsRows, headerRows, setHeaderRows,
        bodyInput, setBodyInput, activeTab, setActiveTab, importCurlText, setImportCurlText, importMessage, setImportMessage,
        copyMessage, setCopyMessage, saveMessage, isSaveDialogOpen, saveCollectionName, setSaveCollectionName, saveRequestName,
        setSaveRequestName, savedCollectionNoticeId, collectionsPaneMessage, pendingImportConflict, showSuccessToast,
        setShowSuccessToast, responsePreview, setResponsePreview, responseStatus, setResponseStatus, responseStatusText,
        setResponseStatusText, responseHeaders, setResponseHeaders, responseTime, setResponseTime, canSendBody,
        toggleSaveDialog, saveRequestToCollection, toggleCollectionExpanded, addCollection, importCollection,
        cancelImportConflict, importCollectionAsCopy, replaceExistingCollectionWithImport, removeCollection,
        openSavedRequest, setResetRequestState, buildApiExecuteJson,
    };
}