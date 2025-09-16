






"use client";
import { useEffect, useState } from "react";
import api from "../apicall.js";
import { useRouter } from "next/navigation";


export default function FeedScreen() {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [commentText, setCommentText] = useState("");



    console.log(posts)

    // ✅ Backend se posts fetch
    const fetchPosts = async () => {
        try {
            let res = await api.get("/postapi");
            setPosts(res.data);
            console.log("Posts:", res.data);
        } catch (error) {
            console.log("Fetch error", error.message);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    // ✅ Like button
    const handleLike = async (postId) => {
        try {
            const userId = localStorage.getItem("id");
            if (!userId) return;

            const res = await api.post("/like", { userId, postId });
            const updatedLikes = res.data.likes;

            setPosts((prev) =>
                prev.map((p) =>
                    p._id === postId ? { ...p, likes: updatedLikes } : p
                )
            );
        } catch (error) {
            console.log("Like Error:", error);
        }
    };

    // ✅ Comment button
    const handleComment = async (postId) => {
        if (!commentText.trim()) return;

        const userId = localStorage.getItem("id");
        try {
            const res = await api.post("/cmt", { userId, postId, text: commentText });
            const newComment = res.data.comment;

            setPosts((prev) =>
                prev.map((p) =>
                    p._id === postId
                        ? { ...p, comments: [...p.comments, newComment] }
                        : p
                )
            );

            setCommentText("");
            setSelectedPost(null);
        } catch (error) {
            console.log("Comment Error:", error);
        }
    };

    let route = useRouter()

    // ✅ Delete Post
    const handleDelete = async (postId) => {

        console.log(
            postId
        )
        if (!confirm("Are you sure you want to delete this post?")) return;

        try {
            await api.delete("/delatepost", { data: { id: postId } });
            // UI update
            setPosts((prev) => prev.filter((p) => p._id !== postId));
        } catch (error) {
            ``
            console.log("Delete Error:", error);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen p-4">
            {/* New Post Button */}
            <button
                onClick={() => (window.location.href = "/post")}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4"
            >
                ➕ New Post
            </button>

            {/* Posts */}
            <div className="space-y-4">
                {posts.map((item) => (
                    <div
                        key={item._id}
                        className="bg-white p-4 rounded-lg shadow cursor-pointer"
                        onClick={() => setSelectedPost(item)} // click se modal open
                    >
                        <p onClick={() => route.push(`/postshow/${item.user}`)} className="font-bold">
                            👤 {item.username}
                        </p>
                        <p className="mb-2">{item.content}</p>

                        {/* {item.image && (
                            <img
                                src={`locaitem.image`}
                                alt="post"
                                className="w-full h-60 object-cover rounded-md mb-2"
                            />
                        )} */}


                        {item.image && (
                            <img
                                src={`${item.image}`}
                                alt="post"
                                className="w-full h-60 object-cover rounded-md mb-2"
                            />
                        )}


                        <div className="flex justify-between items-center">
                            <div className="flex gap-2">
                                <button onClick={(e) => { e.stopPropagation(); handleLike(item._id); }}>
                                    💖 {item.likes.length}
                                </button>
                                <button onClick={(e) => { e.stopPropagation(); setSelectedPost(item); }}>
                                    💬 {item.comments.length}
                                </button>
                            </div>
                            <button
                                onClick={(e) => { e.stopPropagation(); handleDelete(item._id); }}
                                className="bg-red-500 text-white px-2 py-1 rounded"
                            >
                                🗑️ Delete
                            </button>
                        </div>
                    </div>
                ))}

                {/* Full Post Modal */}
                {selectedPost && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-auto p-4 relative">
                            <button
                                onClick={() => setSelectedPost(null)}
                                className="absolute top-2 right-2 text-red-500 font-bold text-xl"
                            >
                                ✖
                            </button>

                            <p className="font-bold text-lg mb-2">👤 {selectedPost.username}</p>
                            <p className="mb-2">{selectedPost.content}</p>

                            {selectedPost.image && (
                                <img
                                    src={`http://localhost:5000${selectedPost.image}`}
                                    alt="post"
                                    className="w-full max-h-96 object-cover rounded-md mb-2"
                                />
                            )}

                            <div className="flex justify-between items-center mb-3">
                                <button onClick={() => handleLike(selectedPost._id)}>
                                    💖 {selectedPost.likes.length}
                                </button>
                                <button onClick={() => { }}>
                                    💬 {selectedPost.comments.length}
                                </button>
                                <button
                                    onClick={() => handleDelete(selectedPost._id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                >
                                    🗑️ Delete
                                </button>
                            </div>

                            <div className="mb-3">
                                {selectedPost.comments.map((c, i) => (
                                    <p key={i} className="mb-1">• {c.text}</p>
                                ))}
                            </div>

                            <input
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                placeholder="Write a comment..."
                                className="border p-2 w-full mb-3 rounded"
                            />
                            <button
                                onClick={() => handleComment(selectedPost._id)}
                                className="bg-green-500 text-white px-3 py-1 rounded w-full"
                            >
                                Post Comment
                            </button>
                        </div>
                    </div>
                )}

            </div>

            {/* Comment Modal */}
            {selectedPost && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <h2 className="text-lg font-bold mb-3">Comments</h2>

                        {selectedPost.comments.map((c, i) => (
                            <p key={i} className="mb-1">• {c.text}</p>
                        ))}

                        <input
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            placeholder="Write a comment..."
                            className="border p-2 w-full mb-3 rounded"
                        />
                        <div className="flex gap-2">
                            <button
                                onClick={() => handleComment(selectedPost._id)}
                                className="bg-green-500 text-white px-3 py-1 rounded"
                            >
                                Post Comment
                            </button>
                            <button
                                onClick={() => setSelectedPost(null)}
                                className="bg-red-500 text-white px-3 py-1 rounded"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}




















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
//                 const userData = res.data
//                 setUser(userData)
//                 setIsFollowing(userData.followers?.includes(currentUserId))
//             } catch (err) {
//                 console.error("Error fetching user", err)
//             } finally {
//                 setLoading(false)
//             }
//         }

//         fetchUser()
//     }, [id, currentUserId])

//     const handleFollowToggle = async () => {
//         alert('follw')
//         if (!user) return
//         setButtonLoading(true)
//         try {
//             const action = isFollowing ? "unfollow" : "follow"
//             const res = await axios.post("http://localhost:5000/follw")
//             alert('follw')
//             console.log('follw')
//             console.log(res)
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
//                         className={`mt-4 px-4 py-2 rounded-lg shadow text-white transition ${isFollowing ? "bg-gray-400 hover:bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
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
