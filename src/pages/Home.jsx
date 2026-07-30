import BrandsTrust from "../sections/homePage/BrandsTrust";
import Contact from "../sections/homePage/Contact";
import FAQsection from "../sections/homePage/FAQsection";
import HomeHeroSection from "../sections/homePage/HomeHeroSection";
import JourneyProcess from "../sections/homePage/JourneySection";
import OurPartnerShipSection from "../sections/homePage/OurPartnerShipSection";
import ProcessSection from "../sections/homePage/ProcessSection";
import ResultsSection from "../sections/homePage/ResultsSection";
import ServiceSection from "../sections/homePage/ServiceSection";
import StoriesSection from "../sections/homePage/StoriesSection";
import Testimonials from "../sections/homePage/Testimonials";
import WhoWeAreSection from "../sections/homePage/WhoWeAreSection";
import { useEffect } from "react";

import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",

            block: "start",
          });
        }
      }, 300);
    }
  }, [location]);
  return (
    <>
      <HomeHeroSection />
      <WhoWeAreSection />
      {/* <OurPartnerShipSection /> */}
      <ResultsSection />
      <ServiceSection />
      <JourneyProcess />
      <ProcessSection />
      <StoriesSection />
      <BrandsTrust />
      <Testimonials />
      <Contact />
      <FAQsection />
    </>
  );
};

export default Home;
