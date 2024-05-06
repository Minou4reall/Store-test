import productImage from "../images/61yncRM36qL.__AC_SX300_SY300_QL70_ML2_.jpg";
import { Link } from "react-router-dom";
import { BsCashStack } from "react-icons/bs";
import { FaHeartCrack } from "react-icons/fa6";
import "../style/cart.css";
function CartItem() {
  return (
    <>
      <div className="item ">
        <div className="image-content">
          <img src={productImage} alt="" />
        </div>
        <div className="title-det">
          <h3 className="title">
            Samsung Galaxy Book3 360 Laptop 2024 Version
          </h3>
          <p>Brand: SAMSUNG</p>
          <p>Category: Laptop</p>
        </div>
        <div className="quantity">
          <label htmlFor="">Quantity</label>
          <input type="text" value={1}  disabled/>
        </div>
        <div className="amount">
          <p>Amount</p>
          <p>$399.00</p>
        </div>
        <div className="buttons">
          <button className="buy btn btn-xs bg-blue-600 hover:bg-blue-500 text-white">
            <BsCashStack className="cash " />
            Buy Now
          </button>
          <button className="remove btn btn-xs btn-error text-white">
            <FaHeartCrack />
            Remove
          </button>
        </div>
      </div>
    </>
  );
}
export default CartItem;
