import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';

import './Auth.scss';
import Login from './Login';
import Signup from './Signup';

const Auth = (props) => {
    //TODO 1: đăng nhập, 2: đăng ký
    const [key, setKey] = useState('1');

    const { setKeyLogin } = props;
    useEffect(() => {
        setKeyLogin(key);
    }, [key, setKeyLogin]);

    return (
        <div className="AuthWindow">
            <Tabs 
                activeKey={key}
                type="card"
                size="large"
                centered
                animated={{inkBar: true, tabPane: true}}
                onTabClick={key => setKey(key)}
            >
                <Tabs.TabPane tab="Đăng nhập" key="1" >
                    <Login 
                        setKey={setKey}
                    />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Đăng ký" key="2" >
                    <Signup 
                        setKey={setKey}
                    />
                </Tabs.TabPane>
        </Tabs>
      </div>
    )
}

export default Auth;