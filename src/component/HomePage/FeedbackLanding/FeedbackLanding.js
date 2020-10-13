import React, { Component } from 'react';
import Slider from "react-slick";

import './FeedbackLanding.css';
import img1 from '../../../asset/img/student1.jpg';

const contents = [
    {
        img: img1,
        name: "Phùng Hữu Lộc",
        role: "Lập trình viên",
        comment: "CodeLearn đã giúp tôi học code hiệu quả hơn. Bên cạnh các khóa học và bài tập phù hợp, CodeLearn còn xây dựng một cộng đồng những người học lập trình để chúng tôi có thể cùng học tập, cùng tiến bộ."
    },
    {
        img: img1,
        name: "Phùng Hữu Lộc",
        role: "Lập trình viên",
        comment: "CodeLearn đã giúp tôi học code hiệu quả hơn. Bên cạnh các khóa học và bài tập phù hợp, CodeLearn còn xây dựng một cộng đồng những người học lập trình để chúng tôi có thể cùng học tập, cùng tiến bộ."
    },
    {
        img: img1,
        name: "Phùng Hữu Lộc",
        role: "Lập trình viên",
        comment: "CodeLearn đã giúp tôi học code hiệu quả hơn. Bên cạnh các khóa học và bài tập phù hợp, CodeLearn còn xây dựng một cộng đồng những người học lập trình để chúng tôi có thể cùng học tập, cùng tiến bộ."
    },
]

class FeedbackLanding extends Component {
    render() {
        const settings = {
            centerMode: true,
            centerPadding: '25%',
            slidesToShow: 1,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                      centerPadding: '15%',
                    }
                },
                {
                  breakpoint: 768,
                  settings: {
                    centerPadding: '10%',
                  }
                },
                {
                    breakpoint: 576,
                    settings: {
                      centerPadding: '0%',
                    }
                  },
            ]
        };
        return (
            <div className="FeedbackLanding">
                <h1>Học viên nói gì về CodeLearn</h1>
                <Slider {...settings}>
                    {contents.map(content => (
                        <div key={content.name} className="FeedbackLanding-Item">
                            <div className="FeedbackLanding-Card">
                                <div>
                                    <h2>{content.name}</h2>
                                    <span>{content.role}</span>
                                </div>
                                <img src={content.img} alt={"Avatar " + content.name}/>
                                <p>{content.comment}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
                    <div className="FeedbackLanding-Censor-Right"></div>
                    <div className="FeedbackLanding-Censor-Left"></div>
            </div>
        );
    }
}

export default FeedbackLanding;