import { motion } from "framer-motion";

export default function Hero() {
    const scrollToSection = (id) => {
        const sectionId = id.replace("#", "");
        const section = document.getElementById(sectionId);
        if (section) {
            const yOffset = -80; // adjust for navbar height
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-[#050B18]"
        >
            {/* floating background glow */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-sky-600/30 rounded-full blur-[150px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-2000 pointer-events-none" />


            {/* available tag */}
            <motion.span
                className="text-sm text-cyan-300 mb-4 border border-cyan-400/40 px-3 py-1 rounded-full backdrop-blur-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                Available for Full-Time Opportunities
            </motion.span>

            {/* name title */}
            <motion.h1
                className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 animate-gradient-x"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                Hi, I'm <span className="font-extrabold">Naveena Antony</span>
            </motion.h1>

            {/* subtitle */}
            <motion.h2
                className="text-xl sm:text-2xl text-gray-300 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
            >
                Full-Stack Developer
            </motion.h2>

            {/* description */}
            <motion.p
                className="max-w-2xl mt-6 text-gray-400 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                Crafting high-performance web applications with{" "}
                <span className="text-sky-400 font-medium">Java Spring Boot</span> and{" "}
                <span className="text-violet-400 font-medium">Angular</span>. Passionate about
                building scalable solutions and delivering exceptional user experiences.
            </motion.p>

            {/* buttons */}
            <motion.div
                className="flex flex-wrap justify-center gap-4 mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                {/* Contact Button */}
                <motion.button
                    onClick={() => scrollToSection("#contact")}
                    className="relative overflow-hidden px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-sky-500 to-purple-500 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-100"
                    whileTap={{ scale: 0.9 }}
                >
                    Let’s Connect
                </motion.button>

                {/* Projects Button */}
                <motion.button
                    onClick={() => scrollToSection("#projects")}
                    className="border border-gray-600 text-gray-200 px-6 py-2 rounded-lg hover:bg-gray-800 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:scale-105 transition-transform duration-200"
                    whileTap={{ scale: 0.9 }}
                >
                    View Projects
                </motion.button>

                {/* Resume Button */}
                <motion.a
                    href="/resume.pdf"
                    download="Naveena_Antony_Resume.pdf"
                    className="border border-sky-500 text-sky-300 px-6 py-2 rounded-lg hover:bg-sky-600/20 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:scale-105 transition-transform duration-200"
                    whileTap={{ scale: 0.9 }}
                >
                    📄 View Resume
                </motion.a>
            </motion.div>

            {/* scroll indicator */}
            <motion.div
                className="absolute bottom-8 text-gray-400 flex flex-col items-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <span className="text-xs mb-1">Scroll</span>
                <span className="text-2xl">↓</span>
            </motion.div>
        </section>
    );
}
