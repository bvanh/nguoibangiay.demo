import React from "react";
import Head from "next/head";
import Layout from "./layout";
import Link from "next/link";
import { connect } from "react-redux";
import { deleteProducts } from "./actions/index";
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
      dataCart: this.props.db.cart,
      numberPerProduct: []
    };
  }
  thaydoiSoluong = (index, isWhat) => {
    let newNumberProduct = this.state.numberPerProduct;
    if (isWhat === "isTang" && newNumberProduct[index] < 9) {
      newNumberProduct[index]++;
    } else if (isWhat === "isGiam" && newNumberProduct[index] > 1) {
      newNumberProduct[index]--;
    }
    this.setState({
      numberPerProduct: newNumberProduct
    });
  };
  nhapSoluong = (i, val) => {
    let x = parseInt(val);
    const newNumberProduct = this.state.numberPerProduct;
    if (x > 0 && x < 10) {
      newNumberProduct[i] = x;
    }
    this.setState({
      numberPerProduct: newNumberProduct
    });
  };
  render() {
    const { dataCart, numberPerProduct } = this.state;
    const bindCart = dataCart.filter(
      (data, index) => dataCart.indexOf(data) === index
    );
    let count = 1;
    for (let i = 0; i < dataCart.length; i += count) {
      count = 1;
      for (let j = i + 1; j < dataCart.length; j++) {
        if (dataCart[i] === dataCart[j]) {
          count++;
        }
      }
      numberPerProduct.push(count);
    }

    let totalPrice = 0;
    const printProduct = [];
    for (let i = 0; i < bindCart.length; i++) {
      const data = bindCart[i];
      totalPrice += data.gia * numberPerProduct[i];
      printProduct.push(
        <tr key={i}>
          <td style={{ width: "50%" }}>
            <img
              src="../static/img/trash.png"
              style={{ width: "6%", paddingRight: ".3rem", cursor: "pointer" }}
              onClick={deleteProducts.bind(this, data)}
            />
            <img src={data.src} style={{ width: "30%" }} />
            <span id="name">{data.ten}</span>
          </td>
          <td id="demo">
            <span>{data.gia.toLocaleString()} đ</span>
          </td>
          <td>
            <div id="checksize">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <Button
                    color="danger"
                    onClick={() => this.thaydoiSoluong(i, "isGiam")}
                  >
                    -
                  </Button>
                </InputGroupAddon>
                <Input
                  value={numberPerProduct[i]}
                  onChange={() => this.nhapSoluong(i, event.target.value)}
                />
                <InputGroupAddon addonType="append">
                  <Button
                    color="success"
                    onClick={() => this.thaydoiSoluong(i, "isTang")}
                  >
                    +
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </td>
          <td style={{ textAlign: "right" }}>
            {(numberPerProduct[i] * data.gia).toLocaleString()} đ
          </td>
        </tr>
      );
    }
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
                  <tbody>{printProduct}</tbody>
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
                      <td style={{ paddingTop: "1rem", paddingBottom: "0" }}>
                        Tổng phụ
                      </td>
                      <td
                        className="listright"
                        style={{ paddingTop: "1rem", paddingBottom: "0" }}
                      >
                        {totalPrice.toLocaleString()} đ
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
                <Link href={{ pathname: '/thanhtoan', query:numberPerProduct }}>
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
