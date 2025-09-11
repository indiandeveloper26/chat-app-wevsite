(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/post/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>CreatePostPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CreatePostPage() {
    _s();
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [image, setImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 📌 Image select
    const handleImageChange = (e)=>{
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };
    // 📌 Submit Post
    const handlePost = async ()=>{
        if (!content.trim() && !image) {
            alert("⚠️ Write something or select an image");
            return;
        }
        setLoading(true);
        try {
            const user = JSON.parse(localStorage.getItem("user") || "{}");
            const formData = new FormData();
            formData.append("id", user._id);
            formData.append("content", content);
            if (image) {
                formData.append("image", image);
            }
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/post", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            console.log("✅ Upload Success:", res.data);
            alert("✅ Post created successfully!");
            setContent("");
            setImage(null);
        } catch (error) {
            var _error_response;
            console.error("❌ Upload Error:", ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error.message);
            alert("❌ Could not create post");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 flex justify-center items-center p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white w-full max-w-lg p-6 rounded-2xl shadow-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-center mb-4 text-gray-800",
                    children: "Create Post"
                }, void 0, false, {
                    fileName: "[project]/app/post/page.jsx",
                    lineNumber: 56,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    placeholder: "What's on your mind?",
                    className: "w-full border border-gray-300 rounded-lg p-3 min-h-[100px] mb-4 focus:ring-2 focus:ring-blue-500 outline-none",
                    value: content,
                    onChange: (e)=>setContent(e.target.value)
                }, void 0, false, {
                    fileName: "[project]/app/post/page.jsx",
                    lineNumber: 61,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            accept: "image/*",
                            onChange: handleImageChange,
                            className: "block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                        }, void 0, false, {
                            fileName: "[project]/app/post/page.jsx",
                            lineNumber: 70,
                            columnNumber: 21
                        }, this),
                        image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: URL.createObjectURL(image),
                            alt: "Preview",
                            className: "mt-3 w-full h-60 object-cover rounded-lg"
                        }, void 0, false, {
                            fileName: "[project]/app/post/page.jsx",
                            lineNumber: 77,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/post/page.jsx",
                    lineNumber: 69,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handlePost,
                    disabled: loading,
                    className: "w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-60",
                    children: loading ? "Posting..." : "Post"
                }, void 0, false, {
                    fileName: "[project]/app/post/page.jsx",
                    lineNumber: 86,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/post/page.jsx",
            lineNumber: 55,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/post/page.jsx",
        lineNumber: 54,
        columnNumber: 9
    }, this);
}
_s(CreatePostPage, "owtdu1VxAUFS7MBiGvj1vW1I550=");
_c = CreatePostPage;
var _c;
__turbopack_context__.k.register(_c, "CreatePostPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_post_page_jsx_ed4165ed._.js.map