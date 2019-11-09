import Head from "next/head";
import Header from "../components/header";
import SimpleSlider from "../components/carousel/carousel-banner";
import url from "../components/link-data";
import { Row, Col } from "reactstrap";
import Showproduct from "../components/carousel/carousel-sanphammoi";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phukien: []
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
          phukien: data
        })
      );
  }
  render() {
    const { phukien } = this.state;
    const listphukien = phukien.map((data, index) => (
      <Col lg="3" key={index}>
        <img src={data.src} className="img-phukien" />
        <br />
        <span className="name">{data.ten}</span>
        <br />
        <span className="gia">{data.gia.toLocaleString()} đ</span>
        <br />
        <button className="addcart">Thêm vào giỏ</button>
      </Col>
    ));
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="./static/style-header.css" />
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
        <Header />
        <SimpleSlider />
        {/* section1 */}
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
        <Showproduct />
        {/* section3-phukien */}
        <Row id='section-phukien'>
          {listphukien}
        </Row>
      </div>
    );
  }
}
export default Index;
