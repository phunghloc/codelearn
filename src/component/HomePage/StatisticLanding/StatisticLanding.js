import React from 'react';
import { Col, Row, Button } from 'antd';

import './StatisticLanding.css';

const contents = [
    {
        number: '60000 +',
        detail: 'Học viên đã đăng ký'
    },
    {
        number: '10000 +',
        detail: 'Chứng chỉ đã được trao'
    },
    {
        number: 5,
        detail: 'Quốc gia đang sử dụng'
    },
];

const statisticLanding = () => (
    <div className="StatisticLanding">
        <Row className="StatisticLanding-Row">
            {contents.map(content => (
                <Col key={content.number} md={8} xs={24} className="StatisticLanding-Item">
                    <div className="StatisticLanding-Number">
                        <h1>{content.number}</h1>
                        <h3>{content.detail}</h3>
                    </div>
                </Col>
            ))}
            <Button>Tham gia học lập trình ngay</Button>
        </Row>
    </div>
);

export default statisticLanding;