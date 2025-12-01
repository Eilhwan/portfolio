import React from 'react'
import { motion } from 'framer-motion';

export default function About() {
    const aboutMe_text = [
        "5년 이상 프리랜서 풀스택 개발자로 활동하며, 특히 통신 도메인에서 결합 상품 중심의 백엔드 시스템을 설계하고 구현해왔습니다.",
        "다양한 스쿼드 기반 프로젝트에서 비즈니스 로직 설계와 요구사항 분석을 주도하며, 파트 내 비즈니스 설계를 담당하고 있습니다.",
        "모듈화된 코드 구조와 TDD 기반 개발을 선호하며, 대용량 트래픽 환경에서의 안정성 확보와 성능 개선 경험이 풍부합니다.",
        "또한, Rule 기반의 유연한 비즈니스 수행 엔진을 설계 및 운영한 경험이 있어 변화에 빠르게 대응할 수 있는 시스템 설계 능력을 갖추고 있습니다."
    ]

    const stats = [
        { label: "Years Experience", value: "5+" },
        { label: "Projects Completed", value: "10+" },
        { label: "Companies Worked", value: "3+" },
    ];

    const values = [
        {
            title: "Scalable Architecture",
            desc: "Designing robust systems that can handle high traffic and grow with the business needs.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        },
        {
            title: "Problem Solving",
            desc: "Translating complex business requirements into clean, maintainable, and efficient code.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            )
        },
        {
            title: "Communication",
            desc: "Bridging the gap between technical and non-technical stakeholders to ensure project success.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
            )
        }
    ];

    return (
        <motion.section
            id="about"
            className="py-32 lg:py-48"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-6xl mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <p className="text-emerald-400 font-mono mb-4 tracking-wide">Eilhwan Jeon • Full Stack Developer</p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 mb-8">
                        Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Robust Systems</span> for Complex Domains
                    </h1>
                    <div className="space-y-6 text-lg sm:text-xl text-slate-400 leading-relaxed mb-12">
                        {aboutMe_text.map((text, index) =>
                            <p key={index}>{text}</p>
                        )}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 border-t border-b border-slate-800 py-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Core Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {values.map((val, index) => (
                        <div key={index} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/30 transition-colors">
                            <div className="bg-slate-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                {val.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{val.title}</h3>
                            <p className="text-slate-400 leading-relaxed">{val.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Education & Experience Sample */}
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">Education & Experience</h3>
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="flex-none w-24 text-right pt-1">
                                <span className="text-emerald-400 font-mono text-sm">2016 - 2020</span>
                            </div>
                            <div className="flex-none w-4 relative">
                                <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 relative z-10"></div>
                                <div className="absolute top-2 left-1.5 w-0.5 h-full bg-slate-800 -z-0"></div>
                            </div>
                            <div className="pb-8">
                                <h4 className="text-lg font-bold text-white">Bachelor of Computer Science</h4>
                                <p className="text-slate-400">Sample University</p>
                                <p className="text-slate-500 text-sm mt-2">Graduated with Honors. Focused on Software Engineering and Database Systems.</p>
                            </div>
                        </div>
                        {/* Add more timeline items here */}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <a href="#projects" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-emerald-600 border border-transparent rounded-full hover:bg-emerald-700 focus:outline-none focus:border-emerald-700 focus:shadow-outline-emerald active:bg-emerald-700 md:py-4 md:text-lg md:px-10">
                        View Projects
                    </a>
                </div>
            </div>
        </motion.section>
    )
}
