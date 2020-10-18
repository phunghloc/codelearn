import React from 'react';
import { connect } from 'react-redux';
import {
    Button,
    Input,
    Form,
    Checkbox
} from 'antd';

import * as actions from '../../store/actions/actions';

const formSignup = (props) => {
    return (
        <Form
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
                className="AuthWindow-Signup-Inp"
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
                className="AuthWindow-Signup-Inp"
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
                    Đăng ký
                </Button>
            </Form.Item>
        </Form>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onSignUp: (data, isLogin) => dispatch(actions.onAuth(data, isLogin)),
    }
}

export default connect(null, mapDispatchToProps)(formSignup);