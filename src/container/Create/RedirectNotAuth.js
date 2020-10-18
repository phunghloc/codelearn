import React from 'react';
import { Result, Button } from 'antd';

import './Create.css';

const redirectNotAuth = (props) => (
    <div className="Redirect-Page">
         <Result
            status="403"
            title="403"
            subTitle="Bạn chưa đăng nhập, hay đăng nhập để truy cập trang"
            extra={(
                <Button 
                    type="primary"
                    onClick={props.history.goBack}
                >
                Quay lại trang trước</Button>
            )}
        />
    </div>
);

export default redirectNotAuth;
