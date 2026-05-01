import user from "../../assets/user.png";
import product from "../../assets/package.png";
import rocket from "../../assets/rocket.png";

const BannerCart = () => {
  return (
    <div className="text-center py-30  mt-15 bg-base-300">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold">Get Started in 3 Steps</h1>
        <p className="text-gray-400 font-light">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      {/* banner cart */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto mt-10">
        <div className=" justify-between items-center ">
          <div className="card w-full bg-base-100 card-xl shadow-sm">
            <div className="relative card-body">
              <div className="absolute top-5 right-10 rounded-full text-white w-10 h-10 bg-linear-to-l from-[#9514FA] to-[#4F39F6] flex justify-center items-center">
                <p className="">01</p>
              </div>
              <div className="rounded-full bg-purple-200 h-40 w-40 flex justify-center items-center mx-auto">
                <img className="w-10 h-10" src={user} alt="" />
              </div>
              <h2 className="text-2xl font-bold text-center">Create Account</h2>
              <p>
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
        </div>
        <div className=" justify-between items-center ">
          <div className="card w-full bg-base-100 card-xl shadow-sm">
            <div className="relative card-body">
              <div className="absolute top-5 right-10 rounded-full text-white w-10 h-10 bg-linear-to-l from-[#9514FA] to-[#4F39F6] flex justify-center items-center">
                <p className="">02</p>
              </div>
              <div className="rounded-full bg-purple-200 h-40 w-40 flex justify-center items-center mx-auto">
                <img className="w-10 h-10" src={product} alt="" />
              </div>
              <h2 className="text-2xl font-bold text-center">
                Choose Products
              </h2>
              <p>
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>
        </div>
        <div className="justify-between items-center ">
          <div className="card w-full bg-base-100 card-xl shadow-sm">
            <div className="relative card-body">
              <div className="absolute top-5 right-10 rounded-full text-white w-10 h-10 bg-linear-to-l from-[#9514FA] to-[#4F39F6] flex justify-center items-center">
                <p className="">03</p>
              </div>
              <div className="rounded-full bg-purple-200 h-40 w-40 flex justify-center items-center mx-auto">
                <img className="w-10 h-10" src={rocket} alt="" />
              </div>
              <h2 className="text-2xl font-bold text-center">Start Creating</h2>
              <p>Download and start using your premium tools immediately.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCart;
