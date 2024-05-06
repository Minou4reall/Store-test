import productImage from "../images/61yncRM36qL.__AC_SX300_SY300_QL70_ML2_.jpg";
import "../style/productCard.css";
import { Link } from "react-router-dom";
function ProductCard() {
  return (
    <>
      <div className="product-card">
        <a href="">
          <Link to={"/shop/product"} onClick={() => window.scrollTo(0, 0)}>
            <div className="product-image">
              <img src={productImage} alt="" />
            </div>
            <div className="product-title">Samsung Galaxy Book3 360 Laptop</div>
          </Link>
        </a>

        <div className="product-price">$899</div>
      </div>
    </>
  );
}
export default ProductCard;
