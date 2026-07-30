import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImg1 from "../../assets/heroImg1.png";
import heroImg2 from "../../assets/heroImg2.png";
import heroImg3 from "../../assets/heroImg3.png";
import { useNavigate } from "react-router-dom";

// Shimmer Loader Component for Images
const ImageLoader = () => (
  <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 bg-[length:200%_100%] animate-shimmer" />
);

const HomeHeroSection = () => {
      const navigate = useNavigate();

      const handleNavToPortfolio = () => {
        navigate("/portfolio");
      }

  const handleConnectClick = () => {
  // Check if the window is currently pointing directly to the root homepage path
  if (window.location.pathname === "/") {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    // Navigate home first, then safely schedule a smooth execution interval
    navigate("/");
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }
};
const capabilities = [
  "Brand Identity",
  "Web Design",
  "Web Development",
  "UI/UX Design",
  "Ecommerce",
  "SEO",
  "Performance Marketing",
  "Content Strategy",
  "Lead Generation",
  "Conversion Optimization",
  "Analytics & Reporting",
  "Digital Strategy",
];
  const [imagesLoaded, setImagesLoaded] = useState({
    img1: false,
    img2: false,
    img3: false,
  });
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Trigger global text animations slightly after mount
    setIsPageLoaded(true);
  }, []);

  // Animation variants for text hierarchy
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  // Hover effect configuration for right-side visual assets
  const floatingHover = {
    y: -8,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  };

  return (
<section className="relative overflow-hidden pt-12 lg:pt-16 pb-0 bg-white">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(0,184,217,0.12),transparent_40%)]" />

      <div className="max-w-[1320px] mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE (Content) */}
          <motion.div
            className="font-['Manrope']"
            variants={containerVariants}
            initial="hidden"
            animate={isPageLoaded ? "visible" : "hidden"}
          >
            {/* Tagline */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00B4AF] bg-cyan-50 text-sm font-semibold text-[#00B4AF] mb-8 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#00B4AF] animate-pulse" />
              Trusted by 500+ Growing Businesses
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-[56px] lg:text-[78px] font-normal leading-[0.92] tracking-[-0.05em] text-slate-900"
            >
Helping Businesses



              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-950 via-slate-800 to-[#00B4AF]">
             Grow Without 
              </span>
              <br />
Limits
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-slate-600 text-[19px] leading-[1.7] mt-8 max-w-[620px] font-medium"
            >
              {/* We help ambitious brands grow through high-converting websites,
              SEO, performance marketing, branding, and digital experiences
              designed to generate leads and revenue. */}
              We build powerful brands with SEO, Digital Marketing, Website Development, Social Media Marketing, and Performance Advertising to help businesses rank higher on Google, generate quality leads, and achieve sustainable business growth. 
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-10"
            >
              <button onClick={handleConnectClick} className="px-8 py-4 rounded-full bg-gradient-to-r from-[#69ede8] to-[#00B4AF] text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300">
                Let's Talk
              </button>

              <button onClick={handleNavToPortfolio} className="px-8 py-4 rounded-full border border-slate-200 bg-white font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all duration-300 shadow-sm">
                View Portfolio
              </button>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              variants={itemVariants}
              className="mt-16 flex flex-wrap items-center gap-y-4 gap-x-8 px-6 py-4 bg-slate-50/60 rounded-2xl border border-slate-100/80 w-fit backdrop-blur-sm"
            >
              {/* Left Label */}
              <div className="text-xs font-bold text-[#00B4AF] uppercase tracking-widest border-r border-slate-200/60 pr-6 hidden sm:block">
                Our Impact
              </div>

              {/* Stats Inline Group */}
              <div className="flex items-center gap-x-8">
                {[
                  { value: "6000+", label: "Delivered" },
                  { value: "4.9★", label: "Rating" },
                  { value: "327%", label: "ROI/Growth" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex items-baseline gap-x-1.5 cursor-default group"
                  >
                    <span className="text-xl lg:text-2xl font-black text-slate-900 tracking-tight transition-colors duration-200 group-hover:text-[#00B4AF]">
                      {stat.value}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="relative h-[700px] flex items-center justify-center">
            {/* Background Blur */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
      absolute
      w-[600px]
      h-[600px]
      rounded-full
      bg-gradient-to-r
      from-cyan-200/30
      to-blue-200/20
      blur-[140px]
    "
            />

            {/* Main Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ y: -8 }}
              className="
      absolute
      z-20
      w-[540px]
      h-[360px]
      rounded-[36px]
      overflow-hidden
      bg-white
      shadow-[0_50px_120px_rgba(0,0,0,0.15)]
      border border-white
    "
            >
              <img
                src={heroImg3}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Website Preview */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [-3, -1, -3],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
      absolute
      top-10
      left-0
      z-30
      w-[260px]
      h-[180px]
      rounded-[28px]
      overflow-hidden
      bg-white
      shadow-[0_30px_80px_rgba(0,0,0,0.12)]
      border border-white
    "
            >
              <img
                src={heroImg1}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Dashboard */}
            <motion.div
              animate={{
                y: [0, 12, 0],
                rotate: [3, 1, 3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
      absolute
      top-16
      right-0
      z-30
      w-[260px]
      h-[180px]
      rounded-[28px]
      overflow-hidden
      bg-white
      shadow-[0_30px_80px_rgba(0,0,0,0.12)]
      border border-white
    "
            >
              <img
                src={heroImg2}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* ROI Card */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
      absolute
      bottom-24
      right-6
      z-40
      bg-white/90
      backdrop-blur-xl
      rounded-[28px]
      p-6
      shadow-[0_20px_60px_rgba(0,0,0,0.12)]
      border border-white
      w-[220px]
    "
            >
              <p className="text-sm text-slate-500">Campaign Growth</p>

              <h3 className="text-[52px] leading-none font-black text-[#00B4AF] mt-2">
                +327%
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                Average traffic increase
              </p>

              <div className="mt-5 h-2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "78%" }}
                  transition={{ duration: 1.5 }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-[#00B4AF]"
                />
              </div>
            </motion.div>

            {/* Client Review */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="
      absolute
      bottom-20
      left-0
      z-40
      bg-white
      rounded-[24px]
      px-6
      py-5
      shadow-[0_20px_60px_rgba(0,0,0,0.12)]
      border border-slate-100
      max-w-[240px]
    "
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-500">★★★★★</span>
              </div>

              <p className="text-sm text-slate-600">
                "Our leads increased within the first month after launch."
              </p>

              <div className="mt-3 text-xs font-semibold text-slate-900">
                Verified Client
              </div>
            </motion.div>

            {/* Floating Accent */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="
      absolute
      top-1/2
      right-12
      w-5
      h-5
      rounded-full
      bg-[#00B4AF]
    "
            />
          </div>
          {/* Premium Marquee */}

        </div>
      </div>
          <div className="mt-6 lg:mt-10 border-y border-slate-100 bg-white overflow-hidden">
            <motion.div
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex w-max py-5"
            >
              {[...capabilities, ...capabilities, ...capabilities].map(
                (item, index) => (
                  <div key={index} className="flex items-center mx-10 shrink-0">
                    <span className="text-[15px] uppercase tracking-[0.2em] font-semibold text-slate-700">
                      {item}
                    </span>

                    <div className="w-2 h-2 rounded-full bg-[#00B4AF] ml-10" />
                  </div>
                ),
              )}
            </motion.div>
          </div>
    </section>
  );
};

export default HomeHeroSection;
