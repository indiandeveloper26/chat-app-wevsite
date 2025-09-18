// // "use client";
// // import { useContext, useState, useEffect, useRef } from "react";
// // import { useParams, useRouter } from "next/navigation";
// // import { ChatContext } from "../../context";

// // export default function ChatRoom() {
// //     const { id } = useParams();
// //     const router = useRouter();
// //     const { messages, myUsername, sendMessage, onlineUsers, socket, typingUser } =
// //         useContext(ChatContext);

// //     const [input, setInput] = useState("");
// //     const messagesEndRef = useRef();

// //     const filtered = messages.filter(
// //         (m) =>
// //             (m.from === myUsername && m.to === id) ||
// //             (m.from === id && m.to === myUsername)
// //     );

// //     const displayMessages =
// //         typingUser === id
// //             ? [...filtered, { id: "typing", from: id, message: "" }]
// //             : filtered;

// //     useEffect(() => {
// //         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //     }, [displayMessages]);

// //     const handleSend = () => {
// //         if (input.trim()) {
// //             sendMessage(id, input.trim(), "text");
// //             setInput("");
// //         }
// //     };

// //     const handleTyping = (text) => {
// //         setInput(text);
// //         if (text.trim()) {
// //             socket.emit("typing", { from: myUsername, to: otherUser });
// //         }
// //     };

// //     return (
// //         <div className="flex flex-col h-screen bg-black text-white">
// //             <div className="flex justify-between p-4 bg-gray-900">
// //                 <div>
// //                     <h2 className="font-bold text-lg">{id}</h2>
// //                     <p className={`text-sm ${onlineUsers.includes(id) ? "text-green-400" : "text-gray-400"}`}>
// //                         {onlineUsers.includes(id) ? "Online" : "Offline"}
// //                     </p>
// //                 </div>
// //                 <button onClick={() => router.back()} className="text-red-500">
// //                     Back
// //                 </button>
// //             </div>

// //             <div className="flex-1 overflow-y-auto p-4 space-y-2">
// //                 {displayMessages.map((msg) => {
// //                     const isMine = msg.from === myUsername;
// //                     const isTyping = msg.id === "typing";
// //                     return (
// //                         <div key={msg.id} className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
// //                             <div className={`p-3 rounded-xl max-w-[60%] ${isMine ? "bg-green-500 rounded-br-none" : "bg-gray-800 rounded-bl-none"}`}>
// //                                 {isTyping ? (
// //                                     <div className="flex space-x-1">
// //                                         <span className="animate-bounce">•</span>
// //                                         <span className="animate-bounce delay-150">•</span>
// //                                         <span className="animate-bounce delay-300">•</span>
// //                                     </div>
// //                                 ) : (
// //                                     <p>{msg.message}</p>
// //                                 )}
// //                                 {isMine && !isTyping && <p className="text-xs mt-1">{msg.seen ? "✓✓ Seen" : "✓ Sent"}</p>}
// //                             </div>
// //                         </div>
// //                     );
// //                 })}
// //                 <div ref={messagesEndRef} />
// //             </div>

// //             <div className="flex p-4 bg-gray-900">
// //                 <input
// //                     value={input}
// //                     onChange={(e) => handleTyping(e.target.value)}
// //                     placeholder="Type a message..."
// //                     className="flex-1 p-2 rounded-full bg-gray-800 text-white outline-none"
// //                 />
// //                 <button onClick={handleSend} className="ml-2 bg-green-500 px-4 py-2 rounded-full font-bold">
// //                     Send
// //                 </button>
// //             </div>
// //         </div>
// //     );
// // }






























// "use client";
// import { useContext, useState, useEffect, useRef } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { ChatContext } from "../../context";

// export default function ChatRoom() {
//     const { id } = useParams();
//     const router = useRouter();
//     const { messages, myUsername, sendMessage, onlineUsers, socket, typingUser } =
//         useContext(ChatContext);

//     const [input, setInput] = useState("");
//     const [previewImg, setPreviewImg] = useState(null);
//     const messagesEndRef = useRef();

//     const filtered = messages.filter(
//         (m) =>
//             (m.from === myUsername && m.to === id) ||
//             (m.from === id && m.to === myUsername)
//     );

