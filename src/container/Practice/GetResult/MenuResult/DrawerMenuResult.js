import React, { useState } from 'react';
import { Drawer, Menu } from 'antd';
import { CheckOutlined, CloseOutlined} from '@ant-design/icons';

import './MenuResult.css'; 

const DrawMenuResult = (props) => {
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
                Show List 
            </div>
            <Drawer
                placement={'left'}
                closable={false}
                onClose={onClose}
                visible={visible}
                key={'left'}
            >
                <Menu 
                    className="Menu-Menu Menu-Result Menu-Drawer"
                    mode="inline"
                    selectedKeys={props.current + ''}
                >
                    {props.list.map((value, index)=> (
                        <Menu.Item 
                            key={index}
                            onClick={item => onClickItem(item)}
                            icon={value ? <CheckOutlined /> : <CloseOutlined />}
                            className={["Menu-Item Menu-Item-", value ? "Correct" : "Wrong"].join('')}
                        >Bài {index + 1}</Menu.Item>
                    ))}

                </Menu>
            </Drawer>
        </>
    )
}

export default DrawMenuResult;