import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, MousePointer2 } from 'lucide-react';

interface HeaderProps {
  onPageChange?: (page: "professional" | "personal" | "contact") => void;
  currentPage?: "professional" | "personal" | "contact";
}

export const Header: React.FC<HeaderProps> = ({ onPageChange, currentPage }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [activeTab, setActiveTab] = useState(
    currentPage ? currentPage.charAt(0).toUpperCase() + currentPage.slice(1) : "Professional"
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (currentPage) {
      setActiveTab(currentPage.charAt(0).toUpperCase() + currentPage.slice(1));
    }
  }, [currentPage]);

  const isExpanded = isHovered || isMobileOpen;

  const navItems = [
    { name: 'Professional', href: '#professional', id: 'professional' },
    { name: 'Personal', href: '#personal', id: 'personal' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    e.preventDefault();
    setActiveTab(item.name);
    setIsMobileOpen(false);
    setIsHovered(false);

    if (onPageChange) {
      onPageChange(item.id as "professional" | "personal" | "contact");
    }
  };

  // Bespoke Apple Spring Profiles
  const islandVariants = {
    collapsed: {
      width: "160px",
      height: "36px",
      borderBottomLeftRadius: "18px",
      borderBottomRightRadius: "18px",
      transition: {
        type: "spring",
        stiffness: 420,
        damping: 38, // High damping acts as a strict brake; prevents wobble on close
        mass: 0.8
      }
    },
    expanded: {
      width: isMobile ? "94vw" : "640px",
      height: "auto",
      borderBottomLeftRadius: "36px",
      borderBottomRightRadius: "36px",
      transition: {
        type: "spring",
        stiffness: 420,
        damping: 38, // High damping acts as a strict brake; prevents wobble on close
        mass: 0.8
      }
    }
  };

  return (
    <>
      {/* MOBILE BACKDROP: Tapping anywhere outside the opened island sucks it back up */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-[9998]"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <header className="fixed top-0 left-1/2 -translate-x-1/2 z-[9999] flex justify-center pointer-events-none">
        <motion.nav
          initial="collapsed"
          animate={isExpanded ? "expanded" : "collapsed"}
          variants={islandVariants}
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={() => !isMobile && setIsHovered(false)}
          onClick={() => isMobile && !isExpanded && setIsMobileOpen(true)}
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", "Inter", sans-serif',
            WebkitFontSmoothing: 'antialiased',
          }}
          className="pointer-events-auto relative bg-black text-white origin-top border border-t-0 border-[#2c2c2e] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden block box-border"
        >
          <AnimatePresence>

            {/* STATE 1: MINIMIZED MAC NOTCH */}
            {!isExpanded && (
              <motion.div
                key="collapsed-notch"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.12, delay: 0.08 } }}
                exit={{ opacity: 0, transition: { duration: 0.04 } }}
                className="absolute inset-0 flex items-center justify-center cursor-pointer select-none"
              >
                <motion.div
                  animate={{ y: [0, -2, 0, 2, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                >
                  <MousePointer2 className="w-4 h-4 text-[#f2f2f7] fill-transparent" />
                </motion.div>
              </motion.div>
            )}

            {/* STATE 2: EXPANDED DYNAMIC ISLAND */}
            {isExpanded && (
              <motion.div
                key="expanded-island"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)", transition: { duration: 0.18, delay: 0.04 } }}
                exit={{ opacity: 0, filter: "blur(4px)", transition: { duration: 0.08 } }}
                className="p-4 flex flex-col select-none w-full box-border"
              >
                {/* Bottom Bar inside Island: Links + CTA */}
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">

                  {/* iOS Segmented Control */}
                  <div className="flex flex-col md:flex-row bg-[#1c1c1e] p-1.5 rounded-2xl md:rounded-full gap-1">
                    {navItems.map((item) => {
                      const isActive = activeTab === item.name;
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={(e) => handleItemClick(e, item)}
                          className={`relative px-5 py-3 md:py-2 text-sm font-medium rounded-xl md:rounded-full text-center transition-colors ${isActive ? 'text-white font-semibold' : 'text-[#8e8e93] hover:text-white'
                            }`}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="activeSegmentedPill"
                              className="absolute inset-0 bg-[#3a3a3c] rounded-xl md:rounded-full -z-10 shadow-sm"
                              transition={{ type: "spring", stiffness: 450, damping: 32 }}
                            />
                          )}
                          <span className="relative z-10">{item.name}</span>
                        </a>
                      );
                    })}
                  </div>

                  {/* Resume CTA */}
                  <a
                    href="/resume/Hank Emmanuel Nixon Resume.pdf"
                    download="Hank_Nixon_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#10b981] hover:bg-[#059669] text-black px-6 py-3 md:py-2 rounded-xl md:rounded-full text-sm font-semibold transition-transform active:scale-95"
                  >
                    <span>Download Resume</span>
                    <Download size={16} strokeWidth={2.5} />
                  </a>

                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </motion.nav>
      </header>
    </>
  );
};