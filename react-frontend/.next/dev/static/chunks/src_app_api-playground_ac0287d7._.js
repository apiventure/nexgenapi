(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/api-playground/apiPlayground.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "addRowBtn": "apiPlayground-module__qQZEwW__addRowBtn",
  "collectionActions": "apiPlayground-module__qQZEwW__collectionActions",
  "collectionIconBtn": "apiPlayground-module__qQZEwW__collectionIconBtn",
  "collectionItem": "apiPlayground-module__qQZEwW__collectionItem",
  "collectionItemLast": "apiPlayground-module__qQZEwW__collectionItemLast",
  "collectionLabel": "apiPlayground-module__qQZEwW__collectionLabel",
  "collectionsAddBtn": "apiPlayground-module__qQZEwW__collectionsAddBtn",
  "collectionsAside": "apiPlayground-module__qQZEwW__collectionsAside",
  "collectionsInput": "apiPlayground-module__qQZEwW__collectionsInput",
  "collectionsInputRow": "apiPlayground-module__qQZEwW__collectionsInputRow",
  "collectionsList": "apiPlayground-module__qQZEwW__collectionsList",
  "collectionsListWrap": "apiPlayground-module__qQZEwW__collectionsListWrap",
  "collectionsTitle": "apiPlayground-module__qQZEwW__collectionsTitle",
  "copyBtn": "apiPlayground-module__qQZEwW__copyBtn",
  "copyMessage": "apiPlayground-module__qQZEwW__copyMessage",
  "curlRelative": "apiPlayground-module__qQZEwW__curlRelative",
  "curlWrap": "apiPlayground-module__qQZEwW__curlWrap",
  "dataCard": "apiPlayground-module__qQZEwW__dataCard",
  "iconBtn": "apiPlayground-module__qQZEwW__iconBtn",
  "importActions": "apiPlayground-module__qQZEwW__importActions",
  "importPanel": "apiPlayground-module__qQZEwW__importPanel",
  "importStatus": "apiPlayground-module__qQZEwW__importStatus",
  "layout": "apiPlayground-module__qQZEwW__layout",
  "main": "apiPlayground-module__qQZEwW__main",
  "methodSelect": "apiPlayground-module__qQZEwW__methodSelect",
  "modal": "apiPlayground-module__qQZEwW__modal",
  "modalActions": "apiPlayground-module__qQZEwW__modalActions",
  "modalCancel": "apiPlayground-module__qQZEwW__modalCancel",
  "modalDelete": "apiPlayground-module__qQZEwW__modalDelete",
  "modalText": "apiPlayground-module__qQZEwW__modalText",
  "modalTitle": "apiPlayground-module__qQZEwW__modalTitle",
  "overlay": "apiPlayground-module__qQZEwW__overlay",
  "primaryBtn": "apiPlayground-module__qQZEwW__primaryBtn",
  "requestRow": "apiPlayground-module__qQZEwW__requestRow",
  "requestUrlPreview": "apiPlayground-module__qQZEwW__requestUrlPreview",
  "resizeHandle": "apiPlayground-module__qQZEwW__resizeHandle",
  "resizeHandleActive": "apiPlayground-module__qQZEwW__resizeHandleActive",
  "resizeHandleIdle": "apiPlayground-module__qQZEwW__resizeHandleIdle",
  "responseSection": "apiPlayground-module__qQZEwW__responseSection",
  "responseText": "apiPlayground-module__qQZEwW__responseText",
  "responseTitle": "apiPlayground-module__qQZEwW__responseTitle",
  "rightActions": "apiPlayground-module__qQZEwW__rightActions",
  "secondaryBtn": "apiPlayground-module__qQZEwW__secondaryBtn",
  "section": "apiPlayground-module__qQZEwW__section",
  "tabButton": "apiPlayground-module__qQZEwW__tabButton",
  "tabButtonActive": "apiPlayground-module__qQZEwW__tabButtonActive",
  "tabButtonInactive": "apiPlayground-module__qQZEwW__tabButtonInactive",
  "tabPanel": "apiPlayground-module__qQZEwW__tabPanel",
  "tableBody": "apiPlayground-module__qQZEwW__tableBody",
  "tableCellPad": "apiPlayground-module__qQZEwW__tableCellPad",
  "tableDataRow": "apiPlayground-module__qQZEwW__tableDataRow",
  "tableHeaderCell": "apiPlayground-module__qQZEwW__tableHeaderCell",
  "tableHeaderRow": "apiPlayground-module__qQZEwW__tableHeaderRow",
  "tableInput": "apiPlayground-module__qQZEwW__tableInput",
  "tabsRow": "apiPlayground-module__qQZEwW__tabsRow",
  "textarea": "apiPlayground-module__qQZEwW__textarea",
  "textareaDisabled": "apiPlayground-module__qQZEwW__textareaDisabled",
  "textareaEnabled": "apiPlayground-module__qQZEwW__textareaEnabled",
  "textareaReadOnly": "apiPlayground-module__qQZEwW__textareaReadOnly",
  "textareaWrap": "apiPlayground-module__qQZEwW__textareaWrap",
  "toast": "apiPlayground-module__qQZEwW__toast",
  "urlInput": "apiPlayground-module__qQZEwW__urlInput",
});
}),
"[project]/src/app/api-playground/util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "APP_FONT",
    ()=>APP_FONT,
    "COPY_MESSAGE_DURATION_MS",
    ()=>COPY_MESSAGE_DURATION_MS,
    "DEFAULT_ACTIVE_TAB",
    ()=>DEFAULT_ACTIVE_TAB,
    "DEFAULT_BODY_INPUT",
    ()=>DEFAULT_BODY_INPUT,
    "DEFAULT_COLLECTIONS",
    ()=>DEFAULT_COLLECTIONS,
    "DEFAULT_HEADER_ROW",
    ()=>DEFAULT_HEADER_ROW,
    "DEFAULT_REQUEST_METHOD",
    ()=>DEFAULT_REQUEST_METHOD,
    "HTTP_METHODS",
    ()=>HTTP_METHODS,
    "IMPORT_TOAST_DURATION_MS",
    ()=>IMPORT_TOAST_DURATION_MS,
    "PANEL_WIDTH",
    ()=>PANEL_WIDTH,
    "REQUEST_TABS",
    ()=>REQUEST_TABS,
    "RESPONSE_PREVIEW_TEXT",
    ()=>RESPONSE_PREVIEW_TEXT,
    "TABLE_COLUMNS",
    ()=>TABLE_COLUMNS,
    "createEmptyRow",
    ()=>createEmptyRow,
    "escapeSingleQuotes",
    ()=>escapeSingleQuotes,
    "formatJsonIfPossible",
    ()=>formatJsonIfPossible
]);
const HTTP_METHODS = [
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
];
const APP_FONT = '"Avenir Next", "Segoe UI", sans-serif';
const REQUEST_TABS = [
    "Params",
    "Headers",
    "Body",
    "cURL",
    "Import cURL"
];
const TABLE_COLUMNS = "44px 1fr 1fr 1fr 46px";
const DEFAULT_REQUEST_METHOD = "GET";
const DEFAULT_BODY_INPUT = "{}";
const DEFAULT_ACTIVE_TAB = "Params";
const DEFAULT_HEADER_ROW = {
    enabled: true,
    key: "Content-Type",
    value: "application/json",
    description: ""
};
const RESPONSE_PREVIEW_TEXT = '{"message": "Response will appear here after you connect request execution."}';
const COPY_MESSAGE_DURATION_MS = 1500;
const IMPORT_TOAST_DURATION_MS = 2500;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/api-playground/CollectionsPane.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CollectionsPane
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/api-playground/apiPlayground.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api-playground/util.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
function CollectionsPane() {
    _s();
    const [collections, setCollections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COLLECTIONS"]);
    const [newCollection, setNewCollection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [pendingDeleteIndex, setPendingDeleteIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [panelWidth, setPanelWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_WIDTH"].initial);
    const [isResizingPanel, setIsResizingPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startPanelResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CollectionsPane.useCallback[startPanelResize]": (e)=>{
            e.preventDefault();
            setIsResizingPanel(true);
            document.body.style.cursor = "col-resize";
            document.body.style.userSelect = "none";
        }
    }["CollectionsPane.useCallback[startPanelResize]"], []);
    const stopPanelResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CollectionsPane.useCallback[stopPanelResize]": ()=>{
            setIsResizingPanel(false);
            document.body.style.cursor = "";
            document.body.style.userSelect = "";
        }
    }["CollectionsPane.useCallback[stopPanelResize]"], []);
    const handlePanelResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CollectionsPane.useCallback[handlePanelResize]": (e)=>{
            if (!isResizingPanel || !panelRef.current) return;
            const panelRect = panelRef.current.getBoundingClientRect();
            const containerWidth = panelRef.current.parentElement?.clientWidth ?? 960;
            const maxWidth = Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_WIDTH"].max, Math.max(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_WIDTH"].preferredMin, containerWidth - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_WIDTH"].contentReserve - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_WIDTH"].gap));
            const minWidth = Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_WIDTH"].min, maxWidth);
            const nextWidth = clamp(e.clientX - panelRect.left, minWidth, maxWidth);
            setPanelWidth(nextWidth);
        }
    }["CollectionsPane.useCallback[handlePanelResize]"], [
        isResizingPanel
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CollectionsPane.useEffect": ()=>{
            if (!isResizingPanel) return undefined;
            window.addEventListener("mousemove", handlePanelResize);
            window.addEventListener("mouseup", stopPanelResize);
            return ({
                "CollectionsPane.useEffect": ()=>{
                    window.removeEventListener("mousemove", handlePanelResize);
                    window.removeEventListener("mouseup", stopPanelResize);
                }
            })["CollectionsPane.useEffect"];
        }
    }["CollectionsPane.useEffect"], [
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
    const removeCollection = (rowIndex)=>{
        setCollections((prev)=>prev.filter((_, index)=>index !== rowIndex));
        setPendingDeleteIndex(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        ref: panelRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].collectionsAside,
        style: {
            width: `${panelWidth}px`,
            maxWidth: `calc(100% - ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PANEL_WIDTH"].gap}px)`,
            transition: isResizingPanel ? "none" : "width 0.12s ease"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].collectionsTitle,
                children: "Collections"
            }, void 0, false, {
                fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                lineNumber: 84,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].collectionsInputRow,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: newCollection,
                        onChange: (e)=>setNewCollection(e.target.value),
                        placeholder: "New collection name",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].collectionsInput
                    }, void 0, false, {
                        fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                        lineNumber: 87,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: addCollection,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].collectionsAddBtn,
                        children: "Add"
                    }, void 0, false, {
                        fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                        lineNumber: 94,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                lineNumber: 86,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].collectionsListWrap,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].collectionsList,
                    children: collections.map((collection, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].collectionItem} ${index === collections.length - 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].collectionItemLast : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].collectionLabel,
                                    children: collection
                                }, void 0, false, {
                                    fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                                    lineNumber: 110,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].collectionActions,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setPendingDeleteIndex(index),
                                            "aria-label": `Delete ${collection}`,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].collectionIconBtn,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/assets/trash.svg",
                                                alt: "",
                                                width: "16",
                                                height: "16",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                                                lineNumber: 118,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                                            lineNumber: 112,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setPendingDeleteIndex(index),
                                            "aria-label": `Delete ${collection}`,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].collectionIconBtn,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/assets/plus.svg",
                                                alt: "",
                                                width: "16",
                                                height: "16",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                                                lineNumber: 126,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                                            lineNumber: 120,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                                    lineNumber: 111,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, `${collection}-${index}`, true, {
                            fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                            lineNumber: 106,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                    lineNumber: 104,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                lineNumber: 103,
                columnNumber: 13
            }, this),
            pendingDeleteIndex !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalTitle,
                            children: "Delete Collection?"
                        }, void 0, false, {
                            fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                            lineNumber: 137,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalText,
                            children: [
                                "Are you sure you want to delete",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: collections[pendingDeleteIndex]
                                }, void 0, false, {
                                    fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                                    lineNumber: 141,
                                    columnNumber: 29
                                }, this),
                                "?. This action cannot be undone."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                            lineNumber: 138,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalActions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setPendingDeleteIndex(null),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalCancel,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                                    lineNumber: 145,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>removeCollection(pendingDeleteIndex),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalDelete,
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                                    lineNumber: 152,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                            lineNumber: 144,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                    lineNumber: 136,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                lineNumber: 135,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onMouseDown: startPanelResize,
                title: "Drag to resize",
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resizeHandle} ${isResizingPanel ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resizeHandleActive : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resizeHandleIdle}`
            }, void 0, false, {
                fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                lineNumber: 164,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/api-playground/CollectionsPane.js",
        lineNumber: 75,
        columnNumber: 9
    }, this);
}
_s(CollectionsPane, "l+6kqFiAedezAYDK70gMdML2QpU=");
_c = CollectionsPane;
var _c;
__turbopack_context__.k.register(_c, "CollectionsPane");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/api-playground/importCurl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleImportCurl",
    ()=>handleImportCurl,
    "parseAndImportCurl",
    ()=>parseAndImportCurl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api-playground/util.js [app-client] (ecmascript)");
;
;
function parseAndImportCurl(rawCurlText) {
    const raw = String(rawCurlText ?? "").trim();
    if (!raw) {
        return {
            error: "Paste a cURL command first."
        };
    }
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
    let baseUrl = "";
    let paramsRows = [];
    if (parsedUrl) {
        try {
            const parsed = new URL(parsedUrl);
            baseUrl = `${parsed.origin}${parsed.pathname}`;
            paramsRows = Array.from(parsed.searchParams.entries()).map(([key, value])=>({
                    enabled: true,
                    key,
                    value,
                    description: ""
                }));
        } catch  {
            baseUrl = parsedUrl;
        }
    }
    const headerMatches = [
        ...normalized.matchAll(/(?:--header|-H)\s+(?:'([^']*)'|"([^"]*)"|([^\s]+))/gi)
    ];
    const headersRows = headerMatches.map((match)=>match[1] || match[2] || match[3] || "").map((headerLine)=>{
        const separatorIndex = headerLine.indexOf(":");
        if (separatorIndex === -1) return null;
        return {
            enabled: true,
            key: headerLine.slice(0, separatorIndex).trim(),
            value: headerLine.slice(separatorIndex + 1).trim(),
            description: ""
        };
    }).filter(Boolean);
    const dataUrlEncodeMatches = [
        ...normalized.matchAll(/--data-urlencode\s+(?:'([^']*)'|"([^"]*)"|([^\s]+))/gi)
    ];
    const dataUrlEncodeParts = dataUrlEncodeMatches.map((match)=>match[1] || match[2] || match[3] || "").filter(Boolean);
    const bodyMatch = normalized.match(/(?:--data-raw|--data-binary|--data|-d)\s+(?:'([^']*)'|"([^"]*)"|([^\s]+))/i);
    const body = dataUrlEncodeParts.length > 0 ? dataUrlEncodeParts.join("&") : bodyMatch ? bodyMatch[1] || bodyMatch[2] || bodyMatch[3] || "" : "";
    const method = (methodMatch?.[1] || (body ? "POST" : "GET")).toUpperCase();
    return {
        baseUrl,
        paramsRows,
        headersRows,
        body,
        method
    };
}
function handleImportCurl({ importCurlText, setUrl, setParamsRows, setHeaderRows, setBodyInput, setMethod, setImportCurlText, setImportMessage, setShowSuccessToast, setActiveTab }) {
    const parsed = parseAndImportCurl(importCurlText);
    if (parsed.error) {
        setImportMessage(parsed.error);
        return;
    }
    const emptyRow = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEmptyRow"]();
    if (parsed.baseUrl) {
        setUrl(parsed.baseUrl);
    }
    setParamsRows(parsed.paramsRows.length > 0 ? parsed.paramsRows : [
        emptyRow
    ]);
    setHeaderRows(parsed.headersRows.length > 0 ? parsed.headersRows : [
        emptyRow
    ]);
    setBodyInput(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatJsonIfPossible"](parsed.body || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_BODY_INPUT"]));
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTTP_METHODS"].includes(parsed.method)) {
        setMethod(parsed.method);
    }
    setImportCurlText("");
    setImportMessage("");
    setShowSuccessToast(true);
    setTimeout(()=>setShowSuccessToast(false), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMPORT_TOAST_DURATION_MS"]);
    setActiveTab(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ACTIVE_TAB"]);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/api-playground/buildCurl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildCurlParts",
    ()=>buildCurlParts,
    "buildRequestUrlPreview",
    ()=>buildRequestUrlPreview,
    "onCopyCurlClick",
    ()=>onCopyCurlClick
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api-playground/util.js [app-client] (ecmascript)");
;
function buildRequestUrlPreview({ paramsRows, url }) {
    const queryParams = paramsRows.filter((row)=>row.enabled && row.key.trim()).map((row)=>`${encodeURIComponent(row.key)}=${encodeURIComponent(row.value)}`).join("&");
    const requestUrlPreview = queryParams ? `${url}${url.includes("?") ? "&" : "?"}${queryParams}` : url;
    return {
        queryParams,
        requestUrlPreview
    };
}
function buildCurlParts({ headerRows, canSendBody, bodyInput, method, requestUrlPreview }) {
    const curlBody = canSendBody && bodyInput.trim() ? `--data '${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeSingleQuotes"](bodyInput)}'` : "";
    const curlHeaders = headerRows.filter((row)=>row.enabled && row.key.trim()).map((row)=>`--header '${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeSingleQuotes"](row.key)}: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeSingleQuotes"](row.value)}'`).join(" ");
    const curlCommand = [
        `curl --location --request ${method}`,
        `'${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeSingleQuotes"](requestUrlPreview)}'`,
        curlHeaders,
        curlBody
    ].filter(Boolean).join(" \n");
    return {
        curlHeaders,
        curlBody,
        curlCommand
    };
}
const onCopyCurlClick = async ({ curlCommand, setCopyMessage })=>{
    try {
        await navigator.clipboard.writeText(curlCommand);
        setCopyMessage("Copied");
    } catch  {
        setCopyMessage("Copy failed");
    }
    setTimeout(()=>setCopyMessage(""), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COPY_MESSAGE_DURATION_MS"]);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/api-playground/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ApiPlaygroundPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$CollectionsPane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api-playground/CollectionsPane.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$importCurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api-playground/importCurl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$buildCurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api-playground/buildCurl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api-playground/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/api-playground/apiPlayground.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function ApiPlaygroundPage() {
    _s();
    const [method, setMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_REQUEST_METHOD"]);
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [paramsRows, setParamsRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [headerRows, setHeaderRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_HEADER_ROW"]
        }
    ]);
    const [bodyInput, setBodyInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_BODY_INPUT"]);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ACTIVE_TAB"]);
    const [importCurlText, setImportCurlText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [importMessage, setImportMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [copyMessage, setCopyMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showSuccessToast, setShowSuccessToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEmptyRow"]()
            ]);
    };
    const removeRow = (setter, rowIndex)=>{
        setter((prev)=>prev.filter((_, index)=>index !== rowIndex));
    };
    const { requestUrlPreview } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$buildCurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRequestUrlPreview"]({
        paramsRows,
        url
    });
    const { curlCommand } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$buildCurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCurlParts"]({
        headerRows,
        canSendBody,
        bodyInput,
        method,
        requestUrlPreview
    });
    const responsePreview = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSE_PREVIEW_TEXT"];
    const onImportCurlClick = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$importCurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleImportCurl"])({
            importCurlText,
            setUrl,
            setParamsRows,
            setHeaderRows,
            setBodyInput,
            setMethod,
            setImportCurlText,
            setImportMessage,
            setShowSuccessToast,
            setActiveTab
        });
    };
    const onCopyCurlClick = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$buildCurl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onCopyCurlClick"]({
            curlCommand,
            setCopyMessage
        });
    };
    const onNewClick = ()=>{
        setMethod(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_REQUEST_METHOD"]);
        setUrl("");
        setParamsRows([]);
        setHeaderRows([
            {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_HEADER_ROW"]
            }
        ]);
        setBodyInput(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_BODY_INPUT"]);
        setImportCurlText("");
        setImportMessage("");
        setCopyMessage("");
        setShowSuccessToast(false);
        setActiveTab(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ACTIVE_TAB"]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
        style: {
            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_FONT"]
        },
        children: [
            showSuccessToast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toast,
                children: "Imported cURL successfully."
            }, void 0, false, {
                fileName: "[project]/src/app/api-playground/page.js",
                lineNumber: 83,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].layout,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$CollectionsPane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/api-playground/page.js",
                        lineNumber: 89,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].requestRow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: method,
                                        onChange: (e)=>setMethod(e.target.value),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].methodSelect,
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTTP_METHODS"].map((httpMethod)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: httpMethod,
                                                children: httpMethod
                                            }, httpMethod, false, {
                                                fileName: "[project]/src/app/api-playground/page.js",
                                                lineNumber: 100,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/api-playground/page.js",
                                        lineNumber: 94,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: url,
                                        onChange: (e)=>setUrl(e.target.value),
                                        placeholder: "Enter request URL",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].urlInput
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/api-playground/page.js",
                                        lineNumber: 106,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onNewClick,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryBtn,
                                        children: "Send"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/api-playground/page.js",
                                        lineNumber: 112,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onNewClick,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryBtn,
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/api-playground/page.js",
                                        lineNumber: 117,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/api-playground/page.js",
                                lineNumber: 93,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].requestUrlPreview,
                                children: [
                                    "Request URL: ",
                                    requestUrlPreview
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/api-playground/page.js",
                                lineNumber: 125,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabsRow,
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_TABS"].map((tab)=>{
                                        const isActive = activeTab === tab;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setActiveTab(tab),
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabButton} ${isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabButtonActive : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabButtonInactive}`,
                                            children: tab
                                        }, tab, false, {
                                            fileName: "[project]/src/app/api-playground/page.js",
                                            lineNumber: 134,
                                            columnNumber: 33
                                        }, this);
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rightActions,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: onNewClick,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondaryBtn,
                                                children: "New"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/api-playground/page.js",
                                                lineNumber: 146,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: onNewClick,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondaryBtn,
                                                children: "Save to Collection"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/api-playground/page.js",
                                                lineNumber: 153,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/api-playground/page.js",
                                        lineNumber: 145,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/api-playground/page.js",
                                lineNumber: 129,
                                columnNumber: 21
                            }, this),
                            activeTab === "Params" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabPanel,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dataCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableHeaderRow,
                                            style: {
                                                gridTemplateColumns: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_COLUMNS"]
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableHeaderCell,
                                                    children: "On"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 167,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableHeaderCell,
                                                    children: "Key"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 168,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableHeaderCell,
                                                    children: "Value"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 169,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableHeaderCell,
                                                    children: "Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 170,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableHeaderCell
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 171,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/api-playground/page.js",
                                            lineNumber: 166,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableBody,
                                            children: paramsRows.map((row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableDataRow,
                                                    style: {
                                                        gridTemplateColumns: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_COLUMNS"]
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableCellPad,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: row.enabled,
                                                                onChange: (e)=>updateRow(setParamsRows, rowIndex, "enabled", e.target.checked)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/api-playground/page.js",
                                                                lineNumber: 178,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-playground/page.js",
                                                            lineNumber: 177,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: row.key,
                                                            onChange: (e)=>updateRow(setParamsRows, rowIndex, "key", e.target.value),
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableInput
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-playground/page.js",
                                                            lineNumber: 184,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: row.value,
                                                            onChange: (e)=>updateRow(setParamsRows, rowIndex, "value", e.target.value),
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableInput
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-playground/page.js",
                                                            lineNumber: 189,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: row.description,
                                                            onChange: (e)=>updateRow(setParamsRows, rowIndex, "description", e.target.value),
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableInput
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-playground/page.js",
                                                            lineNumber: 194,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>removeRow(setParamsRows, rowIndex),
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconBtn,
                                                            children: "x"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-playground/page.js",
                                                            lineNumber: 199,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, `param-${rowIndex}`, true, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 176,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api-playground/page.js",
                                            lineNumber: 174,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>addRow(setParamsRows),
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addRowBtn,
                                            children: "+ Add Param"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api-playground/page.js",
                                            lineNumber: 210,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/api-playground/page.js",
                                    lineNumber: 165,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/api-playground/page.js",
                                lineNumber: 164,
                                columnNumber: 25
                            }, this),
                            activeTab === "Headers" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabPanel,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dataCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableHeaderRow,
                                            style: {
                                                gridTemplateColumns: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_COLUMNS"]
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableHeaderCell,
                                                    children: "On"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 225,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableHeaderCell,
                                                    children: "Key"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 226,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableHeaderCell,
                                                    children: "Value"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 227,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableHeaderCell,
                                                    children: "Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 228,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableHeaderCell
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 229,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/api-playground/page.js",
                                            lineNumber: 224,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableBody,
                                            children: headerRows.map((row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableDataRow,
                                                    style: {
                                                        gridTemplateColumns: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_COLUMNS"]
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableCellPad,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: row.enabled,
                                                                onChange: (e)=>updateRow(setHeaderRows, rowIndex, "enabled", e.target.checked)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/api-playground/page.js",
                                                                lineNumber: 236,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-playground/page.js",
                                                            lineNumber: 235,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: row.key,
                                                            onChange: (e)=>updateRow(setHeaderRows, rowIndex, "key", e.target.value),
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableInput
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-playground/page.js",
                                                            lineNumber: 242,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: row.value,
                                                            onChange: (e)=>updateRow(setHeaderRows, rowIndex, "value", e.target.value),
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableInput
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-playground/page.js",
                                                            lineNumber: 247,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: row.description,
                                                            onChange: (e)=>updateRow(setHeaderRows, rowIndex, "description", e.target.value),
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableInput
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-playground/page.js",
                                                            lineNumber: 252,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>removeRow(setHeaderRows, rowIndex),
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconBtn,
                                                            children: "x"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-playground/page.js",
                                                            lineNumber: 257,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, `header-${rowIndex}`, true, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 234,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api-playground/page.js",
                                            lineNumber: 232,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>addRow(setHeaderRows),
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addRowBtn,
                                            children: "+ Add Header"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api-playground/page.js",
                                            lineNumber: 268,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/api-playground/page.js",
                                    lineNumber: 223,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/api-playground/page.js",
                                lineNumber: 222,
                                columnNumber: 25
                            }, this),
                            activeTab === "Body" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textareaWrap,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: bodyInput,
                                    onChange: (e)=>setBodyInput(e.target.value),
                                    onBlur: ()=>setBodyInput((prev)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatJsonIfPossible"](prev)),
                                    disabled: !canSendBody,
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textarea} ${canSendBody ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textareaEnabled : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textareaDisabled}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/api-playground/page.js",
                                    lineNumber: 281,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/api-playground/page.js",
                                lineNumber: 280,
                                columnNumber: 25
                            }, this),
                            activeTab === "cURL" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].curlWrap,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].curlRelative,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: onCopyCurlClick,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].copyBtn,
                                            "aria-label": "Copy cURL",
                                            title: "Copy cURL",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/assets/copy.svg",
                                                alt: "",
                                                width: "16",
                                                height: "16",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/api-playground/page.js",
                                                lineNumber: 301,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api-playground/page.js",
                                            lineNumber: 294,
                                            columnNumber: 33
                                        }, this),
                                        copyMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].copyMessage,
                                            children: copyMessage
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api-playground/page.js",
                                            lineNumber: 304,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: curlCommand,
                                            readOnly: true,
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textarea} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textareaReadOnly}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api-playground/page.js",
                                            lineNumber: 309,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/api-playground/page.js",
                                    lineNumber: 293,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/api-playground/page.js",
                                lineNumber: 292,
                                columnNumber: 25
                            }, this),
                            activeTab === "Import cURL" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].importPanel,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: importCurlText,
                                        onChange: (e)=>setImportCurlText(e.target.value),
                                        placeholder: "Paste cURL here...",
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textarea} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textareaEnabled}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/api-playground/page.js",
                                        lineNumber: 320,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].importActions,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: onImportCurlClick,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryBtn,
                                                children: "Import to Request"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/api-playground/page.js",
                                                lineNumber: 328,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].importStatus,
                                                children: importMessage
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/api-playground/page.js",
                                                lineNumber: 336,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/api-playground/page.js",
                                        lineNumber: 327,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/api-playground/page.js",
                                lineNumber: 319,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].responseSection,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].responseTitle,
                                        children: "Response"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/api-playground/page.js",
                                        lineNumber: 342,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: responsePreview,
                                        readOnly: true,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$apiPlayground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].responseText
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/api-playground/page.js",
                                        lineNumber: 343,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/api-playground/page.js",
                                lineNumber: 341,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/api-playground/page.js",
                        lineNumber: 91,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/api-playground/page.js",
                lineNumber: 88,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/api-playground/page.js",
        lineNumber: 81,
        columnNumber: 9
    }, this);
}
_s(ApiPlaygroundPage, "DyM625je+EZ5JBImR0MVdHGU/uM=");
_c = ApiPlaygroundPage;
var _c;
__turbopack_context__.k.register(_c, "ApiPlaygroundPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_api-playground_ac0287d7._.js.map