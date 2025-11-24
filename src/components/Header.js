import React from 'react'

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full backdrop-filter backdrop-blur-lg bg-slate-900/80 border-b border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 hover:from-emerald-300 hover:to-cyan-400 transition-all duration-300">
                            Eilhwan's Portfolio
                        </a>
                    </div>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-8">
                            <li><a href="#about" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm font-medium">About</a></li>
                            <li><a href="#skills" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm font-medium">Skills</a></li>
                            <li><a href="#projects" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm font-medium">Projects</a></li>
                            <li><a href="#contact" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm font-medium">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
