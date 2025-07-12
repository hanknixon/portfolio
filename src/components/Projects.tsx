import React from "react";
import { motion } from "framer-motion";
import { AnimatedTabs } from "@/components/ui/animated-tabs";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import {
  Brain,
  Users,
  Coffee,
  Cloud,
  ExternalLink,
  Github,
  Palette,
} from "lucide-react";

const Projects = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: tabsRef, isVisible: tabsVisible } = useScrollAnimation();
  const { ref: githubRef, isVisible: githubVisible } = useScrollAnimation();

  const projects = [
    {
      id: "careerwise",
      title: "CareerWise Platform",
      description:
        "AI-powered career recommendation tool using K‑Means clustering and KNN, with an interactive UI and backend dashboard.",
      stack: [
        "FastAPI",
        "Python",
        "React",
        "PostgreSQL",
        "MongoDB",
        "scikit-learn",
        "OpenAI",
      ],
      image: "/images/careerwise.jpg",
      icon: Brain,
      hasLiveDemo: false,
      githubUrl: "https://github.com/Hasheeeem/CareerWise",
    },
    {
      id: "hash-learning",
      title: "HASH Learning Platform",
      description:
        "AI‑powered interactive learning web application with intelligent content generation and real-time feedback systems.",
      stack: ["FastAPI", "React", "PostgreSQL", "Redis", "OpenAI API"],
      image: "/images/hash.png",
      icon: Brain,
      hasLiveDemo: false,
      githubUrl: "https://github.com/hanknixon/Hash",
    },
    {
      id: "client-project",
      title: "E and S Decorations",
      description:
        "A fully responsive e‑commerce site showcasing event and home décor services and products. **Tech Stack:** React (frontend), FastAPI or Express (backend), TypeScript, PostgreSQL or MongoDB, Tailwind CSS, hosted on Vercel or equivalent with CI/CD.",
      stack: [
        "React",
        "TypeScript",
        "FastAPI",
        "PostgreSQL",
        "Tailwind CSS",
        "Vercel",
      ],
      image: "/images/esdecorations.png",
      icon: Palette,
      hasLiveDemo: true,
      liveUrl: "https://www.esdecorations.in/",
      githubUrl: "https://github.com/esdecorations/esdecorations",
    },
    {
      id: "recipe4us",
      title: "Recipe4Us",
      description:
        "Community recipe portal with uploads, search, and filtering. A platform for food enthusiasts to share and discover recipes.",
      stack: ["Node.js", "Express", "MongoDB", "JavaScript", "CSS", "HTML"],
      image: "/images/recipe4us.png",
      icon: Users,
      hasLiveDemo: false,
      githubUrl: "https://github.com/hanknixon/Recipe-Sharing-Platform",
    },
    {
      id: "cafe-management",
      title: "Cafe Management System",
      description:
        "Java-based CLI tool for managing cafe orders and inventory with efficient database operations and user-friendly interface.",
      stack: ["Java", "MySQL"],
      image:
        "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3",
      icon: Coffee,
      hasLiveDemo: false,
      githubUrl: "https://github.com/hanknixon/Cafe-Management-System",
    },
    {
      id: "weather-app",
      title: "Live Weather App",
      description:
        "Cross-platform (mobile & web) weather dashboard in Flutter using live API data with beautiful UI and real-time updates.",
      stack: ["Flutter", "Dart", "Weather API", "Cross-platform"],
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      icon: Cloud,
      hasLiveDemo: false,
      githubUrl: "https://github.com/hanknixon/weather-app",
    },
  ];

  // Create tabs data from projects
  const projectTabs = projects.map((project) => {
    const IconComponent = project.icon;

    return {
      id: project.id,
      label: project.title,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-full">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg w-full h-60 object-cover mt-0 !m-0 shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute top-4 left-4 w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center">
              <IconComponent className="text-black" size={24} />
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            <h2 className="text-2xl font-bold mb-0 text-white mt-0 !m-0">
              {project.title}
            </h2>
            <p className="text-sm text-gray-200 mt-0 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-green-400/10 text-green-400 border border-green-400/30 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              {project.hasLiveDemo && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-green-400 hover:bg-green-300 text-black rounded-lg font-medium transition-colors"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-green-400/30 text-green-400 rounded-lg font-medium hover:bg-green-400/10 transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      ),
    };
  });

  return (
    <section
      id="projects"
      className="py-20 relative"
      style={{ backgroundColor: "#1d1d22" }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Animated Title */}
          <motion.h2
            ref={titleRef}
            initial={{ opacity: 0, y: 50 }}
            animate={
              titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent brutal-font"
          >
            My Projects
          </motion.h2>

          {/* Animated Tabs */}
          <motion.div
            ref={tabsRef}
            initial={{ opacity: 0, y: 50 }}
            animate={tabsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center mb-12"
          >
            <AnimatedTabs
              tabs={projectTabs}
              className="w-full max-w-none"
              defaultTab={projectTabs[0]?.id}
            />
          </motion.div>

          {/* GitHub Link Section - Keep Original Animation */}
          <div ref={githubRef} className="flex justify-center mt-12">
            {githubVisible && (
              <a
                href="https://github.com/hanknixon?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <AnimatedText
                  text="Visit my GitHub to view more"
                  textClassName="text-2xl font-semibold text-green-400 group-hover:text-green-300 transition-colors cursor-pointer"
                  underlineClassName="text-green-400 group-hover:text-green-300"
                  underlinePath="M 0,10 Q 150,0 300,10"
                  underlineHoverPath="M 0,10 Q 150,20 300,10"
                  underlineDuration={1.2}
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
