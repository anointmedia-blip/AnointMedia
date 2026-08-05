import React, { useState } from "react";
import { toast } from "react-toastify";

const ServiceLayout = ({
  // Hero Props
  heroTitle,
  heroCheckpoints = [],
  showForm = true,

  // Feature Section Props (The introductory content with an image)
  featureTitle,
  featureParagraphs = [],
  featureImage,

  // Grid Props (The 6 boxes: e.g., Logo & Branding, Print Design)
  gridSectionTitle,
  gridItems = [],

  // Center Call-To-Action Banner Props
  bannerText,
  bannerBtnText,

  // Core Value Pillars / Process Steps (e.g., Research, Evaluate, Execute)
  pillarsTitle,
  pillarsItems = [],

  // Bottom Project Discussion Card
  bottomCtaTitle,
  bottomCtaDescription,
  bottomCtaBtnText,
  bottomCtaImage,
}) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    website: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzP96mfiVgcSTISfueZxqFuzeIF6zGeLa6uUL3cpsTW2tExLBxPmxAEEgbjWjx-dZXv/exec",
        {
          method: "POST",
          body: JSON.stringify({
            ...formData,
            formType: "Service Page Lead",
            serviceName: heroTitle,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        toast.success("Request submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          website: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#FDFDFC] font-sans antialiased text-[#334155]">
      {/* ================= SECTION 1: HERO CONTAINER ================= */}
      <section className="w-full bg-white py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Main Context Column */}
          <div className="lg:col-span-7 space-y-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E4B72A] block">
              Premium Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#0F2C59] leading-[0.95]">
              {heroTitle}
            </h1>

            {/* Structural Checkpoints */}
            {heroCheckpoints.length > 0 && (
              <div className="space-y-3 pt-2">
                {heroCheckpoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-[#F8F7FF] p-4 border border-slate-100 transition-colors duration-300"
                  >
                    <span className="text-[#E4B72A] font-bold text-xs mt-0.5 shrink-0">
                      ✦
                    </span>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#0F2C59] leading-tight">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-4">
              <button className="px-7 py-3.5 bg-[#E4B72A] hover:bg-[#CD9D20] transition-all duration-300 text-white font-bold uppercase tracking-[0.15em] text-[11px] rounded-xs shadow-sm hover:shadow-md">
                Schedule a Meeting
              </button>
            </div>
          </div>

          {/* Right Main Consultation Form Column */}
          <div className="lg:col-span-5 w-full lg:sticky lg:top-28">
            {showForm ? (
              <div className="bg-white border border-slate-200/60 p-6 sm:p-8 rounded-2xl shadow-[0_20px_50px_-12px_rgba(15,44,89,0.08)] border-t-4 border-t-[#E4B72A]">
                <h3 className="text-xs font-black tracking-[0.25em] text-[#0F2C59] text-center uppercase mb-6 pb-4 border-b border-slate-100">
                  Request Consultation
                </h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#0F2C59] block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Aapka Naam"
                      required
                      className="w-full h-11 px-4 text-xs font-semibold rounded-lg border border-slate-200 bg-[#FDFDFC] text-[#0F2C59] placeholder-slate-400 focus:border-[#E4B72A] focus:ring-4 focus:ring-[#E4B72A]/5 outline-none transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#0F2C59] block">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Company@gmail.com"
                      required
                      className="w-full h-11 px-4 text-xs font-semibold rounded-lg border border-slate-200 bg-[#FDFDFC] text-[#0F2C59] placeholder-slate-400 focus:border-[#E4B72A] focus:ring-4 focus:ring-[#E4B72A]/5 outline-none transition-all duration-200"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#0F2C59] block">
                        Website URL
                      </label>
                      <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="company.com"
                        className="w-full h-11 px-4 text-xs font-semibold rounded-lg border border-slate-200 bg-[#FDFDFC] text-[#0F2C59] placeholder-slate-400 focus:border-[#E4B72A] focus:ring-4 focus:ring-[#E4B72A]/5 outline-none transition-all duration-200"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[#0F2C59] block">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full h-11 px-4 text-xs font-semibold rounded-lg border border-slate-200 bg-[#FDFDFC] text-[#0F2C59] placeholder-slate-400 focus:border-[#E4B72A] focus:ring-4 focus:ring-[#E4B72A]/5 outline-none transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#0F2C59] block">
                      Project Infrastructure
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your technical objectives, timelines, and scaling parameters..."
                      rows="3"
                      className="w-full p-4 text-xs font-semibold rounded-lg border border-slate-200 bg-[#FDFDFC] text-[#0F2C59] placeholder-slate-400 focus:border-[#E4B72A] focus:ring-4 focus:ring-[#E4B72A]/5 outline-none resize-none transition-all duration-200"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full h-12 text-white font-black uppercase tracking-[0.2em] text-[11px] rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all duration-200 ${loading
                        ? "bg-slate-400 cursor-not-allowed"
                        : "bg-[#0F2C59] hover:bg-[#0b2143] hover:shadow-md"
                        }`}
                    >
                      {loading ? (
                        <>
                          <svg
                            className="w-4 h-4 animate-spin text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              opacity="0.25"
                            />
                            <path
                              d="M22 12a10 10 0 00-10-10"
                              stroke="currentColor"
                              strokeWidth="4"
                              strokeLinecap="round"
                            />
                          </svg>
                          Processing...
                        </>
                      ) : (
                        "Submit Request"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="w-full flex justify-center">
                <div className="w-12 h-0.5 bg-[#E4B72A]" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: INTRO FEATURE ================= */}
      {featureTitle && (
        <section className="w-full py-20 md:py-28 max-w-6xl mx-auto px-6 md:px-12 lg:px-24 bg-[#FDFDFC]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="relative p-2 bg-white border border-slate-200/60 shadow-md rounded-xl overflow-hidden group">
                <img
                  src={
                    featureImage ||
                    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000"
                  }
                  alt="Showcase Context"
                  className="w-full h-auto rounded-lg object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E4B72A] block">
                Analysis & Overview
              </span>
              <h2 className="text-4xl font-black uppercase tracking-tighter text-[#0F2C59] leading-[0.95]">
                {featureTitle}
              </h2>
              <div className="space-y-4 text-[13px] text-slate-600 font-semibold leading-relaxed">
                {featureParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= SECTION 3: CORE GRID SERVICES ================= */}
      {gridItems.length > 0 && (
        <section className="w-full py-24 bg-[#FDFDFC] border-t border-slate-200/60">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="mb-16">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E4B72A] mb-4 block">
                Capabilities Matrix
              </span>
              <h2 className="text-5xl font-black uppercase tracking-tighter text-[#0F2C59] leading-[0.95]">
                {gridSectionTitle || "Technical Alliance."}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 shadow-sm">
              {gridItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#FDFDFC] p-8 flex flex-col items-start justify-between hover:bg-[#F8F7FF] transition-colors duration-500 group min-h-[250px]"
                >
                  <div className="space-y-4">
                    <div className="text-[#E4B72A] group-hover:text-[#0F2C59] transition-colors duration-500">
                      {item.icon || (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-[12px] font-black uppercase tracking-wider text-[#0F2C59]">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-[12.5px] leading-relaxed font-semibold">
                      {item.description}
                    </p>
                  </div>
                  <div className="w-5 h-0.5 bg-slate-200 group-hover:w-full group-hover:bg-[#E4B72A] transition-all duration-500 mt-6" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= SECTION 4: MID BANNER ================= */}
      {bannerText && (
        <section className="w-full py-16 bg-[#0F2C59] text-white px-6 md:px-12 lg:px-24 border-y border-white/10">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <p className="text-3xl font-black uppercase tracking-tighter text-white max-w-3xl leading-[0.95]">
              {bannerText}
            </p>
            <button className="whitespace-nowrap px-6 py-3.5 bg-[#E4B72A] hover:bg-[#CD9D20] transition-colors duration-300 text-white font-extrabold text-[11px] tracking-[0.2em] uppercase rounded-xs shadow-md">
              {bannerBtnText || "Connect Alliance"}
            </button>
          </div>
        </section>
      )}

      {/* ================= SECTION 5: CORE PILLARS ================= */}
      {pillarsItems.length > 0 && (
        <section className="w-full py-24 max-w-6xl mx-auto px-6 md:px-12 lg:px-24 bg-[#FDFDFC]">
          <div className="mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E4B72A] mb-4 block">
              Execution Architecture
            </span>
            <h2 className="text-5xl font-black uppercase tracking-tighter text-[#0F2C59] leading-[0.95]">
              {pillarsTitle || "Strategic Milestones."}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {pillarsItems.map((pillar, index) => (
              <div
                key={index}
                className="flex gap-4 sm:gap-6 items-start border-b border-slate-100 pb-6"
              >
                <div className="text-[11px] font-black uppercase tracking-widest text-[#E4B72A] bg-[#F8F7FF] w-9 h-9 rounded-md flex items-center justify-center shrink-0 border border-slate-100 shadow-3xs">
                  {pillar.customIcon || String(index + 1).padStart(2, "0")}
                </div>
                <div className="space-y-2">
                  <h3 className="text-[12px] font-black uppercase tracking-wider text-[#0F2C59]">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-500 text-[12.5px] font-semibold leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= SECTION 6: FOOTER CTA CARD ================= */}
      {bottomCtaTitle && (
        <section className="w-full py-20 bg-white border-t border-slate-100 px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto bg-[#FDFDFC] border border-slate-200/60 shadow-xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-12 rounded-xl">
            {/* Project Illustration Wrapper */}
            <div className="w-full lg:w-[35%] flex justify-center">
              <img
                src={
                  bottomCtaImage ||
                  "https://images.unsplash.com/photo-1553484771-047a44eee27f?auto=format&fit=crop&q=80&w=800"
                }
                alt="Collaboration Stream"
                className="max-h-56 w-auto object-contain grayscale opacity-80"
              />
            </div>

            {/* Direct Copywriting Context Block */}
            <div className="w-full lg:w-[65%] space-y-6 text-center lg:text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E4B72A] block">
                Next Stage Engagement
              </span>
              <h2 className="text-4xl font-black uppercase tracking-tighter text-[#0F2C59] leading-[0.95]">
                {bottomCtaTitle}
              </h2>
              <p className="text-slate-500 text-[13px] font-semibold leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {bottomCtaDescription}
              </p>
              <div className="pt-2">
                <button className="px-8 py-3.5 bg-[#E4B72A] hover:bg-[#CD9D20] transition-all duration-300 text-white font-black uppercase text-[11px] tracking-[0.2em] rounded-xs shadow-md">
                  {bottomCtaBtnText || "Initiate Brief"}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ServiceLayout;