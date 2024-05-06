import InstallmentPlans from "../components/InstallmentPlans";
import SlideHeader from "../components/SlideHeader";
function InstallmentPage() {
  return (
    <>
      <SlideHeader header={"Installment"} extension={"Shop | Installment"} />
      <InstallmentPlans />
    </>
  );
}
export default InstallmentPage;
