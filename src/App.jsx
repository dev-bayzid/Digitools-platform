import "./App.css";
import BannerInfo from "./components/BannerInfo/BannerInfo";

import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import PricingTools from "./components/PricingInfo/PricingTools/PricingTools";


function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <BannerInfo></BannerInfo>
      <PricingTools></PricingTools>
      
    </>
  );
}

export default App;
