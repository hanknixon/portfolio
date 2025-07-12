import React, { useState } from "react";
import { motion } from "framer-motion";
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const contactInfo = [
    {
      iconSrc: "/icons/gmail.webp",
      label: "Email",
      value: "hankenixon456@gmail.com",
      href: "mailto:hankenixon456@gmail.com",
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

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus("sending");

    // Simulate form submission (replace with actual form submission logic)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-16 pt-28 relative"
      style={{ backgroundColor: "#1d1d22" }}
    >
      <div className="container mx-auto px-6">
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

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, creative
                  projects, or just having a conversation about technology and
                  innovation.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-gray-900/30 backdrop-blur-sm border border-green-400/20 rounded-xl hover:border-green-400/40 transition-all duration-300"
                    >
                      <div
                        className={`w-12 h-12 ${item.color} bg-gray-800 rounded-lg flex items-center justify-center`}
                      >
                        <img
                          src={item.iconSrc}
                          alt={item.label}
                          className="w-5 h-5 object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{item.label}</p>
                        <p className="text-white font-medium">{item.value}</p>
                      </div>
                    </motion.div>
                  );

                  return item.href ? (
                    <a
                      key={index}
                      href={item.href}
                      className="block hover:scale-105 transition-transform duration-300"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        className={`w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl flex items-center justify-center text-green-400 hover:text-white ${social.color} hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon size={20} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-900/30 backdrop-blur-sm border border-green-400/20 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="text-green-400" size={24} />
                <h3 className="text-2xl font-bold text-white">
                  Send a Message
                </h3>
              </div>

              {/* Form Status Messages */}
              {formStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle className="text-green-400" size={20} />
                  <p className="text-green-400">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </motion.div>
              )}

              {formStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-3"
                >
                  <AlertCircle className="text-red-400" size={20} />
                  <p className="text-red-400">
                    Something went wrong. Please try again or contact me
                    directly.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-300 text-sm font-medium mb-2"
                    >
                      Name *
                    </label>
                    <div className="relative">
                      <User
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full pl-11 pr-4 py-3 bg-gray-800/50 border ${
                          errors.name ? "border-red-500" : "border-gray-600"
                        } rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors`}
                        placeholder="Your Name"
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-300 text-sm font-medium mb-2"
                    >
                      Email *
                    </label>
                    <div className="relative">
                      <Mail
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-11 pr-4 py-3 bg-gray-800/50 border ${
                          errors.email ? "border-red-500" : "border-gray-600"
                        } rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-800/50 border ${
                      errors.subject ? "border-red-500" : "border-gray-600"
                    } rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-2 bg-gray-800/50 border ${
                      errors.message ? "border-red-500" : "border-gray-600"
                    } rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors resize-none`}
                    placeholder="Tell me about your project, idea, or just say hello..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full bg-green-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-green-300 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  whileHover={{ scale: formStatus === "sending" ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {formStatus === "sending" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-gray-400 text-sm text-center">
                  Or email me directly at{" "}
                  <a
                    href="mailto:hankenixon456@gmail.com"
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    hankenixon456@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
