// // // // // // // "use client";
// // // // // // // import { useEffect, useState, useContext } from "react";
// // // // // // // import { useRouter } from "next/navigation";
// // // // // // // import { ChatContext } from "../context.js"
// // // // // // // // icons
// // // // // // // import { motion } from "framer-motion";


// // // // // // // const page = () => {
// // // // // // //     const [username, setUsername] = useState("");
// // // // // // //     const router = useRouter();

// // // // // // //     const {
// // // // // // //         visibleChats,
// // // // // // //         clearAll,
// // // // // // //         markChatAsRead,
// // // // // // //         onlineUsers,
// // // // // // //         addToDeletedUsers,
// // // // // // //     } = useContext(ChatContext);

// // // // // // //     // ✅ load username from localStorage
// // // // // // //     useEffect(() => {
// // // // // // //         const savedName = localStorage.getItem("username");
// // // // // // //         if (savedName) setUsername(savedName);
// // // // // // //     }, []);

// // // // // // //     const logout = () => {
// // // // // // //         if (window.confirm("Are you sure you want to logout?")) {
// // // // // // //             localStorage.clear();
// // // // // // //             if (clearAll) clearAll();
// // // // // // //             router.push("/signup");
// // // // // // //         }
// // // // // // //     };

// // // // // // //     const openChat = async (item) => {
// // // // // // //         await markChatAsRead(item.adduser);
// // // // // // //         router.push(`/chat/${item.adduser}`);
// // // // // // //     };

// // // // // // //     const deleteChat = (user) => {
// // // // // // //         if (window.confirm(`Delete chat with ${user}?`)) {
// // // // // // //             addToDeletedUsers(user);
// // // // // // //         }
// // // // // // //     };

// // // // // // //     return (
// // // // // // //         <div className="bg-black text-white min-h-screen flex flex-col">
// // // // // // //             {/* ✅ Header */}
// // // // // // //             <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-neutral-900 to-black shadow">
// // // // // // //                 <button
// // // // // // //                     onClick={logout}
// // // // // // //                     className="p-2 rounded-full bg-white/10 hover:bg-white/20"
// // // // // // //                 >
// // // // // // //                     {/* <LogOut size={20} /> */}
// // // // // // //                 </button>

// // // // // // //                 <h1
// // // // // // //                     className="text-lg font-bold truncate cursor-pointer"
// // // // // // //                     onClick={() => router.push("/ads")}
// // // // // // //                 >
// // // // // // //                     Hi 👋 {username}
// // // // // // //                 </h1>

// // // // // // //                 <button
// // // // // // //                     onClick={() => router.push("/search")}
// // // // // // //                     className="p-2 rounded-full bg-white/10 hover:bg-white/20"
// // // // // // //                 >
// // // // // // //                     {/* <Search size={20} /> */}
// // // // // // //                 </button>
// // // // // // //             </div>

// // // // // // //             {/* ✅ Chat List */}
// // // // // // //             <div className="flex-1 overflow-y-auto p-4 space-y-3">
// // // // // // //                 {visibleChats.length === 0 ? (
// // // // // // //                     <div className="text-center text-gray-400 mt-10">
// // // // // // //                         No chats yet. Search and start!
// // // // // // //                     </div>
// // // // // // //                 ) : (
// // // // // // //                     visibleChats.map((item, idx) => {
// // // // // // //                         const isOnline = onlineUsers.includes(item.adduser);
// // // // // // //                         const firstLetter = item.adduser.charAt(0).toUpperCase();

// // // // // // //                         return (
// // // // // // //                             <motion.div
// // // // // // //                                 key={idx}
// // // // // // //                                 whileHover={{ scale: 1.02 }}
// // // // // // //                                 className="flex items-center justify-between bg-gradient-to-r from-neutral-800 to-black p-3 rounded-xl"
// // // // // // //                             >
// // // // // // //                                 <button
// // // // // // //                                     className="flex items-center flex-1 text-left"
// // // // // // //                                     onClick={() => openChat(item)}
// // // // // // //                                 >
// // // // // // //                                     <div className="relative w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center mr-3">
// // // // // // //                                         <span className="font-bold text-lg">{firstLetter}</span>
// // // // // // //                                         <span
// // // // // // //                                             className={`absolute bottom-1 right-1 w-3 h-3 rounded-full border border-black ${isOnline ? "bg-green-500" : "bg-gray-500"
// // // // // // //                                                 }`}
// // // // // // //                                         />
// // // // // // //                                     </div>

// // // // // // //                                     <div className="flex-1">
// // // // // // //                                         <p className="font-semibold truncate">{item.adduser}</p>
// // // // // // //                                         <p className="text-sm text-gray-400 truncate">
// // // // // // //                                             {item.lastMessage}
// // // // // // //                                         </p>
// // // // // // //                                     </div>

// // // // // // //                                     {item.unreadCount > 0 && (
// // // // // // //                                         <span className="ml-3 bg-green-500 text-xs font-bold px-2 py-1 rounded-full">
// // // // // // //                                             {item.unreadCount}
// // // // // // //                                         </span>
// // // // // // //                                     )}
// // // // // // //                                 </button>

