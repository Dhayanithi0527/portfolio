import React from "react";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import { personalInfo, socialLinks } from "../../lib/data";
import { Linkedin, Mail, FileText } from "lucide-react";
import HeroScene from "../canvas/HeroScene";

import FloatingElement from "../ui/FloatingElement";


const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center relative overflow-hidden px-6 pt-24 md:pt-20"
        >
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

                {/* LEFT TEXT */}
                <div className="z-10 relative order-2 md:order-1 text-center md:text-left">

                    <Reveal width="w-[600px]">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
                            Hi, I'm <br /> {personalInfo.name}.
                        </h1>
                    </Reveal>

                    <Reveal>
                        <h2 className="text-xl md:text-3xl text-gray-300 font-semibold mb-6">
                            {personalInfo.headline}
                        </h2>
                    </Reveal>

                    <Reveal>
                        <p className="text-gray-400 text-base md:text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                            {personalInfo.tagline}
                        </p>
                    </Reveal>

                    {/* 🔽 MOBILE HeroScene (below tagline) */}
                    <div className="block md:hidden h-[300px] w-full mb-8">
                        <HeroScene />
                    </div>

                    <Reveal>
                        <div className="flex gap-4 justify-center md:justify-start">
                            <Button href="#projects" variant="primary">
                                View Projects
                            </Button>
                            <Button href="#contact" variant="secondary">
                                Contact Me
                            </Button>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div className="flex gap-6 mt-8 justify-center md:justify-start items-center">
                            <a
                                href={socialLinks.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110"
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href={socialLinks.email}
                                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                            >
                                <Mail size={24} />
                            </a>
                            <a
                                href={socialLinks.resume}
                                download
                                className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors transform hover:scale-110"
                            >
                                <FileText size={24} />
                                <span className="text-sm font-medium">Resume</span>
                            </a>
                        </div>
                    </Reveal>


                </div>

                {/* 🔽 DESKTOP HeroScene */}
                <div className="hidden md:block h-[500px] w-full relative order-1 md:order-2">
                    <HeroScene />
                </div>

            </div>
        </section>
    );
};

export default Hero;