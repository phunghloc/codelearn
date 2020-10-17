import React, { useState } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';

import './Practice.css';
import HeaderPractice from '../HeaderPractice/HeaderPractice';
import MenuPractice from './MenuPractice/MenuPractice';
import Question from './Question/Question';
import DrawMenuPractice from './MenuPractice/DrawMenuPractice';
import Ulity from './Ulity/Ulity';
import * as actions from '../../../store/actions/actions';

const Practice = (props) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(Array(props.questions.length).fill(''));
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
                    subTitle={props.title}
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
                    detail={props.questions[currentQuestion].detail}
                    answers={props.questions[currentQuestion].answers}
                    currentAns={answers[currentQuestion]}
                    change={changeAnswer}
                />

                <Ulity
                    isDone={percent === 100}
                    current={currentQuestion}
                    maxQuestion={answers.length - 1}
                    change={setCurrentQuestion}
                    sendAnswer={() => props.onSendAnswer(answers)}
                />
            </div>
        </Layout.Content>
    );
    
}

const mapStateToProps = state => {
    return {
        questions: state.questions.questions, 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSendAnswer: (answers) => dispatch(actions.onSendAnswers(answers)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Practice);