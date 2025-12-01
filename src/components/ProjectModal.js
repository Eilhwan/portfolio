import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [project]);

    if (!project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-slate-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl relative z-10"
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-20"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="relative h-64 sm:h-80">
                    <img
                        src={project.img}
                        alt={project.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                        <h2 className="text-3xl font-bold text-white mb-2">{project.name}</h2>
                        <p className="text-emerald-400 font-mono">{project.date}</p>
                    </div>
                </div>

                <div className="p-8 space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold text-slate-200 mb-4">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tools.map((t, i) => (
                                <span key={i} className="px-3 py-1 text-sm font-medium rounded-full bg-slate-800 text-emerald-400 border border-slate-700">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-slate-200 mb-4">Description</h3>
                        <ul className="space-y-3">
                            {project.desc.map((d, i) => (
                                <li key={i} className="flex items-start text-slate-300 leading-relaxed">
                                    <span className="mr-3 text-emerald-500 mt-1.5">•</span>
                                    {d}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {project.link && (
                        <div className="pt-4">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors w-full sm:w-auto"
                            >
                                Visit Project
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
