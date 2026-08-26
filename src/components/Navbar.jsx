import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { HiMenuAlt3, HiX, HiChevronDown } from "react-icons/hi";
import { useNavigate, Link } from "react-router-dom";
import logoimg from "../assets/logo.png";
import { IoCall } from "react-icons/io5";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null); // 'services', 'about', or null
  const [activeServiceTab, setActiveServiceTab] = useState(
    "DESIGN & DEVELOPMENT",
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const navigate = useNavigate();

  const handleConnectClick = () => {
    setMobileMenuOpen(false);

    if (window.location.pathname === "/") {
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

  // Structured Professional Service Data with Perfect Path Architectures mapping to App.jsx
  const serviceContent = {
    "DIGITAL MARKETING": {
      col1Title: "Search Engine Optimization",
      col1Items: [
        { label: "White lable SEO", path: "/white-label-seo" },
        { label: "Local SEO", path: "/label-seo" },
        { label: "ECommerce SEO", path: "/ecommerce-seo" },
        { label: "Dental SEO", path: "/dental-seo" },
        { label: "Fashion SEO", path: "/fashion-seo" },
        { label: "Law Firm SEO", path: "/lawfirm-seo" },
        { label: "Locksmith SEO", path: "/lacksmith-seo" },
        { label: "Roofing SEO", path: "/roofing-seo" },
        { label: "Real Estate SEO", path: "/realestate-seo" },
        { label: "Blockchain SEO", path: "/blockchain-seo" },
      ],
      col2Title: "Digital Marketing",
      col2Items: [
        { label: "Content Marketing Agency", path: "/content-marketing" },
        { label: "Affiliate Marketing Services", path: "/affiliate-marketing" },
      ],
    },
    "PERFORMANCE MARKETING": {
      col1Title: "Pay Per Click Marketing Services",
      col1Items: [
        { label: "Google Ads Management Services", path: "/google-ads" },
        { label: "Social Media Advertising", path: "/social-media-ads" },
        { label: "Youtube Marketing Agency", path: "/youtube-marketing" },
        { label: "Linkedin Marketing Agency", path: "/linkedin-marketing" },
        { label: "Amazon Marketing Agency", path: "/amazon-marketing" },
      ],
      col2Title: "Social Media",
      col2Items: [
        {
          label: "Social Media Marketing Services",
          path: "/social-media-marketing",
        },
        {
          label: "Online Reputation Management",
          path: "/online-reputation-management",
        },
      ],
    },
    INDUSTRIES: {
      col1Title: "Industries",
      col1Items: [
        { label: "Dental Marketing Company", path: "/dental-marketing" },
        {
          label: "Skin Care Digital Marketing Agency",
          path: "/skincare-marketing",
        },
        { label: "Hotel Digital Marketing Agency", path: "/hotel-marketing" },
        {
          label: "Locksmiths Digital Marketing Agency",
          path: "/lacksmith-seo",
        },
        { label: "Law Firm Digital Marketing Agency", path: "/lawfirm-seo" },
      ],
      col2Title: "Consumer Facing Sectors",
      col2Items: [
        {
          label: "Healthcare Digital Marketing Agency",
          path: "/healthcare-marketing",
        },
        {
          label: "Real Estate Digital Marketing Agency",
          path: "/real-estate-marketing",
        },
        { label: "Roofing Digital Marketing Agency", path: "/roofing-seo" },
        { label: "Pest Control SEO Agency", path: "/label-seo" },
        { label: "Restaurant SEO Agency", path: "/restaurant-seo" },
      ],
    },
    "DESIGN & DEVELOPMENT": {
      col1Title: "Website Design Services",
      col1Icon: (
        <svg
          className="w-4 h-4 text-[#E4B72A]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a15.998 15.998 0 01-3.42-3.42"
          />
        </svg>
      ),
      col1Items: [
        { label: "UI/UX Design Strategy", path: "/ui-ux" },
        { label: "Responsive Web Design", path: "/responsive-design" },
        { label: "Graphics Services", path: "/graphic-design" },
        { label: "Landing Page Design", path: "/landing-design" },
      ],
      col2Title: "Website Development Services",
      col2Icon: (
        <svg
          className="w-4 h-4 text-[#E4B72A]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
      ),
      col2Items: [
        { label: "CMS Web Development", path: "/cms-design" },
        { label: "E-commerce Engines", path: "/ecom-design" },
        { label: "Headless WordPress Ecosystems", path: "/wordpress-design" },
        { label: "Custom Full Stack Applications", path: "/web-design" },
        {
          label: "Web Speed & Core Web Vitals Optimization",
          path: "/website-optimisation",
        },
        {
          label: "Managed Maintenance & Security Support",
          path: "/wordpress-maintainance",
        },
        {
          label: "Cross-Platform Mobile Applications",
          path: "/responsive-design",
        },
      ],
    },
  };

  const aboutLinks = [
    { label: "OUR TEAM", path: "/our-team" },
    { label: "CAREERS", path: "/careers" },
    // { label: "TRAINING", path: "/training" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-[9999] bg-white border-b border-gray-100 font-sans antialiased select-none"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="w-full bg-[#10223d] text-white text-[12px] font-medium px-4 md:px-8 lg:px-12 h-[42px] hidden sm:flex justify-between items-center">
        <div className="flex items-center gap-6">
          <span>Mon - Fri: 9:00 AM - 6:00 PM EST</span>
          <span className="text-white/40">|</span>
          <span>Free Strategy Consultation Available</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="tel:+919877974161"
            className="hover:text-[#E4B72A] transition"
          >
            +91 98779 74161
          </a>

          <a
            href="mailto:anointmedia@gmail.com"
            className="hover:text-[#E4B72A] transition"
          >
            anointmedia@gmail.com
          </a>
        </div>
      </div>

      {/* 2. MAIN HEADER NAVBAR SHELF */}
      <div className="w-full bg-white h-[70px] lg:h-[90px] px-6 md:px-8 lg:px-12 flex justify-between items-center relative">
        {/* Brand Vector Logo Wrapper */}
        <div
          className="flex flex-col items-start cursor-pointer group max-w-[140px] sm:max-w-[180px] md:max-w-none"
          onClick={() => {
            navigate("/");
            setMobileMenuOpen(false);
          }}
        >
          <img
            src={logoimg}
            alt="Logo"
            className="h-10 lg:h-10 object-contain"
          />
        </div>


        {/* Desktop Anchor Navigation Link Tree */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9 text-[13.5px] font-bold text-slate-700 tracking-wide">
          <Link
            to="/about-us"
            className="hover:text-[#E4B72A] transition-colors duration-200"
          >
            About
          </Link>
          <div
            className="relative h-[90px] flex items-center cursor-pointer"
            onMouseEnter={() => setActiveMenu("services")}
          >

            <span
              className={`transition-colors duration-200 ${activeMenu === "services" ? "text-[#E4B72A]" : "hover:text-[#E4B72A]"}`}
            >
              SERVICES
            </span>
            <HiChevronDown
              className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeMenu === "services" ? "rotate-180 text-[#E4B72A]" : "text-slate-400"}`}
            />
          </div>




          <Link
            to="/blog"
            className="hover:text-[#E4B72A] transition-colors duration-200"
          >
            BLOG
          </Link>
          <Link
            to="/portfolio"
            className="hover:text-[#E4B72A] transition-colors duration-200"
          >
            PORTFOLIO
          </Link>
          <Link
            to="/testimonials"
            className="hover:text-[#E4B72A] transition-colors duration-200"
          >
            TESTIMONIALS
          </Link>
        </nav>

        {/* Desktop Action Target CTA */}
        <div className="hidden lg:block">
          <button
            onClick={handleConnectClick}
            className="bg-[#E4B72A] hover:bg-[#CD9D20] text-white font-bold text-[13.5px] px-6 py-3 rounded-full flex items-center gap-2 transition duration-200 shadow-xs hover:shadow-md tracking-wider border border-[#CD9D20]/20"
          >
            <span>
              <IoCall />
            </span>
            Book A Call
          </button>
        </div>

        {/* Mobile & Tablet Interactive Menu Controls Trigger */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={handleConnectClick}
            className="bg-[#E4B72A] text-white font-bold text-[12px] sm:text-[13px] px-4 py-2 rounded-full tracking-wider"
          >
            Consult
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-700 hover:text-[#E4B72A] transition-colors p-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <HiX className="w-7 h-7" />
            ) : (
              <HiMenuAlt3 className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* 3. DESKTOP MEGA MENU HUB LAYOUT */}
        <AnimatePresence>
          {activeMenu === "services" && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="hidden lg:flex absolute left-6 right-6 xl:left-12 xl:right-12 top-[90px] bg-[#f4f8fc] border border-slate-200/70 rounded-xl shadow-2xl p-6 gap-6 z-50 min-h-[360px]"
            >
              <div className="absolute top-[-9px] left-1/4 xl:left-[18%] transform -translate-x-1/2 w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-b-[9px] border-b-[#f4f8fc]"></div>

              {/* Mega Menu Left Tabs Pillar */}
              <div className="w-[28%] flex flex-col gap-2.5 pr-2 border-r border-slate-200/60 justify-center">
                {Object.keys(serviceContent).map((tabName) => {
                  const isCurrent = activeServiceTab === tabName;
                  return (
                    <button
                      key={tabName}
                      onMouseEnter={() => setActiveServiceTab(tabName)}
                      onClick={() => setActiveServiceTab(tabName)}
                      className={`w-full text-left font-extrabold text-[12px] tracking-wider px-5 py-3.5 rounded-lg transition-all duration-200 ${isCurrent
                        ? "bg-[#E4B72A] text-white shadow-sm font-black"
                        : "bg-white text-slate-600 hover:bg-white hover:text-[#E4B72A] shadow-2xs"
                        }`}
                    >
                      {tabName}
                    </button>
                  );
                })}
              </div>

              {/* Mega Menu Right Data Content Presentation Grid */}
              <div className="w-[72%] grid grid-cols-2 gap-8 pl-6 py-4">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 font-extrabold text-[14px] text-slate-900 mb-4 border-b border-slate-200/50 pb-2.5 tracking-wide">
                    {serviceContent[activeServiceTab].col1Icon || (
                      <span className="w-1.5 h-1.5 bg-[#E4B72A] rounded-full"></span>
                    )}
                    <h3>{serviceContent[activeServiceTab].col1Title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {serviceContent[activeServiceTab].col1Items.map((item) => (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          onClick={() => setActiveMenu(null)}
                          className="flex items-center gap-2 text-[13px] text-slate-600 font-semibold cursor-pointer hover:text-[#E4B72A] transition-colors duration-150"
                        >
                          <span className="w-1 h-1 bg-slate-400 rounded-full shrink-0"></span>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-2 font-extrabold text-[14px] text-slate-900 mb-4 border-b border-slate-200/50 pb-2.5 tracking-wide">
                    {serviceContent[activeServiceTab].col2Icon || (
                      <span className="w-1.5 h-1.5 bg-[#E4B72A] rounded-full"></span>
                    )}
                    <h3>{serviceContent[activeServiceTab].col2Title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {serviceContent[activeServiceTab].col2Items.map((item) => (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          onClick={() => setActiveMenu(null)}
                          className="flex items-center gap-2 text-[13px] text-slate-600 font-semibold cursor-pointer hover:text-[#E4B72A] transition-colors duration-150"
                        >
                          <span className="w-1 h-1 bg-slate-400 rounded-full shrink-0"></span>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 4. MOBILE / TABLET SLIDE-OUT PANEL */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="w-full bg-white border-t border-slate-100 lg:hidden overflow-hidden absolute left-0 right-0 top-[70px] shadow-2xl z-40"
          >

            <div className="px-6 py-8 flex flex-col space-y-5 max-h-[85vh] overflow-y-auto">
              <Link
                to="/about-us"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-black tracking-wide text-slate-800 uppercase border-b border-slate-50 pb-2"
              >
                About
              </Link>
              {/* ACCORDION NODE: MOBILE SERVICES */}
              <div className="flex flex-col border-b border-slate-50 pb-2">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex justify-between items-center text-left text-[15px] font-black tracking-wide text-slate-800 uppercase"
                >
                  <span>Services</span>
                  <HiChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-[#E4B72A]" : ""}`}
                  />
                </button>



                {mobileServicesOpen && (
                  <div className="mt-4 pl-2 flex flex-col space-y-6 border-l-2 border-[#E4B72A]/20">
                    {Object.keys(serviceContent).map((tabKey) => (
                      <div key={tabKey} className="space-y-3">
                        <h4 className="text-[11px] font-black tracking-widest text-[#E4B72A] uppercase bg-[#E4B72A]/5 px-2.5 py-1 rounded inline-block">
                          {tabKey}
                        </h4>


                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                          <div>

                            <h5 className="text-[13px] font-bold text-slate-900 mb-2">
                              {serviceContent[tabKey].col1Title}
                            </h5>
                            <ul className="space-y-2 pl-2">
                              {serviceContent[tabKey].col1Items.map(
                                (subItem) => (
                                  <li key={subItem.path}>
                                    <Link
                                      to={subItem.path}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="text-[12.5px] text-slate-600 font-medium hover:text-[#E4B72A] transition-colors block py-0.5"
                                    >
                                      • {subItem.label}
                                    </Link>
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>

                          <div>
                            <h5 className="text-[13px] font-bold text-slate-900 mb-2">
                              {serviceContent[tabKey].col2Title}
                            </h5>
                            <ul className="space-y-2 pl-2">
                              {serviceContent[tabKey].col2Items.map(
                                (subItem) => (
                                  <li key={subItem.path}>
                                    <Link
                                      to={subItem.path}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="text-[12.5px] text-slate-600 font-medium hover:text-[#E4B72A] transition-colors block py-0.5"
                                    >
                                      • {subItem.label}
                                    </Link>
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>


              {/* STATIC MOBILE LINK ANCHORS */}

              <Link
                to="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-black tracking-wide text-slate-800 uppercase border-b border-slate-50 pb-2"
              >
                BLOG
              </Link>

              <Link
                to="/portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-black tracking-wide text-slate-800 uppercase border-b border-slate-50 pb-2"
              >
                PORTFOLIO
              </Link>
              <Link
                to="/testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-black tracking-wide text-slate-800 uppercase border-b border-slate-50 pb-2"
              >
                TESTIMONIALS
              </Link>

              {/* MOBILE CONTACT FOOT-SHELF */}
              <div className="pt-6 mt-4 border-t border-slate-100 flex flex-col space-y-4">
                {/* <div className="flex items-center gap-3">
                  <FaWhatsapp className="w-5 h-5 text-green-500" />
                  <a href="https://wa.me/917837777045" target="_blank" rel="noreferrer" className="text-[13.5px] font-bold text-slate-700">
                    +91- 78377 77045
                  </a>
                </div> */}
                <div className="flex items-center gap-3">
                  <span className="text-[20px]">🇮🇳</span>
                  <a
                    href="tel:+919877974161"
                    className="text-[13.5px] font-bold text-slate-700"
                  >
                    +91 98779 74161
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
