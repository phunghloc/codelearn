import React from 'react';

import './SideDrawMenu.css';

const menu = (props) => (
    <div className={"SideDrawMenu " + (props.close ? "SideDrawMenu-Close" : null)} onClick={props.clicked} >
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default menu;