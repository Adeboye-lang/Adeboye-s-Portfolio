// import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Unused icons removed

const Footer = () => {
    return (
        <footer className="border-t border-neutral-800 bg-neutral-950/80 backdrop-blur-md px-8 py-4 mt-20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-neutral-500">

                {/* Left: Copyright */}
                <div className="flex items-center gap-2">
                    <span>&copy; {new Date().getFullYear()} BELLO ADEBOYE</span>
                    <span className="text-neutral-700">|</span>
                    <span className="text-cyan-500">ALL RIGHTS RESERVED</span>
                </div>

                {/* Center: System Metrics (Fictional) */}
                <div className="hidden md:flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span>SYSTEM STATUS: NORMAL</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>UPTIME: 99.99%</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>LATENCY: 12ms</span>
                    </div>
                </div>

                {/* Right: Social Links (Text) */}
                <div className="flex items-center gap-4">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GITHUB</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LINKEDIN</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">TWITTER</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
