import { useState } from "react";
import PricingCard from "../PricingCard/PricingCard";
import Cart from "../Cart/Cart";

const pricingPromise = fetch("/public/toolsData.json").then((res) =>
  res.json(),
);

const PricingTools = ({setCarts, carts}) => {
  const [selectedType, setSelectedType] = useState("products");
  const [selectedCard, setSelectedCard] = useState([]);

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
          <button
            onClick={() => setSelectedType("products")}
            className={`rounded-full mr-4 py-2 flex-1 ${selectedType === "products" ? "btn btn-primary bg-linear-to-l from-[#9514FA] to-[#4F39F6]" : "ml-2"} `}
          >
            Products
          </button>
          <button
            onClick={() => setSelectedType("cart")}
            className={`rounded-full py-2 flex-1 ${selectedType === "cart" ? "btn btn-primary bg-linear-to-l from-[#9514FA] to-[#4F39F6]" : " "} `}
          >
            Cart({selectedCard.length})
          </button>
        </div>
      </div>

      {selectedType === "products" ? (
        <PricingCard
          key={pricingPromise.id}
          pricingPromise={pricingPromise}
          setCarts={setCarts}
          carts={carts}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        ></PricingCard>
      ) : (
        <Cart selectedCard={selectedCard} setSelectedCard={setSelectedCard}></Cart>
      )}
    </div>
  );
};

export default PricingTools;
