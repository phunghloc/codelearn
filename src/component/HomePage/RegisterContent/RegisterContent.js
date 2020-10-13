import React from 'react';
import { Row, Col, Button } from 'antd';
import { WindowsFilled, FacebookFilled, GoogleOutlined} from '@ant-design/icons'

import './RegisterContent.css';
import img from '../../../asset/img/head-left-bg.png';
import RegisterForm from './RegisterForm'

const registerContent = () => (
    <div className="RegisterContent">
        <Row>
           <Col className="RegisterContent-Left" xl={16} lg={24}>
                <img src={img} alt="Head Left"/>
                <div className="RegisterContent-Title">
                    <h1>HỌC LẬP TRÌNH <br/> TỪ CON SỐ 0</h1>
                    <p>Khởi đầu dễ dàng hơn với CodeLearn</p>
                </div>
           </Col> 
           <Col className="RegisterContent-Right" xl={8} lg={24}>
                <div className="RegisterContent-Form">
                    <RegisterForm />
                    <p>hoặc sử dụng tài khoản khác</p>
                    <div className="RegisterContent-LoginBtn">
                        <Button title="Đăng nhập thông qua Microsoft">
                            <WindowsFilled />
                        </Button>
                        <Button title="Đăng nhập thông qua Facebook">
                            <FacebookFilled />
                        </Button>
                        <Button title="Đăng nhập thông qua Google">
                            <GoogleOutlined />
                        </Button>
                    </div>
                </div>
           </Col> 
        </Row>
    </div>
)

export default registerContent;