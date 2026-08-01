import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PORTFOLIO_CATEGORIES = ["All Projects", "Web Design", "Development", "E-Commerce", "Digital Marketing", "SEO Automation"];

const PORTFOLIO_DATA = [
  {
    id: 1,
    category: "Web Design",
    client: "Acme Fintech Corp",
    title: "Redefining Next-Gen Digital Banking Interfaces",
    metric: "+240% Engagement",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["UX/UI Architecture", "Design System", "Figma Framework"]
  },
  {
    id: 2,
    category: "Development",
    client: "Nova SaaS Ecosystems",
    title: "High-Performance Cloud Enterprise Dashboard",
    metric: "45ms Load Time",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["React Engine", "Next.js 14", "Tailwind Native"]
  },
  {
    id: 3,
    category: "E-Commerce",
    client: "Vogue Luxury Fashion",
    title: "Immersive Direct-to-Consumer Flagship Store",
    metric: "3.8% Conversion Rate",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    tags: ["Headless Commerce", "Shopify API", "WebXR Experience"]
  },
  {
    id: 4,
    category: "Digital Marketing",
    client: "Apex Global Logistics",
    title: "Omnichannel Acquisition Campaign Framework",
    metric: "12.4x ROAS Achieved",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
    tags: ["Growth Marketing", "Funnel Automation", "Paid Acquisition"]
  },
  {
    id: 5,
    category: "SEO Automation",
    client: "Scribe Media Platforms",
    title: "AI-Driven Organic Content Scaling Engine",
    metric: "4.2M Monthly Visits",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    tags: ["Programmatic SEO", "Data Pipelines", "Schema Core"]
  },
  {
    id: 6,
    category: "Web Design",
    client: "Aero Logistics Labs",
    title: "Interactive Operations & Supply Chain Portal",
    metric: "-40% Churn Reduction",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
    tags: ["Interface Logic", "Data Viz Components", "Tailwind"]
  }
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = activeCategory === "All Projects"
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(project => project.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section className="w-full bg-[#FDFDFC] py-12 px-4 sm:px-8 md:px-16 lg:px-24 font-sans antialiased text-[#334155] relative overflow-hidden">
      
      {/* Structural Framing Grid Divider Line */}
    

      <div className="max-w-7xl mx-auto relative z-10">
        
       

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-[#0F2C59] mb-4 leading-[0.95]">
            Selected <span className="text-[#E4B72A]">Works.</span>
          </h2>
          <p className="text-[13px] text-slate-500 max-w-2xl mx-auto font-semibold leading-relaxed">
            A curated showcase of digital products, cloud architecture, and high-growth marketing strategies built to outperform market standards.
          </p>
        </div>

        {/* Premium Pill Dynamic Filter Container */}
        <div className="flex justify-center mb-20">
          <div className="inline-flex items-center gap-1 bg-white p-1.5 border border-slate-200 shadow-xs max-w-full overflow-x-auto scrollbar-none token-scroller">
            {PORTFOLIO_CATEGORIES.map((tab) => {
              const isActive = tab === activeCategory;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveCategory(tab)}
                  className={`relative px-5 py-2.5 text-[10px] font-black uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                    isActive ? "text-white" : "text-slate-500 hover:text-[#0F2C59]"
                  }`}
                >
                  <span className="relative z-20">{tab}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activePortfolioPill"
                      className="absolute inset-0 bg-[#E4B72A] z-10 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Project Grid - Asymmetric Layout Engine */}
        <motion.div 
          layout="position"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col bg-[#FDFDFC] border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-500"
              >
                {/* Image Section with Integrated Performance Banner */}
                <div className="w-full aspect-[16/11] overflow-hidden relative bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover scale-[1.01] group-hover:scale-[1.05] transition-transform duration-750 ease-out opacity-100 group-hover:opacity-100  group-hover:grayscale-0"
                    loading="lazy"
                  />
                  
                  {/* Subtle Top-down Vignette Mask overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
                  
                  {/* Client Identifier Label */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-[9px] tracking-widest font-black uppercase text-white bg-[#0F2C59]/90 border border-white/10 px-3 py-1.5">
                      {project.client}
                    </span>
                  </div>

                  {/* High Impact Core Data Metric Badge */}
                  
                </div>

                {/* Text Content Block */}
                <div className="p-7 flex-1 flex flex-col justify-between bg-[#FDFDFC] relative z-20">
                  <div>
                    {/* Category Hook */}
                    <span className="text-[10px] font-black text-[#E4B72A] uppercase tracking-[0.2em] block mb-2">
                      {project.category}
                    </span>
                    
                    {/* Case Title */}
                    <h3 className="text-[15px] font-black uppercase tracking-tight text-[#0F2C59] group-hover:text-[#E4B72A] transition-colors duration-300 mb-4 leading-tight">
                      {project.title}
                    </h3>

                    {/* Meta Architecture Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] bg-[#F8F7FF] text-slate-500 px-2.5 py-1 font-bold border border-slate-100 uppercase tracking-wide">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

               
                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Filter Fallback */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-24 bg-white border border-dashed border-slate-200 max-w-md mx-auto mt-12"
          >
            <p className="text-slate-400 font-bold text-[11px] uppercase tracking-widest">No production assets deployed under this layer yet.</p>
          </motion.div>
        )}

      </div>
    </section>
  );
}