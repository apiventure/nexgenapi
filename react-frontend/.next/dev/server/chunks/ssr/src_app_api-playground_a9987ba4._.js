module.exports = [
"[project]/src/app/api-playground/CollectionsPane.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CollectionsPane
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const DEFAULT_COLLECTIONS = [
    "Authentication",
    "Orders",
    "Reservations"
];
const PANEL_WIDTH = {
    initial: 360,
    min: 240,
    preferredMin: 320,
    max: 720,
    contentReserve: 220,
    gap: 14
};
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
function CollectionsPane() {
    const [collections, setCollections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_COLLECTIONS);
    const [newCollection, setNewCollection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [panelWidth, setPanelWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(PANEL_WIDTH.initial);
    const [isResizingPanel, setIsResizingPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startPanelResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        e.preventDefault();
        setIsResizingPanel(true);
        document.body.style.cursor = "col-resize";
        document.body.style.userSelect = "none";
    }, []);
    const stopPanelResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsResizingPanel(false);
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
    }, []);
    const handlePanelResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (!isResizingPanel || !panelRef.current) return;
        const panelRect = panelRef.current.getBoundingClientRect();
        const containerWidth = panelRef.current.parentElement?.clientWidth ?? 960;
        const maxWidth = Math.min(PANEL_WIDTH.max, Math.max(PANEL_WIDTH.preferredMin, containerWidth - PANEL_WIDTH.contentReserve - PANEL_WIDTH.gap));
        const minWidth = Math.min(PANEL_WIDTH.min, maxWidth);
        const nextWidth = clamp(e.clientX - panelRect.left, minWidth, maxWidth);
        setPanelWidth(nextWidth);
    }, [
        isResizingPanel
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isResizingPanel) return undefined;
        window.addEventListener("mousemove", handlePanelResize);
        window.addEventListener("mouseup", stopPanelResize);
        return ()=>{
            window.removeEventListener("mousemove", handlePanelResize);
            window.removeEventListener("mouseup", stopPanelResize);
        };
    }, [
        handlePanelResize,
        isResizingPanel,
        stopPanelResize
    ]);
    const addCollection = ()=>{
        const name = newCollection.trim();
        if (!name) return;
        setCollections((prev)=>[
                ...prev,
                name
            ]);
        setNewCollection("");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        ref: panelRef,
        style: {
            width: `${panelWidth}px`,
            maxWidth: `calc(100% - ${PANEL_WIDTH.gap}px)`,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
            background: "linear-gradient(180deg, #f8fafc 0%, #eef3f8 100%)",
            border: "1px solid #d7e0ea",
            borderRadius: 12,
            paddingTop: "18px",
            paddingRight: "16px",
            paddingBottom: "16px",
            paddingLeft: "16px",
            boxShadow: "6px 0 20px rgba(15, 23, 42, 0.08)",
            position: "relative",
            transition: isResizingPanel ? "none" : "width 0.12s ease",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    margin: 0,
                    fontSize: 20,
                    color: "#10203a"
                },
                children: "Collections"
            }, void 0, false, {
                fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 10,
                    marginTop: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: newCollection,
                        onChange: (e)=>setNewCollection(e.target.value),
                        placeholder: "New collection name",
                        style: {
                            flex: "1 1 160px",
                            border: "1px solid #c7d3e7",
                            borderRadius: 8,
                            paddingTop: "10px",
                            paddingRight: "12px",
                            paddingBottom: "10px",
                            paddingLeft: "12px",
                            fontSize: 14
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: addCollection,
                        style: {
                            border: "1px solid #0b4f6c",
                            background: "#0b4f6c",
                            color: "#fff",
                            borderRadius: 8,
                            paddingTop: "10px",
                            paddingRight: "12px",
                            paddingBottom: "10px",
                            paddingLeft: "12px",
                            fontWeight: 600,
                            cursor: "pointer",
                            whiteSpace: "nowrap"
                        },
                        children: "Add"
                    }, void 0, false, {
                        fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 14,
                    flex: 1,
                    minHeight: 0,
                    overflowY: "auto",
                    paddingRight: 4,
                    paddingBottom: 10,
                    scrollPaddingBottom: 12
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    style: {
                        marginTop: 0,
                        marginBottom: 0,
                        paddingLeft: 0,
                        color: "#1f2a44",
                        listStyle: "none"
                    },
                    children: collections.map((collection, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            style: {
                                marginTop: 6,
                                marginBottom: index === collections.length - 1 ? 6 : 0,
                                border: "1px solid #dbe5f1",
                                background: "#ffffff",
                                borderRadius: 10,
                                paddingTop: "10px",
                                paddingRight: "12px",
                                paddingBottom: "10px",
                                paddingLeft: "12px",
                                fontWeight: 600
                            },
                            children: collection
                        }, `${collection}-${index}`, false, {
                            fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                            lineNumber: 152,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                    lineNumber: 150,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onMouseDown: startPanelResize,
                title: "Drag to resize",
                style: {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 10,
                    height: "100%",
                    borderTopRightRadius: 12,
                    borderBottomRightRadius: 12,
                    cursor: "col-resize",
                    background: isResizingPanel ? "rgba(11, 79, 108, 0.22)" : "rgba(11, 79, 108, 0.12)"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/api-playground/CollectionsPane.js",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/api-playground/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ApiPlaygroundPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$CollectionsPane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api-playground/CollectionsPane.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const APP_FONT = '"Avenir Next", "Segoe UI", sans-serif';
const MONO_FONT = "ui-monospace, SFMono-Regular, Menlo, monospace";
const HTTP_METHODS = [
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
];
const REQUEST_TABS = [
    "Params",
    "Headers",
    "Body",
    "cURL",
    "Import cURL"
];
const TABLE_COLUMNS = "44px 1fr 1fr 1fr 46px";
function createEmptyRow() {
    return {
        enabled: true,
        key: "",
        value: "",
        description: ""
    };
}
function escapeSingleQuotes(value) {
    return String(value).replace(/'/g, "'\\''");
}
function formatJsonIfPossible(value) {
    const text = String(value ?? "").trim();
    if (!text) return "{}";
    try {
        return JSON.stringify(JSON.parse(text), null, 2);
    } catch  {
        return value;
    }
}
function ApiPlaygroundPage() {
    const [method, setMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("GET");
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("http://localhost:8081/api/hello");
    const [paramsRows, setParamsRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        createEmptyRow()
    ]);
    const [headerRows, setHeaderRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            enabled: true,
            key: "Content-Type",
            value: "application/json",
            description: ""
        }
    ]);
    const [bodyInput, setBodyInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("{}");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Params");
    const [importCurlText, setImportCurlText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [importMessage, setImportMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showSuccessToast, setShowSuccessToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const canSendBody = method !== "GET" && method !== "DELETE";
    const updateRow = (setter, rowIndex, field, fieldValue)=>{
        setter((prev)=>prev.map((row, index)=>index === rowIndex ? {
                    ...row,
                    [field]: fieldValue
                } : row));
    };
    const addRow = (setter)=>{
        setter((prev)=>[
                ...prev,
                createEmptyRow()
            ]);
    };
    const removeRow = (setter, rowIndex)=>{
        setter((prev)=>prev.filter((_, index)=>index !== rowIndex));
    };
    const queryParams = paramsRows.filter((row)=>row.enabled && row.key.trim()).map((row)=>`${encodeURIComponent(row.key)}=${encodeURIComponent(row.value)}`).join("&");
    const requestUrlPreview = queryParams ? `${url}${url.includes("?") ? "&" : "?"}${queryParams}` : url;
    const curlHeaders = headerRows.filter((row)=>row.enabled && row.key.trim()).map((row)=>`--header '${escapeSingleQuotes(row.key)}: ${escapeSingleQuotes(row.value)}'`).join(" ");
    const curlBody = canSendBody && bodyInput.trim() ? `--data '${escapeSingleQuotes(bodyInput)}'` : "";
    const curlCommand = [
        `curl --location --request ${method}`,
        `'${escapeSingleQuotes(requestUrlPreview)}'`,
        curlHeaders,
        curlBody
    ].filter(Boolean).join(" \n");
    const responsePreview = `{
  "message": "Response will appear here after you connect request execution.",
  "hint": "UI section is ready in Postman-style layout."
}`;
    const parseCurlAndApply = ()=>{
        const raw = importCurlText.trim();
        if (!raw) {
            setImportMessage("Paste a cURL command first.");
            return;
        }
        setImportMessage("");
        const normalized = raw.replace(/\\\s*\n/g, " ").replace(/\s+/g, " ").trim();
        const methodMatch = normalized.match(/(?:--request|-X)\s+([A-Za-z]+)/i);
        let parsedUrl = "";
        const quotedUrlMatch = normalized.match(/'((?:https?:\/\/)[^']+)'|"((?:https?:\/\/)[^"]+)"/i);
        if (quotedUrlMatch) {
            parsedUrl = quotedUrlMatch[1] || quotedUrlMatch[2] || "";
        } else {
            const plainUrlMatch = normalized.match(/(https?:\/\/\S+)/i);
            parsedUrl = plainUrlMatch?.[1] || "";
        }
        if (parsedUrl) {
            try {
                const parsed = new URL(parsedUrl);
                setUrl(`${parsed.origin}${parsed.pathname}`);
                const nextParams = Array.from(parsed.searchParams.entries()).map(([key, value])=>({
                        enabled: true,
                        key,
                        value,
                        description: ""
                    }));
                setParamsRows(nextParams.length > 0 ? nextParams : [
                    createEmptyRow()
                ]);
            } catch  {
                setUrl(parsedUrl);
            }
        }
        const headerMatches = [
            ...normalized.matchAll(/--header\s+(?:'([^']*)'|"([^"]*)"|([^\s]+))/gi)
        ];
        const parsedHeaders = headerMatches.map((match)=>match[1] || match[2] || match[3] || "").map((headerLine)=>{
            const separatorIndex = headerLine.indexOf(":");
            if (separatorIndex === -1) return null;
            return {
                enabled: true,
                key: headerLine.slice(0, separatorIndex).trim(),
                value: headerLine.slice(separatorIndex + 1).trim(),
                description: ""
            };
        }).filter(Boolean);
        setHeaderRows(parsedHeaders.length > 0 ? parsedHeaders : [
            createEmptyRow()
        ]);
        const bodyMatch = normalized.match(/(?:--data-raw|--data-binary|--data)\s+(?:'([^']*)'|"([^"]*)"|([^\s]+))/i);
        const parsedBody = bodyMatch ? bodyMatch[1] || bodyMatch[2] || bodyMatch[3] || "" : "";
        setBodyInput(formatJsonIfPossible(parsedBody || "{}"));
        const parsedMethod = (methodMatch?.[1] || (parsedBody ? "POST" : "GET")).toUpperCase();
        if (HTTP_METHODS.includes(parsedMethod)) {
            setMethod(parsedMethod);
        }
        setImportCurlText("");
        setImportMessage("");
        setShowSuccessToast(true);
        setTimeout(()=>setShowSuccessToast(false), 2500);
        setActiveTab("Params");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            height: "100vh",
            boxSizing: "border-box",
            paddingTop: "28px",
            paddingRight: "28px",
            paddingBottom: "28px",
            paddingLeft: "28px",
            color: "#23272f",
            fontFamily: APP_FONT,
            overflow: "hidden"
        },
        children: [
            showSuccessToast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    top: 18,
                    right: 20,
                    zIndex: 1200,
                    background: "#e8f8ee",
                    border: "1px solid #9fd3b2",
                    color: "#135c32",
                    borderRadius: 10,
                    padding: "10px 12px",
                    fontSize: 13,
                    fontWeight: 700,
                    boxShadow: "0 12px 28px rgba(15, 23, 42, 0.16)"
                },
                children: "Imported cURL successfully."
            }, void 0, false, {
                fileName: "[project]/src/app/api-playground/page.js",
                lineNumber: 178,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "stretch",
                    gap: 14,
                    height: "100%",
                    overflowX: "hidden",
                    overflowY: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$CollectionsPane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/api-playground/page.js",
                        lineNumber: 208,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            flex: 1,
                            minWidth: 0,
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            background: "#ffffff",
                            border: "1px solid #dbe5f1",
                            borderRadius: 12,
                            paddingTop: "10px",
                            paddingRight: "20px",
                            paddingBottom: "20px",
                            paddingLeft: "20px",
                            boxShadow: "0 8px 24px rgba(15, 23, 42, 0.06)",
                            overflow: "hidden"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 10,
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: method,
                                        onChange: (e)=>setMethod(e.target.value),
                                        style: {
                                            border: "1px solid #c7d3e7",
                                            borderRadius: 8,
                                            padding: "10px",
                                            fontWeight: 700,
                                            color: "#0b4f6c",
                                            background: "#f7fbff"
                                        },
                                        children: HTTP_METHODS.map((httpMethod)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: httpMethod,
                                                children: httpMethod
                                            }, httpMethod, false, {
                                                fileName: "[project]/src/app/api-playground/page.js",
                                                lineNumber: 243,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/api-playground/page.js",
                                        lineNumber: 230,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: url,
                                        onChange: (e)=>setUrl(e.target.value),
                                        placeholder: "Enter request URL",
                                        style: {
                                            flex: 1,
                                            border: "1px solid #c7d3e7",
                                            borderRadius: 8,
                                            padding: "10px 12px",
                                            fontSize: 14
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/api-playground/page.js",
                                        lineNumber: 249,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/api-playground/page.js",
                                lineNumber: 229,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 8,
                                    fontSize: 12,
                                    color: "#607089"
                                },
                                children: [
                                    "Request URL: ",
                                    requestUrlPreview
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/api-playground/page.js",
                                lineNumber: 264,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 12,
                                    display: "flex",
                                    gap: 8,
                                    borderBottom: "1px solid #dbe5f1",
                                    paddingBottom: 8
                                },
                                children: REQUEST_TABS.map((tab)=>{
                                    const isActive = activeTab === tab;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveTab(tab),
                                        style: {
                                            border: isActive ? "1px solid #b9e1ef" : "1px solid #dbe5f1",
                                            background: isActive ? "#eaf7fc" : "#f8fafc",
                                            color: isActive ? "#0b4f6c" : "#44516b",
                                            borderRadius: 8,
                                            padding: "8px 12px",
                                            fontWeight: 700,
                                            cursor: "pointer"
                                        },
                                        children: tab
                                    }, tab, false, {
                                        fileName: "[project]/src/app/api-playground/page.js",
                                        lineNumber: 273,
                                        columnNumber: 33
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/api-playground/page.js",
                                lineNumber: 268,
                                columnNumber: 21
                            }, this),
                            activeTab === "Params" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 12
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        border: "1px solid #c7d3e7",
                                        borderRadius: 8,
                                        overflow: "hidden",
                                        background: "#fff",
                                        fontSize: 12
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "grid",
                                                gridTemplateColumns: TABLE_COLUMNS,
                                                background: "#f7fbff",
                                                fontWeight: 700,
                                                color: "#44516b"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "8px"
                                                    },
                                                    children: "On"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 305,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "8px"
                                                    },
                                                    children: "Key"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 306,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "8px"
                                                    },
                                                    children: "Value"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 307,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "8px"
                                                    },
                                                    children: "Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 308,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "8px"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 309,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/api-playground/page.js",
                                            lineNumber: 304,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                maxHeight: "36vh",
                                                overflowY: "auto"
                                            },
                                            children: paramsRows.map((row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "grid",
                                                        gridTemplateColumns: TABLE_COLUMNS,
                                                        borderTop: "1px solid #edf2f8"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                padding: "8px"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: row.enabled,
                                                                onChange: (e)=>updateRow(setParamsRows, rowIndex, "enabled", e.target.checked)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/api-playground/page.js",
                                                                lineNumber: 316,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-playground/page.js",
                                                            lineNumber: 315,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: row.key,
                                                            onChange: (e)=>updateRow(setParamsRows, rowIndex, "key", e.target.value),
                                                            style: {
                                                                border: "none",
                                                                borderLeft: "1px solid #edf2f8",
                                                                padding: "8px"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-playground/page.js",
                                                            lineNumber: 322,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: row.value,
                                                            onChange: (e)=>updateRow(setParamsRows, rowIndex, "value", e.target.value),
                                                            style: {
                                                                border: "none",
                                                                borderLeft: "1px solid #edf2f8",
                                                                padding: "8px"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-playground/page.js",
                                                            lineNumber: 327,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: row.description,
                                                            onChange: (e)=>updateRow(setParamsRows, rowIndex, "description", e.target.value),
                                                            style: {
                                                                border: "none",
                                                                borderLeft: "1px solid #edf2f8",
                                                                padding: "8px"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-playground/page.js",
                                                            lineNumber: 332,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>removeRow(setParamsRows, rowIndex),
                                                            style: {
                                                                border: "none",
                                                                borderLeft: "1px solid #edf2f8",
                                                                background: "transparent",
                                                                color: "#b91c1c",
                                                                cursor: "pointer"
                                                            },
                                                            children: "x"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-playground/page.js",
                                                            lineNumber: 337,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, `param-${rowIndex}`, true, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 314,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api-playground/page.js",
                                            lineNumber: 312,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>addRow(setParamsRows),
                                            style: {
                                                width: "100%",
                                                border: "none",
                                                borderTop: "1px solid #edf2f8",
                                                background: "#f9fbfe",
                                                padding: "8px",
                                                cursor: "pointer",
                                                fontWeight: 600,
                                                color: "#0b4f6c"
                                            },
                                            children: "+ Add Param"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api-playground/page.js",
                                            lineNumber: 348,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/api-playground/page.js",
                                    lineNumber: 295,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/api-playground/page.js",
                                lineNumber: 294,
                                columnNumber: 25
                            }, this),
                            activeTab === "Headers" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 12
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        border: "1px solid #c7d3e7",
                                        borderRadius: 8,
                                        overflow: "hidden",
                                        background: "#fff",
                                        fontSize: 12
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "grid",
                                                gridTemplateColumns: TABLE_COLUMNS,
                                                background: "#f7fbff",
                                                fontWeight: 700,
                                                color: "#44516b"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "8px"
                                                    },
                                                    children: "On"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 371,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "8px"
                                                    },
                                                    children: "Key"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 372,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "8px"
                                                    },
                                                    children: "Value"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 373,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "8px"
                                                    },
                                                    children: "Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 374,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "8px"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 375,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/api-playground/page.js",
                                            lineNumber: 370,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                maxHeight: "36vh",
                                                overflowY: "auto"
                                            },
                                            children: headerRows.map((row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "grid",
                                                        gridTemplateColumns: TABLE_COLUMNS,
                                                        borderTop: "1px solid #edf2f8"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                padding: "8px"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: row.enabled,
                                                                onChange: (e)=>updateRow(setHeaderRows, rowIndex, "enabled", e.target.checked)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/api-playground/page.js",
                                                                lineNumber: 382,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-playground/page.js",
                                                            lineNumber: 381,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: row.key,
                                                            onChange: (e)=>updateRow(setHeaderRows, rowIndex, "key", e.target.value),
                                                            style: {
                                                                border: "none",
                                                                borderLeft: "1px solid #edf2f8",
                                                                padding: "8px"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-playground/page.js",
                                                            lineNumber: 388,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: row.value,
                                                            onChange: (e)=>updateRow(setHeaderRows, rowIndex, "value", e.target.value),
                                                            style: {
                                                                border: "none",
                                                                borderLeft: "1px solid #edf2f8",
                                                                padding: "8px"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-playground/page.js",
                                                            lineNumber: 393,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: row.description,
                                                            onChange: (e)=>updateRow(setHeaderRows, rowIndex, "description", e.target.value),
                                                            style: {
                                                                border: "none",
                                                                borderLeft: "1px solid #edf2f8",
                                                                padding: "8px"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-playground/page.js",
                                                            lineNumber: 398,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>removeRow(setHeaderRows, rowIndex),
                                                            style: {
                                                                border: "none",
                                                                borderLeft: "1px solid #edf2f8",
                                                                background: "transparent",
                                                                color: "#b91c1c",
                                                                cursor: "pointer"
                                                            },
                                                            children: "x"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-playground/page.js",
                                                            lineNumber: 403,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, `header-${rowIndex}`, true, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 380,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api-playground/page.js",
                                            lineNumber: 378,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>addRow(setHeaderRows),
                                            style: {
                                                width: "100%",
                                                border: "none",
                                                borderTop: "1px solid #edf2f8",
                                                background: "#f9fbfe",
                                                padding: "8px",
                                                cursor: "pointer",
                                                fontWeight: 600,
                                                color: "#0b4f6c"
                                            },
                                            children: "+ Add Header"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api-playground/page.js",
                                            lineNumber: 414,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/api-playground/page.js",
                                    lineNumber: 361,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/api-playground/page.js",
                                lineNumber: 360,
                                columnNumber: 25
                            }, this),
                            activeTab === "Body" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 12,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 12
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: bodyInput,
                                    onChange: (e)=>setBodyInput(e.target.value),
                                    onBlur: ()=>setBodyInput((prev)=>formatJsonIfPossible(prev)),
                                    disabled: !canSendBody,
                                    style: {
                                        width: "100%",
                                        minHeight: 260,
                                        border: "1px solid #c7d3e7",
                                        borderRadius: 8,
                                        padding: "10px 12px",
                                        boxSizing: "border-box",
                                        fontFamily: MONO_FONT,
                                        fontSize: 12,
                                        resize: "vertical",
                                        background: canSendBody ? "#fff" : "#f3f5f9"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/api-playground/page.js",
                                    lineNumber: 427,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/api-playground/page.js",
                                lineNumber: 426,
                                columnNumber: 25
                            }, this),
                            activeTab === "cURL" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 12
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: curlCommand,
                                    readOnly: true,
                                    style: {
                                        width: "100%",
                                        minHeight: 260,
                                        border: "1px solid #c7d3e7",
                                        borderRadius: 8,
                                        padding: "10px 12px",
                                        boxSizing: "border-box",
                                        fontFamily: MONO_FONT,
                                        fontSize: 12,
                                        background: "#f8fafc"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/api-playground/page.js",
                                    lineNumber: 450,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/api-playground/page.js",
                                lineNumber: 449,
                                columnNumber: 25
                            }, this),
                            activeTab === "Import cURL" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 12,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: importCurlText,
                                        onChange: (e)=>setImportCurlText(e.target.value),
                                        placeholder: "Paste cURL here...",
                                        style: {
                                            width: "100%",
                                            minHeight: 260,
                                            border: "1px solid #c7d3e7",
                                            borderRadius: 8,
                                            padding: "10px 12px",
                                            boxSizing: "border-box",
                                            fontFamily: MONO_FONT,
                                            fontSize: 12,
                                            background: "#fff"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/api-playground/page.js",
                                        lineNumber: 470,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: parseCurlAndApply,
                                                style: {
                                                    border: "1px solid #0b4f6c",
                                                    background: "#0b4f6c",
                                                    color: "#fff",
                                                    borderRadius: 8,
                                                    padding: "10px 12px",
                                                    fontWeight: 700,
                                                    cursor: "pointer"
                                                },
                                                children: "Import to Request"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/api-playground/page.js",
                                                lineNumber: 488,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 12,
                                                    color: "#52627f"
                                                },
                                                children: importMessage
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/api-playground/page.js",
                                                lineNumber: 504,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/api-playground/page.js",
                                        lineNumber: 487,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/api-playground/page.js",
                                lineNumber: 469,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: 6,
                                            fontSize: 12,
                                            fontWeight: 700,
                                            color: "#30415f"
                                        },
                                        children: "Response"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/api-playground/page.js",
                                        lineNumber: 510,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: responsePreview,
                                        readOnly: true,
                                        style: {
                                            width: "100%",
                                            minHeight: 180,
                                            border: "1px solid #d7e1ef",
                                            borderRadius: 8,
                                            padding: "10px 12px",
                                            boxSizing: "border-box",
                                            fontFamily: MONO_FONT,
                                            fontSize: 12,
                                            background: "#ffffff",
                                            color: "#2a3447",
                                            resize: "vertical"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/api-playground/page.js",
                                        lineNumber: 511,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/api-playground/page.js",
                                lineNumber: 509,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/api-playground/page.js",
                        lineNumber: 210,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/api-playground/page.js",
                lineNumber: 198,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/api-playground/page.js",
        lineNumber: 164,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_app_api-playground_a9987ba4._.js.map