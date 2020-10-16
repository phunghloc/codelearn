import React from 'react';
import { Menu } from 'antd';
import { CheckOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons'

import './MenuCreate.css';

const menu = (props) => (
    <Menu 
        className="Menu-Menu Menu-Create Menu-Hide"
        mode="inline"
        selectedKeys={props.current + ''}
    >
        <button 
            onClick={props.add}
        >
        <PlusOutlined /> Tạo bài tập mới
        </button>

        {props.list.map((value, index)=> (
            <Menu.Item 
                key={index}
                onClick={item => props.change(item.key - '')}
                icon={value ? <CheckOutlined /> : <MinusOutlined />}
                className="Menu-Item"
            >Bài {index + 1}</Menu.Item>
        ))}
    </Menu>
);

export default menu;