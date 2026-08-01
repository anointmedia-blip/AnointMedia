import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  "All Blogs",
  "Leis News",
  "Web Design",
  "Web Development",
  "Marketing",
  "SEO",
  "PPC",
  "Social Media",
];

const BLOGS_DATA = [
  {
    id: 1,
    slug: "why-local-seo-matters-more-than-traditional-seo",
    category: "SEO",
    tag: "Blog",
    title: "Why Local SEO Matters More Than Traditional SEO for Local Growth",
    desc: "Businesses invest in SEO and wait. Then they check the numbers and see traffic, but no calls. No enquiries. Nothing useful. That's a targeting problem, not an SEO problem. Traditional SEO goes for massive volume, while local SEO targets high-intent structural layout frameworks directly tied to nearby regional acquisitions.",
    readTime: "6 min read",
    date: "June 15, 2026",
    author: "Ritesh Sharma",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    content: [
      {
        type: "paragraph",
        text: "Businesses invest in SEO and wait. Then they check the numbers and see traffic, but no calls. No enquiries. Nothing useful. That's a targeting problem, not an SEO problem. Traditional SEO focuses on broad keywords with high global search volume, which often dilutes conversion metrics for businesses needing local or localized conversions.",
      },
      {
        type: "heading",
        text: "The High-Intent Precision Advantage",
      },
      {
        type: "paragraph",
        text: "When an architecture firm or high-end studio optimizes purely for technical global benchmarks, they compete with aggregate content factories. Local SEO forces an exact infrastructure alignment with geo-targeted search algorithms, mapping intent directly to conversions instead of passive reading metrics.",
      },
    ],
  },
  {
    id: 2,
    slug: "what-does-a-healthcare-digital-marketing-agency-do",
    category: "Marketing",
    tag: "Insight",
    title: "What Does a Healthcare Digital Marketing Agency Do?",
    desc: "Most good doctors have the same problem. Their clinic is solid. Their patients are happy. But online, nobody can find them. That's how it goes now. Patients don't ask friends for referrals the way they used to—they look for validated systems.",
    readTime: "7 min read",
    date: "May 28, 2026",
    author: "Ritesh Sharma",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200",
    content: [
      {
        type: "paragraph",
        text: "Most good medical practitioners face a distinct scalability challenge: exceptional physical service delivery paired with low structural visibility online. Modern growth operations require absolute alignment between patient acquisition funnels and rigorous compliance guidelines.",
      },
      {
        type: "heading",
        text: "Designing Deeper Professional Authority",
      },
      {
        type: "paragraph",
        text: "A highly calibrated medical marketing framework prioritizes pixel-perfect credibility architectures. By structuring specialized design systems that project clarity, trust, and clear navigational portals, agencies turn casual traffic into locked appointments.",
      },
    ],
  },
  {
    id: 3,
    slug: "how-geo-helps-you-rank-in-chatgpt-gemini-and-ai-search",
    category: "SEO",
    tag: "Trends",
    title: "How GEO Helps You Rank in ChatGPT, Gemini, and AI Search Results",
    desc: "Search has shifted in a way most businesses haven't caught up with yet. People aren't typing queries into Google and clicking links the way they used to. They're asking ChatGPT for structured direct answers.",
    readTime: "7 min read",
    date: "April 12, 2026",
    author: "Ritesh Sharma",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
    content: [
      {
        type: "paragraph",
        text: "Search architectures have dramatically shifted. Audiences are increasingly bypassing legacy blue links in favor of direct, synthesized responses driven by Large Language Models. To remain visible, brands must transition from basic keyword population to Generative Engine Optimization (GEO).",
      },
      {
        type: "heading",
        text: "Structuring Code for Synthesizer Engines",
      },
      {
        type: "paragraph",
        text: "AI models extract and cite structured programmatic entities. Clean schema markups, clear data structures, and highly specific data nodes are essential to anchor your content as the single source of authority within automated AI knowledge graphs.",
      },
    ],
  },
  {
    id: 4,
    slug: "best-ecommerce-seo-companies-in-los-angeles",
    category: "SEO",
    tag: "SEO",
    title: "Best Ecommerce SEO Companies in Los Angeles",
    desc: "Why Ecommerce SEO Matters More Than Ever. The ecommerce industry has become one of the most competitive digital markets in the world. Every day, thousands of online stores compete for visibility on major search architectures.",
    readTime: "8 min read",
    date: "March 04, 2026",
    author: "Ritesh Sharma",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",
    content: [
      {
        type: "paragraph",
        text: "The enterprise ecommerce field is incredibly crowded. Retaining market share requires an advanced approach to indexation and internal link distribution that standard setups cannot support.",
      },
      {
        type: "heading",
        text: "Technical Scaling Infrastructure",
      },
      {
        type: "paragraph",
        text: "Top-tier strategies look past elementary title-tag optimization. They re-architect dynamic product routing systems, optimize image delivery pipelines, and execute precise content loops that build natural transactional page authority.",
      },
    ],
  },
  {
    id: 5,
    slug: "how-to-create-seo-content-that-actually-ranks",
    category: "SEO",
    tag: "Guide",
    title: "How to Create SEO Content That Actually Ranks on Google",
    desc: "Understanding How Google Evaluates Content. Google's ranking system has become incredibly sophisticated. Instead of simply looking for keyword frequency, the algorithm now evaluates precise architectural quality indices.",
    readTime: "10 min read",
    date: "February 19, 2026",
    author: "Ritesh Sharma",
    image:
      "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80&w=1200",
    content: [
      {
        type: "paragraph",
        text: "Modern ranking frameworks prioritize helpfulness and expert original analysis above all else. Mechanically produced, generic content assets are systematically de-indexed as algorithms continually prioritize high information density.",
      },
      {
        type: "heading",
        text: "Information Gain Frameworks",
      },
      {
        type: "paragraph",
        text: "To build lasting authority, assets must provide unique insights, structured case study data, or proprietary analytical breakdowns. A clear internal structure combined with deep topical mapping ensures search engines confidently index and highly rank your pages.",
      },
    ],
  },
  {
    id: 6,
    slug: "how-to-prepare-your-website-for-google-generative-ai",
    category: "Web Design",
    tag: "AI Tech",
    title:
      "How to Prepare Your Website for Google's Generative AI Search Changes",
    desc: "Google Search is no longer just a list of blue links. It's becoming a conversation engine powered by AI. Features like AI Overviews, AI Mode, conversational search, and search agents require programmatic interface layouts.",
    readTime: "10 min read",
    date: "January 08, 2026",
    author: "Ritesh Sharma",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200",
    content: [
      {
        type: "paragraph",
        text: "Google's direct integration of conversational interfaces into search marks an evolutionary shift for the open web. Sites optimized purely for old-school query strings must adapt to clear semantic answer structures.",
      },
      {
        type: "heading",
        text: "The Programmatic Semantic Core",
      },
      {
        type: "paragraph",
        text: "Modern frontend architectures must prioritize exceptional data scannability. Presenting unambiguous data blocks alongside highly optimized UI frameworks ensures automated search bots accurately ingest, attribute, and surface your digital platform.",
      },
    ],
  },
];

