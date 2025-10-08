"use client";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, useContext } from "react";
import { ChatContext } from "@/app/context/chatcontext";

export default function CallPage() {
    const { chatId } = useParams(); // target user id
    const searchParams = useSearchParams();
    const { myUsername, socket } = useContext(ChatContext);

    const isVideoCall = searchParams.get("video") === "true";

    const [inCall, setInCall] = useState(false);
    const [incomingCall, setIncomingCall] = useState(null);
    const [calling, setCalling] = useState(false);

    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const peerRef = useRef(null);

    // ===== Start outgoing call =====
    const startCall = async () => {
        console.log("Starting call to");
        if (!chatId) return;
        console.log("Starting call to");
        setCalling(true);

        const stream = await navigator.mediaDevices.getUserMedia({ video: isVideoCall, audio: true });
        localVideoRef.current.srcObject = stream;

        const peer = new RTCPeerConnection();
        peerRef.current = peer;
        stream.getTracks().forEach(track => peer.addTrack(track, stream));

        peer.ontrack = e => (remoteVideoRef.current.srcObject = e.streams[0]);
        peer.onicecandidate = e => {
            if (e.candidate) socket.emit("webrtc-ice-candidate", { room: chatId, candidate: e.candidate });
        };

        socket.emit("call-user", { from: myUsername, to: 'maal' });

        const offer = await peer.createOffer();
        await peer.setLocalDescription(offer);
        socket.emit("webrtc-offer", { room: chatId, offer });
    };

    // ===== Accept incoming call =====
    const acceptCall = async caller => {
        setIncomingCall(null);
        setInCall(true);

        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideoRef.current.srcObject = stream;

        const peer = new RTCPeerConnection();
        peerRef.current = peer;
        stream.getTracks().forEach(track => peer.addTrack(track, stream));

        peer.ontrack = e => (remoteVideoRef.current.srcObject = e.streams[0]);
        peer.onicecandidate = e => {
            if (e.candidate) socket.emit("webrtc-ice-candidate", { room: caller, candidate: e.candidate });
        };

        socket.emit("accept-call", { from: myUsername, to: caller });
    };

    // ===== Socket listeners =====
    useEffect(() => {
        if (!socket) return;
        console.log("Starting call to");
        // Outgoing call on page load
        startCall();

        socket.on("incoming-call", ({ from }) => {
            console.log("Incoming call from");
            setIncomingCall(from);
        });

        socket.on("call-accepted", ({ from }) => {
            console.log("Call accepted by", from);
            setCalling(false);
            setInCall(true);
        });

        socket.on("webrtc-offer", async ({ offer, room }) => {
            console.log("Received offer from", room);

            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            localVideoRef.current.srcObject = stream;

            const peer = new RTCPeerConnection();
            peerRef.current = peer;
            stream.getTracks().forEach(track => peer.addTrack(track, stream));

            peer.ontrack = e => (remoteVideoRef.current.srcObject = e.streams[0]);
            peer.onicecandidate = e => {
                if (e.candidate) socket.emit("webrtc-ice-candidate", { room, candidate: e.candidate });
            };

            await peer.setRemoteDescription(new RTCSessionDescription(offer));
            const answer = await peer.createAnswer();
            await peer.setLocalDescription(answer);
            socket.emit("webrtc-answer", { room, answer });
            setInCall(true);
        });

        socket.on("webrtc-answer", async ({ answer }) => {
            console.log("Received answer");
            await peerRef.current.setRemoteDescription(new RTCSessionDescription(answer));
        });

        socket.on("webrtc-ice-candidate", async ({ candidate }) => {
            try { await peerRef.current.addIceCandidate(candidate); }
            catch (e) { console.error("ICE candidate error", e); }
        });

        return () => {
            socket.off("incoming-call");
            socket.off("call-accepted");
            socket.off("webrtc-offer");
            socket.off("webrtc-answer");
            socket.off("webrtc-ice-candidate");
        };
    }, [socket]);

    return (
        <div className="flex flex-col h-screen bg-black text-white items-center justify-center space-y-4">
            {incomingCall && !inCall && (
                <div className="bg-gray-800 p-6 rounded-xl text-center">
                    <p className="text-white mb-4">{incomingCall} is calling you</p>
                    <div className="flex space-x-4 justify-center">
                        <button onClick={() => acceptCall(incomingCall)} className="bg-green-500 px-4 py-2 rounded-lg">Accept</button>
                        <button onClick={() => setIncomingCall(null)} className="bg-red-500 px-4 py-2 rounded-lg">Reject</button>
                    </div>
                </div>
            )}

            {calling && !inCall && <p className="text-white text-xl">Calling {chatId}...</p>}

            {inCall && (
                <div className="flex space-x-4 w-full justify-center items-center">
                    <video ref={localVideoRef} autoPlay muted className="w-1/2 h-96 rounded-lg bg-black" />
                    <video ref={remoteVideoRef} autoPlay className="w-1/2 h-96 rounded-lg bg-black" />
                </div>
            )}
        </div>
    );
}
