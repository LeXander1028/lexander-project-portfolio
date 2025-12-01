import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Freelance Website Developer",
    period: "November 2025 – Present",
    points: [
      "Designed and developed responsive portfolio websites using React 18, TypeScript, and Vite",
      "Showcased 6+ architectural projects with dynamic image galleries and interactive carousels",
      "Integrated Cloudinary for cloud-based asset management and delivery optimization",
      "Configured production build pipeline with Vite for fast load times and optimal performance",
    ],
  },
  {
    role: "Social Media Manager / Virtual Assistant",
    period: "June 2025 - July 2025",
    points: [
      "Executed high-frequency content strategy with multiple original posts daily",
      "Designed and implemented automated content pipeline using scheduling tools",
      "Expanded client's social media presence to near 24/7 operation",
      "Managed all daily social media operations including content creation and community monitoring",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-velvet-forest" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-antique-sage"
        >
          Work Experience
        </motion.h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-regal-moss"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-antique-sage" />
              
              <div className="bg-deep-emerald border border-regal-moss rounded-lg p-6 hover:border-antique-sage transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <Briefcase className="w-6 h-6 text-antique-sage flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-antique-sage mb-1">{exp.role}</h3>
                    <p className="text-sm text-botanical-noir">{exp.period}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="text-foreground/80 text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-antique-sage mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
