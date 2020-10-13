import React, { useState } from 'react';
// import { Row, Col } from 'antd';
import Slider from "react-slick";

import './UlityLanding.css';
import img1 from '../../../asset/img/he-thong-hoc-code-manh-me.png';
// import img2 from '../../../asset/img/noi-dung-bai-hoc-de-hieu.png';
// import img3 from '../../../asset/img/cong-dong-lap-trinh.png';
// import img4 from '../../../asset/img/su-kien-lap-trinh.png';
// import img5 from '../../../asset/img/doi-ngu-ho-tro-codelearn.png';

const UlityLanding = () => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();


    return (
        <div className="UlityLanding">
        <div className="test">
                    <Slider asNavFor={nav2} ref={c => setNav1(c)} >
                        <div className="UlityLanding-img">
                            <img src={img1} alt=""/>
                        </div>
                        <div className="UlityLanding-img">
                            <img src={img1} alt=""/>
                        </div>
                        <div className="UlityLanding-img">
                            <img src={img1} alt=""/>
                        </div>
                        <div className="UlityLanding-img">
                            <img src={img1} alt=""/>
                        </div>
                        <div className="UlityLanding-img">
                            <img src={img1} alt=""/>
                        </div>
                    </Slider>
        </div>

                    <Slider
                        asNavFor={nav1}
                        ref={c => setNav2(c)}
                        slidesToShow={5}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        arrows={false}
                    >
                        <div className="UlityLanding-Div">
                            <h3>1</h3>
                        </div>
                        <div className="UlityLanding-Div">
                            <h3>1</h3>
                        </div>
                        <div className="UlityLanding-Div">
                            <h3>1</h3>
                        </div>
                        <div className="UlityLanding-Div">
                            <h3>1</h3>
                        </div>
                        <div className="UlityLanding-Div">
                            <h3>1</h3>
                        </div>
                    </Slider>
        </div>
    );
}

export default UlityLanding;