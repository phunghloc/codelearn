import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './component/HomePage/HomePage';
import IndexPractice from './container/Practice/IndexPractice';

// const IndexPractice = React.lazy(() => import('./container/Practice/IndexPractice'));

function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />

      <Route path="/codelearn/practice" component={IndexPractice}/>

      <Route path="/codelearn" exact component={HomePage} />

    </Switch>
  );

}

export default App;
