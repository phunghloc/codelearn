import React from 'react';
import { Menu } from 'antd';
import { MinusOutlined, CheckOutlined } from '@ant-design/icons';

import './MenuPractice.css';

const MenuPractice = (props) => {
    console.log(props.current);
    return (
        <Menu 
            className="Menu-Menu Menu-Hide"
            mode="inline"
            selectedKeys={[props.current + ""]}
        >
            {Array(props.list.length).fill(1).map((value, index)=> (
                <Menu.Item 
                    key={index}
                    onClick={item => props.change(item.key - '')}
                    icon={props.list[index] ? <CheckOutlined /> : <MinusOutlined />}
                    className="Menu-Item"
                >Bài {index + 1}</Menu.Item>
            ))}
        </Menu>
    );
}

export default MenuPractice;