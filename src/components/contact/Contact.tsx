import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Cal, { getCalApi } from "@calcom/embed-react";
import Footer from "../Footer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
  Youtube,
  MessageSquare,
  User,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface ContactProps {
  onPageChange?: (page: "professional" | "personal" | "contact" | "privacy-policy" | "cookie-policy" | "legal-notice") => void;
}

const Contact: React.FC<ContactProps> = ({ onPageChange }) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi("https://cal.eu/embed/embed.js");
      cal("init", "15-minute-inquiry-call", { origin: "https://cal.eu" });
      cal("ui", {"theme":"dark","cssVarsPerTheme":{"dark":{"cal-brand":"#4ade80"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  const contactInfo = [
    {
      iconSrc: "/icons/gmail.webp",
      label: "Email",
      value: "hank.enixon@gmail.com",
      href: "mailto:hank.enixon@gmail.com",
      color: "text-green-400",
    },
    {
      iconSrc: "icons/location.webp",
      label: "Location",
      value: "Sharjah, United Arab Emirates",
      href: null,
      color: "text-blue-400",
    },
    {
      iconSrc: "icons/clock.png",
      label: "Response Time",
      value: "Usually within 24 hours",
      href: null,
      color: "text-purple-400",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/hanknixon",
      color: "hover:bg-gray-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hanknixon/",
      color: "hover:bg-blue-600",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/h4nk_/",
      color: "hover:bg-pink-600",
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://www.youtube.com/@h4nkamv",
      color: "hover:bg-red-600",
    },
  ];

  return (
    <>
      <section
      id="contact"
      className="pt-28 pb-4 relative overflow-hidden"
      style={{ backgroundColor: "#1d1d22" }}
    >
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "url('/contact_bg_topo.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 brutal-font">
              Let's{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? Want to collaborate? Or just want to say
              hello? I'd love to hear from you. Let's create something amazing
              together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto mt-12">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3 space-y-12 lg:pt-20"
            >
              <div>
                <h3 className="text-xs font-bold tracking-[0.2em] text-green-400 uppercase mb-4">Contact me for</h3>
                <p className="text-[#a1a1aa] text-[15px] leading-relaxed">
                  Open to full-time software development opportunities, freelance web and UI/UX projects, Custom digital products — or simply to connect and chat.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold tracking-[0.2em] text-green-400 uppercase mb-4">Zero unread mails</h3>
                <p className="text-[#a1a1aa] text-[15px] leading-relaxed">
                  I'll see your message and reply with at-least one personal thought. Most replies inside 48 hours.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold tracking-[0.2em] text-green-400 uppercase mb-4">Where</h3>
                <p className="text-[#a1a1aa] text-[15px] leading-relaxed mb-1">
                  Sharjah, United Arab Emirates · UTC+4
                </p>
                <a href="mailto:hank.enixon@gmail.com" className="text-white hover:text-green-400 transition-colors text-[15px] border-b border-[#a1a1aa] hover:border-green-400 pb-0.5 inline-block mt-1">
                  hank.enixon@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Cal.com Embed */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-start-5 lg:col-span-8 w-full h-[700px]"
            >
              <Cal 
                namespace="15-minute-inquiry-call"
                calLink="hank-nixon/15-minute-inquiry-call"
                style={{width:"100%",height:"100%"}}
                config={{"layout":"month_view","useSlotsViewOnSmallScreen":true,"theme":"dark","hideBranding":true}}
                calOrigin="https://cal.eu"
                embedJsUrl="https://cal.eu/embed/embed.js"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    <Footer onPageChange={onPageChange} />
    </>
  );
};

export default Contact;
