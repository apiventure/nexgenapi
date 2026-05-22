export const HTTP_METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE"];
export const APP_FONT = '"Avenir Next", "Segoe UI", sans-serif';
export const REQUEST_TABS = ["Params", "Headers", "Body", "cURL", "Import cURL"];
export const TABLE_COLUMNS = "44px 1fr 1fr 1fr 46px";
export const DEFAULT_REQUEST_METHOD = "GET";
export const DEFAULT_BODY_INPUT = "{}";
export const DEFAULT_ACTIVE_TAB = "Params";

export const DEFAULT_HEADER_ROW = {
    enabled: true,
    key: "Content-Type",
    value: "application/json",
    description: "",
};

export const RESPONSE_PREVIEW_TEXT =
    '{"message": "Response will appear here after you connect request execution."}';

export const COPY_MESSAGE_DURATION_MS = 1500;
export const IMPORT_TOAST_DURATION_MS = 2500;
export const SAVE_MESSAGE_DURATION_MS = 2500;
export const SAVE_MESSAGE_INVALID_REQUEST = "Invalid Request. Validate before saving.";
export const SAVE_MESSAGE_SELECT_COLLECTION = "Select a collection.";

export const DEFAULT_COLLECTIONS = [];

export const PANEL_WIDTH = {
    initial: 360,
    min: 240,
    preferredMin: 320,
    max: 720,
    contentReserve: 220,
    gap: 14,
};

// Removes a row from a row-based state array by index.
export const removeRow = (setter, rowIndex) => {
    setter((prev) => prev.filter((_, index) => index !== rowIndex));
};

// Appends a new empty row to a row-based state array.
export const addRow = (setter) => {
    setter((prev) => [...prev, createEmptyRow()]);
};

// Updates one field of a specific row in a row-based state array.
export const updateRow = (setter, rowIndex, field, fieldValue) => {
    setter((prev) => prev.map((row, index) => (index === rowIndex ? { ...row, [field]: fieldValue } : row)));
};

// Creates a blank row object used by Params/Headers tables.
export function createEmptyRow() {
    return { enabled: true, key: "", value: "", description: "" };
}

// Creates a new collection model with a generated unique id.
export function createCollection(name) {
    return {
        id: `collection-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        name,
        requests: [],
    };
}

// Builds the initial collection list from default collection names.
export function createDefaultCollections() {
    return DEFAULT_COLLECTIONS.map((name) => createCollection(name));
}

// Normalizes a collection name for case-insensitive comparisons.
export function normalizeCollectionName(name) {
    return String(name ?? "").trim().toLowerCase();
}

// Generates a readable request label using method and URL/path.
export function createRequestName(method, url) {
    const trimmedUrl = String(url ?? "").trim();
    if (!trimmedUrl) {
        return `${method} Request`;
    }

    try {
        const parsedUrl = new URL(trimmedUrl);
        const pathName = parsedUrl.pathname || "/";
        return `${method} ${pathName}`;
    } catch {
        return `${method} ${trimmedUrl}`;
    }
}

// Creates a shallow clone of each row object in a row array.
export function cloneRows(rows) {
    return rows.map((row) => ({ ...row }));
}

// Captures the current request editor state as a storable saved request snapshot.
export function createSavedRequest({ method, url, paramsRows, headerRows, bodyInput, activeTab, requestName }) {
    const trimmedRequestName = String(requestName ?? "").trim();

    return {
        id: `request-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        name: trimmedRequestName || createRequestName(method, url),
        method,
        url,
        paramsRows: cloneRows(paramsRows),
        headerRows: cloneRows(headerRows),
        bodyInput,
        activeTab,
    };
}

// Validates that a body string is valid JSON when the method supports a body.
export function validateBodyJson(value: string, canSendBody: boolean): string {
    if (!canSendBody || !value.trim() || value.trim() === "{}") {
        return "";
    }
    try {
        JSON.parse(value);
        return "";
    } catch {
        return "Invalid JSON — please fix before sending.";
    }
}

