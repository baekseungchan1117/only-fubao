import { useParams } from "react-router-dom";
import "../Detail.css";
import React, { useState } from "react";

function DetailTab(props) {
  let { id } = useParams();
  let findgoods = props.goods.find(function (x) {
    return x.id == id;
  });
  let [tab, settab] = useState(0);
  const [selectedTab, setSelectedTab] = useState("");

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  let displayText = "";

  if (selectedTab === "Product Details") {
    displayText = <div className="tab-text">Hello</div>;
  } else if (selectedTab === "Shipping & Return Policy") {
    displayText = (
      <>
        <div className="tab-text">
          온라인 스토어 반품 정책 <p />
          <br />
          제품이 마음에 들지 않아서 반품을 생각하고 계신다면 안심하세요. foubao
          온라인 스토어에서 구매한 제품은 수령일로부터 30일 이내에 반품 신청할
          수 있어요. 반품 신청 전에 제품 택이 부착되어 있는지, 착용 및 세탁하지
          않은 상태인지 다시 한 번 체크해주세요.
        </div>
        <br />
        <div className="tab-text ">
          반품 방법 1. 제품을 받은 날로부터 30일 이내에
          이메일(fuobao.kr@cute.com) 또는 전화(070.1234.4321)로 반품 의사를
          남겨주세요. 주문번호(ex. KR00123456)/성함/반품할 제품 목록을 함께
          알려주시면 빠른 처리가 가능해요. <br />
          <br />
          2. 반품이 접수되면 CJ대한통운 기사님이 연락 후 제품 수거를 진행합니다.
          제품을 포장하신 후 CJ대한통운 기사님께 전달해주세요. <br />
          <br /> 3. 제품이 회수되면 검수 절차를 거쳐 환불이 진행됩니다. 환불
          시에는 환불 완료 확인 이메일을 발송해드리며, 환불 처리에 영업일
          7일-10일가량 소요될 수 있음을 참고해주세요. (거래은행 혹은 카드사마다
          취소 기간 상이) *fuobao 반품 규정에 의거한 반품이 어려운 경우
          이메일으로 알려 드립니다. *CJ대한통운이 아닌 타 택배사를 통하여
          반품하는 경우 선불 택배만 가능하며, 착불 택배의 경우 반송될 수
          있습니다. 또한, 제품 훼손 및 분실은 도움을 드릴 수 없음을
          참고해주세요.
          <br />
          <br />
        </div>
      </>
    );
  } else if (selectedTab === "Sales proceeds") {
    displayText = (
      <div className="tab-text">
        우리는 제품 판매로 인한 모든 페니가 자선 활동에 사용된다는 사실을
        공유하게 되어 기쁩니다. 사회에 긍정적인 영향을 미치겠다는 확고한 의지로
        수익금 전액을 도움이 필요한 사람들을 지원하기 위해 기부할 것을
        약속했습니다.
        <br />
        <br />
      </div>
    );
  }

  console.log(findgoods.id);
  return (
    <div>
      <nav>
        <div className="tab-box">
          <div
            className={`tab-box-inner ${
              selectedTab === "Product Details" ? "active" : ""
            }`}
            onClick={() => handleTabClick("Product Details")}
          >
            제품 디테일
          </div>
          <div
            className={`tab-box-inner ${
              selectedTab === "Shipping & Return Policy" ? "active" : ""
            }`}
            onClick={() => handleTabClick("Shipping & Return Policy")}
          >
            배송 및 반품정책
          </div>
          <div
            className={`tab-box-inner ${
              selectedTab === "Sales proceeds" ? "active" : ""
            }`}
            onClick={() => handleTabClick("Sales proceeds")}
          >
            판매 수익금
          </div>
        </div>
      </nav>
      <div className="tab-text">{displayText}</div>
    </div>
  );
}

export default DetailTab;