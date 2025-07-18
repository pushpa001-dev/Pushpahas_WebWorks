import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Whatido from "@/components/Whatido";

export default function Home() {
  return (
    <div >    
    <Hero />
    <About />
    <Whatido />
    <Projects/>
    <Contact />
    <Footer/>
    </div>

  );
}