// // // // // // //                                 {/* delete btn */}
// // // // // // //                                 <button
// // // // // // //                                     onClick={() => deleteChat(item.adduser)}
// // // // // // //                                     className="ml-2 p-2 bg-red-600 hover:bg-red-700 rounded-lg"
// // // // // // //                                 >
// // // // // // //                                     <Trash2 size={18} />
// // // // // // //                                 </button>
// // // // // // //                             </motion.div>
// // // // // // //                         );
// // // // // // //                     })
// // // // // // //                 )}
// // // // // // //             </div>

// // // // // // //             {/* ✅ Premium Button */}
// // // // // // //             <button
// // // // // // //                 className="fixed bottom-6 right-6 bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-full font-semibold shadow-lg"
// // // // // // //                 onClick={() => router.push(`/payment?username=${username}`)}
// // // // // // //             >
// // // // // // //                 Go Premium
// // // // // // //             </button>
// // // // // // //         </div>
// // // // // // //     );
// // // // // // // };

// // // // // // // export default page;














// // // // // // "use client";
// // // // // // import { useEffect, useState, useContext } from "react";
// // // // // // import { useRouter } from "next/navigation";
// // // // // // import { ChatContext } from "../context.js";
// // // // // // import { motion } from "framer-motion";
// // // // // // import { Trash2 } from "lucide-react";

// // // // // // const page = () => {
// // // // // //     const [username, setUsername] = useState("");
// // // // // //     const router = useRouter();

// // // // // //     const {
// // // // // //         visibleChats = [],
// // // // // //         clearAll,
// // // // // //         markChatAsRead,
// // // // // //         onlineUsers = [],
// // // // // //         addToDeletedUsers,
// // // // // //     } = useContext(ChatContext);

// // // // // //     // ✅ load username from localStorage
// // // // // //     useEffect(() => {
// // // // // //         const savedName = localStorage.getItem("username");
// // // // // //         if (savedName) setUsername(savedName);
// // // // // //     }, []);

// // // // // //     const logout = () => {
// // // // // //         if (window.confirm("Are you sure you want to logout?")) {
// // // // // //             localStorage.clear();
// // // // // //             clearAll?.();
// // // // // //             router.push("/signup");
// // // // // //         }
// // // // // //     };

// // // // // //     const openChat = async (item) => {
// // // // // //         await markChatAsRead?.(item.adduser);
// // // // // //         router.push(`/chat/${item.adduser}`);
// // // // // //     };

// // // // // //     const deleteChat = (user) => {
// // // // // //         if (window.confirm(`Delete chat with ${user}?`)) {
// // // // // //             addToDeletedUsers?.(user);
// // // // // //         }
// // // // // //     };

// // // // // //     return (
// // // // // //         <div className="bg-black text-white min-h-screen flex flex-col">
// // // // // //             {/* ✅ Header */}
// // // // // //             <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-neutral-900 to-black shadow">
// // // // // //                 <button
// // // // // //                     onClick={logout}
// // // // // //                     className="p-2 rounded-full bg-white/10 hover:bg-white/20"
// // // // // //                 >
// // // // // //                     Logout
// // // // // //                 </button>

// // // // // //                 <h1
// // // // // //                     className="text-lg font-bold truncate cursor-pointer"
// // // // // //                     onClick={() => router.push("/ads")}
// // // // // //                 >
// // // // // //                     Hi 👋 {username}
// // // // // //                 </h1>

// // // // // //                 <button
// // // // // //                     onClick={() => router.push("/search")}
// // // // // //                     className="p-2 rounded-full bg-white/10 hover:bg-white/20"
// // // // // //                 >
// // // // // //                     Search
// // // // // //                 </button>
// // // // // //             </div>

// // // // // //             {/* ✅ Chat List */}
// // // // // //             <div className="flex-1 overflow-y-auto p-4 space-y-3">
// // // // // //                 {visibleChats.length === 0 ? (
// // // // // //                     <div className="text-center text-gray-400 mt-10">
// // // // // //                         No chats yet. Search and start!
// // // // // //                     </div>
// // // // // //                 ) : (
// // // // // //                     visibleChats.map((item, idx) => {
// // // // // //                         const isOnline = onlineUsers.includes(item.adduser);
// // // // // //                         const firstLetter = item.adduser.charAt(0).toUpperCase();

// // // // // //                         return (
// // // // // //                             <motion.div
// // // // // //                                 key={idx}
// // // // // //                                 whileHover={{ scale: 1.02 }}
// // // // // //                                 className="flex items-center justify-between bg-gradient-to-r from-neutral-800 to-black p-3 rounded-xl"
// // // // // //                             >
// // // // // //                                 <button
// // // // // //                                     className="flex items-center flex-1 text-left"
// // // // // //                                     onClick={() => openChat(item)}
// // // // // //                                 >
// // // // // //                                     <div className="relative w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center mr-3">
// // // // // //                                         <span className="font-bold text-lg">{firstLetter}</span>
// // // // // //                                         <span
// // // // // //                                             className={`absolute bottom-1 right-1 w-3 h-3 rounded-full border border-black ${isOnline ? "bg-green-500" : "bg-gray-500"
// // // // // //                                                 }`}
// // // // // //                                         />
// // // // // //                                     </div>

