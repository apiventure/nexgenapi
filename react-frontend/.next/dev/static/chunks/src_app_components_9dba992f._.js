(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/springApiCalls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Utility to call the Spring Boot backend
__turbopack_context__.s([
    "executeApiRequest",
    ()=>executeApiRequest,
    "executeCurlRequest",
    ()=>executeCurlRequest,
    "fetchSpringApi",
    ()=>fetchSpringApi
]);
async function fetchSpringApi() {
    const endpoint = "http://localhost:8081/api/hello";
    const res = await fetch(endpoint);
    if (!res.ok) {
        throw new Error(`API call failed (${res.status})`);
    }
    return res.text();
}
async function executeApiRequest(requestJson) {
    const endpoint = "http://localhost:8081/api/executeCurl";
    const res = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestJson)
    });
    if (!res.ok) {
        throw new Error(`API call failed (${res.status})`);
    }
    return res.json();
}
async function executeCurlRequest(requestJson) {
    const endpoint = "http://localhost:8081/api/executeCurl";
    const res = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestJson)
    });
    if (!res.ok) {
        throw new Error(`CURL call failed (${res.status})`);
    }
    return res.json();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/home.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$springApiCalls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/springApiCalls.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Home() {
    _s();
    const [apiResult, setApiResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleClick = async ()=>{
        setLoading(true);
        setApiResult("");
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$springApiCalls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchSpringApi"])();
            setApiResult(result);
        } catch (e) {
            const message = e instanceof Error ? e.message : "Unknown error";
            setApiResult(`Error: ${message}`);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "72px 28px 28px",
            color: "#172033"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    margin: 0,
                    textAlign: "center",
                    maxWidth: 900,
                    fontSize: "clamp(1.75rem, 1.4vw, 2.6rem)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                    fontFamily: '"Avenir Next", "Segoe UI", sans-serif'
                },
                children: "Welcome to NEXUS API Studio"
            }, void 0, false, {
                fileName: "[project]/src/app/components/home.js",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    marginTop: 14,
                    marginBottom: 0,
                    textAlign: "center",
                    maxWidth: 860,
                    fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                    lineHeight: 1.65,
                    color: "#2b3a55",
                    fontFamily: '"Avenir Next", "Segoe UI", sans-serif'
                },
                children: "TIP-powered API testing platform built by the TIE Team. A unified workspace for designing, testing, and debugging APIs with speed and precision."
            }, void 0, false, {
                fileName: "[project]/src/app/components/home.js",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    marginTop: 14,
                    marginBottom: 0,
                    textAlign: "center",
                    maxWidth: 820,
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    color: "#51617d",
                    background: "#eef4ff",
                    border: "1px solid #d9e5ff",
                    borderRadius: 10,
                    padding: "10px 12px",
                    fontFamily: '"Avenir Next", "Segoe UI", sans-serif'
                },
                children: "Usage Notice: Use one workspace per team to keep setups minimal."
            }, void 0, false, {
                fileName: "[project]/src/app/components/home.js",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: handleClick,
                disabled: loading,
                style: {
                    marginTop: 24,
                    padding: "8px 16px",
                    fontSize: 16
                },
                children: loading ? "Calling Spring Boot API..." : "Call Spring Boot API"
            }, void 0, false, {
                fileName: "[project]/src/app/components/home.js",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            apiResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 16,
                    padding: 12,
                    border: "1px solid #c7d3e7",
                    borderRadius: 8,
                    background: "#f7faff",
                    color: "#1f2a44",
                    fontFamily: '"Avenir Next", "Segoe UI", sans-serif'
                },
                children: apiResult
            }, void 0, false, {
                fileName: "[project]/src/app/components/home.js",
                lineNumber: 95,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/home.js",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(Home, "yPsh+IPOFw6Rtp936vEl0WedzQQ=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_components_9dba992f._.js.map