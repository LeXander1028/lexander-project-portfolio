import { useCallback } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "top", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "projects", label: "Featured Projects" },
  { id: "experience", label: "Work Experience" },
  { id: "certificates", label: "Certificates" },
];

const Header = () => {
  const handleScroll = useCallback((id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40"
    >
      <div className="mx-auto max-w-6xl px-6 py-3">
        <div className="flex items-center justify-between rounded-full border border-regal-moss/60 bg-deep-emerald/60 px-4 py-2 shadow-lg shadow-black/30 backdrop-blur-md">
          <span className="text-sm font-semibold tracking-[0.25em] uppercase text-antique-sage/80">
            JAL
          </span>

          <nav className="flex items-center gap-2 text-xs md:text-sm">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleScroll(section.id)}
                className="rounded-full px-3 py-1 text-antique-sage/80 transition-colors hover:bg-velvet-forest/70 hover:text-white"
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;


