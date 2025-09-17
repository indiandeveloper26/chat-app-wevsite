"use client";
import { useContext, useState, useEffect, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import { ChatContext } from "../context.js";

export default function page() {
    const { username: otherUser } = useParams(); // Next.js route param
    const router = useRouter();
    const {
        messages,
        myUsername,
        sendMessage,
        onlineUsers,
        socket,
        typingUser,
    } = useContext(ChatContext);

    const [input, setInput] = useState("");
    const [previewImg, setPreviewImg] = useState(null);
    const messagesEndRef = useRef();

    // Filter chat messages between current user and other user
    const filtered = messages.filter(
        (m) =>
            (m.from === myUsername && m.to === otherUser) ||
            (m.from === otherUser && m.to === myUsername)
    );

    // Typing indicator
    const displayMessages =
        typingUser === otherUser
            ? [...filtered, { id: "typing", from: otherUser, message: "" }]
            : filtered;

    // Scroll to bottom on new messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [displayMessages]);

    const handleSend = () => {
        if (input.trim()) {
            sendMessage(otherUser, input.trim(), "text");
            setInput("");
        }
    };

    const handleTyping = (text) => {
        setInput(text);
        if (text.trim()) {
            socket.emit("typing", { from: myUsername, to: otherUser });
        }
    };

    return (
        <div className="flex flex-col h-screen bg-black text-white">
            {/* Header */}
            <div className="flex justify-between p-4 bg-gray-900">
                <div>
                    <h2 className="font-bold text-lg">{otherUser}</h2>
                    <p className={`text-sm ${onlineUsers.includes(otherUser) ? "text-green-400" : "text-gray-400"}`}>
                        {onlineUsers.includes(otherUser) ? "Online" : "Offline"}
                    </p>
                </div>
                <button onClick={() => router.back()} className="text-red-500">
                    Back
                </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {displayMessages.map((msg) => {
                    const isMine = msg.from === myUsername;
                    const isTypingBubble = msg.id === "typing";
                    return (
                        <div
                            key={msg.id}
                            className={`flex ${isMine ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`p-3 rounded-xl max-w-[60%] ${isMine
                                        ? "bg-green-500 text-white rounded-br-none"
                                        : "bg-gray-800 text-white rounded-bl-none"
                                    }`}
                            >
                                {isTypingBubble ? (
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
                                {isMine && !isTypingBubble && (
                                    <p className="text-xs mt-1">{msg.seen ? "✓✓ Seen" : "✓ Sent"}</p>
                                )}
                            </div>
                        </div>
                    );
                })}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="flex p-4 bg-gray-900">
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
                    <img src={previewImg} className="max-h-[90%] max-w-[90%] object-contain" />
                </div>
            )}
        </div>
    );
}
