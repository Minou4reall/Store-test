import { Link } from "react-router-dom";
import "../style/about.css";
function AboutSlide() {
  return (
    <>
      <div className="about-slide">
        <div className="text-content">
          <div className="header-title">We love our customers!</div>
          <div className="phargraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            obcaecati eum est commodi, quam, ut quidem deleniti quos quod
            temporibus dicta deserunt voluptates ab! Deleniti id repellat,
            labore fugiat obcaecati dolorem minima fugit quasi nam velit
            reiciendis delectus ea tempora.
          </div>

          <Link to='/contact' className="link-btn btn bg-blue-600 hover:bg-blue-500" onClick={() => window.scrollTo(0, 0)}>
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
export default AboutSlide;
