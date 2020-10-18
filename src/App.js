import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './component/HomePage/HomePage';
import IndexPractice from './container/Practice/IndexPractice';
import Create from './container/Create/Create';
import AllPractice from './container/AllPractice/AllPractice';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />

      <Route path="/codelearn/allpractice" component={AllPractice} />

      <Route path="/codelearn/practice" component={IndexPractice}/>

      <Route path="/codelearn/create" component={Create} />

      <Route path="/codelearn" exact component={HomePage} />

    </Switch>
  );

}

export default App;
