import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GetDetailTestReducer from './store/reducers/GetDetailTest';
import SendAnswersReducer from './store/reducers/SendAnswers';
import SendPracticeReducer from './store/reducers/SendPractice';
import GetAllTitleReducer from './store/reducers/GetAllTitle';
import AuthReducer from './store/reducers/Auth';

const rootReducers = combineReducers({
  questions: GetDetailTestReducer,
  answers: SendAnswersReducer,
  sendPractice: SendPracticeReducer,
  getAllTitle: GetAllTitleReducer,
  auth: AuthReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
