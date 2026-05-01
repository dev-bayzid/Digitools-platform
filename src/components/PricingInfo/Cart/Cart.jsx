import { ShoppingCart } from "lucide-react";
import { toast } from "react-toastify";

const Cart = ({ selectedCard, setSelectedCard }) => {
  console.log(selectedCard);

  const handleRemoveBtn = (card) => {
    console.log(card);
    const filteredCards = selectedCard.filter(
      (cards) => cards.name !== card.name,
    );
    // console.log(filteredCards);
    toast.info(`${card.name} is removed`);
    setSelectedCard(filteredCards);
  };

  const handleCheckOutBtn = () => {
    toast.success(" Order placed successfully! Thank you for your purchase.");
  };

  return (
    <div className="card container mx-auto mb-10 w-5xl bg-base-200 shadow-sm mt-6">
      <div className="card-body">
        <h2 className="card-title">Your Cart</h2>

        <div className="hidden">
          <div className="flex justify-center items-center">
            <ShoppingCart className="w-80 h-40 text-gray-400"></ShoppingCart>
          </div>
          <div>
            <p className="text-center text-gray-400 font-semibold">
              Your Cart is Empty
            </p>
          </div>
        </div>
        {selectedCard.length === 0 ? (
          <div>
            <div className="flex justify-center items-center">
              <ShoppingCart className="w-80 h-40 text-gray-400" />
            </div>
            <p className="text-center text-gray-400 font-semibold">
              Your Cart is Empty
            </p>
          </div>
        ) : (
          selectedCard.map((card) => {
            return (
              <div key={card.id}>
                <div className="card w-full bg-base-100 card-sm shadow-sm container mx-auto">
                  <div className="card-body">
                    <div className="flex items-center gap-4">
                      <div className="w-15 h-15 rounded-full flex justify-center items-center bg-base-200">
                        <img src={card.img} alt="" />
                      </div>

                      <div className="flex justify-between items-center w-full">
                        <div>
                          <h1 className="text-xl font-semibold">{card.name}</h1>
                          <p className="text-gray-400">{card.price}</p>
                        </div>

                        <p
                          onClick={() => handleRemoveBtn(card)}
                          className="font-bold text-right text-red-500 hover:cursor-pointer"
                        >
                          Remove
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
        {selectedCard.length === 0 ? (
          ""
        ) : (
          <div>
            <div className="my-5 flex justify-between items-center ">
              <h2 className="text-gray-400">Total:</h2>
              <h1 className="text-xl font-semibold">$200</h1>
            </div>
            <div className="card-actions justify-center">
              <button
                onClick={handleCheckOutBtn}
                className="btn btn-primary bg-linear-to-l from-[#9514FA] to-[#4F39F6] rounded-3xl w-full"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
