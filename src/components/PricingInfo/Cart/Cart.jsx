import { ShoppingCart } from "lucide-react";
// import cart from "../../../assets/products/shopping-cart.png";

const Cart = () => {
  return (
    <div className="card container mx-auto mb-10 lg:card-side bg-base-200 shadow-sm mt-6">
      <div className="card-body">
        <h2 className="card-title">Your Cart</h2>
        <div className="flex justify-center items-center">
          <ShoppingCart className="w-80 h-40 text-gray-400"></ShoppingCart>
        </div>
        <div>
          <p className="text-center text-gray-400 font-semibold">Your Cart is Empty</p>
        </div>
        <div className="card-actions justify-center hidden">
          <button className="btn btn-primary bg-linear-to-l from-[#9514FA] to-[#4F39F6] rounded-3xl w-full">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
