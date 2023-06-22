import React from 'react'
import Aos from 'aos';

import coding_img from '../asset/img/coding.jpg';

export default function Project() {
    Aos.init({duration: 3000});
    const gitHubURL = "https://github.com/Eilhwan";
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
        },{
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
        },{
            name: "사장님성공팩 구조화 프로젝트",
            img: coding_img,
            date: "2022.01. ~ 2022.04",
            tools: ["Java", "Nexacro", "Oracle", "SOA"],
            desc: [
                
            ],
            link: "https://product.kt.com/wDic/productDetail.do?ItemCode=1133&CateCode=6027&filter_code=44&option_code=71&pageSize=5"
        },{
            name: "사은품 발송 프로세스 개선",
            img: coding_img,
            date: "2022.05 ~ 2022.06",
            tools: ["Java", "Nexacro", "Oracle", "SOA"],
            desc: [
                
            ],
            link: "https://product.kt.com/wDic/productDetail.do?ItemCode=1133&CateCode=6027&filter_code=44&option_code=71&pageSize=5"
        },{
            name: "기타 결합 프로젝트 및 SM 유지보수",
            img: coding_img,
            date: "2022.07 ~ ",
            tools: ["Java", "Nexacro", "Oracle", "SOA"],
            desc: [
            ],
            link: "https://product.kt.com/wDic/productDetail.do?ItemCode=1133&CateCode=6027&filter_code=44&option_code=71&pageSize=5"
        },
    ]
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
                            {obj.desc.map(d =>
                                <p className="font-middle">{d}</p>    
                            )}
                        </div>
                    </a>
                )}
            </div>
            
        </div>
    )
}
