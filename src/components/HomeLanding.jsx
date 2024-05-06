import "../style/landing.css";
import { Link } from "react-router-dom";
function HomeLanding() {
  return (
    <>
      <div className="landing">
        <div className="landing-content">
          <h1>Best Technology Shop Of The Year!</h1>
          <p>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link
            to={"/Shop"}
            className="btn-link btn"
            onClick={() => window.scrollTo(0, 0)}
          >
            Shop Now
          </Link>
        </div>
      </div>
    </>
  );
}
export default HomeLanding;
