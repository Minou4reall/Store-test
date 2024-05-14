import "../style/controlPanel.css";
import CrudTableRow from "./CrudTableRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import EditPopup from "./EditPopup";
import PreviewPopup from "./PreviewPopup";
import { useState } from "react";
import AddProductPopup from "./AddProductPopup";
function Crud() {
  const [addModal, setAddModal] = useState(false);
  const addToggleModal = () => {
    setAddModal(!addModal);
  };
  const [editModal, setEditModal] = useState(false);
  const editToggleModal = () => {
    setEditModal(!editModal);
  };

  const [previewModal, setPreviewModal] = useState(false);
  const previewToggleModal = () => {
    setPreviewModal(!previewModal);
  };

  if (editModal || previewModal || addModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <div className="crud-container">
        {editModal && (
          <div onClick={editToggleModal} className="edit-modal">
            <div className="overlay">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="modal-content"
              >
                <EditPopup editModalPopup={editToggleModal} />
              </div>
            </div>
          </div>
        )}
        {previewModal && (
          <div onClick={previewToggleModal} className="preview-modal">
            <div className="overlay">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="modal-content"
              >
                <PreviewPopup previewModalPopup={previewToggleModal} />
              </div>
            </div>
          </div>
        )}
        {addModal && (
          <div onClick={addToggleModal} className="add-modal">
            <div className="overlay">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="modal-content"
              >
                <AddProductPopup addModalPopup={addToggleModal} />
              </div>
            </div>
          </div>
        )}
        <div className="crud-header">
          <div className="all-product">
            All Products: <span>11406</span>
          </div>
          <div className="functions">
            <div className="search">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="search-icon"
              />
              <input type="text" placeholder="Search for product" />
            </div>

            <div className="buttons">
              <button className="btn" onClick={addToggleModal}>
                <FontAwesomeIcon icon={faPlus} className="plus" /> Add Product
              </button>
            </div>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>stock</th>
              <th>sales/month</th>
              <th>sales</th>
              <th>revenue</th>
              <th>last update</th>
            </tr>
          </thead>
          <tbody>
            <CrudTableRow
              stock={"green"}
              editModalPopup={editToggleModal}
              previewModalPopup={previewToggleModal}
            />
            <CrudTableRow stock={"yellow"} />
            <CrudTableRow stock={"red"} />
            <CrudTableRow stock={"yellow"} />
            <CrudTableRow stock={"red"} />
            <CrudTableRow stock={"green"} />
            <CrudTableRow stock={"green"} />
            <CrudTableRow stock={"yellow"} />
            <CrudTableRow stock={"yellow"} />
            <CrudTableRow stock={"yellow"} />
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Crud;
