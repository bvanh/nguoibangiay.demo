import React from "react";
import Head from "next/head";
import Layout from "./layout";
import Link from "next/link";
import url from "../components/link-data";
import fetch from "isomorphic-unfetch";
import Phantrang from "../components/phantrang";
import {
  dispatchAddToCart,
  dispatchShowProducts,
  dispatchSort
} from "./actions/index";
import { connect } from "react-redux";
import { Row, Col, Media } from "reactstrap";
import FilterToOrder from "../components/filter";
import FilterforPrice from "../components/filterPrice";

class Shoes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allproducts: [],
      allproductspage1: [],
      customRange: 1000000,
      datakhuyenmai: [],
      datatintuc: []
    };
  }
  componentDidMount() {
    // get data product sale-off sidebar
    fetch(`${url}khuyenmai?_start=0&_limit=5`)
      .then(result => {
        return result.json();
      })
      .then(db =>
        this.setState({
          datakhuyenmai: db
        })
      );
    // end
    // get data tintuc
    fetch(`${url}tintuc`)
      .then(result => {
        return result.json();
      })
      .then(db =>
        this.setState({
          datatintuc: db
        })
      );
  }
  render() {
    const { datakhuyenmai, datatintuc } = this.state;
    const {
      currentPage,
      products,
      totalItems,
      limit,
      sort,
      order
    } = this.props;
    const numberProducts = products.length;
    const listallproducts = products.map((data, index) => (
      <Col xs="6" sm="4" lg="3" key={index}>
        <div className="products">
          <Link href="/detail">
            <img src={data.src} className="img-products" />
          </Link>
          <br />
          <span className="name">{data.ten}</span>
          <br />
          <span className="gia">{data.gia.toLocaleString()} đ</span>
          <br />
          <button
            className="addcart"
            onClick={dispatchAddToCart.bind(this,data)}
            disabled={data.statusAddToCart}
          >
            Thêm vào giỏ
          </button>
        </div>
      </Col>
    ));
    const listkhuyenmai = datakhuyenmai.map((data, index) => (
      <Col lg="12" key={index} className="sidebar-khuyenmai">
        <Media>
          <Media left href="#">
            <img src={data.src} alt={data.ten} className="thumbnail" />
          </Media>
          <Media body>
            <span className="name">{data.ten}</span>
            <span className="gia">
              {((data.gia * 70) / 100).toLocaleString()} đ
            </span>
          </Media>
        </Media>
      </Col>
    ));
    const listtintuc = datatintuc.map((data, index) => (
      <Col lg="12" key={index} className="sidebar-khuyenmai">
        <Media>
          <Media left href="#" className="img-tintuc">
            <img src={data.src} alt={data.ten} className="thumbnail-tintuc" />
          </Media>
          <Media body>
            <span className="title-tintuc">{data.title}</span>
          </Media>
        </Media>
      </Col>
    ));
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="./static/style-header.css" />
          <link rel="stylesheet" href="./static/style-footer.css" />
          <link rel="stylesheet" href="./static/style-shoes.css" />
          <title>Shoes</title>
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
              </div>
              <div id="sort">
                <p id="hienthiketqua">
                  Hiển thị <b>{numberProducts}</b> trong <b>{totalItems}</b> sản phẩm
                </p>
                <FilterToOrder />
              </div>
            </div>
            <Row>
              <Col lg="3" id="sidebar">
                <h6>LỌC THEO GIÁ</h6>
                <FilterforPrice />
                <h6>KHUYỄN MÃI</h6>
                {listkhuyenmai}
                <h6 style={{ padding: "1.5rem 0 .7rem 0", margin: "0" }}>
                  TIN TỨC
                </h6>
                {listtintuc}
              </Col>
              <Col lg="9" id="products">
                <Row>
                  {listallproducts}
                  <Phantrang
                    totalItems={totalItems}
                    currentPage={currentPage}
                    numberItemsPerPage={limit}
                    sort={sort}
                    order={order}
                  />
                </Row>
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

Shoes.getInitialProps = async function({ query }) {
  const page = query.page || 1;
  const limit = 12;
  const sort = query.sort || "id";
  const order = query.order || "asc";
  const gialess = query.gia_lte || 5000000;
  const res = await fetch(
    `${url}tatcasanpham?_sort=${sort}&_order=${order}&_page=${page}&_limit=${limit}&gia_lte=${gialess}`
  );
  const data = await res.json();

  return {
    products: data,
    totalItems: res.headers.get("X-Total-Count"),
    currentPage: page,
    limit: limit,
    sort: sort,
    order: order
  };
};
export default connect(mapStateToProps, null)(Shoes);
