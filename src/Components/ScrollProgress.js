import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div className="fixed top-0 left-0 right-0 h-1 z-[1000] bg-neutral-900/50">
            <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 origin-left"
                style={{ scaleX }}
            />
            <div className="absolute top-2 right-4 text-[10px] font-mono text-cyan-500/50 pointer-events-none hidden md:block">
                [SYSTEM_LOAD_PROGRESS]
            </div>
        </div>
    );
};

export default ScrollProgress;
