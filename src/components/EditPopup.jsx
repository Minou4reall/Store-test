import "../style/controlPanel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faChevronDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function EditPopup(props) {
  let [name, setName] = useState("Samsung Galaxy Book3 360 Laptop");
  let [brand, setBrand] = useState("Samsung");
  let [price, setPrice] = useState("399");
  let [category, setCategory] = useState("laptop");
  let [quantity, setQuantity] = useState("48");
  let [description, setDescription] = useState(
    "Computer/Windows 11 PRO / 16GB / 512GB, 13th Gen Intel® Core™ i5 processor, Intel® Evo™ platform, Lightweight, 2023 Model, NP944XFG-KC2US, Graphite"
  );
  return (
    <>
      <div className="edit-container">
        <div className="edit-content">
          <div className="close" onClick={props.editModalPopup}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <div className="title">Update Product</div>
          <form action="">
            <div className="row-input">
              <div className="input-content">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Type product name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="grid-form">
              <div className="input-content">
                <label>Brand</label>
                <input
                  type="text"
                  value={brand}
                  onChange={(e) => {
                    setBrand(e.target.value);
                  }}
                />
              </div>
              <div className="input-content">
                <label>Price</label>
                <div className="input-price">
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="input-content">
                <label>Category</label>
                <div className="select-input">
                  <select
                    name="category"
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                  >
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
                <input
                  type="number"
                  placeholder="Product Quantity"
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="text-area">
              <label htmlFor="">Description</label>
              <textarea
                rows={6}
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="buttons">
              <button className="update btn">Update Product</button>
              <button className="delete btn">
                <FontAwesomeIcon className="icon" icon={faTrashCan} /> Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default EditPopup;
