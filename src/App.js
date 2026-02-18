import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Technologies from "./Components/Technologies";
import StarBackground from "./Components/StarBackground";
import CustomCursor from "./Components/CustomCursor";
import ScrollProgress from "./Components/ScrollProgress";
import SectionDivider from "./Components/SectionDivider";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:text-cyan-900 bg-neutral-950 cursor-none">
      <CustomCursor />
      <ScrollProgress />
      <StarBackground />
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-8 relative z-10">
        <Navbar />
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Technologies />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}