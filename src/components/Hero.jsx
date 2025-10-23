import { motion } from "framer-motion";

export default function Hero() {
    const scrollToSection = (id) => {
        const sectionId = id.replace("#", "");
        console.log("Looking for section:", sectionId);
        const section = document.getElementById(sectionId);
        console.log("Found section:", section);

        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            console.warn(`❌ Section not found: ${sectionId}`);
        }
    };




    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
        >
            {/* background glow effects */}
            <div className="absolute inset-0 bg-glow-left pointer-events-none"></div>
            <div className="absolute inset-0 bg-glow-right pointer-events-none"></div>


            {/* availability tag */}
            <motion.span
                className="text-sm text-cyan-300 mb-4 border border-cyan-400/40 px-3 py-1 rounded-full backdrop-blur-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                Available for Full-Time Opportunities
            </motion.span>

            {/* main heading */}
            <motion.h1
                className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                Hi, I'm <span className="text-transparent bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text">Naveena Antony</span>
            </motion.h1>

            {/* subheading */}
            <motion.h2
                className="text-xl sm:text-2xl text-gray-300 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
            >
                Full-Stack Developer
            </motion.h2>

            {/* intro paragraph */}
            <motion.p
                className="max-w-2xl mt-6 text-gray-400 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                Crafting high-performance web applications with{" "}
                <span className="text-sky-400 font-medium">Java Spring Boot</span> and{" "}
                <span className="text-violet-400 font-medium">Angular</span>. Passionate about building scalable solutions and delivering exceptional user experiences.
            </motion.p>

            {/* action buttons */}
            <motion.div
                className="flex flex-wrap justify-center gap-4 mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <motion.button
                    onClick={() => scrollToSection("#contact")}
                    className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-[0_0_25px_rgba(96,165,250,0.4)] hover:scale-105 transition-transform duration-200"
                    whileTap={{ scale: 0.95 }}
                >
                    Let’s Connect
                </motion.button>

                <motion.button
                    onClick={() => scrollToSection("#projects")}
                    className="border border-gray-600 text-gray-200 px-6 py-2 rounded-lg hover:bg-gray-800 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:scale-105 transition-transform duration-200"
                    whileTap={{ scale: 0.95 }}
                >
                    View Projects
                </motion.button>
            </motion.div>
        </section>
    );
}
