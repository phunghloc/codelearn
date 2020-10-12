import React, { useEffect } from 'react';
import { Layout } from 'antd';

import './Header.css';
import NavItems from '../NavItems/NavItems'
import SideDraw from '../SideDraw/SideDraw';

const Header = () => {
    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY) {
                document.querySelector('.Header-Header').classList.remove('Header-Header-Idle');
                for (const div of document.querySelectorAll('.SideDrawMenu div')) {
                    div.classList.add('SideDrawMenu-div-idle');
                }
            } else {
                document.querySelector('.Header-Header').classList.add('Header-Header-Idle');
                for (const div of document.querySelectorAll('.SideDrawMenu div')) {
                    div.classList.remove('SideDrawMenu-div-idle');
                }
            }
        }
    }, []);

    return (
        <Layout.Header className="Header-Header Header-Header-Idle">
            <div className="Header-Nav-PC">
                <NavItems />
            </div>
            
            <div className="Header-Header-Right">
                <SideDraw />
            </div>
        </Layout.Header>
    );
};

export default Header;
