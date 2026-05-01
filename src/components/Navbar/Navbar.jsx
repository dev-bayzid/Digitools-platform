import { Menu, ShoppingCart } from "lucide-react";

const Navbar = ({ carts }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-10">
      {/* menu button */}

      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <Menu></Menu>
        </div>
        <ul
          tabIndex="-1"
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </div>

      <div className="flex-1">
        <a className="bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent text-3xl font-bold">
          DigiTools
        </a>
      </div>

      <div className="hidden md:flex">
        <ul className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10">
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-5 md:gap-10">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="flex items-center">
            <div className="indicator ml-6">
              <ShoppingCart></ShoppingCart>
              <span className="badge badge-sm indicator-item">
                {carts.length}
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center gap-10">
          <button className="hidden md:block px-2">Login</button>
          <button className="btn btn btn-primary bg-linear-to-l from-[#9514FA] to-[#4F39F6] rounded-3xl transform transition duration-300 hover:translate-y-1">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
