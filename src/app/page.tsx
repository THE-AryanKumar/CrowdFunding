import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
    </div>
  );
}
