import "../style/dashboard.css";
import productImage from "../images/61yncRM36qL.__AC_SX300_SY300_QL70_ML2_.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faCalendar,
  faUser,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
function Dashboard() {
  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-content">
          <div className="dash-title">Dashboard</div>
          <div className="dashboard-cards">
            <div className="card monthly">
              <div className="dtls">
                <div className="dtls-title">Earnings (Monthly)</div>
                <div className="dtls-value">
                  <FontAwesomeIcon className="icon" icon={faDollarSign} />
                  40,000
                </div>
              </div>
              <div className="card-icon">
                <FontAwesomeIcon icon={faCalendar} />
              </div>
            </div>
            <div className="card annual">
              <div className="dtls">
                <div className="dtls-title">Earnings (annual)</div>
                <div className="dtls-value">
                  <FontAwesomeIcon className="icon" icon={faDollarSign} />
                  600,000
                </div>
              </div>
              <div className="card-icon">
                <FontAwesomeIcon icon={faDollarSign} />
              </div>
            </div>
            <div className="card users">
              <div className="dtls">
                <div className="dtls-title">Users</div>
                <div className="dtls-value">
                  
                  242
                </div>
              </div>
              <div className="card-icon">
                <FontAwesomeIcon icon={faUser} />
              </div>
            </div>
            <div className="card pending-orders">
              <div className="dtls">
                <div className="dtls-title">Pending Orders</div>
                <div className="dtls-value">
                  
                  18
                </div>
              </div>
              <div className="card-icon">
                <FontAwesomeIcon icon={faClock} />
              </div>
            </div>
          </div>
          <div className="dashboard-details">
            <div className="recent-sales">
              <div className="recent-title">Recent Sales</div>
              <table>
                <thead>
                  <tr>
                    <th className="rds-1">Product</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th className="rds-2">Total</th>
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
                    <td>Salmane Ben Amor</td>
                    <td>2024/05/12</td>

                    <td className="bank-account ">
                      <span>$400</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="title">
                      <img src={productImage} alt="" />{" "}
                      <span className="name">
                        {" "}
                        Samsung Galaxy Book3 360 Laptop{" "}
                      </span>
                    </td>
                    <td>Salmane Ben Amor</td>
                    <td>2024/05/12</td>

                    <td className="bank-account ">
                      <span>$400</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="title">
                      <img src={productImage} alt="" />{" "}
                      <span className="name">
                        {" "}
                        Samsung Galaxy Book3 360 Laptop{" "}
                      </span>
                    </td>
                    <td>Salmane Ben Amor</td>
                    <td>2024/05/12</td>

                    <td className="bank-account ">
                      <span>$400</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="title">
                      <img src={productImage} alt="" />{" "}
                      <span className="name">
                        {" "}
                        Samsung Galaxy Book3 360 Laptop{" "}
                      </span>
                    </td>
                    <td>Salmane Ben Amor</td>
                    <td>2024/05/12</td>

                    <td className="bank-account ">
                      <span>$400</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="title">
                      <img src={productImage} alt="" />{" "}
                      <span className="name">
                        {" "}
                        Samsung Galaxy Book3 360 Laptop{" "}
                      </span>
                    </td>
                    <td>Salmane Ben Amor</td>
                    <td>2024/05/12</td>

                    <td className="bank-account ">
                      <span>$400</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="best-selling">
              <div className="best-title">Top Selling Product</div>
              <div className="best-product">
                <div className="b-product">
                  <img src={productImage} alt="" />
                  <div className="pro-name">
                    Samsung Galaxy Book3 360 Laptop
                  </div>
                  <div className="p-total">$7520</div>
                </div>
              </div>
              <div className="best-product">
                <div className="b-product">
                  <img src={productImage} alt="" />
                  <div className="pro-name">
                    Samsung Galaxy Book3 360 Laptop
                  </div>
                  <div className="p-total">$7520</div>
                </div>
              </div>
              <div className="best-product">
                <div className="b-product">
                  <img src={productImage} alt="" />
                  <div className="pro-name">
                    Samsung Galaxy Book3 360 Laptop
                  </div>
                  <div className="p-total">$7520</div>
                </div>
              </div>
              <div className="best-product">
                <div className="b-product">
                  <img src={productImage} alt="" />
                  <div className="pro-name">
                    Samsung Galaxy Book3 360 Laptop
                  </div>
                  <div className="p-total">$7520</div>
                </div>
              </div>
              <div className="best-product">
                <div className="b-product">
                  <img src={productImage} alt="" />
                  <div className="pro-name">
                    Samsung Galaxy Book3 360 Laptop
                  </div>
                  <div className="p-total">$7520</div>
                </div>
              </div>
              <div className="best-product">
                <div className="b-product">
                  <img src={productImage} alt="" />
                  <div className="pro-name">
                    Samsung Galaxy Book3 360 Laptop
                  </div>
                  <div className="p-total">$7520</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
