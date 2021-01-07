import React from 'react'
import Aos from 'aos';
export default function About() {
    const aboutMe_text = ["백앤드 개발을 하는 웹 개발자입니다.\n",
    "Java와 Spring을 활용한 백앤드 개발을 주로 하고 있으며 모바일, 프론트앤드 등 다양한 분야에 흥미가 있습니다.\n",
    "자바스크립트, 파이썬 등 다양한 언어와 Node.Js, React 등 프레임워크을 사용합니다.\n",
    "다양한 기술을 익히는데 관심이 많으며 기초적인 이론에도 관심이 있습니다.\n",
    "윈도우, 리눅스, 그리고 맥 모든 운영체제에서 개발하고 터미널 기반 환경을 사랑합니다.\n",
    "문제를 획기적으로 풀어가는데 필요한 알고리즘을 공부하고 깔끔한 코드와 효율적인 모듈화를 추구합니다.\n",
    "팀원간의 협업을 중시하고 애자일 기법을 통한 즉각적으로 요구사항을 검토하고 반영하는 방식을 좋아합니다."]
    Aos.init()
    return (
        <div className="text-white">
        <h2 className="text-center text-3xl font-bold underline">ABOUT ME</h2>
        <div className="p-10">
            {aboutMe_text.map((text) => 
                <p className="font-medium font-mono p-1">{text}</p>
            )}
        </div>
    </div>
    )
}
