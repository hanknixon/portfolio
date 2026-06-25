import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BackgroundPaths } from "../ui/background-paths";

const ChangingImageCard = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/images/hankper1.png",
    "/images/hankper2.png",
    "/images/hankper3.png",
    "/images/hankper4.png",
    "/images/hankper5.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-gray-800 relative">
      {images.map((img, index) => (
        <img
          key={img}
          src={img}
          alt={`Hank Personal ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "none" }}
        />
      ))}
    </div>
  );
};

const PersonalHero = () => {
  return (
    <section
      id="personal-home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: "#1d1d22" }}
    >
      {/* Grid Background Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full pt-20 md:pt-32 pb-20 flex flex-col items-center overflow-visible">
        <div className="flex flex-col items-center relative w-full md:w-[85vw] md:max-w-none">
          {/* Middle Splitting Line - shorter height */}
          <div className="hidden md:block absolute top-[15%] bottom-[35%] left-1/2 w-px bg-gray-600/60 z-30 -translate-x-1/2"></div>

          {/* Top part: Hello I'm Hank + Changing Image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 items-center z-20 w-full mb-4 md:mb-[-40px] gap-12 md:gap-0"
          >
            {/* Left Side */}
            <div className="flex justify-center md:justify-start items-center py-4 md:py-8 md:pr-12 h-full">
              <div className="w-full text-center md:text-left md:-translate-y-16 px-4 md:px-0">
                <h2 className="text-5xl md:text-[5vw] lg:text-[5.5rem] font-bold text-white mb-6 tracking-tight whitespace-nowrap leading-none md:ml-[-0.25rem]">
                  Hello, I'm <span className="text-green-400">Hank</span>
                </h2>
                <p className="text-base md:text-lg text-gray-400 leading-relaxed font-medium">
                  Welcome to my personal space. Here's what drives me and keeps me balanced outside of the professional world. I love diving into hobbies like gaming, creating 3D renders, photography, and video editing. These creative outlets, along with hitting the gym and exploring guides from other creators, help me stay focused and bring fresh perspectives to my professional work.
                </p>
              </div>
            </div>
            
            {/* Right Side: Changing Image Card */}
            <div className="flex justify-center md:justify-end items-center py-4 md:py-8 h-full md:pr-[25%] lg:pr-[30%]">
              <div className="flex-shrink-0 w-[80vw] h-[100vw] max-w-[20rem] max-h-[28rem] md:max-w-none md:max-h-none md:w-[26rem] md:h-[36rem] bg-gray-800 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-700/50 relative z-20 md:-translate-y-16">
                <ChangingImageCard />
              </div>
            </div>
          </motion.div>

          {/* Bottom part: BEYOND THE CODE overlapping in front */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="z-30 relative w-full flex justify-center pointer-events-none mt-8 md:mt-4"
          >
            <h1 
              className="text-[10vw] md:text-[10vw] font-black text-gray-100 leading-none tracking-tighter whitespace-nowrap drop-shadow-2xl brutal-font" 
              style={{ textShadow: "0 10px 40px rgba(0,0,0,0.8)" }}
            >
              BEYOND THE CODE
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalHero;
