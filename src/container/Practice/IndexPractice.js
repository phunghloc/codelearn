import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';

import Practice from './OnTest/Practice';
import GetResult from './GetResult/GetResult';
import Loading from '../../component/Loading/Loading';

const IndexPractice = (props) => {
    const { onFetchData } = props;

    useEffect(() => {
        const params = props.location.search.slice(1).split('&');
        const list = {};
        for (const param of params) {
            const [key, value] = param.split('=');
            list[key] = value;
        }
        console.log(list['id']);
        onFetchData(list['id']);
    }, [onFetchData, props.location.search]);

    if (props.loading || !props.questions) return <Loading />;
    
    if (props.answers) return <GetResult {...props} />

    return <Practice {...props} />;
}

const mapStateToProps = state => {
    return {
        loading: state.questions.loading,
        questions: state.questions.questions,
        answers: state.answers.answers,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchData: (id) => dispatch(actions.onFetchData(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPractice);