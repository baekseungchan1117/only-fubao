import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CartPage.css";
import { changeName, increase, decrease, addCount } from "../cartstore";
export default function CartPage() {
  let state = useSelector((state) => state);
  console.log(state.cart[0].name);
  let dispatch = useDispatch();
  return (
    <>
      <div className="cart-logo">장바구니</div>
      <div className="table-box-main">
        <div className="table-box1">
          <div>#</div>
          <div>상품명</div>
          <div>수량</div>
          <div>변경하기</div>
        </div>
        {state.cart.map((item, index) => (
          <div className="table-box2" key={index}>
            <div>{item.id}</div>
            <div>{item.name}</div>
            <div>{item.count}</div>
            <div>
              <button
                className="decrease-btn"
                onClick={() => {
                  dispatch(addCount(0));
                }}
              >
                -
              </button>
              <button
                className="increase-btn"
                onClick={() => {
                  dispatch(addCount(index));
                }}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}