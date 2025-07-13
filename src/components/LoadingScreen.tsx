import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Fixed 3D Cube Loader Component
const Cube3DLoader = () => {
  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      {/* Main rotating cube */}
      <motion.div
        className="relative preserve-3d"
        animate={{ rotateX: 360, rotateY: 360 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transformStyle: "preserve-3d",
          width: "60px",
          height: "60px",
        }}
      >
        {/* Cube faces */}
        <div
          className="absolute w-full h-full bg-emerald-400 opacity-80"
          style={{
            transform: "translateZ(30px)",
          }}
        />
        <div
          className="absolute w-full h-full bg-emerald-500 opacity-80"
          style={{
            transform: "rotateY(90deg) translateZ(30px)",
          }}
        />
        <div
          className="absolute w-full h-full bg-emerald-600 opacity-80"
          style={{
            transform: "rotateY(180deg) translateZ(30px)",
          }}
        />
        <div
          className="absolute w-full h-full bg-emerald-500 opacity-80"
          style={{
            transform: "rotateY(-90deg) translateZ(30px)",
          }}
        />
        <div
          className="absolute w-full h-full bg-emerald-400 opacity-80"
          style={{
            transform: "rotateX(90deg) translateZ(30px)",
          }}
        />
        <div
          className="absolute w-full h-full bg-emerald-600 opacity-80"
          style={{
            transform: "rotateX(-90deg) translateZ(30px)",
          }}
        />
      </motion.div>

      {/* Floating smaller cubes */}
      <motion.div
        className="absolute preserve-3d"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, -360],
          x: [0, 30, -30, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transformStyle: "preserve-3d",
          width: "30px",
          height: "30px",
          top: "20px",
          left: "20px",
        }}
      >
        {/* Small cube faces */}
        <div
          className="absolute w-full h-full bg-green-400 opacity-90"
          style={{
            transform: "translateZ(15px)",
          }}
        />
        <div
          className="absolute w-full h-full bg-green-500 opacity-90"
          style={{
            transform: "rotateY(90deg) translateZ(15px)",
          }}
        />
        <div
          className="absolute w-full h-full bg-green-600 opacity-90"
          style={{
            transform: "rotateY(180deg) translateZ(15px)",
          }}
        />
        <div
          className="absolute w-full h-full bg-green-500 opacity-90"
          style={{
            transform: "rotateY(-90deg) translateZ(15px)",
          }}
        />
        <div
          className="absolute w-full h-full bg-green-400 opacity-90"
          style={{
            transform: "rotateX(90deg) translateZ(15px)",
          }}
        />
        <div
          className="absolute w-full h-full bg-green-600 opacity-90"
          style={{
            transform: "rotateX(-90deg) translateZ(15px)",
          }}
        />
      </motion.div>

      {/* Another floating cube */}
      <motion.div
        className="absolute preserve-3d"
        animate={{
          rotateX: [0, -360],
          rotateY: [0, 360],
          x: [0, -40, 40, 0],
          y: [0, 40, -40, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          transformStyle: "preserve-3d",
          width: "25px",
          height: "25px",
          top: "60px",
          right: "30px",
        }}
      >
        {/* Small cube faces */}
        <div
          className="absolute w-full h-full bg-teal-400 opacity-90"
          style={{
            transform: "translateZ(12.5px)",
          }}
        />
        <div
          className="absolute w-full h-full bg-teal-500 opacity-90"
          style={{
            transform: "rotateY(90deg) translateZ(12.5px)",
          }}
        />
        <div
          className="absolute w-full h-full bg-teal-600 opacity-90"
          style={{
            transform: "rotateY(180deg) translateZ(12.5px)",
          }}
        />
        <div
          className="absolute w-full h-full bg-teal-500 opacity-90"
          style={{
            transform: "rotateY(-90deg) translateZ(12.5px)",
          }}
        />
        <div
          className="absolute w-full h-full bg-teal-400 opacity-90"
          style={{
            transform: "rotateX(90deg) translateZ(12.5px)",
          }}
        />
        <div
          className="absolute w-full h-full bg-teal-600 opacity-90"
          style={{
            transform: "rotateX(-90deg) translateZ(12.5px)",
          }}
        />
      </motion.div>

      {/* Bottom floating cube */}
      <motion.div
        className="absolute preserve-3d"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          x: [0, 25, -25, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          transformStyle: "preserve-3d",
          width: "35px",
          height: "35px",
          bottom: "10px",
          left: "10px",
        }}
      >
        {/* Small cube faces */}
        <div
          className="absolute w-full h-full bg-cyan-400 opacity-90"
          style={{
            transform: "translateZ(17.5px)",
          }}
        />
        <div
          className="absolute w-full h-full bg-cyan-500 opacity-90"
          style={{
            transform: "rotateY(90deg) translateZ(17.5px)",
          }}
        />
        <div
          className="absolute w-full h-full bg-cyan-600 opacity-90"
          style={{
            transform: "rotateY(180deg) translateZ(17.5px)",
          }}
        />
        <div
          className="absolute w-full h-full bg-cyan-500 opacity-90"
          style={{
            transform: "rotateY(-90deg) translateZ(17.5px)",
          }}
        />
        <div
          className="absolute w-full h-full bg-cyan-400 opacity-90"
          style={{
            transform: "rotateX(90deg) translateZ(17.5px)",
          }}
        />
        <div
          className="absolute w-full h-full bg-cyan-600 opacity-90"
          style={{
            transform: "rotateX(-90deg) translateZ(17.5px)",
          }}
        />
      </motion.div>
    </div>
  );
};

