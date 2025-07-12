import React from "react";
import { Download, Github, Instagram, Linkedin, Youtube } from "lucide-react";
import SplitText from "./ui/split-text";
import { BGPattern } from "./ui/bg-pattern";
import CountUp from "./ui/CountUp";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{ backgroundColor: "#1d1d22" }}
    >
      {/* Larger Grid Background Pattern */}
      <BGPattern
        variant="grid"
        mask="fade-edges"
        size={80}
        fill="rgba(255, 255, 255, 0.03)"
        className="fixed inset-0 z-0"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Title */}
            <div className="space-y-4">
              <p className="text-gray-400 text-lg font-medium animate-fade-in">
                Software Engineer
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <SplitText
                    text="Hello"
                    className="text-6xl lg:text-8xl font-black text-white leading-none brutal-font"
                    delay={50}
                    duration={0.8}
                    textAlign="left"
                  />
                  <SplitText
                    text="I'm"
                    className="text-6xl lg:text-8xl font-black text-white leading-none brutal-font"
                    delay={50}
                    duration={0.8}
                    textAlign="left"
                  />
                </div>
                <SplitText
                  text="Hank"
                  className="text-6xl lg:text-8xl font-black text-green-400 leading-none block brutal-font"
                  delay={50}
                  duration={0.8}
                  textAlign="left"
                />
                <SplitText
                  text="Nixon"
                  className="text-6xl lg:text-8xl font-black text-green-400 leading-none block brutal-font"
                  delay={50}
                  duration={0.8}
                  textAlign="left"
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg animate-fade-in-delay-2 mt-6">
              Final Year Under Grad Student | Software Engineer & Full-Stack
              Developer | Learning, Building, Evolving | Driven by purpose,
              grounded in progress
            </p>

            {/* Actions */}
            <div className="flex items-center gap-6 animate-fade-in-delay-3 mt-8">
              {/* Download CV Button */}
              <a
                href="/resume/Hank Emmanuel Nixon Resume.pdf"
                download="Hank Emmanuel Nixon Resume.pdf"
                className="flex items-center gap-3 px-6 py-3 border border-green-400 text-green-400 rounded-full hover:bg-green-400 hover:text-black transition-all duration-300 font-medium hover:shadow-lg hover:shadow-green-400/25"
              >
                DOWNLOAD RESUME
                <Download size={18} />
              </a>

              {/* Social Links - 4 ICONS */}
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/hanknixon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-green-400/30 rounded-full flex items-center justify-center text-green-400 hover:bg-green-400 hover:text-black hover:border-green-400 transition-all duration-300 hover:scale-110"
                >
                  <Github size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/in/hanknixon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-green-400/30 rounded-full flex items-center justify-center text-green-400 hover:bg-green-400 hover:text-black hover:border-green-400 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href="https://www.instagram.com/h4nk_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-green-400/30 rounded-full flex items-center justify-center text-green-400 hover:bg-green-400 hover:text-black hover:border-green-400 transition-all duration-300 hover:scale-110"
                >
                  <Instagram size={18} />
                </a>

                <a
                  href="https://www.youtube.com/@h4nkamv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-green-400/30 rounded-full flex items-center justify-center text-green-400 hover:bg-green-400 hover:text-black hover:border-green-400 transition-all duration-300 hover:scale-110"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end items-center">
            <div className="relative animate-fade-in-delay-1">
              {/* Profile Image Container */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full relative">
                {/* Multiple spinning rings for depth */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-green-400/80 animate-spin-slow"></div>
                <div
                  className="absolute inset-2 rounded-full border border-green-400/40 animate-spin-slow"
                  style={{
                    animationDuration: "25s",
                    animationDirection: "reverse",
                  }}
                ></div>

                {/* Glowing background effect */}
                <div className="absolute inset-6 rounded-full bg-gradient-to-br from-green-400/10 to-green-300/5 blur-sm"></div>

                {/* Image container */}
                <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-green-400/20 shadow-2xl shadow-green-400/20">
                  <img
                    src="/images/portfolio_picture.jpg"
                    alt="Hank Nixon - Software Engineer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />

                  {/* Inner glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-400/5 to-transparent"></div>
                </div>

                {/* Decorative dots/elements around the image */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                <div
                  className="absolute -bottom-4 -left-2 w-3 h-3 bg-green-300 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute top-1/2 -right-6 w-2 h-2 bg-green-500 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section with CountUp Animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-4xl mx-auto animate-fade-in-delay-4">
          {[
            { number: 21, label: "Age" },
            { number: 1, label: "Years of experience" },
            { number: 12, label: "Projects worked on" },
            { number: 2, label: "Projects Deployed" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-6xl font-black text-white mb-2 group-hover:text-green-400 transition-colors duration-300 brutal-font">
                <CountUp
                  from={0}
                  to={stat.number}
                  duration={2}
                  delay={index * 0.2}
                  className="group-hover:text-green-400 transition-colors duration-300"
                />
              </div>
              <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
