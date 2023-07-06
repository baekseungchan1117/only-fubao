import { useParams } from "react-router-dom";
import "../Detail.css";
import { addItem } from "../../cartstore";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal } from "bootstrap";
function Goodsdetail(props) {
  let { id } = useParams();
  let findgoods = props.goods.find(function (x) {
    return x.id == id;
  });
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [modal, setModal] = useState(false) //스위치역할
  return (
    <div className="detail-box">
      <button
        onClick={() => {
          navigate("/cart");
        }}
      >
        장바구니로 이동
      </button>
      <div className="detail-img-box">
        <img
          src={process.env.PUBLIC_URL + "/goods_image/" + findgoods.id + ".jpg"}
          width="100%"
        />
      </div>
      <div className="detail-text-box">
        <h4 className="detail-title">{findgoods.product_title}</h4>
        <p className="detail-content">{findgoods.content}</p>
        <p className="detail-price">{findgoods.price}원</p>
        <button
          className="btn"
          onClick={() =>
            dispatch(
              addItem({ id: findgoods.id, name: findgoods.product_title })
            )
          }
        >
          주문하기
        </button>
        {/* <div className="modal">장바구니에 담았습니다</div>
        {
          modal==true?<Modal></Modal>:null
        } */}
      </div>
    </div>
  );
}
export default Goodsdetail;