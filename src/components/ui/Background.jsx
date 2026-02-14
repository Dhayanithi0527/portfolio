
import { useEffect, useRef } from "react";

const Background = () => {
    const blobRefs = useRef([]);
    const initialPositions = [
        { x: -4, y: 0 },
        { x: -4, y: 0 },
        { x: 20, y: -8 },
        { x: 20, y: -8 },
    ];

    useEffect(() => {
        let currentScroll = 0;
        let requestId;

        const handleScroll = () => {
            const newScroll = window.pageYOffset;
            const diff = newScroll - currentScroll;
            const speed = 0.05;

            blobRefs.current.forEach((blob, index) => {
                const initialPos = initialPositions[index];
                const xOffset = Math.sin(newScroll * 0.001 + index) * 10;
                const yOffset = Math.cos(newScroll * 0.001 + index) * 10;

                if (blob) {
                    blob.style.transform = `translate(${initialPos.x + xOffset}px, ${initialPos.y + yOffset}px)`;
                }
            });

            currentScroll = newScroll;
            requestId = requestAnimationFrame(handleScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(requestId);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Animated Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Radial Gradient for Spotlight Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            {/* Glowing Blobs */}
            <div
                ref={(el) => (blobRefs.current[0] = el)}
                className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500/30 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob"
            ></div>
            <div
                ref={(el) => (blobRefs.current[1] = el)}
                className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-500/30 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-2000"
            ></div>
            <div
                ref={(el) => (blobRefs.current[2] = el)}
                className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-pink-500/30 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-4000"
            ></div>
        </div>
    );
};

export default Background;
