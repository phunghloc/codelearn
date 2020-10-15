import React, { useState } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';

import './GetResult.css';
import HeaderPractice from '../HeaderPractice/HeaderPractice';
import MenuResult from './MenuResult/MenuResult';
import Result from './Result/Result';
import Notice from './Notice/Notice';
import DrawerMenuResult from './MenuResult/DrawerMenuResult';
import UlityResult from './UlityResult/UlityResult';

const GetResult = (props) => {
    const answerList = Array.from(Array(props.answers.length),(value, index) => props.answers[index] === props.questions[index].correct );
    const [currentQuestion, setCurrentQuestion] = useState(0);

    return (
        <Layout.Content className="Practice-Container">
            <div className="Practice-Practice">
                <HeaderPractice 
                    back={props.history.goBack}
                    title="Luyện tập"
                    subTitle="Bài luyện tập số 69"
                />

                <MenuResult 
                    list={answerList}
                    current={currentQuestion}
                    change={setCurrentQuestion}
                />

                <DrawerMenuResult 
                    list={answerList}
                    current={currentQuestion}
                    change={setCurrentQuestion}
                />

                <Notice 
                    correct={answerList.filter(correct => correct).length}
                    total={answerList.length}
                />

                <Result 
                    current={currentQuestion + 1}
                    detail={props.questions[currentQuestion].detail}
                    answers={props.questions[currentQuestion].answers}
                    currentAns={props.answers[currentQuestion]}
                    correct={props.questions[currentQuestion].correct}
                />

                {/* <Ulity
                    isDone={percent === 100}
                    current={currentQuestion}
                    maxQuestion={answers.length - 1}
                    change={setCurrentQuestion}
                    sendAnswer={() => props.onSendAnswer(answers)}
                /> */}

                <UlityResult 
                    current={currentQuestion}
                    maxQuestion={props.answers.length - 1}
                    change={setCurrentQuestion}
                />
            </div>
        </Layout.Content>
    );
}

const mapStateToProps = state => {
    return {
        questions: state.questions.questions,
        answers: state.answers.answers,
    }
}

export default connect(mapStateToProps)(GetResult);