// // // // // //                                     <div className="flex-1">
// // // // // //                                         <p className="font-semibold truncate">{item.adduser}</p>
// // // // // //                                         <p className="text-sm text-gray-400 truncate">
// // // // // //                                             {item.lastMessage}
// // // // // //                                         </p>
// // // // // //                                     </div>

// // // // // //                                     {item.unreadCount > 0 && (
// // // // // //                                         <span className="ml-3 bg-green-500 text-xs font-bold px-2 py-1 rounded-full">
// // // // // //                                             {item.unreadCount}
// // // // // //                                         </span>
// // // // // //                                     )}
// // // // // //                                 </button>

// // // // // //                                 {/* delete btn */}
// // // // // //                                 <button
// // // // // //                                     onClick={() => deleteChat(item.adduser)}
// // // // // //                                     className="ml-2 p-2 bg-red-600 hover:bg-red-700 rounded-lg"
// // // // // //                                 >
// // // // // //                                     <Trash2 size={18} />
// // // // // //                                 </button>
// // // // // //                             </motion.div>
// // // // // //                         );
// // // // // //                     })
// // // // // //                 )}
// // // // // //             </div>

// // // // // //             {/* ✅ Premium Button */}
// // // // // //             <button
// // // // // //                 className="fixed bottom-6 right-6 bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-full font-semibold shadow-lg"
// // // // // //                 onClick={() => router.push(`/payment?username=${username}`)}
// // // // // //             >
// // // // // //                 Go Premium
// // // // // //             </button>
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default page;


































// // // // // "use client";
// // // // // import { useEffect, useState, useContext } from "react";
// // // // // import { useRouter } from "next/navigation";
// // // // // import { ChatContext } from "../context.js";
// // // // // import { motion } from "framer-motion";
// // // // // import { TrashIcon } from "@heroicons/react/24/outline"; // ✅ HeroIcons use

// // // // // const page = () => {
// // // // //     const [username, setUsername] = useState("");
// // // // //     const router = useRouter();

// // // // //     const {
// // // // //         visibleChats = [],
// // // // //         clearAll,
// // // // //         markChatAsRead,
// // // // //         onlineUsers = [],
// // // // //         addToDeletedUsers,
// // // // //     } = useContext(ChatContext);

// // // // //     // load username
// // // // //     useEffect(() => {
// // // // //         const savedName = localStorage.getItem("username");
// // // // //         if (savedName) setUsername(savedName);
// // // // //     }, []);

// // // // //     const logout = () => {
// // // // //         if (window.confirm("Are you sure you want to logout?")) {
// // // // //             localStorage.clear();
// // // // //             clearAll?.();
// // // // //             router.push("/");
// // // // //         }
// // // // //     };

// // // // //     const openChat = async (item) => {
// // // // //         await markChatAsRead?.(item.adduser);
// // // // //         router.push(`/chatlist/${item.adduser}`);
// // // // //     };

// // // // //     const deleteChat = (user) => {
// // // // //         if (window.confirm(`Delete chat with ${user}?`)) {
// // // // //             addToDeletedUsers?.(user);
// // // // //         }
// // // // //     };

// // // // //     return (
// // // // //         <div className="bg-black text-white min-h-screen flex flex-col">
// // // // //             {/* Header */}
// // // // //             <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-neutral-900 to-black shadow">
// // // // //                 <button onClick={logout} className="p-2 rounded-full bg-white/10 hover:bg-white/20">
// // // // //                     Logout
// // // // //                 </button>

// // // // //                 <h1 className="text-lg font-bold truncate cursor-pointer" onClick={() => router.push("/ads")}>
// // // // //                     Hi 👋 {username}
// // // // //                 </h1>

// // // // //                 <button onClick={() => router.push("/search")} className="p-2 rounded-full bg-white/10 hover:bg-white/20">
// // // // //                     Search
// // // // //                 </button>
// // // // //             </div>

// // // // //             {/* Chat List */}
// // // // //             <div className="flex-1 overflow-y-auto p-4 space-y-3">
// // // // //                 {visibleChats.length === 0 ? (
// // // // //                     <div className="text-center text-gray-400 mt-10">
// // // // //                         No chats yet. Search and start!
// // // // //                     </div>
// // // // //                 ) : (
// // // // //                     visibleChats.map((item, idx) => {
// // // // //                         const isOnline = onlineUsers.includes(item.adduser);
// // // // //                         const firstLetter = item.adduser.charAt(0).toUpperCase();

// // // // //                         return (
// // // // //                             <motion.div
// // // // //                                 key={idx}
// // // // //                                 whileHover={{ scale: 1.02 }}
// // // // //                                 className="flex items-center justify-between bg-gradient-to-r from-neutral-800 to-black p-3 rounded-xl"
// // // // //                             >
// // // // //                                 <button className="flex items-center flex-1 text-left" onClick={() => openChat(item)}>
// // // // //                                     <div className="relative w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center mr-3">
// // // // //                                         <span className="font-bold text-lg">{firstLetter}</span>
// // // // //                                         <span className={`absolute bottom-1 right-1 w-3 h-3 rounded-full border border-black ${isOnline ? "bg-green-500" : "bg-gray-500"}`} />
// // // // //                                     </div>

// // // // //                                     <div className="flex-1">
// // // // //                                         <p className="font-semibold truncate">{item.adduser}</p>
// // // // //                                         <p className="text-sm text-gray-400 truncate">{item.lastMessage}</p>
// // // // //                                     </div>

