import { useState } from "react";
import "./App.css";
import BannerCart from "./components/BannerCart/BannerCart";
import BannerInfo from "./components/BannerInfo/BannerInfo";
import Footer from "./components/Footer/Footer";

import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import PricingTools from "./components/PricingInfo/PricingTools/PricingTools";
import SubscriptionPrice from "./components/PricingInfo/Subscription/SubscriptionPrice";

function App() {

  const [carts, setCarts] = useState([])
  return (
    <>
      <Navbar carts={carts}></Navbar>
      <HeroSection></HeroSection>
      <BannerInfo></BannerInfo>
      <PricingTools setCarts={setCarts} carts={carts}></PricingTools>
      <BannerCart></BannerCart>
      <SubscriptionPrice></SubscriptionPrice>
      <Footer></Footer>
    </>
  );
}

export default App;
