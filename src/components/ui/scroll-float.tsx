import React, { useEffect, useMemo, useRef, ReactNode, RefObject } from "react";

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

export const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  stagger = 0.03,
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split("").map((char, index) => (
      <span
        className="inline-block char-animate opacity-0"
        key={index}
        style={{
          animationDelay: `${index * stagger}s`,
          transform: "translateY(100%)",
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }, [children, stagger]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const charElements = el.querySelectorAll(".char-animate");
            charElements.forEach((char, index) => {
              setTimeout(() => {
                (char as HTMLElement).style.transform = "translateY(0%)";
                (char as HTMLElement).style.opacity = "1";
                (
                  char as HTMLElement
                ).style.transition = `all ${animationDuration}s cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
              }, index * stagger * 1000);
            });
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [animationDuration, stagger]);

  // Handle React nodes with green styling
  const processChildren = (node: ReactNode): ReactNode => {
    if (typeof node === "string") {
      return splitText;
    }

    if (React.isValidElement(node)) {
      return React.cloneElement(node, {
        children:
          typeof node.props.children === "string"
            ? node.props.children
                .split("")
                .map((char: string, index: number) => (
                  <span
                    className="inline-block char-animate opacity-0"
                    key={index}
                    style={{
                      animationDelay: `${
                        (splitText.length + index) * stagger
                      }s`,
                      transform: "translateY(100%)",
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))
            : node.props.children,
      });
    }

    return node;
  };

  return (
    <h2
      ref={containerRef}
      className={`my-5 overflow-hidden ${containerClassName}`}
    >
      <span className={`inline-block ${textClassName}`}>
        {processChildren(children)}
      </span>
    </h2>
  );
};
