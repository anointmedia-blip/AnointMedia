import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const feedbackData = [
    {
      name: "Gaurav Sharma",
      role: "Founder, Healthcare Business",
      stars: 5,
      comment:
        "The website exceeded our expectations. The team understood our requirements clearly and delivered a modern platform that helped us generate more enquiries.",
    },
    {
      name: "Amit Verma",
      role: "Director, Manufacturing Company",
      stars: 5,
      comment:
        "Professional communication, timely delivery, and excellent support throughout the project. We have already seen significant improvement in our online presence.",
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Manager, Hospitality Brand",
      stars: 5,
      comment:
        "Their design and marketing strategy helped us attract more qualified leads. The entire process was smooth and transparent from start to finish.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-[#E4B72A] text-xs uppercase tracking-[0.25em] font-semibold">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-light tracking-[-0.04em] text-slate-900 leading-[1.05]">
            Trusted By
            <br />
            Growing Businesses
          </h2>

          <p className="mt-6 text-slate-500 text-lg leading-relaxed">
            Real feedback from brands that partnered with Anoint Media
            to grow their online presence and generate measurable
            results.
          </p>
        </div>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {feedbackData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
              }}
              className="
                group
                bg-white
                border
                border-slate-200
                rounded-[28px]
                p-8
                flex
                flex-col
                justify-between
                min-h-[320px]
                transition-all
                duration-300
                hover:border-[#E4B72A]/20
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              "
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(item.stars)].map((_, idx) => (
                    <svg
                      key={idx}
                      className="w-5 h-5 text-[#f2a115]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-600 text-[15px] leading-7">
                  "{item.comment}"
                </p>
              </div>

              {/* Footer */}
              <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">
                    {item.name}
                  </h4>

                  <p className="text-sm text-slate-500 mt-1">
                    {item.role}
                  </p>
                </div>

                <span className="text-6xl text-slate-100 font-serif leading-none">
                  ”
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Trust Line */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm uppercase tracking-[0.2em]">
            Trusted By Businesses Across Multiple Industries
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;