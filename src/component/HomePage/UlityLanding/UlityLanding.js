import React, { useState } from 'react';
import { Row, Col } from 'antd';
import Slider from "react-slick";

import './UlityLanding.css';
import slides from './Content';

const UlityLanding = () => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const [bgcolor, setBgcolor] = useState(0);

    const settingSlider = {
        asNavFor: nav2,
        ref: c => setNav1(c),
        fade: true,
        arrows: false,
        autoplay: true,
    }

    const settingController = {
        className: "test",
        asNavFor: nav1,
        ref: c => setNav2(c),
        slidesToShow: 5,
        focusOnSelect: true,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        vertical: true,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                vertical: false,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: false,
              }
            },
        ],
        beforeChange: (_, current) => setBgcolor(current),
    };

    return (
        <div className={["UlityLanding UlityLanding-BGColor" + bgcolor]}>
            <h1>CodeLearn</h1>
            <h1>Ưu điểm vượt trội</h1>
            <Row className="UlityLanding-Slide">
                <Col lg={14} md={24}>
                    <Slider {...settingSlider} >
                        {slides.map(slide => (
                            <img key={slide.title} src={slide.img} alt={slide.title}/>
                        ))}
                    </Slider>
                </Col>
                <Col lg={10} md={24} className="UlityLanding-Controller">
                    <Slider {...settingController}>
                        {slides.map(slide => (
                            <div key={slide.title} className="UlityLanding-Div">
                                <div className="UlityLanding-Info">
                                    <img src={slide.icon} alt={slide.title}/>
                                    <h3>{slide.title}</h3>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </Col>
            </Row>
        </div>
    );
}

export default UlityLanding;