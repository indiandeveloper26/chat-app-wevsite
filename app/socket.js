import { io } from "socket.io-client";

const socket = io("http://10.214.133.92:4000", {
    transports: ["websocket"],
    autoConnect: false,
});

export default socket;
