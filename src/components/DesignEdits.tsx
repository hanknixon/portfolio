import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { Youtube, ExternalLink } from "lucide-react";

const BGPattern = ({ size, fill, className }: any) => (
  <div
    className={className}
    style={{
      backgroundImage: `
      linear-gradient(to right, ${fill} 1px, transparent 1px),
      linear-gradient(to bottom, ${fill} 1px, transparent 1px)
    `,
      backgroundSize: `${size}px ${size}px`,
    }}
  />
);

const DesignEdits = () => {
  const { ref, isVisible } = useScrollAnimation();
  const marqueeRef = useRef<HTMLDivElement>(null);

  const designWorks = [
    { title: "Band Calls Flyers", image: "/images/bandcall.jpg" },
    { title: "Workshop Posters", image: "/images/workshop.jpg" },
    { title: "Brochures", image: "/images/brochure.jpg" },
    { title: "Special Day Speaker Flyer", image: "/images/speaker.jpg" },
    { title: "Zypher 1", image: "/images/zypher1.jpeg" },
    { title: "Zypher 2", image: "/images/zypher2.jpeg" },
    { title: "Contest Announcement Poster", image: "/images/contest.jpg" },
    { title: "Band Members Announcement", image: "/images/band.jpg" },
    { title: "World of RE Japanese Poster", image: "/images/World of RE Japanese Poster.jpg" },
    { title: "UAE SST Flyer", image: "/images/UAE SST Flyer.jpg" },
    { title: "Lucia Caminos SOLO", image: "/images/Lucia Caminos SOLO.jpg" },
    { title: "Jason Duval SOLO", image: "/images/Jason Duval SOLO.jpg" },
    { title: "Ada Wong SOLO", image: "/images/Ada Wong SOLO.jpg" },
  ];

  // The CSS marquee translates exactly -50%, so we MUST use exactly two identical sets
  const repeatedWorks = [...designWorks, ...designWorks];

  return (
    <section
      id="design-edits"
      className="py-24 relative isolate overflow-hidden"
      style={{ backgroundColor: "#1d1d22" }}
    >
      <BGPattern 
        size={80}
        fill="rgba(255, 255, 255, 0.03)"
        className="absolute inset-0 z-[-1]"
      />

      <div className="max-w-[1800px] mx-auto px-6 md:px-8 mb-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
        >
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-black brutal-font tracking-tight uppercase">
            PLAYGROUND / <span className="text-green-400">ARCHIVE</span>
          </h2>

          <div className="flex items-center gap-6 pb-2">
            <a 
              href="https://www.youtube.com/@h4nkamv" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-semibold tracking-wide text-sm md:text-base uppercase group"
            >
               View Channel <Youtube size={20} strokeWidth={2.5} className="group-hover:text-red-500 transition-colors" />
            </a>
            <a 
              href="https://drive.google.com/drive/folders/1szFmTpF2hLlPTe1q3DoKGipucqu2YsL2?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-semibold tracking-wide text-sm md:text-base uppercase group"
            >
               View Archive <ExternalLink size={20} strokeWidth={2.5} className="group-hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Marquee Loop */}
      <div className="w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] overflow-hidden mt-6">
        <div 
          ref={marqueeRef}
          className="flex whitespace-nowrap w-max animate-marquee gap-4 md:gap-8 px-4"
          onMouseEnter={() => {
            if (marqueeRef.current) {
              marqueeRef.current.getAnimations().forEach(a => a.playbackRate = 0.33);
            }
          }}
          onMouseLeave={() => {
            if (marqueeRef.current) {
              marqueeRef.current.getAnimations().forEach(a => a.playbackRate = 1);
            }
          }}
        >
          {repeatedWorks.map((work, index) => (
            <div 
              key={index} 
              className={`h-[350px] md:h-[500px] rounded-xl overflow-hidden flex-shrink-0 relative group shadow-2xl ${work.isWide ? 'aspect-video' : 'aspect-[3/4]'}`}
            >
              <img 
                src={work.image} 
                alt={work.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl md:text-2xl font-bold brutal-font tracking-wide whitespace-normal leading-snug">
                  {work.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignEdits;
