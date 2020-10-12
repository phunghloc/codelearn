import React from 'react';
import { Layout } from 'antd';
// import { Switch } from 'react-router-dom';

import './App.css';
import FooterHM from './component/Footer/Footer';
import HeaderHM from './component/Header/Header';

const { Content } = Layout;

function App() {
  return (
    // <Switch>
      <Layout className="Layout-Layout">
        <HeaderHM />

        <Content style={{ padding: '0 50px', }}>
          <div className="site-layout-content">Content</div>
        </Content>

        <FooterHM />
      </Layout>

    // </Switch>
  );

}

export default App;
