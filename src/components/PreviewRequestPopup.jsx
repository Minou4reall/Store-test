import "../style/controlPanel.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
function PreviewRequestPopup(props) {
  const firstFile = "http://localhost:3000/document/Tp-Compilation.pdf";
  const downloadFileURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    aTag.click();
    aTag.remove();
  };
  return (
    <>
      <div className="preview-container preview-order preview-installment-requests">
        <div className="preview-content">
          <div className="close" onClick={props.previewModalPopup}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <div className="title">Salmane Ben Amor </div>
          <div className="lbl">
            National Identification Number : <span>1000041278005740020</span>
          </div>
          <div className="lbl">
            Company : <span>Amazon</span>
          </div>
          <div className="lbl">
            Monthly Salary : <span>$4000</span>
          </div>
          <div className="lbl">
            Bank Account Number : <span>202139070489</span>{" "}
          </div>
          <div className="details">
            <div className="lbl user-documents">Documents</div>
            <div className="doc-file">
              <button
                onClick={() => {
                  downloadFileURL(firstFile);
                }}
              >
                Certification
              </button>
              <button
                onClick={() => {
                  downloadFileURL(firstFile);
                }}
              >
                Income Proof
              </button>
            </div>
          </div>

          <div className="buttons-req">
            
            <a className="accept">
              <FontAwesomeIcon className="icon" icon={faCircleCheck} /> Accept
            </a>
            <a className="refuse">
              <FontAwesomeIcon className="icon" icon={faCircleXmark} /> Refuse
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default PreviewRequestPopup;
