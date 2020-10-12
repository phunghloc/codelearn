import React, { useState } from 'react';
import { Drawer } from 'antd';

import './SideDraw.css';
import NavItems from '../NavItems/NavItems';
import SideDrawMenu from './SideDrawMenu';

const SideDraw = (props) => {
    const [ visible, setVisible ] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
      <>
        <SideDrawMenu clicked={showDrawer} close={visible}/>
        <Drawer
          placement={'left'}
          closable={false}
          onClose={onClose}
          visible={visible}
          key={'left'}
        >
          <NavItems />
        </Drawer>
      </>
    );
}

export default SideDraw;