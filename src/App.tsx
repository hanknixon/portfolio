import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import LoadingScreen from "./components/LoadingScreen";
import { BGPattern } from "./components/ui/bg-pattern";
import Contact from "./components/contact/Contact";

// Professional Page Components
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import DesignEdits from "./components/DesignEdits";
import Footer from "./components/Footer";

// Personal Page Components
import PersonalHero from "./components/personal/PersonalHero";
import PersonalAbout from "./components/personal/PersonalAbout";
import Hobbies from "./components/personal/Hobbies";
import PersonalContact from "./components/personal/PersonalContact";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<
    "professional" | "personal" | "contact"
  >("professional");
  const [loadingPageType, setLoadingPageType] = useState<
    "professional" | "personal" | "contact" | "random"
  >("random");

  useEffect(() => {
    // Show loading screen on first visit or page refresh
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      setIsLoading(true);
      setLoadingPageType("random"); // First visit gets random messages
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const path = window.location.pathname;
      if (path === "/personal") {
        setCurrentPage("personal");
      } else if (path === "/contact") {
        setCurrentPage("contact");
      } else {
        setCurrentPage("professional");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handlePageChange = (page: "professional" | "personal" | "contact") => {
    if (page !== currentPage) {
      setIsLoading(true);
      setCurrentPage(page);
      setLoadingPageType(page);

      const newPath =
        page === "personal"
          ? "/personal"
          : page === "contact"
          ? "/contact"
          : "/";
      window.history.pushState({ page }, "", newPath);

      setTimeout(() => setIsLoading(false), 2000);
    }
  };

  if (isLoading) {
    return (
      <LoadingScreen
        onComplete={handleLoadingComplete}
        duration={3000}
        pageType={loadingPageType}
      />
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Grid Background Pattern */}
      <BGPattern
        variant="grid"
        mask="fade-edges"
        size={50}
        fill="rgba(16, 185, 129, 0.15)"
        className="fixed inset-0"
      />

      <div className="relative z-10">
        <Header onPageChange={handlePageChange} currentPage={currentPage} />

        {currentPage === "professional" ? (
          // Professional Page
          <>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <DesignEdits />
            <Footer onPageChange={handlePageChange} />
          </>
        ) : currentPage === "personal" ? (
          // Personal Page
          <>
            <PersonalHero />
            <PersonalAbout />
            <Hobbies />
            <PersonalContact onPageChange={handlePageChange} />
          </>
        ) : (
          // Contact Page
          <Contact />
        )}
      </div>
    </div>
  );
}

export default App;
