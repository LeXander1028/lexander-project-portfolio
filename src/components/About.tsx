import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [titleText, setTitleText] = useState("");
  const fullTitle = "About Me";

  useEffect(() => {
    if (!isInView) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullTitle.length) {
        setTitleText(fullTitle.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section id="about" className="py-24 bg-velvet-forest" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-antique-sage text-shadow-soft">
            {titleText}
            <span className="inline-block w-0.5 h-8 bg-antique-sage ml-1 animate-pulse" />
          </h2>
          
          <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
            <p>
              I could say that I am a <span className="text-antique-sage font-semibold">Software Developer</span> specializing in 
              Frontend Development since most of my works in college are in creating faces of websites and apps with a little bit of 
              backend development. I am a listener and a good team player with a passion for building and assisting software 
              and websites alike.
            </p>
            
            <p>
              Currently a <span className="text-antique-sage font-semibold">BSIT Senior at CIT University</span> with a <span className="text-antique-sage font-semibold">4.25 GPA</span>, 
              I combine academic excellence with practical experience in building modern web applications.
            </p>
            
            <p>
              My core technology stack includes <span className="text-antique-sage font-semibold">React, TypeScript, Vite, Java, and AWS Cloud Architecting</span>. 
              As an AWS Academy graduate, I bring cloud-first thinking to every project I build.
            </p>

            <p>
              From gamified e-learning platforms to full-stack campus management systems, I've delivered solutions that 
              combine elegant user experiences with robust backend architecture.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
