import "../style/installment.css";
import { Link } from "react-router-dom";
function SinglePlan(props) {
  return (
    <>
      <div className={`installment-plan ${props.class}`}>
        <div className="plan-header">
          <div className="plan-title">{props.name} Plan</div>
          <div className="plan-desc">{props.term}-term installment plan</div>
          <div className="plan-duration">{props.duration}</div>
        </div>
        <div className="action">
          <button className="btn bg-blue-600 hover:bg-blue-500 text-white">
            Add Plan
          </button>
        </div>
        <div className="plan-details">
          <ul>
            <li>{props.percent}% increase in product price</li>
            <li>Installment period is {props.duration} months</li>
            <li>Option to pay the full amount at any time</li>
            <li>The amount is deducted monthly</li>
          </ul>
          <div className="more-details">
            <Link onClick={() => window.scrollTo(0, 0)} className="det-link">
              See all the details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default SinglePlan;
