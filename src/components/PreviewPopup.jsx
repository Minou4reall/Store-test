import "../style/controlPanel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faEye,
  faXmark,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
function PreviewPopup(props) {
  return (
    <>
      <div className="preview-container">
        <div className="preview-content">
          <div className="close" onClick={props.previewModalPopup}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <div className="title">Samsung Galaxy Book3 360 Laptop</div>
          <div className="price">$399</div>
          <div className="details">
            <div className="det-title">Details</div>
            <div className="det-content">
              Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7
              processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
              Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
              Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
            </div>
          </div>
          <div className="category">
            <div className="cat-title">Category</div>
            <div className="cat-content">Laptop</div>
          </div>
          <div className="buttons">
            <div className="left-side">
              <button className="edit btn">
                <FontAwesomeIcon className="icon" icon={faPenToSquare} /> Edit
              </button>
              <button className="preview btn">
                <FontAwesomeIcon className="icon" icon={faEye} /> Preview
              </button>
            </div>
            <div className="right-side"></div>
            <button className="delete btn">
              <FontAwesomeIcon className="icon" icon={faTrashCan} /> Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default PreviewPopup;
