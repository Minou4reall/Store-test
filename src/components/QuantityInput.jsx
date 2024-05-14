import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useState } from "react";
function QuantityInput() {
  let [quantity, setQuantity] = useState(1);
  const quantityUp = () => {
    setQuantity((prevQuantity) =>
      prevQuantity < 10 ? prevQuantity + 1 : prevQuantity
    );
  };

  const quantityDown = () => {
    setQuantity((prevQuantity) =>
      prevQuantity > 1 ? prevQuantity - 1 : prevQuantity
    );
  };

  return (
    <>
      <button
        type="button"
        onClick={quantityDown}
        className="h-10 w-10 border-gray-600 flex justify-center items-center border leading-10 text-gray-600 transition hover:opacity-75"
      >
        <FaMinus className="text-2xl" />
      </button>

      <input
        type="number"
        id="Quantity"
        value={quantity}
        min="1"
        max="10"
        className="h-10 w-24 rounded border-gray-400 border text-xl indent-3"
        readOnly={true}
      />

      <button
        type="button"
        onClick={quantityUp}
        className="h-10 w-10 border-gray-600 flex justify-center items-center border leading-10 text-gray-600 transition hover:opacity-75"
      >
        <FaPlus className="text-2xl" />
      </button>
    </>
  );
}

export default QuantityInput;
