import React from 'react';
import { Breadcrumb } from 'antd';

const styleContainer = {
    marginBottom: '12px',
}

const style = {
    color: "var(--accent-color)",
}

const breadcrumb = () => (
    <Breadcrumb style={styleContainer}>
        <Breadcrumb.Item style={style} href="/">Trang chủ</Breadcrumb.Item>
        <Breadcrumb.Item style={style} href="/codelearn/allpractice">Luyện tập</Breadcrumb.Item>
    </Breadcrumb>
);

export default breadcrumb;