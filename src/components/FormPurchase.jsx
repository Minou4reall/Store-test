import "../style/purchase.css";
import { BsCashStack } from "react-icons/bs";
import { BsReceiptCutoff } from "react-icons/bs";
import { Link } from "react-router-dom";
function FormPurchase() {
  return (
    <>
      <div className="purchase-form">
        <div className="title">Card Details</div>
        <form>
          <div className="input-content">
            <label htmlFor="card_number">Card Number</label>
            <input
              type="number"
              id="card_number"
              placeholder="Enter your card number"
              required
            />
          </div>

          <div className="date-cvv">
            <div className="input-content exp-date">
              <label htmlFor="expiry_date">Expiry Date</label>
              <input
                type="text"
                id="expiry_date"
                placeholder="MM/YYYY"
                maxLength={7}
                required
              />
            </div>
            <div className="input-content cvv">
              <label htmlFor="cvv">CVV</label>
              <input type="number" id="cvv" placeholder="Enter CVV" required />
            </div>
          </div>

          <div className="input-content">
            <label htmlFor="card_holder">Card Holder Name</label>
            <input
              type="text"
              id="card_holder"
              placeholder="Enter card holder name"
              required
            />
          </div>
          <div className="input-content">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              placeholder="Enter The Address"
              required
            />
          </div>
          <div className="buttons">
            <button className="btn bg-blue-600 hover:bg-blue-500 text-white">
              <BsCashStack className="text-xl mr-1" />
              Buy Now
            </button>
           
          </div>
        </form>
      </div>
    </>
  );
}
export default FormPurchase;
