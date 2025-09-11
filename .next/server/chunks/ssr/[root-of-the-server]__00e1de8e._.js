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
"[project]/app/postshow/postuserdata.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// "use client"
// import React, { useEffect, useState } from "react"
// import axios from "axios"
// export default function Postuserdata({ id }) {
//     const [user, setUser] = useState(null)
//     const [loading, setLoading] = useState(true)
//     useEffect(() => {
//         if (!id) return
//         const fetchUser = async () => {
//             try {
//                 const res = await axios.post("http://localhost:5000/postuserprofile", { id })
//                 setUser(res.data)  // ✅ sirf user object set karo
//                 console.log('api data', res.data)
//             } catch (err) {
//                 console.error("Error fetching user", err)
//             } finally {
//                 setLoading(false)
//             }
//         }
//         fetchUser()
//     }, [id])
//     if (loading) return <p>Loading...</p>
//     if (!user) return <p>User not found</p>
//     return (
//         <div className="p-4 max-w-2xl mx-auto">
//             {/* Profile Header */}
//             <div className="flex items-center gap-4 mb-6">
//                 <img
//                     src={`http://localhost:5000/${user.avatar || "default-avatar.png"}`}
//                     alt={user.name}
//                     className="w-20 h-20 rounded-full border"
//                 />
//                 <div>
//                     <h1 className="text-2xl font-bold">{user.name}</h1>
//                     <p className="text-gray-600">{user.bio || "No bio yet"}</p>
//                 </div>
//             </div>
//             {/* Posts */}
//             <h2 className="text-lg font-semibold mb-3">Posts</h2>
//             <div className="grid grid-cols-3 gap-2">
//                 {user.posts?.map((post) => (
//                     <img
//                         key={post._id}
//                         src={`http://localhost:5000/${post.image.replace(/^\/+/, "")}`}
//                         alt="post"
//                         className="w-full h-full object-cover"
//                     />
//                 ))}
//             </div>
//         </div>
//     )
// }
// "use client"
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
//                 setUser(res.data)
//                 // check if current user is following
//                 setIsFollowing(res.data.user.followers?.includes(currentUserId))
//             } catch (err) {
//                 console.error("Error fetching user", err)
//             } finally {
//                 setLoading(false)
//             }
//         }
//         fetchUser()
//     }, [id, currentUserId])
//     const handleFollowToggle = async () => {
//         if (!user) return
//         setButtonLoading(true)
//         try {
//             const action = isFollowing ? "unfollow" : "follow"
//             const res = await axios.post("http://localhost:5000/follw", {
//                 userId: currentUserId,
//                 targetUserId: user._id
//             })
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
//                         className={`mt-4 px-4 py-2 rounded-lg shadow text-white transition ${isFollowing
//                             ? "bg-gray-400 hover:bg-gray-500"
//                             : "bg-blue-500 hover:bg-blue-600"
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
__turbopack_context__.s({
    "default": ()=>PostUserData
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function PostUserData({ id }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isFollowing, setIsFollowing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [buttonLoading, setButtonLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!id) return;
        const fetchUser = async ()=>{
            let currentUserId = localStorage.getItem('id');
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("http://localhost:5000/postuserprofile", {
                    id
                });
                console.log(res.data);
                const userData = res.data;
                setUser(userData);
                setIsFollowing(userData.followers?.includes(currentUserId));
            } catch (err) {
                console.error("Error fetching user", err);
            } finally{
                setLoading(false);
            }
        };
        fetchUser();
    }, [
        id
    ]);
    const handleFollowToggle = async ()=>{
        console.log('follwing');
        // alert('follw')
        if (!user) return;
        setButtonLoading(true);
        let currentUserId = localStorage.getItem('id');
        console.log(id, currentUserId);
        try {
            const action = isFollowing ? "unfollow" : "follow";
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("http://localhost:5000/follw", {
                userId: currentUserId,
                targetUserId: id
            });
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
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/app/postshow/postuserdata.jsx",
        lineNumber: 265,
        columnNumber: 25
    }, this);
    if (!user) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "User not found"
    }, void 0, false, {
        fileName: "[project]/app/postshow/postuserdata.jsx",
        lineNumber: 266,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 max-w-2xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-6 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: `http://localhost:5000/${user.avatar || "default-avatar.png"}`,
                        alt: user.name,
                        className: "w-24 h-24 rounded-full border-2 border-gray-300"
                    }, void 0, false, {
                        fileName: "[project]/app/postshow/postuserdata.jsx",
                        lineNumber: 272,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold",
                                children: user.name
                            }, void 0, false, {
                                fileName: "[project]/app/postshow/postuserdata.jsx",
                                lineNumber: 278,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: user.bio || "No bio yet"
                            }, void 0, false, {
                                fileName: "[project]/app/postshow/postuserdata.jsx",
                                lineNumber: 279,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-6 mt-3 text-sm text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: user.posts?.length || 0
                                            }, void 0, false, {
                                                fileName: "[project]/app/postshow/postuserdata.jsx",
                                                lineNumber: 281,
                                                columnNumber: 31
                                            }, this),
                                            " Posts"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/postshow/postuserdata.jsx",
                                        lineNumber: 281,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: user.followers?.length || 0
                                            }, void 0, false, {
                                                fileName: "[project]/app/postshow/postuserdata.jsx",
                                                lineNumber: 282,
                                                columnNumber: 31
                                            }, this),
                                            " Followers"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/postshow/postuserdata.jsx",
                                        lineNumber: 282,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: user.following?.length || 0
                                            }, void 0, false, {
                                                fileName: "[project]/app/postshow/postuserdata.jsx",
                                                lineNumber: 283,
                                                columnNumber: 31
                                            }, this),
                                            " Following"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/postshow/postuserdata.jsx",
                                        lineNumber: 283,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/postshow/postuserdata.jsx",
                                lineNumber: 280,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleFollowToggle,
                                disabled: buttonLoading,
                                className: `mt-4 px-4 py-2 rounded-lg shadow text-white transition ${isFollowing ? "bg-gray-400 hover:bg-gray-500" : "bg-blue-500 hover:bg-blue-600"}`,
                                children: buttonLoading ? "..." : isFollowing ? "Unfollow" : "Follow"
                            }, void 0, false, {
                                fileName: "[project]/app/postshow/postuserdata.jsx",
                                lineNumber: 285,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/postshow/postuserdata.jsx",
                        lineNumber: 277,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/postshow/postuserdata.jsx",
                lineNumber: 271,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold mb-3",
                children: "Posts"
            }, void 0, false, {
                fileName: "[project]/app/postshow/postuserdata.jsx",
                lineNumber: 297,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-2",
                children: user.posts?.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: `http://localhost:5000/${post.image.replace(/^\/+/, "")}`,
                        alt: "post",
                        className: "w-full h-full object-cover hover:scale-105 transition-transform rounded"
                    }, post._id, false, {
                        fileName: "[project]/app/postshow/postuserdata.jsx",
                        lineNumber: 300,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/postshow/postuserdata.jsx",
                lineNumber: 298,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/postshow/postuserdata.jsx",
        lineNumber: 269,
        columnNumber: 9
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__00e1de8e._.js.map