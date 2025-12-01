import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const certificates = [
  {
    title: "AWS Academy Graduate",
    subtitle: "Cloud Architecting & Foundations",
    org: "Amazon Web Services",
  },
  {
    title: "EY GDS ServiceNow Finalist",
    subtitle: "Technology Consulting Competition",
    org: "Ernst & Young",
  },
  {
    title: "Java & C Certification",
    subtitle: "Programming Language Proficiency",
    org: "CIT University",
  },
  {
    title: "Huawei Training Course",
    subtitle: "ICT Technologies & Solutions",
    org: "Huawei Technologies",
  },
];

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" className="py-24 bg-deep-emerald" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-antique-sage"
        >
          Certificates & Achievements
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-velvet-forest border border-regal-moss rounded-lg p-6 text-center hover:border-antique-sage transition-all duration-300 group"
            >
              <Award className="w-12 h-12 text-antique-sage mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-antique-sage mb-2 group-hover:text-white transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-botanical-noir mb-2">{cert.subtitle}</p>
              <p className="text-xs text-regal-moss">{cert.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
