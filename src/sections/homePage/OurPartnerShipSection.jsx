import React from "react";
import { motion } from "framer-motion";


const OurPartnerShipSection = () => {
  // Container animation for a clean staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1.0] },
    },
  };

  const partners = [
    // {
    //   name: "Triveni",
    //   logo: triveniLogo,
    // },
  ];

  return (
    <section className="w-full bg-slate-50/50 pt-16 pb-20 font-sans antialiased select-none overflow-hidden">
      {/* HEADER LABEL AND SUBTEXT */}
      <div className="w-full max-w-6xl mx-auto px-6 text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00B4AF] block mb-3">
          Ecosystem
        </span>
        <h2 className="text-slate-900 text-3xl md:text-4xl font-black tracking-tight leading-none uppercase">
          Our Partnerships
        </h2>
        <div className="w-8 h-[2px] bg-slate-300 mx-auto mt-4 mb-4" />
        <p className="max-w-xl mx-auto text-slate-500 font-normal text-sm sm:text-base leading-relaxed">
          Integrated with industry-leading platforms to consistently drive
          scalable digital performance.
        </p>
      </div>

      {/* MINIMAL PARTNER BRAND GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full max-w-6xl mx-auto px-6"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -2, backgroundColor: "#ffffff" }}
              className="bg-white/60 border border-slate-200/60 rounded-xl h-[90px] flex items-center justify-center p-12  opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shadow-xs hover:shadow-sm overflow-hidden"
            >
              <img src={partner.logo} alt="" className="" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OurPartnerShipSection;
