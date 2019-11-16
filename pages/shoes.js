import React from "react";
import Head from "next/head";
import Layout from "./layout";
import Link from "next/link";
import url from "../components/link-data";
import { dispatchAddToCart } from "./actions/index";
import {
  Row,
  Col,
  CustomInput,
  Button,
  FormGroup,
  Label,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Shoes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      allproducts: [],
      allproductspage1: [],
      page: 1,
      customRange: 1000000,
      datakhuyenmai: [],
      datatintuc: [],
      btnactive1: true,
      btnactive2: false
    };
  }
  componentDidMount() {
    const dataproducts = [];
    // get data all products
    fetch(`${url}sanphammoi?_page=${this.state.page}&_limit=4`)
      .then(result => {
        return result.json();
      })
      .then(db => db.map(data => dataproducts.push(data)));
    fetch(`${url}sanphambanchay?_page=${this.state.page}&_limit=8`)
      .then(result => {
        return result.json();
      })
      .then(db => db.map(data => dataproducts.push(data)));
    // end
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
    this.setState({
      allproducts: dataproducts,
      allproductspage1: dataproducts
    });
  }
  toggle = () =>
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  customrange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  goPage = () => {
    fetch(`${url}sanphammoi?_page=2&_limit=4`)
      .then(result => {
        return result.json();
      })
      .then(db =>
        this.setState({
          page: 2,
          btnactive1: false,
          btnactive2: true,
          allproducts: db
        })
      );
  };
  goPage1 = () => {
    this.setState({
      allproducts: this.state.allproductspage1,
      btnactive1: true,
      btnactive2: false
    });
  };
  render() {
    const {
      dropdownOpen,
      allproducts,
      customRange,
      datakhuyenmai,
      datatintuc,
      btnactive1,
      btnactive2
    } = this.state;
    const listallproducts = allproducts.map((data, index) => (
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
            onClick={dispatchAddToCart.bind(this, data)}
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
                <p id="hienthiketqua">Hiển thị...trong...kết quả</p>
                <Dropdown isOpen={dropdownOpen} onClick={this.toggle}>
                  <DropdownToggle caret>Thứ tự mặc định</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Mới nhất</DropdownItem>
                    <DropdownItem>Thứ tự theo điểm đánh giá</DropdownItem>
                    <DropdownItem>Thứ tự theo giá: Thấp => Cao </DropdownItem>
                    <DropdownItem>Thứ tự theo giá: Cao => Thấp </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            <Row>
              <Col lg="3" id="sidebar">
                <h6>LỌC THEO GIÁ</h6>
                <FormGroup>
                  <CustomInput
                    type="range"
                    id="exampleCustomRange"
                    name="customRange"
                    value={customRange}
                    min="500"
                    max="2000000"
                    onChange={this.customrange}
                  />
                  <Label for="exampleCustomRange">
                    {customRange.toLocaleString()} đ
                    <Button color="secondary" size="sm">
                      Lọc
                    </Button>
                  </Label>
                </FormGroup>
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
                  <Pagination className="Pagenavigationexample">
                    <PaginationItem disabled>
                      <PaginationLink previous href="#" />
                    </PaginationItem>
                    <PaginationItem active={btnactive1} onClick={this.goPage1}>
                      <PaginationLink>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem active={btnactive2} onClick={this.goPage}>
                      <PaginationLink>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink next href="#" />
                    </PaginationItem>
                  </Pagination>
                </Row>
              </Col>
            </Row>
          </div>
        </Layout>
      </div>
    );
  }
}

export default Shoes;
