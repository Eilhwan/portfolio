import React from 'react'

export default function About() {
    const aboutMe_text = [
        "5년 이상 프리랜서 풀스택 개발자로 활동하며, 특히 통신 도메인에서 결합 상품 중심의 백엔드 시스템을 설계하고 구현해왔습니다.",
        "다양한 스쿼드 기반 프로젝트에서 비즈니스 로직 설계와 요구사항 분석을 주도하며, 파트 내 비즈니스 설계를 담당하고 있습니다.",
        "모듈화된 코드 구조와 TDD 기반 개발을 선호하며, 대용량 트래픽 환경에서의 안정성 확보와 성능 개선 경험이 풍부합니다.",
        "또한, Rule 기반의 유연한 비즈니스 수행 엔진을 설계 및 운영한 경험이 있어 변화에 빠르게 대응할 수 있는 시스템 설계 능력을 갖추고 있습니다."
    ]

    return (
        <section id="about" className="py-32 lg:py-48">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-emerald-400 font-mono mb-4 tracking-wide">Eilhwan Jeon • Full Stack Developer</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 mb-8">
                    Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Robust Systems</span> for Complex Domains
                </h1>
                <div className="space-y-6 text-lg sm:text-xl text-slate-400 leading-relaxed">
                    {aboutMe_text.map((text, index) =>
                        <p key={index}>{text}</p>
                    )}
                </div>
                <div className="mt-10 flex justify-center gap-4">
                    <a href="#projects" className="px-8 py-3 rounded-full bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20">
                        View Projects
                    </a>
                    <a href="#contact" className="px-8 py-3 rounded-full bg-slate-800 text-slate-300 font-semibold hover:bg-slate-700 transition-colors border border-slate-700">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    )
}
