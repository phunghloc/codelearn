import React from 'react';
import { Row, Col } from 'antd';

import "./StepLanding.css";
import step1 from '../../../asset/img/hoc-lap-trinh.png';
import step2 from '../../../asset/img/luyen-lap-trinh.png';
import step3 from '../../../asset/img/thi-lap-trinh.png';
import step4 from '../../../asset/img/chia-se-lap-trinh.png';

const contents = [
    {
        img: step1,
        title: 'Học lập Trình',
        detail: 'Học lập trình cơ bản đến nâng cao thông qua các khóa học.'
    },
    {
        img: step2,
        title: 'Luyện lập trình',
        detail: 'Luyện lập trình hằng ngày với hàng nghìn bài tập lớn nhỏ.'
    },
    {
        img: step3,
        title: 'Thi lập trình',
        detail: 'Tham gia các cuộc thi và cải thiện kỹ năng lập trình liên tục.'
    },
    {
        img: step4,
        title: 'Tìm hiểu lập trình',
        detail: 'Tìm hiểu kiến thức lập trình thông qua chia sẻ của các chuyên gia.'
    },
];

const stepLanding = () => (
    <div className="StepLanding">
        <h1>Lộ trình trở thành <br/>lập trình viên</h1>
    
        <Row>
            {contents.map((content, index) => (
                <Col key={index} xl={6} lg={12} xs={24} className="StepLanding-Col">
                    <div className="StepLanding-Img">
                        <img src={content.img} alt={content.title}/>
                        <div className="StepLanding-Index">
                            <p>{index + 1}</p>
                        </div>
                    </div>
                    <h2>{content.title}</h2>
                    <p>{content.detail}</p>
                        
                </Col>
            ))}
        </Row>
    </div>
);

export default stepLanding;