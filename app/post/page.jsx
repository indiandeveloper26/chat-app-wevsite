// // "use client";
// // import { useEffect, useState } from "react";
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












// //     useEffect(() => {


// //         let apicall = async () => {
// //             try {
// //                 let data = (await api.get('api')).data

// //                 console.log(data)
// //             } catch (error) {
// //                 console.log('error',)
// //             }
// //         }


// //         apicall()
// //     }, [])


// //     // 📌 Submit Post
// //     const handlePost = async (e) => {
// //         e.preventDefault();
// //         if (!content.trim() && !image) {
// //             alert("⚠️ Write something or select an image");
// //             return;
// //         }

// //         setLoading(true);
// //         try {
// //             const user = JSON.parse(localStorage.getItem("user") || "{}");

// //             const formData = new FormData();
// //             formData.append("id", user._id); // must match backend 'id'
// //             formData.append("content", content);

// //             if (image) {
// //                 formData.append("image", image); // must match multer field name
// //             }

// //             // ✅ Do NOT manually set Content-Type
// //             const res = await api.get("post", formData);

// //             console.log("✅ Upload Success:", res.data);
// //             alert("✅ Post created successfully!");

// //             setContent("");
// //             setImage(null);
// //         } catch (error) {
// //             console.error(
// //                 "❌ Upload Error:",
// //                 error.response?.data || error.message || "Unknown Error"
// //             );
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

// //                 <form onSubmit={handlePost}>
// //                     {/* Content */}
// //                     <textarea
// //                         placeholder="What's on your mind?"
// //                         className="w-full border border-gray-300 rounded-lg p-3 min-h-[100px] mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
// //                         value={content}
// //                         onChange={(e) => setContent(e.target.value)}
// //                     />

// //                     {/* Image Upload */}
// //                     <div className="mb-4">
// //                         <input
// //                             type="file"
// //                             accept="image/*"
// //                             onChange={handleImageChange}
// //                             className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
// //                         />
// //                         {image && (
// //                             <img
// //                                 src={URL.createObjectURL(image)}
// //                                 alt="Preview"
// //                                 className="mt-3 w-full h-60 object-cover rounded-lg"
// //                             />
// //                         )}
// //                     </div>

// //                     {/* Post Button */}
// //                     <button
// //                         type="submit"
// //                         disabled={loading}
// //                         className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-60"
// //                     >
// //                         {loading ? "Posting..." : "Post"}
// //                     </button>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // }





// "use client";
// import { useState } from "react";
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

//     // 📌 Submit Post


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











"use client";
import { useEffect, useState } from "react";
import api from "../apicall.js";

export default function CreatePostPage() {
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    useEffect(() => {
        let username = localStorage.getItem('user')
        console.log('usernmae', username)

    }, [])


    const handlePost = async (e) => {
        e.preventDefault();

        if (!content.trim() && !image) {
            alert("⚠️ Write something or select an image");
            return;
        }

        setLoading(true);

        let username = localStorage.getItem('user')

        try {
            // const user = localStorage.getItem('user')
            const id = localStorage.getItem('id')


            console.log('useid ', JSON.stringify(id))

            const formData = new FormData();
            formData.append("id", id);
            formData.append("username", username);
            formData.append("content", content);
            if (image) formData.append("image", image);

            // ✅ Yaha POST request hai, GET nahi
            const res = await api.post("post", formData);

            console.log("✅ Upload Success:", res.data);
            // alert("✅ Post created successfully!");

            setContent("");
            setImage(null);
        } catch (error) {
            console.error(
                "❌ Upload Error:",
                // error.response?.data || error.message || "Unknown Error"

                error.message
            );
            alert("❌ Could not create post");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
            <div className="bg-white w-full max-w-lg p-6 rounded-2xl shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
                    Create Post
                </h1>

                <form onSubmit={handlePost}>
                    <textarea
                        placeholder="What's on your mind?"
                        className="w-full border border-gray-300 rounded-lg p-3 min-h-[100px] mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />

                    <div className="mb-4">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                        />
                        {image && (
                            <img
                                src={URL.createObjectURL(image)}
                                alt="Preview"
                                className="mt-3 w-full h-60 object-cover rounded-lg"
                            />
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-60"
                    >
                        {loading ? "Posting..." : "Post"}
                    </button>
                </form>
            </div>
        </div>
    );
}
