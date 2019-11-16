import React from "react";
import Head from "next/head";
import Layout from "./layout";
import Link from "next/link";
import url from "../components/link-data";
import classnames from "classnames";
import {
  Row,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Table,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import Slider from "react-slick";

class Detailproducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      dataimg: [],
      name: "",
      gia: "",
      size: [],
      defaultsize: [],
      modal: false,
      activeTab: "1"
    };
  }
  async componentDidMount() {
    await fetch(`${url}sanphammoi/1`)
      .then(result => {
        return result.json();
      })
      .then(db =>
        this.setState({
          nav1: this.slider1,
          nav2: this.slider2,
          name: db.ten,
          dataimg: db.imgdetail,
          gia: db.gia,
          size: db.size,
          defaultsize: db.size
        })
      );
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  showtab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };
  render() {
    const settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000
    };

    const { name, gia, dataimg, nav2, modal, activeTab, size } = this.state;
    const mainimg = dataimg.map((data, index) => (
      <div key={index} className="main-thumbnail">
        <img src={data} className="main-img" />
      </div>
    ));
    const subImg = dataimg.map((data, index) => (
      <div key={index}>
        <img src={data} className="main-img" />
      </div>
    ));
    const listSize = size.map((data, index) => (
      <React.Fragment key={index}>
        <input type="radio" id={"checkbox" + index} name="size"></input>
        <label htmlFor={"checkbox" + index}>{data.sizenumber}</label>
      </React.Fragment>
    ));
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="./static/style-header.css" />
          <link rel="stylesheet" href="./static/style-footer.css" />
          <link rel="stylesheet" href="./static/style-detail.css" />
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
          <title>Products-detail</title>
        </Head>
        <Layout>
          <div id="layout">
            <Row>
              <Col sm="6">
                <Slider
                  asNavFor={nav2}
                  ref={slider => (this.slider1 = slider)}
                  {...settings}
                >
                  {mainimg}
                </Slider>
                <Slider
                  asNavFor={this.state.nav1}
                  ref={slider => (this.slider2 = slider)}
                  slidesToShow={5}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  {subImg}
                </Slider>
              </Col>
              <Col sm="6">
                <div id="breadcrumb">
                  <Link href="/">
                    <a>TRANG CHỦ</a>
                  </Link>
                  <span className="divider">/</span>
                  <Link href="/shoes">
                    <a>SHOES</a>
                  </Link>
                  <span className="divider">/</span>
                  <span>CHUCK ITEMS</span>
                </div>
                <div className="infor">
                  <h2>{name}</h2>
                  <p
                    style={{
                      fontSize: ".7rem",
                      color: "#695e5e",
                      margin: "0 !important"
                    }}
                  >
                    Mã :123456
                  </p>
                  <span></span>
                  <p>{gia.toLocaleString()} đ</p>
                  <div id="addcart-gr">
                    <span>SỐ LƯỢNG</span>
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
                    {/* <div id="showsize">
                      SIZE
                      <div id="show">
                        <div>38.5</div>
                      </div>
                    </div> */}
                    <span>CHỌN SIZE</span>
                    <span id="bangsize" onClick={this.toggle}>
                      Xem bảng size
                    </span>
                    <Modal
                      isOpen={modal}
                      toggle={this.toggle}
                      className="modal-on"
                    >
                      <ModalHeader toggle={this.toggle}>Bảng size</ModalHeader>
                      <ModalBody>
                        <Table>
                          <thead>
                            <tr>
                              <th>CM</th>
                              <th>VN/EU</th>
                              <th>US</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>38.5</td>
                              <td>6</td>
                              <td>23.7</td>
                            </tr>

                            <tr>
                              <td>39</td>
                              <td>6.5</td>
                              <td>24.1</td>
                            </tr>

                            <tr>
                              <td>40</td>
                              <td>7</td>
                              <td>24.5</td>
                            </tr>

                            <tr>
                              <td>40.5</td>
                              <td>7.5</td>
                              <td>25</td>
                            </tr>

                            <tr>
                              <td>41</td>
                              <td>8</td>
                              <td>25.4</td>
                            </tr>

                            <tr>
                              <td>42</td>
                              <td>8.5</td>
                              <td>25.8</td>
                            </tr>

                            <tr>
                              <td>42.5</td>
                              <td>9</td>
                              <td>26.2</td>
                            </tr>

                            <tr>
                              <td>43</td>
                              <td>9.5</td>
                              <td>26.7</td>
                            </tr>

                            <tr>
                              <td>44</td>
                              <td>10</td>
                              <td>27.1</td>
                            </tr>

                            <tr>
                              <td>44.5</td>
                              <td>10.5</td>
                              <td>27.5</td>
                            </tr>

                            <tr>
                              <td>45</td>
                              <td>11</td>
                              <td>27.9</td>
                            </tr>

                            <tr>
                              <td>45.5</td>
                              <td>11.5</td>
                              <td>28.3</td>
                            </tr>

                            <tr>
                              <td>46</td>
                              <td>12</td>
                              <td>28.8</td>
                            </tr>

                            <tr>
                              <td>47</td>
                              <td>12.5</td>
                              <td>29.2</td>
                            </tr>

                            <tr>
                              <td>47.5</td>
                              <td>13</td>
                              <td>29.6</td>
                            </tr>

                            <tr>
                              <td>48</td>
                              <td>13.5</td>
                              <td>30</td>
                            </tr>

                            <tr>
                              <td>48.5</td>
                              <td>14</td>
                              <td>30.5</td>
                            </tr>

                            <tr>
                              <td>49.5</td>
                              <td>15</td>
                              <td>31.3</td>
                            </tr>

                            <tr>
                              <td>50.5</td>
                              <td>16</td>
                              <td>32.2</td>
                            </tr>

                            <tr>
                              <td>51.5</td>
                              <td>17</td>
                              <td>33</td>
                            </tr>
                          </tbody>
                        </Table>
                      </ModalBody>
                    </Modal>
                    <div className="size">{listSize}</div>
                    <br />
                    <Button id="addcart">THÊM VÀO GIỎ</Button>
                  </div>
                </div>
              </Col>
            </Row>
            <hr />
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    this.showtab("1");
                  }}
                >
                  THÔNG TIN BỔ SUNG
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    this.showtab("2");
                  }}
                >
                  ĐÁNH GIÁ
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12" className="tab">
                    <Table>
                      <thead>
                        <tr></tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">SKU</th>
                          <td>163406C</td>
                        </tr>
                        <tr>
                          <th scope="row">CHẤT LIỆU</th>
                          <td>Textile</td>
                        </tr>
                        <tr>
                          <th scope="row">GIỚI TÍNH</th>

                          <td>Women</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <span>Chưa có đánh giá</span>
              </TabPane>
            </TabContent>
          </div>
        </Layout>
      </div>
    );
  }
}

export default Detailproducts;
