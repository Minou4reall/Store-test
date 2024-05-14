import productImage from "../images/61yncRM36qL.__AC_SX300_SY300_QL70_ML2_.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faEye,
  faCircle,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
function CrudTableRow(props) {
  return (
    <>
      <tr>
        <td className="title">
          <img src={productImage} alt="" />{" "}
          <span className="name"> Samsung Galaxy Book3 360 Laptop </span>
        </td>
        <td className="category">
          {" "}
          <span>laptop</span>{" "}
        </td>
        <td>
          <FontAwesomeIcon
            icon={faCircle}
            className={`stock  ${props.stock}`}
          />{" "}
          48
        </td>

        <td>1.28</td>
        <td>
          <FontAwesomeIcon icon={faCartShopping} className="cart" /> 15
        </td>
        <td className="revenue">$1.6K</td>
        <td className="actions">
          <a className="edit" onClick={props.editModalPopup}>
            <FontAwesomeIcon className="icon" icon={faPenToSquare} /> Edit
          </a>
          <a className="preview" onClick={props.previewModalPopup}>
            <FontAwesomeIcon className="icon" icon={faEye} /> Preview
          </a>
          <a className="delete">
            <FontAwesomeIcon className="icon" icon={faTrashCan} /> Delete
          </a>
        </td>
      </tr>
    </>
  );
}
export default CrudTableRow;
