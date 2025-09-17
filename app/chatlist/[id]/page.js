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
            socket.emit("typing", { from: myUsername, to: otherUser });
        }
    };

    return (
        <div className="flex flex-col h-screen bg-black text-white">
            <div className="flex justify-between p-4 bg-gray-900">
                <div>
                    <h2 className="font-bold text-lg">{id}</h2>
                    <p className={`text-sm ${onlineUsers.includes(id) ? "text-green-400" : "text-gray-400"}`}>
                        {onlineUsers.includes(id) ? "Online" : "Offline"}
                    </p>
                </div>
                <button onClick={() => router.back()} className="text-red-500">
                    Back
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {displayMessages.map((msg) => {
                    const isMine = msg.from === myUsername;
                    const isTyping = msg.id === "typing";
                    return (
                        <div key={msg.id} className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
                            <div className={`p-3 rounded-xl max-w-[60%] ${isMine ? "bg-green-500 rounded-br-none" : "bg-gray-800 rounded-bl-none"}`}>
                                {isTyping ? (
                                    <div className="flex space-x-1">
                                        <span className="animate-bounce">•</span>
                                        <span className="animate-bounce delay-150">•</span>
                                        <span className="animate-bounce delay-300">•</span>
                                    </div>
                                ) : (
                                    <p>{msg.message}</p>
                                )}
                                {isMine && !isTyping && <p className="text-xs mt-1">{msg.seen ? "✓✓ Seen" : "✓ Sent"}</p>}
                            </div>
                        </div>
                    );
                })}
                <div ref={messagesEndRef} />
            </div>

            <div className="flex p-4 bg-gray-900">
                <input
                    value={input}
                    onChange={(e) => handleTyping(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 p-2 rounded-full bg-gray-800 text-white outline-none"
                />
                <button onClick={handleSend} className="ml-2 bg-green-500 px-4 py-2 rounded-full font-bold">
                    Send
                </button>
            </div>
        </div>
    );
}
