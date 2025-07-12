import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  GraduationCap,
  Mail,
  Code,
  Globe,
} from "lucide-react";
import TiltedCard from "./ui/TiltedCard";
import { LayoutGrid } from "./ui/layout-grid";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: educationRef, isVisible: educationVisible } =
    useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  const educationData = [
    {
      school: "Amal Jyothi College of Engineering",
      degree: "Bachelors in Technology [IT]",
      location: "Kottayam, India",
      period: "2022 - 2026",
      image: "https://ajce.in/ece/images/ajce_pic.jpg",
    },
    {
      school: "Sharjah Indian School",
      degree: "High School",
      location: "Sharjah, U.A.E",
      period: "2018 - 2022",
      image: "https://spea.shj.ae/media/ornnivlk/s202.webp",
    },
  ];

  // Modern Card Components
  const FullStackEngineer = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-green-400 rounded-xl flex items-center justify-center">
          <Code className="text-black" size={24} />
        </div>
        <h3 className="text-3xl font-bold text-white">Full-Stack Engineer</h3>
      </div>
      <p className="text-gray-200 text-lg leading-relaxed">
        Full-Stack Engineer who has built secure systems for AI-driven learning
        platforms, real-time dashboards, and career guidance tools.
      </p>
      <div className="flex gap-3 mt-6">
        <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm font-medium">
          React
        </span>
        <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm font-medium">
          FastAPI
        </span>
        <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm font-medium">
          PostgreSQL
        </span>
      </div>
    </div>
  );

  const Languages = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-green-400/20 rounded-lg flex items-center justify-center">
          <Globe className="text-green-400" size={20} />
        </div>
        <h3 className="text-2xl font-bold text-white">Languages</h3>
      </div>
      <div className="space-y-3">
        {["English", "Malayalam", "Hindi"].map((lang, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-gray-300 font-medium">{lang}</span>
            <span className="text-green-400 text-sm">Fluent</span>
          </div>
        ))}
      </div>
    </div>
  );

  const TechStack = () => (
    <div className="space-y-4 h-full flex flex-col">
      <div className="space-y-2 mb-4">
        <p className="text-green-400 font-medium">My Primary</p>
        <h3 className="text-3xl font-bold text-white">Tech-Stack</h3>
      </div>

      <div className="grid grid-cols-2 gap-3 flex-1">
        {[
          "ReactJS",
          "NextJS",
          "FastAPI",
          "TypeScript",
          "PostgreSQL",
          "Tailwind CSS",
        ].map((tech, index) => (
          <div
            key={index}
            className="px-3 py-2 bg-gray-700/50 hover:bg-green-400/10 border border-gray-600 hover:border-green-400/30 rounded-lg text-white text-sm font-medium text-center transition-all duration-200"
          >
            {tech}
          </div>
        ))}
      </div>

      <p className="text-green-400 text-sm text-center mt-2">
        + 3 more technologies →
      </p>
    </div>
  );

  const TechStackExpanded = () => (
    <div className="space-y-6">
      <div className="space-y-2 mb-6">
        <p className="text-green-400 font-medium">My Primary</p>
        <h3 className="text-3xl font-bold text-white">Tech-Stack</h3>
        <p className="text-gray-300">
          Complete technology ecosystem I work with
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {[
          "ReactJS",
          "NextJS",
          "FastAPI",
          "TypeScript",
          "PostgreSQL",
          "Tailwind CSS",
          "Supabase",
          "Docker",
          "GitHub Actions",
        ].map((tech, index) => (
          <div
            key={index}
            className="px-4 py-3 bg-gray-700/50 hover:bg-green-400/10 border border-gray-600 hover:border-green-400/30 rounded-lg text-white text-sm font-medium text-center transition-all duration-200"
          >
            {tech}
          </div>
        ))}
      </div>

      <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
        <h4 className="text-white font-semibold mb-3">
          Technology Focus Areas
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-green-400 font-medium">Frontend:</span>
            <span className="text-gray-300 ml-2">
              React, Next.js, TypeScript
            </span>
          </div>
          <div>
            <span className="text-green-400 font-medium">Backend:</span>
            <span className="text-gray-300 ml-2">FastAPI, PostgreSQL</span>
          </div>
          <div>
            <span className="text-green-400 font-medium">Styling:</span>
            <span className="text-gray-300 ml-2">Tailwind CSS, Modern UI</span>
          </div>
          <div>
            <span className="text-green-400 font-medium">DevOps:</span>
            <span className="text-gray-300 ml-2">Docker, GitHub Actions</span>
          </div>
        </div>
      </div>
    </div>
  );

  const SoftwareDeveloper = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
          <span className="text-black font-bold text-lg">SD</span>
        </div>
        <h3 className="text-3xl font-bold text-white">
          Software Developer | Designer
        </h3>
      </div>
      <p className="text-gray-200 text-lg leading-relaxed">
        Crafting digital experiences with clean code and thoughtful design.
        Passionate about creating solutions that bridge technology and user
        needs.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="text-center p-3 bg-green-400/10 rounded-lg border border-green-400/20">
          <div className="text-2xl font-bold text-white">12+</div>
          <div className="text-green-400 text-sm">Projects</div>
        </div>
        <div className="text-center p-3 bg-green-400/10 rounded-lg border border-green-400/20">
          <div className="text-2xl font-bold text-white">1+</div>
          <div className="text-green-400 text-sm">Year(s)</div>
        </div>
      </div>
    </div>
  );

  const ReachOut = () => {
    const copyEmailToClipboard = (e) => {
      e.stopPropagation();
      const email = "hankenixon456@gmail.com";

      navigator.clipboard
        .writeText(email)
        .then(() => {
          const notification = document.createElement("div");
          notification.innerHTML = `
          <div class="fixed top-4 right-4 bg-green-400 text-black px-6 py-3 rounded-lg shadow-lg z-[9999] font-medium animate-slide-in">
            📧 Email address copied to clipboard!
          </div>
        `;
          document.body.appendChild(notification);

          setTimeout(() => {
            notification.remove();
          }, 3000);
        })
        .catch(() => {
          const textArea = document.createElement("textarea");
          textArea.value = email;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);

          const notification = document.createElement("div");
          notification.innerHTML = `
          <div class="fixed top-4 right-4 bg-green-400 text-black px-6 py-3 rounded-lg shadow-lg z-[9999] font-medium">
            📧 Email address copied to clipboard!
          </div>
        `;
          document.body.appendChild(notification);

          setTimeout(() => {
            notification.remove();
          }, 3000);
        });
    };

    return (
      <div className="text-center space-y-4 h-full flex flex-col justify-between">
        <div className="flex-1 flex flex-col justify-center space-y-4">
          <div className="w-16 h-16 bg-green-400 rounded-2xl flex items-center justify-center mx-auto">
            <Mail className="text-black" size={28} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Let's connect!
            </h3>
            <p className="text-gray-300">
              Ready to collaborate on your next project?
            </p>
          </div>
        </div>
        <button
          onClick={copyEmailToClipboard}
          className="w-full py-3 bg-green-400 hover:bg-green-300 text-black rounded-xl font-semibold transition-colors duration-200"
        >
          Copy Email Address
        </button>
      </div>
    );
  };

  const Achievements = () => (
    <div className="space-y-4 h-full flex flex-col">
      <div className="mb-4">
        <p className="text-green-400 font-medium mb-2">Portfolio Highlights</p>
        <h3 className="text-3xl font-bold text-white">Key Achievements</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
        <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700 hover:border-green-400/30 transition-colors">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center p-1.5">
              <img
                src="/icons/technical-excellence.png"
                alt="Technical Excellence"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-white font-semibold">Technical Excellence</h4>
          </div>
          <p className="text-gray-300 text-sm">
            Consistently performed at the top of my class
          </p>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700 hover:border-green-400/30 transition-colors">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center p-1.5">
              <img
                src="/icons/product-ready-projects.png"
                alt="Product Ready Projects"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-white font-semibold">Product-Ready Projects</h4>
          </div>
          <p className="text-gray-300 text-sm">Built end-to-end applications</p>
        </div>
      </div>

      <p className="text-green-400 text-sm text-center">
        Click to see all achievements →
      </p>
    </div>
  );

  const AchievementsExpanded = () => (
    <div className="space-y-6">
      <div className="mb-6">
        <p className="text-green-400 font-medium mb-2">Portfolio Highlights</p>
        <h3 className="text-3xl font-bold text-white">
          Key Achievements & Milestones
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700 hover:border-green-400/30 transition-colors">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center p-1.5">
              <img
                src="/icons/technical-excellence.png"
                alt="Technical Excellence"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-white font-semibold">Technical Excellence</h4>
          </div>
          <p className="text-gray-300 text-sm">
            Consistently performed at the top of my class in Information,
            excelling in secure software systems, backend architecture, and
            applied AI.
          </p>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700 hover:border-green-400/30 transition-colors">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center p-1.5">
              <img
                src="/icons/product-ready-projects.png"
                alt="Product Ready Projects"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-white font-semibold">Product-Ready Projects</h4>
          </div>
          <p className="text-gray-300 text-sm">
            Led and built scalable, real-world applications with
            production-grade tech including FastAPI, React, PostgreSQL, and
            GitHub Actions, deployed for startups and institutional use.
          </p>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700 hover:border-green-400/30 transition-colors">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-purple-400 rounded-lg flex items-center justify-center p-1.5">
              <img
                src="/icons/global-collaboration.png"
                alt="Global Collaboration"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-white font-semibold">Global Collaboration</h4>
          </div>
          <p className="text-gray-300 text-sm">
            Delivered projects and collaborated with clients and teams diverse
            across UAE and India, adapting to diverse work cultures and
            enhancing project communication.
          </p>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700 hover:border-green-400/30 transition-colors">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-orange-400 rounded-lg flex items-center justify-center p-1.5">
              <img
                src="/icons/modern-technologies.png"
                alt="AI & Automation Integration"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-white font-semibold">
              A.I & Automation Integration
            </h4>
          </div>
          <p className="text-gray-300 text-sm">
            Created AI-powered platforms like HASH and CareerWise, integrating
            OpenAI APIs for dynamic content generation, scoring, and intelligent
            responses.
          </p>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700 hover:border-green-400/30 transition-colors">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center p-1.5">
              <img
                src="/icons/database-design.png"
                alt="Database Design"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-white font-semibold">
              Optimized Database Systems
            </h4>
          </div>
          <p className="text-gray-300 text-sm">
            Implemented efficient PostgreSQL and MongoDB schemas to handle
            real-time updates, grading, and analytics with high performance and
            data integrity.
          </p>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700 hover:border-green-400/30 transition-colors">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-red-400 rounded-lg flex items-center justify-center p-1.5">
              <img
                src="/icons/api-development.png"
                alt="API Development"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-white font-semibold">Secure API Development</h4>
          </div>
          <p className="text-gray-300 text-sm">
            Built secure, well-documented REST APIs using FastAPI with
            role-based access, validation, and integration into admin dashboards
            and learning platforms.
          </p>
        </div>
      </div>
    </div>
  );

  const cards = [
    {
      id: 1,
      content: <FullStackEngineer />,
      className: "md:col-span-2",
      thumbnail:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
      hasImage: true,
    },
    {
      id: 2,
      content: <Languages />,
      className: "col-span-1",
      hasImage: false,
    },
    {
      id: 3,
      content: <TechStack />,
      expandedContent: <TechStackExpanded />,
      className: "col-span-1",
      hasImage: false,
    },
    {
      id: 4,
      content: <SoftwareDeveloper />,
      className: "md:col-span-2",
      hasImage: false,
    },
    {
      id: 5,
      content: <ReachOut />,
      className: "col-span-1",
      hasImage: false,
    },
    {
      id: 6,
      content: <Achievements />,
      expandedContent: <AchievementsExpanded />,
      className: "md:col-span-2",
      hasImage: false,
    },
  ];

  return (
    <section
      id="about"
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
            About Me
          </motion.h2>

          {/* Education Section */}
          <motion.div
            ref={educationRef}
            initial={{ opacity: 0, y: 50 }}
            animate={
              educationVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-12 mb-20"
          >
            <h3 className="text-3xl font-semibold text-center text-white mb-12 flex items-center justify-center gap-3">
              <GraduationCap className="text-green-400" size={32} />
              Education
            </h3>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    educationVisible
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.1 * index,
                    ease: "easeOut",
                  }}
                  className="flex flex-col items-center space-y-4"
                >
                  <TiltedCard
                    imageSrc={edu.image}
                    altText={`${edu.school} campus`}
                    captionText={`${edu.school} - ${edu.location}`}
                    containerHeight="280px"
                    containerWidth="100%"
                    imageHeight="280px"
                    imageWidth="280px"
                    rotateAmplitude={12}
                    scaleOnHover={1.1}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={false}
                  />

                  <div className="text-center space-y-2">
                    <h4 className="text-xl font-semibold text-white">
                      {edu.school}
                    </h4>
                    <p className="text-green-400 font-medium">{edu.degree}</p>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Modern Layout Grid */}
          <motion.div
            ref={gridRef}
            initial={{ opacity: 0, y: 50 }}
            animate={gridVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-20"
          >
            <LayoutGrid cards={cards} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
