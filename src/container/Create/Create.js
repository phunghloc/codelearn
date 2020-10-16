import React, { useState } from 'react';
import { Layout, PageHeader } from 'antd';

import './Create.css';
import MenuCreate from './MenuCreate/MenuCreate';
import GeneralInfo from './GeneralInfo/GeneralInfo';
import UlityCreate from './UlityCreate/UlityCreate';
import QuestionCreate from './QuestionCreate/QuestionCreate';
import DrawMenuCreate from './MenuCreate/DrawMenuCreate';

const template = {
    type: 'radio',
    detail: "",
    answers: ['', ''],
    correct: '',
}

const Create = (props) => {
    // TODO: List bài tập
    const [list, setList] = useState([{...template, answers: ['', '']}]);

    // TODO: tiêu đề bài tập
    const [title, setTitle] = useState('');

    // TODO: list cho menu, validate từng câu.
    const [menuList, setMenuList] = useState([false]);

    // TODO: con trỏ cho câu hiện tại
    const [index, setIndex] = useState(0);

    //* Validate từng câu 
    const validateHandler = () => {
        const newMenuList = [...menuList];

        if (!list[index].detail || list[index].answers.some(answer => !answer) || !list[index].correct) {
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
                    title={title}
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

export default Create;