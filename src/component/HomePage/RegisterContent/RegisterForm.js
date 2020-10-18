import React from 'react';
// import { Input, Button, Checkbox } from 'antd';

import './RegisterForm.scss';
import FormSignup from '../../../container/Auth/FormSignup';

const RegisterForm = () => {
  return (
    <div className="RegisterForm AuthWindow">
        <h1>Bắt Đầu Ngay</h1>
        {/* <Input className="RegisterForm-Input" size="large" placeholder="Email" />
        <Input className="RegisterForm-Input" size="large" placeholder="Mật khẩu" />
        <Input className="RegisterForm-Input" size="large" placeholder="Nhập lại mật khẩu" />
        <Checkbox>
            <span>Đồng ý với <a href="/">Điều khoản</a> của Codelearn</span>
        </Checkbox>
        <Button>Đăng ký</Button> */}
        <FormSignup />
        
    </div>
  );
};

export default RegisterForm;