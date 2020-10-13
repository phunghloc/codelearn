import React, { Component } from 'react';
import Slider from "react-slick";

import './FeedbackLanding.css';
import img1 from '../../../asset/img/student1.jpg';
import img2 from '../../../asset/img/student2.jpg';
import img3 from '../../../asset/img/student3.jpg';

const contents = [
    {
        img: img1,
        name: "Phùng Hữu Lộc",
        role: "Lập trình viên",
        comment: "CodeLearn đã giúp tôi học code hiệu quả hơn. Bên cạnh các khóa học và bài tập phù hợp, CodeLearn còn xây dựng một cộng đồng những người học lập trình để chúng tôi có thể cùng học tập, cùng tiến bộ."
    },
    {
        img: img2,
        name: "Phùng Hữu Lộc",
        role: "Lập trình viên",
        comment: "Cháu rất thích học tập tại CodeLearn. Không chỉ có các khóa học phù hợp với cháu, các bài tập cũng đa dạng, phần bài giải mẫu cũng rất chi tiết. Cháu cảm thấy mình đã tiến bộ rất nhiều và mong muốn trong tương lai có thể trở thành một lập trình viên giỏi"
    },
    {
        img: img3,
        name: "Gia Sô",
        role: "Kẻ bất dung thứ",
        comment: "Luyện tập trên CodeLearn giúp tôi giải trí sau những giây phút ganktem căng thẳng. Gì chứ đường tình thì tôi thua chứ đường giữa thì tôi chấp."
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