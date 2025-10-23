import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
    return (
        <motion.section
            id="experience"
            className="relative py-24 bg-[#0B1120] overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            {/* Background glows */}
            <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-blue-700/20 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-700/20 rounded-full blur-[160px]" />

            <div className="relative max-w-6xl mx-auto px-6 z-10">
                {/* Section title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
                        Work <span className="text-transparent bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text">Experience</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Building impactful solutions for government and enterprise clients
                    </p>
                </div>

                {/* Timeline line */}
                <div className="relative border-l border-sky-500/40 ml-6">
                    {/* Job Experience */}
                    <motion.div
                        className="mb-16 ml-6 relative"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {/* Dot */}
                        <span className="absolute -left-[29px] flex items-center justify-center w-8 h-8 bg-sky-500/20 rounded-full border border-sky-400/40 text-sky-400">
                            <Briefcase size={16} />
                        </span>

                        {/* Timeline content */}
                        <p className="text-sky-400 text-sm mb-1">July 2024 – Present</p>
                        <div className="bg-[#111827]/60 border border-white/10 p-6 rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(96,165,250,0.2)] transition-all">
                            <h3 className="text-xl font-semibold text-gray-100">
                                Software Developer – Java & Angular
                            </h3>
                            <p className="text-gray-400 text-sm mb-3">
                                Vivid Trans Tech Solutions
                            </p>
                            <p className="text-gray-300 mb-4">
                                Developing and maintaining full-stack web applications using{" "}
                                <span className="text-sky-400">Java (Spring Boot)</span> and{" "}
                                <span className="text-sky-400">Angular</span>, ensuring seamless
                                communication between backend and frontend modules.
                            </p>

                            <h4 className="text-gray-200 font-semibold mb-1">
                                Key Projects:
                            </h4>
                            <ul className="list-disc list-inside text-gray-400 text-sm mb-4 space-y-1">
                                <li>Plant Information System (PIS)</li>
                                <li>Senior Citizen Portal</li>
                                <li>ITM Project</li>
                                <li>TNEGA Digital Initiatives</li>
                            </ul>

                            <h4 className="text-gray-200 font-semibold mb-1">
                                Key Accomplishments:
                            </h4>
                            <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                                <li>
                                    Delivered multiple Java (Spring Boot) and Angular apps with
                                    strong backend-frontend integration.
                                </li>
                                <li>
                                    Improved response times across systems by developing optimized
                                    REST APIs.
                                </li>
                                <li>
                                    Designed dynamic dashboards for enhanced data-driven decisions.
                                </li>
                                <li>
                                    Contributed to digital transformation projects ensuring high
                                    performance and reliability.
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        className="ml-6 relative"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {/* Dot */}
                        <span className="absolute -left-[29px] flex items-center justify-center w-8 h-8 bg-purple-500/20 rounded-full border border-purple-400/40 text-purple-400">
                            <GraduationCap size={16} />
                        </span>

                        <p className="text-purple-400 text-sm mb-1">2018 – 2022</p>
                        <div className="bg-[#111827]/60 border border-white/10 p-6 rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all">
                            <h3 className="text-lg font-semibold text-gray-100">
                                B.Tech – Computer Science Engineering
                            </h3>
                            <p className="text-gray-400 text-sm mb-2">
                                Jyothy Engineering College
                            </p>
                            <p className="text-gray-300 text-sm">CGPA: 7.87</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
