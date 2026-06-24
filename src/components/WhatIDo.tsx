import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from './hooks/useScrollAnimation';

const roles = [
  {
    title: "Software Developer",
    description: "I have extensive experience in architecting and building complex, highly scalable backend systems. I engineer robust solutions that drive performance, ensuring enterprise-grade security and reliability."
  },
  {
    title: "Frontend Developer",
    description: "Crafting pixel-perfect, highly interactive, and performant web interfaces. I specialize in modern JavaScript frameworks to deliver seamless, engaging user experiences."
  },
  {
    title: "UI/UX Designer",
    description: "Designing intuitive, user-centric experiences. My process focuses on merging aesthetic elegance with deep usability to create products that truly resonate with users."
  },
  {
    title: "GFX Artist",
    description: "Creating visually striking, high-fidelity graphical assets and immersive visual identities. I bring brands to life through compelling storytelling and meticulous attention to detail."
  }
];

const skills = [
  "Python",
  "React.js",
  "Next.js",
  "FastAPI",
  "TypeScript",
  "Node.js",
  "Java",
  "JavaScript",
  "PHP",
  "SQL",
  "Dart",
  "Flutter",
  "iOS Development",
  "Product Design",
  "Research",
  "Development"
];

export const WhatIDo = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full my-24 flex flex-col"
    >


      <div className="w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] flex flex-col border-t border-[#333]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-luminosity z-0"
          style={{
            backgroundImage: "url('/images/bgwhatdo.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />
        
        {/* Background Gradient Fades */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1d1d22] via-transparent to-[#1d1d22] pointer-events-none z-0" />

        <div className="relative z-10 flex flex-col w-full">
          {roles.map((role, index) => (
          <div
            key={index}
            className="group relative w-full border-b border-[#333] cursor-pointer overflow-hidden transition-colors duration-500"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Background Fill on Hover */}
            <div
              className={`absolute inset-0 bg-green-400 transition-transform duration-500 ease-out origin-left ${hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'
                }`}
            />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h2 className={`text-5xl md:text-7xl lg:text-8xl brutal-font-black tracking-tight m-0 leading-none uppercase transition-colors duration-500 ${hoveredIndex === index ? 'text-black' : 'text-white'}`}>
                {role.title}
              </h2>

              <div className="md:w-[40%] h-[60px] md:h-auto flex items-center justify-end">
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="text-right"
                    >
                      <p className="text-black text-sm md:text-base font-semibold leading-relaxed">
                        {role.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>

      {/* Auto-scrolling Marquee Bar */}
      <div className="w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] mt-16 md:mt-24 bg-black py-4 md:py-6 overflow-hidden flex items-center border-y border-[#333]">
        <div className="flex whitespace-nowrap w-max animate-marquee">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center">
              {skills.map((skill, index) => (
                <React.Fragment key={`${i}-${index}`}>
                  <span className="text-white text-xl md:text-3xl brutal-font-bold tracking-wide lowercase px-6">
                    {skill}
                  </span>
                  <span className="text-gray-600 text-xl md:text-2xl px-2">•</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
