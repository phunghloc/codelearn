import React from 'react';
import { Layout } from 'antd';

import './Header.css';
import NavItems from '../NavItems/NavItems'
import SideDraw from '../SideDraw/SideDraw';

const header = () => (
    <Layout.Header className="Header-Header">
        <div className="Header-Nav-PC">
            <NavItems />
        </div>
        
        <div className="Header-Header-Right">
            <SideDraw />
        </div>
    </Layout.Header>
);

export default header;
