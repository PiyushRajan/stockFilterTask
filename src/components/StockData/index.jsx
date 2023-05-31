import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProduct, toggleSelect } from "../../slice/slice";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const StockData = () => {
  const [displaySelected, setDisplaySelected] = useState(false);
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const selectedProducts = useSelector((state) =>
    state.Stocks.products.filter((item) => item.isSelected)
  );

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.Stocks);
  const fetchData = () => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setProduct(data));
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleWatchlistClick = () => {
    setDisplaySelected(!displaySelected);
  };

  const handleItemHover = (itemId) => {
    setHoveredItemId(itemId);
  };

  const productList = displaySelected ? selectedProducts : products;

  return (
    <>
      {/* Navbar */}
      <div className="navbar-wrapper">
        <div
          className={`navtag ${!displaySelected ? "active" : ""}`}
          onClick={handleWatchlistClick}
        >
          STOCK DATA LIST
        </div>
        <div
          className={`navtag ${displaySelected ? "active" : ""}`}
          onClick={handleWatchlistClick}
        >
          MY WATCHLIST
        </div>
      </div>
      {/* main Component */}
      {productList?.map((val) => {
        const isHovered = hoveredItemId === val.id;
        return (
          <div
            key={val.id}
            className={`wrapper ${isHovered ? "hovered" : ""}`}
            onClick={() => dispatch(toggleSelect({ id: val.id }))}
            onMouseEnter={() => handleItemHover(val.id)}
            onMouseLeave={() => handleItemHover(null)}
          >
            <div className="left-wrapper">
              <div className="company-price">
                <div className="company-name">{val.name}</div>
                <div className="category">{val.stockExchange}</div>
              </div>
              <div>
                {isHovered && val.isSelected ? (
                  <AiFillHeart color="red" />
                ) : isHovered ? (
                  <AiOutlineHeart />
                ) : null}
              </div>
              <div>
                <div className="price"> ₹{val.stockPrice}</div>
                <div className="profit-loss">{val.stockValueChange}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default StockData;
