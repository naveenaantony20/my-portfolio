import { motion } from "framer-motion";
import { Code2, Layers, Database } from "lucide-react";

export default function About() {
  const skills = [
    {
      title: "Backend Expert",
      desc: "Java & Spring Boot",
      icon: <Code2 size={32} className="text-sky-400" />,
    },
    {
      title: "Frontend Pro",
      desc: "Angular & TypeScript",
      icon: <Layers size={32} className="text-sky-400" />,
    },
    {
      title: "Database",
      desc: "MySQL & JPA",
      icon: <Database size={32} className="text-sky-400" />,
    },
  ];

  return (
    <motion.section
      id="about"
      className="relative py-24 bg-[#0B1120] overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Glows */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-700/20 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-700/20 rounded-full blur-[160px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About <span className="text-transparent bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text">Me</span>
        </motion.h2>

        <p className="text-gray-400 text-lg mb-12">
          Building the future, one line of code at a time
        </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              className="bg-[#111827] border border-white/5 p-8 rounded-xl hover:shadow-[0_0_25px_rgba(96,165,250,0.2)] transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center">
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-gray-100">
                  {skill.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2">{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          className="bg-[#111827]/60 border border-white/10 p-8 rounded-xl text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I'm a{" "}
          <span className="font-semibold text-gray-100">
            detail-oriented and analytical Computer Science graduate
          </span>{" "}
          with hands-on experience in{" "}
          <span className="text-sky-400 font-semibold">Java (Spring Boot)</span> and{" "}
          <span className="text-sky-400 font-semibold">Angular</span>. I
          specialize in developing, debugging, and maintaining
          high-performance web applications with seamless integration between
          backend services and front-end interfaces. With a strong foundation
          in{" "}
          <span className="text-purple-400 font-semibold">
            Object-Oriented Programming, SQL, and RESTful API Development
          </span>
          , I'm adept at collaborating in Agile environments to deliver
          efficient and maintainable solutions. I’m passionate about building
          reliable software while continuously learning and applying best coding
          practices to real-world business challenges.
        </motion.div>
      </div>
    </motion.section>
  );
}
