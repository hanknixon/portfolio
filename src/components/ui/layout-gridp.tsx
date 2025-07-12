"use client";
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

// Utility function to combine class names
const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-4 md:p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden cursor-pointer bg-gray-900/90 backdrop-blur-xl rounded-xl h-full w-full border border-green-400/20 hover:border-green-400/40 transition-all duration-300"
            )}
            layoutId={`card-${card.id}`}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}

      {/* Modal Overlay */}
      <AnimatePresence mode="wait">
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOutsideClick}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                duration: 0.3,
              }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-green-400/30 max-w-2xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <SelectedCard selected={selected} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <>
      <motion.img
        layoutId={`image-${card.id}-image`}
        src={card.thumbnail}
        height="500"
        width="500"
        className={cn(
          "object-cover object-center absolute inset-0 h-full w-full transition duration-200"
        )}
        alt="thumbnail"
      />
      {/* Overlay with title - only shown when NOT selected */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
        <div className="p-4 w-full">
          <h3 className="text-white font-bold text-lg md:text-xl">
            {getCardTitle(card)}
          </h3>
        </div>
      </div>
    </>
  );
};

// Helper function to extract title from card content
const getCardTitle = (card: Card) => {
  const titles: { [key: number]: string } = {
    1: "Technology & Innovation",
    2: "Cultural Heritage",
    3: "Gaming & Adventures",
    4: "Meaningful Connections",
  };
  return titles[card.id] || "Story";
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="relative h-full w-full">
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={selected?.thumbnail}
          alt="Selected card"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="p-6 max-h-[calc(80vh-12rem)] overflow-y-auto"
      >
        {selected?.content}
      </motion.div>

      {/* Close button */}
      <button
        className="absolute top-4 right-4 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
        onClick={(e) => {
          e.stopPropagation();
          // This will be handled by the parent click
        }}
      >
        ✕
      </button>
    </div>
  );
};
