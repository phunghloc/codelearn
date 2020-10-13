import React from 'react';
import { Row, Col } from 'antd'

import './FutureLanding.css';
import img from '../../../asset/img/chia-khoa-lap-trinh.png';
import listImg1 from '../../../asset/img/phat-trien-tu-duy-sang-tao.png';
import listImg2 from '../../../asset/img/lam-quen-cong-nghe.png';
import listImg3 from '../../../asset/img/mo-rong-co-hoi-nghe-nghiep.png';

const contents = [
    {
        img: listImg1,
        title: 'Phát triển tư duy sáng tạo',
        detail: 'Học cách viết code giúp bạn trau dồi tư duy logic và đưa bạn đến một cấp độ giải quyết vấn đề hoàn toàn mới.'
    },
    {
        img: listImg2,
        title: 'Làm quen thế giới công nghệ',
        detail: 'Học lập trình giúp bạn thân thiết hơn với thế giới công nghệ, thích nghi với cuộc sống thời đại 4.0.'
    },
    {
        img: listImg3,
        title: 'Mở rộng cơ hội nghề nghiệp',
        detail: 'Công việc lập trình đang tăng nhanh 50% so với thị trường việc làm nói chung với mức lương cao hơn trung bình 30%.'
    },
]

const futureLanding = () => (
    <div className="FutureLanding">
        <h2>Lập trình <br/> là xu thế của tương lai</h2>
        <Row>
            <Col className="FutureLanding-Left" xl={12} lg={24} >
                <img src={img} alt=""/>
            </Col>
            <Col className="FutureLanding-Right" xl={12} lg={24} >
                {contents.map(content => (
                    <div key={content.title} className="FutureLanding-Right-Items">
                        <div className="FutureLanding-Right-Title">
                            <div className="FutureLanding-Right-Img">
                                <img className="FutureLanding-Right-Item" src={content.img} alt="Phát triển tư duy sáng tạo"/>
                            </div>
                            <h4 className="FutureLanding-Right-Item">{content.title}</h4>
                        </div>
                        <p>{content.detail}</p>
                    </div>
                ))}
            </Col>
        </Row>
    </div>
);

export default futureLanding;