import React from 'react'
import { motion } from 'framer-motion';


export default function Contact() {
    const info = [
        { icon: "E", label: "Email", value: "eilhwan@gmail.com", link: "mailto:eilhwan@gmail.com" },
        { icon: "G", label: "GitHub", value: "github.com/Eilhwan", link: "https://github.com/Eilhwan" },
        { icon: "P", label: "Phone", value: "010-9511-1003", link: "tel:010-9511-1003" },
    ];

    return (
        <motion.footer
            id="contact"
            className="py-20 bg-slate-900 border-t border-slate-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12">
                    Get In <span className="text-emerald-400">Touch</span>
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
                    {info.map((item, index) =>
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="flex flex-col items-center group"
                        >
                            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300 border border-slate-700 group-hover:border-emerald-500/50">
                                <span className="text-2xl font-bold text-slate-400 group-hover:text-emerald-400 transition-colors">
                                    {item.label[0]}
                                </span>
                            </div>
                            <span className="text-slate-300 font-medium group-hover:text-emerald-400 transition-colors">
                                {item.value}
                            </span>
                        </a>
                    )}
                </div>

                <div className="max-w-2xl mx-auto bg-slate-800/50 p-8 rounded-2xl border border-slate-700 mb-16">
                    <h3 className="text-2xl font-bold text-slate-100 mb-6">Send Me a Message</h3>
                    <form className="space-y-4" onSubmit={(e) => {
                        e.preventDefault();
                        alert("Thank you for your message! I will get back to you soon.");
                        e.target.reset();
                    }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Name" required className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors" />
                            <input type="email" placeholder="Email" required className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors" />
                        </div>
                        <textarea rows="4" placeholder="Message" required className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"></textarea>
                        <button type="submit" className="w-full py-3 px-6 rounded-lg bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors transform hover:scale-[1.02]">
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Eilhwan Jeon. All rights reserved.</p>
                </div>
            </div>
        </motion.footer>
    )
}