// Escapes single quotes so values can be safely embedded in single-quoted shell strings.
export function escapeSingleQuotes(value) {
    return String(value).replace(/'/g, "'\\''");
}

// Pretty-prints valid JSON; returns original input when parsing fails.
export function formatJson(value) {
    const text = String(value ?? "").trim();
    if (!text) return "{}";

    try {
        return JSON.stringify(JSON.parse(text), null, 2);
    } catch {
        return value;
    }
}

function parseUrl(rawUrl) {
    const trimmed = String(rawUrl ?? "").trim();
    if (!trimmed) {
        return { url: "", paramsRows: [] };
    }

    try {
        const parsed = new URL(trimmed);
        const paramsRows = Array.from(parsed.searchParams.entries()).map(([key, value]) => ({
            enabled: true,
            key,
            value,
            description: "",
        }));

        return {
            url: `${parsed.origin}${parsed.pathname}`,
            paramsRows,
        };
    } catch {
        return { url: trimmed, paramsRows: [] };
    }
}

function normalizeImportedCollectionUrl(importedCollectionUrl) {
    if (typeof importedCollectionUrl === "string") {
        return importedCollectionUrl;
    }

    if (importedCollectionUrl?.raw) {
        return String(importedCollectionUrl.raw);
    }

    const protocol = importedCollectionUrl?.protocol ? `${importedCollectionUrl.protocol}://` : "";
    const host = Array.isArray(importedCollectionUrl?.host)
        ? importedCollectionUrl.host.join(".")
        : String(importedCollectionUrl?.host ?? "");
    const path = Array.isArray(importedCollectionUrl?.path)
        ? `/${importedCollectionUrl.path.join("/")}`
        : importedCollectionUrl?.path
            ? `/${importedCollectionUrl.path}`
            : "";

    return `${protocol}${host}${path}`;
}

function normalizeImportedCollectionBody(body) {
    if (!body) {
        return DEFAULT_BODY_INPUT;
    }

    if (body.mode === "raw") {
        return formatJson(String(body.raw ?? DEFAULT_BODY_INPUT));
    }

    if (body.mode === "urlencoded" && Array.isArray(body.urlencoded)) {
        const payload = Object.fromEntries(
            body.urlencoded
                .filter((entry) => !entry.disabled)
                .map((entry) => [entry.key, entry.value ?? ""])
        );
        return formatJson(JSON.stringify(payload));
    }

    if (body.mode === "formdata" && Array.isArray(body.formdata)) {
        const payload = Object.fromEntries(
            body.formdata
                .filter((entry) => !entry.disabled)
                .map((entry) => [entry.key, entry.value ?? ""])
        );
        return formatJson(JSON.stringify(payload));
    }

    return DEFAULT_BODY_INPUT;
}

function toHeaderRows(headerEntries) {
    if (!Array.isArray(headerEntries) || headerEntries.length === 0) {
        return [{ ...DEFAULT_HEADER_ROW }];
    }

    const rows = headerEntries
        .filter((entry) => entry?.key && !entry.disabled)
        .map((entry) => ({
            enabled: true,
            key: String(entry.key),
            value: String(entry.value ?? ""),
            description: "",
        }));

    return rows.length > 0 ? rows : [{ ...DEFAULT_HEADER_ROW }];
}

function flattenImportedCollectionItems(items, bucket) {
    (items ?? []).forEach((item) => {
        if (Array.isArray(item?.item) && item.item.length > 0) {
            flattenImportedCollectionItems(item.item, bucket);
            return;
        }

        if (item?.request) {
            bucket.push(item);
        }
    });
}

export function parseImportedCollection(rawText) {
    let parsed;
    try {
        parsed = JSON.parse(String(rawText ?? ""));
    } catch {
        throw new Error("Invalid JSON file.");
    }

    if (!Array.isArray(parsed?.item)) {
        throw new Error("Invalid Imported collection format.");
    }

    const collectionName = String(parsed?.info?.name ?? "Imported Collection").trim() || "Imported Collection";
    const importedCollectionRequests = [];
    flattenImportedCollectionItems(parsed.item, importedCollectionRequests);

    if (importedCollectionRequests.length === 0) {
        throw new Error("No requests found in the imported collection.");
    }

    const requests = importedCollectionRequests.map((entry) => {
        const method = String(entry?.request?.method ?? DEFAULT_REQUEST_METHOD).toUpperCase();
        const normalizedMethod = HTTP_METHODS.includes(method) ? method : DEFAULT_REQUEST_METHOD;
        const rawUrl = normalizeImportedCollectionUrl(entry?.request?.url);
        const { url, paramsRows } = parseUrl(rawUrl);
        const headerRows = toHeaderRows(entry?.request?.header);
        const bodyInput = normalizeImportedCollectionBody(entry?.request?.body);
        const requestName = String(entry?.name ?? "").trim() || createRequestName(normalizedMethod, url);

        return createSavedRequest({
            method: normalizedMethod,
            url,
            paramsRows,
            headerRows,
            bodyInput,
            activeTab: DEFAULT_ACTIVE_TAB,
            requestName,
        });
    });

    return {
        collectionName,
        requests,
    };
}