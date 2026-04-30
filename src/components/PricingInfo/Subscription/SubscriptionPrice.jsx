import PricingCart from "./PricingCart/PricingCart";

const pricingCartData = fetch("/pricing.json").then((res) => res.json());

const SubscriptionPrice = () => {
  return (
    <div>
      <div className="text-center pt-30 space-y-4">
        <h1 className="text-6xl font-bold">Simple, Transparent Pricing</h1>
        <p className="text-gray-500 font-light">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      {/* Pricing section */}
      <div>
        <PricingCart
          key={pricingCartData.id}
          pricingCartData={pricingCartData}
        ></PricingCart>
      </div>
    </div>
  );
};

export default SubscriptionPrice;
