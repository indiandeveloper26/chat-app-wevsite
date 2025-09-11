module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/app/post/page.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// // "use client";
// // import { useState } from "react";
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
// //     // 📌 Submit Post
// //     const handlePost = async () => {
// //         if (!content.trim() && !image) {
// //             alert("⚠️ Write something or select an image");
// //             return;
// //         }
// //         setLoading(true);
// //         try {
// //             const user = JSON.parse(localStorage.getItem("user") || "{}");
// //             const formData = new FormData();
// //             formData.append("id", user._id);
// //             formData.append("content", content);
// //             if (image) {
// //                 formData.append("image", image);
// //             }
// //             const res = await api.post("/api/post", formData, {
// //                 headers: { "Content-Type": "multipart/form-data" },
// //             });
// //             console.log("✅ Upload Success:", res.data);
// //             alert("✅ Post created successfully!");
// //             setContent("");
// //             setImage(null);
// //         } catch (error) {
// //             console.error("❌ Upload Error:", error.response?.data || error.message);
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
// //                 {/* Content */}
// //                 <textarea
// //                     placeholder="What's on your mind?"
// //                     className="w-full border border-gray-300 rounded-lg p-3 min-h-[100px] mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
// //                     value={content}
// //                     onChange={(e) => setContent(e.target.value)}
// //                 />
// //                 {/* Image Upload */}
// //                 <div className="mb-4">
// //                     <input
// //                         type="file"
// //                         accept="image/*"
// //                         onChange={handleImageChange}
// //                         className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
// //                     />
// //                     {image && (
// //                         <img
// //                             src={URL.createObjectURL(image)}
// //                             alt="Preview"
// //                             className="mt-3 w-full h-60 object-cover rounded-lg"
// //                         />
// //                     )}
// //                 </div>
// //                 {/* Post Button */}
// //                 <button
// //                     onClick={handlePost}
// //                     disabled={loading}
// //                     className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-60"
// //                 >
// //                     {loading ? "Posting..." : "Post"}
// //                 </button>
// //             </div>
// //         </div>
// //     );
// // }
// "use client";
// import { useEffect, useState } from "react";
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
//     useEffect(() => {
//         let data = async () => {
//             let apicall = await api.post('post')
//             console.log('dta', apicall)
//         }
//         data()
//     }, [])
//     // 📌 Submit Post
//     const handlePost = async (e) => {
//         e.preventDefault();
//         if (!content.trim() && !image) {
//             alert("⚠️ Write something or select an image");
//             return;
//         }
//         setLoading(true);
//         try {
//             const user = JSON.parse(localStorage.getItem("user") || "{}");
//             const formData = new FormData();
//             formData.append("userId", user._id || ""); // user id backend me
//             formData.append("content", content);
//             if (image) {
//                 formData.append("image", image);
//             }
//             // ✅ Send FormData (multipart/form-data)
//             const res = await api.post("/post", formData, {
//                 headers: { "Content-Type": "multipart/form-data" },
//             });
//             console.log("✅ Upload Success:", res.data);
//             alert("✅ Post created successfully!");
//             setContent("");
//             setImage(null);
//         } catch (error) {
//             console.error(
//                 "❌ Upload Error:",
//                 error.response?.data || error.message || "Unknown Error"
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
__turbopack_context__.s({
    "default": ()=>CreatePostPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../apicall.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
function CreatePostPage() {
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [image, setImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // 📌 Image select
    const handleImageChange = (e)=>{
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };
    // 📌 Submit Post
    const handlePost = async (e)=>{
        e.preventDefault();
        if (!content.trim() && !image) {
            alert("⚠️ Write something or select an image");
            return;
        }
        setLoading(true);
        try {
            // 👆 localStorage se user info
            const user = JSON.parse(localStorage.getItem("user") || "{}");
            const formData = new FormData();
            formData.append("userId", user._id || "12345"); // demo id agar user nahi hai
            formData.append("content", content);
            if (image) formData.append("image", image);
            const res = await api.post("/post", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            console.log("✅ Upload Success:", res.data);
            alert("✅ Post created successfully!");
            setContent("");
            setImage(null);
        } catch (error) {
            console.error("❌ Upload Error:", error.response?.data || error.message || "Unknown Error");
            alert("❌ Could not create post");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 flex justify-center items-center p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white w-full max-w-lg p-6 rounded-2xl shadow-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-center mb-4 text-gray-800",
                    children: "Create Post"
                }, void 0, false, {
                    fileName: "[project]/app/post/page.jsx",
                    lineNumber: 283,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handlePost,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            placeholder: "What's on your mind?",
                            className: "w-full border border-gray-300 rounded-lg p-3 min-h-[100px] mb-4 focus:ring-2 focus:ring-blue-500 outline-none",
                            value: content,
                            onChange: (e)=>setContent(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/app/post/page.jsx",
                            lineNumber: 289,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    accept: "image/*",
                                    onChange: handleImageChange,
                                    className: "block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                                }, void 0, false, {
                                    fileName: "[project]/app/post/page.jsx",
                                    lineNumber: 298,
                                    columnNumber: 25
                                }, this),
                                image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: URL.createObjectURL(image),
                                    alt: "Preview",
                                    className: "mt-3 w-full h-60 object-cover rounded-lg"
                                }, void 0, false, {
                                    fileName: "[project]/app/post/page.jsx",
                                    lineNumber: 305,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/post/page.jsx",
                            lineNumber: 297,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading,
                            className: "w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-60",
                            children: loading ? "Posting..." : "Post"
                        }, void 0, false, {
                            fileName: "[project]/app/post/page.jsx",
                            lineNumber: 314,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/post/page.jsx",
                    lineNumber: 287,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/post/page.jsx",
            lineNumber: 282,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/post/page.jsx",
        lineNumber: 281,
        columnNumber: 9
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__61949c0c._.js.map