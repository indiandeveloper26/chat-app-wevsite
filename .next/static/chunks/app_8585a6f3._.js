(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/apicall.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// component/api.js
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
// ✅ Axios instance banao
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: 'http://10.17.254.92:5000',
    // baseURL: 'https://socail-app-backend-3.onrender.com', // yahan apna base URL daal
    // baseURL: 'https://firebase-chat-app-v-8-3.onrender.com', // yahan apna base URL daal
    timeout: 5000
});
// ✅ Request interceptor: Har request mein token lagana hai to
// api.interceptors.request.use(
//   async (config) => {
//     const token = await AsyncStorage.getItem('token'); // ya 'tokenn' jo bhi rakha ho
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );
// ✅ Response interceptor: agar chaho to response mein kuch kar sakte ho
api.interceptors.response.use((response)=>response, (error)=>{
    // yahan 401 error handle, logout, refresh token wagaira kar sakte ho
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/postshow/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>FeedScreen
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$apicall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/apicall.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function FeedScreen() {
    _s();
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedPost, setSelectedPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [commentText, setCommentText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    console.log(posts);
    // ✅ Backend se posts fetch
    const fetchPosts = async ()=>{
        try {
            let res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$apicall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/userget");
            setPosts(res.data);
            console.log("Posts:", res.data);
        } catch (error) {
            console.log("Fetch error", error.message);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FeedScreen.useEffect": ()=>{
            fetchPosts();
        }
    }["FeedScreen.useEffect"], []);
    // ✅ Like button
    const handleLike = async (postId)=>{
        try {
            const userId = localStorage.getItem("id");
            if (!userId) return;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$apicall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/like", {
                userId,
                postId
            });
            const updatedLikes = res.data.likes;
            setPosts((prev)=>prev.map((p)=>p._id === postId ? {
                        ...p,
                        likes: updatedLikes
                    } : p));
        } catch (error) {
            console.log("Like Error:", error);
        }
    };
    // ✅ Comment button
    const handleComment = async (postId)=>{
        if (!commentText.trim()) return;
        const userId = localStorage.getItem("id");
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$apicall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/cmt", {
                userId,
                postId,
                text: commentText
            });
            const newComment = res.data.comment;
            setPosts((prev)=>prev.map((p)=>p._id === postId ? {
                        ...p,
                        comments: [
                            ...p.comments,
                            newComment
                        ]
                    } : p));
            setCommentText("");
            setSelectedPost(null);
        } catch (error) {
            console.log("Comment Error:", error);
        }
    };
    let route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // ✅ Delete Post
    const handleDelete = async (postId)=>{
        console.log(postId);
        if (!confirm("Are you sure you want to delete this post?")) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$apicall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete("/delatepost", {
                data: {
                    id: postId
                }
            });
            // UI update
            setPosts((prev)=>prev.filter((p)=>p._id !== postId));
        } catch (error) {
            "";
            console.log("Delete Error:", error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-100 min-h-screen p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>window.location.href = "/post",
                className: "bg-blue-500 text-white px-4 py-2 rounded-lg mb-4",
                children: "➕ New Post"
            }, void 0, false, {
                fileName: "[project]/app/postshow/page.jsx",
                lineNumber: 104,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    posts.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-4 rounded-lg shadow cursor-pointer",
                            onClick: ()=>setSelectedPost(item),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    onClick: ()=>route.push("/postshow/".concat(item.user)),
                                    className: "font-bold",
                                    children: [
                                        "👤 ",
                                        item.username
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/postshow/page.jsx",
                                    lineNumber: 119,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-2",
                                    children: item.content
                                }, void 0, false, {
                                    fileName: "[project]/app/postshow/page.jsx",
                                    lineNumber: 122,
                                    columnNumber: 25
                                }, this),
                                item.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "http://localhost:5000".concat(item.image),
                                    alt: "post",
                                    className: "w-full h-60 object-cover rounded-md mb-2"
                                }, void 0, false, {
                                    fileName: "[project]/app/postshow/page.jsx",
                                    lineNumber: 125,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        handleLike(item._id);
                                                    },
                                                    children: [
                                                        "💖 ",
                                                        item.likes.length
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/postshow/page.jsx",
                                                    lineNumber: 134,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        setSelectedPost(item);
                                                    },
                                                    children: [
                                                        "💬 ",
                                                        item.comments.length
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/postshow/page.jsx",
                                                    lineNumber: 137,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/postshow/page.jsx",
                                            lineNumber: 133,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                handleDelete(item._id);
                                            },
                                            className: "bg-red-500 text-white px-2 py-1 rounded",
                                            children: "🗑️ Delete"
                                        }, void 0, false, {
                                            fileName: "[project]/app/postshow/page.jsx",
                                            lineNumber: 141,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/postshow/page.jsx",
                                    lineNumber: 132,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, item._id, true, {
                            fileName: "[project]/app/postshow/page.jsx",
                            lineNumber: 114,
                            columnNumber: 21
                        }, this)),
                    selectedPost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-auto p-4 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedPost(null),
                                    className: "absolute top-2 right-2 text-red-500 font-bold text-xl",
                                    children: "✖"
                                }, void 0, false, {
                                    fileName: "[project]/app/postshow/page.jsx",
                                    lineNumber: 155,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-lg mb-2",
                                    children: [
                                        "👤 ",
                                        selectedPost.username
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/postshow/page.jsx",
                                    lineNumber: 162,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-2",
                                    children: selectedPost.content
                                }, void 0, false, {
                                    fileName: "[project]/app/postshow/page.jsx",
                                    lineNumber: 163,
                                    columnNumber: 29
                                }, this),
                                selectedPost.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "http://localhost:5000".concat(selectedPost.image),
                                    alt: "post",
                                    className: "w-full max-h-96 object-cover rounded-md mb-2"
                                }, void 0, false, {
                                    fileName: "[project]/app/postshow/page.jsx",
                                    lineNumber: 166,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleLike(selectedPost._id),
                                            children: [
                                                "💖 ",
                                                selectedPost.likes.length
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/postshow/page.jsx",
                                            lineNumber: 174,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{},
                                            children: [
                                                "💬 ",
                                                selectedPost.comments.length
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/postshow/page.jsx",
                                            lineNumber: 177,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleDelete(selectedPost._id),
                                            className: "bg-red-500 text-white px-2 py-1 rounded",
                                            children: "🗑️ Delete"
                                        }, void 0, false, {
                                            fileName: "[project]/app/postshow/page.jsx",
                                            lineNumber: 180,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/postshow/page.jsx",
                                    lineNumber: 173,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3",
                                    children: selectedPost.comments.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-1",
                                            children: [
                                                "• ",
                                                c.text
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/app/postshow/page.jsx",
                                            lineNumber: 190,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/postshow/page.jsx",
                                    lineNumber: 188,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: commentText,
                                    onChange: (e)=>setCommentText(e.target.value),
                                    placeholder: "Write a comment...",
                                    className: "border p-2 w-full mb-3 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/app/postshow/page.jsx",
                                    lineNumber: 194,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleComment(selectedPost._id),
                                    className: "bg-green-500 text-white px-3 py-1 rounded w-full",
                                    children: "Post Comment"
                                }, void 0, false, {
                                    fileName: "[project]/app/postshow/page.jsx",
                                    lineNumber: 200,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/postshow/page.jsx",
                            lineNumber: 154,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/postshow/page.jsx",
                        lineNumber: 153,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/postshow/page.jsx",
                lineNumber: 112,
                columnNumber: 13
            }, this),
            selectedPost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 rounded-lg w-96",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-bold mb-3",
                            children: "Comments"
                        }, void 0, false, {
                            fileName: "[project]/app/postshow/page.jsx",
                            lineNumber: 216,
                            columnNumber: 25
                        }, this),
                        selectedPost.comments.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-1",
                                children: [
                                    "• ",
                                    c.text
                                ]
                            }, i, true, {
                                fileName: "[project]/app/postshow/page.jsx",
                                lineNumber: 219,
                                columnNumber: 29
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: commentText,
                            onChange: (e)=>setCommentText(e.target.value),
                            placeholder: "Write a comment...",
                            className: "border p-2 w-full mb-3 rounded"
                        }, void 0, false, {
                            fileName: "[project]/app/postshow/page.jsx",
                            lineNumber: 222,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleComment(selectedPost._id),
                                    className: "bg-green-500 text-white px-3 py-1 rounded",
                                    children: "Post Comment"
                                }, void 0, false, {
                                    fileName: "[project]/app/postshow/page.jsx",
                                    lineNumber: 229,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedPost(null),
                                    className: "bg-red-500 text-white px-3 py-1 rounded",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/app/postshow/page.jsx",
                                    lineNumber: 235,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/postshow/page.jsx",
                            lineNumber: 228,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/postshow/page.jsx",
                    lineNumber: 215,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/postshow/page.jsx",
                lineNumber: 214,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/postshow/page.jsx",
        lineNumber: 102,
        columnNumber: 9
    }, this);
} // "use client"
 // import React, { useEffect, useState } from "react"
 // import axios from "axios"
 // export default function PostUserData({ id, currentUserId }) {
 //     const [user, setUser] = useState(null)
 //     const [loading, setLoading] = useState(true)
 //     const [isFollowing, setIsFollowing] = useState(false)
 //     const [buttonLoading, setButtonLoading] = useState(false)
 //     useEffect(() => {
 //         if (!id) return
 //         const fetchUser = async () => {
 //             try {
 //                 const res = await axios.post("http://localhost:5000/postuserprofile", { id })
 //                 const userData = res.data
 //                 setUser(userData)
 //                 setIsFollowing(userData.followers?.includes(currentUserId))
 //             } catch (err) {
 //                 console.error("Error fetching user", err)
 //             } finally {
 //                 setLoading(false)
 //             }
 //         }
 //         fetchUser()
 //     }, [id, currentUserId])
 //     const handleFollowToggle = async () => {
 //         alert('follw')
 //         if (!user) return
 //         setButtonLoading(true)
 //         try {
 //             const action = isFollowing ? "unfollow" : "follow"
 //             const res = await axios.post("http://localhost:5000/follw")
 //             alert('follw')
 //             console.log('follw')
 //             console.log(res)
 //             // update followers locally
 //             setUser((prev) => ({
 //                 ...prev,
 //                 followers: res.data.followers
 //             }))
 //             setIsFollowing(!isFollowing)
 //         } catch (err) {
 //             console.error(err)
 //         } finally {
 //             setButtonLoading(false)
 //         }
 //     }
 //     if (loading) return <p>Loading...</p>
 //     if (!user) return <p>User not found</p>
 //     return (
 //         <div className="p-4 max-w-2xl mx-auto">
 //             {/* Profile Header */}
 //             <div className="flex items-center gap-6 mb-8">
 //                 <img
 //                     src={`http://localhost:5000/${user.avatar || "default-avatar.png"}`}
 //                     alt={user.name}
 //                     className="w-24 h-24 rounded-full border-2 border-gray-300"
 //                 />
 //                 <div>
 //                     <h1 className="text-2xl font-bold">{user.name}</h1>
 //                     <p className="text-gray-600">{user.bio || "No bio yet"}</p>
 //                     <div className="flex gap-6 mt-3 text-sm text-gray-700">
 //                         <span><b>{user.posts?.length || 0}</b> Posts</span>
 //                         <span><b>{user.followers?.length || 0}</b> Followers</span>
 //                         <span><b>{user.following?.length || 0}</b> Following</span>
 //                     </div>
 //                     <button
 //                         onClick={handleFollowToggle}
 //                         disabled={buttonLoading}
 //                         className={`mt-4 px-4 py-2 rounded-lg shadow text-white transition ${isFollowing ? "bg-gray-400 hover:bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
 //                             }`}
 //                     >
 //                         {buttonLoading ? "..." : isFollowing ? "Unfollow" : "Follow"}
 //                     </button>
 //                 </div>
 //             </div>
 //             {/* Posts Grid */}
 //             <h2 className="text-lg font-semibold mb-3">Posts</h2>
 //             <div className="grid grid-cols-3 gap-2">
 //                 {user.posts?.map((post) => (
 //                     <img
 //                         key={post._id}
 //                         src={`http://localhost:5000/${post.image.replace(/^\/+/, "")}`}
 //                         alt="post"
 //                         className="w-full h-full object-cover hover:scale-105 transition-transform rounded"
 //                     />
 //                 ))}
 //             </div>
 //         </div>
 //     )
 // }
_s(FeedScreen, "JEoTfV75r1AmGPSvqPgKuzJUiwc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = FeedScreen;
var _c;
__turbopack_context__.k.register(_c, "FeedScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_8585a6f3._.js.map