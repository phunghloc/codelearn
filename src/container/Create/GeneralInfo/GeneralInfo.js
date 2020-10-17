import React from 'react';
import { 
    Input,
    Button,
    Tooltip,
    Select,
    Row,
    Col,
} from 'antd';
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

        <Row>
            <Col md={18} sm={24}>
                <h3>Tên bài tập:</h3>
                <Input 
                    // size="large" 
                    value={props.detail}
                    placeholder="Nhập tiêu đề bài tập"
                    prefix={<FormOutlined />} 
                    onChange={event => props.titleChange(event.target.value)}
                />
            </Col>

            <Col md={6} sm={24}>
                <h3>Tên môn:</h3>
                <Select 
                    placeholder="Chọn tên môn" 
                    style={{ width: '100%', fontSize:'18px', margin: '0 2px', }} 
                    size="large" 
                    onChange={value => props.tagChange(value)}
                >
                    <Select.Option value="Anh Văn">Anh Văn</Select.Option>
                    <Select.Option value="Khác">Khác</Select.Option>
                </Select>
            </Col>
        </Row>
    </div>
)

export default generalInfo;