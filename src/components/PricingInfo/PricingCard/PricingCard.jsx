import { use } from "react";
import Card from "./Card";

const PricingCard = ({
  pricingPromise,
  setCarts,
  carts,
  selectedCard,
  setSelectedCard,
}) => {
  const pricing = use(pricingPromise);
  // console.log(pricing);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto mt-6 space-y-4">
      {pricing.map((price, index) => (
        <Card
          key={index}
          setCarts={setCarts}
          carts={carts}
          price={price}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        ></Card>
      ))}
    </div>
  );
};

export default PricingCard;
