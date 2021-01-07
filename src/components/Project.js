import React from 'react'
import Aos from 'aos';

import coding_img from '../asset/img/coding.jpg';

export default function Project() {
    Aos.init({duration: 3000});
    const gitHub = "https://github.com/Eilhwan";
    const projects = [
        {
            name: "TeaHome",
            img: coding_img,
            date: "2020.03.10 ~ 2020.03.20",
            tools: ["Java", "Jsp", "Javascript", "Ajax", "OracleDB", "Bootstrap"],
            desc: [ "Java와 Jsp를 활용해 MVC model2 패턴을 사용하여 음용차를 판매하는 사이트를 만들었습니다.", 
                    "기능은 크게 4가지로 관리자의 물품등록/관리, 회원관리, 물품구매, 리뷰시스템으로 구성되어있습니다.",
                    "관리자와 사용자의 기능을 분리하여 제작하였습니다."],
            link: gitHub + "/stlproject"
        }, {
            name: "JRStudyCafe",
            img: coding_img,
            date: "2020.04.08 ~ 2020.05.04",
            tools: ["Java", "Spring", "Jsp", "Javascript", "Ajax", "OracleDB", "Bootstrap"],
            desc: ["본 프로젝트는 더조은컴퓨터아카데미에서 네 명의 팀원으로 구성되어 3주간 진행한 팀프로젝트의 결과물 입니다.",
            "스터디룸 예약을 목적으로 제작되었으며 그 외, 커뮤니티, 쪽지, 게시판 등의 기능을 포함합니다.",
            "관리자와 일반 사용자의 기능을 분리하였습니다."],
            link: gitHub + "/JRstudyCafe"
        }
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
                                {obj.tools.map((t, i) =>
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
