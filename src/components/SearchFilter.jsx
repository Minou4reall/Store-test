import { useState } from "react";
import "../style/shop.css";
import FormDatePicker from "./FormDatePicker";
function SearchFilter() {
  const [priceRange, setPriceRange] = useState("5000");
  return (
    <>
      <div className="search-section">
        <form action="" className="search-form ">
          <div className="srch">
            <label htmlFor="">search product</label>
            <input type="text" className="des" placeholder="Search here..." />
          </div>
          <div className="srch ">
            <label htmlFor="">select category</label>
            <select id="sel-category" className="des">
              <option value="all">All</option>
              <option value="laptop">Laptop</option>
              <option value="PC">PC</option>
            </select>
          </div>
          <div className="srch">
            <label htmlFor="">select brand</label>
            <select id="sel-brand" className="des">
              <option value="all">all</option>
              <option value="msi">msi</option>
              <option value="intel">intel</option>
            </select>
          </div>
          <div className="srch">
            <label htmlFor="">sort by</label>
            <select id="sel-sort" className="des">
              <option value="asc">asc</option>
              <option value="desc">desc</option>
              <option value="price-hight">price hight</option>
              <option value="price-low">price low</option>
            </select>
          </div>

          <div className="srch">
            <label htmlFor="">
              <span>select price</span>
              <span>${priceRange}</span>
            </label>
            <input
              type="range"
              min="0"
              max="5000"
              value={priceRange}
              className="range range-primary range-sm"
              id="rng-price"
              onChange={(e) => {
                setPriceRange(e.target.value)
              }}
              />
            <div className="range-value">
              <span>$0</span>
              <span>$5000</span>
            </div>
          </div>

          <div className="srch ckb">
            <label htmlFor="">Only products in stock</label>
            <input
              type="checkbox"
              id="sel-stock"
              className="checkbox checkbox-primary undefined"
            />
          </div>
          <div className="btn-a">
            <a className="submit">Search</a>
          </div>
          <div className="btn-a">
            <a className="reset">Reset</a>
          </div>
        </form>
      </div>
    </>
  );
}
export default SearchFilter;
