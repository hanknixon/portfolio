"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  expandedContent?: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail?: string;
  hasImage?: boolean;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setSelected(null);
  };

  return (
    <div className="w-full min-h-[600px] p-4 md:p-10 max-w-7xl mx-auto relative">
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card, i) => (
          <motion.div
            key={card.id}
            onClick={() => handleClick(card)}
            className={cn(
              "relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-300",
              card.className,
              selected?.id === card.id ? "opacity-0" : "opacity-100"
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            layout
          >
            {/* Card Background */}
            <div
              className={cn(
                "w-full h-full min-h-[280px] p-6 flex flex-col",
                card.hasImage
                  ? "bg-gradient-to-br from-black/60 to-black/40 relative"
                  : "bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-green-400/20 hover:border-green-400/40"
              )}
            >
              {/* Background Image (only for Full-Stack Engineer) */}
              {card.hasImage && card.thumbnail && (
                <>
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${card.thumbnail})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50" />
                </>
              )}

              {/* Content */}
              <div className="relative z-10 h-full">{card.content}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOutsideClick}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              layoutId={`card-${selected.id}`}
              className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={cn(
                  "w-full p-8",
                  selected.hasImage
                    ? "bg-gradient-to-br from-black/90 to-black/70 relative min-h-[400px]"
                    : "bg-gradient-to-br from-gray-800 to-gray-900 border border-green-400/30"
                )}
              >
                {/* Background Image for modal */}
                {selected.hasImage && selected.thumbnail && (
                  <>
                    <div
                      className="absolute inset-0 bg-cover bg-center rounded-2xl"
                      style={{ backgroundImage: `url(${selected.thumbnail})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60 rounded-2xl" />
                  </>
                )}

                {/* Modal Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="relative z-10"
                >
                  {selected.expandedContent || selected.content}
                </motion.div>

                {/* Close button */}
                <button
                  onClick={handleOutsideClick}
                  className="absolute top-4 right-4 w-8 h-8 bg-gray-700/80 hover:bg-gray-600/80 rounded-full flex items-center justify-center transition-colors z-20"
                >
                  <span className="text-white text-lg">×</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
