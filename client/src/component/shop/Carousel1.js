
function Carousel1() {
    return (
      <div className="main-box">
        <img
          className="main-bg"
          src={process.env.PUBLIC_URL + "/goods_image/main1.jpg"}
        />
        <div className="text-box">
          <h3 className="puobaotext">Puobao</h3>
          <h1 className="puobaotext2">GOODS RELEASE</h1>
        </div>
      </div>
    );
  }
  export default Carousel1;