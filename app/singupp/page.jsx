"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import api from "../apicall.js";

export default function SignupPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    // ✅ Validation
    const validate = () => {
        const newErrors = {};
        if (!username.trim()) newErrors.username = "Username is required";
        if (!password) newErrors.password = "Password is required";
        else if (password.length < 6) newErrors.password = "Min 6 chars";
        if (!confirmPassword) newErrors.confirmPassword = "Confirm Password is required";
        else if (password !== confirmPassword)
            newErrors.confirmPassword = "Passwords do not match";

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
    const handleSignup = async () => {
        if (!validate()) return;

        setLoading(true);
        const lowerUsername = username.toLowerCase();

        try {
            const response = await api.post('/singup', {
                username: lowerUsername,
                password,
            });

            const apiRes = response.data;

            // ✅ Save to localStorage (AsyncStorage ki jagah)
            if (apiRes.token) localStorage.setItem("token", apiRes.token);
            if (apiRes.user?.username) localStorage.setItem("username", apiRes.user.username);
            if (apiRes.user?.premiumExpiry)
                localStorage.setItem("premiumExpiry", apiRes.user.premiumExpiry);
            if (apiRes.user?.isPremium !== undefined)
                localStorage.setItem("isPremium", apiRes.user.isPremium.toString());

            alert("✅ Signup successful! You got 2 days premium!");
            router.push("chatlist"); // Next.js page navigation
        } catch (error) {
            console.error(error);
            alert("❌ Signup failed, please try again!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold text-white text-center mb-6">
                    Create Account
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
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 mb-2 rounded bg-gray-800 text-white focus:outline-none"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        if (errors.password) setErrors((prev) => ({ ...prev, password: null }));
                    }}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

                {/* Confirm Password */}
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full p-3 mb-2 rounded bg-gray-800 text-white focus:outline-none"
                    value={confirmPassword}
                    onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        if (errors.confirmPassword)
                            setErrors((prev) => ({ ...prev, confirmPassword: null }));
                    }}
                />
                {errors.confirmPassword && (
                    <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                )}

                {/* Submit button */}
                <button
                    onClick={handleSignup}
                    disabled={loading}
                    className="w-full bg-white text-black py-3 rounded-lg font-bold mt-4 hover:bg-gray-300 disabled:opacity-60"
                >
                    {loading ? "Signing up..." : "Sign Up"}
                </button>

                {/* Login redirect */}
                <button
                    onClick={() => router.push("/login")}
                    disabled={loading}
                    className="w-full bg-gray-700 text-white py-3 rounded-lg font-bold mt-3 hover:bg-gray-600"
                >
                    Login
                </button>
            </div>
        </div>
    );
}
