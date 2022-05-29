import React from 'react';
import logo from "../../images/All In One (1).png";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer__wrap">
                    <img src={logo} alt=""/>
                    <div className={"footer__navigation"}>
                        <ul>
                            <li>Как использовать</li>
                            <li>Партнерам</li>
                            <li>Отзывы</li>
                        </ul>
                        <button><Link to={'/home'}>Получить доступ</Link></button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;