"use client"
import { io } from "socket.io-client";

// ✅ Socket instance
const socket = io("https://chat-app-server-render-v-1.onrender.com", {
    transports: ["websocket"],
    autoConnect: false, // manual connect
});

export default socket;

