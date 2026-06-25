import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

const experienceList = [
  {
    role: "Founding Member & CTO",
    company: "Zypher Software Solutions",
    date: "Jan 2026 – Present",
    location: "Remote",
    logo: "/logos/zypher.png?v=1",
    description: "Leading technical strategy, architecture, and engineering efforts to deliver high-quality software solutions. Overseeing client requirements, making critical architectural decisions, and managing full product lifecycles from concept to deployment."
  },
  {
    role: "Freelance Graphic Designer | Developer",
    company: "Self-Employed",
    date: "Sep 2024 – Present",
    location: "Remote",
    logo: "/logos/Freelance.svg",
    description: "Delivered responsive portfolio websites and branded digital assets. Designed logos, banners, and social media templates in Adobe Suite, and created aesthetic, minimal UI experiences using modern frontend stacks."
  },
  {
    role: "Full Stack Developer Intern",
    company: "People Maketh",
    date: "Jul 2025 – Jul 2026",
    location: "Remote",
    logo: "/logos/PeopleMaketh.svg",
    description: "Led development of the Secure Thread cybersecurity platform using SAST framework with SonarQube and Semgrep. Oversaw secure API design and scalable backend architecture with real-time reporting, and automated CI/CD using GitHub Actions for fast deployment cycles."
  },
  {
    role: "Freelance Software Developer",
    company: "Lylux Lighting Trading Equipment LLC",
    date: "Jul 2025 – Jan 2026",
    location: "Remote (Dubai, UAE)",
    logo: "/logos/Lylux_logo.png",
    description: "Built product database and automated datasheet generator for lighting equipment. Developed a responsive dashboard with optimized queries, integrating FastAPI, PostgreSQL, and Redis for a scalable architecture with real-time UX feedback."
  },
  {
    role: "Software Development Intern",
    company: "Partheon Research",
    date: "Apr 2025 – Jun 2025",
    location: "Remote",
    logo: "/logos/Partheon_logo.png",
    description: "Developed a Flutter-based mobile app for BLE and QR-connected EV charging. Integrated Map APIs for location-based station display and alerts, while enhancing overall UI performance using Flutter best practices."
  },
  {
    role: "Design Lead",
    company: "init() Association",
    date: "Apr 2024 – Mar 2025",
    location: "On-site",
    logo: "/logos/init_logo.jpeg",
    description: "Created marketing visuals, posters, videos, and presentations for events. Led the design team in managing content calendars and creative direction, ensuring branding consistency across all digital platforms."
  },
  {
    role: "Design Core Team Member",
    company: "GDSC",
    date: "Apr 2023 – Mar 2024",
    location: "On-site",
    logo: "/logos/GDSC_logo.png",
    description: "Supported GDSC events by creating impactful design assets including event posters, recap reels, and logo animations, strengthening visual identity across student communities."
  }
];

const ToolBox = ({ name, imageSrc }: any) => (
  <div
    className="w-16 h-16 sm:w-20 sm:h-20 bg-[#121214] rounded-[1.25rem] flex items-center justify-center shadow-sm hover:scale-105 transition-transform duration-300 border border-[#333] p-3 sm:p-4"
    title={name}
  >
    <img src={imageSrc} alt={name} className="w-full h-full object-contain" />
  </div>
);

const Experience = () => {
  const { ref: experienceRef, isVisible: experienceVisible } = useScrollAnimation();

  return (
    <motion.section
      ref={experienceRef}
      initial={{ opacity: 0, y: 20 }}
      animate={experienceVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="experience"
      className="py-16 md:py-24"
      style={{ backgroundColor: "#1d1d22" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 lg:gap-24">

        {/* LEFT COLUMN: Experience & Journey */}
        <div className="lg:w-[55%] flex flex-col gap-10">
          <h2 className="text-white text-3xl font-bold brutal-font tracking-tight mb-2">
            Experience & Journey
          </h2>

          <div className="flex flex-col gap-10">
            {experienceList.map((exp, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-5">
                {/* Logo */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl p-2 flex-shrink-0 flex items-center justify-center border border-gray-700 shadow-sm mt-1">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-col">
                  {/* Title & Date consistently stacked to prevent wrapping issues */}
                  <div className="mb-2">
                    <h3 className="text-white text-[1.1rem] font-bold leading-snug">
                      {exp.role} <span className="text-gray-300 font-medium">@ {exp.company}</span>
                    </h3>
                    <div className="text-green-400 text-sm font-semibold mt-1">
                      {exp.date} <span className="text-gray-500 mx-2">|</span> {exp.location}
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Quick Description & Tools */}
        <div className="lg:w-[45%] flex flex-col gap-16 lg:sticky lg:top-24 h-max">

          {/* Quick Description */}
          <div className="flex flex-col gap-6">
            <h2 className="text-white text-3xl font-bold brutal-font tracking-tight">
              Quick Description
            </h2>
            <p className="text-gray-300 text-[15px] sm:text-base leading-relaxed">
              Hi, I'm Hank Emmanuel Nixon, a Computer Science graduate from Amal Jyothi College of Engineering, Kerala, currently based in the UAE and open to new opportunities. My background combines software engineering with UI/UX design, frontend development, and graphic design. I specialize in building scalable digital products, including CRM systems, SaaS platforms, AI-powered applications, business automation tools, and modern web experiences.
              <br /><br />
              Over the years, I have worked with clients and organizations across multiple countries, delivering solutions that balance technical excellence with intuitive user experiences. From custom business platforms and CRM solutions to AI-integrated and cybersecurity-focused products, I enjoy transforming complex ideas into practical, user-centric software. Outside of work, I am an avid gamer and technology enthusiast who enjoys building creative side projects inspired by interactive experiences.
              <br /><br />
              As the CTO of my startup, I lead technical strategy, product development, and client engagement while overseeing the entire product lifecycle. Working closely with global clients and managing complex technical decisions has given me a strong understanding of both technology and business, enabling me to build reliable, scalable, and impactful digital solutions.
            </p>
          </div>

          {/* Tools */}
          <div className="flex flex-col gap-6">
            <h2 className="text-white text-3xl font-bold brutal-font tracking-tight">
              Tools
            </h2>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <ToolBox name="VS Code" imageSrc="/logos/vscode.png" />
              <ToolBox name="Anthropic" imageSrc="/logos/anthropic.png" />
              <ToolBox name="Vercel" imageSrc="/logos/vercel.png" />
              <ToolBox name="Framer" imageSrc="/logos/framer.png" />
              <ToolBox name="Photoshop" imageSrc="/logos/photostop.png" />
              <ToolBox name="Illustrator" imageSrc="/logos/illustrator.png" />
              <ToolBox name="Blender" imageSrc="/logos/blender.png" />
              <ToolBox name="GitHub" imageSrc="/logos/github.png" />
              <ToolBox name="Docker" imageSrc="/logos/docker.png" />
              <ToolBox name="AWS" imageSrc="/logos/aws.png" />
            </div>
          </div>

        </div>

      </div>
    </motion.section>
  );
};

export default Experience;
