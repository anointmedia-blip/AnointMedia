import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Check, Target, Eye, Lightbulb, Users,
  Code, Search, Megaphone, Share2, Award, Compass,
  ChevronRight, Quote
} from 'lucide-react';

// Premium high-performance transition profiles
const textVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } }
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } }
};

const containerStagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

export default function AboutUs() {
  const navigate = useNavigate();
  const location = useLocation();

  // Unified, bulletproof smooth scroll context handler
  const handleConnectClick = () => {
    if (location.pathname === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      navigate("/", {
        state: {
          scrollTo: "contact",
        },
      });
    }
  };

  return (
    <div className="bg-white text-[#0B2341] font-sans antialiased selection:bg-[#13D8C2]/30 overflow-x-hidden">

      {/* ==========================================
          SECTION 1: HERO
         ========================================== */}
      <section className="relative pt-12 pb-24 lg:pt-10 lg:pb-36 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#13D8C2]/5 via-white to-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          <motion.div
            className="lg:col-span-7 space-y-8 text-left"
            initial="hidden"
            animate="visible"
            variants={containerStagger}
          >
            <motion.h1 variants={textVariant} className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0B2341] leading-[1.12]">
              Most business owners don’t need more marketing. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2341] to-[#13D8C2]">
                They need more customers.
              </span>
            </motion.h1>

            <motion.p variants={textVariant} className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              That’s why we focus on building websites, running campaigns, and creating systems that help businesses get found online and generate real inquiries.
            </motion.p>

            <motion.div variants={textVariant} className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={handleConnectClick}
                className="px-8 py-4 bg-[#0B2341] hover:bg-[#0B2341]/90 text-white font-bold rounded-xl tracking-wide shadow-lg shadow-[#0B2341]/10 transition-all flex items-center gap-2 group cursor-pointer"
              >
                Book A Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleConnectClick}
                className="px-8 py-4 border-2 border-[#0B2341] text-[#0B2341] font-bold rounded-xl hover:bg-[#0B2341]/5 transition-all cursor-pointer"
              >
                Contact Us
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-100 group">
              <div className="absolute inset-0 bg-[#0B2341]/5 mix-blend-multiply transition-opacity group-hover:opacity-0 duration-300" />
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWdlbmN5fGVufDB8fDB8fHww"
                alt="Anoint Media Strategic Review Session"
                className="w-full h-full object-cover aspect-[4/3] lg:aspect-[11/10] transform scale-100 group-hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ==========================================
          SECTION 2: OUR STORY
         ========================================== */}
      <section className="py-24 border-t border-slate-100 bg-slate-50/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          <div className="lg:col-span-5 order-last lg:order-first">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white p-3">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80"
                alt="Honest operational collaborative session"
                className="rounded-xl w-full h-full object-cover aspect-[4/5]"
              />
            </div>
          </div>

          <motion.div
            className="lg:col-span-7 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerStagger}
          >
            <motion.span variants={textVariant} className="text-xs font-bold tracking-widest text-[#13D8C2] uppercase block">Our Corporate Journey</motion.span>
            <motion.h2 variants={textVariant} className="text-3xl sm:text-4xl font-extrabold text-[#0B2341] tracking-tight">
              Built on Transparency, Driven by Performance
            </motion.h2>
            <div className="h-1 w-12 bg-[#0B2341] rounded-full my-2" />

            <motion.p variants={textVariant} className="text-base sm:text-lg text-slate-6xl text-slate-600 leading-relaxed font-normal">
              Anoint Media was founded with a single, clear mission: to cut through the noise of the digital landscape and deliver straightforward, honest, and impactful results for businesses looking to scale.
            </motion.p>
            <motion.p variants={textVariant} className="text-base sm:text-lg text-slate-6xl text-slate-600 leading-relaxed font-normal">
              We recognized early on that businesses don't just need software developers or copywriters in isolation—they need a cohesive partner that bridges the gap between deep technical capability and creative marketing strategy.
            </motion.p>
            <motion.p variants={textVariant} className="text-base sm:text-lg text-slate-6xl text-slate-600 leading-relaxed font-normal">
              Over the years, our growth has been entirely driven by the successes of our clients. By focusing on long-term relationships instead of short-term wins, we treat your business as our own, putting dedication, real collaboration, and data-backed performance metrics at the center of everything we do.
            </motion.p>
          </motion.div>

        </div>
      </section>

      {/* ==========================================
          SECTION 3: WHAT WE BELIEVE
         ========================================== */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-bold tracking-widest text-[#13D8C2] uppercase block">Our Foundational Values</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2341] tracking-tight">Core Pillars of Trust</h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">The principles that dictate how we protect your investments and handle your operational strategies daily.</p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerStagger}
        >
          {[
            { icon: Target, title: "Results Matter", desc: "We focus completely on real outcomes—like increased digital inquiries, verified sales cycles, and transparent baseline metrics over vanity statistics." },
            { icon: Eye, title: "Transparency First", desc: "No complex communication standard. We provide completely clear monthly data analysis reporting regarding your growth assets." },
            { icon: Lightbulb, title: "Continuous Innovation", desc: "The landscape evolves daily. We systematically refine our internal strategies to keep your brand consistently positioned ahead of market curves." },
            { icon: Users, title: "Long-Term Partnerships", desc: "We measure our success by how long we sustain your growth trajectory, acting as a direct extension of your management team." }
          ].map((belief, idx) => (
            <motion.div
              key={idx}
              variants={cardVariant}
              whileHover={{ y: -5, borderColor: '#0B2341' }}
              className="p-8 bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0B2341]/5 text-[#0B2341] flex items-center justify-center mb-6 border border-slate-100">
                  <belief.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0B2341] mb-3">{belief.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-normal">{belief.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ==========================================
          SECTION 4: WHAT WE DO
         ========================================== */}
      <section className="py-24 bg-slate-50 border-y border-slate-200/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-xs font-bold tracking-widest text-[#13D8C2] uppercase block">Specialized Skillsets</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2341] tracking-tight">Our Core Services</h2>
            <p className="text-slate-500 text-sm sm:text-base">Comprehensive, high-performance solutions tailored to your operational parameters.</p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerStagger}
          >
            {[
              { icon: Code, s: "Website Development", d: "Clean, standards-compliant, responsive websites built natively to maximize page speeds, security parameters, and customer conversion rates." },
              { icon: Search, s: "SEO", d: "Data-driven organic search strategy centered strictly on intent-based placement profiles to consistently capture inbound inquiries." },
              { icon: Megaphone, s: "Google Ads", d: "Expert strategy configuration across targeted networks to directly lower costs per acquisition while retaining higher lead values." },
              { icon: Share2, s: "Social Media Marketing", d: "Organic distribution framework setups and targeted paid social execution models designed to build sustained company authority." },
              { icon: Award, s: "Branding", d: "Cohesive visual identity systems, corporate messaging standards, and functional assets that definitively outpace industry competitors." },
              { icon: Compass, s: "Digital Strategy", d: "High-level diagnostic roadmap evaluations focused squarely on uncovering new revenue paths and optimizing current operational touchpoints." }
            ].map((srv, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(11,35,65,0.04)" }}
                className="bg-white border border-slate-200/70 p-8 rounded-2xl transition-all duration-300 group relative"
              >
                <div className="absolute top-0 left-8 right-8 h-1 bg-[#13D8C2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-b-full" />
                <div className="w-12 h-12 rounded-xl bg-[#13D8C2]/10 text-[#0B2341] flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#0B2341] group-hover:text-white">
                  <srv.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#0B2341] mb-3 group-hover:text-[#13D8C2] transition-colors">{srv.s}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-normal">{srv.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          SECTION 5: WHY CLIENTS CHOOSE US
         ========================================== */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-50 border border-slate-200 p-4">
              <img
                src="https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?w=900&auto=format&fit=crop&q=60"
                alt="Operational transparent sync meeting"
                className="rounded-xl w-full h-full object-cover aspect-[4/3] lg:aspect-[5/6]"
              />
            </div>
          </div>

          <motion.div
            className="lg:col-span-6 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerStagger}
          >
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest text-[#13D8C2] uppercase block">The Agency Difference</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2341] tracking-tight">Why Clients Choose Us</h2>
              <p className="text-slate-500 text-sm sm:text-base font-normal">We reject general templates. We align every action closely with your actual commercial performance constraints.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-2">
              {[
                { t: "Customized Strategies", d: "Bespoke setups built around your specific target audience segments." },
                { t: "Experienced Team", d: "Direct access to dedicated experts instead of junior account reps." },
                { t: "Transparent Reporting", d: "Unfiltered access to true tracking details with absolute strategic clarity." },
                { t: "Reliable Support", d: "Swift operational adjustments and ongoing communicative updates." },
                { t: "Proven Results", d: "An established operational track record across diverse local markets." },
                { t: "Growth-Focused Approach", d: "Every optimization cycle targets a better, healthier customer acquisition cost." }
              ].map((benefit, bIdx) => (
                <motion.div key={bIdx} variants={textVariant} className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-md bg-[#13D8C2]/20 border border-[#13D8C2]/40 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3 h-3 text-[#0B2341]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B2341] text-base">{benefit.t}</h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed font-normal">{benefit.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ==========================================
          SECTION 6: INDUSTRIES WE SERVE
         ========================================== */}
      <section className="py-24 bg-slate-50/60 border-t border-slate-200/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#13D8C2] uppercase block">Proven Industry Exposure</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2341] tracking-tight">Industries We Serve</h2>
            <p className="text-slate-500 text-sm sm:text-base font-normal">We recognize that every market has specific regulatory and behavioral traits.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              "Restaurants", "Healthcare", "Construction", "Real Estate",
              "Law Firms", "Home Services", "E-Commerce", "Hospitality"
            ].map((industry, indIdx) => (
              <div
                key={indIdx}
                className="bg-white border border-slate-200 p-5 rounded-xl flex items-center justify-between group shadow-sm hover:border-[#0B2341] transition-all duration-200 cursor-default"
              >
                <span className="font-bold text-sm sm:text-base text-[#0B2341]">{industry}</span>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#0B2341] group-hover:translate-x-0.5 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 7: GLOBAL CLIENTS
         ========================================== */}
      <section className="py-24 max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-[#13D8C2] uppercase block">Regional Market Adaptability</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2341] tracking-tight">Serving Businesses Across The Globe</h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-lg mx-auto font-normal">Handling campaigns across distinct jurisdictional boundaries and market trends.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {["USA", "Canada", "UAE", "UK", "India"].map((country, cIdx) => (
            <div
              key={cIdx}
              className="bg-white border border-slate-200 px-10 py-5 rounded-xl font-black text-sm text-[#0B2341] shadow-sm tracking-widest uppercase hover:bg-[#0B2341] hover:text-white transition-colors duration-200 cursor-default"
            >
              {country}
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          SECTION 8: TESTIMONIALS
         ========================================== */}
      <section className="py-24 border-t border-slate-200/60 bg-slate-50/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#13D8C2] uppercase block">
              Why Businesses Work With Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2341] tracking-tight">
              Built on Trust, Transparency & Results
            </h2>
            <p className="text-slate-500 text-sm sm:text-base font-normal">
              We focus on creating strong relationships and delivering work that helps businesses move forward.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Clear Communication",
                text: "We believe clients should always know what is being worked on, why it matters, and what results to expect. No confusing reports or unnecessary jargon.",
              },
              {
                title: "Long-Term Relationships",
                text: "Our goal isn't to complete a project and disappear. We focus on building lasting partnerships and supporting businesses as they grow.",
              },
              {
                title: "Results That Matter",
                text: "Whether it's a new website, SEO campaign, or advertising strategy, we focus on outcomes that help businesses attract more customers and create opportunities for growth.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#13D8C2]/10 flex items-center justify-center mb-6">
                    <Quote className="w-5 h-5 text-[#13D8C2]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B2341] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-normal">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 9: FINAL CTA
         ========================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#0B2341] text-white rounded-3xl p-10 sm:p-16 lg:p-20 text-center space-y-8 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">Let’s Build Something Great Together</h2>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-normal leading-relaxed">
              Ready to grow your business with a trusted digital partner?
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={handleConnectClick}
              className="px-8 py-4 bg-[#13D8C2] hover:bg-[#13D8C2]/90 text-[#0B2341] font-bold tracking-wide rounded-xl shadow-lg shadow-[#13D8C2]/10 transition-colors cursor-pointer"
            >
              Book A Call
            </button>
            <button
              onClick={handleConnectClick}
              className="px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold rounded-xl transition-all cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}