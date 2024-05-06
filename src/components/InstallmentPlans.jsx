import "../style/installment.css";
import SinglePlan from "./SinglePlan";
function InstallmentPlans() {
  return (
    <>
      <div className="installment-container">
        <SinglePlan name={"Basic"} term={"Short"} duration={"3"} percent={"5"} />
        <SinglePlan name={"Standard"} class={"standard"} term={"Medium"} duration={"6"} percent={"10"}/>
        <SinglePlan name={"Premium"} term={"Long"} duration={"12"} percent={"15"}/>
      </div>
    </>
  );
}
export default InstallmentPlans;
