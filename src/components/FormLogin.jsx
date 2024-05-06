import { Link } from "react-router-dom";
import "../style/register.css";
function FormLogin() {
  return (
    <>
      <div className="register-form-container">
        <form action="">
          <div className="input-content">
            <label htmlFor="email">E-mail</label>
            <input type="emial" id="email" />
          </div>
          <div className="input-content">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button
            type="submit"
            className="transition duration-200 bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
          >
            <span className="inline-block mr-2">Login</span>
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
            to="/register"
            className="btn btn-neutral text-white link-login"
            onClick={() => window.scrollTo(0, 0)}
          >
            Don't have an account? Please register.
          </Link>
        </div>
      </div>
    </>
  );
}
export default FormLogin;
