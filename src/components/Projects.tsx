import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

const projectsList = [
  {
    id: "careerwise",
    title: "CareerWise Platform",
    description: "AI-powered career recommendation tool using K‑Means clustering and KNN, with an interactive UI and backend dashboard.",
    image: "/images/careerwise.png",
    link: "https://github.com/Hasheeeem/CareerWise",
  },
  {
    id: "hash-learning",
    title: "HASH Learning Platform",
    description: "AI‑powered interactive learning web application with intelligent content generation and real-time feedback systems.",
    image: "/images/hash.png",
    link: "https://github.com/hanknixon/Hash",
  },
  {
    id: "esdecorations",
    title: "E and S Decorations",
    description: "A fully responsive e‑commerce site showcasing event and home décor services and products.",
    image: "/images/esdecorations.png",
    link: "https://www.esdecorations.in/",
  },
  {
    id: "securethread",
    title: "SecureThread",
    description: "Cybersecurity platform leveraging a SAST framework with SonarQube and Semgrep, scalable backend architecture, and real-time reporting.",
    image: "/images/securethread.png",
    link: "#",
  }
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.section
      id="professional"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative z-10 pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden"
      style={{ backgroundColor: "#1d1d22" }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-luminosity z-0"
        style={{
          backgroundImage: "url('/images/bgprojects.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      
      {/* Background Gradient Fades */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1d1d22] via-transparent to-[#1d1d22] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 md:px-8 flex flex-col gap-10 md:gap-12">

        {/* Section Heading */}
        <div className="flex justify-start">
          <h2 className="text-white text-3xl md:text-5xl font-bold brutal-font tracking-tight">
            Featured <span className="text-green-400">Projects</span>
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          {projectsList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col group cursor-pointer relative isolate w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
              onClick={() => {
                if (project.link && project.link !== "#") {
                  window.open(project.link, "_blank", "noopener,noreferrer");
                }
              }}
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-[6px]"
              />

              {/* Hover Dark Overlay */}
              <div className={`absolute inset-0 bg-black/0 transition-colors duration-500 z-10 ${project.link ? 'group-hover:bg-black/40' : ''}`} />

              {/* Bottom Gradient for Text */}
              <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />

              {/* Circular Hover Button */}
              {project.link && (
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white text-black w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <ArrowRight size={28} strokeWidth={1.5} />
                  </div>
                </div>
              )}

              {/* Text Content inside Card */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 pointer-events-none">
                <h3 className="text-white group-hover:text-green-400 transition-colors duration-500 text-2xl md:text-3xl font-black brutal-font tracking-tight uppercase leading-none md:w-[45%]">
                  {project.title}
                </h3>
                <p className="text-gray-200 text-sm md:text-[14px] font-medium leading-snug md:w-[50%] md:text-left">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all my projects */}
        <div className="flex justify-center mt-4 md:mt-8 relative z-50">
          <a
            href="https://github.com/hanknixon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 group cursor-pointer p-2"
          >
            <span className="relative text-white text-[1.1rem] font-bold brutal-font tracking-wide flex items-center gap-1 pb-1">
              View all my projects <ArrowUpRight size={20} strokeWidth={2.5} />
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </span>
          </a>
        </div>

      </div>
    </motion.section>
  );
};

export default Projects;
