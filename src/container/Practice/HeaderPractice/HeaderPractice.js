import React from 'react';
import { PageHeader } from 'antd';

import './HeaderPractice.css';

const headerPractice = (props) => (
    <PageHeader
        className="Practice-Header"
        onBack={props.back}
        title={props.title}
        subTitle={props.subTitle}
    />
);

export default headerPractice;