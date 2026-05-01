import { ShoppingCart } from "lucide-react";

const Navbar = ({carts}) => {
  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="flex container mx-auto pl-30">
        <a className="bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent text-3xl font-bold">
          DigiTools
        </a>
      </div>

    <div className="flex">
        <ul className="flex justify-between items-center gap-10">
            <li><a href="#products">Products</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </div>

      <div className="flex justify-between items-center ml-30">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <ShoppingCart></ShoppingCart>
              <span className="badge badge-sm indicator-item">{carts.length}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center gap-10 pr-30">
          <button className="px-2">Login</button>
          <button className="btn btn btn-primary bg-linear-to-l from-[#9514FA] to-[#4F39F6] rounded-3xl transform transition duration-300 hover:translate-y-1">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
