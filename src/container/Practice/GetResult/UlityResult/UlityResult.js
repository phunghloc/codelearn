import React from 'react';
import { Button } from 'antd';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';

const ulityResult = (props) => (
    <div className="Ulity" style={{marginTop: '30px'}}>
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
);

export default ulityResult;