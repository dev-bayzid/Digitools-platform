import { Play } from "lucide-react";
import bannerImg from "../../assets/banner.png";

const HeroSection = () => {
  return (
    <div className=" lg:flex justify-around items-center container mx-auto mt-20">
      <div className="text-center md:text-left  space-y-4">
        <h3 className="btn bg-[#B38DFC] rounded-3xl bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent ">
          New: AI-Powered Tools Available
        </h3>
        <h1 className="text-5xl md:text-6xl font-bold ">
          Supercharge Your <br /> Digital Workflow
        </h1>
        <p className="text-gray-400">
          Access premium AI tools, design assets, templates, and productivity{" "}
          <br />
          software—all in one place. Start creating faster today. <br /> Explore
          Products
        </p>
        <div className="flex justify-center md:justify-start items-center gap-10 md:mb-0 mb-5">
          <button className="btn btn-soft btn-primary bg-linear-to-l from-[#9514FA] to-[#4F39F6] rounded-3xl text-white transform transition duration-300 hover:-translate-y-2">
            Explore Products
          </button>
          <button className="btn btn-primary btn-outline  border-[#8533FA]  bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent rounded-3xl transform transition duration-300 hover:-translate-y-2">
            <Play className="text-[#8533FA]"></Play>
            Watch Demo
          </button>
        </div>
      </div>
      <div className=" flex justify-center">
        <img className="w-full max-w-md lg:max-w-lg" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