// // // // //                                     {item.unreadCount > 0 && (
// // // // //                                         <span className="ml-3 bg-green-500 text-xs font-bold px-2 py-1 rounded-full">
// // // // //                                             {item.unreadCount}
// // // // //                                         </span>
// // // // //                                     )}
// // // // //                                 </button>

// // // // //                                 {/* delete btn */}
// // // // //                                 <button onClick={() => deleteChat(item.adduser)} className="ml-2 p-2 bg-red-600 hover:bg-red-700 rounded-lg">
// // // // //                                     <TrashIcon className="h-5 w-5 text-white" />
// // // // //                                 </button>
// // // // //                             </motion.div>
// // // // //                         );
// // // // //                     })
// // // // //                 )}
// // // // //             </div>

// // // // //             {/* Premium Button */}
// // // // //             <button
// // // // //                 className="fixed bottom-6 right-6 bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-full font-semibold shadow-lg"
// // // // //                 onClick={() => router.push(`/payment?username=${username}`)}
// // // // //             >
// // // // //                 Go Premium
// // // // //             </button>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default page;




















// // // // "use client";
// // // // import { useEffect, useState, useContext } from "react";
// // // // import { useRouter } from "next/navigation";
// // // // import { ChatContext } from "../context.js";
// // // // import { motion } from "framer-motion";
// // // // import { TrashIcon } from "@heroicons/react/24/outline";

// // // // const Page = () => {
// // // //     const [username, setUsername] = useState("");
// // // //     const router = useRouter();

// // // //     const {
// // // //         visibleChats = [],
// // // //         clearAll,
// // // //         markChatAsRead,
// // // //         onlineUsers = [],
// // // //         addToDeletedUsers,
// // // //     } = useContext(ChatContext);

// // // //     useEffect(() => {
// // // //         const savedName = localStorage.getItem("username");
// // // //         if (savedName) setUsername(savedName);
// // // //     }, []);

// // // //     const logout = () => {
// // // //         if (window.confirm("Are you sure you want to logout?")) {
// // // //             localStorage.clear();
// // // //             clearAll?.();
// // // //             router.push("/");
// // // //         }
// // // //     };

// // // //     const openChat = async (item) => {
// // // //         await markChatAsRead?.(item.adduser);
// // // //         router.push(`/chatlist/${item.adduser}`);


// // // //         // alert('chatlsit')
// // // //     };

// // // //     const deleteChat = (user) => {
// // // //         if (window.confirm(`Delete chat with ${user}?`)) {
// // // //             addToDeletedUsers?.(user);
// // // //         }
// // // //     };

// // // //     return (
// // // //         <div className="bg-black text-white min-h-screen flex flex-col">
// // // //             {/* Header */}
// // // //             <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-neutral-900 to-black shadow">
// // // //                 <button onClick={logout} className="p-2 rounded-full bg-white/10 hover:bg-white/20">
// // // //                     Logout
// // // //                 </button>

// // // //                 <h1 className="text-lg font-bold truncate cursor-pointer" onClick={() => router.push("/ads")}>
// // // //                     Hi 👋 {username}
// // // //                 </h1>

// // // //                 <button onClick={() => router.push("/search")} className="p-2 rounded-full bg-white/10 hover:bg-white/20">
// // // //                     Search
// // // //                 </button>
// // // //             </div>

// // // //             {/* Chat List */}
// // // //             <div className="flex-1 overflow-y-auto p-4 space-y-3">
// // // //                 {visibleChats.length === 0 ? (
// // // //                     <div className="text-center text-gray-400 mt-10">
// // // //                         No chats yet. Search and start!
// // // //                     </div>
// // // //                 ) : (
// // // //                     visibleChats.map((item, idx) => {
// // // //                         const isOnline = onlineUsers.includes(item.adduser);
// // // //                         const firstLetter = item.adduser.charAt(0).toUpperCase();

// // // //                         return (
// // // //                             <motion.div
// // // //                                 key={idx}
// // // //                                 whileHover={{ scale: 1.02 }}
// // // //                                 className="flex items-center justify-between bg-gradient-to-r from-neutral-800 to-black p-3 rounded-xl"
// // // //                             >
// // // //                                 <button className="flex items-center flex-1 text-left" onClick={() => openChat(item)}>
// // // //                                     <div className="relative w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center mr-3">
// // // //                                         <span className="font-bold text-lg">{firstLetter}</span>
// // // //                                         <span className={`absolute bottom-1 right-1 w-3 h-3 rounded-full border border-black ${isOnline ? "bg-green-500" : "bg-gray-500"}`} />
// // // //                                     </div>

// // // //                                     <div className="flex-1">
// // // //                                         <p className="font-semibold truncate">{item.adduser}</p>
// // // //                                         <p className="text-sm text-gray-400 truncate">{item.lastMessage}</p>
// // // //                                     </div>

// // // //                                     {item.unreadCount > 0 && (
// // // //                                         <span className="ml-3 bg-green-500 text-xs font-bold px-2 py-1 rounded-full">
// // // //                                             {item.unreadCount}
// // // //                                         </span>
// // // //                                     )}
// // // //                                 </button>

