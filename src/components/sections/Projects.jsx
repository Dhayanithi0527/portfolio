
import React from "react";
import { Play, AppWindow, Github } from "lucide-react";

import Card from "../ui/Card";
import Reveal from "../ui/Reveal";
import { projects } from "../../lib/data";
import FadeRight from "../ui/FadeRight";

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-6">
                <Reveal>
                    <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Featured Works.
                    </h2>
                </Reveal>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Reveal key={index}>
                            <FadeRight delay={index * 0.15}>
                                <Card className="h-full flex flex-col justify-between group">

                                    {/* IMAGE */}
                                    <div className="mb-5 overflow-hidden rounded-xl border border-white/10">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-[200px] md:h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div>
                                        <p className="text-gray-400 mb-6">{project.description}</p>
                                    </div>

                                    <div>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-xs px-2 py-1 bg-blue-500/10 text-blue-300 rounded border border-blue-500/20">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-auto pt-6 border-t border-white/5 flex gap-4">
                                        {project.links?.playstore && (
                                            <a
                                                href={project.links.playstore}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-green-500/20 border border-white/10 hover:border-green-500/50 rounded-full transition-all group/btn"
                                            >
                                                <Play size={14} className="text-gray-300 group-hover/btn:text-green-400 fill-current" />
                                                <span className="text-xs font-medium text-gray-300 group-hover/btn:text-green-400">Play Store</span>
                                            </a>
                                        )}

                                        {project.links?.appstore && (
                                            <a
                                                href={project.links.appstore}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/50 rounded-full transition-all group/btn"
                                            >
                                                <AppWindow size={14} className="text-gray-300 group-hover/btn:text-blue-400" />
                                                <span className="text-xs font-medium text-gray-300 group-hover/btn:text-blue-400">App Store</span>
                                            </a>
                                        )}

                                        {project.links?.repo && (
                                            <a
                                                href={project.links.repo}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 rounded-full transition-all group/btn"
                                            >
                                                <Github size={14} className="text-gray-300 group-hover/btn:text-purple-400" />
                                                <span className="text-xs font-medium text-gray-300 group-hover/btn:text-purple-400">Github</span>
                                            </a>
                                        )}
                                    </div>
                                </Card>

                            </FadeRight>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
