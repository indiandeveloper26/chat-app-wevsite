// // // // // // "use client";
// // // // // // import { useContext } from "react";
// // // // // // import { ChatContext } from "../context/chatcontext";
// // // // // // import { useRouter } from "next/navigation";


// // // // // // function Incoming() {

// // // // // //     let route = useRouter()
// // // // // //     const {
// // // // // //         incomingcall, // true/false
// // // // // //         myUsername,
// // // // // //         seticomingcall,
// // // // // //         icnominguser,
// // // // // //         socket,
// // // // // //     } = useContext(ChatContext);

// // // // // //     const rejectCall = (e) => {
// // // // // //         e.preventDefault();
// // // // // //         if (!incomingcall) return;

// // // // // //         socket.emit("reject-call", { from: myUsername, to: icnominguser });
// // // // // //         seticomingcall(false);
// // // // // //         console.log("Call rejected");
// // // // // //     };
// // // // // //     // const acceptCall = (e) => {
// // // // // //     //     e.preventDefault(); // 🚫 stop form submission / reload

// // // // // //     //     if (!incomingcall) return;

// // // // // //     //     // socket emit to backend
// // // // // //     //     socket.emit("accept-call", { from: myUsername, to: icnominguser });

// // // // // //     //     // close incoming popup
// // // // // //     //     seticomingcall(false);

// // // // // //     //     // navigate to call screen

// // // // // //     //     route.push(`/chatlist/${icnominguser}/call`);
// // // // // //     // };
// // // // // //     const acceptCall = (e) => {
// // // // // //         e.preventDefault(); // page reload hone se roke

// // // // // //         if (!incomingcall) return;

// // // // // //         // ✅ correct variable name (incominguser, not icnominguser)
// // // // // //         socket.emit("accept-call", { from: myUsername, to: icnominguser });

// // // // // //         seticomingcall(false);

// // // // // //         // ✅ navigate to call screen
// // // // // //         route.push(`/chatlist/${icnominguser}/call`);
// // // // // //     };

// // // // // //     if (!incomingcall) return null; // agar call nahi aaya to kuch nahi dikhaye

// // // // // //     return (
// // // // // //         <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 z-50">
// // // // // //             <div className="bg-gray-800 p-6 rounded-xl text-center">
// // // // // //                 <p className="text-white mb-4">
// // // // // //                     {incomingcall.from} is calling you ({incomingcall.type})
// // // // // //                 </p>
// // // // // //                 <div className="flex space-x-4 justify-center">
// // // // // //                     <button
// // // // // //                         onClick={acceptCall}
// // // // // //                         className="bg-green-500 px-4 py-2 rounded-lg"
// // // // // //                     >
// // // // // //                         Accept
// // // // // //                     </button>
// // // // // //                     <button
// // // // // //                         onClick={rejectCall}
// // // // // //                         className="bg-red-500 px-4 py-2 rounded-lg"
// // // // // //                     >
// // // // // //                         Reject
// // // // // //                     </button>
// // // // // //                 </div>
// // // // // //             </div>
// // // // // //         </div>
// // // // // //     );
// // // // // // }




// // // // // // export default Incoming
















// // // // // "use client";
// // // // // import { useContext } from "react";
// // // // // import { ChatContext } from "../context/chatcontext";
// // // // // import { useRouter } from "next/navigation";

// // // // // export default function Incoming() {
// // // // //     const router = useRouter();
// // // // //     const {
// // // // //         incomingCall,
// // // // //         setIncomingCall,
// // // // //         incomingUser,
// // // // //         myUsername,
// // // // //         socket
// // // // //     } = useContext(ChatContext);


// // // // //     // ✅ Accept Call Handler
// // // // //     const acceptCall = (e) => {
// // // // //         e.preventDefault();
// // // // //         if (!incomingcall) return;

// // // // //         socket.emit("accept-call", { from: myUsername, to: incomingUser });