// // // //                                 {/* delete btn */}
// // // //                                 <button onClick={() => deleteChat(item.adduser)} className="ml-2 p-2 bg-red-600 hover:bg-red-700 rounded-lg">
// // // //                                     <TrashIcon className="h-5 w-5 text-white" />
// // // //                                 </button>
// // // //                             </motion.div>
// // // //                         );
// // // //                     })
// // // //                 )}
// // // //             </div>

// // // //             {/* Premium Button */}
// // // //             <button
// // // //                 className="fixed bottom-6 right-6 bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-full font-semibold shadow-lg"
// // // //                 onClick={() => router.push(`/payment?username=${username}`)}
// // // //             >
// // // //                 Go Premium
// // // //             </button>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default Page;



































// // // "use client";
// // // import { useEffect, useState, useContext } from "react";
// // // import { useRouter } from "next/navigation";
// // // import { ChatContext } from "../context.js";
// // // import { motion } from "framer-motion";
// // // import { TrashIcon } from "@heroicons/react/24/outline";

// // // const Page = () => {
// // //     const [username, setUsername] = useState("");
// // //     const router = useRouter();

// // //     const {
// // //         visibleChats = [],
// // //         clearAll,
// // //         markChatAsRead,
// // //         onlineUsers = [],
// // //         addToDeletedUsers,
// // //     } = useContext(ChatContext);

// // //     useEffect(() => {
// // //         const savedName = localStorage.getItem("username");
// // //         if (savedName) setUsername(savedName);
// // //     }, []);

// // //     const logout = () => {
// // //         if (window.confirm("Are you sure you want to logout?")) {
// // //             localStorage.clear();
// // //             clearAll?.();
// // //             router.push("/");
// // //         }
// // //     };

// // //     const openChat = async (item) => {
// // //         await markChatAsRead?.(item.adduser);
// // //         router.push(`/chatlist/${item.adduser}`);
// // //     };

// // //     const deleteChat = (user) => {
// // //         if (window.confirm(`Delete chat with ${user}?`)) {
// // //             addToDeletedUsers?.(user);
// // //         }
// // //     };

// // //     return (
// // //         <div className="bg-black text-white min-h-screen flex flex-col">
// // //             {/* Header */}
// // //             <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-neutral-900 to-black shadow">
// // //                 <button
// // //                     onClick={logout}
// // //                     className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-sm sm:text-base"
// // //                 >
// // //                     Logout
// // //                 </button>

// // //                 <h1
// // //                     className="text-base sm:text-lg font-bold truncate cursor-pointer"
// // //                     onClick={() => router.push("/ads")}
// // //                 >
// // //                     Hi 👋 {username}
// // //                 </h1>

// // //                 <button
// // //                     onClick={() => router.push("/search")}
// // //                     className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-sm sm:text-base"
// // //                 >
// // //                     Search
// // //                 </button>
// // //             </div>

// // //             {/* Chat List */}
// // //             <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3">
// // //                 {visibleChats.length === 0 ? (
// // //                     <div className="text-center text-gray-400 mt-10 text-sm sm:text-base">
// // //                         No chats yet. Search and start!
// // //                     </div>
// // //                 ) : (
// // //                     visibleChats.map((item, idx) => {
// // //                         const isOnline = onlineUsers.includes(item.adduser);
// // //                         const firstLetter = item.adduser.charAt(0).toUpperCase();

// // //                         return (
// // //                             <motion.div
// // //                                 key={idx}
// // //                                 whileHover={{ scale: 1.02 }}
// // //                                 className="flex items-center justify-between bg-gradient-to-r from-neutral-800 to-black p-3 sm:p-4 rounded-xl"
// // //                             >
// // //                                 <button
// // //                                     className="flex items-center flex-1 text-left"
// // //                                     onClick={() => openChat(item)}
// // //                                 >
// // //                                     {/* Avatar */}
// // //                                     <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-600 flex items-center justify-center mr-3 sm:mr-4">
// // //                                         <span className="font-bold text-sm sm:text-lg">
// // //                                             {firstLetter}
// // //                                         </span>
// // //                                         <span
// // //                                             className={`absolute bottom-1 right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-black ${isOnline ? "bg-green-500" : "bg-gray-500"
// // //                                                 }`}
// // //                                         />
// // //                                     </div>

// // //                                     {/* Chat Info */}
// // //                                     <div className="flex-1 min-w-0">
// // //                                         <p className="font-semibold truncate text-sm sm:text-base">
// // //                                             {item.adduser}
// // //                                         </p>
// // //                                         <p className="text-xs sm:text-sm text-gray-400 truncate">
// // //                                             {item.lastMessage}
// // //                                         </p>
// // //                                     </div>

// // //                                     {/* Unread Count */}
// // //                                     {item.unreadCount > 0 && (
// // //                                         <span className="ml-2 sm:ml-3 bg-green-500 text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
// // //                                             {item.unreadCount}
// // //                                         </span>
// // //                                     )}
// // //                                 </button>

// // //                                 {/* Delete button */}
// // //                                 <button
// // //                                     onClick={() => deleteChat(item.adduser)}
// // //                                     className="ml-2 p-1.5 sm:p-2 bg-red-600 hover:bg-red-700 rounded-lg"
// // //                                 >
// // //                                     <TrashIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
// // //                                 </button>
// // //                             </motion.div>
// // //                         );
// // //                     })
// // //                 )}
// // //             </div>

