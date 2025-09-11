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
"[project]/app/singupp/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$apicall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/apicall.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SignupPage() {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        password: ""
    });
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!form.name || !form.email || !form.password) {
            alert("Please fill all fields");
            return;
        }
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$apicall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/register", form);
            console.log("Signup Response:", res.data);
            // ✅ Save token + user
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("id", res.data._id);
            localStorage.setItem("user", JSON.stringify(res.data.name));
            router.push("/post");
        } catch (error) {
            var _error_response, _error_response_data, _error_response1;
            console.error("Signup Error:", ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error.message);
            alert(((_error_response1 = error.response) === null || _error_response1 === void 0 ? void 0 : (_error_response_data = _error_response1.data) === null || _error_response_data === void 0 ? void 0 : _error_response_data.message) || "Signup failed");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-md w-full bg-white p-8 rounded-2xl shadow-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-center text-gray-800 mb-6",
                    children: "Create Account"
                }, void 0, false, {
                    fileName: "[project]/app/singupp/page.jsx",
                    lineNumber: 117,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-600 text-center mt-4",
                    children: [
                        "Already have an account?",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
_s(SignupPage, "E5p27fzoThAMJa24CgWt4nis9As=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SignupPage;
var _c;
__turbopack_context__.k.register(_c, "SignupPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_2a7c41e2._.js.map