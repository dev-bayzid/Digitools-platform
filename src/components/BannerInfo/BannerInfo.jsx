const BannerInfo = () => {
  return (
    <div className="min-h-[30vh] w-full bg-linear-to-l from-[#9514FA] to-[#4F39F6] flex flex-col md:flex-row justify-evenly items-center mt-15 text-center gap-5">
      <div className="">
        <p className="text-6xl font-bold text-white">50K+</p>
        <p className="text-gray-200 mt-4 px-0 md:px-10">Active Users</p>
      </div>
      <div className="hidden md:block w-px h-20 bg-gray-400"></div>
      <div>
        <p className="text-6xl font-bold text-white">200+</p>
        <p className="text-gray-200 mt-4 px-0 md:px-10">Premium Tools</p>
      </div>
      <div className="hidden md:block w-px h-20 bg-gray-400"></div>
      <div>
        <p className="text-6xl font-bold text-white">4.9</p>
        <p className="text-gray-200 mt-4 px-0 md:px-10">Rating</p>
      </div>
    </div>
  );
};

export default BannerInfo;
