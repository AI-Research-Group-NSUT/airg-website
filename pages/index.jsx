import About from "../sections/About";
import HeroSection from "../sections/Herosection";
import { Navbar } from "../sections/Navbar";
import Projects from "../sections/Projects";

export default function Home() {

  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
    </div>
  )
}
