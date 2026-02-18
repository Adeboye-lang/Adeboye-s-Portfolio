import { HERO_CONTENT } from "../constants";
import Boye from "../assets/Boye.jpg";
import { motion } from "framer-motion";
import Typewriter from "./Typewriter";
import ScrambleText from "./ScrambleText";
import DigitalRain from "./DigitalRain";
import { useState, useEffect } from "react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const GlitchText = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 200);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div
      className="relative inline-block group"
      onMouseEnter={() => { setIsHovered(true); setGlitchActive(true); }}
      onMouseLeave={() => { setIsHovered(false); setGlitchActive(false); }}
    >
      <span className="relative z-10">{text}</span>
      {/* Glitch Layers */}
      <motion.span
        className="absolute inset-0 text-cyan-600 z-0 opacity-0 mix-blend-screen select-none pointer-events-none"
        animate={glitchActive ? {
          opacity: [0, 1, 0, 1, 0],
          x: [0, -3, 3, -1, 0],
          y: [0, 2, -2, 0],
          skewX: [0, 15, -15, 0]
        } : { opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-purple-600 z-0 opacity-0 mix-blend-screen select-none pointer-events-none"
        animate={glitchActive ? {
          opacity: [0, 1, 0, 1, 0],
          x: [0, 3, -3, 1, 0],
          y: [0, -2, 2, 0],
          skewX: [0, -15, 15, 0]
        } : { opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.05 }}
      >
        {text}
      </motion.span>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36 mt-10 lg:mt-20 relative overflow-hidden">
      {/* Digital Rain Background */}
      <DigitalRain />

      <div className="flex flex-wrap relative z-10">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start pl-4 lg:pl-12">

            {/* System Online Badge */}
            <motion.div
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="mb-8 group cursor-help mt-8 lg:mt-0"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/30 bg-neutral-900/80 backdrop-blur-md px-4 py-2 text-xs font-mono text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.1)] transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:w-auto">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="tracking-widest">SYSTEM_ONLINE</span>

                {/* Hidden Details on Hover */}
                <span className="hidden group-hover:inline-flex border-l border-cyan-500/30 pl-3 text-neutral-400 transition-all duration-500">
                  LOC: 9.0765° N, 7.3986° E // UPTIME: 99.9%
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 lg:pb-16 text-5xl lg:text-8xl font-thin tracking-tight lg:mt-4 font-sans relative z-20 text-white text-center lg:text-left"
            >
              <GlitchText text="Bello Adeboye" />
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-cyan-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent font-mono text-center lg:text-left"
            >
              <Typewriter text="Software Engineer" delay={100} />
            </motion.span>

            {/* Decoded Description */}
            <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-neutral-300 min-h-[100px] bg-neutral-900/20 backdrop-blur-sm rounded-lg p-4 border-l-2 border-cyan-500/30 text-center lg:text-left mx-4 lg:mx-0"
            >
              <ScrambleText text={HERO_CONTENT} className="block" />
            </motion.div>

            {/* HUD Buttons */}
            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4 mt-4 justify-center lg:justify-start"
            >


              <a
                href="mailto:boyebello@gmail.com"
                className="group relative px-6 py-3 font-mono text-sm tracking-wider text-neutral-300 uppercase transition-all duration-300 border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 overflow-hidden w-full sm:w-auto text-center"
              >
                <span className="relative z-10">INITIATE_CONTACT</span>
                <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
              </a>
            </motion.div>

          </div>
        </div>

        {/* Right Side - Reactor Core Image */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12">
          <div className="flex justify-center relative mt-8 lg:mt-0">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group w-64 h-64 lg:w-96 lg:h-96 mx-auto"
            >
              {/* 1. Rotating Outer Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 animate-spin-slow pointer-events-none"></div>

              {/* 2. Counter-Rotating Inner Ring */}
              <div className="absolute inset-4 rounded-full border border-purple-500/30 animate-spin-reverse pointer-events-none"></div>

              {/* 3. Static Tech Ring */}
              <div className="absolute inset-8 rounded-full border-4 border-neutral-800/80 pointer-events-none"></div>

              {/* 4. The Core (Image) */}
              <div className="absolute inset-10 rounded-full overflow-hidden border-2 border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.3)] group-hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] transition-all duration-500 z-10 bg-neutral-900">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                  src={Boye}
                  alt="Bello Adeboye"
                />
                {/* Scanline Overlay */}
                <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzgwYjA5N2IyZDY5N2I2N2I2N2I2N2I2N2I2N2I2N2I/3o7TKSjRrfIPjeiVyM/giphy.gif')] opacity-10 mix-blend-overlay pointer-events-none"></div>
              </div>

              {/* 5. Orbital Particles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1.5 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1.5 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7]"></div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;