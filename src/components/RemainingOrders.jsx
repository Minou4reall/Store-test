import productImage from "../images/61yncRM36qL.__AC_SX300_SY300_QL70_ML2_.jpg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import PreviewOrderPopup from "./PreviewOrderPopup";
function RemainingOrders() {
  const [previewModal, setPreviewModal] = useState(false);
  const previewToggleModal = () => {
    setPreviewModal(!previewModal);
    
  };
  if (previewModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <div className="user-installment remaining-orders">
        {previewModal && (
          <div onClick={previewToggleModal} className="order-preview-modal">
            <div className="overlay">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="modal-content"
              >
                <PreviewOrderPopup previewModalPopup={previewToggleModal} />
              </div>
            </div>
          </div>
        )}
        <div className="order-header">
          <div className="title">Orders - in progress</div>
        </div>
        <div className="details-installment">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Unit amount</th>
                <th>Total amount</th>
                <th>Address</th>
                <th>Take Decision</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="title">
                  <img src={productImage} alt="" />{" "}
                  <span className="name">
                    {" "}
                    Samsung Galaxy Book3 360 Laptop{" "}
                  </span>
                </td>
                <td>2</td>
                <td>$399</td>
                <td>$798</td>
                <td className="address">
                  <span> 08 Mai 1945 new p 172 bloc 4 apartment 4</span>
                </td>
                <td className="actions">
                  <a className="done">
                    <FontAwesomeIcon className="icon" icon={faCircleCheck} />{" "}
                    Done
                  </a>
                  <a className="preview" onClick={previewToggleModal}>
                    <FontAwesomeIcon
                      className="icon"
                      icon={faEye}
                      
                    />{" "}
                    Preview
                  </a>
                </td>
              </tr>
              <tr>
                <td className="title">
                  <img src={productImage} alt="" />{" "}
                  <span className="name">
                    {" "}
                    Samsung Galaxy Book3 360 Laptop{" "}
                  </span>
                </td>
                <td>2</td>
                <td>$399</td>
                <td>$798</td>
                <td>08 Mai 1945</td>
                <td className="actions">
                  <a className="done">
                    <FontAwesomeIcon className="icon" icon={faCircleCheck} />{" "}
                    Done
                  </a>
                  <a className="preview">
                    <FontAwesomeIcon className="icon" icon={faEye} /> Preview
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default RemainingOrders;
