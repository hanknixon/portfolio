import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import InteractiveSelector from "./ui/interactive-selector";
import { AnimatedUnderline } from "./ui/animated-underline";
import {
  Palette,
  Users,
  FileText,
  Mic,
  Grid3X3,
  Trophy,
  Music,
  Youtube,
  ExternalLink,
} from "lucide-react";

const DesignEdits = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: selectorRef, isVisible: selectorVisible } = useScrollAnimation();
  const { ref: linksRef, isVisible: linksVisible } = useScrollAnimation();

  const designWorks = [
    {
      title: "Band Calls Flyers",
      description: "Eye-catching promotional flyers for music events",
      image: "/images/bandcall.jpg",
      icon: <Music size={24} className="text-white" />,
    },
    {
      title: "Workshop Posters",
      description: "Professional educational event promotions",
      image: "/images/workshop.jpg",
      icon: <Users size={24} className="text-white" />,
    },
    {
      title: "Brochures",
      description: "Elegant tri-fold and bi-fold marketing materials",
      image: "/images/brochure.jpg",
      icon: <FileText size={24} className="text-white" />,
    },
    {
      title: "Special Day Speaker Flyer",
      description: "Premium speaker event announcements",
      image: "/images/speaker.jpg",
      icon: <Mic size={24} className="text-white" />,
    },
    {
      title: "Instagram Grid for Association",
      description: "Cohesive social media visual identity",
      image: "/images/grid.jpg",
      icon: <Grid3X3 size={24} className="text-white" />,
    },
    {
      title: "Contest Announcement Poster",
      description: "Dynamic competition promotional graphics",
      image: "/images/contest.jpg",
      icon: <Trophy size={24} className="text-white" />,
    },
    {
      title: "Band Members Announcement",
      description: "Stylish member introduction designs",
      image: "/images/band.jpg",
      icon: <Palette size={24} className="text-white" />,
    },
  ];

  return (
    <section
      id="design-edits"
      className="py-20 relative"
      style={{ backgroundColor: "#1d1d22" }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Animated Title */}
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 50 }}
            animate={
              titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 brutal-font">
              Design{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                | Edits
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore my creative journey through graphic design and video
              editing. From promotional materials to social media content, every
              piece tells a story.
            </p>
          </motion.div>

          {/* Interactive Design Selector */}
          <motion.div
            ref={selectorRef}
            initial={{ opacity: 0, y: 50 }}
            animate={
              selectorVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <InteractiveSelector options={designWorks} />
          </motion.div>

          {/* Links Section */}
          <motion.div
            ref={linksRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              linksVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-8 justify-center items-center text-center"
          >
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-xl font-semibold text-white">
                Video Content
              </h3>
              <AnimatedUnderline
                href="https://www.youtube.com/@h4nkamv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-semibold"
              >
                <Youtube size={24} />
                Check out my AMVs
              </AnimatedUnderline>
            </div>

            <div className="hidden md:block w-px h-16 bg-green-400/30" />

            <div className="flex flex-col items-center gap-4">
              <h3 className="text-xl font-semibold text-white">
                Design Portfolio
              </h3>
              <AnimatedUnderline
                href="https://drive.google.com/drive/folders/1szFmTpF2hLlPTe1q3DoKGipucqu2YsL2?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-semibold"
              >
                <ExternalLink size={24} />
                Check out more of my works
              </AnimatedUnderline>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DesignEdits;
