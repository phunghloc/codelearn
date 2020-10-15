import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom'

import './Ulity.css';

const ulity = (props) => (
    <div className="Ulity">
        <div className="Ulity-Button">
            <Button 
                type="danger" 
                size="large"
                onClick={() => props.change(props.current - 1)}
                disabled={!props.current}
            >Bài trước</Button>
            <Button 
                type="primary" 
                size="large"
                onClick={() => props.change(props.current + 1)}
                disabled={props.current === props.maxQuestion}
            >Bài tiếp </Button>
        </div>

        <Link to="/codelearn">
            <Button type="primary" 
                size="large"
                disabled={!props.isDone}
                >Nộp bài</Button>
        </Link>
    </div>
);

export default ulity;