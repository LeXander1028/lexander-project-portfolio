import { useEffect, useState } from "react";
import ParallaxBackground from "@/components/ParallaxBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const threshold = document.body.scrollHeight - 300;
      setShowBackToTop(scrollPosition >= threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen">
      <ParallaxBackground />
      <Header />
      <div className="relative z-10 pt-20">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Certificates />
        <Footer />

        {showBackToTop && (
          <div className="fixed bottom-8 right-8 z-50">
            <Button
              variant="secondary"
              className="rounded-full bg-regal-moss/90 text-antique-sage shadow-lg shadow-black/40 hover:bg-antique-sage hover:text-deep-emerald transition-all px-5"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <ChevronUp className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-wide">Back to Top</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
