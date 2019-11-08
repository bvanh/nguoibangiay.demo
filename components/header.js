import React, { Component } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "mobilenav"
    };
  }
  showSidebar() {
    this.setState({
      status: "showmobilenav"
    });
    console.log("ok");
  }
  hideSidebar() {
    this.setState({
      status: "mobilenav"
    });
  }
  render() {
    return (
      <header>
        <div className="header">
          <span className="login">ĐĂNG NHẬP/ ĐĂNG KÝ</span>
          <img
            className="show-sidebar"
            src="./static/img/show-sidebar.png"
            onClick={this.showSidebar.bind(this)}
            width="40"
            height="30"
          />
          <img src="./static/img/snickers-3-logo.png" className="logo" />
          <div className="cart">
            <span className="search">
              <img className="icon" src="./static/img/search_icon.png" />
              Giỏ hàng
            </span>
            <img
              className="icon"
              src="./static/img/shopping_cart_icon.png"
              width="40"
              height="30"
            />
          </div>
        </div>
        <ul className="menubar">
          <li>
            <a>Trang Chủ</a>
          </li>
          <li>
            <a>Giới Thiệu</a>
          </li>
          <li className="menu">
            <a> Giày Nữ</a>
            <div className="sub-menu">
              <ul>
                <li className="sub-menu1">Classic</li>
                <li className="sub-menu1">One star</li>
                <li className="sub-menu1">Chuck 07</li>
              </ul>
            </div>
          </li>
          <li className="menu">
            <a>Giày Nam</a>
            <div className="sub-menu">
              <ul>
                <li className="sub-menu1">Classic</li>
                <li className="sub-menu1">One star</li>
                <li className="sub-menu1">Chuck 07</li>
              </ul>
            </div>
          </li>
          <li>
            <a>Liên Hệ</a>
          </li>
          <li>
            <a>Tin Tức</a>
          </li>
        </ul>
        <div className={this.state.status}>
          <ul className="mobilenav1">
            <img
              className="hide-sidebar"
              src="./static/img/hide-sidebar.png"
              onClick={this.hideSidebar.bind(this)}
            />
            <InputGroup>
              <Input placeholder="Tìm kiếm" />
            </InputGroup>
            <li>
              <a>Trang Chủ</a>
            </li>
            <li>
              <a>Giới Thiệu</a>
            </li>
            <li className="menu-mobile">
              <a>
                Giày Nữ <b />
                <img src="./static/img/arrow-down.png" width="15" height="7" />
              </a>
              <div className="sub-menu2">
                <ul>
                  <li className="sub-menu1">Classic</li>
                  <li className="sub-menu1">One star</li>
                  <li className="sub-menu1">Chuck 07</li>
                </ul>
              </div>
            </li>
            <li className="menu-mobile">
              <a>
                Giày Nam <b />
                <img src="./static/img/arrow-down.png" width="15" height="7" />
              </a>
              <div className="sub-menu2">
                <ul>
                  <li className="sub-menu1">Classic</li>
                  <li className="sub-menu1">One star</li>
                  <li className="sub-menu1">Chuck 07</li>
                </ul>
              </div>
            </li>
            <li>
              <a>Liên Hệ</a>
            </li>
            <li>
              <a>Tin Tức</a>
            </li>
            <li>
              <a>Đăng Nhập</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
