import About from "./component/About";
import Contact from "./component/Contact";
import Experience from "./component/Experience";
import Hero from "./component/hero";
import Navbar from "./component/Navbar"
import Technologies from "./component/Technologies";
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
      <Navbar />
      <Hero /> 
      <About />
      <Technologies />
      <Experience />
      <Contact />
      </div>
    </div>
  )
}

export default App;