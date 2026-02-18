import { RiReactjsLine, RiJavascriptLine, RiFlutterFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { motion } from "framer-motion";

const technologies = [
    { name: "React", icon: RiReactjsLine, color: "text-cyan-400", glow: "shadow-cyan-400" },
    { name: "Next.js", icon: TbBrandNextjs, color: "text-neutral-200", glow: "shadow-white" },
    { name: "TypeScript", icon: BiLogoTypescript, color: "text-cyan-400", glow: "shadow-cyan-400" },
    { name: "JavaScript", icon: RiJavascriptLine, color: "text-yellow-400", glow: "shadow-yellow-400" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500", glow: "shadow-green-500" },
    { name: "Flutter", icon: RiFlutterFill, color: "text-cyan-400", glow: "shadow-cyan-400" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500", glow: "shadow-orange-500" },
];

const Hexagon = ({ tech, index }) => {
    const randomDuration = 2 + Math.random() * 2;
    const randomDelay = Math.random() * 2;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex flex-col items-center justify-center p-4 group"
        >
            {/* Orbital Animation Wrapper */}
            <motion.div
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: randomDuration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: randomDelay,
                }}
                className="relative z-10"
            >
                {/* Hexagon Shape Container */}
                <div className="relative w-28 h-32 flex items-center justify-center">
                    {/* Glowing Border (Simulated via larger hex background) */}
                    <div
                        className="absolute inset-0 bg-neutral-800 clip-hex transition-colors duration-300 group-hover:bg-cyan-500/50"
                        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                    ></div>

                    {/* Inner Hex (Content Background) */}
                    <div
                        className="absolute inset-[2px] bg-neutral-950/90 backdrop-blur-sm clip-hex flex items-center justify-center"
                        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                    >
                        {/* Icon */}
                        <tech.icon className={`text-5xl ${tech.color} transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]`} />
                    </div>
                </div>

                {/* Tech Name Tooltip */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20">
                    <span className="bg-neutral-900 border border-neutral-700 text-cyan-400 text-xs font-mono px-2 py-1 rounded shadow-lg uppercase tracking-wider">
                        {tech.name}
                    </span>
                    {/* Tooltip Connector Line */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-cyan-500/50"></div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Technologies = () => {
    return (
        <div className="border-b border-neutral-900 pb-24 relative overflow-hidden">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl font-thin font-mono text-cyan-400 relative z-10"
            >
                &gt; TECH_STACK
                <span className="animate-pulse">_</span>
            </motion.h1>

            <motion.div
                className="flex flex-wrap items-center justify-center max-w-5xl mx-auto gap-8 relative z-10 px-4"
            >
                {technologies.map((tech, index) => (
                    <Hexagon key={index} tech={tech} index={index} />
                ))}
            </motion.div>
        </div>
    );
};

export default Technologies;