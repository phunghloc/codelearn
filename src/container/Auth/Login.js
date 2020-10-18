import React from 'react';
import { connect } from 'react-redux';
import {
    Button,
    Input,
    Form,
    Divider,
} from 'antd';
import {
    WindowsFilled,
    FacebookFilled,
    GoogleOutlined
} from '@ant-design/icons';


import * as actions from '../../store/actions/actions';

const Login = (props) => {
    // TODO set value form 
    return (
        <div className="AuthWindow-Container">
            <h3>Đăng nhập tài khoản của bạn</h3>
            <div className="AuthWindow-Btns">
                <Button icon={<WindowsFilled />} disabled >Microsoft</Button>
                <Button icon={<FacebookFilled />} disabled >Facebook</Button>
                <Button icon={<GoogleOutlined />} disabled >Google</Button>
            </div>
            <h4 style={{color: '#898989', fontWeight: '400'}}>HOẶC</h4>
            <Form
                onFinish={(data) => props.onLogin(data, true)}
            >
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Bạn phải nhập email!' }]}
                >
                    <Input type="email" placeholder="Email đăng nhập" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Bạn phải nhập password!' }]}
                >
                    <Input.Password type="password" placeholder="Vui lòng nhập mật khẩu" />
                </Form.Item>

                <Form.Item >
                    <Button className="AuthWindow-Container-Submit" htmlType="submit">
                        Đăng nhập
                    </Button>
                </Form.Item>
            </Form>

            <div className="AuthWindow-Ulity">
                <p onClick={() => props.setKey('2')}>Chưa có tài khoản? Đăng ký!</p>
                <p>Quên mật khẩu?</p>
            </div>

            <Divider />

            <div className="AuthWindow-Footer">
                <p>Trang này được bảo vệ bởi reCAPTCHA và áp dụng <span>Điều khoản sử dụng.</span></p>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (data, isLogin) => dispatch(actions.onAuth(data, isLogin)),
    }
}

export default connect(null, mapDispatchToProps)(Login);