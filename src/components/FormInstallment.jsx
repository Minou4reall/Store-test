import "../style/profile.css";
function FormInstallment() {
  return (
    <>
      <div className="profile-content">
        <form action="">
          <div className="title">User Details</div>
          <div className="grid-content">
            <div className="input-content">
              <label>National Identification Number</label>
              <input type="text" placeholder="Enter your ID"/>
            </div>
            <div className="input-content">
              <label>Company Name</label>
              <input type="text" placeholder="Enter your company name"/>
            </div>
            <div className="input-content">
              <label>Monthly Salary</label>
              <input type="number" placeholder="Enter your salary"/>
            </div>
            <div className="input-content">
              <label>Bank Account Number</label>
              <input type="number" placeholder="Enter your bank account"/>
            </div>
            <div className="input-content">
              <label>Certification</label>
              <input type="file" />
            </div>
            <div className="input-content">
              <label>Proof Of Income</label>
              <input type="file" />
            </div>
          </div>
          <div className="title">Card Details</div>
          <div className="card-grid">
            <div className="input-content">
              <label htmlFor="card_number">Card Number</label>
              <input
                type="number"
                id="card_number"
                placeholder="Enter your card number"
                required
              />
            </div>

            
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
              <div className="input-content ">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="number"
                  id="cvv"
                  placeholder="Enter CVV"
                  required
                />
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
            <div className="input-content"></div>
          </div>

          <button
            className="btn btn-lg bg-blue-600 hover:bg-blue-500 text-white mt-10"
            type="submit"
          >
            Send Request
          </button>
        </form>
      </div>
    </>
  );
}
export default FormInstallment;