interface LoadingScreenProps {
  onComplete: () => void;
  duration?: number;
  pageType?: "professional" | "personal" | "contact" | "random";
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onComplete,
  duration = 4000,
  pageType = "random",
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState("");

  // Random loading messages for general visits
  const randomMessages = [
    "Loading Hank's World...", // Minecraft reference
    "Deploying Hank's Portfolio...", // Hosting/deployment reference
    "Compiling Creative Solutions...", // Programming reference
    "Spawning New Adventures...", // Gaming reference
    "Initializing Developer Mode...", // Programming reference
    "Loading Next Level...", // Gaming reference
  ];

  // Get the appropriate loading message based on page type
  const getLoadingMessage = () => {
    switch (pageType) {
      case "professional":
        return "Loading Hank's Professional Profile...";
      case "personal":
        return "Loading Hank's Personal Profile...";
      case "contact":
        return "Loading Contact Page...";
      case "random":
      default:
        return randomMessages[
          Math.floor(Math.random() * randomMessages.length)
        ];
    }
  };

  useEffect(() => {
    // Set the loading message when component mounts
    setLoadingMessage(getLoadingMessage());
  }, [pageType]);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 100 / (duration / 100);
      });
    }, 100);

    // Hide loading screen after duration
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for exit animation
    }, duration);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center min-h-screen"
          style={{
            backgroundColor: "#1d1d22",
            perspective: "1000px",
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background Grid Pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />

          {/* Centered Content Container */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-lg mx-auto">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
                Hank Nixon
              </h1>
              <p className="text-green-400 text-center font-medium">
                Software Engineer & Full-Stack Developer
              </p>
            </motion.div>

            {/* Fixed 3D Loader */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12 flex items-center justify-center"
              style={{
                minHeight: "200px",
                width: "200px",
                perspective: "1000px",
              }}
            >
              <Cube3DLoader />
            </motion.div>

            {/* Loading Text and Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-full max-w-sm"
            >
              <p className="text-white text-lg mb-6 font-medium text-center">
                {loadingMessage}
              </p>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden mb-3">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Progress Percentage */}
              <motion.p
                className="text-green-400 text-sm font-medium text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {Math.round(progress)}%
              </motion.p>
            </motion.div>

            {/* Loading Tip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-8"
            >
              <p className="text-gray-400 text-sm text-center">
                Crafting digital experiences with passion and precision
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
