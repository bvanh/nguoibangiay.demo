import Head from "next/head";
import Layout from "./layout";
import { connect } from "react-redux";
import SimpleSlider from "../components/carousel/carousel-banner";
import url from "../components/link-data";
import { Row, Col } from "reactstrap";
import { dispatchAddToCart } from "./actions/index";
import Showproduct from "../components/carousel/carousel-sanphammoi";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this;
    this.state = {
      dataphukien: [],
      datakhuyenmai: []
    };
  }
  componentDidMount() {
    // get data phukien
    fetch(`${url}phukien`)
      .then(result => {
        return result.json();
      })
      .then(data =>
        this.setState({
          dataphukien: data
        })
      );
    // get data khuyen mai
    fetch(`${url}khuyenmai`)
      .then(result => {
        return result.json();
      })
      .then(data =>
        this.setState({
          datakhuyenmai: data
        })
      );
  }
  componentDidUpdate() {
    console.log(this.props.db);
  }
  render() {
    const { dataphukien, datakhuyenmai } = this.state;
    const listphukien = dataphukien.map((data, index) => (
      <Col xs="6" sm="4" lg="3" key={index} className="phukien">
        <div>
          <img src={data.src} className="img-phukien" />
          <br />
          <span className="name">{data.ten}</span>
          <br />
          <span className="gia">{data.gia.toLocaleString()} đ</span>
          <br />
          {/* <button
          className="addcart add2"
          key="btn-1"
          onClick={dispatchBtnAction.bind(this, data)}
          cách 2 // onClick={(e)=>dispatchBtnAction(data,e)}
        >
          Thêm vào giỏ
        </button> */}
          <div className="addcart" onClick={e => dispatchAddToCart(data, e)}>
            <button>THÊM VÀO GIỎ</button>
          </div>
        </div>
      </Col>
    ));
    const listkhuyenmai = datakhuyenmai.map((data, index) => (
      <Col xs="6" sm="4" lg="3" key={index} className="phukien">
        <div>
          <img src={data.src} className="img-phukien" />
          <br />
          <span className="name">{data.ten}</span>
          <br />
          <span className="gia">
            <strike style={{ opacity: ".7" }}>
              {data.gia.toLocaleString()} đ
            </strike>
          </span>
          <span className="gia">
            {((data.gia * 70) / 100).toLocaleString()} đ
          </span>
          <br />
          <div className="addcart" onClick={e => dispatchAddToCart(data, e)}>
            <button>THÊM VÀO GIỎ</button>
          </div>
          <div className="callout badge badge-circle">
            <div className="badge-inner secondary on-sale">
              <span className="onsale">-30%</span>
            </div>
          </div>
        </div>
      </Col>
    ));
    return (
      <div id="hompage">
        <Head>
          <link rel="stylesheet" href="./static/style-header.css" />
          <link rel="stylesheet" href="./static/style-footer.css" />
          <link rel="stylesheet" href="./static/style-banner.css" />
          <link rel="stylesheet" href="./static/style-section.css" />
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <title>nguoibangiay.demo</title>
        </Head>
        <Layout>
          <SimpleSlider />
          {/* section */}
          <Row className="section1">
            <Col lg="4">
              <div className="block">
                <span>
                  <img src="./static/img/title_block_1.png" />
                  <div className="section-block1">
                    <button className="view-btn">Xem sản phẩm</button>
                  </div>
                </span>
              </div>
            </Col>
            <Col lg="4">
              <div className="block">
                <span>
                  <img src="./static/img/title_block_2.png" />
                  <div className="section-block2">
                    <button className="view-btn">Xem sản phẩm</button>
                  </div>
                </span>
              </div>
            </Col>
            <Col lg="4">
              <div className="block">
                <span>
                  <img src="./static/img/title_block_3.png" />
                  <div className="section-block3">
                    <button className="view-btn">Xem sản phẩm</button>
                  </div>
                </span>
              </div>
            </Col>
          </Row>
          {/* section2-sanphammoi */}
          <Showproduct
            addToCart={dispatchAddToCart.bind(this)}
            // cach 2 addToCart={(e)=>dispatchBtnAction.bind(this,e)}
          />
          {/* section3-phukien */}
          <div className="section3">
            <button className="title-phukien">SẢN PHẨM PHỤ KIỆN</button>
          </div>
          <Row className="section-phukien">{listphukien}</Row>
          <button className="btn-viewall">XEM TẤT CẢ</button>
          <div className="banner-sale">
            <div className="sale">
              <h5>MY SNICKERS</h5>
              <h1>
                KHUYẾN MÃI <span style={{ color: "yellow" }}>GIẢM GIÁ 50%</span>
              </h1>
              <button className="btn-viewall">XEM SẢN PHẨM</button>
            </div>
          </div>
          <div className="section3">
            <button className="title-phukien">SẢN PHẨM GIẢM GIÁ</button>
          </div>
          <Row className="section-phukien">{listkhuyenmai}</Row>
        </Layout>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  db: state
});

export default connect(mapStateToProps, null)(Homepage);
