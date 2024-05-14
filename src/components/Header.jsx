import "../style/home.css";
import profileImage from "../images/user profile photo 7.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faEnvelope,
  faHeadphones,
  faMicrochip,
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <>
      <div className="contact-head">
        <span>
          <FontAwesomeIcon className="head-contact-icon" icon={faHeadphones} />{" "}
          +213-555307591
        </span>
        <span>
          <FontAwesomeIcon className="head-contact-icon" icon={faEnvelope} />{" "}
          Minou4reall@gmail.com
        </span>
      </div>
      <div className="icons-side">
        <div className="logo-brand">
          <Link to={""}>
            <FontAwesomeIcon className="logo-icon" icon={faMicrochip} /> 2SM
            Technology
          </Link>
        </div>
        <div className="icons-groupe">
          <Link to={"/shop"} className="btn btn-ghost btn-circle">
            <FontAwesomeIcon className="h-icon" icon={faMagnifyingGlass} />
          </Link>
          <div className="dropdown dropdown-end">
            <a tabIndex={0} className="btn btn-ghost btn-circle">
              <FontAwesomeIcon className="h-icon" icon={faCartShopping} />
            </a>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg text-accent-content text-white">
                  {1} Items
                </span>
                <span className="text-info text-accent-content">
                  Subtotal: $399
                </span>
                <div className="card-actions">
                  <Link
                    to="/cart"
                    className="btn bg-blue-600 btn-block text-white hover:bg-blue-500 text-white"
                  >
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={profileImage} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <Link
                  to="/profile"
                  className="justify-between text-accent-content text-white"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/control-panel/dashboard"
                  className="text-accent-content text-white"
                >
                  Controll Panel
                </Link>
              </li>
              <li>
                <Link
                  to="/order-history"
                  className="text-accent-content text-white"
                >
                  Order history
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-accent-content text-white">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="links-side">
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Header;
