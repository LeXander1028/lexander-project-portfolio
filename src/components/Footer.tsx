import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-velvet-forest border-t border-regal-moss">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="flex flex-wrap justify-center gap-8 text-sm text-foreground/80">
            <a href="mailto:justinalexanderlabajos@gmail.com" className="flex items-center gap-2 hover:text-antique-sage transition-colors">
              <Mail className="w-4 h-4" />
              justinalexanderlabajos@gmail.com
            </a>
            <a href="tel:+639924577253" className="flex items-center gap-2 hover:text-antique-sage transition-colors">
              <Phone className="w-4 h-4" />
              +0992 457 7253
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Cebu City, Philippines
            </span>
          </div>
          
          <div className="text-sm text-antique-sage">
            © 2025 Justin Alexander Labajos. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
