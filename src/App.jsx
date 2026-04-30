import "./App.css";
import BannerCart from "./components/BannerCart/BannerCart";
import BannerInfo from "./components/BannerInfo/BannerInfo";

import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import PricingTools from "./components/PricingInfo/PricingTools/PricingTools";
import SubscriptionPrice from "./components/PricingInfo/Subscription/SubscriptionPrice";


function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <BannerInfo></BannerInfo>
      <PricingTools></PricingTools>
      <BannerCart></BannerCart>
      <SubscriptionPrice></SubscriptionPrice>
      
    </>
  );
}

export default App;
