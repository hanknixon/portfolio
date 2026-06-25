import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  Youtube,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = ({ onPageChange }) => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/hanknixon",
      label: "GitHub",
      color: "hover:bg-gray-600",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/hanknixon/",
      label: "LinkedIn",
      color: "hover:bg-blue-600",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/h4nk_/",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@h4nkamv",
      label: "YouTube",
      color: "hover:bg-red-600",
    },
    {
      icon: Mail,
      href: "mailto:hank.enixon@gmail.com",
      label: "Email",
      color: "hover:bg-green-600",
    },
  ];

  return (
    <footer
      className="relative pt-32 pb-12 overflow-hidden"
      style={{ backgroundColor: "#1d1d22" }}
    >
      {/* Background Image with low opacity - Zoomed out, centered, and edge-faded */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none mix-blend-luminosity opacity-10">
        <img
          src="/images/backgroundfooter.png"
          alt=""
          className="h-full w-auto object-contain"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
          }}
        />
      </div>

      {/* Background Gradients for blending */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d22] via-[#1d1d22]/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-green-400/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full mb-12 gap-12">

          {/* Left: Title & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 max-w-md"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent brutal-font">
                Talk
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Ready to bring your ideas to life? Let's collaborate and create
              something amazing together. I'm always excited to work on new
              projects!
            </p>
          </motion.div>

          {/* Right: Navigate & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-16 md:w-1/2 md:justify-end"
          >
            {/* Navigate Column */}
            <div className="flex flex-col gap-6">
              <h3 className="text-white font-bold tracking-[0.2em] text-sm mb-2">NAVIGATE</h3>
              <div className="flex flex-col gap-4 text-gray-400 font-medium">
                <button onClick={() => onPageChange("professional")} className="text-left hover:text-green-400 transition-colors w-fit relative group">
                  Professional
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button onClick={() => onPageChange("personal")} className="text-left hover:text-green-400 transition-colors w-fit relative group">
                  Personal
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button onClick={() => onPageChange("contact")} className="text-left hover:text-green-400 transition-colors w-fit relative group">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </div>
            </div>

            {/* Socials Row */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[#1d1d22] font-bold tracking-[0.2em] text-sm mb-2 select-none invisible sm:visible">SOCIALS</h3>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 bg-[#2a2a30] border border-transparent rounded-full flex items-center justify-center text-gray-300 hover:text-white ${color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    aria-label={label}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Big Name Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full flex justify-center border-b border-gray-800 pb-4 mb-6 mt-8"
        >
          <h1 className="w-full text-center text-[22vw] md:text-[18vw] lg:text-[210px] xl:text-[260px] 2xl:text-[315px] leading-[0.8] font-bold text-white tracking-tighter whitespace-nowrap">
            Hank <span className="text-green-400">Nixon</span>
          </h1>
        </motion.div>

        {/* Bottom Legal Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm"
        >
          <p>© {new Date().getFullYear()} Hank Nixon. All rights reserved.</p>

          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3">
            <button onClick={() => onPageChange("privacy-policy")} className="hover:text-green-400 transition-colors">Privacy Policy</button>
            <button onClick={() => onPageChange("cookie-policy")} className="hover:text-green-400 transition-colors">Cookie Policy</button>
            <button onClick={() => onPageChange("legal-notice")} className="hover:text-green-400 transition-colors">Legal Notice</button>
            <button onClick={() => window.dispatchEvent(new Event('open-cookie-preferences'))} className="hover:text-green-400 transition-colors">Cookie Preferences</button>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
