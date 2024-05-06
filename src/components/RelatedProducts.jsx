import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import "../style/relatedProducts.css";
function RelatedProducts() {
  return (
    <>
      <div className="related-product">
        <div className="title-side">Related Products</div>
        <div className="products-rel">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="see-more">
          <Link
            className="Link btn bg-blue-600 hover:bg-blue-500 text-white"
            to={"/shop"}
            onClick={() => window.scrollTo(0, 0)}
          >
            More Products..
          </Link>
        </div>
      </div>
    </>
  );
}
export default RelatedProducts;
