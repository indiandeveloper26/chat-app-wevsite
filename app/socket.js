import { io } from "socket.io-client";

const socket = io("https://chat-app-server-render-v-1.onrender.com", {
    transports: ["websocket"],
    autoConnect: false,
});

export default socket;
