import React from 'react';
import { Link } from 'react-router-dom';

import './NavItems.css';
import NavItem from './NavItem';
import CodeLearnLogo from '../../asset/img/codelearn-logo.png';

const navItems = (props) => (
    <ul className="NavItems-NavItems">
        <li className="NavItem"><Link to='/codelearn'><img src={CodeLearnLogo} alt="CodeLearn Logo"/></Link></li>
        <NavItem link='/codelearn' exact>Trang chủ</NavItem>
        <NavItem link='/codelearn/practice'>Luyện tập</NavItem>
        <NavItem link='/codelearn/create'>Tạo bài luyện tập</NavItem>
    </ul>
);

export default navItems;