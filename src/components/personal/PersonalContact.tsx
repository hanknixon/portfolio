import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  Send,
  Briefcase,
  Youtube,
} from "lucide-react";
import { motion } from "framer-motion";

const PersonalContact = ({ onPageChange }) => {
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
      href: "mailto:hankenixon456@gmail.com",
      label: "Email",
      color: "hover:bg-green-600",
    },
  ];

  return (
    <footer
      className="relative py-20 border-t border-green-400/20"
      style={{ backgroundColor: "#1d1d22" }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-400/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Let's{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent brutal-font">
                Talk
              </span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Always up for a coffee chat, discussing ideas, or just sharing
              stories about life, tech, and everything in between. Let's
              connect!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button
              onClick={() => onPageChange("contact")}
              className="group flex items-center gap-3 px-8 py-4 bg-green-400 text-black rounded-full font-semibold hover:bg-green-300 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/25 hover:scale-105"
            >
              <Send
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
              Drop me a message
            </button>

            <button
              onClick={() => onPageChange("professional")}
              className="group flex items-center gap-3 px-8 py-4 border-2 border-green-400/30 text-green-400 rounded-full font-semibold hover:bg-green-400/10 hover:border-green-400 transition-all duration-300"
            >
              <Briefcase size={20} />
              View my Professional Work
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-4 mb-12"
          >
            {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 bg-gray-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl flex items-center justify-center text-green-400 hover:text-white ${color} hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                aria-label={label}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </motion.div>

          {/* Location & Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4"
          >
            <div className="text-green-400 font-medium">
              Sharjah, United Arab Emirates
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent mb-6" />

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white brutal-font">
                  Hank Nixon
                </span>
              </div>

              <p className="text-gray-500">© 2025 All rights reserved.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default PersonalContact;
