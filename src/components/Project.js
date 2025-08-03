import React from 'react'
import Aos from 'aos';

import coding_img from '../asset/img/coding.jpg';

// 객체 파라미터 방식으로 함수 선언
function createProject({ name, img, date, tools, desc, link }) {
    return { name, img, date, tools, desc, link };
}

// 각 프로젝트 객체를 변수로 선언
const pj_onlineSelf = createProject({
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
});

const pj_premarry = createProject({
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
});

const pj_sajang = createProject({
    name: "사장님성공팩 구조화 프로젝트",
    img: coding_img,
    date: "2022.01. ~ 2022.04",
    tools: ["Java", "Nexacro", "Oracle", "SOA"],
    desc: ["사장님성공팩 상품 구조화 프로젝트로, 타 시스템과의 연동 서비스 개발",
           "타 시스템 상품 정의 및 인터페이스 정의 주도",
           "ESB와 GW를 통한 서비스 연계 및 상품 정의",
           "신규 결합 상품 정의 및 연동 인터페이스 재사용을 위한 모듈화",],
    link: "https://product.kt.com/wDic/productDetail.do?ItemCode=1133&CateCode=6027&filter_code=44&option_code=71&pageSize=5"
});

const pj_giftStructureImprovement = createProject({
    name: "사은품 발송 프로세스 개선",
    img: coding_img,
    date: "2022.05 ~ 2022.06",
    tools: ["Java", "Nexacro", "Oracle", "SOA"],
    desc: ["사은품 발송 프로세스 개선 프로젝트로, 사은품 발송 시 사용자 승인 프로세스 기능 개발",
        "CRM 시스템의 연계로 직상급자 승인 프로세스 구현",
        "승인 시스템 개발로 사용자 cheating 방지 및 사은품 발송 프로세스의 투명성 확보",
    ],
    link: "https://product.kt.com/wDic/productDetail.do?ItemCode=1133&CateCode=6027&filter_code=44&option_code=71&pageSize=5"
});

const pj_ruleEngine = createProject({
    name: "결합 사전체크 Rule화",
    img: coding_img,
    date: "2023.05 ~ 2023.09",
    tools: ["Java", "Nexacro", "Oracle", "SOA"],
    desc: ["기존 하드코딩 제약 조건을 Rule 기반 서비스로 전환.", 
           "룰 검증 API 제공 및 가시화 UI 설계에 기여.", 
           "변경 가능성이 높은 정책을 소스 코드 수정 없이 관리 가능하도록 개선하여 운영 효율성을 크게 향상시킴"],
    link: "https://product.kt.com/wDic/productDetail.do?ItemCode=1133&CateCode=6027&filter_code=44&option_code=71&pageSize=5"
});

const pj_etcSM = createProject({
    name: "기타 결합 프로젝트 및 SM 유지보수",
    img: coding_img,
    date: "2021.07 ~ ",
    tools: ["Java", "Nexacro", "Oracle", "SOA"],
    desc: ["기타 결합 상품 개발 및 유지보수, 기능 및 성능 개선",],
    link: "https://product.kt.com/wDic/productDetail.do?ItemCode=1133&CateCode=6027&filter_code=44&option_code=71&pageSize=5"
});

const pj_familyUnion = createProject({
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
});

const pj_totalDiscountOption = createProject({
    name: "총액결합할인 옵션 신설",
    img: coding_img,
    date: "2024.07 ~ 2024.10",
    tools: ["Java", "Oracle",],
    desc: [
        "기존 설계의 중복을 제거하고 신규 정책 반영을 위해 Rule-Driven 구조로 아키텍처 개편",
        "연계 시스템과의 인터페이스 정의 및 신규 옵션 자동 적용 로직 구현",
    ],
    link: ""
});

const pj_yogoBundle = createProject({
    name: "요고뭉치 상품 프로젝트",
    img: coding_img,
    date: "2023.11 ~ 2024.02",
    tools: ["Java", "Nexacro", "Oracle",],
    desc: [
        "신규 결합 상품 런칭에 따른 결합 정책 설계 및 구현",
        "비즈니스 로직 정제, 할인 로직 설계, 프론트 단 연계까지 주도적으로 이끔",
        "상품 출시 일정에 맞춰 성공적으로 론칭"
    ],
    link: ""
});

// 아래 프로젝트 배열에 추가
export default function Project() {
    Aos.init({duration: 3000});
    // 프로젝트 배열에 각 객체를 추가
    const projects = [
        pj_onlineSelf,
        pj_premarry,
        pj_sajang,
        pj_giftStructureImprovement,
        pj_etcSM,
        pj_ruleEngine,
        pj_familyUnion,
        pj_totalDiscountOption,
        pj_yogoBundle,
    ];

    return (
        <div className="text-green-600 p-10" data-aos="fade-up">
            <h2 className="text-white text-center text-3xl font-bold underline">PROJECT</h2>
            <div className="p-10">
                {projects.map((obj, index) => 
                    <a href={obj.link} target="_blank" rel="noreferrer" key={index}>
                        <div className="p-5">
                            <img src={obj.img} alt="Project" className="w-96 pb-5"/>
                            <h3 className="pb-1 font-bold text-lg">{obj.name}</h3>
                            <h3 className="pb-1">개발 기간: {obj.date}</h3>
                            <h3 className="pb-1">
                                기술스택: {obj.tools.map((t, i) =>
                                    i !== obj.tools.length - 1 ? t + ", " : t
                                )}
                            </h3>
                            {obj.desc.map((d, i) =>
                                <p className="font-middle" key={i}>{d}</p>    
                            )}
                        </div>
                    </a>
                )}
            </div>
        </div>
    )
}