// // //             {/* Premium Button */}
// // //             <button
// // //                 className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-pink-600 hover:bg-pink-700 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full font-semibold shadow-lg text-sm sm:text-base"
// // //                 onClick={() => router.push(`/payment?username=${username}`)}
// // //             >
// // //                 Go Premium
// // //             </button>
// // //         </div>
// // //     );
// // // };

// // // export default Page;








































// // "use client";
// // import { useEffect, useState, useContext } from "react";
// // import { useRouter } from "next/navigation";
// // import { ChatContext } from "../context/chatcontext.jsx";
// // import { motion } from "framer-motion";
// // import { TrashIcon } from "@heroicons/react/24/outline";

// // const Page = () => {
// //     const [username, setUsernamee] = useState("");
// //     const router = useRouter();


// //     const {
// //         visibleChats = [],
// //         clearAll,
// //         setMyUsername,
// //         markChatAsRead,
// //         onlineUsers = [],
// //         addToDeletedUsers,
// //     } = useContext(ChatContext);

// //     useEffect(() => {
// //         const savedName = localStorage.getItem("username");

// //         console.log(savedName)
// //         setUsernamee(savedName)
// //         // console.log('username', savedName)
// //         setMyUsername(savedName);
// //     }, []);

// //     const logout = () => {
// //         if (window.confirm("Are you sure you want to logout?")) {
// //             localStorage.clear();
// //             clearAll?.();
// //             router.push("/");
// //         }
// //     };

// //     const openChat = async (item) => {
// //         await markChatAsRead?.(item.adduser);
// //         router.push(`/chatlist/${item.adduser}`);
// //     };

// //     const deleteChat = (user) => {
// //         if (window.confirm(`Delete chat with ${user}?`)) {
// //             addToDeletedUsers?.(user);
// //         }
// //     };

// //     return (
// //         <div className="bg-black text-white min-h-screen flex flex-col">
// //             {/* Header */}
// //             <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-neutral-900 to-black shadow">
// //                 <button
// //                     onClick={logout}
// //                     className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-xs sm:text-sm"
// //                 >
// //                     Logout
// //                 </button>

// //                 <h1
// //                     className="text-sm caret-red-500 sm:text-base font-bold truncate cursor-pointer"
// //                     onClick={() => router.push("/ads")}
// //                 >
// //                     Hi 👋 {username}
// //                 </h1>

// //                 <button
// //                     onClick={() => router.push("/search")}
// //                     className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-xs sm:text-sm"
// //                 >
// //                     Search
// //                 </button>
// //             </div>

// //             {/* Chat List */}
// //             <div className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-2 sm:space-y-3">
// //                 {visibleChats.length === 0 ? (
// //                     <div className="text-center text-gray-400 mt-8 text-xs sm:text-sm">
// //                         No chats yet. Search and start!
// //                     </div>
// //                 ) : (
// //                     visibleChats.map((item, idx) => {
// //                         const isOnline = onlineUsers.includes(item.adduser);
// //                         const firstLetter = item.adduser.charAt(0).toUpperCase();

// //                         return (
// //                             <motion.div
// //                                 key={idx}
// //                                 whileHover={{ scale: 1.02 }}
// //                                 className="flex items-center justify-between bg-gradient-to-r from-neutral-800 to-black p-2 sm:p-3 rounded-lg sm:rounded-xl"
// //                             >
// //                                 <button
// //                                     className="flex items-center flex-1 text-left"
// //                                     onClick={() => openChat(item)}
// //                                 >
// //                                     {/* Avatar */}
// //                                     <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-600 flex items-center justify-center mr-2 sm:mr-3">
// //                                         <span className="font-bold text-sm sm:text-lg">
// //                                             {firstLetter}
// //                                         </span>
// //                                         <span
// //                                             className={`absolute bottom-1 right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-black ${isOnline ? "bg-green-500" : "bg-gray-500"
// //                                                 }`}
// //                                         />
// //                                     </div>

// //                                     {/* Chat Info */}
// //                                     <div className="flex-1 min-w-0">
// //                                         <p className="font-semibold truncate text-xs sm:text-sm">
// //                                             {item.adduser}
// //                                         </p>
// //                                         <p className="text-[10px] sm:text-xs text-gray-400 truncate">
// //                                             {item.lastMessage}
// //                                         </p>
// //                                     </div>

// //                                     {/* Unread Count */}
// //                                     {item.unreadCount > 0 && (
// //                                         <span className="ml-1 sm:ml-2 bg-green-500 text-[9px] sm:text-xs font-bold px-1.5 py-0.5 rounded-full">
// //                                             {item.unreadCount}
// //                                         </span>
// //                                     )}
// //                                 </button>

// //                                 {/* Delete button */}
// //                                 <button
// //                                     onClick={() => deleteChat(item.adduser)}
// //                                     className="ml-1 sm:ml-2 p-1.5 sm:p-2 bg-red-600 hover:bg-red-700 rounded-lg"
// //                                 >
// //                                     <TrashIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
// //                                 </button>
// //                             </motion.div>
// //                         );
// //                     })
// //                 )}
// //             </div>

