import React from "react";
import { motion } from "framer-motion";
import { Timeline } from "./ui/timeline";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { ExternalLink, MapPin, Calendar, Building } from "lucide-react";

const Experience = () => {
  const { ref: experienceRef, isVisible: experienceVisible } =
    useScrollAnimation();

  const experienceData = [
    {
      title: "2025",
      content: (
        <div className="space-y-10">
          {/* Full Stack Developer Intern */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl rounded-2xl p-8 border border-green-400/20 hover:border-green-400/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/logos/PeopleMaketh.svg"
                    alt="People Maketh"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                    Full Stack Developer Intern
                  </h3>
                  <div className="flex items-center gap-4 text-green-400 font-semibold mb-2">
                    <span className="flex items-center gap-1">
                      <Building size={16} />
                      People Maketh
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      Jul 2025 – Present
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      Remote
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed mb-6">
                <p className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  Led development of cybersecurity platform (Secure Thread)
                  using SAST framework with SonarQube and Semgrep
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  Oversaw secure API design and scalable backend architecture
                  with real-time reporting
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  Automated CI/CD using GitHub Actions for fast deployment
                  cycles
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "FastAPI",
                  "React",
                  "TypeScript",
                  "PostgreSQL",
                  "Docker",
                  "GitHub Actions",
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="px-4 py-2 bg-green-400/10 text-green-400 border border-green-400/30 rounded-xl text-sm font-medium hover:bg-green-400/20 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Freelance Software Developer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl rounded-2xl p-8 border border-green-400/20 hover:border-green-400/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/logos/Lylux_logo.png"
                    alt="LYLUX"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                    Freelance Software Developer
                  </h3>
                  <div className="flex items-center gap-4 text-green-400 font-semibold mb-2">
                    <span className="flex items-center gap-1">
                      <Building size={16} />
                      LYLUX
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      Jul 2025 – Present
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      Remote (Dubai, UAE)
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed mb-6">
                <p className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  Built product database and automated datasheet generator for
                  lighting equipment
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  Developed responsive dashboard with optimized queries and
                  real-time UX feedback
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  Integrated FastAPI, PostgreSQL, and Redis for scalable
                  architecture
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["React.js", "FastAPI", "PostgreSQL", "Redis"].map(
                  (tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="px-4 py-2 bg-green-400/10 text-green-400 border border-green-400/30 rounded-xl text-sm font-medium hover:bg-green-400/20 transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Software Development Intern */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl rounded-2xl p-8 border border-green-400/20 hover:border-green-400/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/logos/Partheon_logo.png"
                    alt="Partheon Research"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                    Software Development Intern
                  </h3>
                  <div className="flex items-center gap-4 text-green-400 font-semibold mb-2">
                    <span className="flex items-center gap-1">
                      <Building size={16} />
                      Partheon Research
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      Apr 2025 – Jun 2025
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      Remote
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed mb-6">
                <p className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  Developed Flutter-based mobile app for BLE & QR-connected EV
                  charging
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  Integrated Map APIs for location-based station display and
                  alerts
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  Enhanced UI performance using Flutter best practices
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Dart", "Flutter", "Firebase", "REST APIs"].map(
                  (tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="px-4 py-2 bg-green-400/10 text-green-400 border border-green-400/30 rounded-xl text-sm font-medium hover:bg-green-400/20 transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* E&S Decorations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl rounded-2xl p-8 border border-green-400/20 hover:border-green-400/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/logos/ESDecorations_Logo.png"
                    alt="E&S Decorations"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                    Freelance Web Developer
                  </h3>
                  <div className="flex items-center gap-4 text-green-400 font-semibold mb-2">
                    <span className="flex items-center gap-1">
                      <Building size={16} />
                      E&S Decorations
                    </span>
                    <a
                      href="https://www.esdecorations.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Site
                    </a>
                  </div>
                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      Jan 2025 – Jun 2025
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      Remote
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed mb-6">
                <p className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  Designed and deployed commercial website for event decoration
                  brand
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  Implemented no-code dashboard for real-time content updates
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  Prioritized SEO optimization and responsive design
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "React.js",
                  "FastAPI",
                  "TypeScript",
                  "Tailwind CSS",
                  "PostgreSQL",
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="px-4 py-2 bg-green-400/10 text-green-400 border border-green-400/30 rounded-xl text-sm font-medium hover:bg-green-400/20 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="space-y-10">
          {/* Freelance Graphic Designer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl rounded-2xl p-8 border border-green-400/20 hover:border-green-400/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/logos/Freelance.svg"
                    alt="Freelance"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                    Freelance Graphic Designer | Developer
                  </h3>
                  <div className="flex items-center gap-4 text-green-400 font-semibold mb-2">
                    <span className="flex items-center gap-1">
                      <Building size={16} />
                      Self-Employed
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      Sep 2024 – Present
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      Remote
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed mb-6">
                <p className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  Delivered responsive portfolio websites and branded digital
                  assets
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  Designed logos, banners, and social media templates in Adobe
                  Suite
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  Created aesthetic, minimal UI experiences with modern frontend
                  stacks
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "Adobe Photoshop",
                  "React",
                  "Tailwind CSS",
                  "After Effects",
                  "Figma",
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="px-4 py-2 bg-green-400/10 text-green-400 border border-green-400/30 rounded-xl text-sm font-medium hover:bg-green-400/20 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Design Lead */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl rounded-2xl p-8 border border-green-400/20 hover:border-green-400/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/logos/init_logo.jpeg"
                    alt="init() Association"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                    Design Lead
                  </h3>
                  <div className="flex items-center gap-4 text-green-400 font-semibold mb-2">
                    <span className="flex items-center gap-1">
                      <Building size={16} />
                      init() Association
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      Apr 2024 – Mar 2025
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      On-site
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed mb-6">
                <p className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  Created marketing visuals, posters, videos, and presentations
                  for events
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  Led design team managing content calendars and creative
                  direction
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  Ensured branding consistency across all digital platforms
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Adobe Photoshop", "Illustrator", "After Effects"].map(
                  (tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="px-4 py-2 bg-green-400/10 text-green-400 border border-green-400/30 rounded-xl text-sm font-medium hover:bg-green-400/20 transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="space-y-10">
          {/* GDSC Core Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl rounded-2xl p-8 border border-green-400/20 hover:border-green-400/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/logos/GDSC_logo.png"
                    alt="GDSC"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                    Design Core Team Member
                  </h3>
                  <div className="flex items-center gap-4 text-green-400 font-semibold mb-2">
                    <span className="flex items-center gap-1">
                      <Building size={16} />
                      GDSC – Google Developer Student Clubs
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      Apr 2023 – Mar 2024
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      On-site
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed mb-6">
                <p className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  Supported GDSC events by creating impactful design assets
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  Created event posters, recap reels, and logo animations
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  Strengthened visual identity across student communities
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["After Effects", "Photoshop", "Premiere Pro"].map(
                  (tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="px-4 py-2 bg-green-400/10 text-green-400 border border-green-400/30 rounded-xl text-sm font-medium hover:bg-green-400/20 transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      ),
    },
  ];

  return (
    <motion.section
      ref={experienceRef}
      initial={{ opacity: 0 }}
      animate={experienceVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="experience"
      className="relative"
      style={{ backgroundColor: "#1d1d22" }}
    >
      <Timeline data={experienceData} />
    </motion.section>
  );
};

export default Experience;
