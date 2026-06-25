import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const PRELOAD_IMAGES = [
  "/images/para1-1.png", "/images/para1-2.png", "/images/para1-3.png", "/images/para1-4.png",
  "/images/para2-1.jpeg", "/images/para2-2.jpeg", "/images/para2-3.jpeg", "/images/para2-4.jpeg", "/images/para2-5.jpeg", "/images/para2-6.jpeg",
  "/images/para3-1.jpg", "/images/para3-2.jpg", "/images/para3-3.jpg", "/images/para3-4.jpg",
  "/images/para4-1.jpg", "/images/para4-2.png", "/images/para4-3.png",
  "/images/para5-1.jpg", "/images/para5-2.jpg", "/images/para5-3.jpg", "/images/para5-4.jpg", "/images/para5-6.jpeg", "/images/para5-7.jpeg", "/images/para5-8.jpeg", "/images/para5-9.jpg"
];

const PersonalAbout = () => {
  const { ref: devicesRef, isVisible: devicesVisible } = useScrollAnimation();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    PRELOAD_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <>
      <section
        id="personal-about"
        className="py-20 relative"
        style={{ backgroundColor: "#1d1d22" }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">

            {/* A Little About Me Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-32 max-w-4xl mx-auto px-4 relative"
            >
              {/* Collage Overlay - Permanently mounted with pure CSS transitions for zero lag! */}
              <div className="absolute inset-0 pointer-events-none z-50 collage-container">
                {/* Computers Collage */}
                <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${hoveredSkill === 'computers' ? 'opacity-100' : 'opacity-0'}`}>
                  <img src="/images/para1-1.png" alt="Collage Left" className={`absolute -left-20 md:-left-44 lg:-left-56 top-20 w-28 md:w-36 aspect-[4/5] object-cover rounded-md shadow-2xl z-10 transition-all duration-500 ease-out origin-center ${hoveredSkill === 'computers' ? 'scale-100 rotate-[-12deg] translate-x-0' : 'scale-75 rotate-[-20deg] -translate-x-10'}`} />
                  <img src="/images/para1-2.png" alt="Collage Right 1" className={`absolute -right-20 md:-right-40 lg:-right-48 top-10 w-28 md:w-36 aspect-[4/5] object-cover rounded-md shadow-2xl z-10 transition-all duration-500 ease-out origin-center delay-75 ${hoveredSkill === 'computers' ? 'scale-100 rotate-[8deg] translate-x-0' : 'scale-75 rotate-[20deg] translate-x-10'}`} />
                  <img src="/images/para1-3.png" alt="Collage Right 2" className={`absolute -right-16 md:-right-48 lg:-right-60 top-56 w-32 md:w-48 aspect-[4/5] object-cover rounded-md shadow-2xl z-20 transition-all duration-500 ease-out origin-center delay-100 ${hoveredSkill === 'computers' ? 'scale-100 rotate-[-6deg] translate-x-0' : 'scale-75 rotate-[15deg] translate-x-10'}`} />
                </div>

                {/* Relationships Collage */}
                <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${hoveredSkill === 'relationships' ? 'opacity-100' : 'opacity-0'}`}>
                  {/* Left */}
                  <img src="/images/para2-1.jpeg" alt="Relationships Left 1" className={`absolute -left-16 md:-left-40 lg:-left-52 top-32 w-28 md:w-36 aspect-[4/5] object-cover rounded-md shadow-2xl z-10 transition-all duration-500 ease-out origin-center ${hoveredSkill === 'relationships' ? 'scale-100 rotate-[-12deg] translate-x-0' : 'scale-75 rotate-[-20deg] -translate-x-10'}`} />
                  <img src="/images/para2-2.jpeg" alt="Relationships Left 2" className={`absolute -left-24 md:-left-48 lg:-left-60 top-60 w-28 md:w-36 aspect-[4/5] object-cover rounded-md shadow-2xl z-20 transition-all duration-500 ease-out origin-center delay-75 ${hoveredSkill === 'relationships' ? 'scale-100 rotate-[4deg] translate-x-0' : 'scale-75 rotate-[-5deg] -translate-x-10'}`} />
                  <img src="/images/para2-6.jpeg" alt="Relationships Left 3" className={`absolute -left-16 md:-left-40 lg:-left-52 top-[22rem] w-32 md:w-48 aspect-[4/5] object-cover rounded-md shadow-2xl z-30 transition-all duration-500 ease-out origin-center delay-150 ${hoveredSkill === 'relationships' ? 'scale-100 rotate-[-8deg] translate-x-0' : 'scale-75 rotate-[-15deg] -translate-x-10'}`} />
                  {/* Right */}
                  <img src="/images/para2-3.jpeg" alt="Relationships Right 1" className={`absolute -right-20 md:-right-40 lg:-right-48 top-28 w-28 md:w-36 aspect-[4/5] object-cover rounded-md shadow-2xl z-10 transition-all duration-500 ease-out origin-center ${hoveredSkill === 'relationships' ? 'scale-100 rotate-[8deg] translate-x-0' : 'scale-75 rotate-[15deg] translate-x-10'}`} />
                  <img src="/images/para2-4.jpeg" alt="Relationships Right 2" className={`absolute -right-28 md:-right-48 lg:-right-60 top-52 w-28 md:w-36 aspect-[4/5] object-cover rounded-md shadow-2xl z-20 transition-all duration-500 ease-out origin-center delay-75 ${hoveredSkill === 'relationships' ? 'scale-100 rotate-[-6deg] translate-x-0' : 'scale-75 rotate-[5deg] translate-x-10'}`} />
                  <img src="/images/para2-5.jpeg" alt="Relationships Right 3" className={`absolute -right-24 md:-right-52 lg:-right-64 top-80 w-32 md:w-48 aspect-[4/5] object-cover rounded-md shadow-2xl z-30 transition-all duration-500 ease-out origin-center delay-150 ${hoveredSkill === 'relationships' ? 'scale-100 rotate-[4deg] translate-x-0' : 'scale-75 rotate-[10deg] translate-x-10'}`} />
                </div>

                {/* Designing Collage */}
                <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${hoveredSkill === 'designing' ? 'opacity-100' : 'opacity-0'}`}>
                  <img src="/images/para3-1.jpg" alt="Designing Left 1" className={`absolute -left-16 md:-left-40 lg:-left-52 top-[24rem] w-28 md:w-36 aspect-[4/5] object-cover rounded-md shadow-2xl z-10 transition-all duration-500 ease-out origin-center ${hoveredSkill === 'designing' ? 'scale-100 rotate-[-8deg] translate-x-0' : 'scale-75 rotate-[-15deg] -translate-x-10'}`} />
                  <img src="/images/para3-2.jpg" alt="Designing Left 2" className={`absolute -left-24 md:-left-48 lg:-left-60 top-[30rem] w-28 md:w-36 aspect-[4/5] object-cover rounded-md shadow-2xl z-20 transition-all duration-500 ease-out origin-center delay-75 ${hoveredSkill === 'designing' ? 'scale-100 rotate-[6deg] translate-x-0' : 'scale-75 rotate-[-5deg] -translate-x-10'}`} />
                  <img src="/images/para3-3.jpg" alt="Designing Right 1" className={`absolute -right-20 md:-right-40 lg:-right-48 top-[22rem] w-28 md:w-36 aspect-[4/5] object-cover rounded-md shadow-2xl z-10 transition-all duration-500 ease-out origin-center ${hoveredSkill === 'designing' ? 'scale-100 rotate-[5deg] translate-x-0' : 'scale-75 rotate-[15deg] translate-x-10'}`} />
                  <img src="/images/para3-4.jpg" alt="Designing Right 2" className={`absolute -right-28 md:-right-48 lg:-right-60 top-[28rem] w-28 md:w-36 aspect-[4/5] object-cover rounded-md shadow-2xl z-20 transition-all duration-500 ease-out origin-center delay-75 ${hoveredSkill === 'designing' ? 'scale-100 rotate-[-4deg] translate-x-0' : 'scale-75 rotate-[0deg] translate-x-10'}`} />
                </div>

                {/* Creative Collage */}
                <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${hoveredSkill === 'creative' ? 'opacity-100' : 'opacity-0'}`}>
                  <img src="/images/para4-1.jpg" alt="Creative Left 1" className={`absolute -left-16 md:-left-40 lg:-left-52 top-[32rem] w-28 md:w-36 aspect-[4/5] object-cover rounded-md shadow-2xl z-10 transition-all duration-500 ease-out origin-center ${hoveredSkill === 'creative' ? 'scale-100 rotate-[-8deg] translate-x-0' : 'scale-75 rotate-[-15deg] -translate-x-10'}`} />
                  <img src="/images/para4-2.png" alt="Creative Right 1" className={`absolute -right-20 md:-right-40 lg:-right-48 top-[30rem] w-28 md:w-36 aspect-[4/5] object-cover rounded-md shadow-2xl z-10 transition-all duration-500 ease-out origin-center ${hoveredSkill === 'creative' ? 'scale-100 rotate-[5deg] translate-x-0' : 'scale-75 rotate-[15deg] translate-x-10'}`} />
                  <img src="/images/para4-3.png" alt="Creative Right 2" className={`absolute -right-28 md:-right-48 lg:-right-60 top-[38rem] w-28 md:w-36 aspect-[4/5] object-cover rounded-md shadow-2xl z-20 transition-all duration-500 ease-out origin-center delay-75 ${hoveredSkill === 'creative' ? 'scale-100 rotate-[-4deg] translate-x-0' : 'scale-75 rotate-[0deg] translate-x-10'}`} />
                </div>

                {/* Hobbies Collage */}
                <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${hoveredSkill === 'hobbies' ? 'opacity-100' : 'opacity-0'}`}>
                  {/* Left Side */}
                  <img src="/images/para5-1.jpg" alt="Hobby 1" className={`absolute -left-12 md:-left-32 lg:-left-44 top-[22rem] w-28 md:w-36 aspect-[4/5] object-cover rounded-md shadow-2xl z-10 transition-all duration-500 ease-out origin-center ${hoveredSkill === 'hobbies' ? 'scale-100 rotate-[-10deg] translate-x-0' : 'scale-75 rotate-[-20deg] -translate-x-10'}`} />
                  <img src="/images/para5-2.jpg" alt="Hobby 2" className={`absolute -left-20 md:-left-52 lg:-left-68 top-[27rem] w-28 md:w-36 aspect-[4/5] object-cover rounded-md shadow-2xl z-20 transition-all duration-500 ease-out origin-center delay-75 ${hoveredSkill === 'hobbies' ? 'scale-100 rotate-[5deg] translate-x-0' : 'scale-75 rotate-[-5deg] -translate-x-10'}`} />
                  <img src="/images/para5-3.jpg" alt="Hobby 3" className={`absolute -left-10 md:-left-28 lg:-left-40 top-[33rem] w-28 md:w-36 aspect-[4/5] object-cover rounded-md shadow-2xl z-30 transition-all duration-500 ease-out origin-center delay-100 ${hoveredSkill === 'hobbies' ? 'scale-100 rotate-[-6deg] translate-x-0' : 'scale-75 rotate-[-15deg] -translate-x-10'}`} />
                  <img src="/images/para5-4.jpg" alt="Hobby 4" className={`absolute -left-24 md:-left-48 lg:-left-64 top-[38rem] w-28 md:w-36 aspect-[4/5] object-cover rounded-md shadow-2xl z-40 transition-all duration-500 ease-out origin-center delay-150 ${hoveredSkill === 'hobbies' ? 'scale-100 rotate-[8deg] translate-x-0' : 'scale-75 rotate-[0deg] -translate-x-10'}`} />

                  {/* Right Side */}
                  <img src="/images/para5-6.jpeg" alt="Hobby 5" className={`absolute -right-12 md:-right-32 lg:-right-44 top-[20rem] w-28 md:w-36 aspect-[4/5] object-cover rounded-md shadow-2xl z-10 transition-all duration-500 ease-out origin-center ${hoveredSkill === 'hobbies' ? 'scale-100 rotate-[12deg] translate-x-0' : 'scale-75 rotate-[20deg] translate-x-10'}`} />
                  <img src="/images/para5-7.jpeg" alt="Hobby 6" className={`absolute -right-24 md:-right-52 lg:-right-68 top-[25rem] w-28 md:w-36 aspect-[4/5] object-cover rounded-md shadow-2xl z-20 transition-all duration-500 ease-out origin-center delay-75 ${hoveredSkill === 'hobbies' ? 'scale-100 rotate-[-4deg] translate-x-0' : 'scale-75 rotate-[5deg] translate-x-10'}`} />
                  <img src="/images/para5-8.jpeg" alt="Hobby 7" className={`absolute -right-16 md:-right-36 lg:-right-48 top-[31rem] w-28 md:w-36 aspect-[4/5] object-cover rounded-md shadow-2xl z-30 transition-all duration-500 ease-out origin-center delay-100 ${hoveredSkill === 'hobbies' ? 'scale-100 rotate-[6deg] translate-x-0' : 'scale-75 rotate-[15deg] translate-x-10'}`} />
                  <img src="/images/para5-9.jpg" alt="Hobby 8" className={`absolute -right-28 md:-right-56 lg:-right-72 top-[36rem] w-28 md:w-36 aspect-[4/5] object-cover rounded-md shadow-2xl z-40 transition-all duration-500 ease-out origin-center delay-150 ${hoveredSkill === 'hobbies' ? 'scale-100 rotate-[-8deg] translate-x-0' : 'scale-75 rotate-[0deg] translate-x-10'}`} />
                </div>
              </div>
              <h3 className="text-green-400 font-bold tracking-widest text-sm md:text-base uppercase mb-10 brutal-font">
                A Little Bit About Me
              </h3>

              <div className="space-y-8 text-lg md:text-2xl text-gray-200 font-light leading-[1.7]">
                <p>
                  Hey there! I'm someone who's always been fascinated by <span
                    onMouseEnter={() => setHoveredSkill('computers')}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="bg-green-500/20 text-green-300 px-1 py-0.5 rounded cursor-pointer transition-colors duration-300 hover:bg-green-500/40 relative z-50"
                  >computers, games, and how things work behind the scenes</span>. Growing up, I spent countless hours exploring hardware, software, and the ideas behind game development. That curiosity eventually grew into a dream of one day working in the gaming industry as a Game Developer. Beyond technology, I value <span
                    onMouseEnter={() => setHoveredSkill('relationships')}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="bg-green-500/20 text-green-300 px-1 py-0.5 rounded cursor-pointer transition-colors duration-300 hover:bg-green-500/40 relative z-50"
                  >genuine relationships, faith, and the people who have supported me</span> along the way. My friends, family, and God have played a huge role in shaping who I am today.
                </p>

                <p>
                  Back in high school, I developed a passion for <span
                    onMouseEnter={() => setHoveredSkill('designing')}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="bg-green-500/20 text-green-300 px-1 py-0.5 rounded cursor-pointer transition-colors duration-300 hover:bg-green-500/40 relative z-50"
                  >designing posters and editing videos</span>. What started as a hobby eventually became freelance work during university, where I created designs for clients and my department alike. Over time, my focus shifted toward building software that solves real-world problems while continuing to explore <span
                    onMouseEnter={() => setHoveredSkill('creative')}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="bg-green-500/20 text-green-300 px-1 py-0.5 rounded cursor-pointer transition-colors duration-300 hover:bg-green-500/40 relative z-50"
                  >3D rendering, game development, modding, and other creative technologies</span>. These projects have constantly challenged me to learn, experiment, and grow as both a developer and designer.
                </p>

                <p>
                  When I'm not creating, you'll probably find me <span
                    onMouseEnter={() => setHoveredSkill('hobbies')}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onClick={() => setHoveredSkill(hoveredSkill === 'hobbies' ? null : 'hobbies')}
                    className="bg-green-500/20 text-green-300 px-1 py-0.5 rounded cursor-pointer transition-colors duration-300 hover:bg-green-500/40 relative z-50"
                  >trying new food</span>, listening to <span
                    onMouseEnter={() => setHoveredSkill('hobbies')}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onClick={() => setHoveredSkill(hoveredSkill === 'hobbies' ? null : 'hobbies')}
                    className="bg-green-500/20 text-green-300 px-1 py-0.5 rounded cursor-pointer transition-colors duration-300 hover:bg-green-500/40 relative z-50"
                  >comfort music</span>, playing <span
                    onMouseEnter={() => setHoveredSkill('hobbies')}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onClick={() => setHoveredSkill(hoveredSkill === 'hobbies' ? null : 'hobbies')}
                    className="bg-green-500/20 text-green-300 px-1 py-0.5 rounded cursor-pointer transition-colors duration-300 hover:bg-green-500/40 relative z-50"
                  >story-driven games</span>, or <span
                    onMouseEnter={() => setHoveredSkill('hobbies')}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onClick={() => setHoveredSkill(hoveredSkill === 'hobbies' ? null : 'hobbies')}
                    className="bg-green-500/20 text-green-300 px-1 py-0.5 rounded cursor-pointer transition-colors duration-300 hover:bg-green-500/40 relative z-50"
                  >capturing photographs</span> of people, places, and moments worth remembering. I'm drawn to experiences that spark curiosity and nostalgia—whether that's discovering a new dish, exploring a beautifully crafted game world, or preserving meaningful moments through photography.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Where I Work Section Container */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#1d1d22" }}>

        {/* Subtle Abstract Background */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-[0.06] mix-blend-luminosity"
          style={{
            backgroundImage: "url('/images/whatiworkbg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />
        {/* Top/Bottom gradient fades to blend smoothly with adjacent sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1d1d22] via-transparent to-[#1d1d22] pointer-events-none z-0 opacity-80" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Where I Work Title Section */}
            <motion.div
              ref={devicesRef}
              initial={{ opacity: 0, y: 50 }}
              animate={
                devicesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12 mb-12"
            >
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 brutal-font">
                  Where I{" "}
                  <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                    Work
                  </span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto px-4 leading-relaxed">
                  <span className="text-green-400/80 font-medium">* Note:</span> This picture is AI generated. My actual setup is currently a mess, so I had to use AI to clean it up for the portfolio!
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 mt-8 mb-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="relative w-full rounded-[2rem] overflow-hidden border border-gray-800 bg-[#111115] shadow-[0_0_50px_rgba(0,0,0,0.5)] group">
              <img
                src="/images/setup.png"
                alt="My Workspace"
                className="w-full h-auto object-cover opacity-90 transition-all duration-700 group-hover:opacity-100 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalAbout;
