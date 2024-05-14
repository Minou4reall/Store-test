import "../style/controlPanel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faChevronDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
function AddProductPopup(props) {
  return (
    <>
      <div className="edit-container">
        <div className="edit-content">
          <div className="close" onClick={props.addModalPopup}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <div className="title">Add Product</div>
          <form action="">
            <div className="row-input">
              <div className="input-content">
                <label>Name</label>
                <input type="text" placeholder="Type product name" />
              </div>
            </div>

            <div className="grid-form">
              <div className="input-content">
                <label>Brand</label>
                <input type="text" placeholder="Product brand" />
              </div>
              <div className="input-content">
                <label>Price</label>
                <div className="input-price">
                  <input type="number" placeholder="2999" />
                </div>
              </div>
              <div className="input-content">
                <label>Category</label>
                <div className="select-input">
                  <select name="category">
                    <option value="all">All</option>
                    <option value="laptop">Laptop</option>
                    <option value="PC">PC</option>
                  </select>
                  <FontAwesomeIcon
                    className="arrow-icon"
                    icon={faChevronDown}
                  />
                </div>
              </div>
              <div className="input-content">
                <label>Quantity</label>
                <input type="number" placeholder="Product Quantity" />
              </div>
            </div>
            <div className="text-area">
              <label htmlFor="">Description</label>
              <textarea
                rows={6}
                placeholder="Write product description here"
              ></textarea>
            </div>
            <div className="buttons">
              <button className="add btn">
                <FontAwesomeIcon icon={faPlus} className="plus" /> Add New
                Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default AddProductPopup;
