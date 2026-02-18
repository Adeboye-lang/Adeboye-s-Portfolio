import { motion } from "framer-motion";

const SectionDivider = () => {
    return (
        <div className="relative w-full h-16 flex items-center justify-center overflow-hidden my-8">
            {/* Circuit Trace Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-neutral-800"></div>

            {/* Moving Signal Packet */}
            <motion.div
                className="absolute top-1/2 left-0 w-20 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent z-10"
                animate={{
                    x: ["-100%", "100vw"],
                }}
                transition={{
                    duration: 4,
                    ease: "linear",
                    repeat: Infinity,
                    repeatDelay: 1
                }}
                style={{
                    boxShadow: "0 0 10px #22d3ee"
                }}
            />

            {/* Center Node */}
            <div className="relative z-20 w-4 h-4 bg-neutral-900 border border-cyan-500 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
        </div>
    );
};

export default SectionDivider;
