import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Note: SplitText is a premium GSAP plugin. For demo purposes, we'll create a simple alternative
// that splits text into characters and animates them

gsap.registerPlugin(ScrollTrigger);

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words" | "lines";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties["textAlign"];
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current || !text) return;

    const el = ref.current;
    const chars = el.querySelectorAll(".split-char");

    if (chars.length === 0) return;

    // Set initial state
    gsap.set(chars, from);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
      onComplete: onLetterAnimationComplete,
    });

    tl.to(chars, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
    });

    return () => {
      tl.kill();
    };
  }, [
    text,
    delay,
    duration,
    ease,
    from,
    to,
    threshold,
    rootMargin,
    onLetterAnimationComplete,
  ]);

  const splitTextIntoChars = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className="split-char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  const splitTextIntoWords = (text: string) => {
    return text.split(" ").map((word, index) => (
      <span key={index} className="split-char inline-block mr-2">
        {word}
      </span>
    ));
  };

  const renderSplitText = () => {
    switch (splitType) {
      case "words":
        return splitTextIntoWords(text);
      case "chars":
      default:
        return splitTextIntoChars(text);
    }
  };

  return (
    <div
      ref={ref}
      className={`split-parent overflow-hidden ${className}`}
      style={{ textAlign }}
    >
      {renderSplitText()}
    </div>
  );
};

export default SplitText;
