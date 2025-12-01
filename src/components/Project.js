import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';

import coding_img from '../asset/img/coding.jpg';
import ProjectModal from './ProjectModal';

// 객체 파라미터 방식으로 함수 선언
export default function Project() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            name: "KT 온라인 셀프결합",
            img: coding_img,
            date: "2021.02 ~ 2021.05",
            tools: ["Java", "Spring", "PostgreSql", "REST"],
            desc: [
                "KT 마이페이지 비대면 온라인 셀프결합 개발",
                "코로나로 비대면 서비스의 증가로 앱을 통한 비대면 결합을 제공하기 위한 서비스를 제공",
                "KT 통합 전산 API를 활용해서 고객이 받을 수 있는 최대 할인을 제공하는 결합 서비스 제공",
                "인터넷이 없는 신혼부부를 위한 모바일 프리미엄 가족할인",
            ],
            link: "https://product.kt.com/wDic/productDetail.do?ItemCode=1133&CateCode=6027&filter_code=44&option_code=71&pageSize=5"
        },
        {
            name: "신혼미리결합 결합 상품 개발",
            img: coding_img,
            date: "2021.08 ~ 2021.09",
            tools: ["Java", "Nexacro", "Oracle", "SOA"],
            desc: [
                "가족증명을 할 수 없는 신혼부부를 위한 모바일 결합 상품 개발",
                "기존 유무선 총액결합의 할인금액과 같은 할인을 제공하는 결합상품 개발",
                "유무선과 동일한 정책이나 상품의 구성이 달라 할인 알고리즘 신규 개발",
                "인터넷이 없는 신혼부부를 위한 모바일 프리미엄 가족할인",
            ],
            link: "https://product.kt.com/wDic/productDetail.do?ItemCode=1441"
        },
        {
            name: "사장님성공팩 구조화 프로젝트",
            img: coding_img,
            date: "2022.01. ~ 2022.04",
            tools: ["Java", "Nexacro", "Oracle", "SOA"],
            desc: ["사장님성공팩 상품 구조화 프로젝트로, 타 시스템과의 연동 서비스 개발",
                " 타 시스템 상품 정의 및 인터페이스 정의 주도",
                "ESB와 GW를 통한 서비스 연계 및 상품 정의",
                "신규 결합 상품 정의 및 연동 인터페이스 재사용을 위한 모듈화",],
            link: "https://product.kt.com/wDic/productDetail.do?ItemCode=1133&CateCode=6027&filter_code=44&option_code=71&pageSize=5"
        },
        {
            name: "사은품 발송 프로세스 개선",
            img: coding_img,
            date: "2022.05 ~ 2022.06",
            tools: ["Java", "Nexacro", "Oracle", "SOA"],
            desc: ["사은품 발송 프로세스 개선 프로젝트로, 사은품 발송 시 사용자 승인 프로세스 기능 개발",
                "CRM 시스템의 연계로 직상급자 승인 프로세스 구현",
                "승인 시스템 개발로 사용자 cheating 방지 및 사은품 발송 프로세스의 투명성 확보",
            ],
            link: "https://product.kt.com/wDic/productDetail.do?ItemCode=1133&CateCode=6027&filter_code=44&option_code=71&pageSize=5"
        },
        {
            name: "결합 사전체크 Rule화",
            img: coding_img,
            date: "2023.05 ~ 2023.09",
            tools: ["Java", "Nexacro", "Oracle", "SOA"],
            desc: ["기존 하드코딩 제약 조건을 Rule 기반 서비스로 전환.",
                "룰 검증 API 제공 및 가시화 UI 설계에 기여.",
                "변경 가능성이 높은 정책을 소스 코드 수정 없이 관리 가능하도록 개선하여 운영 효율성을 크게 향상시킴"],
            link: "https://product.kt.com/wDic/productDetail.do?ItemCode=1133&CateCode=6027&filter_code=44&option_code=71&pageSize=5"
        },
        {
            name: "기타 결합 프로젝트 및 SM 유지보수",
            img: coding_img,
            date: "2021.07 ~ ",
            tools: ["Java", "Nexacro", "Oracle", "SOA"],
            desc: ["기타 결합 상품 개발 및 유지보수, 기능 및 성능 개선",],
            link: "https://product.kt.com/wDic/productDetail.do?ItemCode=1133&CateCode=6027&filter_code=44&option_code=71&pageSize=5"
        },
        {
            name: "따로살아도가족결합 개발",
            img: coding_img,
            date: "2024.12 ~ 2025.02",
            tools: ["Java", "Nexacro", "Oracle",],
            desc: [
                "프로젝트 리더로서 복잡한 가족 구성 조건을 정제하여 결합 상품 구조 변경",
                "요금 테이블, 로직 설계 및 고객 요청에 따른 사후 조정이 가능한 유연한 구조로 개선",
                "운영팀의 수작업 처리율을 약 70% 감소시킴"
            ],
            link: ""
        },
        {
            name: "총액결합할인 옵션 신설",
            img: coding_img,
            date: "2024.07 ~ 2024.10",
            tools: ["Java", "Oracle",],
            desc: [
                "기존 설계의 중복을 제거하고 신규 정책 반영을 위해 Rule-Driven 구조로 아키텍처 개편",
                "연계 시스템과의 인터페이스 정의 및 신규 옵션 자동 적용 로직 구현",
            ],
            link: ""
        },
        {
            name: "요고뭉치 상품 프로젝트",
            img: coding_img,
            date: "2023.11 ~ 2024.02",
            tools: ["Java", "Nexacro", "Oracle",],
            desc: [
                "신규  결합 상품 런칭에 따른 결합 정책 설계 및 구현",
                "비즈니스 로직 정제, 할인 로직 설계, 프론트 단 연계까지 주도적으로 이끔",
                "상품 출시 일정에 맞춰 성공적으로 론칭"
            ],
            link: ""
        }
    ];

    const allTools = ['All', ...new Set(projects.flatMap(p => p.tools))];
    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.tools.includes(filter));

    return (
        <motion.section
            id="projects"
            className="py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-100 mb-8">
                    Featured <span className="text-emerald-400">Projects</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {allTools.map((tool) => (
                        <button
                            key={tool}
                            onClick={() => setFilter(tool)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === tool
                                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 scale-105'
                                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                                }`}
                        >
                            {tool}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((obj, index) =>
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            key={obj.name} // Use unique key for animation
                            onClick={() => setSelectedProject(obj)}
                            className="group block h-full cursor-pointer"
                        >
                            <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 h-full flex flex-col">
                                <div className="relative overflow-hidden h-48">
                                    <img src={obj.img} alt={obj.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">{obj.name}</h3>
                                    </div>
                                    <p className="text-sm text-slate-400 mb-4 font-mono">{obj.date}</p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {obj.tools.map((t, i) =>
                                            <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-700 text-emerald-400 border border-slate-600">
                                                {t}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </motion.section>
    )
}