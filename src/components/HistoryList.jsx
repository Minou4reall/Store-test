import "../style/orderHistory.css";
import HistoryItem from "./HistoryItem";
function HistoryList() {
  return (
    <>
      <div className="history-container">
        <div className="products-container">
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
        </div>
      </div>
    </>
  );
}
export default HistoryList;
