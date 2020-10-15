import React from 'react';
import { Menu } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

import './MenuResult.css';

const menuResult = (props) => (
        <Menu 
            className="Menu-Menu Menu-Result Menu-Hide"
            mode="inline"
            selectedKeys={props.current + ''}
        >
            {props.list.map((value, index)=> (
                <Menu.Item 
                    key={index}
                    onClick={item => props.change(item.key - '')}
                    icon={value ? <CheckOutlined /> : <CloseOutlined />}
                    className={["Menu-Item Menu-Item-", value ? "Correct" : "Wrong"].join('')}
                >Bài {index + 1}</Menu.Item>
            ))}

        </Menu>
);

export default menuResult;