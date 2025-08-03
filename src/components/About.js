import React from 'react'
import Aos from 'aos';
export default function About() {
    const aboutMe_text = ["5년 이상 프리랜서 풀스택 개발자로 활동하며, 특히 통신 도메인에서 결합 상품 중심의 백엔드 시스템을 설계하고 구현해왔습니다.", 
                            "다양한 스쿼드 기반 프로젝트에서 비즈니스 로직 설계와 요구사항 분석을 주도하며, 파트 내 비즈니스 설계를 담당하고 있습니다.",
                            "모듈화된 코드 구조와 TDD 기반 개발을 선호하며, 대용량 트래픽 환경에서의 안정성 확보와 성능 개선 경험이 풍부합니다.",
                            "또한, Rule 기반의 유연한 비즈니스 수행 엔진을 설계 및 운영한 경험이 있어 변화에 빠르게 대응할 수 있는 시스템 설계 능력을 갖추고 있습니다."]
    Aos.init()

    return (
        <div className="text-white p-10">
            <h2 className="text-center text-3xl font-bold underline">ABOUT ME</h2>
            <div className="p-10">
                {aboutMe_text.map((text) => 
                    <p className="font-medium font-mono p-1">{text}</p>
                )}
            </div>
    </div>
    )
}
