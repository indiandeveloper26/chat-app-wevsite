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
    // baseURL: 'http://10.17.254.92:5000', // yahan apna base URL daal
    baseURL: 'https://socail-app-bakcend-v-2-2.onrender.com/',
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
"[project]/app/post/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// // "use client";
// // import { useEffect, useState } from "react";
// // import api from "../apicall.js";
// // export default function CreatePostPage() {
// //     const [content, setContent] = useState("");
// //     const [image, setImage] = useState(null);
// //     const [loading, setLoading] = useState(false);
// //     // 📌 Image select
// //     const handleImageChange = (e) => {
// //         if (e.target.files && e.target.files[0]) {
// //             setImage(e.target.files[0]);
// //         }
// //     };
// //     useEffect(() => {
// //         let apicall = async () => {
// //             try {
// //                 let data = (await api.get('api')).data
// //                 console.log(data)
// //             } catch (error) {
// //                 console.log('error',)
// //             }
// //         }
// //         apicall()
// //     }, [])
// //     // 📌 Submit Post
// //     const handlePost = async (e) => {
// //         e.preventDefault();
// //         if (!content.trim() && !image) {
// //             alert("⚠️ Write something or select an image");
// //             return;
// //         }
// //         setLoading(true);
// //         try {
// //             const user = JSON.parse(localStorage.getItem("user") || "{}");
// //             const formData = new FormData();
// //             formData.append("id", user._id); // must match backend 'id'
// //             formData.append("content", content);
// //             if (image) {
// //                 formData.append("image", image); // must match multer field name
// //             }
// //             // ✅ Do NOT manually set Content-Type
// //             const res = await api.get("post", formData);
// //             console.log("✅ Upload Success:", res.data);
// //             alert("✅ Post created successfully!");
// //             setContent("");
// //             setImage(null);
// //         } catch (error) {
// //             console.error(
// //                 "❌ Upload Error:",
// //                 error.response?.data || error.message || "Unknown Error"
// //             );
// //             alert("❌ Could not create post");
// //         } finally {
// //             setLoading(false);
// //         }
// //     };
// //     return (
// //         <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
// //             <div className="bg-white w-full max-w-lg p-6 rounded-2xl shadow-lg">
// //                 <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
// //                     Create Post
// //                 </h1>
// //                 <form onSubmit={handlePost}>
// //                     {/* Content */}
// //                     <textarea
// //                         placeholder="What's on your mind?"
// //                         className="w-full border border-gray-300 rounded-lg p-3 min-h-[100px] mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
// //                         value={content}
// //                         onChange={(e) => setContent(e.target.value)}
// //                     />
// //                     {/* Image Upload */}
// //                     <div className="mb-4">
// //                         <input
// //                             type="file"
// //                             accept="image/*"
// //                             onChange={handleImageChange}
// //                             className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
// //                         />
// //                         {image && (
// //                             <img
// //                                 src={URL.createObjectURL(image)}
// //                                 alt="Preview"
// //                                 className="mt-3 w-full h-60 object-cover rounded-lg"
// //                             />
// //                         )}
// //                     </div>
// //                     {/* Post Button */}
// //                     <button
// //                         type="submit"
// //                         disabled={loading}
// //                         className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-60"
// //                     >
// //                         {loading ? "Posting..." : "Post"}
// //                     </button>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // }
// "use client";
// import { useState } from "react";
// import api from "../apicall.js";
// export default function CreatePostPage() {
//     const [content, setContent] = useState("");
//     const [image, setImage] = useState(null);
//     const [loading, setLoading] = useState(false);
//     // 📌 Image select
//     const handleImageChange = (e) => {
//         if (e.target.files && e.target.files[0]) {
//             setImage(e.target.files[0]);
//         }
//     };
//     // 📌 Submit Post
//     return (
//         <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
//             <div className="bg-white w-full max-w-lg p-6 rounded-2xl shadow-lg">
//                 <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
//                     Create Post
//                 </h1>
//                 <form onSubmit={handlePost}>
//                     {/* Content */}
//                     <textarea
//                         placeholder="What's on your mind?"
//                         className="w-full border border-gray-300 rounded-lg p-3 min-h-[100px] mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
//                         value={content}
//                         onChange={(e) => setContent(e.target.value)}
//                     />
//                     {/* Image Upload */}
//                     <div className="mb-4">
//                         <input
//                             type="file"
//                             accept="image/*"
//                             onChange={handleImageChange}
//                             className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
//                         />
//                         {image && (
//                             <img
//                                 src={URL.createObjectURL(image)}
//                                 alt="Preview"
//                                 className="mt-3 w-full h-60 object-cover rounded-lg"
//                             />
//                         )}
//                     </div>
//                     {/* Post Button */}
//                     <button
//                         type="submit"
//                         disabled={loading}
//                         className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-60"
//                     >
//                         {loading ? "Posting..." : "Post"}
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }
// "use client";
// import { useEffect, useState } from "react";
// import api from "../apicall.js";
// export default function CreatePostPage() {
//     const [content, setContent] = useState("");
//     const [image, setImage] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const handleImageChange = (e) => {
//         if (e.target.files && e.target.files[0]) {
//             setImage(e.target.files[0]);
//         }
//     };
//     useEffect(() => {
//         let username = localStorage.getItem('user')
//         console.log('usernmae', username)
//     }, [])
//     const handlePost = async (e) => {
//         e.preventDefault();
//         if (!content.trim() && !image) {
//             alert("⚠️ Write something or select an image");
//             return;
//         }
//         setLoading(true);
//         let username = localStorage.getItem('user')
//         try {
//             // const user = localStorage.getItem('user')
//             const id = localStorage.getItem('id')
//             console.log('useid ', JSON.stringify(id))
//             const formData = new FormData();
//             formData.append("id", id);
//             formData.append("username", username);
//             formData.append("content", content);
//             if (image) formData.append("image", image);
//             // ✅ Yaha POST request hai, GET nahi
//             const res = await api.post("post", formData);
//             console.log("✅ Upload Success:", res.data);
//             // alert("✅ Post created successfully!");
//             setContent("");
//             setImage(null);
//         } catch (error) {
//             console.error(
//                 "❌ Upload Error:",
//                 // error.response?.data || error.message || "Unknown Error"
//                 error.message
//             );
//             alert("❌ Could not create post");
//         } finally {
//             setLoading(false);
//         }
//     };
//     return (
//         <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
//             <div className="bg-white w-full max-w-lg p-6 rounded-2xl shadow-lg">
//                 <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
//                     Create Post
//                 </h1>
//                 <form onSubmit={handlePost}>
//                     <textarea
//                         placeholder="What's on your mind?"
//                         className="w-full border border-gray-300 rounded-lg p-3 min-h-[100px] mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
//                         value={content}
//                         onChange={(e) => setContent(e.target.value)}
//                     />
//                     <div className="mb-4">
//                         <input
//                             type="file"
//                             accept="image/*"
//                             onChange={handleImageChange}
//                             className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
//                         />
//                         {image && (
//                             <img
//                                 src={URL.createObjectURL(image)}
//                                 alt="Preview"
//                                 className="mt-3 w-full h-60 object-cover rounded-lg"
//                             />
//                         )}
//                     </div>
//                     <button
//                         type="submit"
//                         disabled={loading}
//                         className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-60"
//                     >
//                         {loading ? "Posting..." : "Post"}
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }
__turbopack_context__.s({
    "default": ()=>CreatePostPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$apicall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/apicall.js [app-client] (ecmascript)");
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
    const handleImageChange = (e)=>{
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };
    const handlePost = async (e)=>{
        e.preventDefault();
        if (!content.trim() && !image) {
            alert("Write something or select an image");
            return;
        }
        setLoading(true);
        const id = localStorage.getItem("id");
        const username = localStorage.getItem("user");
        try {
            const formData = new FormData();
            formData.append("id", id);
            formData.append("username", username);
            formData.append("content", content);
            if (image) formData.append("image", image);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$apicall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/post", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            console.log("Upload Success:", res.data);
            setContent("");
            setImage(null);
        } catch (err) {
            console.error("Upload Error:", err);
            alert("Could not create post");
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
                    className: "text-2xl font-bold text-center mb-4",
                    children: "Create Post"
                }, void 0, false, {
                    fileName: "[project]/app/post/page.jsx",
                    lineNumber: 380,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handlePost,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            placeholder: "What's on your mind?",
                            className: "w-full border border-gray-300 rounded-lg p-3 min-h-[100px] mb-4",
                            value: content,
                            onChange: (e)=>setContent(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/app/post/page.jsx",
                            lineNumber: 382,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            accept: "image/*",
                            onChange: handleImageChange,
                            className: "block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer mb-3"
                        }, void 0, false, {
                            fileName: "[project]/app/post/page.jsx",
                            lineNumber: 389,
                            columnNumber: 21
                        }, this),
                        image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: URL.createObjectURL(image),
                            alt: "Preview",
                            className: "w-full h-60 object-cover rounded-lg mb-3"
                        }, void 0, false, {
                            fileName: "[project]/app/post/page.jsx",
                            lineNumber: 396,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading,
                            className: "w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-60",
                            children: loading ? "Posting..." : "Post"
                        }, void 0, false, {
                            fileName: "[project]/app/post/page.jsx",
                            lineNumber: 403,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/post/page.jsx",
                    lineNumber: 381,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/post/page.jsx",
            lineNumber: 379,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/post/page.jsx",
        lineNumber: 378,
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

//# sourceMappingURL=app_6f095fac._.js.map