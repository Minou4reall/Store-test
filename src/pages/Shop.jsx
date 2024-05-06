import SlideHeader from "../components/SlideHeader";
import ShopProducts from "../components/ShopProducts";
import SearchFilter from "../components/SearchFilter";
import Pagination from "../components/Pagination";
function Shop() {
  return (
    <>
      <SlideHeader header={"Shop"} extension={"Shop"} />
      <SearchFilter />
      <ShopProducts />
      <Pagination />
    </>
  );
}
export default Shop;
