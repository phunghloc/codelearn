import React from 'react';
import { Result, Spin, Row, Col } from 'antd';

import './ShowAllPractice.scss';

const loading = () => {
    return (
        <Row gutter={[16, 16]}>
            {Array.from(Array(8), (index, value) => value).map((item) => (
                <Col key={item} lg={6} md={12} xs={24}>
                    <div className="AllPractice-Item">
                        <Result
                            style={{margin: 'auto'}}
                            icon={<Spin size="large"/>}
                            title="Đang tải dữ liệu..."
                        />
                    </div>
                </Col>
            ))}
        </Row>
    );
}

export default loading;