// // // // //         // Hide popup
// // // // //         setIncomingCall(false);

// // // // //         // Go to WebRTC Call Screen
// // // // //         router.push(`/chatlist/${incomingUser}/call`);
// // // // //     };

// // // // //     // ✅ Reject Call Handler
// // // // //     const rejectCall = (e) => {
// // // // //         e.preventDefault();
// // // // //         if (!incomingcall) return;

// // // // //         socket.emit("reject-call", { from: myUsername, to: incomingUser });
// // // // //         setIncomingCall(false);
// // // // //     };

// // // // //     // ✅ Agar koi call nahi to kuch show na ho
// // // // //     if (!incomingcall) return null;

// // // // //     return (
// // // // //         <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 z-50">
// // // // //             <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
// // // // //                 <p className="text-white mb-4 text-lg">
// // // // //                     {incomingcall.from} is calling you ({incomingcall.type})
// // // // //                 </p>
// // // // //                 <div className="flex space-x-4 justify-center">
// // // // //                     <button
// // // // //                         onClick={acceptCall}
// // // // //                         className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg text-white font-semibold"
// // // // //                     >
// // // // //                         Accept
// // // // //                     </button>
// // // // //                     <button
// // // // //                         onClick={rejectCall}
// // // // //                         className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg text-white font-semibold"
// // // // //                     >
// // // // //                         Reject
// // // // //                     </button>
// // // // //                 </div>
// // // // //             </div>
// // // // //         </div>
// // // // //     );
// // // // // }






















// // // // "use client";
// // // // import { useContext } from "react";
// // // // import { ChatContext } from "../context/chatcontext";
// // // // import { useRouter } from "next/navigation";

// // // // export default function Incoming() {
// // // //     const router = useRouter();
// // // //     const {
// // // //         incomingCall,     // ✅ correct camelCase
// // // //         setIncomingCall,
// // // //         incomingUser,
// // // //         myUsername,
// // // //         socket
// // // //     } = useContext(ChatContext);

// // // //     // ✅ Accept Call
// // // //     const acceptCall = (e) => {
// // // //         e.preventDefault();
// // // //         // if (!incomingCall) return; // ✅ fixed

// // // //         socket.emit("accept-call", { from: myUsername, to: incomingUser });

// // // //         setIncomingCall(false);

// // // //         router.push(`/chatlist/${incomingUser}/call`);
// // // //     };

// // // //     // ✅ Reject Call
// // // //     const rejectCall = (e) => {
// // // //         e.preventDefault();
// // // //         if (!incomingCall) return; // ✅ fixed

// // // //         socket.emit("reject-call", { from: myUsername, to: incomingUser });
// // // //         setIncomingCall(false);
// // // //     };

// // // //     // ✅ agar koi call nahi hai to kuch mat dikhana
// // // //     if (!incomingCall) return null; // ✅ fixed

// // // //     return (
// // // //         <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 z-50">
// // // //             <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
// // // //                 <p className="text-white mb-4 text-lg">
// // // //                     {incomingCall.from} is calling you ({incomingCall.type})
// // // //                 </p>
// // // //                 <div className="flex space-x-4 justify-center">
// // // //                     <button
// // // //                         onClick={() => acceptCall(e)}
// // // //                         className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg text-white font-semibold"
// // // //                     >
// // // //                         Accept
// // // //                     </button>
// // // //                     <button
// // // //                         onClick={rejectCall}
// // // //                         className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg text-white font-semibold"
// // // //                     >
// // // //                         Reject
// // // //                     </button>
// // // //                 </div>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // }

















// // // "use client";
// // // import { useContext } from "react";
// // // import { ChatContext } from "../context/chatcontext";
// // // import { useRouter } from "next/navigation";

// // // export default function Incoming() {
// // //     const router = useRouter();
// // //     const { incomingCall, setIncomingCall, incomingUser, myUsername, socket } =
// // //         useContext(ChatContext);

