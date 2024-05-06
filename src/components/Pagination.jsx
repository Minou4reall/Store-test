import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import '../style/shop.css'
function Pagination() {
  return (
    <>
      <div className="pagination flex justify-center mt-10">
        <div className="join">
          <button
            className="join-item btn text-4xl flex justify-center"
            
          >
            <FaCircleArrowLeft />
          </button>
          <button className="join-item btn text-2xl">
            PAGE 1
          </button>
          <button
            className="join-item btn text-4xl flex justify-center"
            
          >
            <FaCircleArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}
export default Pagination;
