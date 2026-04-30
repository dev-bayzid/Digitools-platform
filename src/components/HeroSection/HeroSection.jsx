import { Play } from "lucide-react";
import bannerImg from "../../assets/banner.png";

const HeroSection = () => {
  return (
    <div className=" lg:flex justify-around items-center container mx-auto mt-20">
      <div className="hero-left space-y-4">
        <h3 className="btn bg-[#B38DFC] rounded-3xl bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent ">
          New: AI-Powered Tools Available
        </h3>
        <h1 className="text-6xl font-bold ">
          Supercharge Your <br /> Digital Workflow
        </h1>
        <p className="text-gray-400">
          Access premium AI tools, design assets, templates, and productivity{" "}
          <br />
          software—all in one place. Start creating faster today. <br /> Explore
          Products
        </p>
        <div className="flex justify-start items-center gap-10">
          <button className="btn btn-primary bg-linear-to-l from-[#9514FA] to-[#4F39F6] rounded-3xl">
            Explore Products
          </button>
          <button className="btn border-[#8533FA]  bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent rounded-3xl">
            <span className="text-[#8533FA]">
              <Play></Play>
            </span>
            Watch Demo
          </button>
        </div>
      </div>
      <div className="hero-right">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
