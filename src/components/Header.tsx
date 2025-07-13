"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Heart,
  Mail,
  Globe,
  Menu,
  X,
  ChevronUp,
  ArrowLeft,
} from "lucide-react";

const Header = ({
  onPageChange,
  currentPage,
}: {
  onPageChange?: (page: "professional" | "personal" | "contact") => void;
  currentPage?: "professional" | "personal" | "contact";
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>(
    currentPage === "professional"
      ? "Professional"
      : currentPage === "personal"
      ? "Personal"
      : currentPage === "contact"
      ? "Contact"
      : "Professional"
  );
  const [isMobile, setIsMobile] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Update activeTab when currentPage changes
  useEffect(() => {
    setActiveTab(
      currentPage === "professional"
        ? "Professional"
        : currentPage === "personal"
        ? "Personal"
        : currentPage === "contact"
        ? "Contact"
        : "Professional"
    );
  }, [currentPage]);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      setScrolled(currentScrollY > 50);

      // Navbar visibility logic
      if (currentScrollY < heroHeight * 0.8) {
        // In hero section - always show navbar
        setShowNavbar(true);
      } else {
        // Past hero section - smart hide/show based on scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > heroHeight) {
          // Scrolling down and past hero - hide navbar
          setShowNavbar(false);
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up - show navbar
          setShowNavbar(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    // Add throttling to prevent excessive re-renders
    let timeoutId: NodeJS.Timeout;
    const throttledHandleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(handleScroll, 10);
    };

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    {
      label: "Professional",
      href: "#professional",
      active: currentPage === "professional",
      icon: User,
      onClick: () => {
        setActiveTab("Professional");
        onPageChange?.("professional");
        setIsMenuOpen(false); // Close mobile menu after selection
      },
    },
    {
      label: "Personal",
      href: "#personal",
      active: currentPage === "personal",
      icon: Heart,
      onClick: () => {
        setActiveTab("Personal");
        onPageChange?.("personal");
        setIsMenuOpen(false); // Close mobile menu after selection
      },
    },
    {
      label: "Contact",
      href: "#contact",
      active: currentPage === "contact",
      icon: Mail,
      onClick: () => {
        setActiveTab("Contact");
        onPageChange?.("contact");
        setIsMenuOpen(false); // Close mobile menu after selection
      },
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!mounted) return null;

  // Calculate if we're in hero section with proper window check
  const isInHeroSection = mounted && lastScrollY < window.innerHeight * 0.6;

  return (
    <>
      {/* Traditional Header for Logo and Language - Only show on professional page */}
      {currentPage === "professional" && (
        <header
          className={`fixed top-0 w-full z-40 transition-all duration-300 ${
            scrolled ? "bg-black/20 backdrop-blur-sm" : "bg-transparent"
          }`}
          style={{ backgroundColor: scrolled ? "#1d1d22aa" : "transparent" }}
        >
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="text-2xl font-bold text-white brutal-font">
                Hank Nixon
              </div>

              {/* Download Resume Button - Desktop */}
              <div className="hidden md:flex items-center">
                <a
                  href="/resume/Hank Emmanuel Nixon Resume.pdf"
                  download="Hank Emmanuel Nixon Resume.pdf"
                  className="flex items-center gap-2 px-4 py-2 bg-green-400 text-black rounded-full text-sm font-medium hover:bg-green-300 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/25 hover:scale-105"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15V3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Download Resume
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white z-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </header>
      )}

      {/* Anime Navigation Bar - HIDDEN WHEN MOBILE MENU IS OPEN */}
      <AnimatePresence>
        {showNavbar && !isMenuOpen && (
          <motion.div
            className={`fixed ${
              currentPage === "professional" ? "top-16" : "top-4"
            } left-0 right-0 z-[9999]`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-center pt-4">
              <motion.div
                className="flex items-center gap-3 border border-white/10 backdrop-blur-lg py-2 px-2 rounded-full shadow-lg relative"
                style={{ backgroundColor: "#1d1d22aa" }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.label;
                  const isHovered = hoveredTab === item.label;

                  return (
                    <button
                      key={item.label}
                      onClick={(e) => {
                        e.preventDefault();
                        item.onClick();
                      }}
                      onMouseEnter={() => setHoveredTab(item.label)}
                      onMouseLeave={() => setHoveredTab(null)}
                      className={`relative cursor-pointer text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {item.active && (
                        <motion.div
                          className="absolute inset-0 rounded-full -z-10 overflow-hidden"
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: [0.3, 0.5, 0.3],
                            scale: [1, 1.03, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="absolute inset-0 bg-green-400/25 rounded-full blur-md" />
                          <div className="absolute inset-[-4px] bg-green-400/20 rounded-full blur-xl" />
                          <div className="absolute inset-[-8px] bg-green-400/15 rounded-full blur-2xl" />
                          <div className="absolute inset-[-12px] bg-green-400/5 rounded-full blur-3xl" />

                          <div
                            className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/20 to-green-400/0"
                            style={{
                              animation: "shine 3s ease-in-out infinite",
                            }}
                          />
                        </motion.div>
                      )}

                      <motion.span
                        className="hidden md:inline relative z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.label}
                      </motion.span>
                      <motion.span
                        className="md:hidden relative z-10"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon size={18} strokeWidth={2.5} />
                      </motion.span>

                      <AnimatePresence>
                        {isHovered && !item.active && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute inset-0 bg-white/10 rounded-full -z-10"
                          />
                        )}
                      </AnimatePresence>

                      {item.active && (
                        <motion.div
                          layoutId="anime-mascot"
                          className="absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        >
                          <div className="relative w-12 h-12">
                            <motion.div
                              className="absolute w-10 h-10 bg-green-400 rounded-full left-1/2 -translate-x-1/2"
                              animate={
                                hoveredTab
                                  ? {
                                      scale: [1, 1.1, 1],
                                      rotate: [0, -5, 5, 0],
                                      transition: {
                                        duration: 0.5,
                                        ease: "easeInOut",
                                      },
                                    }
                                  : {
                                      y: [0, -3, 0],
                                      transition: {
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                      },
                                    }
                              }
                            >
                              <motion.div
                                className="absolute w-2 h-2 bg-black rounded-full"
                                animate={
                                  hoveredTab
                                    ? {
                                        scaleY: [1, 0.2, 1],
                                        transition: {
                                          duration: 0.2,
                                          times: [0, 0.5, 1],
                                        },
                                      }
                                    : {}
                                }
                                style={{ left: "25%", top: "40%" }}
                              />
                              <motion.div
                                className="absolute w-2 h-2 bg-black rounded-full"
                                animate={
                                  hoveredTab
                                    ? {
                                        scaleY: [1, 0.2, 1],
                                        transition: {
                                          duration: 0.2,
                                          times: [0, 0.5, 1],
                                        },
                                      }
                                    : {}
                                }
                                style={{ right: "25%", top: "40%" }}
                              />
                              <motion.div
                                className="absolute w-2 h-1.5 bg-green-200 rounded-full"
                                animate={{
                                  opacity: hoveredTab ? 0.8 : 0.6,
                                }}
                                style={{ left: "15%", top: "55%" }}
                              />
                              <motion.div
                                className="absolute w-2 h-1.5 bg-green-200 rounded-full"
                                animate={{
                                  opacity: hoveredTab ? 0.8 : 0.6,
                                }}
                                style={{ right: "15%", top: "55%" }}
                              />

                              <motion.div
                                className="absolute w-4 h-2 border-b-2 border-black rounded-full"
                                animate={
                                  hoveredTab
                                    ? {
                                        scaleY: 1.5,
                                        y: -1,
                                      }
                                    : {
                                        scaleY: 1,
                                        y: 0,
                                      }
                                }
                                style={{ left: "30%", top: "60%" }}
                              />
                              <AnimatePresence>
                                {hoveredTab && (
                                  <>
                                    <motion.div
                                      initial={{ opacity: 0, scale: 0 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0 }}
                                      className="absolute -top-1 -right-1 w-2 h-2 text-green-300"
                                    >
                                      ✨
                                    </motion.div>
                                    <motion.div
                                      initial={{ opacity: 0, scale: 0 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0 }}
                                      transition={{ delay: 0.1 }}
                                      className="absolute -top-2 left-0 w-2 h-2 text-green-300"
                                    >
                                      ✨
                                    </motion.div>
                                  </>
                                )}
                              </AnimatePresence>
                            </motion.div>
                            <motion.div
                              className="absolute -bottom-1 left-1/2 w-4 h-4 -translate-x-1/2"
                              animate={
                                hoveredTab
                                  ? {
                                      y: [0, -4, 0],
                                      transition: {
                                        duration: 0.3,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                      },
                                    }
                                  : {
                                      y: [0, 2, 0],
                                      transition: {
                                        duration: 1,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.5,
                                      },
                                    }
                              }
                            >
                              <div className="w-full h-full bg-green-400 rotate-45 transform origin-center" />
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </button>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button - Shows when navbar is hidden and not in hero */}
      <AnimatePresence>
        {!showNavbar && !isInHeroSection && !isMenuOpen && (
          <motion.button
            onClick={scrollToTop}
            className="fixed top-4 right-4 z-[9999] bg-green-400 text-black p-3 rounded-full shadow-lg hover:bg-green-300 transition-colors"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* IMPROVED Mobile Navigation with Back Button */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-[9998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Back Button */}
            <motion.button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 left-6 text-white z-50 flex items-center gap-2 hover:text-green-400 transition-colors"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArrowLeft size={24} />
              <span className="text-lg font-medium">Back</span>
            </motion.button>

            {/* Close Button */}
            <motion.button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-white z-50 hover:text-green-400 transition-colors"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <X size={24} />
            </motion.button>

            {/* Menu Content */}
            <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
              {/* Navigation Items */}
              <div className="flex flex-col items-center space-y-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    className={`text-3xl font-medium transition-colors duration-200 ${
                      item.active
                        ? "text-green-400"
                        : "text-white/70 hover:text-white"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      item.onClick();
                    }}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              {/* Download Resume Button */}
              <motion.a
                href="/resume/Hank Emmanuel Nixon Resume.pdf"
                download="Hank Emmanuel Nixon Resume.pdf"
                className="flex items-center gap-3 px-8 py-4 bg-green-400 text-black rounded-full text-lg font-medium hover:bg-green-300 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/25"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15V3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
