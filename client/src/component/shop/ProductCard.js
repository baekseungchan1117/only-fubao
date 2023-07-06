import Card from "./Card";
import React, { useState } from "react";

function ProductCard(props) {
  const [showCards, setShowCards] = useState(false);

  //console.log(props)
  const handleClick = () => {
    setShowCards(!showCards);
  };
  return (
    <>
      <div className="goods-box">
        <div className="goods-line">🐼금주의 핫템🐼</div>
      </div>
      <div className="goods-box-img">
        <div className="row">
          {props.goods.slice(0, 8).map((a, i) => {
            return <Card goods={a} i={i + 1} />;
          })}
        </div>
      </div>

      <div className="goods-box-img">
        {showCards && (
          <div className="row">
            {props.goods.slice(8, 15).map((a, i) => {
              return <Card goods={a} i={i + 1} key={i} />;
            })}
          </div>
        )}
      </div>
      <div className="goods-box">
        <button onClick={handleClick}>More</button>
      </div>

      {/* <div className="goods-box">
        <button on>더 보기</button>
      </div> */}
    </>
  );
}
export default ProductCard;
