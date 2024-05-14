import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import {
  faCircleXmark,
  faCircleCheck,
} from "@fortawesome/free-regular-svg-icons";
import PreviewRequestPopup from "./PreviewRequestPopup";
function InstallmentRequests() {
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
                <PreviewRequestPopup previewModalPopup={previewToggleModal} />
              </div>
            </div>
          </div>
        )}
        <div className="order-header">
          <div className="title">Requests - pending</div>
        </div>
        <div className="details-installment installment-requests">
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Company</th>
                <th>Monthly Salary</th>
                <th>Bank Account Number</th>
                <th>Take Decision</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="title">
                  <span className="name">Ben Amor Salmane</span>
                </td>
                <td>Amazon</td>
                <td>$4000</td>

                <td className="bank-account ">
                  <span>202139070489</span>
                </td>
                <td className="actions">
                  <a className="done">
                    <FontAwesomeIcon className="icon" icon={faCircleCheck} />{" "}
                    Accept
                  </a>
                  <a className="preview" onClick={previewToggleModal}>
                    <FontAwesomeIcon className="icon" icon={faEye} /> Preview
                  </a>
                  <a className="refuse">
                    <FontAwesomeIcon className="icon" icon={faCircleXmark} />{" "}
                    Refuse
                  </a>
                </td>
              </tr>
              <tr>
                <td className="title">
                  <span className="name">Mansour Sadek </span>
                </td>
                <td>Tesla</td>
                <td>$12000</td>
                <td className="bank-account ">
                  <span>202139070425</span>
                </td>
                <td className="actions">
                  <a className="done">
                    <FontAwesomeIcon className="icon" icon={faCircleCheck} />{" "}
                    Accept
                  </a>
                  <a className="preview">
                    <FontAwesomeIcon className="icon" icon={faEye} /> Preview
                  </a>
                  <a className="refuse">
                    <FontAwesomeIcon className="icon" icon={faCircleXmark} />{" "}
                    Refuse
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
export default InstallmentRequests;
