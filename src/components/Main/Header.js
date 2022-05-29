import React from 'react';
import logo from '../../images/All In One.png'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header__wrap">
                    <img src={logo} alt=""/>
                    <div className={"header__navigation"}>
                    <ul>
                        <li>Как использовать</li>
                        <li>Партнерам</li>
                        <li>Отзывы</li>
                    </ul>
                        <button><Link to={'/home'}>Получить доступ</Link></button>
                </div>
                </div>
            </div>
        </header>
    );
};

export default Header;