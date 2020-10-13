import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

import './RegisterForm.css';

const RegisterForm = () => {
  return (
    <Form className="RegisterForm">
        <h1>Bắt Đầu Ngay</h1>
        <Input className="RegisterForm-Input" size="large" placeholder="Email" />
        <Input className="RegisterForm-Input" size="large" placeholder="Mật khẩu" />
        <Input className="RegisterForm-Input" size="large" placeholder="Nhập lại mật khẩu" />
        <Checkbox>
            <span>Đồng ý với <a href="/">Điều khoản</a> của Codelearn</span>
        </Checkbox>
        <Button>Đăng ký</Button>
        
    </Form>
  );
};

export default RegisterForm;