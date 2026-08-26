import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import OurTeam from "./pages/about/OurTeam";
import Careers from "./pages/about/Careers";
import Training from "./pages/about/Training";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import UIUX from "./pages/services/UIUX";
import ResponsiveDesign from "./pages/services/ResponsiveDesign";
import GraphicDesign from "./pages/services/GraphicDesign";
import LandingDesign from "./pages/services/LandingDesign";
import CmsDesign from "./pages/services/CmsDesign";
import EcomDesign from "./pages/services/EcomDesign";
import WordpressDesign from "./pages/services/WordpressDesign";
import WebDesign from "./pages/services/WebDesign";
import Website from "./pages/services/Website";
import WordPressMaintainance from "./pages/services/WordPressMaintainance";
import Dental from "./pages/services/Dental";
import Skincare from "./pages/services/Skincare";
import SkinClinicGrowth from "./pages/services/SkinClinicGrowth";
import HotelMarketing from "./pages/services/HotelMarketing";
import HealthcareMarketing from "./pages/services/HealthcareMarketing";
import RealEstateMarketing from "./pages/services/RealEstateMarketing";
import RestaurantSeo from "./pages/services/RestaurantSeo";
import GoogleAds from "./pages/services/GoogleAds";
import SocialMediaAds from "./pages/services/SocialMediaAds";
import YoutubeMarketing from "./pages/services/YoutubeMarketing";
import LinkedinMarketing from "./pages/services/LinkedinMarketing";
import AmazonMarketing from "./pages/services/AmazonMarketing";
import AffiliateMarketing from "./pages/services/AffiliateMarketing";
import ContentMarketing from "./pages/services/ContentMarketing";
import SocialMedia from "./pages/services/SocialMedia";
import OnlineReputation from "./pages/services/OnlineReputation";
import LabelSeo from "./pages/services/LabelSeo";
import WhiteLabelSeo from "./pages/services/WhiteLabelSeo";
import EcommerceSeo from "./pages/services/EcommerceSeo";
import DentalSeo from "./pages/services/DentalSeo";
import FashionSeo from "./pages/services/FashionSeo";
import LacksmithSeo from "./pages/services/LacksmithSeo";
import LawFirmSeo from "./pages/services/LawFirmSeo";
import RoofingSeo from "./pages/services/RoofingSeo";
import RealestateSeo from "./pages/services/RealEstateSeo";
import BlockchainSeo from "./pages/services/BlockchainSeo";
import ContentSeo from "./pages/services/ContentSeo";
import AffiliateMarketingSeo from "./pages/services/AffiliateMarketingSeo";
import { ToastContainer } from "react-toastify";
import AboutUs from "./pages/AboutUs"

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/training" element={<Training />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/ui-ux" element={<UIUX />} />
          <Route path="/responsive-design" element={<ResponsiveDesign />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/landing-design" element={<LandingDesign />} />
          <Route path="/wordpress-design" element={<WordpressDesign />} />
          <Route path="/cms-design" element={<CmsDesign />} />
          <Route path="/ecom-design" element={<EcomDesign />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/website-optimisation" element={<Website />} />
          <Route
            path="/wordpress-maintainance"
            element={<WordPressMaintainance />}
          />
          <Route path="/dental-marketing" element={<Dental />} />
          <Route path="/skincare-marketing" element={<Skincare />} />
          <Route path="/skin-clinic-growth" element={<SkinClinicGrowth />} />
          <Route path="/hotel-marketing" element={<HotelMarketing />} />
          <Route
            path="/healthcare-marketing"
            element={<HealthcareMarketing />}
          />
          <Route
            path="/real-estate-marketing"
            element={<RealEstateMarketing />}
          />
          <Route path="/restaurant-seo" element={<RestaurantSeo />} />
          <Route path="/google-ads" element={<GoogleAds />} />
          <Route path="/social-media-ads" element={<SocialMediaAds />} />
          <Route path="/youtube-marketing" element={<YoutubeMarketing />} />
          <Route path="/linkedin-marketing" element={<LinkedinMarketing />} />
          <Route path="/amazon-marketing" element={<AmazonMarketing />} />
          <Route path="/affiliate-marketing" element={<AffiliateMarketing />} />
          <Route path="/content-marketing" element={<ContentMarketing />} />
          <Route path="/social-media-marketing" element={<SocialMedia />} />
          <Route
            path="/online-reputation-management"
            element={<OnlineReputation />}
          />
          <Route path="/label-seo" element={<LabelSeo />} />
          <Route path="/white-label-seo" element={<WhiteLabelSeo />} />
          <Route path="/ecommerce-seo" element={<EcommerceSeo />} />
          <Route path="/dental-seo" element={<DentalSeo />} />
          <Route path="/fashion-seo" element={<FashionSeo />} />
          <Route path="/lacksmith-seo" element={<LacksmithSeo />} />
          <Route path="/lawfirm-seo" element={<LawFirmSeo />} />
          <Route path="/roofing-seo" element={<RoofingSeo />} />
          <Route path="/realestate-seo" element={<RealestateSeo />} />
          <Route path="/blockchain-seo" element={<BlockchainSeo />} />
          <Route path="/content-seo" element={<ContentSeo />} />
          <Route path="/affiliate-seo" element={<AffiliateMarketingSeo />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
};

export default App;
