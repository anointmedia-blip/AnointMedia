import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const handleConnectClick = () => {
    if (window.location.pathname === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const steps = [
    {
      id: "01",
      label: "Discovery",
      title: "Understanding Your Business",
      desc: "We learn about your business, goals, audience, and challenges to identify the best opportunities for growth.",
      output: "Project Strategy & Roadmap"
    },
    {
      id: "02",
      label: "Planning",
      title: "Building The Right Strategy",
      desc: "Based on our research, we create a clear action plan that aligns with your goals and sets the foundation for success.",
      output: "Growth & Execution Plan"
    },
    {
      id: "03",
      label: "Execution",
      title: "Bringing Ideas To Life",
      desc: "We design, build, optimize, and implement solutions that help your business create a stronger digital presence.",
      output: "Launch-Ready Solution"
    },
    {
      id: "04",
      label: "Growth",
      title: "Optimize & Scale",
      desc: "After launch, we continuously improve performance, monitor results, and identify new opportunities for long-term growth.",
      output: "Continuous Growth Framework"
    }
  ];

  return (
    // 'select-none' was not present here, keeping this standard section structure
    <section className="w-full bg-[#FFFFFF] py-24 px-6 md:px-12 lg:px-20 font-sans antialiased text-[#0F172A]">
      <div className="max-w-4xl mx-auto">
        
        <div className="space-y-2 mb-14 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#00B4AF]/10 border border-[#00B4AF]/20 rounded-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B4AF]" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00B4AF]">Deployment Workflow</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#0F172A]">
            How we scale your digital presence.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className="w-full text-left focus:outline-none group relative"
              >
                <div className="w-full h-[3px] bg-[#E2E8F0] rounded-full relative overflow-hidden mb-3">
                  <motion.div 
                    className="absolute inset-0 bg-[#00B4AF]"
                    initial={false}
                    animate={{ x: isActive ? "0%" : "-100%" }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  />
                </div>

                <div className="space-y-0.5 pl-0.5">
                  <span className={`block font-mono text-[10px] font-bold tracking-wider transition-colors ${isActive ? 'text-[#00B4AF]' : 'text-[#94A3B8]'}`}>
                    PHASE {step.id}
                  </span>
                  <span className={`block text-sm font-bold tracking-tight transition-colors ${isActive ? 'text-[#0F172A]' : 'text-[#64748B] group-hover:text-[#334155]'}`}>
                    {step.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="w-full bg-[#FDFBF7] border border-[#F1E4D1] rounded-xl p-6 md:p-8 min-h-[260px] flex flex-col justify-between relative overflow-hidden">
          
          <div className="absolute inset-0 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.12] pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-8 h-full"
            >
              <div className="space-y-3 max-w-xl">
                <h3 className="text-xl md:text-2xl font-extrabold text-[#0F172A] tracking-tight leading-snug">
                  {steps[activeStep].title}
                </h3>
                <p className="text-[#566171] text-sm md:text-[15px] leading-relaxed font-normal">
                  {steps[activeStep].desc}
                </p>
              </div>

              <div className="md:w-56 flex flex-col justify-between h-full space-y-5 md:space-y-0 md:text-right shrink-0 border-t md:border-t-0 md:border-l border-[#EADCC6] pt-5 md:pt-0 md:pl-6">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] block">
                    Key Deliverable
                  </span>
                  <span className="text-sm font-bold text-[#0F172A] block leading-tight">
                    {steps[activeStep].output}
                  </span>
                </div>

                <div className="md:pt-6">
                  <button onClick={handleConnectClick} className="w-full md:w-auto bg-[#00B4AF] hover:bg-[#037571] active:scale-[0.99] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-lg transition-all duration-150 shadow-xs">
                    Initiate Framework
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;