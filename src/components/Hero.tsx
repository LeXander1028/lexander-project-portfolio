import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "Hi, my name is";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 z-10 text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-antique-sage text-2xl md:text-3xl mb-4"
        >
          {typewriterText}
          <span className="inline-block w-0.5 h-6 bg-antique-sage ml-1 animate-pulse" />
        </motion.h3>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tight"
        >
          JUSTIN ALEXANDER LABAJOS
        </motion.h1>
        
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-xl md:text-2xl lg:text-3xl text-antique-sage"
        >
          BSIT 4th Year @ CIT-U | Software and Website Developer
        </motion.h3>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 2.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <ChevronDown className="w-8 h-8 text-antique-sage" />
      </motion.div>
    </section>
  );
};

export default Hero;
