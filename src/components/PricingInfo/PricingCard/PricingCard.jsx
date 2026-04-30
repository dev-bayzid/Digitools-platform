import { use } from "react";
import Card from "./Card";

const PricingCard = ({pricingPromise}) => {
    const pricing = use(pricingPromise);
    // console.log(pricing);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto mt-6">
        {
            pricing.map((price, index) => <Card key={index} price={price}></Card>)
        }
    </div>
  );
};

export default PricingCard;
