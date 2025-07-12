import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./ui/3d-box-loader-animation";

interface LoadingScreenProps {
  onComplete: () => void;
  duration?: number;
  pageType?: "professional" | "personal" | "random";
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
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center min-h-screen"
          style={{ backgroundColor: "#1d1d22" }}
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

          {/* Main Content Container */}
          <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-4">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white brutal-font mb-2">
                Hank Nixon
              </h1>
              <p className="text-green-400 text-center font-medium">
                Software Engineer & Full-Stack Developer
              </p>
            </motion.div>

            {/* 3D Loader */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <Loader />
            </motion.div>

            {/* Loading Text and Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mb-12 mt-16"
            >
              <p className="text-white text-lg mb-4 font-medium">
                {loadingMessage}
              </p>

              {/* Progress Bar */}
              <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Progress Percentage */}
              <motion.p
                className="text-green-400 text-sm mt-2 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {Math.round(progress)}%
              </motion.p>
            </motion.div>
          </div>

          {/* Loading Tips - Now properly positioned at bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="relative z-10 pb-8 text-center"
          >
            <p className="text-gray-400 text-sm">
              Crafting digital experiences with passion and precision
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
