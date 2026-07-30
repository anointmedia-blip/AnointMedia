import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQsection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What digital marketing services does We Promote offer?",
      answer:
        "We Promote is a full-service digital marketing agency in Texas, USA offering website design and development, SEO services, Google Ads (PPC) management, social media marketing, branding, UI/UX design, content marketing, local SEO, eCommerce development, and conversion rate optimization (CRO). We create customized digital marketing strategies that help businesses improve Google rankings, increase website traffic, generate qualified leads, and grow revenue. Whether you're a startup, small business, or enterprise, our data-driven solutions are designed to deliver measurable results and long-term business growth.",
    },
    {
      question:
        "Do you work with local businesses and service-based companies?",
      answer:
        " Yes. We specialize in helping local businesses, service-based companies, startups, small businesses, and growing enterprises across the USA. As a trusted digital marketing agency in Texas, USA, we work with industries including healthcare, hospitality, home services, legal, real estate, construction, eCommerce, restaurants, professional services, and more. Our customized SEO, website development, Google Ads, social media marketing, and digital marketing strategies are tailored to your industry, target audience, and business goals, helping you increase online visibility, generate qualified leads, and grow your business.",
    },
    {
      question: "How long does it take to complete a website development project?",
      answer:
        " The timeline for a website development project depends on your business goals, website size, and required features. Most business websites are completed within 2–6 weeks, while custom website development, eCommerce websites, and enterprise platforms may take 6–12 weeks or more. As a trusted website development company in Texas, USA, we follow a structured process that includes planning, UI/UX design, website development, SEO optimization, testing, and launch to ensure your website is fast, secure, mobile-friendly, and built for long-term business growth.",
    },
    {
      question: "How can your SEO services help my business rank higher on Google?",
      answer:
        " Our SEO services in the USA are designed to improve your website's visibility, increase organic traffic, and help your business rank higher on Google. We use a data-driven approach that includes technical SEO, on-page SEO, local SEO, keyword research, content optimization, link building, and performance monitoring to improve search engine rankings. As a trusted SEO agency in the USA, we create long-term strategies that attract qualified leads, increase website traffic, and deliver sustainable business growth. While SEO results typically take 3–6 months, it remains one of the most effective digital marketing investments for generating consistent, high-quality organic traffic and leads.",
    },
    {
      question: "Does We Promote provide Google Ads management and PPC services in Texas, USA?",
      answer:
        " Yes. We Promote is a trusted Google Ads management company in the USA, providing end-to-end Google Ads (PPC) management services for businesses of all sizes. Our team creates, manages, and continuously optimizes high-performing Google Ads campaigns that increase brand visibility, drive qualified leads, and maximize return on ad spend (ROAS). From keyword research and ad copy creation to audience targeting, conversion tracking, A/B testing, and campaign optimization, We Promote delivers data-driven PPC strategies that help businesses achieve measurable growth, increase sales, and generate more revenue across the USA.",
    },
    {
      question: "Does We Promote build mobile-friendly and SEO-optimized websites?",
      answer:
        "Yes. We Promote specializes in building mobile-friendly, fast-loading, and SEO-optimized websites that deliver an exceptional user experience on desktops, tablets, and smartphones. Our website development services in Texas, USA follow Google's Core Web Vitals best practices, ensuring faster loading speeds, responsive design, secure performance, and improved search engine rankings. Every website is designed to enhance user engagement, increase conversions, and help businesses grow their online presence with a high-performance website built for long-term success.",
    },
    {
      question: "Does We Promote provide website maintenance and ongoing SEO support?",
      answer:
        " Yes. We Promote provides comprehensive website maintenance, ongoing SEO support, and digital marketing services in Texas, USA to keep your website secure, updated, and performing at its best. Our team offers regular website updates, security monitoring, speed optimization, content updates, technical SEO, performance tracking, and continuous optimization to improve Google rankings and user experience. With We Promote's website maintenance services in the USA, your business benefits from reliable support, enhanced website performance, increased online visibility, and long-term digital growth.",
    },
    {
      question: "How can I get started with We Promote's digital marketing and web development services?",
      answer:
        "Getting started with We Promote is simple. Contact us through our website, phone, or email to schedule a free consultation with our experts. We'll discuss your business goals, evaluate your current online presence, and recommend the best website development, SEO, Google Ads, and digital marketing services tailored to your needs. Whether you're launching a new business or looking to grow an existing one, We Promote creates customized strategies that help you increase website traffic, generate qualified leads, improve Google rankings, and achieve long-term business growth across the USA.",
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