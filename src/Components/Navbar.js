import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GlitchLogo = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  // Random idle glitch effect
  useEffect(() => {
    const triggerGlitch = () => {
      if (!isHovered) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 200);
      }
      // Random interval between 3s and 8s
      const nextGlitch = Math.random() * 5000 + 3000;
      setTimeout(triggerGlitch, nextGlitch);
    };
    const timer = setTimeout(triggerGlitch, 3000);
    return () => clearTimeout(timer);
  }, [isHovered]);

  return (
    <div
      className="relative cursor-pointer group font-mono text-2xl font-bold tracking-tighter"
      onMouseEnter={() => { setIsHovered(true); setGlitchActive(true); }}
      onMouseLeave={() => { setIsHovered(false); setGlitchActive(false); }}
    >
      {/* Base Layer */}
      <div className="relative z-10 text-cyan-400 group-hover:text-white transition-colors duration-300">
        &lt;BA /&gt;
      </div>

      {/* Red Channel Glitch */}
      <motion.div
        className="absolute inset-0 text-red-500 z-0 opacity-0 mix-blend-screen"
        animate={glitchActive ? {
          opacity: [0, 1, 0, 1, 0],
          x: [0, -2, 2, -1, 0],
          y: [0, 1, -1, 0],
          skewX: [0, 10, -10, 0]
        } : { opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        &lt;BA /&gt;
      </motion.div>

      {/* Blue Channel Glitch */}
      <motion.div
        className="absolute inset-0 text-blue-500 z-0 opacity-0 mix-blend-screen"
        animate={glitchActive ? {
          opacity: [0, 1, 0, 1, 0],
          x: [0, 2, -2, 1, 0],
          y: [0, -1, 1, 0],
          skewX: [0, -10, 10, 0]
        } : { opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.05 }}
      >
        &lt;BA /&gt;
      </motion.div>

      {/* Scanline Slice */}
      <AnimatePresence>
        {glitchActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 overflow-hidden"
          >
            <div className="w-full h-[2px] bg-white/50 absolute top-1/2 -translate-y-1/2 shadow-[0_0_5px_#fff]"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-neutral-950/80 border-b border-cyan-500/10 shadow-lg shadow-cyan-900/5">
      <div className="flex flex-shrink-0 items-center">
        <GlitchLogo />
      </div>

      {/* System Status / Clock - Hidden on small screens */}
      <div className="hidden md:flex items-center gap-4 px-4 py-1.5 rounded-full bg-neutral-900/50 border border-neutral-800/80 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-mono text-neutral-400 tracking-wider">[SYS_ACTIVE]</span>
        </div>
        <div className="w-px h-4 bg-neutral-800"></div>
        <span className="text-xs font-mono text-cyan-500/80 tracking-widest">{time}</span>
      </div>

      <div className="flex items-center justify-center gap-6 text-2xl">
        {/* Dock Container */}
        <div className="flex items-center gap-6 px-6 py-2 bg-neutral-900/80 rounded-full border border-neutral-800 hover:border-cyan-500/30 transition-all duration-300 shadow-inner shadow-black/50">
          <a href="https://www.linkedin.com/in/adeboye-bello-963b47243" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Adeboye-lang" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-purple-400 hover:scale-110 transition-all duration-300">
            <FaGithub />
          </a>
          <a href="https://x.com/adeboyebello?s=21" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/chief_david_b?igsh=MXQ3ZXYwOXlqMXpoOQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-pink-400 hover:scale-110 transition-all duration-300">
            <FaInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;