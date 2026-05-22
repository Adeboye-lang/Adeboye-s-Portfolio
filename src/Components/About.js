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
                {/* Responsive Header Size */}
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-cyan-400 animate-pulse px-4">
                    SYSTEM_ACCESS: <span className="text-white">GRANTED</span>
                </h2>
                {/* Responsive Tracking & Font Size */}
                <div className="mt-2 text-cyan-500/60 font-mono text-xs md:text-sm tracking-[0.2em] md:tracking-[0.5em]">
                    {"// LOADING PERSONNEL_DATA_FILE..."}
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

                        {/* Corner Brackets - Responsive Size & Border Width */}
                        <div className="absolute top-0 left-0 w-8 h-8 lg:w-16 lg:h-16 border-t-2 border-l-2 lg:border-t-4 lg:border-l-4 border-cyan-500 z-20"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 lg:w-16 lg:h-16 border-b-2 border-r-2 lg:border-b-4 lg:border-r-4 border-cyan-500 z-20"></div>

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

                        {/* Floating Tech Labels - Hidden on small mobile */}
                        <div className="absolute -right-8 top-10 bg-neutral-900 border border-cyan-500 px-2 py-1 text-[10px] font-mono text-cyan-400 rotate-90 origin-left hidden sm:block">
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
                    {/* Responsive Padding: p-4 -> p-12 */}
                    <div className="relative bg-neutral-900/80 p-6 lg:p-12 border-l-4 border-cyan-500 shadow-[0_0_50px_rgba(6,182,212,0.15)] group">

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
                            <p className="text-base lg:text-lg">
                                <span className="text-cyan-400 font-bold">&gt; INITIALIZING BIO_PROTOCOL...</span>
                            </p>

                            {/* Responsive Text Alignment & Size */}
                            <p className="text-sm lg:text-base text-left lg:text-justify">
                                I operate as a <span className="bg-cyan-950/50 text-cyan-300 px-1 border border-cyan-500/30">Full-Stack Engineer</span> across the entire product surface — database schema, API design, auth, frontend, and deployment. My primary directive is building <span className="text-cyan-400 font-bold">fault-tolerant systems</span> that handle real payments, real users, and real edge cases with <span className="text-cyan-400 font-bold">low latency</span>.
                            </p>

                            <p className="text-sm lg:text-base text-left lg:text-justify">
                                <span className="text-cyan-500/50 mr-2">[EXP_LOG]:</span>
                                With <span className="text-white font-bold">5+ YEARS</span> of runtime, I have shipped production platforms on the <span className="text-cyan-300">[MERN_STACK]</span> + <span className="text-cyan-300">[NEXT_JS]</span> matrix, integrating <span className="text-cyan-300">[STRIPE]</span>, <span className="text-cyan-300">[POSTGRES]</span>, <span className="text-cyan-300">[PRISMA]</span>, and increasingly <span className="text-purple-300">[AI / LLM]</span> workflows.
                            </p>

                            <p className="text-sm lg:text-base text-left lg:text-justify">
                                <span className="text-cyan-500/50 mr-2">[DOMAIN_LOG]:</span>
                                Recent builds include a luxury UK e-commerce platform with Stripe-powered admin refunds, a Christian content & community hub with Google-Maps event mapping, and a multi-tenant marketplace handling <span className="text-white font-bold">50,000+ transactions</span> at <span className="text-white font-bold">99.9% uptime</span>.
                            </p>

                            <p className="text-sm lg:text-base text-left lg:text-justify">
                                <span className="text-cyan-500/50 mr-2">[SYS_DIRECTIVE]:</span>
                                I don't just write code {"//"} I engineer <span className="text-cyan-300 border-b border-cyan-500 border-dashed">end-to-end systems</span> — clean data models, predictable APIs, secure auth, and pixel-tight interfaces — that stay fast and trustworthy as they scale.
                            </p>

                            <div className="pt-6 border-t border-cyan-500/30 grid grid-cols-2 sm:grid-cols-4 gap-3 text-[10px] sm:text-xs font-mono text-cyan-500">
                                <div><span className="text-neutral-500">TX_PROC:</span> <span className="text-cyan-300">50K+</span></div>
                                <div><span className="text-neutral-500">LATENCY:</span> <span className="text-cyan-300">-65%</span></div>
                                <div><span className="text-neutral-500">UPTIME:</span> <span className="text-cyan-300">99.9%</span></div>
                                <div><span className="text-neutral-500">USERS:</span> <span className="text-cyan-300">10K+</span></div>
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