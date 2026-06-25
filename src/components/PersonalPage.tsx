import React from "react";
import { motion } from "framer-motion";
import { BGPattern } from "./ui/bg-pattern";
import { Heart, Coffee, Music, Camera, Book, Gamepad2 } from "lucide-react";

const ChangingImageCard = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const images = [
    "/images/hankper1.png",
    "/images/hankper2.png",
    "/images/hankper3.png",
    "/images/hankper4.png",
    "/images/hankper5.png",
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-gray-800 relative">
      {images.map((img, index) => (
        <img
          key={img}
          src={img}
          alt={`Hank Personal ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover ${index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          style={{ transition: "none" }}
        />
      ))}
    </div>
  );
};

const PersonalPage = () => {
  const hobbies = [
    {
      icon: Coffee,
      title: "Coffee Enthusiast",
      description:
        "Exploring different brewing methods and coffee cultures around the world.",
      color: "from-amber-400 to-orange-500",
    },
    {
      icon: Music,
      title: "Music Lover",
      description:
        "From classical to electronic, music fuels my creativity and focus.",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Camera,
      title: "Photography",
      description:
        "Capturing moments and perspectives through the lens of creativity.",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Book,
      title: "Reading",
      description:
        "Always learning through books on technology, philosophy, and science fiction.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description:
        "Strategic games and indie titles that challenge problem-solving skills.",
      color: "from-red-400 to-pink-500",
    },
  ];

  const values = [
    "Continuous Learning",
    "Creative Problem Solving",
    "Meaningful Connections",
    "Quality over Quantity",
    "Work-Life Balance",
  ];

  return (
    <div
      className="min-h-screen relative"
      style={{ backgroundColor: "#1d1d22" }}
    >
      {/* Background Pattern */}
      <BGPattern
        variant="grid"
        mask="fade-edges"
        size={50}
        fill="rgba(16, 185, 129, 0.1)"
        className="fixed inset-0"
      />

      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-32 relative flex flex-col items-center"
            >
              {/* Top part: Hello I'm Hank + Changing Image */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 z-20 w-full max-w-5xl mx-auto mb-[-40px] md:mb-[-80px]">
                {/* Left Side */}
                <div className="flex-1 text-left flex flex-col justify-center md:items-end md:text-right">
                  <div className="max-w-md">
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">Hello, I'm Hank</h2>
                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                      Welcome to my personal space. Here's what drives me, inspires
                      me, and keeps me balanced outside of the professional world.
                    </p>
                  </div>
                </div>

                {/* Separation Line */}
                <div className="hidden md:block w-px h-56 bg-gray-700/80"></div>

                {/* Right Side: Changing Image Card */}
                <div className="flex-1 flex justify-center md:justify-start">
                  <div className="flex-shrink-0 w-64 h-80 md:w-72 md:h-[22rem] bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 relative z-20">
                    <div className="absolute top-4 left-4 w-3 h-3 bg-green-400 rounded-full z-30"></div>
                    <ChangingImageCard />
                  </div>
                </div>
              </div>

              {/* Bottom part: BEYOND THE CODE overlapping in front */}
              <div className="z-30 relative w-full text-center pointer-events-none mt-10 md:mt-0">
                <h1
                  className="text-[13vw] md:text-[11vw] font-black text-gray-100 leading-none tracking-tighter whitespace-nowrap drop-shadow-2xl brutal-font"
                  style={{ textShadow: "0 10px 40px rgba(0,0,0,0.8)" }}
                >
                  BEYOND THE CODE
                </h1>
              </div>
            </motion.div>

            {/* About Me Personal */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-20"
            >
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl rounded-2xl p-8 border border-green-400/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-400 rounded-xl flex items-center justify-center">
                    <Heart className="text-black" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Who I Am</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 text-gray-300 leading-relaxed">
                  <div>
                    <p className="mb-4">
                      I'm someone who believes technology should enhance human
                      experiences, not replace them. When I'm not coding, you'll
                      find me exploring new coffee shops, getting lost in a good
                      book, or planning my next adventure.
                    </p>
                    <p>
                      Born in the UAE and now based in Kerala, India, I've
                      always been fascinated by how different cultures approach
                      problem-solving and creativity.
                    </p>
                  </div>
                  <div>
                    <p className="mb-4">
                      My journey in tech started with curiosity about how things
                      work, and that same curiosity drives me to explore
                      everything from sustainable living to astrophotography.
                    </p>
                    <p>
                      I believe in building meaningful connections, continuous
                      learning, and creating solutions that make a positive
                      impact.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Hobbies & Interests */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-center text-white mb-12">
                What I Love Doing
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hobbies.map((hobby, index) => {
                  const Icon = hobby.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      className="group bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl rounded-xl p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-300 hover:-translate-y-2"
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${hobby.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {hobby.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {hobby.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            {/* Values & Philosophy */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-20"
            >
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl rounded-2xl p-8 border border-green-400/20">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  What I Believe In
                </h2>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="bg-green-400/10 border border-green-400/30 rounded-lg p-4 text-center hover:bg-green-400/20 transition-colors duration-300"
                    >
                      <span className="text-green-400 font-medium text-sm">
                        {value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Fun Facts */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Random Fun Facts
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { number: "21", label: "Years Young" },
                    { number: "3", label: "Languages Spoken" },
                    { number: "2", label: "Countries Lived In" },
                    { number: "∞", label: "Cups of Coffee" },
                  ].map((fact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl rounded-xl p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-300"
                    >
                      <div className="text-4xl font-bold text-green-400 mb-2 brutal-font">
                        {fact.number}
                      </div>
                      <div className="text-gray-300 text-sm uppercase tracking-wide">
                        {fact.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalPage;
