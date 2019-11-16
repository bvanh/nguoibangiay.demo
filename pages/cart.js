import React from "react";
import Head from "next/head";
import Layout from "./layout";
import Link from "next/link";
import url from "../components/link-data";
import { connect } from "react-redux";
import {
  Row,
  Col,
  InputGroupAddon,
  InputGroup,
  Input,
  Button
} from "reactstrap";
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // ten: "",
      // img: "",
      // soluong: 0,
      // gia: 0
    };
  }
  // async componentDidMount() {
  //   await fetch(`${url}sanphammoi/1`)
  //     .then(result => {
  //       return result.json();
  //     })
  //     .then(db =>
  //       this.setState({
  //         ten: db.ten,
  //         img: db.src,
  //         soluong: db.quantity,
  //         gia: db.gia
  //       })
  //     );
  // }
  render() {
    // const { ten, img, soluong, gia } = this.state;
    const { dataCart } = this.props.db.cart;
    const printProduct = dataCart.map((data, index) => (
      <tr>
        <td style={{ width: "50%" }}>
          <img
            src="../static/img/trash.png"
            style={{ width: "6%", paddingRight: ".3rem" }}
          />
          <img src={data.src} style={{ width: "30%" }} />
          <span id="name">{data.ten}</span>
        </td>
        <td id="demo">
          <span>{data.gia}</span>
        </td>
        <td>
          <div id="checksize">
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <Button color="danger">-</Button>
              </InputGroupAddon>
              <Input defaultValue="1" />
              <InputGroupAddon addonType="append">
                <Button color="success">+</Button>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </td>
        <td style={{ textAlign: "right" }}>1000000</td>
      </tr>
    ));
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="./static/style-header.css" />
          <link rel="stylesheet" href="./static/style-footer.css" />
          <link rel="stylesheet" href="./static/style-cart.css" />
          <title>Products/Cart</title>
        </Head>
        <Layout>
          <div id="layout">
            <div id="breadcrumb-header">
              <div id="breadcrumb">
                <Link href="/">
                  <a>TRANG CHỦ</a>
                </Link>
                <span className="divider">/</span>
                <span>SHOES</span>
                <span className="divider">/</span>
                <span>CART</span>
              </div>
            </div>
            <Row>
              <Col lg="7">
                <table>
                  <thead>
                    <tr>
                      <th>Sản phẩm</th>
                      <th>Giá</th>
                      <th>Số lượng</th>
                      <th style={{ textAlign: "right" }}>Tổng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {printProduct}
                  </tbody>
                </table>
              </Col>
              <Col lg="5">
                <table>
                  <thead>
                    <tr>
                      <th>Tổng số lượng</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tổng phụ</td>
                      <td className="listright">
                        <span>{gia}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Khuyễn mãi</td>
                      <td className="listright">
                        <span>0</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Giao hàng</td>
                      <td className="listright">
                        <span>Miễn phí toàn quốc</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Tổng</td>
                      <td className="listright">
                        <span>0</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Button color="success" id="btn-appcode">
                          ÁP DỤNG
                        </Button>
                      </td>
                      <td className="listright">
                        <span>
                          <Input placeholder="NHẬP MÃ KHUYẾN MÃI"></Input>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Link href="/thanhtoan">
                  <Button color="danger" id="btn-thanhtoan">
                    TIẾN HÀNH THANH TOÁN
                  </Button>
                </Link>
              </Col>
            </Row>
          </div>
        </Layout>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  db: state
});

export default connect(mapStateToProps, null)(Cart);
