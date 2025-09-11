(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// // // // // // 'use client';
// // // // // // import { motion } from 'framer-motion';
// // // // // // import axios from 'axios';
// // // // // // export default function Page() {
// // // // // // const downlid = async () => {
// // // // // //   try {
// // // // // //     const res = await axios.post('http://localhost:4000/download',)
// // // // // //     console.log('✅ Download logged to server', res.data); // res.data में parsed JSON मिलेगा
// // // // // //   } catch (err) {
// // // // // //     console.error('❌ Error logging download:', err);
// // // // // //   }
// // // // // //   // अब डाउनलोड trigger करो
// // // // // //   const link = document.createElement('a');
// // // // // //   link.href = '/app.apk';
// // // // // //   link.download = 'app.apk';
// // // // // //   document.body.appendChild(link);
// // // // // //   link.click();
// // // // // //   document.body.removeChild(link);
// // // // // // };
// // // // // //   return (
// // // // // //     <main className="bg-black text-white min-h-screen">
// // // // // //       {/* HERO SECTION */}
// // // // // //       <section className="flex flex-col items-center justify-center py-28 px-6 text-center bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
// // // // // //         <motion.h1
// // // // // //           initial={{ opacity: 0, y: -40 }}
// // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // //           className="text-4xl md:text-6xl font-bold mb-4"
// // // // // //         >
// // // // // //           SafeChat Calculator – Secret Chat for 1 Million+ Users
// // // // // //         </motion.h1>
// // // // // //         <p className="text-lg max-w-2xl mb-6">
// // // // // //           Hide your private chats inside a simple calculator. Trusted by <span className="text-green-400 font-bold">1 Million+ downloads</span> worldwide. 100% secure & ad-free.
// // // // // //         </p>
// // // // // //         <motion.a 
// // // // // //           onClick={ ()=>downlid()}
// // // // // //           whileHover={{ scale: 1.05 }}
// // // // // //           className="bg-green-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-green-400 transition"
// // // // // //         >
// // // // // //           Download Free & Stay Private
// // // // // //         </motion.a>
// // // // // //         <div className="mt-12">
// // // // // //           <img
// // // // // //             src="/app-screenshot.png"
// // // // // //             alt="SafeChat Screenshot"
// // // // // //             width="320"
// // // // // //             height="640"
// // // // // //             className="rounded-xl shadow-2xl"
// // // // // //           />
// // // // // //         </div>
// // // // // //       </section>
// // // // // //       {/* WHY TRUST SAFECHAT */}
// // // // // //       <section className="py-12 px-6 text-center bg-gray-900">
// // // // // //         <h2 className="text-3xl font-bold mb-4">1 Million+ People Can't Be Wrong</h2>
// // // // // //         <p className="text-lg max-w-3xl mx-auto mb-6">
// // // // // //           No ads, no spying. Just pure secret chatting hidden perfectly in your phone. Join our growing community & keep your secrets safe forever.
// // // // // //         </p>
// // // // // //       </section>
// // // // // //       {/* FEATURES */}
// // // // // //       <section className="py-20 px-6 max-w-6xl mx-auto">
// // // // // //         <h2 className="text-3xl font-bold mb-10 text-center">Top Features</h2>
// // // // // //         <div className="grid md:grid-cols-3 gap-8">
// // // // // //           {[
// // // // // //             { title: "Hidden Chat", desc: "Looks like a calculator, works like a secret vault for your chats." },
// // // // // //             { title: "Military Grade Encryption", desc: "Your messages stay encrypted & safe, always." },
// // // // // //             { title: "Zero Ads", desc: "No ads, no trackers — ever." },
// // // // // //             { title: "Stealth Mode", desc: "Close chats instantly and switch to calculator anytime." },
// // // // // //             { title: "Verified APK", desc: "Direct safe download, no Play Store drama." },
// // // // // //             { title: "1M+ Downloads", desc: "Trusted by over a million people around the world." },
// // // // // //           ].map((feature, i) => (
// // // // // //             <motion.div
// // // // // //               key={i}
// // // // // //               initial={{ opacity: 0, y: 40 }}
// // // // // //               whileInView={{ opacity: 1, y: 0 }}
// // // // // //               viewport={{ once: true }}
// // // // // //               className="bg-gray-800 rounded-xl p-6"
// // // // // //             >
// // // // // //               <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
// // // // // //               <p className="text-gray-400">{feature.desc}</p>
// // // // // //             </motion.div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </section>
// // // // // //       {/* HOW IT WORKS */}
// // // // // //       <section className="py-20 px-6 bg-gray-900">
// // // // // //         <h2 className="text-3xl font-bold mb-10 text-center">How It Works</h2>
// // // // // //         <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10 text-center">
// // // // // //           <div>
// // // // // //             <div onClick={()=>downlid()} className="text-4xl mb-4">📥</div>
// // // // // //             <h3 className="font-bold mb-2">1. Download</h3>
// // // // // //             <p>Get the APK directly. No Play Store hassle — safe & verified.</p>
// // // // // //           </div>
// // // // // //           <div>
// // // // // //             <div className="text-4xl mb-4">🔑</div>
// // // // // //             <h3 className="font-bold mb-2">2. Set Secret PIN</h3>
// // // // // //             <p>Choose your secret PIN. Only this opens your hidden chats.</p>
// // // // // //           </div>
// // // // // //           <div>
// // // // // //             <div className="text-4xl mb-4">💬</div>
// // // // // //             <h3 className="font-bold mb-2">3. Chat Privately</h3>
// // // // // //             <p>Start secret chats anytime. Stay invisible. Stay private.</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>
// // // // // //       {/* USER TESTIMONIALS */}
// // // // // //       <section className="py-20 px-6">
// // // // // //         <h2 className="text-3xl font-bold mb-10 text-center">What Our Users Say</h2>
// // // // // //         <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
// // // // // //           {[
// // // // // //             { name: "Rohit G.", quote: "Perfect app to hide chats. Looks like a calculator, works like magic!" },
// // // // // //             { name: "Sneha P.", quote: "No ads, no spam. Just secret chat. 5 stars!" },
// // // // // //             { name: "Aman Y.", quote: "Downloaded by so many for a reason. Feels super safe." },
// // // // // //             { name: "Priya D.", quote: "My private life stays private, thanks to SafeChat." },
// // // // // //           ].map((t, i) => (
// // // // // //             <motion.div
// // // // // //               key={i}
// // // // // //               initial={{ opacity: 0, y: 40 }}
// // // // // //               whileInView={{ opacity: 1, y: 0 }}
// // // // // //               viewport={{ once: true }}
// // // // // //               className="bg-gray-800 rounded-xl p-6"
// // // // // //             >
// // // // // //               <p className="italic mb-2">“{t.quote}”</p>
// // // // // //               <p className="font-bold text-gray-400">- {t.name}</p>
// // // // // //             </motion.div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </section>
// // // // // //       {/* FINAL CTA */}
// // // // // //       <section className="py-20 px-6 text-center">
// // // // // //         <h2 className="text-3xl font-bold mb-4">Ready to Hide Your Chats?</h2>
// // // // // //         <p className="mb-8">Join <span className="text-green-400 font-bold">1 Million+</span> people who trust SafeChat Calculator for private chats.</p>
// // // // // //         <a
// // // // // //           href="/safechat.apk"
// // // // // //           className="bg-green-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-green-400 transition"
// // // // // //         >
// // // // // //           Download Free Now
// // // // // //         </a>
// // // // // //       </section>
// // // // // //       {/* FOOTER */}
// // // // // //       <footer className="py-8 text-center text-gray-500 text-sm">
// // // // // //         &copy; {new Date().getFullYear()} SafeChat Calculator. All rights reserved. | Contact: support@safechatapp.com
// // // // // //       </footer>
// // // // // //     </main>
// // // // // //   );
// // // // // // }
// // // // 'use client';
// // // // import { motion } from 'framer-motion';
// // // // import axios from 'axios';
// // // // export default function Page() {
// // // //   const downlid = async () => {
// // // //     // try {
// // // //     //   const res = await axios.post('http://localhost:4000/download');
// // // //     //   console.log('✅ Download logged:', res.data);
// // // //     // } catch (err) {
// // // //     //   console.error('❌ Error logging download:', err);
// // // //     // }
// // // //     const link = document.createElement('a');
// // // //     link.href = '/app.apk'; // ✅ APK का सही path
// // // //     link.download = 'app.apk';
// // // //     document.body.appendChild(link);
// // // //     link.click();
// // // //     document.body.removeChild(link);
// // // //   };
// // // //   return (
// // // //     <main className="bg-black text-white min-h-screen">
// // // //       {/* HERO */}
// // // //       <section className="flex flex-col items-center justify-center py-28 px-6 text-center bg-gradient-to-b from-slate-900 to-slate-800">
// // // //         <motion.h1
// // // //           initial={{ opacity: 0, y: -40 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           className="text-4xl md:text-6xl font-bold mb-4"
// // // //         >
// // // //           SafeChat Calculator — Hide Chats Like a Pro!
// // // //         </motion.h1>
// // // //         <p className="text-lg max-w-2xl mb-6">
// // // //           Hide private chats inside a simple calculator. Trusted by <span className="text-green-400 font-bold">1 Million+</span> users worldwide.
// // // //         </p>
// // // //         <motion.button
// // // //           onClick={downlid}
// // // //           whileHover={{ scale: 1.05 }}
// // // //           className="bg-green-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-green-400 transition"
// // // //         >
// // // //           Download Free & Stay Private
// // // //         </motion.button>
// // // //         <div className="mt-12">
// // // //           <img
// // // //             src="/app-screenshot.png"
// // // //             alt="SafeChat Screenshot"
// // // //             width="320"
// // // //             height="640"
// // // //             className="rounded-xl shadow-2xl"
// // // //           />
// // // //         </div>
// // // //       </section>
// // // //       {/* WHY TRUST */}
// // // //       <section className="py-12 px-6 text-center bg-gray-900">
// // // //         <h2 className="text-3xl font-bold mb-4">1 Million+ People Trust Us</h2>
// // // //         <p className="text-lg max-w-3xl mx-auto mb-6">
// // // //           No ads, no spying. Just secret chatting hidden perfectly in your phone.
// // // //         </p>
// // // //       </section>
// // // //       {/* FEATURES */}
// // // //       <section className="py-20 px-6 max-w-6xl mx-auto">
// // // //         <h2 className="text-3xl font-bold mb-10 text-center">Top Features</h2>
// // // //         <div className="grid md:grid-cols-3 gap-8">
// // // //           {[
// // // //             { title: "Hidden Chat", desc: "Looks like a calculator, works like a secret vault." },
// // // //             { title: "Encryption", desc: "Your messages are encrypted & safe." },
// // // //             { title: "Zero Ads", desc: "No ads or trackers." },
// // // //             { title: "Stealth Mode", desc: "Close chats instantly and switch to calculator." },
// // // //             { title: "Verified APK", desc: "Direct safe download." },
// // // //             { title: "1M+ Downloads", desc: "Trusted worldwide." },
// // // //           ].map((f, i) => (
// // // //             <motion.div
// // // //               key={i}
// // // //               initial={{ opacity: 0, y: 40 }}
// // // //               whileInView={{ opacity: 1, y: 0 }}
// // // //               viewport={{ once: true }}
// // // //               className="bg-gray-800 rounded-xl p-6"
// // // //             >
// // // //               <h3 className="text-xl font-bold mb-2">{f.title}</h3>
// // // //               <p className="text-gray-400">{f.desc}</p>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>
// // // //       </section>
// // // //       {/* HOW IT WORKS */}
// // // //       <section className="py-20 px-6 bg-gray-900">
// // // //         <h2 className="text-3xl font-bold mb-10 text-center">How It Works</h2>
// // // //         <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10 text-center">
// // // //           <div>
// // // //             <div onClick={downlid} className="text-4xl mb-4 cursor-pointer">📥</div>
// // // //             <h3 className="font-bold mb-2">1. Download</h3>
// // // //             <p>Get the APK directly. No Play Store hassle.</p>
// // // //           </div>
// // // //           <div>
// // // //             <div className="text-4xl mb-4">🔑</div>
// // // //             <h3 className="font-bold mb-2">2. Set PIN</h3>
// // // //             <p>Choose your secret PIN to open hidden chats.</p>
// // // //           </div>
// // // //           <div>
// // // //             <div className="text-4xl mb-4">💬</div>
// // // //             <h3 className="font-bold mb-2">3. Chat Privately</h3>
// // // //             <p>Start secret chats anytime. Stay invisible.</p>
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //       {/* TESTIMONIALS */}
// // // //       <section className="py-20 px-6">
// // // //         <h2 className="text-3xl font-bold mb-10 text-center">What Our Users Say</h2>
// // // //         <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
// // // //           {[
// // // //             { name: "Rohit G.", quote: "Perfect app to hide chats." },
// // // //             { name: "Sneha P.", quote: "No ads, no spam. Just secret chat." },
// // // //             { name: "Aman Y.", quote: "Feels super safe." },
// // // //             { name: "Priya D.", quote: "My private life stays private." },
// // // //           ].map((t, i) => (
// // // //             <motion.div
// // // //               key={i}
// // // //               initial={{ opacity: 0, y: 40 }}
// // // //               whileInView={{ opacity: 1, y: 0 }}
// // // //               viewport={{ once: true }}
// // // //               className="bg-gray-800 rounded-xl p-6"
// // // //             >
// // // //               <p className="italic mb-2">“{t.quote}”</p>
// // // //               <p className="font-bold text-gray-400">- {t.name}</p>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>
// // // //       </section>
// // // //       {/* FINAL CTA */}
// // // //       <section className="py-20 px-6 text-center">
// // // //         <h2 className="text-3xl font-bold mb-4">Ready to Hide Your Chats?</h2>
// // // //         <p className="mb-8">Join <span className="text-green-400 font-bold">1 Million+</span> people who trust SafeChat Calculator.</p>
// // // //         <button
// // // //           onClick={downlid}
// // // //           className="bg-green-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-green-400 transition"
// // // //         >
// // // //           Download Now Free
// // // //         </button>
// // // //       </section>
// // // //       {/* FOOTER */}
// // // //       <footer className="py-8 text-center text-gray-500 text-sm">
// // // //         &copy; {new Date().getFullYear()} SafeChat Calculator. All rights reserved.
// // // //       </footer>
// // // //     </main>
// // // //   );
// // // // }
// // // 'use client';
// // // import { useEffect } from 'react';
// // // import { motion } from 'framer-motion';
// // // import axios from 'axios';
// // // export default function Page() {
// // //   const downlid = async () => {
// // //     // Optional: Log to backend
// // //     // try {
// // //     //   const res = await axios.post('http://localhost:4000/download');
// // //     //   console.log('✅ Download logged:', res.data);
// // //     // } catch (err) {
// // //     //   console.error('❌ Error logging download:', err);
// // //     // }
// // //     const link = document.createElement('a');
// // //     link.href = '/app.apk';
// // //     link.download = 'app.apk';
// // //     document.body.appendChild(link);
// // //     link.click();
// // //     document.body.removeChild(link);
// // //   };
// // //   // ✅ Popunder script को dynamically add करेंगे
// // //   useEffect(() => {
// // //     const script1 = document.createElement('script');
// // //     script1.type = 'text/javascript';
// // //     script1.src = '//pl27304424.profitableratecpm.com/9e/63/90/9e639077ef2299776c4a52cbf4806d04.js';
// // //     document.body.appendChild(script1);
// // //     return () => {
// // //       document.body.removeChild(script1);
// // //     };
// // //   }, []);
// // //   return (
// // //     <main className="bg-black text-white min-h-screen">
// // //       {/* ✅ TOP BANNER AD */}
// // //       <div className="flex justify-center py-4">
// // //         <div id="banner-ad">
// // //           <script
// // //             dangerouslySetInnerHTML={{
// // //               __html: `
// // //                 atOptions = {
// // //                   'key' : 'f4d38bf04a5d229f5658efbbba78a960',
// // //                   'format' : 'iframe',
// // //                   'height' : 60,
// // //                   'width' : 468,
// // //                   'params' : {}
// // //                 };
// // //               `
// // //             }}
// // //           ></script>
// // //           <script
// // //             src="//www.highperformanceformat.com/f4d38bf04a5d229f5658efbbba78a960/invoke.js"
// // //             async
// // //           ></script>
// // //         </div>
// // //       </div>
// // //       {/* HERO */}
// // //       <section className="flex flex-col items-center justify-center py-28 px-6 text-center bg-gradient-to-b from-slate-900 to-slate-800">
// // //         <motion.h1
// // //           initial={{ opacity: 0, y: -40 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           className="text-4xl md:text-6xl font-bold mb-4"
// // //         >
// // //           SafeChat Calculator — Hide Chats Like a Pro!
// // //         </motion.h1>
// // //         <p className="text-lg max-w-2xl mb-6">
// // //           Hide private chats inside a simple calculator. Trusted by{' '}
// // //           <span className="text-green-400 font-bold">1 Million+</span> users worldwide.
// // //         </p>
// // //         <motion.button
// // //           onClick={downlid}
// // //           whileHover={{ scale: 1.05 }}
// // //           className="bg-green-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-green-400 transition"
// // //         >
// // //           Download Free & Stay Private
// // //         </motion.button>
// // //         <div className="mt-12">
// // //           <img
// // //             src="/app-screenshot.png"
// // //             alt="SafeChat Screenshot"
// // //             width="320"
// // //             height="640"
// // //             className="rounded-xl shadow-2xl"
// // //           />
// // //         </div>
// // //       </section>
// // //       {/* WHY TRUST */}
// // //       <section className="py-12 px-6 text-center bg-gray-900">
// // //         <h2 className="text-3xl font-bold mb-4">1 Million+ People Trust Us</h2>
// // //         <p className="text-lg max-w-3xl mx-auto mb-6">
// // //           No ads, no spying. Just secret chatting hidden perfectly in your phone.
// // //         </p>
// // //       </section>
// // //       {/* FEATURES */}
// // //       <section className="py-20 px-6 max-w-6xl mx-auto">
// // //         <h2 className="text-3xl font-bold mb-10 text-center">Top Features</h2>
// // //         <div className="grid md:grid-cols-3 gap-8">
// // //           {[
// // //             { title: 'Hidden Chat', desc: 'Looks like a calculator, works like a secret vault.' },
// // //             { title: 'Encryption', desc: 'Your messages are encrypted & safe.' },
// // //             { title: 'Zero Ads', desc: 'No ads or trackers.' },
// // //             { title: 'Stealth Mode', desc: 'Close chats instantly and switch to calculator.' },
// // //             { title: 'Verified APK', desc: 'Direct safe download.' },
// // //             { title: '1M+ Downloads', desc: 'Trusted worldwide.' },
// // //           ].map((f, i) => (
// // //             <motion.div
// // //               key={i}
// // //               initial={{ opacity: 0, y: 40 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true }}
// // //               className="bg-gray-800 rounded-xl p-6"
// // //             >
// // //               <h3 className="text-xl font-bold mb-2">{f.title}</h3>
// // //               <p className="text-gray-400">{f.desc}</p>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </section>
// // //       {/* HOW IT WORKS */}
// // //       <section className="py-20 px-6 bg-gray-900">
// // //         <h2 className="text-3xl font-bold mb-10 text-center">How It Works</h2>
// // //         <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10 text-center">
// // //           <div>
// // //             <div onClick={downlid} className="text-4xl mb-4 cursor-pointer">
// // //               📥
// // //             </div>
// // //             <h3 className="font-bold mb-2">1. Download</h3>
// // //             <p>Get the APK directly. No Play Store hassle.</p>
// // //           </div>
// // //           <div>
// // //             <div className="text-4xl mb-4">🔑</div>
// // //             <h3 className="font-bold mb-2">2. Set PIN</h3>
// // //             <p>Choose your secret PIN to open hidden chats.</p>
// // //           </div>
// // //           <div>
// // //             <div className="text-4xl mb-4">💬</div>
// // //             <h3 className="font-bold mb-2">3. Chat Privately</h3>
// // //             <p>Start secret chats anytime. Stay invisible.</p>
// // //           </div>
// // //         </div>
// // //       </section>
// // //       {/* TESTIMONIALS */}
// // //       <section className="py-20 px-6">
// // //         <h2 className="text-3xl font-bold mb-10 text-center">What Our Users Say</h2>
// // //         <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
// // //           {[
// // //             { name: 'Rohit G.', quote: 'Perfect app to hide chats.' },
// // //             { name: 'Sneha P.', quote: 'No ads, no spam. Just secret chat.' },
// // //             { name: 'Aman Y.', quote: 'Feels super safe.' },
// // //             { name: 'Priya D.', quote: 'My private life stays private.' },
// // //           ].map((t, i) => (
// // //             <motion.div
// // //               key={i}
// // //               initial={{ opacity: 0, y: 40 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true }}
// // //               className="bg-gray-800 rounded-xl p-6"
// // //             >
// // //               <p className="italic mb-2">“{t.quote}”</p>
// // //               <p className="font-bold text-gray-400">- {t.name}</p>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </section>
// // //       {/* FINAL CTA */}
// // //       <section className="py-20 px-6 text-center">
// // //         <h2 className="text-3xl font-bold mb-4">Ready to Hide Your Chats?</h2>
// // //         <p className="mb-8">
// // //           Join <span className="text-green-400 font-bold">1 Million+</span> people who trust SafeChat Calculator.
// // //         </p>
// // //         <button
// // //           onClick={downlid}
// // //           className="bg-green-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-green-400 transition"
// // //         >
// // //           Download Now Free
// // //         </button>
// // //       </section>
// // //       {/* FOOTER */}
// // //       <footer className="py-8 text-center text-gray-500 text-sm">
// // //         &copy; {new Date().getFullYear()} SafeChat Calculator. All rights reserved.
// // //       </footer>
// // //     </main>
// // //   );
// // // }
// // 'use client';
// // import { useEffect } from 'react';
// // import { motion } from 'framer-motion';
// // export default function Page() {
// //   const downlid = () => {
// //     const link = document.createElement('a');
// //     link.href = '/app.apk';
// //     link.download = 'app.apk';
// //     document.body.appendChild(link);
// //     link.click();
// //     document.body.removeChild(link);
// //   };
// //   useEffect(() => {
// //     // ✅ Popunder script
// //     const popunder = document.createElement('script');
// //     popunder.src = '//pl27304424.profitableratecpm.com/9e/63/90/9e639077ef2299776c4a52cbf4806d04.js';
// //     popunder.async = true;
// //     document.body.appendChild(popunder);
// //     // ✅ Banner ad config
// //     const inlineScript = document.createElement('script');
// //     inlineScript.innerHTML = `
// //       atOptions = {
// //         'key' : 'f4d38bf04a5d229f5658efbbba78a960',
// //         'format' : 'iframe',
// //         'height' : 60,
// //         'width' : 468,
// //         'params' : {}
// //       };
// //     `;
// //     document.body.appendChild(inlineScript);
// //     // ✅ Banner ad loader
// //     const bannerScript = document.createElement('script');
// //     bannerScript.src = '//www.highperformanceformat.com/f4d38bf04a5d229f5658efbbba78a960/invoke.js';
// //     bannerScript.async = true;
// //     document.body.appendChild(bannerScript);
// //     return () => {
// //       document.body.removeChild(popunder);
// //       document.body.removeChild(inlineScript);
// //       document.body.removeChild(bannerScript);
// //     };
// //   }, []);
// //   return (
// //     <main className="bg-black text-white min-h-screen">
// //       {/* ✅ Banner Ad placeholder */}
// //       <div className="flex justify-center py-4">
// //         <div id="banner-ad"></div>
// //       </div>
// //       {/* HERO */}
// //       <section className="flex flex-col items-center justify-center py-28 px-6 text-center bg-gradient-to-b from-slate-900 to-slate-800">
// //         <motion.h1
// //           initial={{ opacity: 0, y: -40 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           className="text-4xl md:text-6xl font-bold mb-4"
// //         >
// //           SafeChat Calculator — Hide Chats Like a Pro!
// //         </motion.h1>
// //         <p className="text-lg max-w-2xl mb-6">
// //           Hide private chats inside a simple calculator. Trusted by{' '}
// //           <span className="text-green-400 font-bold">1 Million+</span> users worldwide.
// //         </p>
// //         <motion.button
// //           onClick={downlid}
// //           whileHover={{ scale: 1.05 }}
// //           className="bg-green-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-green-400 transition"
// //         >
// //           Download Free & Stay Private
// //         </motion.button>
// //         <div className="mt-12">
// //           <img
// //             src="/app-screenshot.png"
// //             alt="SafeChat Screenshot"
// //             width="320"
// //             height="640"
// //             className="rounded-xl shadow-2xl"
// //           />
// //         </div>
// //       </section>
// //       {/* WHY TRUST */}
// //       <section className="py-12 px-6 text-center bg-gray-900">
// //         <h2 className="text-3xl font-bold mb-4">1 Million+ People Trust Us</h2>
// //         <p className="text-lg max-w-3xl mx-auto mb-6">
// //           No ads, no spying. Just secret chatting hidden perfectly in your phone.
// //         </p>
// //       </section>
// //       {/* FEATURES */}
// //       <section className="py-20 px-6 max-w-6xl mx-auto">
// //         <h2 className="text-3xl font-bold mb-10 text-center">Top Features</h2>
// //         <div className="grid md:grid-cols-3 gap-8">
// //           {[
// //             { title: 'Hidden Chat', desc: 'Looks like a calculator, works like a secret vault.' },
// //             { title: 'Encryption', desc: 'Your messages are encrypted & safe.' },
// //             { title: 'Zero Ads', desc: 'No ads or trackers.' },
// //             { title: 'Stealth Mode', desc: 'Close chats instantly and switch to calculator.' },
// //             { title: 'Verified APK', desc: 'Direct safe download.' },
// //             { title: '1M+ Downloads', desc: 'Trusted worldwide.' },
// //           ].map((f, i) => (
// //             <motion.div
// //               key={i}
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               className="bg-gray-800 rounded-xl p-6"
// //             >
// //               <h3 className="text-xl font-bold mb-2">{f.title}</h3>
// //               <p className="text-gray-400">{f.desc}</p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </section>
// //       {/* HOW IT WORKS */}
// //       <section className="py-20 px-6 bg-gray-900">
// //         <h2 className="text-3xl font-bold mb-10 text-center">How It Works</h2>
// //         <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10 text-center">
// //           <div>
// //             <div onClick={downlid} className="text-4xl mb-4 cursor-pointer">📥</div>
// //             <h3 className="font-bold mb-2">1. Download</h3>
// //             <p>Get the APK directly. No Play Store hassle.</p>
// //           </div>
// //           <div>
// //             <div className="text-4xl mb-4">🔑</div>
// //             <h3 className="font-bold mb-2">2. Set PIN</h3>
// //             <p>Choose your secret PIN to open hidden chats.</p>
// //           </div>
// //           <div>
// //             <div className="text-4xl mb-4">💬</div>
// //             <h3 className="font-bold mb-2">3. Chat Privately</h3>
// //             <p>Start secret chats anytime. Stay invisible.</p>
// //           </div>
// //         </div>
// //       </section>
// //       {/* TESTIMONIALS */}
// //       <section className="py-20 px-6">
// //         <h2 className="text-3xl font-bold mb-10 text-center">What Our Users Say</h2>
// //         <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
// //           {[
// //             { name: 'Rohit G.', quote: 'Perfect app to hide chats.' },
// //             { name: 'Sneha P.', quote: 'No ads, no spam. Just secret chat.' },
// //             { name: 'Aman Y.', quote: 'Feels super safe.' },
// //             { name: 'Priya D.', quote: 'My private life stays private.' },
// //           ].map((t, i) => (
// //             <motion.div
// //               key={i}
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               className="bg-gray-800 rounded-xl p-6"
// //             >
// //               <p className="italic mb-2">“{t.quote}”</p>
// //               <p className="font-bold text-gray-400">- {t.name}</p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </section>
// //       {/* FINAL CTA */}
// //       <section className="py-20 px-6 text-center">
// //         <h2 className="text-3xl font-bold mb-4">Ready to Hide Your Chats?</h2>
// //         <p className="mb-8">
// //           Join <span className="text-green-400 font-bold">1 Million+</span> people who trust SafeChat Calculator.
// //         </p>
// //         <button
// //           className="bg-green-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-green-400 transition"
// //         >
// //           <a href='./app.apk'>
// //        Download Now Free
// //           </a>
// //         </button>
// //       </section>
// //       {/* FOOTER */}
// //       <footer className="py-8 text-center text-gray-500 text-sm">
// //         &copy; {new Date().getFullYear()} SafeChat Calculator. All rights reserved.
// //       </footer>
// //     </main>
// //   );
// // }
// 'use client';
// import { useEffect } from 'react';
// import { motion } from 'framer-motion';
// export default function Page() {
//   const downlid = () => {
//     const link = document.createElement('a');
//     link.href = '/app.apk';
//     link.download = 'app.apk';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };
//   useEffect(() => {
//     // ✅ 1. Top Popunder Script
//     const popTop = document.createElement('script');
//     popTop.src = '//pl27270602.profitableratecpm.com/d8/b4/6c/d8b46ce2b2657dc16b3fb3623f59ccea.js';
//     popTop.async = true;
//     document.head.appendChild(popTop);
//     // ✅ 2. Second Popunder Script
//     const popSecond = document.createElement('script');
//     popSecond.src = '//pl27304424.profitableratecpm.com/9e/63/90/9e639077ef2299776c4a52cbf4806d04.js';
//     popSecond.async = true;
//     document.body.appendChild(popSecond);
//     // ✅ 3. Banner Ad Options + Script
//     const bannerSetup = document.createElement('script');
//     bannerSetup.innerHTML = `
//       atOptions = {
//         'key' : 'f4d38bf04a5d229f5658efbbba78a960',
//         'format' : 'iframe',
//         'height' : 60,
//         'width' : 468,
//         'params' : {}
//       };
//     `;
//     document.body.appendChild(bannerSetup);
//     const bannerScript = document.createElement('script');
//     bannerScript.src = '//www.highperformanceformat.com/f4d38bf04a5d229f5658efbbba78a960/invoke.js';
//     bannerScript.async = true;
//     document.body.appendChild(bannerScript);
//     return () => {
//       document.head.removeChild(popTop);
//       document.body.removeChild(popSecond);
//       document.body.removeChild(bannerSetup);
//       document.body.removeChild(bannerScript);
//     };
//   }, []);
//   return (
//     <>
//       {/* ✅ TOP FIXED Banner */}
//       <div className="w-full flex justify-center bg-black py-2 fixed top-0 z-50">
//         <div id="banner-ad"></div>
//       </div>
//       {/* MAIN CONTENT with TOP padding */}
//       <main className="bg-black text-white min-h-screen pt-20">
//         <section className="flex flex-col items-center justify-center py-28 px-6 text-center bg-gradient-to-b from-slate-900 to-slate-800">
//           <motion.h1
//             initial={{ opacity: 0, y: -40 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-6xl font-bold mb-4"
//           >
//             SafeChat Calculator — Hide Chats Like a Pro!
//           </motion.h1>
//           <p className="text-lg max-w-2xl mb-6">
//             Hide private chats inside a simple calculator. Trusted by{' '}
//             <span className="text-green-400 font-bold">1 Million+</span> users worldwide.
//           </p>
//           <motion.button
//             onClick={downlid}
//             whileHover={{ scale: 1.05 }}
//             className="bg-green-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-green-400 transition"
//           >
//             Download Free & Stay Private
//           </motion.button>
//           <div className="mt-12">
//             <img
//               src="/app-screenshot.png"
//               alt="SafeChat Screenshot"
//               width="320"
//               height="640"
//               className="rounded-xl shadow-2xl"
//             />
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }
__turbopack_context__.s({
    "default": ()=>Page
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Page() {
    _s();
    const downlid = ()=>{
        const link = document.createElement('a');
        link.href = '/app.apk';
        link.download = 'app.apk';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            // ✅ Top Popunder Script
            const topPop = document.createElement('script');
            topPop.src = '//pl27270602.profitableratecpm.com/d8/b4/6c/d8b46ce2b2657dc16b3fb3623f59ccea.js';
            topPop.async = true;
            document.head.appendChild(topPop);
            // ✅ Second Popunder Script
            const secondPop = document.createElement('script');
            secondPop.src = '//pl27304424.profitableratecpm.com/9e/63/90/9e639077ef2299776c4a52cbf4806d04.js';
            secondPop.async = true;
            document.body.appendChild(secondPop);
            // ✅ Banner Ad config
            const bannerConfig = document.createElement('script');
            bannerConfig.innerHTML = "\n      atOptions = {\n        'key' : 'f4d38bf04a5d229f5658efbbba78a960',\n        'format' : 'iframe',\n        'height' : 60,\n        'width' : 468,\n        'params' : {}\n      };\n    ";
            document.body.appendChild(bannerConfig);
            const bannerScript = document.createElement('script');
            bannerScript.src = '//www.highperformanceformat.com/f4d38bf04a5d229f5658efbbba78a960/invoke.js';
            bannerScript.async = true;
            document.body.appendChild(bannerScript);
            return ({
                "Page.useEffect": ()=>{
                    document.head.removeChild(topPop);
                    document.body.removeChild(secondPop);
                    document.body.removeChild(bannerConfig);
                    document.body.removeChild(bannerScript);
                }
            })["Page.useEffect"];
        }
    }["Page.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex justify-center bg-black py-2 fixed top-0 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "banner-ad"
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 988,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 987,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "bg-black text-white min-h-screen pt-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "flex flex-col items-center justify-center py-28 px-6 text-center bg-gradient-to-b from-slate-900 to-slate-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                initial: {
                                    opacity: 0,
                                    y: -40
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                className: "text-4xl md:text-6xl font-bold mb-4",
                                children: "SafeChat Calculator — Hide Chats Like a Pro!"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 994,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg max-w-2xl mb-6",
                                children: [
                                    "Hide private chats inside a simple calculator. Trusted by",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-green-400 font-bold",
                                        children: "1 Million+"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 1003,
                                        columnNumber: 13
                                    }, this),
                                    " users worldwide."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 1001,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                onClick: downlid,
                                whileHover: {
                                    scale: 1.05
                                },
                                className: "bg-green-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-green-400 transition",
                                children: "Download Free & Stay Private"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 1005,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/app-screenshot.png",
                                    alt: "SafeChat Screenshot",
                                    width: "320",
                                    height: "640",
                                    className: "rounded-xl shadow-2xl"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 1013,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 1012,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 993,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-12 px-6 text-center bg-gray-900",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold mb-4",
                                children: "1 Million+ People Trust Us"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 1025,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg max-w-3xl mx-auto mb-6",
                                children: "No ads, no spying. Just secret chatting hidden perfectly in your phone."
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 1026,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 1024,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 px-6 max-w-6xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold mb-10 text-center",
                                children: "Top Features"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 1033,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-3 gap-8",
                                children: [
                                    {
                                        title: 'Hidden Chat',
                                        desc: 'Looks like a calculator, works like a secret vault.'
                                    },
                                    {
                                        title: 'Encryption',
                                        desc: 'Your messages are encrypted & safe.'
                                    },
                                    {
                                        title: 'Zero Ads',
                                        desc: 'No ads or trackers.'
                                    },
                                    {
                                        title: 'Stealth Mode',
                                        desc: 'Close chats instantly and switch to calculator.'
                                    },
                                    {
                                        title: 'Verified APK',
                                        desc: 'Direct safe download.'
                                    },
                                    {
                                        title: '1M+ Downloads',
                                        desc: 'Trusted worldwide.'
                                    }
                                ].map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 40
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        className: "bg-gray-800 rounded-xl p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold mb-2",
                                                children: f.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 1050,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-400",
                                                children: f.desc
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 1051,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 1043,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 1034,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 1032,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 px-6 bg-gray-900",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold mb-10 text-center",
                                children: "How It Works"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 1059,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-4xl mx-auto grid md:grid-cols-3 gap-10 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: downlid,
                                                className: "text-4xl mb-4 cursor-pointer",
                                                children: "📥"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 1062,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold mb-2",
                                                children: "1. Download"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 1063,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Get the APK directly. No Play Store hassle."
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 1064,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 1061,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-4xl mb-4",
                                                children: "🔑"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 1067,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold mb-2",
                                                children: "2. Set PIN"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 1068,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Choose your secret PIN to open hidden chats."
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 1069,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 1066,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-4xl mb-4",
                                                children: "💬"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 1072,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold mb-2",
                                                children: "3. Chat Privately"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 1073,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Start secret chats anytime. Stay invisible."
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 1074,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 1071,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 1060,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 1058,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold mb-10 text-center",
                                children: "What Our Users Say"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 1081,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-4xl mx-auto grid md:grid-cols-2 gap-8",
                                children: [
                                    {
                                        name: 'Rohit G.',
                                        quote: 'Perfect app to hide chats.'
                                    },
                                    {
                                        name: 'Sneha P.',
                                        quote: 'No ads, no spam. Just secret chat.'
                                    },
                                    {
                                        name: 'Aman Y.',
                                        quote: 'Feels super safe.'
                                    },
                                    {
                                        name: 'Priya D.',
                                        quote: 'My private life stays private.'
                                    }
                                ].map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 40
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        className: "bg-gray-800 rounded-xl p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "italic mb-2",
                                                children: [
                                                    "“",
                                                    t.quote,
                                                    "”"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 1096,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-gray-400",
                                                children: [
                                                    "- ",
                                                    t.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 1097,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 1089,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 1082,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 1080,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 px-6 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold mb-4",
                                children: "Ready to Hide Your Chats?"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 1105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-8",
                                children: [
                                    "Join ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-green-400 font-bold",
                                        children: "1 Million+"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 1107,
                                        columnNumber: 18
                                    }, this),
                                    " people who trust SafeChat Calculator."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 1106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: downlid,
                                className: "bg-green-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-green-400 transition",
                                children: "Download Now Free"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 1109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 1104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "py-8 text-center text-gray-500 text-sm",
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " SafeChat Calculator. All rights reserved."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 1118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 991,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Page, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_page_00bddc8e.js.map