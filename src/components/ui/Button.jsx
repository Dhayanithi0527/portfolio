import React from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const Button = ({ children, onClick, className, href, variant = "primary" }) => {
  const Component = href ? motion.a : motion.button;

  const baseStyles =
    "relative px-6 py-3 font-medium transition-all duration-300 rounded-lg backdrop-blur-md border inline-flex items-center justify-center";

  const variants = {
    primary:
      "bg-white/10 text-white hover:bg-white/20 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] border-white/10",
    secondary:
      "bg-transparent text-gray-300 hover:text-white hover:bg-white/5 border-white/5",
  };

  // 🟢 smooth scroll handler
  const handleClick = (e) => {
    if (href && href.startsWith("#")) {
      e.preventDefault();

      const element = document.querySelector(href);
      if (element) {
        const yOffset = -80; // navbar height offset
        const y =
          element.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    }

    if (onClick) onClick(e);
  };

  return (
    <Magnetic>
      <Component
        href={href}
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.50 }}
        className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      >
        <span className="relative z-10">{children}</span>

        {variant === "primary" && (
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 blur-xl" />
        )}
      </Component>
    </Magnetic>
  );
};

export default Button;