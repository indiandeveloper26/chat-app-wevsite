"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "../apicall.js";

export default function LoginPage() {
    const [form, setForm] = useState({ email: "", password: "" });
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.email || !form.password) {
            alert("Please fill all fields");
            return;
        }

        try {
            const res = await api.post("/api/login", form);
            console.log("Login Response:", res.data);

            // ✅ Save token + user
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));

            router.push("/post"); // ✅ Redirect after login
        } catch (error) {
            console.error("Login Error:", error.response?.data || error.message);
            alert(error.response?.data?.message || "Login failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Login
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>
                <p className="text-sm text-gray-600 text-center mt-4">
                    Don’t have an account?{" "}
                    <a href="/signup" className="text-blue-600 hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
}
