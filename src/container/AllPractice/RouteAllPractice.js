import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions'

import Loading from './ShowAllPractice/Loading';
import ShowAllPractice from './ShowAllPractice/ShowAllPractice';

const RouteAllPractice = props => {
    // TODO: Get data khi load vào component
    const { onGetAllPractice } = props;

    useEffect(() => {
        onGetAllPractice();
    }, [onGetAllPractice]);

    if (props.loading) return <Loading />;
    if (props.data) {
        const datas = [];
        for (const data in props.data) {
            datas.push(props.data[data]);
        }

        return <ShowAllPractice data={datas} />;
    }

    return <Loading />;
} 

const mapStateToProps = state => {
    return {
        loading: state.getAllTitle.loading,
        data: state.getAllTitle.data,
        error: state.getAllTitle.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetAllPractice: () => dispatch(actions.onGetAllTitle()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteAllPractice);