import React from 'react'


export default function Contact() {
    const info = [
        { label: "Email", value: "eilhwan@gmail.com", link: "mailto:eilhwan@gmail.com" },
        { label: "GitHub", value: "https://github.com/Eilhwan", link: "https://github.com/Eilhwan" },
        { label: "Phone", value: "+82)10-8315-3109", link: "tel:+821083153109" }
    ]

    return (
        <footer id="contact" className="py-20 bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12">
                    Get In <span className="text-emerald-400">Touch</span>
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
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
                <div className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} Eilhwan Jeon. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
