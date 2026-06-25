import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import LoadingScreen from "./components/LoadingScreen";
import { BGPattern } from "./components/ui/bg-pattern";
import Contact from "./components/contact/Contact";
import { EasterEggCall } from "./components/EasterEggCall";
import { CustomCursor } from "./components/CustomCursor";

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
import MyRig from "./components/personal/MyRig";
import PersonalContact from "./components/personal/PersonalContact";

// Legal Pages & Popups
import PrivacyPolicy from "./components/legal/PrivacyPolicy";
import CookiePolicy from "./components/legal/CookiePolicy";
import LegalNotice from "./components/legal/LegalNotice";
import { CookiePopup } from "./components/legal/CookiePopup";

type PageType = "professional" | "personal" | "contact" | "privacy-policy" | "cookie-policy" | "legal-notice";

function App() {
  const getInitialPage = (): PageType => {
    const path = window.location.pathname;
    if (path === "/personal") return "personal";
    if (path === "/contact") return "contact";
    if (path === "/privacy-policy") return "privacy-policy";
    if (path === "/cookie-policy") return "cookie-policy";
    if (path === "/legal-notice") return "legal-notice";
    return "professional";
  };

  const [currentPage, setCurrentPage] = useState<PageType>(getInitialPage());
  
  // We determine initial loading state based on first visit to professional page
  const [isLoading, setIsLoading] = useState(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    const initialPage = getInitialPage();
    return !hasVisited && initialPage === "professional";
  });
  
  const [loadingPageType, setLoadingPageType] = useState<"professional" | "personal" | "contact" | "random">("random");

  useEffect(() => {
    // Show loading screen only on first visit to professional page
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      setLoadingPageType("random");
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      setCurrentPage(getInitialPage());
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    setCurrentPage(getInitialPage());
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handlePageChange = (page: PageType) => {
    if (page !== currentPage) {
      // Force scroll to top immediately and robustly
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: "instant" }), 10);
      
      setCurrentPage(page);

      const newPath =
        page === "personal"
          ? "/personal"
          : page === "contact"
            ? "/contact"
            : page === "privacy-policy"
              ? "/privacy-policy"
              : page === "cookie-policy"
                ? "/cookie-policy"
                : page === "legal-notice"
                  ? "/legal-notice"
                  : "/";
      window.history.pushState({ page }, "", newPath);
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

      {/* Global Elements */}
      <CustomCursor />
      <CookiePopup />

      <div className="relative z-10">
        <Header onPageChange={handlePageChange} currentPage={currentPage} />

        {currentPage === "professional" ? (
          // Professional Page
          <>
            <EasterEggCall />
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
            <MyRig />
            <PersonalContact onPageChange={handlePageChange} />
          </>
        ) : currentPage === "contact" ? (
          // Contact Page
          <Contact onPageChange={handlePageChange} />
        ) : currentPage === "privacy-policy" ? (
          <PrivacyPolicy onPageChange={handlePageChange} />
        ) : currentPage === "cookie-policy" ? (
          <CookiePolicy onPageChange={handlePageChange} />
        ) : currentPage === "legal-notice" ? (
          <LegalNotice onPageChange={handlePageChange} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
