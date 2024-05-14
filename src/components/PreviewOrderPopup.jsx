import "../style/controlPanel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
function PreviewOrderPopup(props) {
  return (
    <>
      <div className="preview-container preview-order">
        <div className="preview-content">
          <div className="close" onClick={props.previewModalPopup}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <div className="title">Samsung Galaxy Book3 360 Laptop</div>
          <div className="lbl">
            Quantity : <span>2</span>
          </div>
          <div className="lbl">
            Unit Amount : <span>$399</span>
          </div>
          <div className="lbl">
            Total Amount : <span>$798</span>
          </div>
          <div className="lbl">
            Stock : <span>24</span>{" "}
          </div>
          <div className="details">
            <div className="lbl">Address</div>
            <div className="det-content">
              08 Mai 1945 new p 172 bloc 4 apartment 4
            </div>
          </div>

          <div className="buttons">
            <div className="left-side"></div>
            <div className="right-side"></div>
            <a className="done">
              <FontAwesomeIcon className="icon" icon={faCircleCheck} /> Done
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default PreviewOrderPopup;
