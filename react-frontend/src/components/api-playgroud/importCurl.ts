import * as util from "./util";
import { getMockOriginalBody, MOCK_URL } from "../chatbot/chatbotService";

function tokenizeCurlArgs(text) {
    const tokens = [];
    let current = "";
    let quoteChar = null;
    let isEscaping = false;

    for (let i = 0; i < text.length; i += 1) {
        const ch = text[i];

        if (isEscaping) {
            current += ch;
            isEscaping = false;
            continue;
        }

        if (ch === "\\" && quoteChar !== "'") {
            isEscaping = true;
            continue;
        }

        if (quoteChar) {
            if (ch === quoteChar) {
                quoteChar = null;
            } else {
                current += ch;
            }
            continue;
        }

        if (ch === "'" || ch === '"') {
            quoteChar = ch;
            continue;
        }

        if (/\s/.test(ch)) {
            if (current) {
                tokens.push(current);
                current = "";
            }
            continue;
        }

        current += ch;
    }

    if (current) tokens.push(current);
    return tokens;
}

function readTokenValue(token, nextToken) {
    const eqIndex = token.indexOf("=");
    if (eqIndex !== -1) {
        return { value: token.slice(eqIndex + 1), consumedNext: false };
    }
    return { value: nextToken || "", consumedNext: true };
}

export function parseAndImportCurl(rawCurlText) {
    const raw = String(rawCurlText ?? "").trim();
    const normalized = raw.replace(/\\\s*\r?\n/g, " ").trim();
    const tokens = tokenizeCurlArgs(normalized);
    const headersRows = [];
    const dataUrlEncodeParts = [];
    const dataParts = [];
    let baseUrl = "";
    let paramsRows = [];
    let parsedMethod = "";
    let parsedUrl = "";

    if (!raw) {
        return { error: "Paste a cURL command first." };
    }

    for (let i = 0; i < tokens.length; i += 1) {
        const token = tokens[i];
        const nextToken = tokens[i + 1];
        const eqIndex = token.indexOf("=");
        const tokenName = eqIndex === -1 ? token : token.slice(0, eqIndex);

        if (!parsedUrl && /^https?:\/\//i.test(token)) {
            parsedUrl = token;
            continue;
        }

        if (tokenName === "--url") {
            const { value, consumedNext } = readTokenValue(token, nextToken);
            if (value) parsedUrl = value;
            if (consumedNext) i += 1;
            continue;
        }

        if (tokenName === "--request" || tokenName === "-X") {
            const { value, consumedNext } = readTokenValue(token, nextToken);
            if (value) parsedMethod = value;
            if (consumedNext) i += 1;
            continue;
        }

        if (tokenName === "--header" || tokenName === "-H") {
            const { value, consumedNext } = readTokenValue(token, nextToken);
            if (consumedNext) i += 1;

            const separatorIndex = value.indexOf(":");
            if (separatorIndex !== -1) {
                headersRows.push({
                    enabled: true,
                    key: value.slice(0, separatorIndex).trim(),
                    value: value.slice(separatorIndex + 1).trim(),
                    description: "",
                });
            }
            continue;
        }

        if (tokenName === "--data-urlencode") {
            const { value, consumedNext } = readTokenValue(token, nextToken);
            if (value) dataUrlEncodeParts.push(value);
            if (consumedNext) i += 1;
            continue;
        }

        if (
            tokenName === "--data" ||
            tokenName === "--data-raw" ||
            tokenName === "--data-binary" ||
            tokenName === "-d"
        ) {
            const { value, consumedNext } = readTokenValue(token, nextToken);
            if (value) dataParts.push(value);
            if (consumedNext) i += 1;
        }
    }

    if (parsedUrl) {
        try {
            const parsed = new URL(parsedUrl);
            baseUrl = `${parsed.origin}${parsed.pathname}`;
            paramsRows = Array.from(parsed.searchParams.entries()).map(([key, value]) => ({
                enabled: true,
                key,
                value,
                description: "",
            }));
        } catch {
            baseUrl = parsedUrl;
        }
    }

    const body = dataUrlEncodeParts.length > 0
        ? dataUrlEncodeParts.join("&")
        : dataParts.join("&");

    const method = (parsedMethod || (body ? "POST" : "GET")).toUpperCase();

    return {
        baseUrl,
        paramsRows,
        headersRows,
        body,
        method,
    };
}

export function handleImportCurl({
    importCurlText,
    setUrl,
    setParamsRows,
    setHeaderRows,
    setBodyInput,
    setMethod,
    setImportCurlText,
    setImportMessage,
    setShowSuccessToast,
    setActiveTab,
}) {
    const parsed = parseAndImportCurl(importCurlText);

    if (parsed.error) {
        setImportMessage(parsed.error);
        return;
    }

    const emptyRow = util.createEmptyRow();

    if (parsed.baseUrl) {
        setUrl(parsed.baseUrl);
    }

    setParamsRows(parsed.paramsRows.length > 0 ? parsed.paramsRows : [emptyRow]);
    setHeaderRows(parsed.headersRows.length > 0 ? parsed.headersRows : [emptyRow]);

    // Special case: if importing abc.com/abc, populate with hotel reservation mock body
    const normalizedUrl = (parsed.baseUrl || "").replace(/^https?:\/\//, "").replace(/\/+$/, "");
    if (normalizedUrl === MOCK_URL) {
        setBodyInput(getMockOriginalBody());
        // Set method to POST for the hotel reservation
        setMethod("POST");
    } else {
        setBodyInput(util.formatJson(parsed.body || util.DEFAULT_BODY_INPUT));
        if (util.HTTP_METHODS.includes(parsed.method)) {
            setMethod(parsed.method);
        }
    }

    setImportCurlText("");
    setImportMessage("");
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), util.IMPORT_TOAST_DURATION_MS);
    setActiveTab(util.DEFAULT_ACTIVE_TAB);
} 
