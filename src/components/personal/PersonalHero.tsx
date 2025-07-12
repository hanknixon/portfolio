import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { BackgroundPaths } from "../ui/background-paths";

const PersonalHero = () => {
  return (
    <section
      id="personal-home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: "#1d1d22" }}
    >
      {/* Animated Background Paths */}
      <BackgroundPaths />

      {/* Grid Background Pattern - keeping the original for layering */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left">
              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                  <Heart className="text-green-400" size={40} />
                  <Sparkles className="text-green-400" size={32} />
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 brutal-font">
                  Beyond the{" "}
                  <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                    Code
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                  Welcome to my personal space. Here's what drives me, inspires
                  me, and keeps me balanced outside of the professional world.
                </p>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0"
              >
                {[
                  { number: "21", label: "Years Young" },
                  { number: "3", label: "Languages" },
                  { number: "2", label: "Countries" },
                  { number: "∞", label: "Coffee Cups" },
                ].map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1 brutal-font">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-xs md:text-sm uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Side - Anime Image */}
            <div className="relative flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative"
              >
                {/* Glow Effect Behind Image */}
                <div className="absolute inset-0 bg-green-400/20 rounded-full blur-3xl scale-110 animate-pulse"></div>

                {/* Main Image */}
                <div className="relative z-10">
                  <img
                    src="/images/hankanime.png"
                    alt="Anime version of Hank"
                    className="w-80 h-80 md:w-96 md:h-96 object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-10 -left-10 w-6 h-6 bg-green-400/30 rounded-full blur-sm"
                ></motion.div>

                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-16 -right-8 w-4 h-4 bg-emerald-400/40 rounded-full blur-sm"
                ></motion.div>

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    x: [0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute top-1/2 -right-12 w-3 h-3 bg-green-300/30 rounded-full blur-sm"
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalHero;
