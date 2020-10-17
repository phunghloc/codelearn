import React, { useState } from 'react';
import { Drawer, Menu } from 'antd';
import { CheckOutlined, MinusOutlined, OrderedListOutlined } from '@ant-design/icons';

import './MenuPractice.css'; 

const DrawMenuPractice = (props) => {
    const [visible, setVisible] = useState(false);

    const onClose = () => setVisible(false);
    const showDrawer = () => setVisible(true);
    const onClickItem = (item) => {
        onClose();
        props.change(item.key - '');
    }
    
    return (
        <>
            <div 
                onClick={showDrawer} 
                className="Menu-Btn"
            >
                <OrderedListOutlined />
            </div>
            <Drawer
                placement={'left'}
                closable={false}
                onClose={onClose}
                visible={visible}
                key={'left'}
            >
                <Menu 
                    className="Menu-Menu Menu-Drawer"
                    mode="inline"
                    defaultChecked="0"
                    selectedKeys={[props.current + ""]}
                >
                    {Array(props.list.length).fill(1).map((value, index)=> (
                        <Menu.Item 
                            key={index}
                            onClick={item => onClickItem(item)}
                            icon={props.list[index] ? <CheckOutlined /> : <MinusOutlined />}
                            className="Menu-Item"
                        >Bài {index + 1}</Menu.Item>
                    ))}
                </Menu>
            </Drawer>
        </>
    )
}

export default DrawMenuPractice;