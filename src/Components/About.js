import David from "../assets/David.jpg";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-20 relative overflow-hidden bg-neutral-950">
            {/* Active Circuit Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#083344_1px,transparent_1px),linear-gradient(to_bottom,#083344_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>

            {/* Header - Cyber Terminal Style */}
            <div className="relative z-10 text-center my-16 lg:my-24">
                <h2 className="text-4xl lg:text-6xl font-black font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-cyan-400 animate-pulse">
                    SYSTEM_ACCESS: <span className="text-white">GRANTED</span>
                </h2>
                <div className="mt-2 text-cyan-500/60 font-mono text-sm tracking-[0.5em]">
                    // LOADING PERSONNEL_DATA_FILE...
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-center relative z-10 max-w-7xl mx-auto px-4 gap-12 lg:gap-20">

                {/* Image Section - Holographic Projector */}
                <motion.div
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="w-full lg:w-[400px] flex justify-center relative"
                >
                    <div className="relative group p-4">
                        {/* Projector Frame */}
                        <div className="absolute inset-0 bg-cyan-950/30 clip-path-polygon-[0%_0%,100%_0%,100%_85%,85%_100%,0%_100%] border border-cyan-500/30"></div>

                        {/* Corner Brackets */}
                        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-cyan-500 z-20"></div>
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-cyan-500 z-20"></div>

                        {/* Scanline Overlay */}
                        <div className="absolute inset-4 z-30 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(6,182,212,0.1)_50%)] bg-[size:100%_4px] opacity-100 mix-blend-overlay"></div>

                        {/* Image */}
                        <div className="relative z-10 overflow-hidden border-2 border-cyan-500/50 bg-neutral-900">
                            <img
                                className="w-full h-auto object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500"
                                src={David}
                                alt="Bello Adeboye"
                            />
                        </div>

                        {/* Floating Tech Labels */}
                        <div className="absolute -right-8 top-10 bg-neutral-900 border border-cyan-500 px-2 py-1 text-[10px] font-mono text-cyan-400 rotate-90 origin-left">
                            ID: 8492-XJ
                        </div>
                    </div>
                </motion.div>

                {/* Text Section - The Cyber Deck Panel */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:flex-1"
                >
                    <div className="relative bg-neutral-900/80 p-8 lg:p-12 border-l-4 border-cyan-500 shadow-[0_0_50px_rgba(6,182,212,0.15)] group">

                        {/* Top Bar */}
                        <div className="absolute top-0 right-0 w-full h-8 bg-cyan-950/30 flex items-center justify-end px-4 gap-4 border-b border-cyan-500/30">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-ping"></span>
                            <span className="text-xs font-mono text-cyan-400">NET_STATUS: ONLINE</span>
                            <div className="flex gap-1">
                                <div className="w-8 h-1 bg-cyan-500/20"></div>
                                <div className="w-8 h-1 bg-cyan-500/20"></div>
                                <div className="w-8 h-1 bg-cyan-500/60"></div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="mt-6 font-mono text-neutral-300 space-y-6 leading-relaxed relative z-10">
                            <p className="text-lg">
                                <span className="text-cyan-400 font-bold">&gt; INITIALIZING BIO_PROTOCOL...</span>
                            </p>

                            <p className="text-justify">
                                I operate as a <span className="bg-cyan-950/50 text-cyan-300 px-1 border border-cyan-500/30">High-Level Architect</span> within the digital infrastructure space. My primary directive is constructing <span className="text-cyan-400 font-bold">fault-tolerant systems</span> capable of sustaining heavy data loads with <span className="text-cyan-400 font-bold">zero latency</span>.
                            </p>

                            <p className="text-justify">
                                <span className="text-cyan-500/50 mr-2">[EXP_LOG]:</span>
                                With <span className="text-white font-bold">5+ YEARS</span> of runtime uptime, I specialize in the deployment of distributed applications using the <span className="text-cyan-300">[MERN_STACK]</span> + <span className="text-cyan-300">[NEXT_JS]</span> matrix.
                            </p>

                            <p className="text-justify">
                                <span className="text-cyan-500/50 mr-2">[SYS_DIRECTIVE]:</span>
                                I don't just write code // I engineer <span className="text-cyan-300 border-b border-cyan-500 border-dashed">solutions</span> that optimize performance metrics and ensure maximum scalability for enterprise-grade environments.
                            </p>

                            <div className="pt-6 border-t border-cyan-500/30 flex justify-between items-center text-xs text-cyan-500">
                                <span>CACHE_SIZE: 1024TB</span>
                                <span>OPTIMIZATION: 99.9%</span>
                            </div>
                        </div>

                        {/* Decorative Background grid for text box */}
                        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(6,182,212,0.05)_25%,rgba(6,182,212,0.05)_26%,transparent_27%,transparent_74%,rgba(6,182,212,0.05)_75%,rgba(6,182,212,0.05)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(6,182,212,0.05)_25%,rgba(6,182,212,0.05)_26%,transparent_27%,transparent_74%,rgba(6,182,212,0.05)_75%,rgba(6,182,212,0.05)_76%,transparent_77%,transparent)] bg-[size:50px_50px] pointer-events-none"></div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;