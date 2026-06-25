import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const cookieChoice = localStorage.getItem("cookie_consent");
    if (!cookieChoice) {
      // Small delay so it pops up nicely after page load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setIsVisible(false);
  };

  // Allow triggering the popup globally if a custom event is fired
  useEffect(() => {
    const handleOpenPreferences = () => setIsVisible(true);
    window.addEventListener("open-cookie-preferences", handleOpenPreferences);
    return () => window.removeEventListener("open-cookie-preferences", handleOpenPreferences);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 left-6 z-[9000] w-[320px] bg-gray-900 border border-green-400/20 rounded-2xl p-6 shadow-2xl backdrop-blur-md bg-opacity-90"
        >
          <h3 className="text-xl font-bold text-white mb-3 brutal-font tracking-tight">
            I use cookies
          </h3>
          <p className="text-sm text-gray-400 mb-6 leading-relaxed font-light">
            I use cookies to understand how you navigate this site and what topics interest you most. No ads, no data sold ever.
          </p>
          <div className="flex gap-3">
            <button
              onClick={handleAccept}
              className="flex-1 bg-green-400 text-black font-semibold py-2.5 px-4 rounded-xl hover:bg-green-300 transition-colors text-sm text-center"
            >
              Accept
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 bg-gray-800 text-gray-300 border border-gray-700 font-medium py-2.5 px-4 rounded-xl hover:bg-gray-700 hover:text-white transition-colors text-sm text-center"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
