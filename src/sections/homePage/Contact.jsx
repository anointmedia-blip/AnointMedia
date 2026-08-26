import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { GOOGLE_SHEET_SCRIPT_URL } from "../../config/sheets";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: [],
    budget: [],
    contactMethod: "",
    projectDetails: "",
  });

  const handleMultiSelect = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.service.length === 0) {
      toast.error("Please select at least one service.");
      return;
    }

    if (formData.budget.length === 0) {
      toast.error("Please select a budget range.");
      return;
    }

    if (!formData.contactMethod) {
      toast.error("Please select your preferred contact method.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        GOOGLE_SHEET_SCRIPT_URL,
        {
          method: "POST",
          body: JSON.stringify(formData),
          redirect: "follow",
        },
      );

      const result = await response.json();
      if (result.success) {
        toast.success("Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          service: [],
          budget: [],
          contactMethod: "",
          projectDetails: "",
        });
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // REMOVED 'select-none' FROM THE CLASS LIST BELOW
    <section
      id="contact"
      className="w-full bg-white py-24 px-6 md:px-12 lg:px-24 font-sans antialiased overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(16,34,61,0.07)] border border-slate-100">

        {/* LEFT COLUMN: BRAND INFO CARD HUB */}
        <div className="lg:col-span-5 bg-[#10223d] p-8 sm:p-12 md:p-16 flex flex-col justify-between relative text-white overflow-hidden">
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#E4B72A]/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <span className="text-[#E4B72A] text-[13px] font-extrabold tracking-widest uppercase">
              Get In Touch
            </span>
            <h2 className="text-white text-[36px] md:text-[42px] font-black tracking-tight leading-tight mt-3 mb-6">
              Let's Scale Your <br />
              Business Together
            </h2>
            <p className="text-slate-300 font-medium text-[15px] leading-[1.65] max-w-sm mb-12">
              Ready to dominate search engine results, scale conversions, and
              maximize your multi-channel ROAS metrics? Drop us a message.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[#E4B72A] group-hover:bg-white/10 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+919877974161" className="font-bold text-[15.5px] tracking-wide text-white/90 group-hover:text-white transition-colors">
                  +91 98779 74161
                </a>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[#E4B72A] group-hover:bg-white/10 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:anointmedia@gmail.com" className="font-bold text-[15.5px] tracking-wide text-white/90 group-hover:text-white transition-colors">
                  anointmedia@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-6 border-t border-white/10 flex flex-col relative z-10">
            <span className="text-[12px] font-extrabold tracking-widest text-[#E4B72A] uppercase">
              Global Execution Framework
            </span>
            <span className="text-[13px] text-slate-400 font-medium mt-1">
              Serving clients across Dubai, US, UK, India, and Canada.
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: REVENUE LEAD CAPTURE FORM */}
        <div className="lg:col-span-7 bg-[#f8fafc]/60 p-8 sm:p-12 md:p-16 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm font-bold text-[#10223d]">Full Name *</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Aapka Naam" required className="w-full h-14 px-5 rounded-xl border border-slate-200 bg-white text-[#10223d] font-medium focus:border-[#E4B72A] focus:ring-4 focus:ring-[#E4B72A]/10 outline-none transition duration-200" />
              </div>
              <div>
                <label className="block mb-2 text-sm font-bold text-[#10223d]">Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Company@gmail.com" required className="w-full h-14 px-5 rounded-xl border border-slate-200 bg-white text-[#10223d] font-medium focus:border-[#E4B72A] focus:ring-4 focus:ring-[#E4B72A]/10 outline-none transition duration-200" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm font-bold text-[#10223d]">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" className="w-full h-14 px-5 rounded-xl border border-slate-200 bg-white text-[#10223d] font-medium focus:border-[#E4B72A] focus:ring-4 focus:ring-[#E4B72A]/10 outline-none transition duration-200" />
              </div>
              <div>
                <label className="block mb-2 text-sm font-bold text-[#10223d]">Company Name</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" className="w-full h-14 px-5 rounded-xl border border-slate-200 bg-white text-[#10223d] font-medium focus:border-[#E4B72A] focus:ring-4 focus:ring-[#E4B72A]/10 outline-none transition duration-200" />
              </div>
            </div>

            <div className="w-full">
              <label className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-[#10223d]">Services Needed *</span>
                {formData.service.length > 0 && <span className="text-xs font-bold text-[#E4B72A] bg-[#E4B72A]/10 px-2.5 py-0.5 rounded-md">{formData.service.length} Selected</span>}
              </label>
              <div className="flex flex-wrap gap-2.5">
                {["Website Development", "SEO", "Digital Marketing", "Google Ads", "UI/UX Design", "Brand Strategy", "E-Commerce", "Social Media Marketing"].map((service) => {
                  const isSelected = formData.service.includes(service);
                  return (
                    <button type="button" key={service} onClick={() => handleMultiSelect("service", service)} className={`px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${isSelected ? "bg-[#E4B72A] border-[#E4B72A] text-white shadow-md shadow-[#E4B72A]/10" : "bg-white border-slate-200 text-slate-600 hover:border-[#E4B72A]/40 hover:text-[#E4B72A]"}`}>
                      {service}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="w-full">
              <label className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-[#10223d]">Budget Range *</span>
                {formData.budget.length > 0 && <span className="text-xs font-bold text-[#10223d] bg-[#10223d]/5 px-2.5 py-0.5 rounded-md">{formData.budget.length} Selected</span>}
              </label>
              <div className="flex flex-wrap gap-2.5">
                {["$300 - $500", "$500 - $800", "$800 - $1200", "$1200 - $1500", "$2,000+"].map((budget) => {
                  const isSelected = formData.budget.includes(budget);
                  return (
                    <button type="button" key={budget} onClick={() => handleMultiSelect("budget", budget)} className={`px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all duration-200 ${isSelected ? "bg-[#10223d] border-[#10223d] text-white shadow-md" : "bg-white border-slate-200 text-slate-600 hover:border-[#10223d]/30 hover:text-[#10223d]"}`}>
                      {budget}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block mb-3 text-sm font-bold text-[#10223d]">Preferred Contact Method *</label>
              <div className="grid grid-cols-3 gap-3">
                {["Call", "Email", "Any"].map((method) => {
                  const isSelected = formData.contactMethod === method;
                  return (
                    <label key={method} className={`h-14 rounded-xl border cursor-pointer flex items-center justify-center text-sm font-bold transition duration-200 ${isSelected ? "border-[#E4B72A] bg-[#E4B72A]/5 text-[#E4B72A]" : "border-slate-200 bg-white text-slate-500 hover:border-slate-300"}`}>
                      <input type="radio" name="contactMethod" value={method} checked={isSelected} onChange={handleChange} className="hidden" />
                      {method}
                    </label>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-bold text-[#10223d]">Project Details *</label>
              <textarea name="projectDetails" value={formData.projectDetails} onChange={handleChange} rows={5} required placeholder="Tell us about your business, goals, target audience, challenges, and project requirements..." className="w-full rounded-xl border border-slate-200 bg-white p-5 text-[#10223d] font-medium focus:border-[#E4B72A] focus:ring-4 focus:ring-[#E4B72A]/10 outline-none resize-none transition duration-200" />
            </div>

            <motion.button whileHover={!loading ? { y: -2 } : {}} whileTap={!loading ? { scale: 0.98 } : {}} type="submit" disabled={loading} className="w-full h-16 rounded-xl bg-[#E4B72A] hover:bg-[#CD9D20] disabled:opacity-70 disabled:cursor-not-allowed text-white font-black tracking-[0.12em] text-sm uppercase transition-all shadow-[0_10px_30px_rgba(228,183,42,0.2)]">
              {loading ? "Sending..." : "Get Free Strategy Consultation"}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;