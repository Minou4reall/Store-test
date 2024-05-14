import "../style/profile.css";
import { Link } from "react-router-dom";
function ControlSideBar() {
  return (
    <>
      <div className="sidebar-container">
        <ul>
        <Link to={"dashboard"}>
            <li>Dashboard</li>
          </Link>
          <Link to={"crud"}>
            <li>Products</li>
          </Link>
          <Link to={"remaining-orders"} >
            {" "}
            <li>Remaining Orders</li>
          </Link>
          <Link to={"installment-requests"} >
            {" "}
            <li>Installment Requests</li>
          </Link>
          
        </ul>
      </div>
    </>
  );
}
export default ControlSideBar;