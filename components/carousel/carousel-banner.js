import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <div id="slide1">
            <div id="text-banner">
              <h1>MY SNICKERS</h1>
              <p>
                Chào mừng bạn đến với ngôi nhà Converse! Tại đây, mỗi một dòng
                chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu
                ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn
                mạnh.
              </p>
            </div>
          </div>
          <div className="slide2">
            <div id="text-banner2">
              <h1>MY SNICKERS</h1>
              <p>
                Chào mừng bạn đến với ngôi nhà Converse! Tại đây, mỗi một dòng
                chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu
                ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn
                mạnh.
              </p>
            </div>
          </div>
          <div className="slide3">
            <div id="text-banner3">
              <h1>MY SNICKERS</h1>
              <p>
                Chào mừng bạn đến với ngôi nhà Converse! Tại đây, mỗi một dòng
                chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu
                ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn
                mạnh.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
