
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const icons = [
  { Component: FaReact, color: "text-cyan-400", x: -20, y: -10, delay: 0 },
  { Component: FaNodeJs, color: "text-green-500", x: 20, y: -15, delay: 1 },
  { Component: SiTailwindcss, color: "text-cyan-300", x: -15, y: 15, delay: 2 },
  { Component: FaJs, color: "text-yellow-400", x: 15, y: 10, delay: 3 },
  { Component: SiMongodb, color: "text-green-400", x: -25, y: -5, delay: 4 },
];

const FloatingTech = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center items-center">
      {icons.map(({ Component, color, x, y, delay }, index) => (
        <motion.div
          key={index}
          className={`absolute text-4xl md:text-6xl opacity-20 ${color}`}
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, x * 10, 0],
            y: [0, y * 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: delay,
          }}
          style={{
            top: `${50 + y}%`,
            left: `${50 + x}%`,
          }}
        >
          <Component />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingTech;