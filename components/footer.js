import React from "react";
import { Row, Col } from "reactstrap";

export default function Footer(props) {
  return (
    <Row id='footer'>
      <Col lg="3"sm='6'className='items-footer'>
        <h3>GIỚI THIỆU</h3>
        <p>
          Chào mừng bạn đến với ngôi nhà Converse! Tại đây, mỗi một dòng chữ,
          mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử
          Converse 100 năm, và đang không ngừng phát triển lớn mạnh.
        </p>
      </Col>
      <Col lg="3"sm='6'className='items-footer'>
        <h3>ĐỊA CHỈ</h3>
        <ul>
            <li><a>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</a></li>
            <li><a>076 922 0162</a></li>
            <li><a>demonhunterg@gmail.com</a></li>
        </ul>
      </Col>
      <Col lg="3"sm='6'className='items-footer'>
        <h3>MENU</h3>
        <ul id='menu'>
            <li><a>Trang chủ</a></li>
            <li><a>Giới thiệu</a></li>
            <li><a>Cửa hàng</a></li>
        </ul>
      </Col>
      <Col lg="3"sm='6'className='items-footer'>
        <h3>MẠNG XÃ HỘI</h3>
        <img id='social'src='../static/img/sanphammoi/social-media-icons.png'></img>
      </Col>
    </Row>
  );
}
