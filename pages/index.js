import Head from "next/head";
import Header from "../components/header";
import SimpleSlider from "../components/carousel-banner";
import { Container, Row, Col } from "reactstrap";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
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
        <Row className="section1">
          <Col xs="6" lg="4">
            <div className="block">
              <span>
                <img src="./static/img/title_block_1.png" />
                <div className="section-block1">
                  <button className="view-btn">Xem sản phẩm</button>
                </div>
              </span>
            </div>
          </Col>
          <Col xs="6" lg="4">
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
      </div>
    );
  }
}
export default Index;
