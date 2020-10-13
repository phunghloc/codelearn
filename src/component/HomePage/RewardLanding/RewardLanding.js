import React from 'react';
import { Row, Col } from 'antd';

import './RewardLanding.css';
import img from '../../../asset/img/chung-tri-codelearn.png';

const rewardLanding = () => (
    <Row className="RewardLanding">
        <Col className="RewardLanding-Info" md={14} sm={24}>
            <h1>Niềm tự hào của chúng tôi</h1>
            <p>CodeLearn phát triển một hệ sinh thái toàn diện với các khóa học, bài tập thực hành phù hợp, hỗ trợ đa ngôn ngữ. Kết nối những người có chung niềm đam mê với lập trình để cùng nhau xây dựng một cộng đồng lớn mạnh.</p>
        </Col>
        <Col className="RewardLanding-Img" md={10} sm={24}>
            <img src={img} alt="Our reward"/>
        </Col>
    </Row>
);

export default rewardLanding;