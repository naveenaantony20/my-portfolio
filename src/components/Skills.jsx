import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

export default function Skills() {
    const skills = {
        Languages: ["Java", "TypeScript", "JavaScript", "HTML5", "CSS3"],
        "Frameworks & Libraries": ["Spring Boot", "Hibernate/JPA", "Angular", "Bootstrap"],
        Databases: ["MySQL"],
        "Tools & Technologies": ["Git", "Postman", "Maven", "REST APIs", "API Integration"],
        "Key Competencies": [
            "Object-Oriented Design",
            "API Development & Integration",
            "Database Management",
            "Debugging & Troubleshooting",
            "Agile & Scrum",
            "Version Control",
        ],
    };

    return (
        <motion.section
            id="skills"
            className="relative py-24 bg-[#0B1120] overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            {/* Background glow */}
            <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-sky-700/20 rounded-full blur-[140px]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-[160px]" />

            <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
                {/* Section header */}
                <h2 className="text-4xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
                    Technical <span className="text-transparent bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text">Skills</span>
                </h2>
                <p className="text-gray-400 text-lg mb-16">
                    Technologies and tools I work with
                </p>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            className="bg-[#111827]/60 border border-white/10 p-6 rounded-xl shadow-md hover:shadow-[0_0_25px_rgba(96,165,250,0.25)] transition-all"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-semibold text-sky-400 mb-4">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                {items.map((item) => (
                                    <span
                                        key={item}
                                        className="bg-[#1E293B]/50 border border-sky-500/20 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-sky-500/10 transition-all"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Certification */}
                <motion.div
                    className="bg-[#111827]/60 border border-white/10 p-6 rounded-xl inline-block text-left shadow-md hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] transition-all"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-2 text-purple-400 mb-2">
                        <BadgeCheck size={18} />
                        <p className="font-semibold text-gray-200 text-lg">Certification</p>
                    </div>
                    <p className="text-gray-300 font-medium">
                        Java Full Stack Development — <span className="text-sky-400">JSPIDER</span>
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                        August 2023 – July 2024
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
}
