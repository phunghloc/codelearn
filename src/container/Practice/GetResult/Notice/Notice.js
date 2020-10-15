import React from 'react';

import './Notice.css';

const notice = (props) => (
    <div className="Notice">
        <h1>Bạn đã làm đúng <span>{props.correct}</span> / <span>{props.total} câu.</span></h1>
    </div>
);

export default notice;