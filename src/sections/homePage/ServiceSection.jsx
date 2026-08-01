import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ServiceSection = () => {

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
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const servicesData = [
    {
      title: "Search Engine Optimization (SEO)",
      tagline: "Rank Higher on Google & Grow Your Organic Traffic",
      desc: "Our Search Engine Optimization (SEO) Services in USA help your business achieve higher rankings on Google, attract targeted organic traffic, and generate qualified leads. We optimize every aspect of your website, including technical SEO, on-page SEO, off-page SEO, keyword research, content optimization, local SEO, and site performance. Using data-driven strategies and Google's best practices, we improve your online visibility, strengthen your domain authority, and drive sustainable business growth with long-term organic results.",
      features: ["Technical Crawl Budget Audits", "Programmatic SEO Architecture", "Data-Driven Link Building", "Core Web Vitals Refinement"],
      metric: "1.5M+",
      metricSub: "Keywords Ranked #1"
    },
    {
      title: "Paid Performance Marketing (PPC)",
      tagline: "Maximize ROI with Google Ads & Performance Marketing",
      desc: "Our Paid Performance Marketing Services are designed to help businesses generate high-quality leads, increase conversions, and maximize return on investment (ROI). We create and manage Google Ads, Meta Ads (Facebook & Instagram), YouTube Ads, LinkedIn Ads, and PPC campaigns using advanced audience targeting, keyword research, conversion tracking, and continuous campaign optimization. With data-driven strategies and real-time analytics, we reduce cost per acquisition (CPA), improve ad performance, and deliver measurable business growth.",
      features: ["Google Ads & Search 360", "Meta Conversion Tuning", "B2B LinkedIn Pipelines", "Server-Side Conversion Tracking"],
      metric: "6x",
      metricSub: "Average Verified ROAS"
    },
    {
      title: "Website Design & Development",
      tagline: "High-Performance Websites Built for Speed, SEO & Conversions",
      desc: "Our Website Design & Development services focus on creating fast, responsive, and SEO-friendly websites that deliver exceptional user experiences and drive business growth. We build custom business websites, eCommerce stores, landing pages, and web applications with modern technologies, mobile-first design, and secure development practices. Every website is optimized for speed, Core Web Vitals, search engine performance, and seamless API integrations to improve Google rankings, increase engagement, and maximize conversions.",
      features: ["Headless CMS Implementations", "Next.js & React Architectures", "Custom Enterprise Portals", "API & Webhook Integrations"],
      metric: "99/100",
      metricSub: "Mobile Performance Score"
    },
    {
      title: "Social Media Marketing",
      tagline: "Grow Your Brand with Strategic Social Media Marketing in the USA",
      desc: "Our Social Media Marketing Services in the USA help businesses build brand awareness, engage their target audience, and generate high-quality leads across today's most powerful social platforms. We create data-driven strategies, compelling content, and high-converting ad campaigns for Facebook, Instagram, LinkedIn, TikTok, X (Twitter), Pinterest, and YouTube. From content creation and community management to paid social advertising and performance analytics, we help your brand increase reach, drive website traffic, boost customer engagement, and achieve measurable business growth.",
      features: ["A/B Creative Variant Testing", "Distribution Funnel Design", "Telemetry System Infrastructure", "Retention Mechanics Optimization"],
      metric: "+320%",
      metricSub: "Avg Growth Yield YoY"
    },
    {
      title: "E-Commerce Solutions",
      tagline: "E-Commerce Website Development That Drives Sales & Business Growth",
      desc: "Our E-Commerce Solutions help businesses launch, grow, and scale successful online stores with secure, high-performing, and SEO-friendly websites. We design and develop custom eCommerce websites on platforms like Shopify, WooCommerce, Wordpress, and custom solutions, optimized for speed, mobile responsiveness, and seamless user experience. From product management and secure payment gateway integration to inventory management, conversion optimization, and SEO, we create online stores that attract customers, increase sales, and maximize revenue.",
      features: [
        "Brand Strategy & Positioning",
        "Logo & Visual Identity Design",
        "Brand Guidelines Systems",
        "Messaging & Tone Development"
      ],
      metric: "100+",
      metricSub: "Brands Elevated"
    },
    // {
    //   title: "UI/UX Design",
    //   tagline: "Conversion-First Experiences",
    //   desc: "User-centered digital experiences crafted to improve engagement, increase trust, and maximize conversion opportunities across web and mobile platforms.",
    //   features: [
    //     "User Experience Research",
    //     "Wireframing & Prototyping",
    //     "Design Systems",
    //     "Conversion-Focused Interfaces"
    //   ],
    //   metric: "+42%",
    //   metricSub: "Avg UX Lift"
    // },
    // {
    //   title: "E-Commerce Solutions",
    //   tagline: "Revenue-Focused Commerce",
    //   desc: "Scalable online stores engineered for seamless shopping experiences, operational efficiency, and sustainable revenue growth.",
    //   features: [
    //     "Shopify & WooCommerce",
    //     "Payment Gateway Integration",
    //     "Inventory & Order Systems",
    //     "Conversion Optimization"
    //   ],
    //   metric: "8x",
    //   metricSub: "Revenue Growth"
    // }
  ];

  return (
    // REMOVED 'select-none' BELOW
    <section id="services" className="w-full bg-[#F8FAFC] py-28 px-6 md:px-12 lg:px-20 font-sans antialiased text-[#0F172A] relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <div className="w-full bg-white border border-[#E2E8F0] rounded-xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-[0_2px_8px_rgba(15,23,42,0.01)]">
          <div className="md:col-span-5 space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#E4B72A]/10 border border-[#E4B72A]/30 rounded-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E4B72A]" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E4B72A]">Capabilities Matrix</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0F172A]">
              Our Core Services.
            </h2>
          </div>
          <div className="md:col-span-7 border-t md:border-t-0 md:border-l border-[#E2E8F0] pt-4 md:pt-0 md:pl-8">
            <p className="text-[#64748B] text-sm md:text-base font-normal leading-relaxed">
              We offer complete <strong>Digital Marketing Services</strong> designed to help businesses increase online visibility, improve Google rankings, and generate high-quality leads. Our expertise includes <strong>Search Engine Optimization (SEO), Local SEO, Social Media Marketing (SMM), Google Ads (PPC), Meta Ads, Website Design & Development, Content Marketing, Branding, and Performance Marketing</strong>. Every strategy is powered by data, advanced analytics, and continuous optimization to maximize ROI, increase website traffic, and deliver sustainable business growth.
            </p>
          </div>
        </div>

        <div 
          className="space-y-3"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {servicesData.map((service, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                className="w-full bg-white border border-[#E2E8F0] rounded-xl p-6 md:p-8 flex flex-col lg:flex-row items-stretch justify-between gap-6 md:gap-8 relative transition-all duration-200 shadow-[0_2px_6px_rgba(15,23,42,0.01)] hover:shadow-md cursor-pointer overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-[#E4B72A] transition-transform duration-300 origin-left ${isHovered ? 'scale-x-100' : 'scale-x-0'}`} />

                <div className="lg:w-[45%] flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-bold text-[#64748B] bg-[#F8FAFC] border border-[#E2E8F0] w-6 h-6 rounded flex items-center justify-center">
                        0{index + 1}
                      </span>
                      <h3 className="text-xl font-bold tracking-tight text-[#0F172A] transition-colors duration-200 group-hover:text-[#E4B72A]">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-xs font-bold text-[#E4B72A] tracking-wide uppercase">
                      {service.tagline}
                    </p>
                  </div>
                  <p className="text-[#64748B] text-sm leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>

                <div className="lg:w-[32%] bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-5 flex flex-col justify-center space-y-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#64748B] block border-b border-[#E2E8F0] pb-1.5">
                    // Included Implementations
                  </span>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-[#64748B]">
                        <svg className="w-3.5 h-3.5 text-[#E4B72A] shrink-0" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-[#0F172A] text-[13px]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:w-[18%] border border-[#E2E8F0] lg:border-l-2 lg:border-l-[#E4B72A] rounded-lg lg:rounded-r-lg lg:rounded-l-none p-5 flex flex-col justify-center items-center lg:items-end text-center lg:text-right bg-gradient-to-br from-white to-[#F8FAFC]">
                  <span className="text-3xl md:text-4xl font-black tracking-tight text-[#0F172A] leading-none">
                    {service.metric}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] mt-1">
                    {service.metricSub}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_2px_8px_rgba(15,23,42,0.01)]">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-[#0F172A] font-bold text-base tracking-tight">
              Ready to implement custom marketing infrastructure?
            </h4>
            <p className="text-[#64748B] text-sm font-normal">
              Partner with us to optimize your platform architecture, run exact tracking pipelines, and scale organic search metrics.
            </p>
          </div>
          <button onClick={handleConnectClick} className="bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-xs tracking-wider px-6 py-3.5 rounded-lg uppercase shadow-sm transition-all duration-150 shrink-0 w-full md:w-auto active:scale-[0.98] border border-transparent">
            Schedule Architecture Session
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServiceSection;