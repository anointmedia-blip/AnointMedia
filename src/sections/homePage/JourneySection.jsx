import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Journey = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const highlights = [
    {
      num: "01",
      title: "Discover & Understand",
      tagline: "Understanding Your Business",
      desc: "We start by understanding your goals, challenges, audience, and opportunities to build a clear roadmap for growth.",
      details: [
        { label: "Focus", value: "Business Goals" },
        { label: "Research", value: "Market Insights" },
        { label: "Outcome", value: "Clear Direction" },
      ],
    },
    {
      num: "02",
      title: "Plan & Strategize",
      tagline: "Building The Right Approach",
      desc: "Every successful project starts with a strong strategy. We define priorities, identify opportunities, and create a roadmap for execution.",
      details: [
        { label: "Focus", value: "Strategy" },
        { label: "Approach", value: "Data-Driven" },
        { label: "Outcome", value: "Growth Plan" },
      ],
    },
    {
      num: "03",
      title: "Create & Execute",
      tagline: "Bringing Ideas To Life",
      desc: "From branding and design to development and marketing, we transform strategy into meaningful experiences and measurable results.",
      details: [
        { label: "Focus", value: "Execution" },
        { label: "Services", value: "End-to-End" },
        { label: "Outcome", value: "Market Impact" },
      ],
    },
    {
      num: "04",
      title: "Optimize & Scale",
      tagline: "Continuous Improvement",
      desc: "We monitor performance, refine strategies, and uncover new opportunities to help your business grow sustainably over time.",
      details: [
        { label: "Focus", value: "Growth" },
        { label: "Method", value: "Optimization" },
        { label: "Outcome", value: "Long-Term Success" },
      ],
    },
  ];

  return (
    // Removed select-none to ensure text is selectable
    <section className="w-full bg-[#FFFFFF] py-32 px-6 md:px-12 lg:px-24 font-sans antialiased text-[#0F172A]">
      <div className="max-w-6xl mx-auto space-y-20">
        
        <div className="w-full border-b border-[#E2E8F0] pb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#00B4AF]/10 border border-[#00B4AF] rounded-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B4AF]" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00B4AF]">
                Operational Execution
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0F172A] leading-[1.1]">
              How We Help You Grow
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[#64748B] text-sm md:text-base font-normal leading-relaxed">
              A simple process focused on visibility, conversions, and long-term
              business growth.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-3">
            {highlights.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 relative overflow-hidden flex items-start gap-4 focus:outline-none ${
                    isActive
                      ? "bg-[#F8FAFC] border-[#00B4AF] shadow-[0_4px_20px_rgba(245,158,11,0.04)]"
                      : "bg-white border-[#E2E8F0] hover:border-[#CBD5E1]"
                  }`}
                >
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#00B4AF] transition-transform duration-300 origin-top ${isActive ? "scale-y-100" : "scale-y-0"}`}
                  />

                  <span
                    className={`text-xs font-mono font-bold px-2 py-0.5 rounded border transition-colors duration-200 ${
                      isActive
                        ? "bg-[#00B4AF]/10 text-[#00B4AF]/70 border-[#00B4AF]"
                        : "bg-[#F8FAFC] text-[#64748B] border-[#E2E8F0]"
                    }`}
                  >
                    {item.num}
                  </span>

                  <div className="space-y-1">
                    <h3 className="text-base font-bold tracking-tight text-[#0F172A]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#64748B] font-medium uppercase tracking-wider">
                      {item.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 lg:p-10 min-h-[420px] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:20px_20px] opacity-40 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="space-y-8 relative z-10 flex-1 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="text-[10px] font-mono font-bold text-[#00B4AF] uppercase tracking-widest">
                    // Deployment Vector Focus
                  </div>
                  <h4 className="text-2xl font-extrabold tracking-tight text-[#0F172A]">
                    {highlights[activeIndex].title}
                  </h4>
                  <p className="text-[#64748B] text-sm md:text-base leading-relaxed font-normal max-w-xl">
                    {highlights[activeIndex].desc}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#E2E8F0] pt-6 mt-auto">
                  {highlights[activeIndex].details.map((detail, dIdx) => (
                    <div
                      key={dIdx}
                      className="bg-white border border-[#E2E8F0] p-4 rounded-xl shadow-xs"
                    >
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] block">
                        {detail.label}
                      </span>
                      <span className="text-base font-black text-[#0F172A] tracking-tight mt-1 block">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;