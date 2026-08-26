import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#case-study" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Website Development",
    "Search Engine Optimization",
    "Digital Growth Marketing",
    "Google Ads Optimization",
    "Brand Strategy & Alignment",
    "UI/UX Platform Architecture",
  ];

  const socialPlatforms = [
    {
      name: "LinkedIn",
      key: "ln",
      url: "#",
      path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    },
    {
      name: "Twitter",
      key: "tw",
      url: "#",
      path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    },
    {
      name: "Instagram",
      key: "ig",
      url: "https://www.instagram.com/anoint_media/",
      path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
    },
  ];

  const navigate = useNavigate();

  const location = useLocation();

  const handleScroll = (e, targetId) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/", {
        state: { scrollTo: targetId },
      });
    } else {
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",

          block: "start",
        });
      }
    }
  };

  return (
    <footer
      style={{
        backgroundColor: "#FFFFFF",
        backgroundImage:
          "linear-gradient(rgba(24, 47, 89, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(24, 47, 89, 0.02) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
      className="w-full pt-12 pb-10 px-6 md:px-12 lg:px-24 font-sans antialiased select-none border-t border-[#182f59]/10 relative"
    >
      <style>{`
        /* Seamless Underline Interaction System mapping exactly to your platform colors */
        .footer-brand-link {
          color: #182f59;
          text-decoration: none;
          font-size: 14.5px;
          font-weight: 500;
          position: relative;
          padding-bottom: 2px;
          display: inline-block;
          transition: color 0.2s ease;
        }
        .footer-brand-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1.5px;
          background: #4cb1a1;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .footer-brand-link:hover {
          color: #4cb1a1;
        }
        .footer-brand-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .footer-social-pill {
          color: #182f59;
          background-color: #FFFFFF;
          border: 1px solid rgba(24, 47, 89, 0.08);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .footer-social-pill:hover {
          color: #FFFFFF;
          background-color: #182f59;
          border-color: #182f59;
        }
      `}</style>

      <div className="max-w-[1320px] mx-auto flex flex-col relative z-10">
        {/* UPPER BRANDING LAYOUT GRID MAP */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-24">
          {/* COLUMN 1: CORPORATE MANIFESTO ABSTRACT (5 Grid Spans) */}
          <div className="md:col-span-5 flex flex-col items-start pr-0 lg:pr-12">
            <img
              src={logo}
              alt="Anoint Media"
              className="h-14 object-contain mb-8"
            />
            <p className="text-[#182f59]/70 font-medium text-[15px] leading-relaxed max-w-sm mb-8">
              We deploy multi-channel systems across digital engineering,
              technical architecture, and customer acquisition to transform
              standard lead flows into predictable pipelines.
            </p>

            {/* Minimal High-Contrast Interaction Icon Hub */}
            <div className="flex gap-3 items-center">
              {socialPlatforms.map((platform) => (
                <motion.a
                  key={platform.key}
                  href={platform.url}
                  target={platform.url.startsWith("http") ? "_blank" : undefined}
                  rel={platform.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  aria-label={platform.name}
                  className="w-10 h-10 rounded-lg footer-social-pill flex items-center justify-center"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d={platform.path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: INTERNAL PLATFORM LINKS WITH ID MAPPINGS & KINETIC HOVER SIGNALS */}
          <div className="md:col-span-2 flex flex-col items-start">
            <span className="text-[#182f59]/40 text-xs font-bold uppercase tracking-[0.15em] block mb-6">
              Index
            </span>
            <ul className="space-y-4">
              {quickLinks.map((link, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href.replace("#", ""))}
                    className="footer-brand-link"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: SYSTEM CAPABILITIES FRAMEWORK WITH MICRO-STAGGER ARRAYS */}
          <div className="md:col-span-3 flex flex-col items-start">
            <span className="text-[#182f59]/40 text-xs font-bold uppercase tracking-[0.15em] block mb-6">
              Capabilities
            </span>
            <ul className="space-y-4">
              {services.map((service, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 4, color: "#4cb1a1" }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="text-[#182f59] font-semibold text-[14.5px] tracking-tight cursor-default transition-colors duration-200"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: ENDPOINT NETWORKS COMMUNICATION */}
          <div className="md:col-span-2 flex flex-col items-start">
            <span className="text-[#182f59]/40 text-xs font-bold uppercase tracking-[0.15em] block mb-6">
              Connections
            </span>
            <div className="space-y-4 flex flex-col items-start">
              <motion.a
                href="tel:+919877974161"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="footer-brand-link font-mono tracking-tight text-[15px]"
              >
                +91 98779 74161
              </motion.a>
              <motion.a
                href="mailto:anointmedia@gmail.com"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="footer-brand-link text-[15px]"
              >
                anointmedia@gmail.com
              </motion.a>
              <p className="text-[#182f59]/60 text-xs font-medium leading-relaxed pt-2">
                Deployments actively maintained across USA, Canada, UAE, UK, and
                India.
              </p>
            </div>
          </div>
        </div>

        {/* LOWER SHELF LEVEL FRAME CLOSURE */}
        <div className="border-t border-[#182f59]/10 pt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4cb1a1]" />
            <p className="text-[#182f59]/50 text-xs font-bold uppercase tracking-wider">
              © {new Date().getFullYear()} Anoint Media. All rights reserved.
            </p>
          </div>

          <p className="text-[#182f59]/80 text-xs font-extrabold uppercase tracking-widest bg-[#182f59]/5 px-3.5 py-1.5 rounded-md">
            Built for Growth <span className="text-[#4cb1a1] mx-1">•</span>{" "}
            Designed for Results
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
