import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './component/HomePage/HomePage';
import Practice from './container/Practice/Practice';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />

      <Route path="/codelearn/practice" component={Practice}/>

      <Route path="/codelearn" exact component={HomePage} />

    </Switch>
  );

}

export default App;
