
import { motion } from "framer-motion";

export default function FloatingElement({ children, delay = 0, duration = 4, yOffset = 10 }) {
    return (
        <motion.div
            animate={{
                y: [0, -yOffset, 0],
                rotate: [0, 1, -1, 0]
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
            }}
        >
            {children}
        </motion.div>
    );
}
