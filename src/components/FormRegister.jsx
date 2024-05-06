import "../style/register.css";
import { Link } from "react-router-dom";
function FormRegister() {
  return (
    <>
      <div className="register-form-container">
        <form action="">
          <div className="input-content">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className="input-content">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" />
          </div>
          <div className="input-content">
            <label htmlFor="email">E-mail</label>
            <input type="emial" id="email" />
          </div>
          <div className="input-content">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" />
          </div>
          <div className="input-content">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" />
          </div>
          <div className="input-content">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-content">
            <label htmlFor="re-password">Repeat Password</label>
            <input type="password" id="re-password" />
          </div>
          <button
            type="submit"
            className="transition duration-200 bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
          >
            <span className="inline-block mr-2">Register</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </form>
        <div className="py-5 text-center">
          <Link
            to="/login"
            className="btn btn-neutral text-white link-login"
            onClick={() => window.scrollTo(0, 0)}
          >
            Already have an account? Please login.
          </Link>
        </div>
      </div>
    </>
  );
}
export default FormRegister;
