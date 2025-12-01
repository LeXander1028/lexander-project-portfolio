import { motion, useScroll, useTransform } from "framer-motion";
import botanicalBg from "@/assets/botanical-bg.jpg";

const ParallaxBackground = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 100]);

  return (
    <motion.div
      style={{ y }}
      className="fixed inset-0 z-0 w-full h-full"
    >
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(${botanicalBg})`,
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-emerald/50 via-transparent to-deep-emerald/50" />
    </motion.div>
  );
};

export default ParallaxBackground;
