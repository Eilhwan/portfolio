import React from 'react';
import { motion } from 'framer-motion';

// Imgs
import java from '../asset/img/lang/java.svg';
import cpp from '../asset/img/lang/cpp.svg';
import python from '../asset/img/lang/python.svg';
import javascript from '../asset/img/lang/javascript.svg';

import mysql from '../asset/img/db/mysql.svg';
import mongodb from '../asset/img/db/mongodb.svg';
import firebase from '../asset/img/db/firebase.svg';

import spring from '../asset/img/frameworks/spring.svg';
import node from '../asset/img/frameworks/node-js.svg';
import react from '../asset/img/frameworks/react.svg';

import windows from '../asset/img/os/windows.svg';
import mac from '../asset/img/os/mac.svg';
import linux from '../asset/img/os/linux.svg';

import git from '../asset/img/etc/git.svg';
import redux from '../asset/img/etc/redux.svg';
import docker from '../asset/img/etc/docker.svg';


export default function Skills() {
    let skills = ["LANGUAGES", "DATABASES", "FRAMEWORKS", "OS", "ETC"];
    let skill_names = {
        "LANGUAGES": [
            { name: "Java", src: java, level: "Intermediate" },
            { name: "Python", src: python, level: "Intermediate" },
            { name: "JavaScript", src: javascript, level: "Intermediate" },
            { name: "C++", src: cpp, level: "Basic" }
        ],
        "DATABASES": [
            { name: "SQL", src: mysql, level: "Intermediate" },
            { name: "NoSQL", src: mongodb, level: "Basic" },
            { name: "Firebase", src: firebase, level: "Basic" }
        ],
        "FRAMEWORKS": [
            { name: "Spring", src: spring, level: "Intermediate" },
            { name: "Node.js", src: node, level: "Intermediate" },
            { name: "React", src: react, level: "Intermediate" }
        ],
        "OS": [
            { name: "macOS", src: mac, level: "Intermediate" },
            { name: "Windows", src: windows, level: "Expert" },
            { name: "Linux", src: linux, level: "Intermediate" }
        ],
        "ETC": [
            { name: "Git", src: git, level: "Expert" },
            { name: "Redux", src: redux, level: "Intermediate" },
            { name: "Docker", src: docker, level: "Intermediate" }
        ]
    };

    return (
        <motion.section
            id="skills"
            className="py-20 bg-slate-800/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-100 mb-16">
                    Technical <span className="text-emerald-400">Skills</span>
                </h2>

                <div className="space-y-16">
                    {skills.map((category) => (
                        <div key={category} className="max-w-6xl mx-auto">
                            <h3 className="text-xl font-semibold text-slate-300 mb-8 border-b border-slate-700 pb-2 inline-block">
                                {category}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                {skill_names[category].map((skill) => (
                                    <div key={skill.name} className="group relative bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 flex flex-col items-center justify-center gap-4">
                                        <div className="w-16 h-16 flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                                            <img
                                                src={skill.src}
                                                alt={skill.name}
                                                className="max-w-full max-h-full"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <h4 className="font-medium text-slate-200 group-hover:text-emerald-400 transition-colors">{skill.name}</h4>
                                            <span className="text-xs text-slate-500 mt-1 block px-2 py-1 rounded-full bg-slate-900/50 border border-slate-700">
                                                {skill.level}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}