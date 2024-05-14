import "../style/profile.css";
import { Link } from "react-router-dom";
function ProfileSideBar() {
  return (
    <>
      <div className="sidebar-container">
        <ul>
          <Link to={""}>
            <li>User Information</li>
          </Link>
          <Link to={"installment-status"} >
            {" "}
            <li>Installment Status</li>
          </Link>
          <Link to={"installment-products"}><li>Installment Products</li></Link>
          
        </ul>
      </div>
    </>
  );
}
export default ProfileSideBar;
