import React from 'react';
import Aos from 'aos';

// Imgs
import java from '../asset/img/java.svg';
import Svg from '../utils/Svg';

export default function Skills() {
    Aos.init();

    let skills = ["LANGUAGES", "DATABASES", "FRAMEWORKS", "OS", "ETC"];
    let skill_names = {
        "LANGUAGES": ["Java", "Python", "JavaScript", "C++", "R",],
        "WebSkills": ["HTML", "CSS", "JavaScript", "JQuery", "SPA", "MVC"],
        "DATABASES": ["Oracle", "MySql", "MariaDB", "MongoDB", "Firebase"],
        "FRAMEWORKS": ["Spring", "NodeJs", "Express", "ReactJs"],
        "OS": ["OsX", "Windows", "Linux"],
        "ETC": ["Git", "Svn", "Redux"]
    };
    const sample = {
        "name": "java",
        "src": java

    }
    const onMouseOver = (event) => {
        const { target } = event;
        const text = document.createElement("h5");
        text.innerHTML = target.name;
        target.parentNode.appendChild(text);
    };

    const onMouseOut = (event) => {
        const { target } = event;
        target.parentNode.removeChild(target.parentNode.lastChild);
    };

    return (
        <div class="text-white" data-aos="fade-up">
            <h2 class="text-center text-3xl font-bold underline">Skills</h2>
            <div class="p-10">
                {
                    skills.map((skill) => 
                        <div class="p-5">
                            <h2 class="text-xl font-bold">{skill}</h2>
                            <div class="p-5 m-5 flex">
                                {skill_names[skill].map(name => 
                                <div class="p-5 flex-1">
                                    <img 
                                        src={sample.src} 
                                        alt={name} 
                                        name={name} 
                                        class="rounded-full bg-white h-28 w-28 border-gray-500 hover:bg-gray-500 border-2 shadow-inner" 
                                        onMouseOver={onMouseOver} 
                                        onMouseOut={onMouseOut} />

                                </div>)}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
