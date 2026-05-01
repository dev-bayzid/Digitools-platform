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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  mt-6">
      {pricing.map((priceCard) => (
        <Card
          key={priceCard.id}
          setCarts={setCarts}
          carts={carts}
          priceCard={priceCard}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        ></Card>
      ))}
    </div>
  );
};

export default PricingCard;
