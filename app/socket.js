// socket.js
import { io } from "socket.io-client";

// ✅ Socket instance
const socket = io("http://10.95.139.92:4000", {
    transports: ["websocket"],
    autoConnect: false, // manual connect
});

export default socket;

