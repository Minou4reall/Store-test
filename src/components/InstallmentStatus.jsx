import "../style/profile.css";
import { BiSolidErrorAlt } from "react-icons/bi";
import FormInstallment from "./FormInstallment";
function InstallmentStatus() {
    return(
        <>
            <div className="installment-status">
                <div className="status"> <span><BiSolidErrorAlt /></span> Not eligible for installment service</div>
                <div className="installment-request">
                    <div className="request-title">Request installment service</div>
                    <div className="installment-form">
                        <FormInstallment/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default InstallmentStatus