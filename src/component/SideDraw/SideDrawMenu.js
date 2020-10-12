import React from 'react';

import './SideDrawMenu.css';

const menu = (props) => (
    <div className={"SideDrawMenu" + (props.close ? " SideDrawMenu-Close" : "")} onClick={props.clicked} >
        <div className="SideDrawMenu-div"></div>
        <div className="SideDrawMenu-div"></div>
        <div className="SideDrawMenu-div"></div>
    </div>
);

export default menu;