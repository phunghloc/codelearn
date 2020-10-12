import React from 'react';
import { 
    Layout,
    Row,
    Col,
} from 'antd';

import { 
    FacebookFilled,
    InstagramFilled,
    TwitterSquareFilled,
    YoutubeFilled
} from '@ant-design/icons'

import './Footer.css';
import LogoFPT from '../../asset/img/logo-fpt-footer.svg';
import LogoCodeLearn from '../../asset/img/codelearn-logo.svg';

const infomation = [
    {
        title: "Liên Kết",
        items: [
            {name: "Học tập", link: "/"},
            {name: "Luyện tập", link: "/"},
            {name: "Cuộc thi", link: "/"},
            {name: "Trò chơi", link: "/"},
        ],
    },
    {
        title: "Thông tin",
        items: [
            {name: "Chia sẻ", link: "/"},
            {name: "Về chúng tôi", link: "/"},
            {name: "Điều khoản sử dụng", link: "/"},
        ],
    },
    {
        title: "Trợ giúp",
        items: [
            {name: "Hỗ trợ", link: "/"},
            {name: "Thảo luận", link: "/"},
            {name: "Liên hệ với chúng tôi", link: "/"},
        ],
    },
];

const footer = () => {
    return (
        <div>
            <Layout.Footer className="Footer-Footer">
                <Row className="Footer-Row">
                    <Col className="Footer-Info" lg={12} md = {24}>
                        <img className="Footer-codelearn-img" src={LogoCodeLearn} alt="CodeLearn logo"/>
                        <p>CodeLearn là nền tảng tương tác trực tuyến hỗ trợ người dùng học tập, thực hành, thi đấu và đánh giá kỹ năng lập trình một cách nhanh chóng và chính xác.</p>
                        <div className="Footer-Icons">
                            <FacebookFilled className="Footer-Icon" />
                            <YoutubeFilled className="Footer-Icon"/>
                            <TwitterSquareFilled className="Footer-Icon"/>
                            <InstagramFilled className="Footer-Icon"/>
                        </div>
                    </Col>
                    {infomation.map(info => (
                        <Col key={info.title} className="Footer-Info" lg={4} md={8} xs={24}>
                            <h3 className="Footer-Info-Title">{info.title.toLocaleUpperCase()}</h3>
                            <ul>
                                {info.items.map(item => <li key={item.name}><a href={item.link}>{item.name}</a></li>)}
                            </ul>
                        </Col>
                    ))}
                </Row>
            </Layout.Footer>
            <Layout.Footer className="Footer-Footer">
                <img src={LogoFPT} alt="FPT Logo Footer"/>
                <p>Cung cấp bởi <a href="/">CodeLearn</a> © 2020. Đã đăng ký bản quyền rev 9/10/2020 9:44:16 AM</p>
            </Layout.Footer>
        </div>
    );
}

export default footer;