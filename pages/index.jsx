import Head from "next/head";
import About from "../sections/About";
import HeroSection from "../sections/Herosection";
import Projects from "../sections/Projects";

export default function Home() {

  return (
    <>
      <Head>
        <title>
          AIRG Home
        </title>
      </Head>
      <HeroSection />
      <About />
      <Projects />
    </>
  )
}
