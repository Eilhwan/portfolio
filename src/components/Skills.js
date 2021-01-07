import React from 'react';
import Aos from 'aos';

// Imgs
import java from '../asset/img/lang/java.svg';
import cpp from '../asset/img/lang/cpp.svg';
import python from '../asset/img/lang/python.svg';
import r from '../asset/img/lang/r.svg';
import javascript from '../asset/img/lang/javascript.svg';

import oracle from '../asset/img/db/oracle.svg';
import mysql from '../asset/img/db/mysql.svg';
import mariadb from '../asset/img/db/mariadb.svg';
import mongodb from '../asset/img/db/mongodb.svg';
import firebase from '../asset/img/db/firebase.svg';

import spring from '../asset/img/frameworks/spring.svg';
import node from '../asset/img/frameworks/node-js.svg';
import react from '../asset/img/frameworks/react.svg';
import express from '../asset/img/frameworks/express.svg';

import windows from '../asset/img/os/windows.svg';
import mac from '../asset/img/os/mac.svg';
import linux from '../asset/img/os/linux.svg';

import git from '../asset/img/etc/git.svg';
import redux from '../asset/img/etc/redux.svg';
import docker from '../asset/img/etc/docker.svg';


export default function Skills() {
    Aos.init({duration: 3000});

    let skills = ["LANGUAGES", "DATABASES", "FRAMEWORKS", "OS", "ETC"];
    let skill_names = {
        "LANGUAGES": [{
            "name": "java",
            "src": java,
            "level": "intermidiate"
        }, {
            "name": "python",
            "src": python,
            "level": "intermidiate"
    
        }, {
            "name": "javascript",
            "src": javascript,
            "level": "intermidiate"
    
        }, {
            "name": "c++",
            "src": cpp,
            "level": "basic"
    
        }, {
            "name": "R",
            "src": r,
            "level": "basic"
    
        }],
        "DATABASES": [{
            "name": "Oracle",
            "src": oracle,
            "level": "intermidiate"
        }, {
            "name": "MySql",
            "src": mysql,
            "level": "intermidiate"
    
        }, {
            "name": "MariaDB",
            "src": mariadb,
            "level": "intermidiate"
    
        }, {
            "name": "MongoDB",
            "src": mongodb,
            "level": "basic"
    
        }, {
            "name": "Firebase",
            "src": firebase,
            "level": "basic"
    
        }],
        "FRAMEWORKS": [{
            "name": "Spring",
            "src": spring,
            "level": "intermidiate"
        }, {
            "name": "NodeJs",
            "src": node,
            "level": "intermidiate"
    
        }, {
            "name": "Express",
            "src": express,
            "level": "basic"
    
        }, {
            "name": "React",
            "src": react,
            "level": "intermidiate"
    
        }],
        "OS": [{
            "name": "mac",
            "src": mac,
            "level": "intermidiate"
    
        }, {
            "name": "Windows",
            "src": windows,
            "level": "expert"
    
        }, {
            "name": "Linux",
            "src": linux,
            "level": "intermidiate"
    
        }],
        "ETC": [{
            "name": "Git",
            "src": git,
            "level": "expert"
    
        }, {
            "name": "Redux",
            "src": redux,
            "level": "intermidiate"
    
        }, {
            "name": "Docker",
            "src": docker,
            "level": "intermidiate"
            
        }]
    };

    const onMouseOver = (event) => {
        const { target } = event;
        const text = document.createElement("h5");
        const parent_text = target.parentNode.parentNode.parentNode.firstChild.innerText;
        let for_find;
        skill_names[parent_text].forEach(element => {
            if (element.name === target.name){
                for_find = `${element.name} / ${element.level}`;
            }
        });       
        text.innerHTML = for_find;
        target.parentNode.appendChild(text);
    };

    const onMouseOut = (event) => {
        const { target } = event;
        target.parentNode.removeChild(target.parentNode.lastChild);
    };

    return (
        <div className="text-white p-10" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold underline">SKILLS</h2>
            <div className="p-10">
                {
                    skills.map((skill) => 
                        <div className="p-5" key={skill}>
                            <h2 className="text-xl font-bold">{skill}</h2>
                            <div className="p-5 m-5 flex">
                            {skill_names[skill].map(object => 
                                <div className="p-5 flex-1" key={object.name}>
                                    <img 
                                        src={object.src} 
                                        alt={object.name} 
                                        name={object.name} 
                                        className="rounded-2xl bg-white h-28 w-28 border-gray-500 hover:bg-gray-500 border-2 shadow-inner" 
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