// //             {/* Premium Button */}
// //             <button
// //                 className="fixed bottom-3 sm:bottom-6 right-3 sm:right-6 bg-pink-600 hover:bg-pink-700 text-white px-3 sm:px-5 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm shadow-lg"
// //                 onClick={() => router.push(`/payment?username=${username}`)}
// //             >
// //                 Go Premium
// //             </button>
// //         </div>
// //     );
// // };

// // export default Page;






















// "use client";
// import { useEffect, useState, useContext } from "react";
// import { useRouter } from "next/navigation";
// import { ChatContext } from "../context/chatcontext.jsx";
// import { motion } from "framer-motion";
// import { TrashIcon } from "@heroicons/react/24/outline";
// import { FaPhone, FaVideo } from "react-icons/fa"; // added react-icons
// import Incoming from "../calling/page.js";
// import ErrorBoundary from "../ErrorBoundary.jsx";

// const Page = () => {
//     const [username, setUsernamee] = useState("");
//     const router = useRouter();

//     const {
//         visibleChats = [],
//         clearAll,
//         setMyUsername,
//         markChatAsRead,
//         onlineUsers = [],
//         addToDeletedUsers,
//         incomingCall,

//     } = useContext(ChatContext);

//     useEffect(() => {
//         const savedName = localStorage.getItem("username");
//         setUsernamee(savedName);
//         setMyUsername(savedName);
//     }, []);

//     const logout = () => {
//         if (window.confirm("Are you sure you want to logout?")) {
//             localStorage.clear();
//             clearAll?.();
//             router.push("/");
//         }
//     };

//     const openChat = async (item) => {
//         await markChatAsRead?.(item.adduser);
//         router.push(`/chatlist/${item.adduser}`);
//     };

//     const deleteChat = (user) => {
//         if (window.confirm(`Delete chat with ${user}?`)) {
//             addToDeletedUsers?.(user);
//         }
//     };

//     // Placeholder functions for call buttons


//     return (
//         <div className="bg-black text-white min-h-screen flex flex-col">
//             {/* Header */}
//             <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-neutral-900 to-black shadow">
//                 <button
//                     onClick={logout}
//                     className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-xs sm:text-sm"
//                 >
//                     Logout
//                 </button>

//                 <h1
//                     className="text-sm caret-red-500 sm:text-base font-bold truncate cursor-pointer"
//                 // onClick={() => router.push("/ads")}
//                 >
//                     Hi 👋 {username}
//                     {
//                         incomingCall ?
//                             <Incoming />

//                             : null
//                     }
//                 </h1>

//                 {/* Top bar call buttons */}

//             </div>

//             {/* Chat List */}
//             <div className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-2 sm:space-y-3">
//                 {visibleChats.length === 0 ? (
//                     <div className="text-center text-gray-400 mt-8 text-xs sm:text-sm">
//                         No chats yet. Search and start!
//                     </div>
//                 ) : (
//                     visibleChats.map((item, idx) => {
//                         const isOnline = onlineUsers.includes(item.adduser);
//                         const firstLetter = item.adduser.charAt(0).toUpperCase();

//                         return (
//                             <motion.div
//                                 key={idx}
//                                 whileHover={{ scale: 1.02 }}
//                                 className="flex items-center justify-between bg-gradient-to-r from-neutral-800 to-black p-2 sm:p-3 rounded-lg sm:rounded-xl"
//                             >
//                                 <button
//                                     className="flex items-center flex-1 text-left"
//                                     onClick={() => openChat(item)}
//                                 >
//                                     {/* Avatar */}
//                                     <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-600 flex items-center justify-center mr-2 sm:mr-3">
//                                         <span className="font-bold text-sm sm:text-lg">
//                                             {firstLetter}
//                                         </span>
//                                         <span
//                                             className={`absolute bottom-1 right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-black ${isOnline ? "bg-green-500" : "bg-gray-500"
//                                                 }`}
//                                         />
//                                     </div>

//                                     {/* Chat Info */}
//                                     <div className="flex-1 min-w-0">
//                                         <p className="font-semibold truncate text-xs sm:text-sm">
//                                             {item.adduser}
//                                         </p>
//                                         <p className="text-[10px] sm:text-xs text-gray-400 truncate">
//                                             {item.lastMessage}
//                                         </p>
//                                     </div>

//                                     {/* Unread Count */}
//                                     {item.unreadCount > 0 && (
//                                         <span className="ml-1 sm:ml-2 bg-green-500 text-[9px] sm:text-xs font-bold px-1.5 py-0.5 rounded-full">
//                                             {item.unreadCount}
//                                         </span>
//                                     )}
//                                 </button>

//                                 {/* Delete button */}
//                                 <button
//                                     onClick={() => deleteChat(item.adduser)}
//                                     className="ml-1 sm:ml-2 p-1.5 sm:p-2 bg-red-600 hover:bg-red-700 rounded-lg"
//                                 >
//                                     <TrashIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
//                                 </button>
//                             </motion.div>
//                         );
//                     })
//                 )}
//             </div>

//             {/* Premium Button */}
//             <button
//                 className="fixed bottom-3 sm:bottom-6 right-3 sm:right-6 bg-pink-600 hover:bg-pink-700 text-white px-3 sm:px-5 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm shadow-lg"
//                 onClick={() => router.push(`/payment?username=${username}`)}
//             >
//                 Go Premium
//             </button>
//         </div>
//     );
// };

