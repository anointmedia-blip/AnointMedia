import React from "react";
import { motion } from "framer-motion";

const StoriesSection = () => {
  const stories = [
    {
      id: "case-01",
      company: "Premium Modular Kitchen Brand",
      title: "Building a Powerful Digital Presence for a Modular Kitchen Business",
      description:
        "We partnered with a leading modular kitchen company to strengthen its online presence through Digital Marketing Services for Modular Kitchen Business in USA. Our strategy focused on increasing brand visibility, attracting high-intent customers, and generating qualified leads using SEO, Google Ads, social media marketing, and conversion-focused campaigns. As specialists in Digital Marketing Services for Modular Kitchen Business in USA, we created a results-driven marketing strategy that highlighted premium kitchen designs, expert craftsmanship, completed projects, and customer trust.",
      tags: [
        "Web Design",
        "UI/UX",
        "Lead Generation"
      ],
      image:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=1200",
      metrics: [
        { label: "Industry", value: "Interior Design" },
        { label: "Services", value: "Website + Branding" }
      ]
    },

    {
      id: "case-02",
      company: "Natural Granite & Stone Store",
      title: "Building a High-Impact Digital Presence for a Granite & Stone Business",
      description:
        "We partnered with a trusted granite and stone company to create a modern, high-converting digital platform through Digital Marketing Services for Granite & Stone Business in USA. Our strategy focused on increasing online visibility, showcasing premium granite, quartz, marble, and natural stone collections, and generating high-quality leads. With our Digital Marketing Services for Granite & Stone Business in USA, we developed a user-friendly website that highlights completed projects, customer testimonials, and product galleries while making it easy for homeowners, contractors, architects, and interior designers to request consultations.",
      tags: [
        "Corporate Website",
        "Branding",
        "SEO"
      ],
      image:
        "https://i.pinimg.com/736x/4e/17/5e/4e175e5e92c2a5c07964351eab3b0abf.jpg",
      metrics: [
        { label: "Industry", value: "Construction" },
        { label: "Services", value: "Website + SEO" }
      ]
    },

    {
      id: "case-03",
      company: "Hotel & Hospitality Business",
      title: "Enhancing Digital Growth for Hospitality Businesses",
      description:
        "We partnered with a hospitality brand to grow its online presence through Digital Marketing Services for Hospitality Business in USA. As a trusted Hospitality Digital Marketing Agency USA, we combined Hospitality Website Design, Hospitality Web Development Services, and Hospitality SEO Services USA to create a fast, user-friendly website that builds trust and drives direct bookings. Using Local SEO for Hospitality Business, Google Ads for Hotels, and conversion-focused strategies, our Digital Marketing Services for Hospitality Business in USA increased online visibility, improved Google rankings, and boosted Hospitality Lead Generation.",
      tags: [
        "Hospitality",
        "Web Development",
        "Local SEO"
      ],
      image:
        "https://i.pinimg.com/736x/9b/f9/49/9bf9498344360e8545611009da0a2fd2.jpg",
      metrics: [
        { label: "Industry", value: "Hospitality" },
        { label: "Services", value: "Website + Marketing" }
      ]
    }
  ];

  return (
    <section id="case-study" className="w-full bg-[#FFFFFF] py-24 px-6 md:px-12 lg:px-20 font-sans antialiased text-[#0F172A]">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-20 text-center md:text-left">
          <div className="space-y-3">
            <span className="text-sm font-semibold text-[#E4B72A] uppercase tracking-wider">
              Featured Work
            </span>

            <h2 className="text-4xl md:text-4xl font-black tracking-tight text-[#0F172A]">
Transforming Brands Through Digital Excellence.
            </h2>

            <p className="text-[#64748B] text-lg max-w-2xl">
              A selection of websites, brands, and digital experiences created to help businesses grow, build trust, and stand out in their industry.
            </p>
          </div>
        </div>

        <div className="space-y-20">
          {stories.map((story, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <a
                href={story.slug}
                key={story.id}
                className="block group relative w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center cursor-pointer"
              >
                <div className={`col-span-12 md:col-span-5 ${!isEven ? 'md:order-last' : ''}`}>
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#FDFBF7] border border-[#F1E4D1] relative">
                    
                    <motion.img
                      src={story.image}
                      alt={story.company}
                      variants={{
                        hover: { scale: 1.04 }
                      }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full object-cover filter contrast-[102%] brightness-[0.95]"
                    />

                    <div className="absolute inset-0 bg-[#F59E0B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-multiply" />
                    
                    <div className="absolute bottom-4 left-4 bg-[#0F172A] text-white px-3 py-1 rounded-md shadow-xs">
                      <p className="text-[10px] font-mono font-bold uppercase tracking-wider">
                        {story.company}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-7 space-y-6">
                  
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {story.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-[10px] font-mono font-medium tracking-wide text-[#64748B] bg-[#F8FAFC] border border-slate-200/60 px-2.5 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl font-extrabold text-[#0F172A] tracking-tight leading-snug flex items-start gap-2">
                      <span className="group-hover:text-[#E4B72A] transition-colors duration-200">
                        {story.title}
                      </span>
                    </h3>

                    <p className="text-[#566171] text-sm md:text-base leading-relaxed font-normal">
                      {story.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                    {story.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="space-y-0.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] block">
                          {metric.label}
                        </span>
                        <span className="text-xl md:text-2xl font-black text-[#E4B72A] tracking-tight block">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default StoriesSection;