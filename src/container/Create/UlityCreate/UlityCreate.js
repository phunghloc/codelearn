import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { 
    RightOutlined, 
    LeftOutlined, 
    PlusOutlined, 
    DeleteOutlined 
} from '@ant-design/icons';

import './UlityCreate.css';

const UlityCreate = (props) => {
    const [visibleConfirmModal, setVisibleConfirmModal] = useState(false);

    const openConfirmModalHandler = () => setVisibleConfirmModal(true);
    const closeConfirmModalHandler = () => setVisibleConfirmModal(false);
    const confirmDeleteHandler = () => {
        props.delete();
        closeConfirmModalHandler();
    }

    return (
        <div className="UlityCreate">
            <div className="UlityCreate-Btns">
                <div className="UlityCreate-Btn">
                    <Button type="primary"
                        disabled={props.minIndex}
                        onClick={props.previous}
                    >
                        <LeftOutlined />
                    </Button>

                    <Button type="primary"
                        disabled={props.maxIndex}
                        onClick={props.next}
                    >
                        <RightOutlined />
                    </Button>
                </div>

                <div className="UlityCreate-Btn">
                    <button 
                        className="UlityCreate-Btn-Delete"
                        disabled={props.minQuestion}
                        onClick={openConfirmModalHandler}
                    >
                        <DeleteOutlined />
                    </button>

                    <button 
                        className="UlityCreate-Btn-Add"
                        onClick={props.add}
                    >
                        <PlusOutlined />
                    </button>
                </div>
            </div>

            <Modal
                title="Xác nhận"
                visible={visibleConfirmModal}
                onOk={confirmDeleteHandler}
                onCancel={closeConfirmModalHandler}
            >
                <p>Bạn có chắc chắn muốn xóa câu hỏi số {props.index + 1}?</p>
            </Modal>
        </div>
    );
}

export default UlityCreate;