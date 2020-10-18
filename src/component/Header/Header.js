import React, { useEffect } from 'react';
import { Layout } from 'antd';

import './Header.css';
import NavItems from '../NavItems/NavItems';
import SideDraw from '../SideDraw/SideDraw';
import AuthInfo from './AuthInfo';

const Header = (props) => {
    useEffect(() => {
        window.onscroll = () => {
            const headerHomePage = document.querySelector('.Header-HomePage');
            if (headerHomePage) {
                if (window.scrollY) {
                    headerHomePage.classList.remove('Header-Header-Idle');
                    for (const div of document.querySelectorAll('.SideDrawMenu div')) {
                        div.classList.add('SideDrawMenu-div-idle');
                    }
                } else {
                    headerHomePage.classList.add('Header-Header-Idle');
                    for (const div of document.querySelectorAll('.SideDrawMenu div')) {
                        div.classList.remove('SideDrawMenu-div-idle');
                    }
                }
            }
        }
    }, []);

    return (
        <Layout.Header className={"Header-Header Header-Header-Idle " + props.addInClass}>
            <div className="Header-Nav-PC">
                <NavItems />
            </div>
            
            <div className="info" style={{display: 'flex'}}>
                <AuthInfo email={props.email} />

                <div className="Header-Header-Right">
                    <SideDraw />
                </div>
            </div>
            
        </Layout.Header>
    );
};

export default Header;
