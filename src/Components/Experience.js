import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 relative">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 lg:my-20 text-center text-3xl lg:text-4xl font-thin font-mono text-cyan-400 relative z-10"
            >
                &gt; WORK_LOG
                <span className="animate-pulse">_</span>
            </motion.h1>

            <div className="container mx-auto px-2 lg:px-4 relative z-10">
                <div className="relative border-l-2 border-dashed border-neutral-800 ml-4 md:ml-10 space-y-16">
                    {EXPERIENCES.map((experience, index) => (
                        <motion.div
                            key={index}
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="relative pl-6 md:pl-16 group"
                        >
                            {/* Timeline Node */}
                            <div className="absolute -left-[11px] top-0 bg-neutral-950 border-2 border-cyan-500 rounded-full w-5 h-5 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                            </div>

                            {/* Mission Log Card */}
                            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 p-4 lg:p-6 rounded-lg relative overflow-hidden group-hover:border-purple-500/50 transition-colors duration-300">
                                {/* Decorative "Scan Line" */}
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-scan-fast"></div>

                                {/* Header: Role & Company */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 border-b border-neutral-800 pb-4">
                                    <div>
                                        <h3 className="text-lg lg:text-xl font-bold font-mono text-neutral-200 group-hover:text-cyan-400 transition-colors">
                                            {experience.role}
                                        </h3>
                                        <div className="text-sm font-mono text-purple-400 mt-1">
                                            @{experience.company} <span className="text-neutral-600">::</span> <span className="text-neutral-400">{experience.year}</span>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <span className="text-xs font-mono text-neutral-600 border border-neutral-800 px-2 py-1 rounded bg-neutral-950">
                                            LOG_ID_{index + 101}
                                        </span>
                                    </div>
                                </div>

                                {/* Body: Description */}
                                <p className="mb-6 text-neutral-400 font-mono text-sm leading-relaxed text-left lg:text-justify">
                                    {experience.description}
                                </p>

                                {/* Tech Stack: Equipped Modules */}
                                <div className="flex flex-wrap gap-2">
                                    {experience.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-cyan-500 bg-cyan-500/10 border border-cyan-500/20 rounded hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-colors cursor-default"
                                        >
                                            [{tech}]
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;