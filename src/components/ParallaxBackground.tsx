import { motion } from "framer-motion";
import botanicalBg from "@/assets/botanical-bg.jpg";

const ParallaxBackground = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-0 w-full h-full pointer-events-none"
    >
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(${botanicalBg})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-emerald/60 via-deep-emerald/20 to-deep-emerald/70" />
    </motion.div>
  );
};

export default ParallaxBackground;
