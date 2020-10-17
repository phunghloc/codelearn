import React from 'react';
import { Row, Col, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import './ShowAllPractice.scss';

const ShowAllPractice = (props) => {
    return (
        <Row gutter={[16, 16]}>
            {props.data.map(item => (
                <Col key={item.id} lg={6} md={12} xs={24} className="AllPractice-Items">
                    <Link to={`/codelearn/practice?id=${item.id}`}>
                        <div className="AllPractice-Item">
                            <div className="AllPractice-Container">
                                <h3>{item.title}</h3>
                                <div className="AllPractice-Container-Tag">
                                    <p>{item.tag || "Tag"}</p>
                                </div>
                                <Avatar size={64} icon={<UserOutlined />} />
                                <p>{item.author || "ADMIN"}</p>
                            </div>
                            <div className="AllPractice-Footer">

                            </div>
                        </div>
                    </Link>
                </Col>
            ))}
        </Row>
    );
}

export default ShowAllPractice;