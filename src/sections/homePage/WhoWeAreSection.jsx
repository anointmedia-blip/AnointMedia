import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const WhoWeAreSection = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1.0] },
    },
  };

  const stats = [
    { value: "14+", label: "Years Experience" },
    { value: "200+", label: "Specialists" },
    { value: "8+", label: "Global Regions" },
  ];

  return (
    // REMOVED 'select-none' FROM THE CLASS LIST BELOW
    <section id="about" className="w-full bg-slate-50/50 py-24 px-6 md:px-12 lg:px-24 font-sans antialiased overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
      >
        {/* LEFT COLUMN */}
        <div className="lg:col-span-5 flex flex-col justify-center lg:sticky lg:top-24">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-[4px] bg-[#00B4AF] mb-6 rounded-full"
          />

          <motion.h2
            variants={itemVariants}
            className="text-slate-900 text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] flex flex-col uppercase"
          >
            <span>Who</span>
            <span className="text-[#00B4AF] pl-6 sm:pl-8">We</span>
            <span>Are.</span>
          </motion.h2>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-7 flex flex-col items-start justify-center space-y-8 lg:mt-2">
          <motion.div variants={itemVariants} className="space-y-5">
            <p className="text-lg sm:text-xl text-slate-800 font-semibold tracking-wide leading-relaxed">
              With 14+ years in the industry and a team of 200+ specialists, we
              know what it takes to grow a business online.
            </p>

            <p className="text-base text-slate-600 font-normal leading-relaxed">
              Our people work every day across SEO, paid advertising, social
              media, and web design for clients running clinics, online stores,
              law firms, hotels, and real estate businesses. We use AI and live
              data to build strategies around what your customers are actually
              searching for, not just what looks good on paper. Every plan is
              built around specific goals for clients trusting us across India,
              the US, UK, and Canada.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 sm:gap-8 w-full border-t border-b border-slate-200 py-6 my-2"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 mt-1 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.button
              onClick={handleConnectClick}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#00B4AF] hover:bg-[#de910b] text-white font-bold text-xs tracking-widest px-8 py-4 rounded-lg shadow-sm hover:shadow-md uppercase transition-all duration-200"
            >
              Know More About Us
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhoWeAreSection;