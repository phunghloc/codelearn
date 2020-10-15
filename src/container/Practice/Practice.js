import React, { useState } from 'react';
import { Layout } from 'antd';

import './Practice.css';
import HeaderPractice from './HeaderPractice/HeaderPractice';
import MenuPractice from './MenuPractice/MenuPractice';
import Question from './Question/Question';
import DrawMenuPractice from './MenuPractice/DrawMenuPractice';
import Ulity from './Ulity/Ulity';

import Questions from './Questions';

const Practice = (props) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(Array(Questions.length).fill(''));
    const [percent, setPercent] = useState(0);

    const changeAnswer = value => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = value;
        setAnswers(newAnswers);
        setPercent(Math.ceil((newAnswers.filter(answer => answer).length / newAnswers.length)*100));
    }

    return (
        <Layout.Content className="Practice-Container">
            <div className="Practice-Practice">
                <HeaderPractice 
                    back={props.history.goBack}
                    title="Luyện tập"
                    subTitle="Bài luyện tập số 69"
                />

                <MenuPractice 
                    list={answers}
                    current={currentQuestion}
                    change={setCurrentQuestion}
                />

                <DrawMenuPractice
                    list={answers}
                    current={currentQuestion}
                    change={setCurrentQuestion}
                />

                <Question 
                    percent={percent}
                    current={currentQuestion + 1}
                    detail={Questions[currentQuestion].detail}
                    answers={Questions[currentQuestion].answers}
                    currentAns={answers[currentQuestion]}
                    change={changeAnswer}
                />

                <Ulity
                    isDone={percent === 100}
                    current={currentQuestion}
                    maxQuestion={answers.length - 1}
                    change={setCurrentQuestion}
                />
            </div>
        </Layout.Content>
    );
}

export default Practice;