import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "BrightMinds",
    subtitle: "Gamified E-Learning Platform",
    tech: "React, Spring Boot, Neon Postgres, JWT, Cloudinary",
    description: "Full-stack gamified e-learning platform for Grade 3 students with dual-language support (English/Tagalog). Features robust security with JWT and RBAC for different user roles.",
  },
  {
    title: "StatCheck",
    subtitle: "Full-Stack Campus Status App",
    tech: "React, Vite, Spring Boot, Firebase, AI Analytics",
    description: "Real-time campus management app tracking classroom, library, and parking capacity. Integrated AI-driven analytics module for data summarization.",
  },
  {
    title: "Pawpal",
    subtitle: "Pet Grooming Appointment Platform",
    tech: "Spring Boot, React, AWS",
    description: "Comprehensive pet grooming appointment and management system with cloud infrastructure on AWS.",
  },
  {
    title: "PocketGarden",
    subtitle: "Mobile App UI/UX",
    tech: "Figma, UI/UX Design",
    description: "Mobile app proof of concept showcasing modern design principles and user-centered interface design.",
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Portfolio",
    tech: "React, TypeScript, Vite, Framer Motion",
    description: "This elegant portfolio website featuring dark botanical luxury aesthetics and smooth animations.",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-deep-emerald" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-antique-sage"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotate: 1 }}
              className="bg-velvet-forest border border-regal-moss rounded-lg p-6 hover:border-antique-sage transition-all duration-300 cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-antique-sage mb-1 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-botanical-noir">{project.subtitle}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-regal-moss group-hover:text-antique-sage transition-colors" />
              </div>
              
              <p className="text-xs text-antique-sage/70 mb-4 font-mono">{project.tech}</p>
              
              <p className="text-foreground/80 text-sm leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
