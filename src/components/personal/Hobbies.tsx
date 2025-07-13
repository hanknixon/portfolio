import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Carousel, Card } from "../ui/apple-cards-carousel";

const Hobbies = () => {
  const { ref: hobbiesRef, isVisible: hobbiesVisible } = useScrollAnimation();
  const [selectedHobby, setSelectedHobby] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal Component
  const HobbyModal = ({ isOpen, onClose, hobby }) => {
    if (!isOpen || !hobby) return null;

    // Convert content to match Photography layout with dark green theme
    const getModalContent = () => {
      if (!hobby.content) return null;

      const hobbyTitle = hobby.title;

      if (hobbyTitle === "Food Explorer") {
        return (
          <div className="p-8" style={{ backgroundColor: "#1d1d22" }}>
            {/* Hero Section */}
            <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
              <img
                src="/images/foodbg.jpg"
                alt="Culinary Adventures"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">
                    Culinary Adventures
                  </h3>
                  <p className="text-lg opacity-90">
                    Exploring flavors from around the world
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                Food is more than sustenance—it's culture, art, and memory all
                rolled into one. I love exploring different cuisines and
                discovering how flavors tell stories of their origins. Each dish
                is a journey, and I'm always excited to try something new or
                perfect a classic.
              </p>
            </div>

            {/* Featured Foods Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-green-400/20">
                <img
                  src="/images/pizza.png"
                  className="w-full h-48 object-cover"
                  alt="Pizza"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white mb-2">Pizza</h4>
                  <p className="text-gray-300 text-sm">
                    The perfect combination of simplicity and endless
                    possibilities
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-green-400/20">
                <img
                  src="/images/butterchicken.png"
                  className="w-full h-48 object-cover"
                  alt="Butter Chicken"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white mb-2">
                    Butter Chicken
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Rich, creamy, and soul-warming comfort food at its finest
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-green-400/20">
                <img
                  src="/images/nashville.png"
                  className="w-full h-48 object-cover"
                  alt="Nashville Chicken Sandwich"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white mb-2">
                    Nashville Chicken Sandwich
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Perfect balance of heat, crunch, and flavor
                  </p>
                </div>
              </div>
            </div>

            {/* Food Philosophy */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-green-400/10 rounded-2xl border border-green-400/30">
                <p className="text-green-400 italic font-medium">
                  "Every dish tells a story of its culture and origin."
                </p>
              </div>
              <div className="text-center p-6 bg-green-400/10 rounded-2xl border border-green-400/30">
                <p className="text-green-400 italic font-medium">
                  "Food is the universal language that brings people together."
                </p>
              </div>
              <div className="text-center p-6 bg-green-400/10 rounded-2xl border border-green-400/30">
                <p className="text-green-400 italic font-medium">
                  "Great flavors are memories waiting to be made."
                </p>
              </div>
            </div>
          </div>
        );
      }

      if (hobbyTitle === "Music Lover") {
        return (
          <div className="p-8" style={{ backgroundColor: "#1d1d22" }}>
            {/* Hero Section */}
            <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80"
                alt="Musical Journey"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">Musical Journey</h3>
                  <p className="text-lg opacity-90">
                    The soundtrack to my life
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                Music is the soundtrack to my life—it fuels my creativity, helps
                me focus during coding sessions, and provides the emotional
                backdrop to every moment. From timeless classics to modern hits,
                I believe great music transcends genres and generations.
              </p>
            </div>

            {/* Music Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-green-400/20">
                <img
                  src="/images/thriller.jpg"
                  className="w-full h-48 object-cover"
                  alt="Thriller"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white mb-2">
                    Thriller
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Michael Jackson - The King of Pop at his absolute best
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-green-400/20">
                <img
                  src="/images/cinnamongirl.jpg"
                  className="w-full h-48 object-cover"
                  alt="Cinnamon Girl"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white mb-2">
                    Cinnamon Girl
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Lana Del Rey - Dreamy and atmospheric for late-night
                    sessions
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-green-400/20">
                <img
                  src="/images/romanreigns.jpg"
                  className="w-full h-48 object-cover"
                  alt="Head of the Table"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white mb-2">
                    Head of the Table
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Roman Reigns - Raw power and confidence for challenging
                    projects
                  </p>
                </div>
              </div>
            </div>

            {/* Music Philosophy */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-green-400/10 rounded-2xl border border-green-400/30">
                <p className="text-green-400 italic font-medium">
                  "Music is the universal language of the soul."
                </p>
              </div>
              <div className="text-center p-6 bg-green-400/10 rounded-2xl border border-green-400/30">
                <p className="text-green-400 italic font-medium">
                  "Every song has the power to transport you to another world."
                </p>
              </div>
              <div className="text-center p-6 bg-green-400/10 rounded-2xl border border-green-400/30">
                <p className="text-green-400 italic font-medium">
                  "Great music transcends time and speaks to every generation."
                </p>
              </div>
            </div>
          </div>
        );
      }

      if (hobbyTitle === "Photography") {
        return (
          <div className="p-8" style={{ backgroundColor: "#1d1d22" }}>
            {/* Hero Section */}
            <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
              <img
                src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=1200&q=80"
                alt="Photography"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">Through the Lens</h3>
                  <p className="text-lg opacity-90">
                    Capturing moments and perspectives
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                Photography allows me to freeze moments in time and see the
                world from different perspectives. Whether it's the energy of
                street photography or the serenity of landscapes, every shot
                tells a story waiting to be discovered.
              </p>
            </div>

            {/* Photography Types */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-green-400/20">
                <img
                  src="/images/photo1.png"
                  className="w-full h-48 object-cover"
                  alt="Street photography"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white mb-2">
                    Street Photography
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Capturing urban life and human stories
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-green-400/20">
                <img
                  src="/images/photo2.png"
                  className="w-full h-48 object-cover"
                  alt="Landscape photography"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white mb-2">
                    Landscape Photography
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Natural beauty and serene moments
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-green-400/20">
                <img
                  src="/images/photo3.png"
                  className="w-full h-48 object-cover"
                  alt="Urban photography"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white mb-2">
                    Urban Photography
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Architecture and city aesthetics
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophy Quotes */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-green-400/10 rounded-2xl border border-green-400/30">
                <p className="text-green-400 italic font-medium">
                  "Every frame captures a piece of the soul of the moment."
                </p>
              </div>
              <div className="text-center p-6 bg-green-400/10 rounded-2xl border border-green-400/30">
                <p className="text-green-400 italic font-medium">
                  "The best camera is the one that's with you when inspiration
                  strikes."
                </p>
              </div>
              <div className="text-center p-6 bg-green-400/10 rounded-2xl border border-green-400/30">
                <p className="text-green-400 italic font-medium">
                  "Photography is about finding beauty in the ordinary."
                </p>
              </div>
            </div>
          </div>
        );
      }

      if (hobbyTitle === "Strategic Gaming") {
        return (
          <div className="p-8" style={{ backgroundColor: "#1d1d22" }}>
            {/* Hero Section */}
            <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
              <img
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80"
                alt="Gaming"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">
                    Story-Driven Adventures
                  </h3>
                  <p className="text-lg opacity-90">
                    Interactive narratives that captivate
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm drawn to games that tell compelling stories and create
                emotional connections. There's something magical about
                interactive narratives where your choices shape the outcome.
                Story mode games offer immersive experiences that combine great
                writing, character development, and meaningful decision-making.
              </p>
            </div>

            {/* Featured Games */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-green-400/20">
                <img
                  src="/images/rdr2.jpg"
                  className="w-full h-48 object-cover"
                  alt="Red Dead Redemption 2"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white mb-2">
                    Red Dead Redemption 2
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Epic Western Adventure - Masterpiece of storytelling
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-green-400/20">
                <img
                  src="/images/dbh.jpg"
                  className="w-full h-48 object-cover"
                  alt="Detroit Become Human"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white mb-2">
                    Detroit: Become Human
                  </h4>
                  <p className="text-gray-300 text-sm">
                    AI Consciousness Drama - Every choice carries weight
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-green-400/20">
                <img
                  src="/images/godofwar.jpg"
                  className="w-full h-48 object-cover"
                  alt="God of War"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white mb-2">
                    God of War
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Mythological Journey - Epic father-son story
                  </p>
                </div>
              </div>
            </div>

            {/* Gaming Philosophy */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-green-400/10 rounded-2xl border border-green-400/30">
                <p className="text-green-400 italic font-medium">
                  "Great games are interactive stories that stay with you
                  forever."
                </p>
              </div>
              <div className="text-center p-6 bg-green-400/10 rounded-2xl border border-green-400/30">
                <p className="text-green-400 italic font-medium">
                  "Every choice in a story shapes not just the game, but the
                  player."
                </p>
              </div>
              <div className="text-center p-6 bg-green-400/10 rounded-2xl border border-green-400/30">
                <p className="text-green-400 italic font-medium">
                  "Gaming is the art of living a thousand different lives."
                </p>
              </div>
            </div>
          </div>
        );
      }

      if (hobbyTitle === "Travel & Culture") {
        return (
          <div className="p-8" style={{ backgroundColor: "#1d1d22" }}>
            {/* Hero Section */}
            <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80"
                alt="Travel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">UAE Adventures</h3>
                  <p className="text-lg opacity-90">
                    Diverse landscapes and rich culture
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                The UAE holds a special place in my heart—it's where I was born
                and where I learned to appreciate the beauty of diverse
                landscapes and cultures. From towering skyscrapers to vast
                deserts and majestic mountains, this country offers incredible
                variety in just a small area.
              </p>
            </div>

            {/* Travel Destinations */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-green-400/20">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80"
                  className="w-full h-48 object-cover"
                  alt="Dubai Downtown"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white mb-2">
                    Dubai Downtown
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Modern architecture and urban sophistication
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-green-400/20">
                <img
                  src="/images/fujairah.jpg"
                  className="w-full h-48 object-cover"
                  alt="Fujairah Desert"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white mb-2">
                    Fujairah Desert
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Endless golden sands and tranquil beauty
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-green-400/20">
                <img
                  src="/images/jabelhafeet.jpg"
                  className="w-full h-48 object-cover"
                  alt="Jebel Hafeet Mountain"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white mb-2">
                    Jebel Hafeet Mountain
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Majestic peaks and breathtaking views
                  </p>
                </div>
              </div>
            </div>

            {/* Travel Philosophy */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-green-400/10 rounded-2xl border border-green-400/30">
                <p className="text-green-400 italic font-medium">
                  "Every journey begins with a single step, but the memories
                  last a lifetime."
                </p>
              </div>
              <div className="text-center p-6 bg-green-400/10 rounded-2xl border border-green-400/30">
                <p className="text-green-400 italic font-medium">
                  "The UAE taught me that beauty comes in many forms—urban,
                  natural, and cultural."
                </p>
              </div>
              <div className="text-center p-6 bg-green-400/10 rounded-2xl border border-green-400/30">
                <p className="text-green-400 italic font-medium">
                  "Home is not just where you're from, but where your heart
                  finds peace."
                </p>
              </div>
            </div>
          </div>
        );
      }

      // For Research hobby, show the original content with dark theme
      return (
        <div className="p-8" style={{ backgroundColor: "#1d1d22" }}>
          {hobby.content}
        </div>
      );
    };

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            data-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                duration: 0.4,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl mx-4 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-[70]"
              style={{ backgroundColor: "#1d1d22" }}
            >
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="flex items-center justify-between p-6 border-b border-green-400/20 sticky top-0 z-10"
                style={{ backgroundColor: "#1d1d22" }}
              >
                <div className="flex items-center space-x-4">
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-green-400/20 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-300" />
                  </button>
                  <h2 className="text-2xl font-bold text-white">
                    {hobby.title}
                  </h2>
                </div>
                <div className="text-sm text-green-400 uppercase tracking-wide font-medium">
                  {hobby.category}
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="flex-1 overflow-y-auto"
              >
                {getModalContent()}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  // Original content components remain the same...
  const FoodContent = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
          Culinary Adventures
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
          Food is more than sustenance—it's culture, art, and memory all rolled
          into one. I love exploring different cuisines and discovering how
          flavors tell stories of their origins. Each dish is a journey, and I'm
          always excited to try something new or perfect a classic.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 rounded-2xl p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
          <div className="text-center">
            <div className="text-6xl mb-4">🍕</div>
            <h4 className="text-xl font-bold text-white mb-3">Pizza</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              The perfect combination of simplicity and endless
              possibilities—every slice tells a different story.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 rounded-2xl p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
          <div className="text-center">
            <div className="text-6xl mb-4">🍛</div>
            <h4 className="text-xl font-bold text-white mb-3">
              Butter Chicken
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Rich, creamy, and soul-warming—this dish represents comfort food
              at its absolute finest.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 rounded-2xl p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
          <div className="text-center">
            <div className="text-6xl mb-4">🥪</div>
            <h4 className="text-xl font-bold text-white mb-3">
              Nashville Chicken Sandwich
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              The perfect balance of heat, crunch, and flavor—a modern classic
              that never disappoints.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const MusicContent = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
          Musical Journey
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
          Music is the soundtrack to my life—it fuels my creativity, helps me
          focus during coding sessions, and provides the emotional backdrop to
          every moment. From timeless classics to modern hits, I believe great
          music transcends genres and generations.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 rounded-2xl p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎵</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Thriller</h4>
            <p className="text-green-400 text-sm mb-3">Michael Jackson</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              The King of Pop at his absolute best—timeless energy that never
              gets old.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 rounded-2xl p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌙</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Cinnamon Girl</h4>
            <p className="text-green-400 text-sm mb-3">Lana Del Rey</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Dreamy, atmospheric, and hauntingly beautiful—perfect for
              late-night coding sessions.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 rounded-2xl p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👑</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">
              Head of the Table
            </h4>
            <p className="text-green-400 text-sm mb-3">Roman Reigns</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Raw power and confidence—the perfect anthem for tackling
              challenging projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const PhotographyContent = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
          Through the Lens
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
          Photography allows me to freeze moments in time and see the world from
          different perspectives. Whether it's the energy of street photography
          or the serenity of landscapes, every shot tells a story waiting to be
          discovered.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 rounded-2xl overflow-hidden border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80"
            className="w-full h-48 object-cover"
            alt="Street photography"
          />
          <div className="p-4 text-center">
            <h4 className="text-lg font-bold text-white mb-2">
              Street Photography
            </h4>
            <p className="text-gray-300 text-sm">
              Capturing urban life and human stories
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 rounded-2xl overflow-hidden border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80"
            className="w-full h-48 object-cover"
            alt="Landscape photography"
          />
          <div className="p-4 text-center">
            <h4 className="text-lg font-bold text-white mb-2">
              Landscape Photography
            </h4>
            <p className="text-gray-300 text-sm">
              Natural beauty and serene moments
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 rounded-2xl overflow-hidden border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&q=80"
            className="w-full h-48 object-cover"
            alt="Urban photography"
          />
          <div className="p-4 text-center">
            <h4 className="text-lg font-bold text-white mb-2">
              Urban Photography
            </h4>
            <p className="text-gray-300 text-sm">
              Architecture and city aesthetics
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="text-center p-4 bg-green-400/10 rounded-xl border border-green-400/30">
          <p className="text-green-400 italic">
            "Every frame captures a piece of the soul of the moment."
          </p>
        </div>
        <div className="text-center p-4 bg-green-400/10 rounded-xl border border-green-400/30">
          <p className="text-green-400 italic">
            "The best camera is the one that's with you when inspiration
            strikes."
          </p>
        </div>
        <div className="text-center p-4 bg-green-400/10 rounded-xl border border-green-400/30">
          <p className="text-green-400 italic">
            "Photography is about finding beauty in the ordinary."
          </p>
        </div>
      </div>
    </div>
  );

  const ResearchContent = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
          Deep Dives & Discovery
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
          Knowledge is power, and I'm constantly fascinated by the depth of
          information available in our digital age. I love diving deep into
          topics that challenge conventional thinking and exploring the
          intersections between technology, creativity, and human behavior.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 rounded-2xl p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
          <div className="text-center">
            <div className="text-6xl mb-4">🤖</div>
            <h4 className="text-xl font-bold text-white mb-3">Generative AI</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Exploring how AI is reshaping creative industries, from code
              generation to art creation, and its implications for
              human-computer collaboration.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 rounded-2xl p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
          <div className="text-center">
            <div className="text-6xl mb-4">🎮</div>
            <h4 className="text-xl font-bold text-white mb-3">
              Game Development
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Understanding game mechanics, player psychology, and how
              interactive storytelling creates immersive experiences.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 rounded-2xl p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
          <div className="text-center">
            <div className="text-6xl mb-4">🕵️</div>
            <h4 className="text-xl font-bold text-white mb-3">
              Conspiracy Theories
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Analyzing the psychology behind alternative narratives and how
              information spreads—fascinating from a sociological perspective.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const GamingContent = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
          Story-Driven Adventures
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
          I'm drawn to games that tell compelling stories and create emotional
          connections. There's something magical about interactive narratives
          where your choices shape the outcome. Story mode games offer immersive
          experiences that combine great writing, character development, and
          meaningful decision-making.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 rounded-2xl p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤠</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">
              Red Dead Redemption
            </h4>
            <p className="text-green-400 text-sm mb-3">
              Epic Western Adventure
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              A masterpiece of storytelling—the emotional depth and character
              development is unmatched.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 rounded-2xl p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">
              Detroit: Become Human
            </h4>
            <p className="text-green-400 text-sm mb-3">
              AI Consciousness Drama
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Thought-provoking narrative about AI consciousness—every choice
              carries real weight.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 rounded-2xl p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚔️</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">God of War</h4>
            <p className="text-green-400 text-sm mb-3">Mythological Journey</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Epic mythology meets personal growth—the father-son journey is
              incredibly moving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const TravelContent = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
          UAE Adventures
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
          The UAE holds a special place in my heart—it's where I was born and
          where I learned to appreciate the beauty of diverse landscapes and
          cultures. From towering skyscrapers to vast deserts and majestic
          mountains, this country offers incredible variety in just a small
          area.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 rounded-2xl overflow-hidden border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80"
            className="w-full h-48 object-cover"
            alt="Dubai Downtown"
          />
          <div className="p-4 text-center">
            <h4 className="text-lg font-bold text-white mb-2">
              Dubai Downtown
            </h4>
            <p className="text-gray-300 text-sm">
              Modern architecture and urban sophistication
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 rounded-2xl overflow-hidden border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80"
            className="w-full h-48 object-cover"
            alt="Fujairah Desert"
          />
          <div className="p-4 text-center">
            <h4 className="text-lg font-bold text-white mb-2">
              Fujairah Desert
            </h4>
            <p className="text-gray-300 text-sm">
              Endless golden sands and tranquil beauty
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 rounded-2xl overflow-hidden border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80"
            className="w-full h-48 object-cover"
            alt="Jebel Hafeet Mountain"
          />
          <div className="p-4 text-center">
            <h4 className="text-lg font-bold text-white mb-2">
              Jebel Hafeet Mountain
            </h4>
            <p className="text-gray-300 text-sm">
              Majestic peaks and breathtaking views
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="text-center p-4 bg-green-400/10 rounded-xl border border-green-400/30">
          <p className="text-green-400 italic">
            "Every journey begins with a single step, but the memories last a
            lifetime."
          </p>
        </div>
        <div className="text-center p-4 bg-green-400/10 rounded-xl border border-green-400/30">
          <p className="text-green-400 italic">
            "The UAE taught me that beauty comes in many forms—urban, natural,
            and cultural."
          </p>
        </div>
        <div className="text-center p-4 bg-green-400/10 rounded-xl border border-green-400/30">
          <p className="text-green-400 italic">
            "Home is not just where you're from, but where your heart finds
            peace."
          </p>
        </div>
      </div>
    </div>
  );

  const openModal = (hobby) => {
    setSelectedHobby(hobby);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedHobby(null);
    setTimeout(() => setSelectedHobby(null), 300);
  };

  const hobbiesData = [
    {
      category: "Culinary",
      title: "Food Explorer",
      src: "/images/foodbg.jpg",
      content: <FoodContent />,
    },
    {
      category: "Audio",
      title: "Music Lover",
      src: "/images/music.jpg",
      content: <MusicContent />,
    },
    {
      category: "Visual",
      title: "Photography",
      src: "/images/camera.jpg",
      content: <PhotographyContent />,
    },
    {
      category: "Knowledge",
      title: "Researching",
      src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
      content: <ResearchContent />,
    },
    {
      category: "Gaming",
      title: "Strategic Gaming",
      src: "/images/gamingbg.jpg",
      content: <GamingContent />,
    },
    {
      category: "Adventure",
      title: "Travel & Culture",
      src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
      content: <TravelContent />,
    },
  ];

  // Custom Card component that opens modal instead of using the built-in modal
  const CustomCard = ({ card, index }) => {
    return (
      <motion.button
        onClick={() => openModal(card)}
        className="relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-900/80 backdrop-blur-xl border border-green-400/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105 md:h-[40rem] md:w-96"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="relative z-40 p-8">
          <p className="text-left font-sans text-sm font-medium text-green-400 md:text-base">
            {card.category}
          </p>
          <p className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl">
            {card.title}
          </p>
        </div>
        <img
          src={card.src}
          alt={card.title}
          className="absolute inset-0 z-10 object-cover h-full w-full transition duration-300"
        />
      </motion.button>
    );
  };

  const cards = hobbiesData.map((card, index) => (
    <CustomCard key={card.src} card={card} index={index} />
  ));

  return (
    <section
      id="hobbies"
      className="py-20 relative"
      style={{ backgroundColor: "#1d1d22" }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={hobbiesRef}
            initial={{ opacity: 0, y: 50 }}
            animate={
              hobbiesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 brutal-font">
              What I Love{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                Doing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the passions and interests that fuel my creativity and
              keep me inspired beyond the world of code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              hobbiesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Carousel items={cards} />
          </motion.div>
        </div>
      </div>

      {/* Apple-style Modal */}
      <HobbyModal
        isOpen={isModalOpen}
        onClose={closeModal}
        hobby={selectedHobby}
      />
    </section>
  );
};

export default Hobbies;
