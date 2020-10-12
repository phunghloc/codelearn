import React from 'react';
import { Layout } from 'antd';
// import { Switch } from 'react-router-dom';

import './App.css';
import FooterHM from './component/Footer/Footer';
import HeaderHM from './component/Header/Header';
import HomePage from './component/HomePage/HomePage';

function App() {
  return (
    // <Switch>
      <Layout className="Layout-Layout">
        <HeaderHM />

        <HomePage />

        <FooterHM />
      </Layout>

    // </Switch>
  );

}

export default App;