//     const displayMessages =
//         typingUser === id
//             ? [...filtered, { id: "typing", from: id, message: "" }]
//             : filtered;

//     useEffect(() => {
//         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     }, [displayMessages]);

//     const handleSend = () => {
//         if (input.trim()) {
//             sendMessage(id, input.trim(), "text");
//             setInput("");
//         }
//     };

//     const handleTyping = (text) => {
//         setInput(text);
//         if (text.trim()) {
//             socket.emit("typing", { from: myUsername, to: id });
//         }
//     };

//     // ✅ Image pick + upload
//     const handlePickImage = async (e) => {
//         const file = e.target.files[0];
//         if (!file) return;

//         const formData = new FormData();
//         formData.append("file", file);

//         try {
//             const res = await fetch("https://chat-app-server-render-v-1.onrender.com/upload", {
//                 method: "POST",
//                 body: formData,
//             });
//             const data = await res.json();
//             // send image message
//             sendMessage(id, data.url, "image");
//         } catch (err) {
//             console.log("Upload failed:", err);
//             alert("Upload failed");
//         }
//     };

//     return (
//         <div className="flex flex-col h-screen bg-black text-white">
//             {/* Header */}
//             <div className="flex justify-between p-4 bg-gray-900">
//                 <div>
//                     <h2 className="font-bold text-lg">{id}</h2>
//                     <p className={`text-sm ${onlineUsers.includes(id) ? "text-green-400" : "text-gray-400"}`}>
//                         {onlineUsers.includes(id) ? "Online" : "Offline"}
//                     </p>
//                 </div>
//                 <button onClick={() => router.back()} className="text-red-500">Back</button>
//             </div>

//             {/* Chat Messages */}
//             <div className="flex-1 overflow-y-auto p-4 space-y-2">
//                 {displayMessages.map((msg) => {
//                     const isMine = msg.from === myUsername;
//                     const isTyping = msg.id === "typing";
//                     return (
//                         <div key={msg.id} className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
//                             <div className={`p-3 rounded-xl max-w-[60%] ${isMine ? "bg-green-500 rounded-br-none" : "bg-gray-800 rounded-bl-none"}`}>
//                                 {isTyping ? (
//                                     <div className="flex space-x-1">
//                                         <span className="animate-bounce">•</span>
//                                         <span className="animate-bounce delay-150">•</span>
//                                         <span className="animate-bounce delay-300">•</span>
//                                     </div>
//                                 ) : msg.type === "image" ? (
//                                     <img
//                                         src={msg.message}
//                                         alt="sent"
//                                         className="w-48 h-48 object-cover rounded-lg cursor-pointer"
//                                         onClick={() => setPreviewImg(msg.message)}
//                                     />
//                                 ) : (
//                                     <p>{msg.message}</p>
//                                 )}
//                                 {isMine && !isTyping && <p className="text-xs mt-1">{msg.seen ? "✓✓ Seen" : "✓ Sent"}</p>}
//                             </div>
//                         </div>
//                     );
//                 })}
//                 <div ref={messagesEndRef} />
//             </div>

//             {/* Input Bar */}
//             <div className="flex p-4 bg-gray-900 items-center space-x-2">
//                 <input type="file" accept="image/*" onChange={handlePickImage} />
//                 <input
//                     value={input}
//                     onChange={(e) => handleTyping(e.target.value)}
//                     placeholder="Type a message..."
//                     className="flex-1 p-2 rounded-full bg-gray-800 text-white outline-none"
//                 />
//                 <button onClick={handleSend} className="ml-2 bg-green-500 px-4 py-2 rounded-full font-bold">Send</button>
//             </div>

//             {/* Preview Image Modal */}
//             {previewImg && (
//                 <div
//                     className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center"
//                     onClick={() => setPreviewImg(null)}
//                 >
//                     <img src={previewImg} className="max-h-[90%] max-w-[90%] object-contain" />
//                 </div>
//             )}
//         </div>
//     );
// }














