import React, { useState } from 'react';
import { Drawer, Menu } from 'antd';
import { CheckOutlined, MinusOutlined, OrderedListOutlined, PlusOutlined } from '@ant-design/icons';

import './MenuCreate.css'; 

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
                    className="Menu-Menu Menu-Create Menu-Drawer"
                    mode="inline"
                    selectedKeys={[props.current + ""]}
                >
                    <button 
                        onClick={props.add}
                    >
                        <PlusOutlined /> Tạo bài tập mới
                    </button>

                    {props.list.map((value, index)=> (
                        <Menu.Item 
                            key={index}
                            onClick={item => onClickItem(item)}
                            icon={value ? <CheckOutlined /> : <MinusOutlined />}
                            className="Menu-Item"
                        >Bài {index + 1}</Menu.Item>
                    ))}
                </Menu>
            </Drawer>
        </>
    )
}

export default DrawMenuPractice;