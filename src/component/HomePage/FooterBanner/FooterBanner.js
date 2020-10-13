import React from 'react';
import { Button } from 'antd';

import './FooterBanner.css';

const footerBanner = () => (
    <div className="FooterBanner">
        <h2>KHƠI DẬY ĐAM MÊ <span>LẬP TRÌNH</span>!</h2>
        <h4>Đăng ký tài khoản và tham gia ngay hôm nay!</h4>
        <Button type="danger">Bắt đầu ngay!</Button>
    </div>
);

export default footerBanner;