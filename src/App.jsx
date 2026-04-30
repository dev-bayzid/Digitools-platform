import "./App.css";
import BannerInfo from "./components/BannerInfo/BannerInfo";

import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <BannerInfo></BannerInfo>
    </>
  );
}

export default App;
