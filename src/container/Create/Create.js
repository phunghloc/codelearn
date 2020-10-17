import React, { useState, useEffect } from 'react';
import { Layout, PageHeader, notification } from 'antd';
import { LoadingOutlined, CheckOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import { connect } from 'react-redux';

import './Create.css';
import MenuCreate from './MenuCreate/MenuCreate';
import GeneralInfo from './GeneralInfo/GeneralInfo';
import UlityCreate from './UlityCreate/UlityCreate';
import QuestionCreate from './QuestionCreate/QuestionCreate';
import DrawMenuCreate from './MenuCreate/DrawMenuCreate';
import * as actions from '../../store/actions/actions';

const template = {
    type: 'radio',
    detail: "",
    answers: ['', ''],
    correct: '',
}

const key = 'updatable';

const Create = (props) => {
    // * ClearData khi load vào component
    const { clearData } = props;
    useEffect(() => {
        clearData();
        // notification.open({
        //     message: 'Notification Title',
        //     key,
        //     icon: <ExclamationCircleOutlined style={{ color: 'red' }} />,
        //   });
    }, [clearData]);

    useEffect(() => {
        if (props.loading) {
            notification.open({
                message: 'Đang gửi!',
                key,
                icon: <LoadingOutlined style={{ color: '#108ee9' }} />,
                duration: 0,
              });
        }
        if (props.error) {
            notification.open({
                message: 'Đã có lỗi xảy ra!',
                key,
                icon: <ExclamationCircleOutlined style={{ color: 'red' }} />,
                duration: 0,
              });
        }
        if (props.isSend) {
            notification.open({
                message: 'Đã gửi thành công!',
                key,
                icon: <CheckOutlined style={{ color: 'green' }} />,
                duration: 5,
            });
        }
    }, [props.loading, props.error, props.isSend]);

    const sendDataHandler = () => {
        if (props.isSend) {
            notification.open({
                message: 'Bạn đã gửi bài tập thành công rồi!',
                key,
                icon: <ExclamationCircleOutlined style={{ color: 'red' }} />,
                duration: 0,
              });
        } else {
            props.sendPracticeToServer(list, title, tag);
        }
    }

    // TODO: List bài tập
    const [list, setList] = useState([{...template, answers: ['', '']}]);

    // TODO: tiêu đề bài tập
    const [title, setTitle] = useState('');

    // TODO: list cho menu, validate từng câu.
    const [menuList, setMenuList] = useState([false]);

    // TODO: con trỏ cho câu hiện tại
    const [index, setIndex] = useState(0);

    // TODO: tag cho bài tập
    const [tag, setTag] = useState('');

    //* Validate từng câu 
    const validateHandler = () => {
        const newMenuList = [...menuList];

        if (!list[index].detail.trim() || list[index].answers.some(answer => !answer.trim()) || !list[index].correct.trim()) {
            newMenuList[index] = false;
        }
        else {
            newMenuList[index] = true;
        }

        setMenuList(newMenuList);
    }

    // * Thêm / xóa câu hỏi
    const addQuestionHandler = () => {
        setMenuList(menuList => menuList.concat(false));
        setList(list => list.concat({...template, answers: ['', '']}));
        setIndex(menuList.length);
    }

    const deleteQuestionHandler = () => {
        const newList = [...list];
        const newMenuList = [...menuList];

        newList.splice(index, 1);
        newMenuList.splice(index, 1);

        setIndex(index => Math.max(index - 1, 0));
        setList(newList);
        setMenuList(newMenuList);
    }

    // * Thay đổi tiêu đề bài tập
    const titleChangeHandler = (value) => {
        setTitle(value);
        validateHandler();
    }

    // * Thay đổi nội dung từng câu hỏi
    const detailChangeHandler = (detail) => {
        const newList = [...list];
        newList[index].detail = detail;
        setList(newList);
        validateHandler();
    }

    // * Thêm 1 đáp án vào câu hỏi đang được chọn
    const addAnswerToQuestionHandler = () => {
        const newList = [...list];
        newList[index].answers.push('');
        setList(newList);
        validateHandler();
    }

    // * Xóa 1 đáp án vào câu hỏi đang được chọn
    const deleteAnswerInQuestionHandler = indexAnswer => {
        const newList = [...list];
        newList[index].answers.splice(indexAnswer, 1);
        setList(newList);
    }

    // * Thay đổi nội dung câu trả lời của câu hỏi đang chọn 
    const changeAnswerInQuestionHandler = (indexAnswer, value) => {
        const newList = [...list];
        newList[index].answers[indexAnswer] = value;
        setList(newList);
        validateHandler();
    } 

    // * Gán đáp án đúng cho câu hỏi đó
    const setCorrectAnswerInQuestionHandler = (answer) => {
        if (!answer) return ;
        const newList = [...list];
        newList[index].correct = answer;
        setList(newList);
        validateHandler();
    }

    return (
        <Layout.Content className="Practice-Container">
            <div className="Practice-Practice Create-Page">
                <PageHeader
                    className="Practice-Header"
                    onBack={props.history.goBack}
                    title="Tạo bài luyện tập"
                />

                <MenuCreate 
                    list={menuList}
                    current={index}
                    change={setIndex}
                    add={addQuestionHandler}
                />

                <DrawMenuCreate 
                    list={menuList}
                    current={index}
                    change={setIndex}
                    add={addQuestionHandler}
                />

                <GeneralInfo 
                    titleChange={titleChangeHandler}
                    tagChange={setTag}
                    title={title}
                    isDone={!menuList.some(item => !item) && menuList.length >= 5 && title.trim() && tag.trim()}
                    sendData={sendDataHandler}
                />
        
                <UlityCreate 
                    index={index}
                    minIndex={index === 0}
                    maxIndex={index === list.length - 1}
                    minQuestion={list.length === 1}
                    previous={() => setIndex(index => index - 1)}
                    next={() => setIndex(index => index + 1)}
                    delete={deleteQuestionHandler}
                    add={addQuestionHandler}
                />

                <QuestionCreate 
                    index={index}
                    detail={list[index].detail}
                    answers={list[index].answers}
                    currentCorrect={list[index].correct}
                    changeDetail={detailChangeHandler}
                    addAnswer={addAnswerToQuestionHandler}
                    deleteAnswer={deleteAnswerInQuestionHandler}
                    changeAnswer={changeAnswerInQuestionHandler}
                    setCorrectAnswer={setCorrectAnswerInQuestionHandler}
                />
            </div>
        </Layout.Content>

    );
}

const mapStateToProps = state => {
    return {
        loading: state.sendPractice.loading,
        error: state.sendPractice.error,
        isSend: state.sendPractice.isSend,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendPracticeToServer: (data, title, tag) => dispatch(actions.onSendPractice(data, title, tag)),
        clearData: () => dispatch(actions.onClearData()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);