import React, { Component } from "react";
import Slider from "react-slick";
import url from "./link-data";
import { connect } from "react-redux";
import { dispatchAddToCart,dispatchNewProducts, dispatchBestSell } from "../pages/actions/index";

class Showproduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      color: "",
      tooltipOpen: false
    };
  }
  componentDidMount() {
    // get data sanphammoi
    fetch(`${url}sanphammoi`)
      .then(result => {
        return result.json();
      })
      .then(data =>dispatchNewProducts(data)
      );
    // get data sanphambanchay
    fetch(`${url}sanphambanchay`)
      .then(result => {
        return result.json();
      })
      .then(data =>dispatchBestSell(data)
      );
  }
  toggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  };
  show = () => {
    this.setState({
      show: false
    });
  };
  show1 = () => {
    this.setState({
      show: true
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
    const {show } = this.state;
    const dbbestsell=this.props.db.sanphambanchay;
    const dbnewproduct=this.props.db.sanphammoi;
    const listnewproduct = dbnewproduct.map((demo, index) => (
      <div key={index} className="sanphammoi">
        <div>
          <img src={demo.src} className="item-sanphammoi" />
          <br />
          <span className="name">{demo.ten}</span>
          <br />
          <span className="gia">{demo.gia.toLocaleString()} đ</span>
          <br />
          <div
            className="addcart"
            onClick={() => dispatchAddToCart(demo, index)}
          >
            <button disabled={demo.statusAddToCart}>THÊM VÀO GIỎ</button>
          </div>
        </div>
      </div>
    ));
    const listbestsell = dbbestsell.map((demo, index) => (
      <div key={index} className="sanphammoi">
        <div>
          <img src={demo.src} className="item-sanphammoi" />
          <br />
          <span className="name">{demo.ten}</span>
          <br />
          <span className="gia">{demo.gia.toLocaleString()} đ</span>
          <br />
          <div
            className="addcart"
            onClick={() =>dispatchAddToCart(demo, index)}
          >
            <button disabled={demo.statusAddToCart}>THÊM VÀO GIỎ</button>
          </div>
        </div>
      </div>
    ));
    return (
      <div>
        <div className="category">
          <input
            type="radio"
            id="showsanphammoi"
            name="radio"
            defaultChecked="checked"
          />
          <label
            className="btn-category"
            htmlFor="showsanphammoi"
            onClick={this.show1}
          >
            SẢN PHẨM MỚI NHẤT
          </label>
          <input type="radio" id="showsanphambanchay" name="radio" />
          <label
            className="btn-category"
            htmlFor="showsanphambanchay"
            onClick={this.show}
          >
            SẢN PHẨM BÁN CHẠY
          </label>
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
const mapStateToProps = state => ({
  db: state
});

export default connect(mapStateToProps, null)(Showproduct);