// export default Page;



















"use client";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { ChatContext } from "../context/chatcontext.jsx";
import { motion } from "framer-motion";
import { TrashIcon } from "@heroicons/react/24/outline";
import api from "../apicall.js";

const Page = () => {
    const [username, setUsernamee] = useState("");
    const router = useRouter();
    const [showGroupModal, setShowGroupModal] = useState(false);
    const [groupName, setGroupName] = useState("");
    const [groupUsers, setGroupUsers] = useState("");

    const {
        visibleChats = [],
        clearAll,
        setMyUsername,
        myUsername,
        markChatAsRead,
        onlineUsers = [],
        addToDeletedUsers,
    } = useContext(ChatContext);

    useEffect(() => {
        const savedName = localStorage.getItem("username");
        const id = localStorage.getItem("id");
        console.log(id)
        setUsernamee(savedName);
        setMyUsername(savedName);
    }, []);

    const logout = () => {
        if (window.confirm("Are you sure you want to logout?")) {
            localStorage.clear();
            clearAll?.();
            router.push("/");
        }
    };

    const openChat = async (item) => {
        await markChatAsRead?.(item.adduser);
        router.push(`/chatlist/${item.adduser}`);
    };

    const deleteChat = (user) => {
        if (window.confirm(`Delete chat with ${user}?`)) {
            addToDeletedUsers?.(user);
        }
    };


    const createGroup = async () => {
        try {
            const res = await api.post("/crategroup", {
                name: groupName,       // group ka naam
                userIds: groupUsers,        // array of user IDs
                creatorId: myUsername  // jiske through group create ho raha
            });

            console.log("Group created:", res.data.group);
            return res.data.group;
        } catch (err) {
            if (err.response) {
                // Server ne error return kiya
                console.error(err.response.data.message);
            } else {
                // Network ya code error
                console.error(err.message);
            }
            return null;
        }
    };



    return (
        <div className="bg-black text-white min-h-screen flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-neutral-900 to-black shadow">
                <button
                    onClick={logout}
                    className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-xs sm:text-sm"
                >
                    Logout
                </button>

                <h1 className="text-sm sm:text-base font-bold truncate">
                    Hi 👋 {username}
                </h1>

                {/* Create Group Button */}
                <button
                    onClick={() => setShowGroupModal(true)}
                    className="bg-green-600 hover:bg-green-700 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold"
                >
                    + New Group
                </button>
            </div>

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-2 sm:space-y-3">
                {visibleChats.length === 0 ? (
                    <div className="text-center text-gray-400 mt-8 text-xs sm:text-sm">
                        No chats yet. Search and start!
                    </div>
                ) : (
                    visibleChats.map((item, idx) => {
                        const isOnline = onlineUsers.includes(item.adduser);
                        const firstLetter = item.adduser.charAt(0).toUpperCase();

                        return (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center justify-between bg-gradient-to-r from-neutral-800 to-black p-2 sm:p-3 rounded-lg sm:rounded-xl"
                            >
                                <button
                                    className="flex items-center flex-1 text-left"
                                    onClick={() => openChat(item)}
                                >
                                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-600 flex items-center justify-center mr-2 sm:mr-3">
                                        <span className="font-bold text-sm sm:text-lg">{firstLetter}</span>
                                        <span className={`absolute bottom-1 right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-black ${isOnline ? "bg-green-500" : "bg-gray-500"}`} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-semibold truncate text-xs sm:text-sm">{item.adduser}</p>
                                        <p className="text-[10px] sm:text-xs text-gray-400 truncate">{item.lastMessage}</p>
                                    </div>
                                    {item.unreadCount > 0 && (
                                        <span className="ml-1 sm:ml-2 bg-green-500 text-[9px] sm:text-xs font-bold px-1.5 py-0.5 rounded-full">
                                            {item.unreadCount}
                                        </span>
                                    )}
                                </button>
                                <button
                                    onClick={() => deleteChat(item.adduser)}
                                    className="ml-1 sm:ml-2 p-1.5 sm:p-2 bg-red-600 hover:bg-red-700 rounded-lg"
                                >
                                    <TrashIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                                </button>
                            </motion.div>
                        );
                    })
                )}
            </div>

            {/* Group Modal */}
            {showGroupModal && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="bg-gray-900 rounded-xl p-5 w-11/12 sm:w-96 shadow-lg"
                    >
                        <h2 className="text-white font-bold text-lg mb-3">Create New Group</h2>
                        <input
                            type="text"
                            placeholder="Group Name"
                            value={groupName}
                            onChange={(e) => setGroupName(e.target.value)}
                            className="w-full mb-3 p-2 rounded bg-gray-800 text-white outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Add users (comma separated)"
                            value={groupUsers}
                            onChange={(e) => setGroupUsers(e.target.value)}
                            className="w-full mb-3 p-2 rounded bg-gray-800 text-white outline-none"
                        />
                        <div className="flex justify-end space-x-2">
                            <button
                                onClick={() => setShowGroupModal(false)}
                                className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={createGroup}
                                className="px-3 py-1 rounded bg-green-600 hover:bg-green-700"
                            >
                                Create
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Page;
