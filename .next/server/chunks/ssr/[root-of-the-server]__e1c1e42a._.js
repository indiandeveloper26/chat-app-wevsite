module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

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
}),
"[project]/app/singupp/page.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import api from "../apicall.js";
// export default function SignupPage() {
//     const [form, setForm] = useState({ name: "", email: "", password: "" });
//     const router = useRouter();
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!form.name || !form.email || !form.password) {
//             alert("Please fill all fields");
//             return;
//         }
//         try {
//             const res = await api.post("/api/register", form);
//             console.log("Signup Response:", res.data);
//             // ✅ Token + user save karna ho to localStorage use karo
//             localStorage.setItem("token", res.data.token);
//             localStorage.setItem("user", JSON.stringify(res.data.user));
//             router.push("/post"); // ✅ Redirect after signup
//         } catch (error) {
//             console.error("Signup Error:", error.response?.data || error.message);
//             alert(error.response?.data?.message || "Signup failed");
//         }
//     };
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
//                 <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
//                     Create Account
//                 </h1>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <input
//                         type="text"
//                         placeholder="Full Name"
//                         value={form.name}
//                         onChange={(e) => setForm({ ...form, name: e.target.value })}
//                         className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
//                     />
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={form.email}
//                         onChange={(e) => setForm({ ...form, email: e.target.value })}
//                         className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={form.password}
//                         onChange={(e) => setForm({ ...form, password: e.target.value })}
//                         className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
//                     />
//                     <button
//                         type="submit"
//                         className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
//                     >
//                         Sign Up
//                     </button>
//                 </form>
//                 <p className="text-sm text-gray-600 text-center mt-4">
//                     Already have an account?{" "}
//                     <a href="/login" className="text-blue-600 hover:underline">
//                         Login
//                     </a>
//                 </p>
//             </div>
//         </div>
//     );
// }
__turbopack_context__.s({
    "default": ()=>SignupPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$apicall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/apicall.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function SignupPage() {
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        password: ""
    });
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!form.name || !form.email || !form.password) {
            alert("Please fill all fields");
            return;
        }
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$apicall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/api/register", form);
            console.log("Signup Response:", res.data);
            // ✅ Save token + user
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("id", res.data._id);
            localStorage.setItem("user", JSON.stringify(res.data.name));
            router.push("/post");
        } catch (error) {
            console.error("Signup Error:", error.response?.data || error.message);
            alert(error.response?.data?.message || "Signup failed");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-md w-full bg-white p-8 rounded-2xl shadow-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-center text-gray-800 mb-6",
                    children: "Create Account"
                }, void 0, false, {
                    fileName: "[project]/app/singupp/page.jsx",
                    lineNumber: 117,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Full Name",
                            value: form.name,
                            onChange: (e)=>setForm({
                                    ...form,
                                    name: e.target.value
                                }),
                            className: "w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                        }, void 0, false, {
                            fileName: "[project]/app/singupp/page.jsx",
                            lineNumber: 121,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "email",
                            placeholder: "Email",
                            value: form.email,
                            onChange: (e)=>setForm({
                                    ...form,
                                    email: e.target.value
                                }),
                            className: "w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                        }, void 0, false, {
                            fileName: "[project]/app/singupp/page.jsx",
                            lineNumber: 128,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            placeholder: "Password",
                            value: form.password,
                            onChange: (e)=>setForm({
                                    ...form,
                                    password: e.target.value
                                }),
                            className: "w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                        }, void 0, false, {
                            fileName: "[project]/app/singupp/page.jsx",
                            lineNumber: 135,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition",
                            children: "Sign Up"
                        }, void 0, false, {
                            fileName: "[project]/app/singupp/page.jsx",
                            lineNumber: 142,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/singupp/page.jsx",
                    lineNumber: 120,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-600 text-center mt-4",
                    children: [
                        "Already have an account?",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/login",
                            className: "text-blue-600 hover:underline",
                            children: "Login"
                        }, void 0, false, {
                            fileName: "[project]/app/singupp/page.jsx",
                            lineNumber: 151,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/singupp/page.jsx",
                    lineNumber: 149,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/singupp/page.jsx",
            lineNumber: 116,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/singupp/page.jsx",
        lineNumber: 115,
        columnNumber: 9
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__e1c1e42a._.js.map