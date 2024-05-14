import "../style/profile.css"
import productImage from "../images/61yncRM36qL.__AC_SX300_SY300_QL70_ML2_.jpg";
function UserInstallmentProducts() {
  return (
    <>
      <div className="user-installment">
        <div className="order-header">
          <div className="title">Orders - in progress</div>
        </div>
        <div className="details-installment">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Total amount</th>
                <th>Been paid</th>
                <th>Remaining</th>
                <th>Plan</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="title">
                  <img src={productImage} alt="" />{" "}
                  <span className="name">
                    {" "}
                    Samsung Galaxy Book3 360 Laptop{" "}
                  </span>
                </td>
                <td>1</td>
                <td>$699</td>
                <td>$233</td>
                <td>$467</td>
                <td>Stantard</td>
                <td>2/6</td>
              </tr>
              <tr>
                <td className="title">
                  <img src={productImage} alt="" />{" "}
                  <span className="name">
                    {" "}
                    Samsung Galaxy Book3 360 Laptop{" "}
                  </span>
                </td>
                <td>1</td>
                <td>$699</td>
                <td>$233</td>
                <td>$467</td>
                <td>Stantard</td>
                <td>2/6</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default UserInstallmentProducts;
