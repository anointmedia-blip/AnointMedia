import React from "react";
import { motion } from "framer-motion";
import tabla from "../../assets/partnerships/tabla.svg"
import haldirams from "../../assets/partnerships/haldirams.webp"
import nike from "../../assets/partnerships/nike.webp"
import lube from "../../assets/partnerships/lube.png"
import americanStandards from "../../assets/partnerships/american-standards.webp"
import jaquar from "../../assets/partnerships/jaquar.jpg"
import somani from "../../assets/partnerships/somani.png"
import kajaria from "../../assets/partnerships/kajaria.svg"
import hettich from "../../assets/partnerships/hettich.webp"
import haefele from "../../assets/partnerships/haefele.png"
import grohe from "../../assets/partnerships/grohe.webp"
import hansGrohe from "../../assets/partnerships/hansgrohe.svg"
import voltas from "../../assets/partnerships/voltas.webp"
import daikin from "../../assets/partnerships/daikin.webp"
import lgLogo from "../../assets/partnerships/lg.webp"
import kochler from "../../assets/partnerships/kochler.webp"
import lapinoz from "../../assets/partnerships/lapinoz.png"
import pizaGalleria from "../../assets/partnerships/pizza-galeria.webp"
import chaichuriindia from "../../assets/partnerships/chaichuriindia.webp"
import triveni from "../../assets/partnerships/triveni.png"
import thehomedipot from "../../assets/partnerships/thehomedipot.webp"
import handa from "../../assets/partnerships/logoHanda.png"
import bobaNation from "../../assets/partnerships/Boba-nation.png"
import airbnb from "../../assets/partnerships/airbnb.webp"
import clarins from "../../assets/partnerships/clarins.svg"
import blum from "../../assets/partnerships/blum.svg"
import uhaul from "../../assets/partnerships/uhaul.webp"
import packRat from "../../assets/partnerships/packrat.webp"

const BrandsTrust = () => {
  const clientLogos = [
    { name: "Table", img: tabla },
    { name: "haldirams", img: haldirams },
    { name: "nike", img: nike },
    { name: "lube", img: lube },
    { name: "american standards", img: americanStandards },
    { name: "jaquar", img: jaquar },
    { name: "kajaria", img: kajaria },
    { name: "hettich", img: hettich },
    { name: "haefele", img: haefele },
    { name: "grohe", img: grohe },
    { name: "hansgrohe", img: hansGrohe },
    { name: "voltas", img: voltas },
    { name: "daikin", img: daikin },
    { name: "lglogo", img: lgLogo },
    { name: "kochler", img: kochler },
    { name: "pizaGalleria", img: pizaGalleria },
    { name: "chaichuri", img: chaichuriindia },
    { name: "thehomedipot", img: thehomedipot },
    { name: "handa", img: handa },
    { name: "bobaNation", img: bobaNation },
    { name: "airbnb", img: airbnb },
    { name: "clarins", img: clarins },
    { name: "blum", img: blum },
    { name: "uhaul", img: uhaul },
    { name: "packRat", img: packRat },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-28 px-6 md:px-12 lg:px-24 font-sans antialiased text-[#0f172a] overflow-hidden relative">
      <div className="max-w-[1320px] mx-auto relative z-10">
        {/* CENTERED EDITORIAL HEADER */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0f172a]">
            The Brands That{" "}
            <span className="text-[#E4B72A]">Shaped Our Standards</span>
          </h2>
          <p className="mt-4 text-slate-500 text-[14px] md:text-[15px] font-medium leading-relaxed max-w-xl mx-auto">
            Built on lessons, insights, and experience gained from working
            across a wide range of industries and business environments.
          </p>
        </div>

        {/* PIXEL-PERFECT BORDERED LOGO MATRIX */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(15,23,42,0.02)]">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
              className="flex items-center justify-center p-6 bg-white border border-slate-100 relative group cursor-default"
            >
              {/* Logo Presentation Frame */}
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                src={logo.img}
                alt={`${logo.name} logo`}
                className="max-w-full max-h-[55px] object-contain relative z-10"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsTrust;
