import React from 'react';
import { 
    Input, 
    Button, 
    Modal,
    Checkbox
 } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

import './QuestionCreate.css';

const QuestionCreate = (props) => {

    // TODO: nếu câu hỏi đang có dưới 2 đáp án thì không cho xóa
    const validatedAction = index => {
        if (props.answers.length <= 2) {
            Modal.error({
                title: 'Không thể thực hiện thao tác!',
                content: 'Mỗi một câu hỏi cần có trên 2 đáp án.',
              });
        } else {
            Modal.confirm({
                content: `Bạn có chắc chắn muốn xóa đáp án số ${index + 1}?`,
                onOk() {
                    props.deleteAnswer(index);
                },
            });
        }
    }

    return (
        <div className="QuestionCreate">
            <h2>Câu hỏi số {props.index + 1}:</h2>

            <Input.TextArea
                value={props.detail}
                onChange={event => props.changeDetail(event.target.value)}
                placeholder={`Nhập câu hỏi số ${props.index + 1}`}
                autoSize={{ minRows: 3 }}
            />

            <div className="QuestionCreate-Ans">
                <h2>Các đáp án:</h2>
                {props.answers.map((answer, index) => (
                    <div className="QuestionCreate-Input" key={index}>
                        <Checkbox 
                            className="QuestionCreate-CheckBox" 
                            onChange={() => props.setCorrectAnswer(answer)}
                            checked={answer === props.currentCorrect && answer}
                            />

                        <Input.TextArea
                            value={answer}
                            onChange={event => props.changeAnswer(index, event.target.value)}
                            placeholder={`Nhập đáp án ${index + 1} của câu hỏi số ${props.index + 1}`}
                            autoSize={{ minRows: 2 }}
                            />
                        <button 
                            className="QuestionCreate-Input-Delete"
                            onClick={() => validatedAction(index)}
                        >
                            <DeleteOutlined />
                        </button>
                        {/* <div className="QuestionCreate-Input-Correct"></div> */}
                    </div>
                ))}

                <Button 
                    type="dashed" 
                    icon={<PlusOutlined />}
                    onClick={props.addAnswer}
                    className="QuestionCreate-Add-Btn"
                >
                    Thêm đáp án
                </Button>
            </div>

        </div>
    );
}

export default QuestionCreate;