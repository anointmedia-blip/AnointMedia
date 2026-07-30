import React from 'react';
import { motion } from 'framer-motion';

const ResultsSection = () => {
  const statsData = [
    {
      value: "14+",
      label: "Years Of Expertise"
    },
    {
      value: "5M+",
      label: "Organic Keywords Ranked"
    },
    {
      value: "6K+",
      label: "Successful Projects"
    },
    {
      value: "1M+",
      label: "Leads Generated"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.215, 0.610, 0.355, 1.000] }
    }
  };

  return (
    // REMOVED 'select-none' BELOW
    <section className="w-full bg-slate-50/50 py-24 px-6 md:px-12 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00B4AF] block mb-3">Performance Metrics</span>
          <h2 className="text-slate-900 text-3xl md:text-4xl font-black tracking-tight leading-none uppercase">
Results-Driven Digital Marketing Agency
          </h2>
          <div className="w-8 h-[2px] bg-slate-300 mx-auto mt-4 mb-4" />
          <p className="max-w-xl mx-auto text-slate-500 font-normal text-sm sm:text-base leading-relaxed">
            Every click, lead, and conversion matters. Our data-driven approach combines SEO, paid advertising, website analytics, and continuous optimization to help businesses improve Google rankings, attract the right audience, and achieve sustainable business growth. 
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {statsData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4, backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}
              // REMOVED 'select-none' FROM BELOW
              className="bg-white/60 border border-slate-200/80 rounded-xl h-[160px] p-8 flex flex-col justify-center items-start transition-all duration-300 shadow-xs hover:shadow-md relative group overflow-hidden"
            >
              {/* Subtle background graphic block element - REMOVED 'select-none' */}
              <div className="absolute right-[-10px] bottom-[-20px] text-slate-100 text-[100px] font-black pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-300">
                {index + 1}
              </div>

              <span className="text-[#00B4AF] text-4xl md:text-5xl font-black tracking-tight leading-none relative z-10 font-mono">
                {item.value}
              </span>
              
              <p className="mt-3.5 text-slate-800 font-bold text-[13.5px] tracking-wide uppercase relative z-10 leading-snug">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ResultsSection;