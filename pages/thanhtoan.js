import React from "react";
import Head from "next/head";
import Layout from "./layout";
import Link from "next/link";
import url from "../components/link-data";
import {
  Row,
  Col,
  Input,
  Button,
  Form,
  FormGroup,
  Label,CustomInput
} from "reactstrap";

class Thanhtoan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="./static/style-header.css" />
          <link rel="stylesheet" href="./static/style-footer.css" />
          <link rel="stylesheet" href="./static/style-thanhtoan.css" />
          <title>Products/Thanhtoan</title>
        </Head>
        <Layout>
          <div id="layout">
            <div id="breadcrumb">
              <Link href="/">
                <a>TRANG CHỦ</a>
              </Link>
              <span className="divider">/</span>
              <span>SHOES</span>
              <span className="divider">/</span>
              <span>CART</span>
              <span className="divider">/</span>
              <span>THANH TOÁN</span>
            </div>
            <Row>
              <Col md="6"className='al'>
                THÔNG TIN THANH TOÁN
                <Form>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleEmail">HỌ</Label>
                        <Input
                          type="text"
                          name="email"
                          id="exampleEmail"
                          placeholder="Nhập họ..."
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="examplePassword">Tên</Label>
                        <Input
                          type="text"
                          name="password"
                          id="examplePassword"
                          placeholder="Nhập tên..."
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Label for="exampleAddress">Số điện thoại</Label>
                    <Input
                      type="text"
                      name="address"
                      id="exampleAddress"
                      placeholder="Nhập số điện thoại..."
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleAddress2">Email</Label>
                    <Input
                      type="email"
                      name="address2"
                      id="exampleAddress2"
                      placeholder="Nhập email..."
                    />
                  </FormGroup>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleCity">Tỉnh/ Thành phố</Label>
                        <Input type="text" name="city" id="exampleCity" />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="exampleState">Quận/ Huyện</Label>
                        <Input type="text" name="state" id="exampleState" />
                      </FormGroup>
                    </Col>
                    <Col md={2}>
                      <FormGroup>
                        <Label for="exampleZip">Xã</Label>
                        <Input type="text" name="zip" id="exampleZip" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </Col>
              <Col md="6" id='checkout'className='al'>
                ĐƠN HÀNG CỦA BẠN
                <table>
                  <thead>
                    <tr>
                      <th>Sản phẩm</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tổng phụ</td>
                      <td className="listright">
                        <span></span>
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
                        <FormGroup check>
                          <CustomInput
                            type="radio"
                            id="exampleCustomRadio"
                            name="customRadio"
                            label="Trả tiền mặt khi nhận hàng"
                          />
                          <CustomInput
                            type="radio"
                            id="exampleCustomRadio2"
                            name="customRadio"
                            label="Chuyển khoản ngân hàng"
                          />
                        </FormGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Button color="success" id="btn-appcode">
                          ĐẶT HÀNG
                        </Button>
                      </td>
                      <td className="listright"></td>
                    </tr>
                  </tbody>
                </table>
              </Col>
            </Row>
          </div>
        </Layout>
      </div>
    );
  }
}

export default Thanhtoan;
