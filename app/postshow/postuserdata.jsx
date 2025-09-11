



// "use client"

// import React, { useEffect, useState } from "react"
// import axios from "axios"

// export default function Postuserdata({ id }) {
//     const [user, setUser] = useState(null)
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//         if (!id) return
//         const fetchUser = async () => {
//             try {
//                 const res = await axios.post("http://localhost:5000/postuserprofile", { id })
//                 setUser(res.data)  // ✅ sirf user object set karo
//                 console.log('api data', res.data)
//             } catch (err) {
//                 console.error("Error fetching user", err)
//             } finally {
//                 setLoading(false)
//             }
//         }
//         fetchUser()
//     }, [id])

//     if (loading) return <p>Loading...</p>
//     if (!user) return <p>User not found</p>

//     return (
//         <div className="p-4 max-w-2xl mx-auto">
//             {/* Profile Header */}
//             <div className="flex items-center gap-4 mb-6">
//                 <img
//                     src={`http://localhost:5000/${user.avatar || "default-avatar.png"}`}
//                     alt={user.name}
//                     className="w-20 h-20 rounded-full border"
//                 />
//                 <div>
//                     <h1 className="text-2xl font-bold">{user.name}</h1>
//                     <p className="text-gray-600">{user.bio || "No bio yet"}</p>
//                 </div>
//             </div>

//             {/* Posts */}
//             <h2 className="text-lg font-semibold mb-3">Posts</h2>
//             <div className="grid grid-cols-3 gap-2">
//                 {user.posts?.map((post) => (
//                     <img
//                         key={post._id}
//                         src={`http://localhost:5000/${post.image.replace(/^\/+/, "")}`}
//                         alt="post"
//                         className="w-full h-full object-cover"
//                     />
//                 ))}
//             </div>
//         </div>
//     )
// }
















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
//                 setUser(res.data)

//                 // check if current user is following
//                 setIsFollowing(res.data.user.followers?.includes(currentUserId))
//             } catch (err) {
//                 console.error("Error fetching user", err)
//             } finally {
//                 setLoading(false)
//             }
//         }
//         fetchUser()
//     }, [id, currentUserId])

//     const handleFollowToggle = async () => {
//         if (!user) return
//         setButtonLoading(true)
//         try {
//             const action = isFollowing ? "unfollow" : "follow"
//             const res = await axios.post("http://localhost:5000/follw", {
//                 userId: currentUserId,
//                 targetUserId: user._id
//             })
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
//                         className={`mt-4 px-4 py-2 rounded-lg shadow text-white transition ${isFollowing
//                             ? "bg-gray-400 hover:bg-gray-500"
//                             : "bg-blue-500 hover:bg-blue-600"
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















"use client"

import React, { useEffect, useState } from "react"
import axios from "axios"

export default function PostUserData({ id }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isFollowing, setIsFollowing] = useState(false)
    const [buttonLoading, setButtonLoading] = useState(false)




    useEffect(() => {
        if (!id) return

        const fetchUser = async () => {

            let currentUserId = localStorage.getItem('id')
            try {
                const res = await axios.post("http://localhost:5000/postuserprofile", { id })

                console.log(res.data)
                const userData = res.data
                setUser(userData)
                setIsFollowing(userData.followers?.includes(currentUserId))
            } catch (err) {
                console.error("Error fetching user", err)
            } finally {
                setLoading(false)
            }
        }

        fetchUser()
    }, [id])

    const handleFollowToggle = async () => {

        console.log('follwing')
        // alert('follw')
        if (!user) return
        setButtonLoading(true)




        let currentUserId = localStorage.getItem('id')

        console.log(id, currentUserId)
        try {
            const action = isFollowing ? "unfollow" : "follow"
            const res = await axios.post("http://localhost:5000/follw", {
                userId: currentUserId,
                targetUserId: id
            })
            alert('follw')
            console.log('follw')
            console.log(res)
            // update followers locally
            setUser((prev) => ({
                ...prev,
                followers: res.data.followers
            }))
            setIsFollowing(!isFollowing)
        } catch (err) {
            console.error(err)
        } finally {
            setButtonLoading(false)
        }
    }

    if (loading) return <p>Loading...</p>
    if (!user) return <p>User not found</p>

    return (
        <div className="p-4 max-w-2xl mx-auto">
            {/* Profile Header */}
            <div className="flex items-center gap-6 mb-8">
                <img
                    src={`http://localhost:5000/${user.avatar || "default-avatar.png"}`}
                    alt={user.name}
                    className="w-24 h-24 rounded-full border-2 border-gray-300"
                />
                <div>
                    <h1 className="text-2xl font-bold">{user.name}</h1>
                    <p className="text-gray-600">{user.bio || "No bio yet"}</p>
                    <div className="flex gap-6 mt-3 text-sm text-gray-700">
                        <span><b>{user.posts?.length || 0}</b> Posts</span>
                        <span><b>{user.followers?.length || 0}</b> Followers</span>
                        <span><b>{user.following?.length || 0}</b> Following</span>
                    </div>
                    <button
                        onClick={handleFollowToggle}
                        disabled={buttonLoading}
                        className={`mt-4 px-4 py-2 rounded-lg shadow text-white transition ${isFollowing ? "bg-gray-400 hover:bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
                            }`}
                    >
                        {buttonLoading ? "..." : isFollowing ? "Unfollow" : "Follow"}
                    </button>
                </div>
            </div>

            {/* Posts Grid */}
            <h2 className="text-lg font-semibold mb-3">Posts</h2>
            <div className="grid grid-cols-3 gap-2">
                {user.posts?.map((post) => (
                    <img
                        key={post._id}
                        src={`http://localhost:5000/${post.image.replace(/^\/+/, "")}`}
                        alt="post"
                        className="w-full h-full object-cover hover:scale-105 transition-transform rounded"
                    />
                ))}
            </div>
        </div>
    )
}
