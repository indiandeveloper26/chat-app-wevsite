"use client";
import { useContext, useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { ChatContext } from "../../context/chatcontext.jsx";
import { FaPhone, FaVideo, FaUserPlus } from "react-icons/fa";

export default function ChatRoom() {
    const { id } = useParams();
    const router = useRouter();
    const { messages, myUsername, sendMessage, onlineUsers, startCalling, socket, typingUser } =
        useContext(ChatContext);

    const [input, setInput] = useState("");
    const [previewImg, setPreviewImg] = useState(null);
    const [showAddPopup, setShowAddPopup] = useState(false);
    const [newUser, setNewUser] = useState("");
    const messagesEndRef = useRef();

    const filtered = messages.filter(
        (m) => (m.from === myUsername && m.to === id) || (m.from === id && m.to === myUsername)
    );

    const displayMessages =
        typingUser === id ? [...filtered, { id: "typing", from: id, message: "" }] : filtered;

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
        if (text.trim()) socket.emit("typing", { from: myUsername, to: id });
    };

    const handlePickImage = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const formData = new FormData();
        formData.append("file", file);
        try {
            const res = await fetch("https://chat-app-server-render-v-1.onrender.com/upload", {
                method: "POST",
                body: formData,
            });
            const data = await res.json();
            sendMessage(id, data.url, "image");
        } catch (err) {
            console.log("Upload failed:", err);
            alert("Upload failed");
        }
    };

    const startAudioCall = () => {
        router.push(`/chatlist/${id}/call/audio`);
    };

    const startVideoCall = () => {
        try {
            startCalling(id);
        } catch (error) {
            console.log("error starting call");
        }
    };

    const handleAddUser = async () => {
        if (!newUser.trim()) return;
        try {
            const res = await fetch("https://chat-app-server-render-v-1.onrender.com/group/adduser", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ groupId: id, username: newUser }),
            });
            const data = await res.json();
            if (data.success) {
                alert(`User ${newUser} added to group!`);
                setNewUser("");
                setShowAddPopup(false);
            } else {
                alert(data.message || "Failed to add user");
            }
        } catch (err) {
            console.error("Error adding user:", err);
        }
    };

    return (
        <div className="flex flex-col h-screen bg-black text-white">
            {/* Header */}
            <div className="flex justify-between p-4 bg-gray-900 items-center">
                <div>
                    <h2 className="font-bold text-lg">{id}</h2>
                    <p
                        className={`text-sm ${onlineUsers.includes(id) ? "text-green-400" : "text-gray-400"
                            }`}
                    >
                        {onlineUsers.includes(id) ? "Online" : "Offline"}
                    </p>
                </div>

                <div className="flex space-x-3">
                    <button
                        onClick={() => setShowAddPopup(true)}
                        className="p-2 rounded-full bg-yellow-600 hover:bg-yellow-700"
                    >
                        <FaUserPlus size={18} />
                    </button>
                    <button
                        onClick={startAudioCall}
                        className="p-2 rounded-full bg-green-600 hover:bg-green-700"
                    >
                        <FaPhone size={18} />
                    </button>
                    <button
                        onClick={startVideoCall}
                        className="p-2 rounded-full bg-blue-600 hover:bg-blue-700"
                    >
                        <FaVideo size={18} />
                    </button>
                    <button onClick={() => router.back()} className="text-red-500 p-2">
                        Back
                    </button>
                </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {displayMessages.map((msg) => {
                    const isMine = msg.from === myUsername;
                    const isTyping = msg.id === "typing";
                    return (
                        <div
                            key={msg.id}
                            className={`flex ${isMine ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`p-3 rounded-xl max-w-[60%] ${isMine
                                        ? "bg-green-500 rounded-br-none"
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
                                        className="w-48 h-48 object-cover rounded-lg cursor-pointer"
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
            <div className="flex p-4 bg-gray-900 items-center space-x-2">
                <input type="file" accept="image/*" onChange={handlePickImage} />
                <input
                    value={input}
                    onChange={(e) => handleTyping(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 p-2 rounded-full bg-gray-800 text-white outline-none"
                />
                <button
                    onClick={handleSend}
                    className="ml-2 bg-green-500 px-4 py-2 rounded-full font-bold"
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
                        className="max-h-[90%] max-w-[90%] object-contain"
                    />
                </div>
            )}

            {/* Add User Popup */}
            {showAddPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                    <div className="bg-gray-800 p-6 rounded-2xl w-80 text-center">
                        <h3 className="text-lg font-bold mb-4">Add User to Group</h3>
                        <input
                            type="text"
                            value={newUser}
                            onChange={(e) => setNewUser(e.target.value)}
                            placeholder="Enter username"
                            className="w-full p-2 mb-4 rounded bg-gray-700 text-white outline-none"
                        />
                        <div className="flex justify-around">
                            <button
                                onClick={handleAddUser}
                                className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
                            >
                                Add
                            </button>
                            <button
                                onClick={() => setShowAddPopup(false)}
                                className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
