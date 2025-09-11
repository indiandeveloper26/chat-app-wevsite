(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/postshow/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// "use client";
// import { useEffect, useState } from "react";
// import api from "../apicall.js";
// import { useRouter } from "next/navigation";
// export default function FeedScreen() {
//     const [posts, setPosts] = useState([]);
//     const [selectedPost, setSelectedPost] = useState(null);
//     const [commentText, setCommentText] = useState("");
//     console.log(posts)
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
//         try {
//             const userId = localStorage.getItem("id");
//             if (!userId) return;
//             const res = await api.post("/like", { userId, postId });
//             const updatedLikes = res.data.likes;
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
//     let route = useRouter()
//     // ✅ Delete Post
//     const handleDelete = async (postId) => {
//         console.log(
//             postId
//         )
//         if (!confirm("Are you sure you want to delete this post?")) return;
//         try {
//             await api.delete("/delatepost", { data: { id: postId } });
//             // UI update
//             setPosts((prev) => prev.filter((p) => p._id !== postId));
//         } catch (error) {
//             ``
//             console.log("Delete Error:", error);
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
//                     <div
//                         key={item._id}
//                         className="bg-white p-4 rounded-lg shadow cursor-pointer"
//                         onClick={() => setSelectedPost(item)} // click se modal open
//                     >
//                         <p onClick={() => route.push(`/postshow/${item.user}`)} className="font-bold">
//                             👤 {item.username}
//                         </p>
//                         <p className="mb-2">{item.content}</p>
//                         {item.image && (
//                             <img
//                                 src={`http://localhost:5000${item.image}`}
//                                 alt="post"
//                                 className="w-full h-60 object-cover rounded-md mb-2"
//                             />
//                         )}
//                         <div className="flex justify-between items-center">
//                             <div className="flex gap-2">
//                                 <button onClick={(e) => { e.stopPropagation(); handleLike(item._id); }}>
//                                     💖 {item.likes.length}
//                                 </button>
//                                 <button onClick={(e) => { e.stopPropagation(); setSelectedPost(item); }}>
//                                     💬 {item.comments.length}
//                                 </button>
//                             </div>
//                             <button
//                                 onClick={(e) => { e.stopPropagation(); handleDelete(item._id); }}
//                                 className="bg-red-500 text-white px-2 py-1 rounded"
//                             >
//                                 🗑️ Delete
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//                 {/* Full Post Modal */}
//                 {selectedPost && (
//                     <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//                         <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-auto p-4 relative">
//                             <button
//                                 onClick={() => setSelectedPost(null)}
//                                 className="absolute top-2 right-2 text-red-500 font-bold text-xl"
//                             >
//                                 ✖
//                             </button>
//                             <p className="font-bold text-lg mb-2">👤 {selectedPost.username}</p>
//                             <p className="mb-2">{selectedPost.content}</p>
//                             {selectedPost.image && (
//                                 <img
//                                     src={`http://localhost:5000${selectedPost.image}`}
//                                     alt="post"
//                                     className="w-full max-h-96 object-cover rounded-md mb-2"
//                                 />
//                             )}
//                             <div className="flex justify-between items-center mb-3">
//                                 <button onClick={() => handleLike(selectedPost._id)}>
//                                     💖 {selectedPost.likes.length}
//                                 </button>
//                                 <button onClick={() => { }}>
//                                     💬 {selectedPost.comments.length}
//                                 </button>
//                                 <button
//                                     onClick={() => handleDelete(selectedPost._id)}
//                                     className="bg-red-500 text-white px-2 py-1 rounded"
//                                 >
//                                     🗑️ Delete
//                                 </button>
//                             </div>
//                             <div className="mb-3">
//                                 {selectedPost.comments.map((c, i) => (
//                                     <p key={i} className="mb-1">• {c.text}</p>
//                                 ))}
//                             </div>
//                             <input
//                                 value={commentText}
//                                 onChange={(e) => setCommentText(e.target.value)}
//                                 placeholder="Write a comment..."
//                                 className="border p-2 w-full mb-3 rounded"
//                             />
//                             <button
//                                 onClick={() => handleComment(selectedPost._id)}
//                                 className="bg-green-500 text-white px-3 py-1 rounded w-full"
//                             >
//                                 Post Comment
//                             </button>
//                         </div>
//                     </div>
//                 )}
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
    "default": ()=>PostUserData
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function PostUserData(param) {
    let { id, currentUserId } = param;
    var _user_posts, _user_followers, _user_following, _user_posts1;
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isFollowing, setIsFollowing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [buttonLoading, setButtonLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PostUserData.useEffect": ()=>{
            if (!id) return;
            const fetchUser = {
                "PostUserData.useEffect.fetchUser": async ()=>{
                    try {
                        var _userData_followers;
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("http://localhost:5000/postuserprofile", {
                            id
                        });
                        const userData = res.data;
                        setUser(userData);
                        setIsFollowing((_userData_followers = userData.followers) === null || _userData_followers === void 0 ? void 0 : _userData_followers.includes(currentUserId));
                    } catch (err) {
                        console.error("Error fetching user", err);
                    } finally{
                        setLoading(false);
                    }
                }
            }["PostUserData.useEffect.fetchUser"];
            fetchUser();
        }
    }["PostUserData.useEffect"], [
        id,
        currentUserId
    ]);
    const handleFollowToggle = async ()=>{
        alert('follw');
        if (!user) return;
        setButtonLoading(true);
        try {
            const action = isFollowing ? "unfollow" : "follow";
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("http://localhost:5000/follw");
            alert('follw');
            console.log('follw');
            console.log(res);
            // update followers locally
            setUser((prev)=>({
                    ...prev,
                    followers: res.data.followers
                }));
            setIsFollowing(!isFollowing);
        } catch (err) {
            console.error(err);
        } finally{
            setButtonLoading(false);
        }
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/app/postshow/page.jsx",
        lineNumber: 321,
        columnNumber: 25
    }, this);
    if (!user) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "User not found"
    }, void 0, false, {
        fileName: "[project]/app/postshow/page.jsx",
        lineNumber: 322,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 max-w-2xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-6 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "http://localhost:5000/".concat(user.avatar || "default-avatar.png"),
                        alt: user.name,
                        className: "w-24 h-24 rounded-full border-2 border-gray-300"
                    }, void 0, false, {
                        fileName: "[project]/app/postshow/page.jsx",
                        lineNumber: 328,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold",
                                children: user.name
                            }, void 0, false, {
                                fileName: "[project]/app/postshow/page.jsx",
                                lineNumber: 334,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: user.bio || "No bio yet"
                            }, void 0, false, {
                                fileName: "[project]/app/postshow/page.jsx",
                                lineNumber: 335,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-6 mt-3 text-sm text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: ((_user_posts = user.posts) === null || _user_posts === void 0 ? void 0 : _user_posts.length) || 0
                                            }, void 0, false, {
                                                fileName: "[project]/app/postshow/page.jsx",
                                                lineNumber: 337,
                                                columnNumber: 31
                                            }, this),
                                            " Posts"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/postshow/page.jsx",
                                        lineNumber: 337,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: ((_user_followers = user.followers) === null || _user_followers === void 0 ? void 0 : _user_followers.length) || 0
                                            }, void 0, false, {
                                                fileName: "[project]/app/postshow/page.jsx",
                                                lineNumber: 338,
                                                columnNumber: 31
                                            }, this),
                                            " Followers"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/postshow/page.jsx",
                                        lineNumber: 338,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: ((_user_following = user.following) === null || _user_following === void 0 ? void 0 : _user_following.length) || 0
                                            }, void 0, false, {
                                                fileName: "[project]/app/postshow/page.jsx",
                                                lineNumber: 339,
                                                columnNumber: 31
                                            }, this),
                                            " Following"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/postshow/page.jsx",
                                        lineNumber: 339,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/postshow/page.jsx",
                                lineNumber: 336,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleFollowToggle,
                                disabled: buttonLoading,
                                className: "mt-4 px-4 py-2 rounded-lg shadow text-white transition ".concat(isFollowing ? "bg-gray-400 hover:bg-gray-500" : "bg-blue-500 hover:bg-blue-600"),
                                children: buttonLoading ? "..." : isFollowing ? "Unfollow" : "Follow"
                            }, void 0, false, {
                                fileName: "[project]/app/postshow/page.jsx",
                                lineNumber: 341,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/postshow/page.jsx",
                        lineNumber: 333,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/postshow/page.jsx",
                lineNumber: 327,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold mb-3",
                children: "Posts"
            }, void 0, false, {
                fileName: "[project]/app/postshow/page.jsx",
                lineNumber: 353,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-2",
                children: (_user_posts1 = user.posts) === null || _user_posts1 === void 0 ? void 0 : _user_posts1.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "http://localhost:5000/".concat(post.image.replace(/^\/+/, "")),
                        alt: "post",
                        className: "w-full h-full object-cover hover:scale-105 transition-transform rounded"
                    }, post._id, false, {
                        fileName: "[project]/app/postshow/page.jsx",
                        lineNumber: 356,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/postshow/page.jsx",
                lineNumber: 354,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/postshow/page.jsx",
        lineNumber: 325,
        columnNumber: 9
    }, this);
}
_s(PostUserData, "8v9mfmj2mZzxDdvmNfDfgx/XA+Q=");
_c = PostUserData;
var _c;
__turbopack_context__.k.register(_c, "PostUserData");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_postshow_page_jsx_4caed92c._.js.map