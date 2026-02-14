import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';
import { personalInfo } from '../lib/data';

export default function Resume() {
    return (
        <Section className="bg-slate-50 dark:bg-slate-900 min-h-screen">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">{personalInfo.name}</h1>
                        <p className="text-xl text-violet-600 dark:text-violet-400 font-medium mb-2">{personalInfo.role}</p>
                        <p className="text-slate-600 dark:text-slate-300 max-w-2xl">
                            Results-driven developer with 2+ years of experience building scalable web and desktop applications.
                        </p>
                    </div>
                    {/* Download button removed as per request */}
                </div>

                <div className="space-y-12">
                    {/* Experience */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold flex items-center text-slate-900 dark:text-white">
                            <Briefcase className="mr-3 h-6 w-6 text-violet-600 dark:text-violet-400" />
                            Professional Experience
                        </h2>

                        <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-8 space-y-10">
                            <div className="relative">
                                <div className="absolute -left-[39px] top-0 h-5 w-5 rounded-full border-4 border-white dark:border-slate-900 bg-violet-600 dark:bg-violet-400" />
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Web Developer</h3>
                                <p className="text-violet-600 dark:text-violet-400 font-medium">Skyraan Technologies • Sep 2023 – Dec 2025</p>
                                <div className="mt-3 text-slate-600 dark:text-slate-300 space-y-2">
                                    <p>Key contributions:</p>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Designed and implemented scalable REST APIs serving over 5,000 active users.</li>
                                        <li>Developed and maintained a cross-platform desktop application using Electron.js.</li>
                                        <li>Engineered a real-time notification system using Server-Sent Events (SSE).</li>
                                        <li>Built intuitive admin dashboards for efficient system management and monitoring.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-[39px] top-0 h-5 w-5 rounded-full border-4 border-white dark:border-slate-900 bg-slate-300 dark:bg-slate-600" />
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Front End Intern</h3>
                                <p className="text-violet-600 dark:text-violet-400 font-medium">Senchola • Jun 2023 – Sep 2023</p>
                                <p className="mt-2 text-slate-600 dark:text-slate-300">
                                    Gained hands-on experience in frontend development, collaborating with senior developers to build responsive UI components and improve application performance.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Education - kept generic as no specific degree details were provided, or I could omit/placeholder it. 
             User didn't provide education details in the prompt, so I will comment it out or leave a placeholder? 
             "Using the following resume details..." -> Education is NOT in the provided details. 
             I will hide the Education section or make it generic "University Graudate" to be safe, 
             OR better, I should probably remove it if not provided to be strict. 
             However, a resume usually needs education. I'll leave the placeholder but comment it's a placeholder.
             Actually, keeping it generic "B.Tech / B.E" is a safe bet for a developer in this region, 
             but I will just hide it to be accurate to the input.
             Wait, I will keep the structure but put "Degree Name" as placeholder.
          */}
                    {/* 
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center text-slate-900 dark:text-white">
              <GraduationCap className="mr-3 h-6 w-6 text-violet-600 dark:text-violet-400" />
              Education
            </h2>
            ...
          </div> 
          */}
                </div>
            </Container>
        </Section>
    );
}
