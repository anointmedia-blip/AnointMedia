import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQsection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What services does We Promote provide?",
      answer:
        "We help businesses grow through website design and development, SEO, Google Ads, digital marketing, branding, UI/UX design, and conversion-focused optimization. Whether you're launching a new business or scaling an existing one, we build solutions tailored to your goals.",
    },
    {
      question:
        "Do you work with local businesses and service-based companies?",
      answer:
        "Yes. We've worked with businesses across industries including hotels, modular kitchen brands, granite and stone suppliers, healthcare providers, professional services, and other local businesses. Every strategy is customized based on your market, audience, and objectives.",
    },
    {
      question: "How long does it take to complete a website project?",
      answer:
        "Project timelines depend on scope and complexity. Most business websites are completed within 2–6 weeks, while larger custom platforms may require additional time for planning, development, integrations, and testing.",
    },
    {
      question: "Can you improve my Google rankings?",
      answer:
        "Yes. Our SEO process focuses on technical optimization, content strategy, local search visibility, and long-term authority building. SEO is a long-term investment, but it remains one of the most effective ways to generate qualified organic traffic.",
    },
    {
      question: "Do you manage Google Ads and paid marketing campaigns?",
      answer:
        "Absolutely. We create, manage, and optimize Google Ads campaigns designed to increase visibility, generate qualified leads, and maximize return on ad spend through continuous testing and performance analysis.",
    },
    {
      question: "Will my website be mobile-friendly and fast?",
      answer:
        "Every website we build is fully responsive, optimized for speed, and designed to deliver a seamless experience across desktop, tablet, and mobile devices.",
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer:
        "Yes. We provide ongoing maintenance, updates, SEO support, performance monitoring, content updates, and digital marketing assistance to ensure your online presence continues to grow.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply reach out through our contact form, email, or phone. We'll schedule a consultation, understand your business goals, and recommend the most effective strategy for your growth.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // REMOVED 'select-none' FROM THE CLASS LIST BELOW
    <section className="w-full bg-[#f8fafc]/40 py-24 px-6 md:px-12 lg:px-24 font-sans antialiased overflow-hidden">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-full border border-[#00B4AF]/20 bg-[#00B4AF]/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00B4AF]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black tracking-tight text-[#10223d]">
            Answers to common questions.
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Everything you need to know about our services, process, timelines,
            and how we help businesses grow online.
          </p>
        </div>

        <div className="w-full flex flex-col gap-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`w-full rounded-3xl overflow-hidden transition-all duration-300
                ${
                  isOpen
                    ? "bg-white border border-[#00B4AF]/20 shadow-[0_15px_40px_rgba(0,180,175,0.08)]"
                    : "bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 sm:p-7 flex items-center justify-between text-left gap-6 focus:outline-none"
                >
                  <span className="text-[#10223d] font-bold text-lg md:text-xl leading-snug pr-4">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all
                    ${isOpen ? "bg-[#00B4AF] text-white" : "bg-slate-100 text-slate-500"}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-7 pb-7 pt-1 border-t border-slate-50">
                        <p className="text-slate-600 font-medium text-[15px] leading-[1.7] tracking-wide">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQsection;