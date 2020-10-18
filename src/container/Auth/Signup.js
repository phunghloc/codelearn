import React from 'react';
// import { connect } from 'react-redux';
import {
    Button,
    // Input,
    // Form,
    Divider,
    // Checkbox
} from 'antd';
import {
    WindowsFilled,
    FacebookFilled,
    GoogleOutlined
} from '@ant-design/icons';


// import * as actions from '../../store/actions/actions';
import FormSignup from './FormSignup';

const Signup = (props) => {
    // TODO set value form 
    return (
        <div className="AuthWindow-Container">
            <h3>Đăng ký tài khoản mới</h3>
            <div className="AuthWindow-Btns">
                <Button icon={<WindowsFilled />} disabled >Microsoft</Button>
                <Button icon={<FacebookFilled />} disabled >Facebook</Button>
                <Button icon={<GoogleOutlined />} disabled >Google</Button>
            </div>
            <h4 style={{color: '#898989', fontWeight: '400'}}>HOẶC</h4>
            <FormSignup />
            {/* <Form
                onFinish={(data) => props.onSignUp(data, false)}
            >
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Bạn phải nhập email!' }]}
                >
                    <Input type="email" placeholder="Email đăng nhập" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        { required: true, message: 'Bạn phải nhập password!' },
                        { min: 6, message: "Mật khẩu ít nhất 6 ký tự!"}
                    ]}
                >
                    <Input.Password
                        className="AuthWindow-Signup-Pass"
                        type="password" 
                        placeholder="Vui lòng nhập mật khẩu" 
                        />
                </Form.Item>

                <Form.Item
                    name="retype"
                    rules={[
                        { validator: () => {
                            return document.querySelector('.AuthWindow-Signup-Pass input').value === 
                                document.querySelector('.AuthWindow-Signup-RePass input').value 
                                ? Promise.resolve() : Promise.reject('Nhập lại mật khẩu chưa chính xác!');
                            } 
                        },
                    ]}
                >
                    <Input.Password 
                        className="AuthWindow-Signup-RePass"
                        type="password" 
                        placeholder="Vui lòng nhập lại mật khẩu" 
                        />
                </Form.Item>

                <Form.Item 
                    name="policy" 
                    valuePropName="checked"
                    rules={[{ required: true, message: 'Vui lòng xác nhận điều khoản' }]}
                >
                    <Checkbox>
                        Tôi đồng ý với Điều khoản sử dụng của CodeLearn
                    </Checkbox>
                </Form.Item>

                <Form.Item >
                    <Button className="AuthWindow-Container-Submit" htmlType="submit" >
                        Đăng nhập
                    </Button>
                </Form.Item>
            </Form> */}

            <div className="AuthWindow-Ulity">
                <p onClick={() => props.setKey('1')}>Đã có tài khoản? Đăng nhập!</p>
            </div>

            <Divider />

            <div className="AuthWindow-Footer">
                <p>Trang này được bảo vệ bởi reCAPTCHA và áp dụng <span>Điều khoản sử dụng.</span></p>
            </div>
        </div>
    );
}

export default Signup;