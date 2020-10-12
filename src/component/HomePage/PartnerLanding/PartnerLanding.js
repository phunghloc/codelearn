import React, { Component } from "react";
import Slider from "react-slick";

import './PartnerLanding.css';
import logo1 from '../../../asset/img/logo-fpt.png';
import logo2 from '../../../asset/img/logo-FUNiX.png';
import logo3 from '../../../asset/img/logo-polytehnic.png';
import logo4 from '../../../asset/img/logo-dhspkthungyen.png';

const partners = [logo1, logo2, logo3, logo4, logo1, logo2, logo3, logo4];

export default class SimpleSlider extends Component {
  render() {
    const settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };
    return (
      <div className="PartnerLanding">
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <div key={index} className="PartnerLanding-Item">
                <img src={partner} alt="Logo FPT"/>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
