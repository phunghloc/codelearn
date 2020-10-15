import React from 'react';
import { Button } from 'antd';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';

import './Ulity.css';

const ulity = (props) => (
    <div className="Ulity">
        <div className="Ulity-Button">
            <Button 
                type="danger" 
                size="large"
                onClick={() => props.change(props.current - 1)}
                disabled={!props.current}
            ><LeftOutlined/> Bài trước</Button>
            <Button 
                type="primary" 
                size="large"
                onClick={() => props.change(props.current + 1)}
                disabled={props.current === props.maxQuestion}
            >Bài tiếp <RightOutlined/></Button>
        </div>
        
        <Button type="primary" 
            size="large"
            disabled={!props.isDone}
            onClick={props.sendAnswer}
            >Nộp bài</Button>
        
    </div>
);

export default ulity;