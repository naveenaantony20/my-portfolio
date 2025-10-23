import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Heart } from "lucide-react";

export default function Contact() {
    return (
        <motion.section
            id="contact"
            className="relative py-24 bg-[#0B1120] overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            {/* Ambient glows */}
            <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-blue-700/20 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-700/20 rounded-full blur-[150px]" />

            <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                {/* Section Header */}
                <h2 className="text-4xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
                    Get In <span className="text-transparent bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text">Touch</span>
                </h2>
                <p className="text-gray-400 mb-12">
                    Let’s discuss how I can contribute to your team
                </p>

                {/* Contact Info Card */}
                <motion.div
                    className="bg-[#111827]/60 border border-white/10 rounded-2xl p-8 shadow-md hover:shadow-[0_0_25px_rgba(96,165,250,0.2)] transition-all"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
                        {/* Email */}
                        <div className="flex items-center gap-3 bg-[#1E293B]/50 p-4 rounded-lg border border-sky-500/10">
                            <Mail size={22} className="text-sky-400" />
                            <div>
                                <p className="text-sm text-gray-400">Email</p>
                                <p className="text-gray-200 font-semibold">
                                    naveenaantony20@gmail.com
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-3 bg-[#1E293B]/50 p-4 rounded-lg border border-sky-500/10">
                            <Phone size={22} className="text-sky-400" />
                            <div>
                                <p className="text-sm text-gray-400">Phone</p>
                                <p className="text-gray-200 font-semibold">
                                    +91 9207805455
                                </p>
                            </div>
                        </div>

                        {/* LinkedIn */}
                        <div className="flex items-center gap-3 bg-[#1E293B]/50 p-4 rounded-lg border border-purple-500/10">
                            <Linkedin size={22} className="text-purple-400" />
                            <div>
                                <p className="text-sm text-gray-400">LinkedIn</p>
                                <a
                                    href="https://linkedin.com/in/naveena-antony-a1a23b218"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-200 font-semibold hover:text-purple-400 transition-all"
                                >
                                    naveena-antony
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-3 bg-[#1E293B]/50 p-4 rounded-lg border border-purple-500/10">
                            <MapPin size={22} className="text-purple-400" />
                            <div>
                                <p className="text-sm text-gray-400">Location</p>
                                <p className="text-gray-200 font-semibold">India</p>
                            </div>
                        </div>
                    </div>

                    {/* Short Note */}
                    <p className="text-gray-400 mb-8 leading-relaxed text-center">
                        I’m currently open to full-time opportunities where I can contribute,
                        learn, and grow. If you have an exciting opportunity that matches my
                        skills, let’s connect!
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="mailto:naveenaantony20@gmail.com"
                            className="px-6 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-purple-500 text-white font-medium shadow hover:opacity-90 transition-all"
                        >
                            ✉️ Send Email
                        </a>
                        <a
                            href="https://linkedin.com/in/naveena-antony-a1a23b218"
                            target="_blank"
                            rel="noreferrer"
                            className="px-6 py-2 rounded-lg border border-gray-600 text-gray-200 font-medium hover:bg-gray-800 transition-all"
                        >
                            💼 Connect on LinkedIn
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Footer */}
            <footer className="mt-20 text-center text-gray-400 text-sm border-t border-white/5 pt-8 relative">
                <div className="flex justify-center gap-6 mb-3">
                    <a
                        href="https://linkedin.com/in/naveena-antony-a1a23b218"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-sky-400 transition"
                    >
                        <Linkedin />
                    </a>
                    <a
                        href="mailto:naveenaantony20@gmail.com"
                        className="hover:text-purple-400 transition"
                    >
                        <Mail />
                    </a>
                </div>
                <p>
                    Built with <Heart className="inline text-red-400 w-4 h-4 mx-1" /> by{" "}
                    <span className="text-gray-200 font-medium">Naveena Antony</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
            </footer>
        </motion.section>
    );
}
