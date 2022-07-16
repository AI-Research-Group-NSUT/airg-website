import About from "../sections/About";
import { Footer } from "../sections/Footer/Footer";
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
      <Footer />
    </div>
  )
}
