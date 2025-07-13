"use client";

import React from "react";

interface AnimatedUnderlineProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export const AnimatedUnderline: React.FC<AnimatedUnderlineProps> = ({
  href,
  children,
  className = "",
  target,
  rel,
  onClick,
}) => {
  const baseClasses = `
    relative inline-flex items-center gap-2 
    text-green-400 hover:text-green-300 
    transition-colors duration-300 
    after:absolute after:bg-green-400 hover:after:bg-green-300 
    after:bottom-0 after:left-0 after:h-0.5 after:w-full 
    after:origin-bottom-right after:scale-x-0 
    hover:after:origin-bottom-left hover:after:scale-x-100 
    after:transition-transform after:ease-in-out after:duration-300
  `;

  const combinedClasses = `${baseClasses} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClasses}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <span
      className={combinedClasses}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </span>
  );
};

// Demo component
const AnimatedUnderlineDemo = () => {
  return (
    <div className="space-y-4">
      <AnimatedUnderline href="#" className="text-2xl font-semibold">
        Hover me
      </AnimatedUnderline>

      <AnimatedUnderline
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg"
      >
        External Link
      </AnimatedUnderline>

      <AnimatedUnderline
        onClick={() => console.log("Clicked!")}
        className="text-base cursor-pointer"
      >
        Clickable Text
      </AnimatedUnderline>
    </div>
  );
};

export { AnimatedUnderlineDemo };
