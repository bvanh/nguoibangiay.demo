import React, { Component } from "react";
import Slider from "react-slick";
import url from "../link-data";

export default class Showproduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dbnewproduct: [],
      dbbestsell: [],
      show: true,
      color:''
    };
  }
  componentDidMount() {
    // get data sanphammoi
    fetch(`${url}sanphammoi`)
      .then(result => {
        return result.json();
      })
      .then(data =>
        this.setState({
          dbnewproduct: data
        })
      );
    // get data sanphambanchay
    fetch(`${url}sanphambanchay`)
      .then(result => {
        return result.json();
      })
      .then(data =>
        this.setState({
          dbbestsell: data
        })
      );
  }
  show = () => {
    this.setState({
      show: false,
    });
  };
  show1 = () => {
    this.setState({
      show: true,
    });
  };
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const { dbnewproduct, dbbestsell, show,color } = this.state;
    const listnewproduct = dbnewproduct.map((demo, index) => (
      <div key={index} className="sanphammoi">
        <img src={demo.src} className="item-sanphammoi" />
        <br />
        <span className="name">{demo.ten}</span>
        <br />
        <span className="gia">{demo.gia.toLocaleString()} đ</span>
        <br />
        <button className="addcart">Thêm vào giỏ</button>
      </div>
    ));
    const listbestsell = dbbestsell.map((demo, index) => (
      <div key={index} className="sanphammoi">
        <img src={demo.src} className="item-sanphammoi" />
        <br />
        <span className="name">{demo.ten}</span>
        <br />
        <span className="gia">{demo.gia.toLocaleString()} đ</span>
        <br />
        <button className="addcart">Thêm vào giỏ</button>
      </div>
    ));
    return (
      <div>
        <div className="category">
          <button className="btn-category" id={color} onClick={this.show1}>
            SẢN PHẨM MỚI NHẤT
          </button>
          <button className="btn-category" id={color} onClick={this.show}>
            SẢN PHẨM BÁN CHẠY
          </button>
          <button className="btn-category" id={color} onClick={this.show1}>
            SẢN PHẨM PHỔ BIẾN
          </button>
        </div>
        {show ? (
          <Slider {...settings}>{listnewproduct}</Slider>
        ) : (
          <Slider {...settings}>{listbestsell}</Slider>
        )}
      </div>
    );
  }
}
