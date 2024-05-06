import "../style/cart.css";
import CartItem from "./CartItem";
function Cart() {
  return (
    <>
      <div className="cart-container">
        <div className="products-container">
          <CartItem/>
          <CartItem/>
          <CartItem/>
        </div>
      </div>
    </>
  );
}
export default Cart;
