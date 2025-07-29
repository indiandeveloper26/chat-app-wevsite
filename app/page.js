'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';

// ✅ ✅ ✅ कोई Head import मत करो
// App Router में <Head> यूज़ नहीं करते
// इसके लिए तुम /app/head.js बनाओ

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center py-28 px-6 text-center bg-gradient-to-b from-[#FF6F61] to-[#DE4313]">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Experience Private & Secure Chatting Like Never Before
        </motion.h1>
        <p className="text-lg max-w-2xl mb-8">
          SafeChat lets you connect privately with anyone, anywhere. No ads, no spam, just pure private conversation.
        </p>
        <motion.a
          href="/app.apk"
          whileHover={{ scale: 1.05 }}
          className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition"
        >
          Download Now - Free & Secure
        </motion.a>
        <div className="mt-12">
          <Image
            src="/app-screenshot.png"
            alt="SafeChat Screenshot"
            width={320}
            height={640}
            className="rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Why Choose SafeChat?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "100% Private", desc: "We respect your privacy. Your chats are end-to-end encrypted and never stored on our servers permanently." },
            { title: "No Ads Ever", desc: "Your experience stays clean & distraction-free. No annoying pop-ups or hidden ads, ever." },
            { title: "Super Fast", desc: "Built with modern tech, messages deliver instantly, even on slow connections." },
            { title: "Premium Support", desc: "Get priority support & unlock premium features like unlimited chats, stickers & more." },
            { title: "User Friendly", desc: "Minimal design, easy to use, and accessible for everyone. Zero learning curve." },
            { title: "Free Updates", desc: "Get regular updates and new features every month. We keep improving for you." },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold mb-10 text-center">How It Works</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-4xl mb-4">📥</div>
            <h3 className="font-bold mb-2">1. Download</h3>
            <p>Get the APK directly here. No Play Store hassle. Safe & verified build.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🔐</div>
            <h3 className="font-bold mb-2">2. Sign Up</h3>
            <p>Create your private username. No email or phone required. 100% anonymous.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">💬</div>
            <h3 className="font-bold mb-2">3. Start Chatting</h3>
            <p>Connect instantly with anyone. Unlock premium for even more features.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">What Our Users Say</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            { name: "Rahul S.", quote: "SafeChat is the only app I trust for private conversations. No ads, no nonsense!" },
            { name: "Sneha K.", quote: "I love the simplicity. It just works, and I feel safe using it every day." },
            { name: "Aman T.", quote: "I upgraded to premium — worth every rupee! Unlimited chats, smooth experience." },
            { name: "Priya M.", quote: "Finally an app that respects privacy. I recommend SafeChat to all my friends." },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl p-6"
            >
              <p className="italic mb-2">“{t.quote}”</p>
              <p className="font-bold text-gray-400">- {t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            { q: "Is SafeChat really free?", a: "Yes! You can use it 100% free. Premium is optional for more features & ad removal." },
            { q: "Is it safe to download the APK?", a: "Absolutely. The APK is directly signed by us. No malware, no trackers." },
            { q: "Do you store my messages?", a: "Nope! Chats are end-to-end encrypted. We do not store or share your data." },
            { q: "How do I get support?", a: "You can reach us anytime at support@safechatapp.com" },
          ].map((faq, i) => (
            <div key={i}>
              <h3 className="font-bold mb-1">{faq.q}</h3>
              <p className="text-gray-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DOWNLOAD AGAIN CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Join SafeChat?</h2>
        <p className="mb-8">Download the app now and enjoy private, secure chatting instantly.</p>
        <a
          href="/download/safechat.apk"
          className="bg-[#FF6F61] text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition"
        >
          Download Now
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} SafeChat. All rights reserved. | Privacy Policy | Contact: support@safechatapp.com
      </footer>
    </main>
  );
}
