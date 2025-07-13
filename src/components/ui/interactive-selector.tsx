import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Option {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

interface InteractiveSelectorProps {
  options: Option[];
  className?: string;
}

const InteractiveSelector: React.FC<InteractiveSelectorProps> = ({
  options,
  className = "",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleOptions, setVisibleOptions] = useState<number[]>([]);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const handleOptionClick = useCallback(
    (index: number) => {
      if (index !== activeIndex) {
        setActiveIndex(index);
        setIsAutoPlay(false);
        setTimeout(() => setIsAutoPlay(true), 3000);
      }
    },
    [activeIndex]
  );

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % options.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 3000);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? options.length - 1 : prev - 1));
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 3000);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Auto-rotate functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % options.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [options.length, isAutoPlay]);

  // Staggered entrance animation
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    setVisibleOptions([]);

    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setVisibleOptions((prev) => [...prev, i]);
      }, i * 100);
      timers.push(timer);
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [options]);

  return (
    <div className={`w-full ${className}`}>
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="flex w-full max-w-[1100px] mx-auto h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          {options.map((option, index) => {
            const isActive = activeIndex === index;
            const isVisible = visibleOptions.includes(index);

            return (
              <div
                key={`${option.title}-${index}`}
                className={`
                  relative cursor-pointer overflow-hidden
                  transition-all duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                  ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }
                  ${isActive ? "flex-[7]" : "flex-1"}
                  ${index === 0 ? "rounded-l-2xl" : ""}
                  ${index === options.length - 1 ? "rounded-r-2xl" : ""}
                `}
                style={{
                  backgroundImage: `url('${option.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  minWidth: "80px",
                  border: `3px solid ${isActive ? "#10b981" : "#374151"}`,
                  boxShadow: isActive
                    ? "0 8px 32px rgba(16, 185, 129, 0.4), inset 0 0 0 1px rgba(16, 185, 129, 0.2)"
                    : "0 4px 16px rgba(0, 0, 0, 0.3)",
                  transitionDelay: isVisible ? "0ms" : `${index * 150}ms`,
                }}
                onClick={() => handleOptionClick(index)}
              >
                <div
                  className={`
                    absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent
                    transition-opacity duration-500 ease-out
                    ${isActive ? "opacity-100" : "opacity-60"}
                  `}
                />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`
                        flex items-center justify-center rounded-2xl border-2
                        transition-all duration-500 ease-out
                        ${
                          isActive
                            ? "w-14 h-14 bg-green-400/90 border-green-300 backdrop-blur-sm"
                            : "w-12 h-12 bg-gray-800/80 border-gray-600 backdrop-blur-sm"
                        }
                      `}
                    >
                      <div
                        className={`transition-colors duration-300 ${
                          isActive ? "text-black" : "text-white"
                        }`}
                      >
                        {option.icon}
                      </div>
                    </div>

                    <div
                      className={`
                        text-white overflow-hidden
                        transition-all duration-500 ease-out
                        ${
                          isActive
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-6"
                        }
                      `}
                    >
                      <h3
                        className="text-xl font-bold mb-1 leading-tight"
                        style={{ transitionDelay: isActive ? "100ms" : "0ms" }}
                      >
                        {option.title}
                      </h3>
                      <p
                        className="text-sm text-gray-200 leading-relaxed"
                        style={{ transitionDelay: isActive ? "200ms" : "0ms" }}
                      >
                        {option.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`
                    absolute top-4 right-4 w-3 h-3 rounded-full
                    transition-all duration-300 ease-out
                    ${
                      isActive
                        ? "bg-green-400 shadow-lg shadow-green-400/50 scale-100"
                        : "bg-white/60 scale-75 opacity-0 group-hover:opacity-100"
                    }
                  `}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Layout - Clean and Minimal */}
      <div className="md:hidden">
        <div className="relative w-full max-w-md mx-auto">
          {/* Main Card */}
          <div
            className="relative aspect-[4/5] rounded-3xl overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="absolute inset-0 transition-all duration-700 ease-out"
              style={{
                backgroundImage: `url('${options[activeIndex].image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Strong gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90" />

              {/* Content overlay with background */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <div className="flex items-start gap-4">
                    {/* Clean icon */}
                    <div className="flex items-center justify-center w-12 h-12 bg-green-400/90 backdrop-blur-md rounded-2xl border border-green-300/50">
                      <div className="text-black">
                        {options[activeIndex].icon}
                      </div>
                    </div>

                    {/* Clean typography with better contrast */}
                    <div className="text-white flex-1">
                      <h3 className="text-2xl font-bold mb-2 leading-tight text-white drop-shadow-lg">
                        {options[activeIndex].title}
                      </h3>
                      <p className="text-gray-100 text-sm leading-relaxed drop-shadow-md">
                        {options[activeIndex].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Minimal navigation */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
              <button
                onClick={prevSlide}
                className="pointer-events-auto w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
                aria-label="Previous"
              >
                <ChevronLeft size={16} />
              </button>

              <button
                onClick={nextSlide}
                className="pointer-events-auto w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
                aria-label="Next"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Minimal dots indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {options.map((_, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                className={`
                  transition-all duration-300 rounded-full
                  ${
                    activeIndex === index
                      ? "w-8 h-2 bg-green-400"
                      : "w-2 h-2 bg-gray-600 hover:bg-gray-500"
                  }
                `}
                aria-label={`View ${options[index].title}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop progress indicator */}
      <div className="hidden md:flex justify-center mt-6 gap-2">
        {options.map((_, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            className={`
              w-2 h-2 rounded-full transition-all duration-300 ease-out
              ${
                activeIndex === index
                  ? "bg-green-400 w-8"
                  : "bg-gray-600 hover:bg-gray-500"
              }
            `}
            aria-label={`View ${options[index].title}`}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(InteractiveSelector);
