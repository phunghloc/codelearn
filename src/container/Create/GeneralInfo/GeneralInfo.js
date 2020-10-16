import React from 'react';
import { Input } from 'antd';
import { FormOutlined } from '@ant-design/icons';

import './GeneralInfo.css';

const generalInfo = (props) => (
    <div className="GeneralInfo">
        <h1>Tạo bài tập mới</h1>
        <h3>Tên bài tập:</h3>
        <Input 
            size="large" 
            value={props.detail}
            placeholder="Nhập tiêu đề bài tập"
            prefix={<FormOutlined />} 
            onChange={event => props.titleChange(event.target.value)}
        />
    </div>
)

export default generalInfo;