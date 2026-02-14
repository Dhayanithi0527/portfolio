
import React from "react";
import Reveal from "../ui/Reveal";
import FloatingElement from "../ui/FloatingElement";
import { skills } from "../../lib/data";

import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaAws, FaGitAlt, FaServer, FaSearch, FaMobileAlt, FaBootstrap
} from "react-icons/fa";
import {
    SiTailwindcss, SiMongodb, SiMysql, SiExpress, SiElectron, SiJsonwebtokens
} from "react-icons/si";
import { BiBroadcast } from "react-icons/bi";

const About = () => {
    // Icon Mapping
    const getSkillIcon = (name) => {
        const lower = name.toLowerCase();
        if (lower.includes("html")) return { Icon: FaHtml5, color: "text-orange-500" };
        if (lower.includes("css")) return { Icon: FaCss3Alt, color: "text-blue-500" };
        if (lower.includes("javascript")) return { Icon: FaJs, color: "text-yellow-400" };
        if (lower.includes("react")) return { Icon: FaReact, color: "text-cyan-400" };
        if (lower.includes("node")) return { Icon: FaNodeJs, color: "text-green-500" };
        if (lower.includes("express")) return { Icon: SiExpress, color: "text-gray-300" };
        if (lower.includes("electron")) return { Icon: SiElectron, color: "text-cyan-600" };
        if (lower.includes("mongo")) return { Icon: SiMongodb, color: "text-green-400" };
        if (lower.includes("mysql")) return { Icon: SiMysql, color: "text-blue-400" };
        if (lower.includes("aws")) return { Icon: FaAws, color: "text-orange-400" };
        if (lower.includes("git")) return { Icon: FaGitAlt, color: "text-red-500" };
        if (lower.includes("bootstrap")) return { Icon: FaBootstrap, color: "text-purple-600" };
        if (lower.includes("tailwind")) return { Icon: SiTailwindcss, color: "text-cyan-300" };
        if (lower.includes("jwt")) return { Icon: SiJsonwebtokens, color: "text-pink-500" };
        if (lower.includes("sse")) return { Icon: BiBroadcast, color: "text-red-400" };
        if (lower.includes("rest")) return { Icon: FaServer, color: "text-blue-300" };
        if (lower.includes("seo")) return { Icon: FaSearch, color: "text-green-300" };
        if (lower.includes("responsive")) return { Icon: FaMobileAlt, color: "text-purple-400" };

        return { Icon: FaServer, color: "text-gray-400" };
    };

    return (
        <section id="about" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-6">
                <Reveal>
                    <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight">
                        About Me.
                    </h2>
                </Reveal>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Bio */}
                    <Reveal>
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm h-full">
                            <p>
                                I'm a passionate developer with a knack for building beautiful, functional, and scalable web applications. My journey started with a curiosity for how things work on the internet, which quickly turned into a career obsession.
                            </p>
                            <p>
                                I specialize in the MERN stack and love exploring new technologies to solve real-world problems. When I'm not coding, you can find me exploring AI advancements or gaming.
                            </p>
                            <p>
                                I leverage modern tools like Electron.js for desktop apps and utilize Server-Sent Events (SSE) for real-time updates, ensuring high-performance solutions.
                            </p>
                        </div>
                    </Reveal>

                    {/* Right: Skills Grid */}
                    <Reveal>
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold mb-8 text-white">Technical Arsenal</h3>
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                                {skills.map((skill, index) => {
                                    const { Icon, color } = getSkillIcon(skill);
                                    return (
                                        <div
                                            className="group flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl border border-white/5 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20"
                                        >
                                            <div className={`text-3xl mb-3 ${color} drop-shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                                                <Icon />
                                            </div>
                                            <span className="text-xs text-gray-400 font-medium text-center group-hover:text-white transition-colors">
                                                {skill}
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default About;
