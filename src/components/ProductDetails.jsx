import { FaCartShopping } from "react-icons/fa6";
import QuantityInput from "./QuantityInput";
import productImage from "../images/61yncRM36qL.__AC_SX300_SY300_QL70_ML2_.jpg";
import { BsCashStack } from "react-icons/bs";
import "../style/productDetails.css";
import { Link } from "react-router-dom";
function ProductDetails() {
  return (
    <>
      <div className="product-details">
        <div className="image-side">
          <img src={productImage} alt="" />
        </div>
        <div className="details-side">
          <div className="product-title"> Samsung Galaxy Book3 360 Laptop </div>
          <div className="product-price">$899</div>
          <div className="product-description">
            Samsung Galaxy Book3 360 Laptop
          </div>
          <div className="product-quantity">
            <QuantityInput />
          </div>
          <div className="buttons">
            <button className="btn bg-blue-600 hover:bg-blue-500 text-white">
              <FaCartShopping className="text-xl mr-1" />
              Add to cart
            </button>
            <Link
              to={"/purchase"}
              className="btn bg-blue-600 hover:bg-blue-500 text-white"
            >
              <BsCashStack className="text-xl mr-1" />
              Buy Now
            </Link>
          </div>
          <div className="categories">
            <ul>
              <li className="badge bg-gray-700 badge-lg font-bold text-white p-5 mt-2">
                Brand: Samsung
              </li>
              <li className="badge bg-gray-700 badge-lg font-bold text-white p-5 mt-2">
                In Stock: Yes
              </li>
              <li className="badge bg-gray-700 badge-lg font-bold text-white p-5 mt-2">
                Category: laptop
              </li>
              <li className="badge bg-gray-700 badge-lg font-bold text-white p-5 mt-2">
                RGB: No
              </li>
              <li className="badge bg-gray-700 badge-lg font-bold text-white p-5 mt-2">
                Production Date: 2021-10-31
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductDetails;
