import React from 'react';
import { Row, Col } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import './BannerPractice.scss';
import banner from '../../../asset/img/training.jpg';

const bannerPractice = () => (
    <Row className="BannerPractice" gutter={[12, 36]}>
    
        <Col lg={18} md={24} >
            <div className="BannerPractice-Item">
                <div className="BannerPractice-Banner-Img">
                    <img src={banner} alt="Training"/>
                </div>
                <div className="BannerPractice-Banner-Info">

                </div>
            </div>
        </Col>

        <Col lg={6} md={24}>
            <div className="BannerPractice-Item" >
                <div className="BannerPractice-Banner-Img" style={{padding: '12px 0', background: 'none', backgroundColor: '#1A416A'}}>
                    <div className="BannerPractice-Banner-Title">
                        <a href="/"><h3>Combo 25 câu</h3></a>
                        <div className="Bn-Badge">
                            <p>đơn giản</p>
                        </div>
                    </div>
                    <Avatar size={64} icon={<UserOutlined />} />
                    <p>Admin</p>
                    <div className="BannerPractice-Item-Bottom">
                        <p>BÀI NỔI BẬT</p>
                    </div>
                </div>
                
                <div className="BannerPractice-Banner-Info"></div>
            </div>    
        </Col>

    </Row>
);

export default bannerPractice;