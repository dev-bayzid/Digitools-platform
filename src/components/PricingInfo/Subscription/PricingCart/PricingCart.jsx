import { use } from "react";
import Cart from "./Cart";


const PricingCart = ({pricingCartData}) => {
    const cartData = use(pricingCartData);
    console.log(cartData);
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 container mx-auto mt-10">
            {
                cartData.map((data, index) => <Cart key={index} data={data}></Cart>)
            }
        </div>
    );
};

export default PricingCart;