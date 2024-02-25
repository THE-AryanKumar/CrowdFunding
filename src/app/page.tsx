import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import About from "./components/About";
import Faq from "./components/Faq";
import Interview from "./components/Interview";
import Gallery from "./components/Gallery";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Faq />
      <Stats />
      {/* <Gallery /> */}
      <Interview />
      <Footer />
    </div>
  );
}
