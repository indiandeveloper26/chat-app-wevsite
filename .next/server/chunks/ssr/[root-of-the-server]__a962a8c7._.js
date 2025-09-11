module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/app/apicall.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// component/api.js
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
// ✅ Axios instance banao
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
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
}),
"[project]/app/postshow/page.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// "use client";
// import { useEffect, useState } from "react";
// import api from "../apicall.js";
// export default function FeedScreen() {
//     const [posts, setPosts] = useState([]);
//     const [selectedPost, setSelectedPost] = useState(null);
//     const [commentText, setCommentText] = useState("");
//     // ✅ Backend se posts fetch
//     const fetchPosts = async () => {
//         try {
//             let res = await api.get("/userget");
//             setPosts(res.data);
//             console.log("Posts:", res.data);
//         } catch (error) {
//             console.log("Fetch error", error.message);
//         }
//     };
//     useEffect(() => {
//         fetchPosts();
//     }, []);
//     // ✅ Like button
//     const handleLike = async (postId) => {
//         // console.log('like now')
//         try {
//             const userId = localStorage.getItem("id");
//             if (!userId) return;
//             const res = await api.post("/like", { userId, postId });
//             const updatedLikes = res.data.likes; // backend se likes array return hona chahiye
//             // UI update
//             setPosts((prev) =>
//                 prev.map((p) =>
//                     p._id === postId ? { ...p, likes: updatedLikes } : p
//                 )
//             );
//         } catch (error) {
//             console.log("Like Error:", error);
//         }
//     };
//     // ✅ Comment button
//     const handleComment = async (postId) => {
//         if (!commentText.trim()) return;
//         const userId = localStorage.getItem("id");
//         try {
//             const res = await api.post("/cmt", { userId, postId, text: commentText });
//             console.log(res.data)
//             const newComment = res.data.comment;
//             setPosts((prev) =>
//                 prev.map((p) =>
//                     p._id === postId
//                         ? { ...p, comments: [...p.comments, newComment] }
//                         : p
//                 )
//             );
//             setCommentText("");
//             setSelectedPost(null);
//         } catch (error) {
//             console.log("Comment Error:", error);
//         }
//     };
//     return (
//         <div className="bg-gray-100 min-h-screen p-4">
//             {/* New Post Button */}
//             <button
//                 onClick={() => (window.location.href = "/post")}
//                 className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4"
//             >
//                 ➕ New Post
//             </button>
//             {/* Posts */}
//             <div className="space-y-4">
//                 {posts.map((item) => (
//                     <div key={item._id} className="bg-white p-4 rounded-lg shadow">
//                         <p className="font-bold">👤 {item.username}</p>
//                         <p className="mb-2">{item.content}</p>
//                         {item.image && (
//                             <img
//                                 src={`http://localhost:5000${item.image}`}
//                                 alt="post"
//                                 className="w-full h-60 object-cover rounded-md mb-2"
//                             />
//                         )}
//                         {/* Likes + Comments */}
//                         <div className="flex justify-between">
//                             <button onClick={() => handleLike(item._id)}>
//                                 💖 {item.likes.length}
//                             </button>
//                             <button onClick={() => setSelectedPost(item)}>
//                                 💬 {item.comments.length}
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             {/* Comment Modal */}
//             {selectedPost && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                     <div className="bg-white p-6 rounded-lg w-96">
//                         <h2 className="text-lg font-bold mb-3">Comments</h2>
//                         {selectedPost.comments.map((c, i) => (
//                             <p key={i} className="mb-1">• {c.text}</p>
//                         ))}
//                         <input
//                             value={commentText}
//                             onChange={(e) => setCommentText(e.target.value)}
//                             placeholder="Write a comment..."
//                             className="border p-2 w-full mb-3 rounded"
//                         />
//                         <div className="flex gap-2">
//                             <button
//                                 onClick={() => handleComment(selectedPost._id)}
//                                 className="bg-green-500 text-white px-3 py-1 rounded"
//                             >
//                                 Post Comment
//                             </button>
//                             <button
//                                 onClick={() => setSelectedPost(null)}
//                                 className="bg-red-500 text-white px-3 py-1 rounded"
//                             >
//                                 Close
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }
__turbopack_context__.s({
    "default": ()=>FeedScreen
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$apicall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/apicall.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function FeedScreen() {
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedPost, setSelectedPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [commentText, setCommentText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // ✅ Backend se posts fetch
    const fetchPosts = async ()=>{
        try {
            let res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$apicall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("/userget");
            setPosts(res.data);
            console.log("Posts:", res.data);
        } catch (error) {
            console.log("Fetch error", error.message);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchPosts();
    }, []);
    // ✅ Like button
    const handleLike = async (postId)=>{
        try {
            const userId = localStorage.getItem("id");
            if (!userId) return;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$apicall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/like", {
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
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$apicall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/cmt", {
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
    let route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // ✅ Delete Post
    const handleDelete = async (postId)=>{
        console.log(postId);
        if (!confirm("Are you sure you want to delete this post?")) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$apicall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete("/delatepost", {
                data: {
                    id: postId
                }
            });
            // UI update
            setPosts((prev)=>prev.filter((p)=>p._id !== postId));
        } catch (error) {
            ``;
            console.log("Delete Error:", error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-100 min-h-screen p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>window.location.href = "/post",
                className: "bg-blue-500 text-white px-4 py-2 rounded-lg mb-4",
                children: "➕ New Post"
            }, void 0, false, {
                fileName: "[project]/app/postshow/page.jsx",
                lineNumber: 246,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    posts.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-4 rounded-lg shadow cursor-pointer",
                            onClick: ()=>setSelectedPost(item),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    onClick: ()=>route.push('/postuserprofile'),
                                    className: "font-bold",
                                    children: [
                                        "👤 ",
                                        item.username
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/postshow/page.jsx",
                                    lineNumber: 261,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-2",
                                    children: item.content
                                }, void 0, false, {
                                    fileName: "[project]/app/postshow/page.jsx",
                                    lineNumber: 262,
                                    columnNumber: 25
                                }, this),
                                item.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: `http://localhost:5000${item.image}`,
                                    alt: "post",
                                    className: "w-full h-60 object-cover rounded-md mb-2"
                                }, void 0, false, {
                                    fileName: "[project]/app/postshow/page.jsx",
                                    lineNumber: 265,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                    lineNumber: 274,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                    lineNumber: 277,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/postshow/page.jsx",
                                            lineNumber: 273,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                handleDelete(item._id);
                                            },
                                            className: "bg-red-500 text-white px-2 py-1 rounded",
                                            children: "🗑️ Delete"
                                        }, void 0, false, {
                                            fileName: "[project]/app/postshow/page.jsx",
                                            lineNumber: 281,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/postshow/page.jsx",
                                    lineNumber: 272,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, item._id, true, {
                            fileName: "[project]/app/postshow/page.jsx",
                            lineNumber: 256,
                            columnNumber: 21
                        }, this)),
                    selectedPost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-auto p-4 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedPost(null),
                                    className: "absolute top-2 right-2 text-red-500 font-bold text-xl",
                                    children: "✖"
                                }, void 0, false, {
                                    fileName: "[project]/app/postshow/page.jsx",
                                    lineNumber: 295,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-lg mb-2",
                                    children: [
                                        "👤 ",
                                        selectedPost.username
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/postshow/page.jsx",
                                    lineNumber: 302,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-2",
                                    children: selectedPost.content
                                }, void 0, false, {
                                    fileName: "[project]/app/postshow/page.jsx",
                                    lineNumber: 303,
                                    columnNumber: 29
                                }, this),
                                selectedPost.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: `http://localhost:5000${selectedPost.image}`,
                                    alt: "post",
                                    className: "w-full max-h-96 object-cover rounded-md mb-2"
                                }, void 0, false, {
                                    fileName: "[project]/app/postshow/page.jsx",
                                    lineNumber: 306,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleLike(selectedPost._id),
                                            children: [
                                                "💖 ",
                                                selectedPost.likes.length
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/postshow/page.jsx",
                                            lineNumber: 314,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{},
                                            children: [
                                                "💬 ",
                                                selectedPost.comments.length
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/postshow/page.jsx",
                                            lineNumber: 317,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleDelete(selectedPost._id),
                                            className: "bg-red-500 text-white px-2 py-1 rounded",
                                            children: "🗑️ Delete"
                                        }, void 0, false, {
                                            fileName: "[project]/app/postshow/page.jsx",
                                            lineNumber: 320,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/postshow/page.jsx",
                                    lineNumber: 313,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3",
                                    children: selectedPost.comments.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-1",
                                            children: [
                                                "• ",
                                                c.text
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/app/postshow/page.jsx",
                                            lineNumber: 330,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/postshow/page.jsx",
                                    lineNumber: 328,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: commentText,
                                    onChange: (e)=>setCommentText(e.target.value),
                                    placeholder: "Write a comment...",
                                    className: "border p-2 w-full mb-3 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/app/postshow/page.jsx",
                                    lineNumber: 334,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleComment(selectedPost._id),
                                    className: "bg-green-500 text-white px-3 py-1 rounded w-full",
                                    children: "Post Comment"
                                }, void 0, false, {
                                    fileName: "[project]/app/postshow/page.jsx",
                                    lineNumber: 340,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/postshow/page.jsx",
                            lineNumber: 294,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/postshow/page.jsx",
                        lineNumber: 293,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/postshow/page.jsx",
                lineNumber: 254,
                columnNumber: 13
            }, this),
            selectedPost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 rounded-lg w-96",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-bold mb-3",
                            children: "Comments"
                        }, void 0, false, {
                            fileName: "[project]/app/postshow/page.jsx",
                            lineNumber: 356,
                            columnNumber: 25
                        }, this),
                        selectedPost.comments.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-1",
                                children: [
                                    "• ",
                                    c.text
                                ]
                            }, i, true, {
                                fileName: "[project]/app/postshow/page.jsx",
                                lineNumber: 359,
                                columnNumber: 29
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: commentText,
                            onChange: (e)=>setCommentText(e.target.value),
                            placeholder: "Write a comment...",
                            className: "border p-2 w-full mb-3 rounded"
                        }, void 0, false, {
                            fileName: "[project]/app/postshow/page.jsx",
                            lineNumber: 362,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleComment(selectedPost._id),
                                    className: "bg-green-500 text-white px-3 py-1 rounded",
                                    children: "Post Comment"
                                }, void 0, false, {
                                    fileName: "[project]/app/postshow/page.jsx",
                                    lineNumber: 369,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedPost(null),
                                    className: "bg-red-500 text-white px-3 py-1 rounded",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/app/postshow/page.jsx",
                                    lineNumber: 375,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/postshow/page.jsx",
                            lineNumber: 368,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/postshow/page.jsx",
                    lineNumber: 355,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/postshow/page.jsx",
                lineNumber: 354,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/postshow/page.jsx",
        lineNumber: 244,
        columnNumber: 9
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__a962a8c7._.js.map