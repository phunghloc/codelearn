import React from 'react';
import { Input, Button, Tooltip } from 'antd';
import { FormOutlined, UploadOutlined } from '@ant-design/icons';

import './GeneralInfo.css';

const generalInfo = (props) => (
    <div className="GeneralInfo">
        <div className="GeneralInfo-Container">
            <h1>Tạo bài tập mới</h1>
            <Tooltip 
                title={!props.isDone ? "Bạn phải hoàn thành nhập liệu trên 5 câu hỏi mới có thể gửi bài tập." : "Bạn có thể gửi bài tập."}
                placement="left" 
                color={'lime'} 
            >
                <Button
                    type="primary"
                    size="large"
                    icon={<UploadOutlined />}
                    disabled={!props.isDone}
                    onClick={props.sendData}
                >
                    Gửi bài tập
                </Button>
            </Tooltip>
        </div>
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