// // //     if (!incomingCall) return null;

// // //     const acceptCall = () => {
// // //         socket.emit("accept-call", { from: myUsername, to: incomingCall.from });
// // //         setIncomingCall(null); // reset
// // //         router.push(`/chatlist/${incomingCall.from}/call`);
// // //     };

// // //     const rejectCall = () => {
// // //         socket.emit("reject-call", { from: myUsername, to: incomingCall.from });
// // //         setIncomingCall(null); // reset
// // //     };

// // //     return (
// // //         <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 z-50">
// // //             <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
// // //                 <p className="text-white mb-4 text-lg">
// // //                     {incomingCall.from} is calling you ({incomingCall.type})
// // //                 </p>
// // //                 <div className="flex space-x-4 justify-center">
// // //                     <button
// // //                         onClick={acceptCall}
// // //                         className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg text-white font-semibold"
// // //                     >
// // //                         Accept
// // //                     </button>
// // //                     <button
// // //                         onClick={rejectCall}
// // //                         className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg text-white font-semibold"
// // //                     >
// // //                         Reject
// // //                     </button>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // }
















// // "use client";
// // import { useContext } from "react";
// // import { ChatContext } from "../context/chatcontext";
// // // import { useRouter } from "next/navigation";

// // export default function Incoming() {
// //     // const router = useRouter();
// //     const { incomingCall, setIncomingCall, myUsername, socket } =
// //         useContext(ChatContext);

// //     if (!incomingCall) return null;

// //     const acceptCall = () => {

// //         console.log(1 + 1)

// //         // console.log('apepd push ntou')
// //         // if (!incomingCall?.from) return;

// //         // // socket.emit("accept-call", { from: myUsername, to: incomingCall.from });
// //         // // setIncomingCall(null);

// //         // // small delay to ensure state cleared before navigation
// //         // setTimeout(() => {
// //         //     router.push(`/chatlist/${incomingCall.from}/call`);
// //         // }, 50);
// //     };

// //     const rejectCall = () => {
// //         if (!incomingCall?.from) return;

// //         socket.emit("reject-call", { from: myUsername, to: incomingCall.from });
// //         setIncomingCall(null);
// //     };

// //     return (
// //         <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 z-50">
// //             <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
// //                 <p className="text-white mb-4 text-lg">
// //                     {incomingCall.from} is calling you ({incomingCall.type})
// //                 </p>
// //                 {/* <div className="flex space-x-4 justify-center">
// //                     <button title="accpested"
// //                         onClick={() => acceptCall()}
// //                         className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg text-white font-semibold"
// //                     >

// //                     </button> */}


// //                 <h2 onClick={() => console.log('push')}>
// //                     cliclk now
// //                 </h2>
// //                 <button
// //                     onClick={rejectCall} className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg text-white font-semibold"
// //                 >

// //                 </button>
// //             </div>
// //         </div>

// //     );
// // }























// "use client";
// import React, { useContext, useEffect } from "react";
// import { ChatContext } from "../context/chatcontext";
// import { useRouter } from "next/navigation";
// // apne context ka path sahi karo

// export default function IncomingCall() {
//     const { incomingCall, setIncomingCall, myUsername, socket } = useContext(ChatContext);

//     let router = useRouter()

//     const acceptCall = () => {
//         console.log("Call accepted from", incomingCall.from);
//         setIncomingCall(null);
//         router.push(`/call?with=${incomingCall.from}`);


//         // alert('go vidoecall')

//         // Navigate to call page (Next.js router)
//         // window.location.href = `/call?with=${incomingCall.from}`;
//     };

//     const rejectCall = () => {
//         socket.emit("reject-call", { from: myUsername, to: incomingCall.from });
//         setIncomingCall(null);
//     };

//     if (!incomingCall) return null;

