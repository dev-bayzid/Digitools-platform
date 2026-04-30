const Card = ({ price }) => {
  console.log(price);
  const { name, tag, description, features, img, period } = price;
  return (
    <div className="card w-96 bg-base-100 shadow-sm">
      <div className="card-body">
        <div className="flex justify-between">
          <img src={img} alt="" />
          <span className={``}>{tag}</span>
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
          <button className="btn bg-linear-to-l from-[#9514FA] to-[#4F39F6] rounded-3xl text-white w-full">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
