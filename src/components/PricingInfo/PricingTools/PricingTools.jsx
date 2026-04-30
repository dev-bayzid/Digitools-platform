import PricingCard from "../PricingCard/PricingCard";

const pricingPromise = fetch("/public/toolsData.json").then((res) =>
  res.json(),
);

const PricingTools = () => {
  return (
    <div>
      <div className="text-center mt-30 ">
        <div className="space-y-4 mb-5">
          <h1 className="text-6xl font-bold">Premium Digital Tools</h1>
          <p className="text-gray-400 font-light">
            Choose from our curated collection of premium digital products
            designed <br /> to boost your productivity and creativity.
          </p>
        </div>

        <div className="w-[190px] container mx-auto rounded-full border border-gray-200 p-1 flex items-center bg-white shadow-sm">
          <button className="btn btn-primary rounded-full bg-linear-to-l from-[#9514FA] to-[#4F39F6] mr-4 py-2 flex-1">
            Products
          </button>
          <button className="flex-1 py-2  rounded-full">
            Cart (2)
          </button>
        </div>
      </div>

      <PricingCard key={pricingPromise.id} pricingPromise={pricingPromise}></PricingCard>
    </div>
  );
};

export default PricingTools;
