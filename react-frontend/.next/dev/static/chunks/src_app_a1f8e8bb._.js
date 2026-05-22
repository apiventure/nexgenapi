(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/api-playground/CollectionsPane.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CollectionsPane
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    _s();
    const [collections, setCollections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_COLLECTIONS);
    const [newCollection, setNewCollection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [pendingDeleteIndex, setPendingDeleteIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [panelWidth, setPanelWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(PANEL_WIDTH.initial);
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
            const maxWidth = Math.min(PANEL_WIDTH.max, Math.max(PANEL_WIDTH.preferredMin, containerWidth - PANEL_WIDTH.contentReserve - PANEL_WIDTH.gap));
            const minWidth = Math.min(PANEL_WIDTH.min, maxWidth);
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    margin: 0,
                    fontSize: 20,
                    color: "#10203a"
                },
                children: "Collections"
            }, void 0, false, {
                fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 10,
                    marginTop: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 14,
                    flex: 1,
                    minHeight: 0,
                    overflowY: "auto",
                    paddingRight: 4,
                    paddingBottom: 10,
                    scrollPaddingBottom: 12
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    style: {
                        marginTop: 0,
                        marginBottom: 0,
                        paddingLeft: 0,
                        color: "#1f2a44",
                        listStyle: "none"
                    },
                    children: collections.map((collection, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
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
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: collection
                                }, void 0, false, {
                                    fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setPendingDeleteIndex(index),
                                    "aria-label": `Delete ${collection}`,
                                    style: {
                                        marginLeft: "auto",
                                        background: "transparent",
                                        border: "none",
                                        cursor: "pointer",
                                        padding: 0
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/assets/trash.svg",
                                        alt: "",
                                        width: "16",
                                        height: "16",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, `${collection}-${index}`, true, {
                            fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                            lineNumber: 158,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                    lineNumber: 156,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            pendingDeleteIndex !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    inset: 0,
                    zIndex: 1400,
                    background: "rgba(15, 23, 42, 0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: "min(420px, calc(100vw - 32px))",
                        background: "#ffffff",
                        border: "1px solid #d7e0ea",
                        borderRadius: 12,
                        paddingTop: 16,
                        paddingRight: 16,
                        paddingBottom: 14,
                        paddingLeft: 16,
                        boxShadow: "0 18px 42px rgba(15, 23, 42, 0.24)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontWeight: 700,
                                color: "#10203a"
                            },
                            children: "Delete Collection?"
                        }, void 0, false, {
                            fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: 8,
                                fontSize: 13,
                                color: "#334155"
                            },
                            children: [
                                "Are you sure you want to delete",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: collections[pendingDeleteIndex]
                                }, void 0, false, {
                                    fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                                    lineNumber: 225,
                                    columnNumber: 15
                                }, this),
                                "?. This action cannot be undone."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                            lineNumber: 222,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: 14,
                                display: "flex",
                                justifyContent: "flex-end",
                                gap: 8
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setPendingDeleteIndex(null),
                                    style: {
                                        border: "1px solid #c7d3e7",
                                        background: "#ffffff",
                                        color: "#334155",
                                        borderRadius: 8,
                                        padding: "8px 12px",
                                        fontWeight: 600,
                                        cursor: "pointer"
                                    },
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                                    lineNumber: 229,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>removeCollection(pendingDeleteIndex),
                                    style: {
                                        border: "1px solid #b91c1c",
                                        background: "#b91c1c",
                                        color: "#ffffff",
                                        borderRadius: 8,
                                        padding: "8px 12px",
                                        fontWeight: 700,
                                        cursor: "pointer"
                                    },
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                                    lineNumber: 244,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                            lineNumber: 228,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                    lineNumber: 208,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/api-playground/CollectionsPane.js",
                lineNumber: 197,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                lineNumber: 264,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/api-playground/CollectionsPane.js",
        lineNumber: 83,
        columnNumber: 5
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
"[project]/src/app/components/util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "APP_FONT",
    ()=>APP_FONT,
    "HTTP_METHODS",
    ()=>HTTP_METHODS,
    "REQUEST_TABS",
    ()=>REQUEST_TABS,
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
"[project]/src/app/api-playground/importCurl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleImportCurl",
    ()=>handleImportCurl,
    "parseAndImportCurl",
    ()=>parseAndImportCurl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/util.js [app-client] (ecmascript)");
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
    const bodyMatch = normalized.match(/(?:--data-raw|--data-binary|--data)\s+(?:'([^']*)'|"([^"]*)"|([^\s]+))/i);
    const body = bodyMatch ? bodyMatch[1] || bodyMatch[2] || bodyMatch[3] || "" : "";
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
    const emptyRow = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEmptyRow"]();
    if (parsed.baseUrl) {
        setUrl(parsed.baseUrl);
    }
    setParamsRows(parsed.paramsRows.length > 0 ? parsed.paramsRows : [
        emptyRow
    ]);
    setHeaderRows(parsed.headersRows.length > 0 ? parsed.headersRows : [
        emptyRow
    ]);
    setBodyInput(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatJsonIfPossible"](parsed.body || "{}"));
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTTP_METHODS"].includes(parsed.method)) {
        setMethod(parsed.method);
    }
    setImportCurlText("");
    setImportMessage("");
    setShowSuccessToast(true);
    setTimeout(()=>setShowSuccessToast(false), 2500);
    setActiveTab("Params");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/util.js [app-client] (ecmascript)");
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
    const curlHeaders = headerRows.filter((row)=>row.enabled && row.key.trim()).map((row)=>`--header '${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeSingleQuotes"])(row.key)}: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeSingleQuotes"])(row.value)}'`).join(" ");
    const curlBody = canSendBody && bodyInput.trim() ? `--data '${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeSingleQuotes"])(bodyInput)}'` : "";
    const curlCommand = [
        `curl --location --request ${method}`,
        `'${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeSingleQuotes"])(requestUrlPreview)}'`,
        curlHeaders,
        curlBody
    ].filter(Boolean).join(" \n");
    return {
        curlHeaders,
        curlBody,
        curlCommand
    };
}
const onCopyCurlClick = async (curlCommand, setCopyMessage)=>{
    try {
        await navigator.clipboard.writeText(curlCommand);
        setCopyMessage("Copied");
    } catch  {
        setCopyMessage("Copy failed");
    }
    setTimeout(()=>setCopyMessage(""), 1500);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/util.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ApiPlaygroundPage() {
    _s();
    const [method, setMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("GET");
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [paramsRows, setParamsRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [headerRows, setHeaderRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            enabled: true,
            key: "Content-Type",
            value: "application/json",
            description: ""
        }
    ]);
    const [bodyInput, setBodyInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("{}");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Params");
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
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEmptyRow"]()
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
    const responsePreview = `{"message": "Response will appear here after you connect request execution."}`;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            height: "100vh",
            boxSizing: "border-box",
            paddingTop: "28px",
            paddingRight: "28px",
            paddingBottom: "28px",
            paddingLeft: "28px",
            color: "#23272f",
            fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_FONT"],
            overflow: "hidden"
        },
        children: [
            showSuccessToast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                lineNumber: 82,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "stretch",
                    gap: 14,
                    height: "100%",
                    overflowX: "hidden",
                    overflowY: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2d$playground$2f$CollectionsPane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/api-playground/page.js",
                        lineNumber: 112,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 10,
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
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
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTTP_METHODS"].map((httpMethod)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: httpMethod,
                                                children: httpMethod
                                            }, httpMethod, false, {
                                                fileName: "[project]/src/app/api-playground/page.js",
                                                lineNumber: 147,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/api-playground/page.js",
                                        lineNumber: 134,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                        lineNumber: 153,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/api-playground/page.js",
                                lineNumber: 133,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                lineNumber: 168,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 12,
                                    display: "flex",
                                    gap: 8,
                                    borderBottom: "1px solid #dbe5f1",
                                    paddingBottom: 8
                                },
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_TABS"].map((tab)=>{
                                    const isActive = activeTab === tab;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                        lineNumber: 177,
                                        columnNumber: 33
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/api-playground/page.js",
                                lineNumber: 172,
                                columnNumber: 21
                            }, this),
                            activeTab === "Params" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 12
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        border: "1px solid #c7d3e7",
                                        borderRadius: 8,
                                        overflow: "hidden",
                                        background: "#fff",
                                        fontSize: 12
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "grid",
                                                gridTemplateColumns: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_COLUMNS"],
                                                background: "#f7fbff",
                                                fontWeight: 700,
                                                color: "#44516b"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "8px"
                                                    },
                                                    children: "On"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 209,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "8px"
                                                    },
                                                    children: "Key"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 210,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "8px"
                                                    },
                                                    children: "Value"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 211,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "8px"
                                                    },
                                                    children: "Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 212,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "8px"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 213,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/api-playground/page.js",
                                            lineNumber: 208,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                maxHeight: "20vh",
                                                overflowY: "auto"
                                            },
                                            children: paramsRows.map((row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "grid",
                                                        gridTemplateColumns: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_COLUMNS"],
                                                        borderTop: "1px solid #edf2f8"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                padding: "8px"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: row.enabled,
                                                                onChange: (e)=>updateRow(setParamsRows, rowIndex, "enabled", e.target.checked)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/api-playground/page.js",
                                                                lineNumber: 220,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-playground/page.js",
                                                            lineNumber: 219,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: row.key,
                                                            onChange: (e)=>updateRow(setParamsRows, rowIndex, "key", e.target.value),
                                                            style: {
                                                                border: "none",
                                                                borderLeft: "1px solid #edf2f8",
                                                                padding: "8px"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-playground/page.js",
                                                            lineNumber: 226,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: row.value,
                                                            onChange: (e)=>updateRow(setParamsRows, rowIndex, "value", e.target.value),
                                                            style: {
                                                                border: "none",
                                                                borderLeft: "1px solid #edf2f8",
                                                                padding: "8px"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-playground/page.js",
                                                            lineNumber: 231,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: row.description,
                                                            onChange: (e)=>updateRow(setParamsRows, rowIndex, "description", e.target.value),
                                                            style: {
                                                                border: "none",
                                                                borderLeft: "1px solid #edf2f8",
                                                                padding: "8px"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-playground/page.js",
                                                            lineNumber: 236,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                            lineNumber: 241,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, `param-${rowIndex}`, true, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 218,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api-playground/page.js",
                                            lineNumber: 216,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            lineNumber: 252,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/api-playground/page.js",
                                    lineNumber: 199,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/api-playground/page.js",
                                lineNumber: 198,
                                columnNumber: 25
                            }, this),
                            activeTab === "Headers" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 12
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        border: "1px solid #c7d3e7",
                                        borderRadius: 8,
                                        overflow: "hidden",
                                        background: "#fff",
                                        fontSize: 12
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "grid",
                                                gridTemplateColumns: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_COLUMNS"],
                                                background: "#f7fbff",
                                                fontWeight: 700,
                                                color: "#44516b"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "8px"
                                                    },
                                                    children: "On"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 275,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "8px"
                                                    },
                                                    children: "Key"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 276,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "8px"
                                                    },
                                                    children: "Value"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 277,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "8px"
                                                    },
                                                    children: "Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 278,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "8px"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 279,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/api-playground/page.js",
                                            lineNumber: 274,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                maxHeight: "20vh",
                                                overflowY: "auto"
                                            },
                                            children: headerRows.map((row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "grid",
                                                        gridTemplateColumns: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TABLE_COLUMNS"],
                                                        borderTop: "1px solid #edf2f8"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                padding: "8px"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: row.enabled,
                                                                onChange: (e)=>updateRow(setHeaderRows, rowIndex, "enabled", e.target.checked)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/api-playground/page.js",
                                                                lineNumber: 286,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-playground/page.js",
                                                            lineNumber: 285,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: row.key,
                                                            onChange: (e)=>updateRow(setHeaderRows, rowIndex, "key", e.target.value),
                                                            style: {
                                                                border: "none",
                                                                borderLeft: "1px solid #edf2f8",
                                                                padding: "8px"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-playground/page.js",
                                                            lineNumber: 292,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: row.value,
                                                            onChange: (e)=>updateRow(setHeaderRows, rowIndex, "value", e.target.value),
                                                            style: {
                                                                border: "none",
                                                                borderLeft: "1px solid #edf2f8",
                                                                padding: "8px"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-playground/page.js",
                                                            lineNumber: 297,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: row.description,
                                                            onChange: (e)=>updateRow(setHeaderRows, rowIndex, "description", e.target.value),
                                                            style: {
                                                                border: "none",
                                                                borderLeft: "1px solid #edf2f8",
                                                                padding: "8px"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/api-playground/page.js",
                                                            lineNumber: 302,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                            lineNumber: 307,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, `header-${rowIndex}`, true, {
                                                    fileName: "[project]/src/app/api-playground/page.js",
                                                    lineNumber: 284,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api-playground/page.js",
                                            lineNumber: 282,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            lineNumber: 318,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/api-playground/page.js",
                                    lineNumber: 265,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/api-playground/page.js",
                                lineNumber: 264,
                                columnNumber: 25
                            }, this),
                            activeTab === "Body" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 12,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 12
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: bodyInput,
                                    onChange: (e)=>setBodyInput(e.target.value),
                                    onBlur: ()=>setBodyInput((prev)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatJsonIfPossible"](prev)),
                                    disabled: !canSendBody,
                                    style: {
                                        width: "100%",
                                        minHeight: 260,
                                        border: "1px solid #c7d3e7",
                                        borderRadius: 8,
                                        padding: "10px 12px",
                                        boxSizing: "border-box",
                                        fontSize: 12,
                                        resize: "vertical",
                                        background: canSendBody ? "#fff" : "#f3f5f9"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/api-playground/page.js",
                                    lineNumber: 331,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/api-playground/page.js",
                                lineNumber: 330,
                                columnNumber: 25
                            }, this),
                            activeTab === "cURL" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 12
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "relative"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: onCopyCurlClick,
                                            style: {
                                                position: "absolute",
                                                top: 10,
                                                right: 10,
                                                zIndex: 2,
                                                border: "1px solid #c7d3e7",
                                                background: "#c7d3e7",
                                                borderRadius: 8,
                                                padding: "6px",
                                                lineHeight: 0,
                                                cursor: "pointer"
                                            },
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
                                                lineNumber: 372,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api-playground/page.js",
                                            lineNumber: 354,
                                            columnNumber: 33
                                        }, this),
                                        copyMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                position: "absolute",
                                                top: 46,
                                                right: 10,
                                                zIndex: 2,
                                                fontSize: 11,
                                                color: "#52627f",
                                                background: "#c7d3e7",
                                                border: "1px solid #dbe5f1",
                                                borderRadius: 6,
                                                padding: "2px 6px"
                                            },
                                            children: copyMessage
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api-playground/page.js",
                                            lineNumber: 375,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: curlCommand,
                                            readOnly: true,
                                            style: {
                                                width: "100%",
                                                minHeight: 260,
                                                border: "1px solid #c7d3e7",
                                                borderRadius: 8,
                                                padding: "10px 12px",
                                                boxSizing: "border-box",
                                                fontSize: 12,
                                                background: "#f8fafc"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api-playground/page.js",
                                            lineNumber: 393,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/api-playground/page.js",
                                    lineNumber: 353,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/api-playground/page.js",
                                lineNumber: 352,
                                columnNumber: 25
                            }, this),
                            activeTab === "Import cURL" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 12,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
                                            fontSize: 12,
                                            background: "#fff"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/api-playground/page.js",
                                        lineNumber: 413,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: onImportCurlClick,
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
                                                lineNumber: 430,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 12,
                                                    color: "#52627f"
                                                },
                                                children: importMessage
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/api-playground/page.js",
                                                lineNumber: 446,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/api-playground/page.js",
                                        lineNumber: 429,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/api-playground/page.js",
                                lineNumber: 412,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: 6,
                                            fontSize: 12,
                                            fontWeight: 700,
                                            color: "#30415f"
                                        },
                                        children: "Response"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/api-playground/page.js",
                                        lineNumber: 452,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: responsePreview,
                                        readOnly: true,
                                        style: {
                                            width: "100%",
                                            minHeight: 180,
                                            border: "1px solid #d7e1ef",
                                            borderRadius: 8,
                                            padding: "10px 12px",
                                            boxSizing: "border-box",
                                            fontSize: 12,
                                            background: "#ffffff",
                                            color: "#2a3447",
                                            resize: "vertical"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/api-playground/page.js",
                                        lineNumber: 453,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/api-playground/page.js",
                                lineNumber: 451,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/api-playground/page.js",
                        lineNumber: 114,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/api-playground/page.js",
                lineNumber: 102,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/api-playground/page.js",
        lineNumber: 68,
        columnNumber: 9
    }, this);
}
_s(ApiPlaygroundPage, "IxJsubQ31H8qo0qjFNECA8SiSRI=");
_c = ApiPlaygroundPage;
var _c;
__turbopack_context__.k.register(_c, "ApiPlaygroundPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_a1f8e8bb._.js.map