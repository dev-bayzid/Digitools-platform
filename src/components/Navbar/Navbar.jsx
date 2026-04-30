const Navbar = () => {
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />{" "}
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center gap-10 pr-30">
          <button className="px-2">Login</button>
          <button className="btn btn-primary rounded-3xl">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
