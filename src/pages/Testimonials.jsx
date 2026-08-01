import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TESTIMONIALS_DATA = [
  {
    id: 1,
    rating: 5,
    quote: "They completely refactored our legacy system architecture into a production-ready MERN ecosystem. Our load performance dropped significantly to sub-45ms across global edge environments, directly impacting user acquisition retention patterns.",
    author: "Sarah Jenkins",
    role: "Chief Technology Officer",
    company: "Nova Systems",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 2,
    rating: 5,
    quote: "Their clean engineering standard delivered where multiple agencies struggled over eighteen months. The automated programmatic layout structure handled rapid data scaling while maintaining an absolute pixel-perfect visual execution.",
    author: "Marcus Vance",
    role: "VP of Growth & Operations",
    company: "Scribe Media Group",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 3,
    rating: 5,
    quote: "The complex layout engineering for our dynamic product interface was executed with extreme structural precision. Every single layout component, form validation, and localized transition works flawlessly across devices.",
    author: "Elena Rostova",
    role: "Head of Product Infrastructure",
    company: "Acme Fintech Corp",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 4,
    rating: 5,
    quote: "This is the definitive benchmark for elite frontend execution. They did not just deploy structural UI elements—they synchronized complex global states and local storage caching logic perfectly with clean, maintainable code.",
    author: "David Thorne",
    role: "Managing Director",
    company: "Vogue Luxury Platforms",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  }
];

export default function TestimonialSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="w-full bg-[#FDFDFC] py-32 px-4 sm:px-8 md:px-16 lg:px-24 font-sans antialiased text-[#334155] relative overflow-hidden">
      
      {/* Structural Framing Grid Divider Line */}
      <div className="absolute top-0 bottom-0 left-4 sm:left-8 md:left-16 lg:left-24 w-px bg-slate-200/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Asymmetric Split Layout Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          
          {/* Sticky Left Editorial Header Block */}
          <div className="col-span-1 lg:col-span-5 lg:sticky lg:top-24">
            <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#E4B72A] mb-4 font-bold">
              <span className="w-6 h-[1px] bg-slate-300" />
              <span>Strategic Ecosystem</span>
            </nav>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-[#0F2C59] mb-6 leading-[0.95]">
              TECHNICAL <br />
              <span className="text-[#E4B72A]">ALLIANCE.</span>
            </h2>
            
            <p className="text-[13px] text-slate-500 font-semibold leading-relaxed mb-8 max-w-md">
              We engineer production-grade platforms with pixel-perfect design standards. These client validations represent real enterprise deployments, performance refactors, and digital architecture solutions.
            </p>

            {/* Performance Matrices */}
            <div className="pt-8 border-t border-slate-200/80 flex items-center gap-12">
              <div>
                <p className="text-3xl font-black text-[#0F2C59] tracking-tighter">99.4%</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Uptime Delivery</p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#E4B72A] tracking-tighter">45MS</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Average Response</p>
              </div>
            </div>
          </div>

          {/* Right Fluid Interactive Masonry Stack */}
          <div className="col-span-1 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {TESTIMONIALS_DATA.map((item) => {
              const isDimmed = hoveredCard !== null && hoveredCard !== item.id;
              
              return (
                <motion.div
                  key={item.id}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  animate={{ 
                    opacity: isDimmed ? 0.45 : 1,
                    scale: hoveredCard === item.id ? 1.02 : 1,
                    y: hoveredCard === item.id ? -4 : 0
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#FDFDFC] p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-shadow duration-500 flex flex-col justify-between min-h-[340px] relative overflow-hidden group cursor-default"
                >
                  {/* Clean Minimal Matrix Header */}
                  <div className="absolute right-6 top-6 flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} className="text-[#E4B72A] text-xs font-bold">✦</span>
                    ))}
                  </div>

                  <div>
                    {/* Review Quote Prose Text Block */}
                    <p className="text-[12.5px] text-slate-600 font-semibold leading-relaxed mb-8 pt-6">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Profile Author Card Footer Block */}
                  <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
                    <div className="w-10 h-10 overflow-hidden border border-slate-200 bg-slate-50 shrink-0">
                      <img 
                        src={item.avatar} 
                        alt={item.author} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    
                    <div className="overflow-hidden">
                      <h4 className="text-[11px] font-black text-[#0F2C59] uppercase tracking-wider truncate">
                        {item.author}
                      </h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide truncate mt-0.5">
                        {item.role}, <span className="text-[#E4B72A]">{item.company}</span>
                      </p>
                    </div>
                  </div>

                  {/* Absolute Border Active Highlight Track */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E4B72A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}