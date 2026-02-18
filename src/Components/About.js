import David from "../assets/David.jpg";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-20 relative overflow-hidden">
            {/* Neural Graph Background - Subtle Tech Feel */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <svg className="w-full h-full">
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="cyan" strokeWidth="0.5" strokeOpacity="0.3" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <h1 className="my-10 lg:my-20 text-center text-3xl lg:text-4xl font-thin font-mono text-cyan-400 relative z-10 tracking-widest">
                &gt; PERSONNEL_FILE
                <span className="animate-pulse">_</span>
            </h1>

            <div className="flex flex-wrap items-center justify-center relative z-10 max-w-6xl mx-auto px-4">

                {/* Image Section - Clean Tech Frame */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2 p-4 lg:p-8 flex justify-center"
                >
                    <div className="relative group">
                        {/* Tech Corners */}
                        <div className="absolute -inset-2 border border-cyan-500/30 rounded-lg group-hover:border-cyan-500/60 transition-colors duration-500"></div>
                        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-500 rounded-tl-lg"></div>
                        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-500 rounded-br-lg"></div>

                        {/* Image */}
                        <img
                            className="rounded-lg shadow-[0_0_20px_rgba(34,211,238,0.2)] grayscale hover:grayscale-0 transition-all duration-500 w-full max-w-sm h-auto object-cover relative z-10"
                            src={David}
                            alt="Bello Adeboye"
                        />
                    </div>
                </motion.div>

                {/* Text Section - Clean Typography with Highlights */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full lg:w-1/2 p-4 lg:p-8"
                >
                    <div className="bg-neutral-900/50 backdrop-blur-md p-8 lg:p-10 rounded-2xl border border-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.05)] relative overflow-hidden group hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.1)] transition-all duration-500">

                        {/* Tech Corners for Bio Box */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-lg"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/50 rounded-tr-lg"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500/50 rounded-bl-lg"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/50 rounded-br-lg"></div>

                        {/* Decorative Scan Line */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20"></div>

                        <p className="font-light text-neutral-300 leading-relaxed text-base lg:text-lg tracking-wide text-justify relative z-10">
                            I am a <span className="text-cyan-400 font-medium">software architect</span> and <span className="text-cyan-400 font-medium">systems engineer</span> dedicated to building <span className="text-cyan-400 font-medium">scalable</span>, <span className="text-cyan-400 font-medium">fault-tolerant</span> digital infrastructure.
                            <br /><br />
                            With over <span className="text-cyan-400 font-medium">5 years</span> of engineering experience, I specialize in architecting high-performance applications using <span className="text-cyan-400 font-mono text-sm">React</span>, <span className="text-cyan-400 font-mono text-sm">Next.js</span>, <span className="text-cyan-400 font-mono text-sm">Node.js</span>, and distributed databases like <span className="text-cyan-400 font-mono text-sm">PostgreSQL</span> and <span className="text-cyan-400 font-mono text-sm">MongoDB</span>.
                            <br /><br />
                            My approach combines <span className="text-cyan-400 font-medium">algorithmic efficiency</span> with <span className="text-cyan-400 font-medium">system design principles</span> to deliver optionality and speed. I don't just write code; I engineer <span className="text-cyan-400 font-medium">solutions</span> optimized for performance, security, and maintainability.
                            <br /><br />
                            I thrive on solving complex technical challenges, from optimizing <span className="text-cyan-400 font-medium">runtime latency</span> to deploying <span className="text-cyan-400 font-medium">containerized microservices</span>. Always iterating, always compiling new knowledge.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;