//     return (
//         <div style={styles.overlay}>
//             <div style={styles.card}>
//                 <h2 style={styles.title}>
//                     {incomingCall.from} is calling you ({incomingCall.type})
//                 </h2>

//                 <div style={styles.buttons}>
//                     <button style={{ ...styles.button, ...styles.accept }} onClick={acceptCall}>
//                         Accept
//                     </button>

//                     <button style={{ ...styles.button, ...styles.reject }} onClick={rejectCall}>
//                         Reject
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// const styles = {
//     overlay: {
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: "rgba(0,0,0,0.7)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         zIndex: 9999,
//     },
//     card: {
//         backgroundColor: "#fff",
//         padding: "30px",
//         borderRadius: "16px",
//         width: "90%",
//         maxWidth: "400px",
//         textAlign: "center",
//         boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
//     },
//     title: {
//         fontSize: "18px",
//         color: "#000",
//         marginBottom: "20px",
//         fontWeight: "600",
//     },
//     buttons: {
//         display: "flex",
//         justifyContent: "space-between",
//         gap: "10px",
//     },
//     button: {
//         flex: 1,
//         padding: "12px",
//         borderRadius: "10px",
//         color: "#fff",
//         border: "none",
//         fontWeight: "bold",
//         cursor: "pointer",
//         fontSize: "16px",
//         transition: "0.2s ease",
//     },
//     accept: {
//         backgroundColor: "#4CAF50",
//     },
//     reject: {
//         backgroundColor: "#f44336",
//     },
// };






















"use client";
import React, { useContext, useEffect, useRef } from "react";
import { ChatContext } from "../context/chatcontext";
import { useRouter } from "next/navigation";

export default function IncomingCall() {
    const { incomingCall, setIncomingCall, myUsername, socket } = useContext(ChatContext);
    const router = useRouter();
    const audioRef = useRef(null);

    // Play ringtone on incoming call
    useEffect(() => {
        if (incomingCall) {
            // Create audio element
            const audio = new Audio("/ringtone.mp3"); // public folder me rakho
            audio.loop = true;
            audio.play().catch((err) => console.log("Audio play failed:", err));
            audioRef.current = audio;
        } else {
            // Stop audio if no incoming call
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
                audioRef.current = null;
            }
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
                audioRef.current = null;
            }
        };
    }, [incomingCall]);

    const acceptCall = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        setIncomingCall(null);
        router.push(`/call?with=${incomingCall.from}`);
    };

    const rejectCall = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        socket.emit("reject-call", { from: myUsername, to: incomingCall.from });
        setIncomingCall(null);
    };

    if (!incomingCall) return null;

    return (
        <div style={styles.overlay}>
            <div style={styles.card}>
                <h2 style={styles.title}>
                    {incomingCall.from} is calling you ({incomingCall.type})
                </h2>

                <div style={styles.buttons}>
                    <button style={{ ...styles.button, ...styles.accept }} onClick={acceptCall}>
                        Accept
                    </button>

                    <button style={{ ...styles.button, ...styles.reject }} onClick={rejectCall}>
                        Reject
                    </button>
                </div>
            </div>
        </div>
    );
}

// Styles same as before
const styles = {
    overlay: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.7)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999 },
    card: { backgroundColor: "#fff", padding: "30px", borderRadius: "16px", width: "90%", maxWidth: "400px", textAlign: "center", boxShadow: "0 4px 15px rgba(0,0,0,0.3)" },
    title: { fontSize: "18px", color: "#000", marginBottom: "20px", fontWeight: "600" },
    buttons: { display: "flex", justifyContent: "space-between", gap: "10px" },
    button: { flex: 1, padding: "12px", borderRadius: "10px", color: "#fff", border: "none", fontWeight: "bold", cursor: "pointer", fontSize: "16px", transition: "0.2s ease" },
    accept: { backgroundColor: "#4CAF50" },
    reject: { backgroundColor: "#f44336" },
};
