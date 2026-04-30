import { ShoppingCart } from "lucide-react";
// import cart from "../../../assets/products/shopping-cart.png";

const Cart = ({ selectedCard, setSelectedCard }) => {
  console.log(selectedCard);

  const handleRemoveBtn = (card) => {
    console.log(card);
    const filteredCards = selectedCard.filter(
      (cards) => cards.name !== card.name
    );
    console.log(filteredCards);
    setSelectedCard(filteredCards);
  };

  return (
    <div className="card container mx-auto mb-10 lg:card-side bg-base-200 shadow-sm mt-6">
      <div className="card-body">
        <h2 className="card-title">Your Cart</h2>
        <div className="hidden">
          <div className="flex justify-center items-center hidden">
            <ShoppingCart className="w-80 h-40 text-gray-400"></ShoppingCart>
          </div>
          <div>
            <p className="text-center text-gray-400 font-semibold">
              Your Cart is Empty
            </p>
          </div>
        </div>
        {selectedCard.map((card, ind) => {
          return (
            <div key={ind}>
              <div>
                <div className="card w-full bg-base-100 card-sm shadow-sm container mx-auto">
                  <div className="card-body">
                    {/* main container */}
                    <div className="flex items-center gap-4">
                      <div className="w-15 h-15 rounded-full flex justify-center items-center bg-base-200">
                        <img src={card.img} alt="" />
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <h1 className="text-xl font-semibold">{card.name}</h1>
                          <p className="text-gray-400">{card.price}</p>
                        </div>
                      </div>

                      <p
                        onClick={() => {
                          handleRemoveBtn(card);
                        }}
                        className="text-right font-bold text-red-500 hover:cursor-pointer"
                      >
                        Remove
                      </p>
                    </div>
                    <div className="justify-end card-actions"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="card-actions justify-center">
          <button className="btn btn-primary bg-linear-to-l from-[#9514FA] to-[#4F39F6] rounded-3xl w-full">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
