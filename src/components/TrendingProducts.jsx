import "../style/trending.css";
import ProductCard from "./ProductCard";
function TrendingProducts() {
  return (
    <>
      <div className="trending-products">
        <div className="trending-header">Trending Products</div>
        <div className="trnd-products">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
}
export default TrendingProducts;
