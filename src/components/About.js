import React from 'react'
import { motion } from 'framer-motion';

export default function About() {
    const aboutMe_text = [
        "Java 백엔드 개발자(5년). 새로운 개념을 빠르게 학습해 실무에 적용하며, 명확한 문서화로 효율적인 문제 해결을 지향합니다.",
        "AI·클라우드·Rule 엔진 설계 등 최신 기술을 실무에 도입하는 데 적극적이며, 변화에 유연한 아키텍처와 운영 효율성 개선을 우선합니다.",
        "프로젝트 리더로서 비즈니스 요구 분석·할인 요금 정산 로직 설계 등을 주도했고, 모듈화·도메인 중심 설계·성능 최적화로 운영팀의 수작업을 크게 감소시킨 경험이 있습니다.",
        "협업과 피드백을 통한 성장, 클린 코드·도메인 중심 사고에 기반한 유지보수성 높은 시스템 설계를 중요하게 여깁니다."
    ]

    const stats = [
        { label: "Years Experience", value: "5+" },
        { label: "Projects Completed", value: "10+" },
        { label: "Companies Worked", value: "3+" },
    ];

    const values = [
        {
            title: "지속 가능한 성장(Sustainable Growth)",
            desc: "끊임없는 학습과 자기계발을 통해 개인과 조직 모두의 지속 가능한 성장을 추구합니다. 변화하는 기술 환경에 적응하며, 장기적인 성공을 위한 기반을 마련하는 데 중점을 둡니다.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        },
        {
            title: "본질적인 문제 해결(Fundamental Problem Solving)",
            desc: "피상적인 해결책이 아닌 근본적인 원인을 분석하고 해결하는 데 집중합니다. 문제는 항상 기초적인 부분에서 시작되므로, 그 근원을 찾아내어 지속 가능한 해결책을 제공합니다.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            )
        },
        {
            title: "실용적 커뮤니케이션(Pragmatic Communication)",
            desc: "기술적 이해관계자와 비기술적 이해관계자 간의 격차를 줄여 프로젝트 성공을 보장합니다.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
            )
        }
    ];

    const certifications = [
        { title: "SQLD (SQL Developer)", date: "2023.10", type: "자격증" },
        { title: "정보처리기사", date: "2021.06", type: "자격증" }
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
                                <span className="text-emerald-400 font-mono text-sm">2013 - 2018</span>
                            </div>
                            <div className="flex-none w-4 relative">
                                <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 relative z-10"></div>
                                <div className="absolute top-2 left-1.5 w-0.5 h-full bg-slate-800 -z-0"></div>
                            </div>
                            <div className="pb-8">
                                <h4 className="text-lg font-bold text-white">어문학 학사</h4>
                                <p className="text-slate-400">한양대학교 에리카 캠퍼스</p>
                                <p className="text-slate-500 text-sm mt-2">영미언어문화학과 전공</p>
                            </div>
                        </div>
                        {/* Add more timeline items here */}
                    </div>
                </div>

                {/* Awards & Certifications */}
                <div className="max-w-4xl mx-auto mt-12 bg-slate-800/40 p-8 rounded-2xl border border-slate-700">
                    <h3 className="text-2xl font-bold text-white mb-4">Awards & Certifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {certifications.map((c, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-semibold">
                                    {c.type === "자격증" ? "Cert" : "Award"}
                                </div>
                                <div>
                                    <div className="text-white font-semibold">{c.title}</div>
                                    <div className="text-sm text-slate-400">{c.date} · {c.type}</div>
                                </div>
                            </div>
                        ))}
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
