"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import api from "../apicall";


export default function UserProfile() {
    const { id } = useParams(); // ✅ URL se userId milega
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // ✅ User data + Posts fetch
    const fetchUserData = async () => {


        console.log('id paras', id)
        try {
            const res = await api.get(`/user/${id}`); // backend me /user/:id banani hogi
            setUser(res.data.user);
            setPosts(res.data.posts); // assume backend ek saath bhej raha
        } catch (error) {
            console.log("User fetch error:", error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) fetchUserData();
    }, [id]);

    if (loading) return <p className="p-4">⏳ Loading profile...</p>;

    if (!user) return <p className="p-4 text-red-500">❌ User not found</p>;

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {/* User Info Section */}
            <div className="bg-white shadow rounded-lg p-6 mb-6">
                <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-3xl">
                        {user.avatar ? (
                            <img
                                src={`http://localhost:5000${user.avatar}`}
                                alt="avatar"
                                className="w-20 h-20 rounded-full object-cover"
                            />
                        ) : (
                            "👤"
                        )}
                    </div>

                    {/* Name + Bio */}
                    <div>
                        <h1 className="text-2xl font-bold">{user.name}</h1>
                        <p className="text-gray-600">{user.email}</p>
                        {user.bio && <p className="mt-2">{user.bio}</p>}
                    </div>
                </div>

                {/* Stats */}
                <div className="flex gap-6 mt-4 text-center">
                    <div>
                        <p className="font-bold">{posts.length}</p>
                        <p className="text-gray-500 text-sm">Posts</p>
                    </div>
                    <div>
                        <p className="font-bold">{user.followers?.length || 0}</p>
                        <p className="text-gray-500 text-sm">Followers</p>
                    </div>
                    <div>
                        <p className="font-bold">{user.following?.length || 0}</p>
                        <p className="text-gray-500 text-sm">Following</p>
                    </div>
                </div>
            </div>

            {/* User Posts Grid */}
            <div>
                <h2 className="text-xl font-semibold mb-4">Posts</h2>
                {posts.length === 0 ? (
                    <p className="text-gray-500">No posts yet.</p>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {posts.map((post) => (
                            <div
                                key={post._id}
                                className="bg-white shadow rounded-lg overflow-hidden"
                            >
                                {post.image && (
                                    <img
                                        src={`http://localhost:5000${post.image}`}
                                        alt="post"
                                        className="w-full h-48 object-cover"
                                    />
                                )}
                                <div className="p-2">
                                    <p className="text-sm">{post.content}</p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        💖 {post.likes.length} · 💬 {post.comments.length}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
