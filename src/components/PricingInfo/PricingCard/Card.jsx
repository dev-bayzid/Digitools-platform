import { useState } from "react";
import { toast } from "react-toastify";

const Card = ({ price, setCarts, carts, setSelectedCard, selectedCard }) => {
  console.log(price);
  const { name, tag, description, features, img, period, tagType } = price;

  const getTagType = (type) => {
    if (type === "warning") {
      return "bg-[#FEF3C6] border-[#FEF3C6] text-[#BB4D00]";
    } else if (type === "primary") {
      return "bg-[#E1E7FF] border-[#E1E7FF] text-[#7B22F9]";
    } else {
      return "bg-[#DBFCE7] border-[#DBFCE7] text-[#0A883E]";
    }
  };

  const [isSelected, setIsSelected] = useState(false);
  console.log(price.id);
  console.log(carts);

  const handleBuyNowBtn = (price) => {
    const isExist = carts.find((cart) => cart.id === price.id);
    if (isExist) {
      toast.error("Item is already in Cart");
      return;
    }

    toast.success(`${name} is added to cart`);
    setIsSelected(true);

    setSelectedCard([...selectedCard, price]);
    setCarts([...carts, price]);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-sm">
      <div className="card-body">
        <div className="flex justify-between">
          <img src={img} alt="" />
          <div
            className={`rounded-3xl px-2 flex justify-center items-center ${getTagType(tagType)}`}
          >
            {tag}
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-bold">{name}</h2>
          <p>{description}</p>
          <p className="text-xl font-bold">
            {price.price}{" "}
            <span className="text-gray-500 text-[15px]">/{period}</span>
          </p>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {features.map((feature) => (
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <button
            onClick={() => handleBuyNowBtn(price)}
            className={`btn rounded-3xl text-white w-full ${isSelected ? "bg-green-500" : "bg-linear-to-l from-[#9514FA] to-[#4F39F6]"}`}
          >
            {isSelected ? "Added to Cart" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