export default function BlogSection() {
  const [activeTab, setActiveTab] = useState("All Blogs");
  const [selectedBlogSlug, setSelectedBlogSlug] = useState(null);

  const filteredBlogs =
    activeTab === "All Blogs"
      ? BLOGS_DATA
      : BLOGS_DATA.filter(
          (blog) => blog.category.toLowerCase() === activeTab.toLowerCase(),
        );

  const currentBlogData = BLOGS_DATA.find(
    (blog) => blog.slug === selectedBlogSlug,
  );

  // Return to overview page view layout
  const handleBackToGrid = () => {
    setSelectedBlogSlug(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Route/Navigate to direct dynamic deep dive asset view
  const handleReadBlog = (slug) => {
    setSelectedBlogSlug(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[#FDFDFC] font-sans antialiased text-[#334155] relative min-h-screen">
      <AnimatePresence mode="wait">
        {!selectedBlogSlug ? (
          /* BLOG LIST GRID LAYER VIEW */
          <motion.section
            key="blog-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full py-12 px-4 sm:px-8 md:px-16 lg:px-24 relative z-10"
          >
            <div className="max-w-7xl mx-auto">
              {/* Header Block */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-[#0F2C59] mb-4 leading-[0.95]">
                  Our Latest <span className="text-[#E4B72A]">Blogs.</span>
                </h2>
                <p className="text-[13px] text-slate-500 max-w-xl mx-auto font-semibold leading-relaxed">
                  Thought leadership, deep dives, and digital marketing
                  strategies straight from our veteran engineering and design
                  desks.
                </p>
              </div>

              {/* Premium Pill Dynamic Filter Container */}
              <div className="flex justify-center mb-20">
                <div className="inline-flex items-center gap-1 bg-white p-1.5 border border-slate-200 shadow-xs max-w-full overflow-x-auto scrollbar-none token-scroller">
                  {CATEGORIES.map((tab) => {
                    const isActive = tab === activeTab;
                    return (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`relative px-5 py-2.5 text-[10px] font-black uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                          isActive
                            ? "text-white"
                            : "text-slate-500 hover:text-[#0F2C59]"
                        }`}
                      >
                        <span className="relative z-20">{tab}</span>
                        {isActive && (
                          <motion.div
                            layoutId="activePillBubble"
                            className="absolute inset-0 bg-[#E4B72A] z-10 rounded-full"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 32,
                            }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Grid Layer Layout */}
              <motion.div
                layout="position"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
              >
                <AnimatePresence mode="popLayout">
                  {filteredBlogs.map((blog) => (
                    <motion.article
                      layout
                      key={blog.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96, y: 10 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="group flex flex-col bg-[#FDFDFC] border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-500 cursor-pointer"
                      onClick={() => handleReadBlog(blog.slug)}
                    >
                      {/* Visual Frame Wrapper */}
                      <div className="w-full aspect-[16/10.5] overflow-hidden relative bg-slate-950">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover scale-[1.01] group-hover:scale-[1.04] transition-transform duration-700 ease-out opacity-100 group-hover:opacity-100  group-hover:grayscale-0"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 opacity-60 transition-opacity duration-500 group-hover:opacity-30" />

                        {/* Floating Absolute Tag */}
                        <div className="absolute top-4 left-4 z-20">
                          <span className="text-[9px] tracking-widest font-black uppercase text-white bg-[#E4B72A] px-3 py-1.5">
                            {blog.tag}
                          </span>
                        </div>
                      </div>

                      {/* Content Block */}
                      <div className="p-7 flex-1 flex flex-col justify-between bg-[#FDFDFC] relative z-20">
                        <div>
                          <h3 className="text-[15px] font-black uppercase tracking-tight text-[#0F2C59] group-hover:text-[#E4B72A] transition-colors duration-300 line-clamp-2 mb-3.5 leading-tight">
                            {blog.title}
                          </h3>
                          <p className="text-[12px] text-slate-400 font-semibold leading-relaxed line-clamp-3 mb-6">
                            {blog.desc}
                          </p>
                        </div>

                        {/* Operational Footer Bar */}
                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                          <div className="flex items-center gap-1.5 text-[10px] font-black text-[#0F2C59] group-hover:text-[#E4B72A] transition-colors duration-300 uppercase tracking-widest">
                            <span>Explore</span>
                            <span className="text-xs transform transition-transform duration-300 group-hover:translate-x-1.5 text-[#E4B72A]">
                              →
                            </span>
                          </div>

                          <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                            <svg
                              className="w-3.5 h-3.5 text-slate-300"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span>{blog.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* Empty Filter Fallback */}
              {filteredBlogs.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-24 bg-white border border-dashed border-slate-200 max-w-md mx-auto mt-12"
                >
                  <p className="text-slate-400 font-bold text-[11px] uppercase tracking-widest">
                    No articles found in this category.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.section>
        ) : (
          /* DYNAMIC DEEP DIVE ARTICLE ARTICLE FULL VIEW LAYER */
          <motion.article
            key="blog-detail"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full py-32 px-4 sm:px-8 md:px-16 lg:px-24 relative z-10"
          >
            <div className="max-w-4xl mx-auto">
              {/* Internal Dynamic Nav Trigger */}
              <button
                onClick={handleBackToGrid}
                className="group inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0F2C59] hover:text-[#E4B72A] transition-colors duration-300 mb-12"
              >
                <span className="text-xs transform transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
                <span>Back to Insights</span>
              </button>

              {/* Article Structural Metadata Header */}
              <header className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.15em] bg-[#F8F7FF] text-[#E4B72A] border border-slate-100 px-2.5 py-1">
                    {currentBlogData.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                    {currentBlogData.date}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#0F2C59] leading-[0.95] mb-6">
                  {currentBlogData.title}
                </h1>

                {/* Author Info Panel */}
                <div className="flex items-center gap-3 pt-6 border-t border-slate-200/60">
                  <div className="w-8 h-8 rounded-none bg-[#0F2C59] flex items-center justify-center text-white font-black text-xs uppercase tracking-wider shadow-sm">
                    {currentBlogData.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-[#0F2C59] uppercase tracking-wide leading-none mb-1">
                      {currentBlogData.author}
                    </p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                      Technical Strategist
                    </p>
                  </div>
                  <div className="ml-auto flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                    <svg
                      className="w-3.5 h-3.5 text-slate-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{currentBlogData.readTime}</span>
                  </div>
                </div>
              </header>

              {/* Massive Hero Structural Graphic Framework Image */}
              <div className="w-full aspect-[21/10] bg-slate-950 border border-slate-200 shadow-sm mb-12 overflow-hidden">
                <img
                  src={currentBlogData.image}
                  alt={currentBlogData.title}
                  className="w-full h-full object-cover opacity-90"
                />
              </div>

              {/* Render Block Content Engine Engine */}
              <div className="prose max-w-none space-y-8">
                {currentBlogData.content.map((block, index) => {
                  if (block.type === "heading") {
                    return (
                      <h2
                        key={index}
                        className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0F2C59] pt-4 custom-editorial-heading"
                      >
                        {block.text}.
                      </h2>
                    );
                  }
                  return (
                    <p
                      key={index}
                      className="text-[14px] sm:text-[15px] text-slate-500 font-semibold leading-relaxed tracking-normal"
                    >
                      {block.text}
                    </p>
                  );
                })}
              </div>

              {/* Context Block Section Footer Signature */}
              <footer className="mt-16 pt-8 border-t border-slate-200/60 flex items-center justify-between">
                <button
                  onClick={handleBackToGrid}
                  className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#0F2C59] transition-colors duration-300"
                >
                  ← Return to Overview
                </button>
              </footer>
            </div>
          </motion.article>
        )}
      </AnimatePresence>
    </div>
  );
}
