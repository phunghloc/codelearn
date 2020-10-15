import React from 'react';
import { Result, Spin } from 'antd';

import './Loading.css';

const loading = () => {
    return (
        <div className="WaitingScreen">
            <Result
                style={{margin: 'auto'}}
                icon={<Spin size="large"/>}
                title="Đang tải dữ liệu..."
            />
        </div>
    );
}

export default loading;