"use client";
import { useContext, useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { ChatContext } from "../../context";

export default function ChatRoom() {
    const { id } = useParams();
    const router = useRouter();
    const { messages, myUsername, sendMessage, onlineUsers, socket, typingUser } =
        useContext(ChatContext);

    const [input, setInput] = useState("");
    const [previewImg, setPreviewImg] = useState(null);
    const messagesEndRef = useRef();

    const filtered = messages.filter(
        (m) =>
            (m.from === myUsername && m.to === id) ||
            (m.from === id && m.to === myUsername)
    );

    const displayMessages =
        typingUser === id
            ? [...filtered, { id: "typing", from: id, message: "" }]
            : filtered;

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [displayMessages]);

    const handleSend = () => {
        if (input.trim()) {
            sendMessage(id, input.trim(), "text");
            setInput("");
        }
    };

    const handleTyping = (text) => {
        setInput(text);
        if (text.trim()) {
            socket.emit("typing", { from: myUsername, to: id });
        }
    };

    // ✅ Image pick + upload
    const handlePickImage = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await fetch(
                "https://chat-app-server-render-v-1.onrender.com/upload",
                {
                    method: "POST",
                    body: formData,
                }
            );
            const data = await res.json();
            // send image message
            sendMessage(id, data.url, "image");
        } catch (err) {
            console.log("Upload failed:", err);
            alert("Upload failed");
        }
    };

    return (
        <div className="flex flex-col h-screen bg-black text-white">
            {/* Header */}
            <div className="flex items-center justify-between p-3 bg-gray-900 sticky top-0">
                <div className="truncate">
                    <h2 className="font-bold text-lg truncate max-w-[150px] sm:max-w-[250px]">
                        {id}
                    </h2>
                    <p
                        className={`text-sm ${onlineUsers.includes(id) ? "text-green-400" : "text-gray-400"
                            }`}
                    >
                        {onlineUsers.includes(id) ? "Online" : "Offline"}
                    </p>
                </div>
                <button
                    onClick={() => router.back()}
                    className="text-red-400 font-semibold"
                >
                    ⬅ Back
                </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
                {displayMessages.map((msg) => {
                    const isMine = msg.from === myUsername;
                    const isTyping = msg.id === "typing";
                    return (
                        <div
                            key={msg.id}
                            className={`flex ${isMine ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`p-3 rounded-2xl max-w-[80%] sm:max-w-[60%] ${isMine
                                        ? "bg-green-500 text-black rounded-br-none"
                                        : "bg-gray-800 rounded-bl-none"
                                    }`}
                            >
                                {isTyping ? (
                                    <div className="flex space-x-1">
                                        <span className="animate-bounce">•</span>
                                        <span className="animate-bounce delay-150">•</span>
                                        <span className="animate-bounce delay-300">•</span>
                                    </div>
                                ) : msg.type === "image" ? (
                                    <img
                                        src={msg.message}
                                        alt="sent"
                                        className="max-w-[200px] sm:max-w-[300px] h-auto rounded-lg cursor-pointer"
                                        onClick={() => setPreviewImg(msg.message)}
                                    />
                                ) : (
                                    <p>{msg.message}</p>
                                )}
                                {isMine && !isTyping && (
                                    <p className="text-xs mt-1">
                                        {msg.seen ? "✓✓ Seen" : "✓ Sent"}
                                    </p>
                                )}
                            </div>
                        </div>
                    );
                })}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="flex items-center p-3 bg-gray-900 space-x-3">
                {/* File Picker as Icon */}
                <label className="cursor-pointer text-xl">
                    📷
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handlePickImage}
                        className="hidden"
                    />
                </label>

                <input
                    value={input}
                    onChange={(e) => handleTyping(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 p-2 rounded-full bg-gray-800 text-white outline-none text-sm sm:text-base"
                />
                <button
                    onClick={handleSend}
                    className="ml-1 bg-green-500 text-black px-4 py-2 rounded-full font-semibold"
                >
                    Send
                </button>
            </div>

            {/* Preview Image Modal */}
            {previewImg && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center"
                    onClick={() => setPreviewImg(null)}
                >
                    <img
                        src={previewImg}
                        className="max-h-[90%] max-w-[90%] object-contain rounded-lg"
                    />
                </div>
            )}
        </div>
    );
}
