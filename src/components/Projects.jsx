import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            category: "Enterprise Web Application",
            title: "Plant Information System (PIS)",
            desc: "Developed a comprehensive plant information management system for government use, featuring real-time data visualization, advanced search capabilities, and administrative dashboards.",
            highlights: [
                "Built RESTful APIs for efficient data management",
                "Implemented role-based access control",
                "Created responsive dashboards with Angular",
            ],
            tech: ["Java", "Spring Boot", "Angular", "MySQL", "REST APIs"],
            accent: "sky",
        },
        {
            category: "Government Digital Initiative",
            title: "Senior Citizen Portal",
            desc: "Created a user-friendly portal for senior citizens to access government services, featuring simplified UI/UX design and seamless backend integration for service requests and tracking.",
            highlights: [
                "Optimized UI for accessibility and ease of use",
                "Integrated multiple government service APIs",
                "Implemented complaint tracking module",
            ],
            tech: ["Spring Boot", "Angular", "Bootstrap", "JPA"],
            accent: "blue",
        },
        {
            category: "Mini B.Tech Project",
            title: "Palliative Care App",
            desc: "Built a full-stack web application to manage patient data and staff assignments for a palliative care facility with authentication and role-based dashboards.",
            highlights: [
                "Implemented secure authentication system",
                "Created role-based dashboards for staff and admin",
                "Developed complaint tracking and resolution module",
            ],
            tech: ["Java", "Spring Boot", "Angular", "MySQL"],
            accent: "cyan",
        },
        {
            category: "Major B.Tech Project",
            title: "Crop Prediction System",
            desc: "Designed a machine learning model using Gaussian Naive Bayes to predict optimal crops based on soil features with 99% accuracy, integrated into a web-based interface.",
            highlights: [
                "Achieved 99% prediction accuracy",
                "Built intuitive web interface for data input",
                "Implemented real-time prediction and visualization",
            ],
            tech: ["Python", "Machine Learning", "Web Technologies"],
            accent: "purple",
        },
    ];

    return (
        <motion.section
            id="projects"
            className="relative py-24 bg-[#0B1120] overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            {/* Background Glow */}
            <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-sky-700/20 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-700/20 rounded-full blur-[150px]" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
                    Featured <span className="text-transparent bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text">Projects</span>
                </h2>
                <p className="text-gray-400 text-lg mb-16">
                    Real-world applications making a difference
                </p>

                {/* Project Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((proj, index) => (
                        <motion.div
                            key={proj.title}
                            className="relative bg-[#111827]/60 border border-white/10 p-6 rounded-xl text-left shadow-md hover:shadow-[0_0_25px_rgba(96,165,250,0.2)] transition-all"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex justify-between items-center mb-3">
                                <span
                                    className={`text-xs font-semibold px-3 py-1 rounded-full bg-${proj.accent}-500/20 text-${proj.accent}-400 border border-${proj.accent}-500/20`}
                                >
                                    {proj.category}
                                </span>
                                <Code2 className={`text-${proj.accent}-400`} size={18} />
                            </div>

                            <h3 className="text-xl font-semibold text-gray-100 mb-2">
                                {proj.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                {proj.desc}
                            </p>

                            <h4 className="text-gray-200 font-semibold text-sm mb-1">
                                Key Highlights:
                            </h4>
                            <ul className="list-disc list-inside text-gray-400 text-sm mb-4 space-y-1">
                                {proj.highlights.map((h) => (
                                    <li key={h}>{h}</li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {proj.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-[#1E293B]/50 border border-sky-500/20 text-gray-300 px-3 py-1 rounded-full text-xs hover:bg-sky-500/10 transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
