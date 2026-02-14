
import React from "react";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import { socialLinks } from "../../lib/data";
import { Mail, Linkedin, FileText, Download } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";


const Contact = () => {
        const formRef = useRef();
        const [loading, setLoading] = useState(false);
        const [honeypot, setHoneypot] = useState(""); // spam protection
        const sendEmail = async (e) => {
            e.preventDefault();
    
            // 🛑 spam protection
            if (honeypot) return;
    
            const form = formRef.current;
            const name = form.user_name.value.trim();
            const email = form.user_email.value.trim();
            const message = form.message.value.trim();
    
            // ✅ validation
            if (!name || !email || !message) {
                toast.error("Please fill all fields");
                return;
            }
    
            if (!/^\S+@\S+\.\S+$/.test(email)) {
                toast.error("Invalid email");
                return;
            }
    
            try {
                setLoading(true);
    
                await emailjs.sendForm(
                    import.meta.env.VITE_EMAIL_SERVICE_ID,
                    import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                    formRef.current,
                    import.meta.env.VITE_EMAIL_PUBLIC_KEY
                );
    
                toast.success("Message sent successfully 🚀");
                form.reset();
            } catch (err) {
                toast.error("Failed to send message");
            } finally {
                setLoading(false);
            }
        };
    return (
        <section id="contact" className="py-24 relative">
            <div className=" mx-auto px-6 text-center place-items-center">
                <Reveal>
                    <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Let's Work Together.
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                        {/* Email Card */}
                        <a
                            href={socialLinks.email}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 group"
                        >
                            <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-500/30 transition-colors">
                                <Mail className="text-blue-400" size={24} />
                            </div>
                            <h3 className="text-white font-semibold mb-1">Email Me</h3>
                            <p className="text-gray-400 text-sm">Get in touch directly</p>
                        </a>

                        {/* LinkedIn Card */}
                        <a
                            href={socialLinks.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 group"
                        >
                            <div className="bg-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-600/30 transition-colors">
                                <Linkedin className="text-blue-500" size={24} />
                            </div>
                            <h3 className="text-white font-semibold mb-1">LinkedIn</h3>
                            <p className="text-gray-400 text-sm">Let's connect professionally</p>
                        </a>

                        {/* Resume Card */}
                        <a
                            href={socialLinks.resume}
                            download
                            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-green-500/30 group"
                        >
                            <div className="bg-green-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-green-500/30 transition-colors">
                                <FileText className="text-green-400" size={24} />
                            </div>
                            <h3 className="text-white font-semibold mb-1">Resume</h3>
                            <p className="text-gray-400 text-sm">Download my CV</p>
                        </a>
                    </div>

                </Reveal>

 <Reveal>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="max-w-md mx-auto space-y-4"
      >
        {/* honeypot field (hidden spam trap) */}
        <input
          type="text"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="hidden"
          tabIndex="-1"
          autoComplete="off"
        />

        <input
          name="user_name"
          type="text"
          placeholder="Name"
          className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white focus:border-blue-500"
        />

        <input
          name="user_email"
          type="email"
          placeholder="Email"
          className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white focus:border-blue-500"
        />

        <textarea
          name="message"
          rows="4"
          placeholder="Message"
          className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white resize-none focus:border-blue-500"
        />

        <button
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 p-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition disabled:opacity-60"
        >
          {loading && <Loader2 className="animate-spin" size={18} />}
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </Reveal>

                <Reveal>
                    <footer className="mt-20 text-gray-500 text-sm">
                        <p>© {new Date().getFullYear()} Dhaya. All rights reserved.</p>
                    </footer>
                </Reveal>
            </div>
        </section>
    );
};

export default Contact;
