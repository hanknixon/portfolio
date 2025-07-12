import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { LayoutGrid } from "../ui/layout-gridp";
import { ScrollFloat } from "../ui/scroll-float";

const PersonalAbout = () => {
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();
  const { ref: devicesRef, isVisible: devicesVisible } = useScrollAnimation();

  const devices = [
    {
      id: 1,
      name: "Gaming Laptop",
      model: "Dell Gaming Series",
      image:
        "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g15-5515/media-gallery/notebook-g15-5515-gray-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3491&hei=2181&qlt=100,1&resMode=sharp2&size=3491,2181&chrss=full&imwidth=5000",
      specs: [
        { label: "Processor", value: "Intel i7-11800H" },
        { label: "Memory", value: "16 GB RAM" },
        { label: "Graphics", value: "RTX 3050Ti" },
        { label: "Storage", value: "1.5 TB SSD" },
      ],
      className: "md:col-span-2",
    },
    {
      id: 2,
      name: "iPhone 11",
      model: "Space Gray",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&.v=1566956144755",
      specs: [
        { label: "Display", value: "6.1-inch Liquid Retina" },
        { label: "Chip", value: "A13 Bionic" },
        { label: "Camera", value: "Dual 12MP System" },
        { label: "Storage", value: "128 GB" },
      ],
      className: "md:col-span-1",
    },
  ];

  // Story content components
  const TechStory = () => (
    <div>
      <h3 className="font-bold text-2xl md:text-3xl text-white mb-4">
        Technology & Innovation
      </h3>
      <p className="text-gray-300 leading-relaxed">
        I believe technology should enhance human experiences, not replace them.
        Every line of code I write is aimed at creating solutions that bring
        people closer together and make their lives easier. Whether it's
        building responsive web applications or crafting intuitive user
        interfaces, my focus is always on the human element behind the screen.
      </p>
    </div>
  );

  const CultureStory = () => (
    <div>
      <h3 className="font-bold text-2xl md:text-3xl text-white mb-4">
        Cultural Heritage
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Born in the UAE and now based in Kerala, India, I've been fortunate to
        experience diverse cultures firsthand. This multicultural background has
        shaped my approach to problem-solving and creativity. I've learned that
        the best solutions often come from understanding different perspectives
        and embracing the unique ways people think and work across cultures.
      </p>
    </div>
  );

  const LifestyleStory = () => (
    <div>
      <h3 className="font-bold text-2xl md:text-3xl text-white mb-4">
        Gaming & Adventures
      </h3>
      <p className="text-gray-300 leading-relaxed">
        When I'm not coding, you'll find me exploring places with friends,
        getting completely immersed in story-driven games, or planning what
        exciting project to code next. Gaming has taught me patience, strategic
        thinking, and the importance of good storytelling—skills that translate
        beautifully into software development. There's something magical about
        losing yourself in a well-crafted narrative, whether it's in a game or
        in elegant code.
      </p>
    </div>
  );

  const ConnectionsStory = () => (
    <div>
      <h3 className="font-bold text-2xl md:text-3xl text-white mb-4">
        Meaningful Connections
      </h3>
      <p className="text-gray-300 leading-relaxed">
        I believe in building meaningful connections, continuous learning, and
        creating solutions that make a positive impact. Whether it's
        collaborating with fellow developers, mentoring newcomers to tech, or
        simply having deep conversations over coffee, I value authentic
        relationships. These connections often lead to the most innovative ideas
        and remind me why I love what I do—it's all about the people we serve
        and work alongside.
      </p>
    </div>
  );

  const cards = [
    {
      id: 1,
      content: <TechStory />,
      className: "md:col-span-2 h-60 md:h-80",
      thumbnail: "/images/techinno.png",
    },
    {
      id: 2,
      content: <CultureStory />,
      className: "col-span-1 h-60 md:h-80",
      thumbnail: "/images/dubaioutside.jpg",
      expandedImage: "/images/dubaiinside.jpg",
    },
    {
      id: 3,
      content: <LifestyleStory />,
      className: "col-span-1 h-60 md:h-80",
      thumbnail: "/images/game.jpg",
    },
    {
      id: 4,
      content: <ConnectionsStory />,
      className: "md:col-span-2 h-60 md:h-80",
      thumbnail: "/images/group.jpg",
    },
  ];

  return (
    <section
      id="personal-about"
      className="py-20 relative"
      style={{ backgroundColor: "#1d1d22" }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title with ScrollFloat Animation */}
          <motion.div
            ref={aboutRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              aboutVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <ScrollFloat
              animationDuration={0.8}
              stagger={0.1}
              textClassName="text-4xl md:text-5xl font-bold brutal-font text-white"
              containerClassName="text-center"
            >
              Who{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                I Am
              </span>
            </ScrollFloat>
          </motion.div>

          {/* Interactive Story Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={
              aboutVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <LayoutGrid cards={cards} />
          </motion.div>

          {/* My Devices Section */}
          <motion.div
            ref={devicesRef}
            initial={{ opacity: 0, y: 50 }}
            animate={
              devicesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 brutal-font">
              My{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                Devices
              </span>
            </h2>

            {/* Gaming Laptop */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={
                devicesVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Laptop Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/images/dellg15.png"
                    alt="Dell G15 Gaming Laptop"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Laptop Specs */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Main Sidekick
                  </h3>
                  <p className="text-xl text-green-400 font-medium">
                    Dell G15 5511
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: "/icons/intel.png",
                      label: "Processor",
                      value: "Intel i7-11800H",
                    },
                    {
                      icon: "/icons/crucial.png",
                      label: "Memory",
                      value: "16 GB RAM",
                    },
                    {
                      icon: "/icons/rtx.jpg",
                      label: "Graphics",
                      value: "RTX 3050Ti",
                    },
                    {
                      icon: "/icons/wd.jpg",
                      label: "Storage",
                      value: "1.5 TB SSD",
                    },
                  ].map((spec, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        devicesVisible
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/30 backdrop-blur-sm border border-green-400/20 hover:border-green-400/40 transition-colors duration-300"
                    >
                      <div className="w-8 h-8 flex items-center justify-center">
                        <img
                          src={spec.icon}
                          alt={spec.label}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <span className="text-gray-400 text-sm block">
                          {spec.label}
                        </span>
                        <span className="text-white font-semibold text-lg">
                          {spec.value}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">
                    Primary Workstation
                  </span>
                </div>
              </div>
            </motion.div>

            {/* iPhone */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={
                devicesVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* iPhone Specs */}
              <div className="space-y-6 md:order-1">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    iPhone 11
                  </h3>
                  <p className="text-xl text-green-400 font-medium">
                    Space Gray
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: "/icons/apple.png",
                      label: "Display",
                      value: "6.1-inch Liquid Retina",
                    },
                    {
                      icon: "/icons/a13.jpg",
                      label: "Chip",
                      value: "A13 Bionic",
                    },
                    {
                      icon: "/icons/camera.png",
                      label: "Camera",
                      value: "Dual 12MP System",
                    },
                    {
                      icon: "/icons/11storage.png",
                      label: "Storage",
                      value: "128 GB",
                    },
                  ].map((spec, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        aboutVisible
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/30 backdrop-blur-sm border border-green-400/20 hover:border-green-400/40 transition-colors duration-300"
                    >
                      <div className="w-8 h-8 flex items-center justify-center">
                        <img
                          src={spec.icon}
                          alt={spec.label}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <span className="text-gray-400 text-sm block">
                          {spec.label}
                        </span>
                        <span className="text-white font-semibold text-lg">
                          {spec.value}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">
                    Daily Driver
                  </span>
                </div>
              </div>

              {/* iPhone Image */}
              <div className="relative md:order-2">
                <div className="relative overflow-hidden rounded-2xl flex justify-center">
                  <img
                    src="/images/iphone11.png"
                    alt="iPhone 11 Space Gray"
                    className="w-auto h-96 object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalAbout;
