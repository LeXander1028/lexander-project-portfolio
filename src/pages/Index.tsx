import ParallaxBackground from "@/components/ParallaxBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ParallaxBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Certificates />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
