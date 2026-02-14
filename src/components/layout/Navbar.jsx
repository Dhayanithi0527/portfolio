
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "../ui/SmoothScroll";
import { Download } from "lucide-react";
import { socialLinks } from "../../lib/data";


const Navbar = () => {
    const lenis = useLenis();
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Active Section Observer
    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Map id to nav name (approximate)
                        const id = entry.target.id;
                        if (id === "home") setActiveSection("Home");
                        if (id === "about") setActiveSection("About");
                        if (id === "projects") setActiveSection("Projects");
                        if (id === "contact") setActiveSection("Contact");
                    }
                });
            },
            { threshold: 0.3 } // Trigger when 30% visible
        );

        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false); // Close mobile menu if open
        if (!lenis) {
            // Fallback if lenis not ready
            const element = document.querySelector(href);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
            return;
        }
        lenis.scrollTo(href, { duration: 1.5 });
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/50 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <a
                    href="#home"
                    onClick={(e) => handleNavClick(e, "#home")}
                    className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent cursor-pointer"
                >
                    PORTFOLIO.
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={`relative text-sm font-medium transition-colors ${activeSection === link.name ? "text-white" : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {link.name}
                            {activeSection === link.name && (
                                <motion.span
                                    layoutId="underline"
                                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500"
                                />
                            )}
                        </a>
                    ))}

                    {/* Resume Button */}
                    <a
                        href={socialLinks.resume}
                        download
                        className="ml-4 flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-full transition-all text-sm text-gray-300 hover:text-white"
                    >
                        <span>Resume</span>
                        <Download size={14} />
                    </a>

                </div>

                {/* Mobile Menu Button */}
                <div
                    className="md:hidden text-white text-2xl cursor-pointer z-[60] relative"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✕" : "☰"}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        className="fixed inset-0 h-screen w-screen bg-black/90 z-50 flex items-center justify-center p-4"
                    >
                        {/* Staggered Container */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.1
                                    }
                                }
                            }}
                            className="flex flex-col items-center gap-8"
                        >
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    variants={{
                                        hidden: { y: 20, opacity: 0 },
                                        visible: { y: 0, opacity: 1 }
                                    }}
                                    className={`text-3xl font-bold ${activeSection === link.name ? "text-white" : "text-gray-500 hover:text-white"
                                        }`}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
