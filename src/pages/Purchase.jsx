import SlideHeader from "../components/SlideHeader";
import FormPurchase from "../components/FormPurchase";
function Purchase() {
  return (
    <>
      <SlideHeader
        header={"Purchase"}
        extension={"Shop | Purchase"}
      />
      <FormPurchase />
    </>
  );
}
export default Purchase;
