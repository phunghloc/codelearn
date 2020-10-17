import * as actionTypes from '../actions/actionTypes';

// const title= [
//     {id: "-MJoLhz_kQAOhrZnTcRm", title: "Bài luyện tập số 5", tag: 'English'},
//     {id: "-MJoLhzkOphRapllMXgb", title: "Bài luyện tập số 2"},
//     {id: "-MJoLhzlyt5R72mI47s0", title: "Bài luyện tập số 3"},
//     {id: "-MJoLhzh1BImkwVkfai4", title: "Bài luyện tập số 4"},
//     {id: "-MJoLhzqoRk_xdlEWk72", title: "Bài luyện tập số 1"},
//     {id: "-MJoNGLZKwRoVVWcIX3i", title: "Combo 25 câu"},
//     {id: "-MJocgwBFL7XhF_K7TXz", title: "anh văn căn bản"},

// ];

const initialState = {
    loading: false,
    error: false,
    data: null,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ON_GET_TITLE:
            return {
                ...state,
                loading: true,
                error: false,
                data: null,
            }
        
        case actionTypes.ON_GET_TITLE_SUCCESS: 
            return {
                ...state,
                loading: false,
                data: action.data,
            }

        case actionTypes.ON_GET_TITLE_FAIL: 
            return {
                ...state,
                loading: false,
                error: true,
            }

        default:
            return {
                ...state
            }
    }
}

export default reducer;