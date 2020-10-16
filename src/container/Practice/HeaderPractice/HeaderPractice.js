import React from 'react';
import { PageHeader } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/actions';

import './HeaderPractice.css';

const headerPractice = (props) => {
    const clearDataAndGoBack = () => {
        props.onClearData();
        props.back();
    }

    return (
        <PageHeader
            className="Practice-Header"
            onBack={clearDataAndGoBack}
            title={props.title}
            subTitle={props.subTitle}
        />
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onClearData: () => dispatch(actions.onClearData()),
    }
}

export default connect(null, mapDispatchToProps)(headerPractice);