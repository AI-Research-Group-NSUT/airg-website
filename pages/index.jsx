import About from "../sections/About";
import HeroSection from "../sections/Herosection";
import { Navbar } from "../sections/Navbar";

export default function Home() {

  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
    </div>
  )
}
