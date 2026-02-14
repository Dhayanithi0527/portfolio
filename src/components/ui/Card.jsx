
import React from 'react';
import { cn } from "../../lib/utils";
import { Tilt } from 'react-tilt';

const Card = ({ children, className }) => {
    const defaultOptions = {
        reverse: false,
        max: 10,
        perspective: 1000,
        scale: 1.02,
        speed: 1000,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
    }

    return (
        <Tilt options={defaultOptions} className={cn("h-full w-full", className)}>
            <div
                className={cn(
                    "relative overflow-hidden p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 h-full",
                    "hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:border-white/20 group"
                )}
            >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                {children}
            </div>
        </Tilt>
    );
};

export default Card;
