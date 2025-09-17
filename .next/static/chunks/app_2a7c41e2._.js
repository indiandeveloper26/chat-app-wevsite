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
    // baseURL: 'http://10.214.133.92:4000', // yahan apna base URL daal
    baseURL: 'https://chat-app-server-render-v-1.onrender.com',
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
;
function SignupPage() {
    _s();
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [confirmPassword, setConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // ✅ Validation
    const validate = ()=>{
        const newErrors = {};
        if (!username.trim()) newErrors.username = "Username is required";
        if (!password) newErrors.password = "Password is required";
        else if (password.length < 6) newErrors.password = "Min 6 chars";
        if (!confirmPassword) newErrors.confirmPassword = "Confirm Password is required";
        else if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    // useLayoutEffect(() => {
    //     let call = async () => {
    //         let call = await api.get('/apitest')
    //         console.log(call)
    //     }
    //     call()
    // }, [])
    // ✅ Signup handler
    const handleSignup = async ()=>{
        if (!validate()) return;
        setLoading(true);
        const lowerUsername = username.toLowerCase();
        try {
            var _apiRes_user, _apiRes_user1, _apiRes_user2;
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$apicall$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/singup', {
                username: lowerUsername,
                password
            });
            const apiRes = response.data;
            // ✅ Save to localStorage (AsyncStorage ki jagah)
            if (apiRes.token) localStorage.setItem("token", apiRes.token);
            if ((_apiRes_user = apiRes.user) === null || _apiRes_user === void 0 ? void 0 : _apiRes_user.username) localStorage.setItem("username", apiRes.user.username);
            if ((_apiRes_user1 = apiRes.user) === null || _apiRes_user1 === void 0 ? void 0 : _apiRes_user1.premiumExpiry) localStorage.setItem("premiumExpiry", apiRes.user.premiumExpiry);
            if (((_apiRes_user2 = apiRes.user) === null || _apiRes_user2 === void 0 ? void 0 : _apiRes_user2.isPremium) !== undefined) localStorage.setItem("isPremium", apiRes.user.isPremium.toString());
            alert("✅ Signup successful! You got 2 days premium!");
            router.push("chatlist"); // Next.js page navigation
        } catch (error) {
            console.error(error);
            alert("❌ Signup failed, please try again!");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-screen bg-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-white text-center mb-6",
                    children: "Create Account"
                }, void 0, false, {
                    fileName: "[project]/app/singupp/page.jsx",
                    lineNumber: 89,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Username",
                    className: "w-full p-3 mb-2 rounded bg-gray-800 text-white focus:outline-none",
                    value: username,
                    onChange: (e)=>{
                        setUsername(e.target.value);
                        if (errors.username) setErrors((prev)=>({
                                ...prev,
                                username: null
                            }));
                    }
                }, void 0, false, {
                    fileName: "[project]/app/singupp/page.jsx",
                    lineNumber: 94,
                    columnNumber: 17
                }, this),
                errors.username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500 text-sm",
                    children: errors.username
                }, void 0, false, {
                    fileName: "[project]/app/singupp/page.jsx",
                    lineNumber: 104,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "password",
                    placeholder: "Password",
                    className: "w-full p-3 mb-2 rounded bg-gray-800 text-white focus:outline-none",
                    value: password,
                    onChange: (e)=>{
                        setPassword(e.target.value);
                        if (errors.password) setErrors((prev)=>({
                                ...prev,
                                password: null
                            }));
                    }
                }, void 0, false, {
                    fileName: "[project]/app/singupp/page.jsx",
                    lineNumber: 107,
                    columnNumber: 17
                }, this),
                errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500 text-sm",
                    children: errors.password
                }, void 0, false, {
                    fileName: "[project]/app/singupp/page.jsx",
                    lineNumber: 117,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "password",
                    placeholder: "Confirm Password",
                    className: "w-full p-3 mb-2 rounded bg-gray-800 text-white focus:outline-none",
                    value: confirmPassword,
                    onChange: (e)=>{
                        setConfirmPassword(e.target.value);
                        if (errors.confirmPassword) setErrors((prev)=>({
                                ...prev,
                                confirmPassword: null
                            }));
                    }
                }, void 0, false, {
                    fileName: "[project]/app/singupp/page.jsx",
                    lineNumber: 120,
                    columnNumber: 17
                }, this),
                errors.confirmPassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500 text-sm",
                    children: errors.confirmPassword
                }, void 0, false, {
                    fileName: "[project]/app/singupp/page.jsx",
                    lineNumber: 132,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleSignup,
                    disabled: loading,
                    className: "w-full bg-white text-black py-3 rounded-lg font-bold mt-4 hover:bg-gray-300 disabled:opacity-60",
                    children: loading ? "Signing up..." : "Sign Up"
                }, void 0, false, {
                    fileName: "[project]/app/singupp/page.jsx",
                    lineNumber: 136,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>router.push("/login"),
                    disabled: loading,
                    className: "w-full bg-gray-700 text-white py-3 rounded-lg font-bold mt-3 hover:bg-gray-600",
                    children: "Login"
                }, void 0, false, {
                    fileName: "[project]/app/singupp/page.jsx",
                    lineNumber: 145,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/singupp/page.jsx",
            lineNumber: 88,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/singupp/page.jsx",
        lineNumber: 87,
        columnNumber: 9
    }, this);
}
_s(SignupPage, "tDYaYyzDh3qtOVfgxAjM9G4+0H4=", false, function() {
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