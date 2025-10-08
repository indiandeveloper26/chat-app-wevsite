"use client";
import { useContext, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import api from "../apicall.js";
import { ChatContext } from "../context/chatcontext.jsx";

export default function page() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const router = useRouter();


    const { setMyUsername, } = useContext(ChatContext);

    // ✅ Validation
    const validate = () => {
        const newErrors = {};
        if (!username.trim()) newErrors.username = "Username is required";
        if (!password) newErrors.password = "Password is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // ✅ Login handler
    const handleLogin = async () => {
        if (!validate()) return;

        setLoading(true);
        const lowerUsername = username.toLowerCase();

        try {
            const { data } = await api.post("/log", {
                username: lowerUsername,
                password,
            });

            console.log(data)

            // ✅ Save to localStorage
            if (data.token) localStorage.setItem("token", data.token);
            if (data.user?.username) localStorage.setItem("username", data.user.username);

            if (data.userdata) {
                if (data.userdata.premiumExpiry)
                    localStorage.setItem("premiumExpiry", data.userdata.premiumExpiry);

                if (data.userdata.isPremium !== undefined)
                    localStorage.setItem("isPremium", data.userdata.isPremium.toString());
            }

            alert("✅ Login Successful!");

            let usernae = await localStorage.getItem("username")


            console.log(usernae)

            setMyUsername(usernae)

            router.push("chatlist"); // redirect after login
        } catch (err) {
            console.error(err);
            alert("❌ Invalid username or password");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold text-white text-center mb-6">
                    Welcome to Login 👋
                </h1>

                {/* Username */}
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full p-3 mb-2 rounded bg-gray-800 text-white focus:outline-none"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                        if (errors.username) setErrors((prev) => ({ ...prev, username: null }));
                    }}
                />
                {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

                {/* Password */}
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="w-full p-3 mb-2 rounded bg-gray-800 text-white focus:outline-none"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            if (errors.password) setErrors((prev) => ({ ...prev, password: null }));
                        }}
                    />
                    <button
                        type="button"
                        className="absolute right-3 top-3 text-white"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? "🙈" : "👁️"}
                    </button>
                </div>
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

                {/* Login button */}
                <button
                    onClick={handleLogin}
                    disabled={loading}
                    className="w-full bg-white text-black py-3 rounded-lg font-bold mt-4 hover:bg-gray-300 disabled:opacity-60"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

                {/* Signup redirect */}
                <button
                    onClick={() => router.push("/signup")}
                    disabled={loading}
                    className="w-full bg-gray-700 text-white py-3 rounded-lg font-bold mt-3 hover:bg-gray-600"
                >
                    Create Account
                </button>
            </div>
        </div>
    );
}
