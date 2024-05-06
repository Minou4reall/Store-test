import SlideHeader from "../components/SlideHeader";
import ProductDetails from "../components/ProductDetails";
import RelatedProducts from "../components/RelatedProducts";

function ProductPage() {
  return (
    <>
      <SlideHeader header={"Product page"} extension={"Shop | Product page"} />
      <ProductDetails />
      <RelatedProducts/>
    </>
  );
}
export default ProductPage;
