import React from "react";
import { motion } from "framer-motion";

const rigItems = [
  {
    category: "Primary Monitor",
    name: "MSI MAG 27CQ6F",
    specs: "27\" | 1440P | 180Hz",
    url: "https://www.msi.com/Monitor/MAG-27CQ6F"
  },
  {
    category: "Secondary Monitor",
    name: "MSI PRO MP223",
    specs: "21\" | 1080P | 100Hz",
    url: "https://www.msi.com/Business-Productivity-Monitor/PRO-MP223"
  },
  {
    category: "Laptop",
    name: "Dell G15 5511",
    specs: "RTX 3050 | i7-11800H | 120Hz",
    url: "https://www.dell.com/support/manuals/en-us/g-series-15-5511-laptop/dell-g15-5511-setup-and-specifications/processor?guid=guid-b426df85-6237-4365-b1fc-c3bb6e190257&lang=en-us"
  },
  {
    category: "Daily Driver",
    name: "iPhone 17 Pro",
    specs: "A19 Pro | 48MP Fusion | iOS 27",
    url: "https://www.apple.com/shop/buy-iphone/iphone-17-pro"
  },
  {
    category: "Secondary Phone",
    name: "iPhone 11",
    specs: "A13 Bionic | 12MP | iOS 26",
    url: "https://support.apple.com/en-ae/111865"
  },
  {
    category: "Audio",
    name: "Airpods Gen 2",
    specs: "H1 Chip | 5 Hours | Bluetooth 5.0",
    url: "https://www.apple.com/eg/airpods-2nd-generation/specs/"
  },
  {
    category: "Mouse",
    name: "Razer Basilisk V3",
    specs: "26K DPI | 650IPS | 1000Hz",
    url: "https://www.razer.com/mena-en/gaming-mice/razer-basilisk-v3?srsltid=AfmBOoqP028JPM6PC_ir-cyJ8B_iYUKXpKEdL_Xgz-FqeEe02PlBkr6w"
  },
  {
    category: "Keyboard",
    name: "Aula F75 Black Thunder",
    specs: "75% | 4000 mAh | 16.8 Mil RGB",
    url: "https://aulakeyboard.com/product/aula-f75/?srsltid=AfmBOop-P5OQFdcCxXqkmtkEJ7jOx94dFjOaFKbhO1R0H38KSs9qqyuo"
  }
];

const MyRig = () => {
  return (
    <section className="pt-4 pb-20 relative z-10" style={{ backgroundColor: "#1d1d22" }}>
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

          {/* Left Column: Title */}
          <div className="lg:w-[15%] flex flex-col">
            <div className="flex flex-col items-start pl-2">
              <h2 className="text-3xl md:text-4xl text-white tracking-tight" style={{ fontWeight: 300 }}>
                My Rig
              </h2>
              {/* Circular timeline marker from the reference image */}
              <div className="w-5 h-5 rounded-full border border-gray-600 mt-4 opacity-50 hidden lg:block ml-8"></div>
            </div>
          </div>

          {/* Right Column: Grid */}
          <div className="lg:w-[85%] flex justify-center">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 lg:gap-x-12 w-full max-w-5xl">
              {rigItems.map((item, index) => (
                <motion.a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col group cursor-pointer"
                >
                  <div className="text-gray-400 text-sm md:text-[15px] mb-8 font-light transition-colors duration-300 group-hover:text-green-500">
                    {item.category}
                  </div>
                  <div className="text-white text-base md:text-lg tracking-wide mb-1 font-medium transition-colors duration-300 group-hover:text-green-400">
                    {item.name}
                  </div>
                  <div className="text-gray-500 text-sm transition-colors duration-300 group-hover:text-green-500/60">
                    {item.specs}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MyRig;
