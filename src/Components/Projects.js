import { PROJECTS } from "../constants";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set(clientX - left - width / 2);
        y.set(clientY - top - height / 2);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
    const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500"
        >
            {/* Holographic Scan Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-500/50 shadow-[0_0_10px_#22d3ee] animate-scan-slow"></div>
            </div>

            {/* Image Container */}
            <div className="relative h-48 overflow-hidden rounded-t-xl bg-neutral-950">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent z-10 opacity-60"></div>
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Tech Overlay on Image */}
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
                    <div className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse delay-75"></div>
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse delay-150"></div>
                </div>
            </div>

            {/* Content Content - Now with flex-grow to push footer down */}
            <div className="relative z-20 flex flex-col flex-grow p-6">
                <h6 className="mb-2 text-xl font-bold font-mono text-neutral-200 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                </h6>

                <p className="mb-6 text-sm text-neutral-400 leading-relaxed line-clamp-4">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech, index) => (
                        <span
                            key={index}
                            className="rounded bg-neutral-800/50 px-2 py-1 text-[10px] font-mono text-purple-400 border border-purple-500/20 group-hover:border-purple-500/50 group-hover:text-purple-300 transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 5 && (
                        <span className="rounded bg-neutral-800/50 px-2 py-1 text-[10px] font-mono text-neutral-500 border border-neutral-700">
                            +{project.technologies.length - 5}
                        </span>
                    )}
                </div>

                {/* Footer Actions (Link) - Pushed to bottom */}
                <div className="mt-auto pt-4 border-t border-neutral-800 flex justify-end">
                    {project.link ? (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn flex items-center gap-2 text-sm font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                            <span>LAUNCH_PROJECT</span>
                            <FiExternalLink className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </a>
                    ) : (
                        <span className="text-xs font-mono text-neutral-600">INTERNAL_SYSTEM</span>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-20 relative overflow-hidden">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl font-thin font-mono text-cyan-400 relative z-10"
            >
                &gt; SELECTED_WORKS
                <span className="animate-pulse">_</span>
            </motion.h1>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-10">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;