import * as actionTypes from './actionTypes';

export const onSendAnswers = (answers) => {
    return {
        type: actionTypes.SEND_ANSWERS,
        answers: answers,
    }
}