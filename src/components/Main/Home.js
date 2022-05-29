import React from 'react';
import arrow from '../../images/Arrow 1.png'
import threePhones from '../../images/iPhone 12 Pro Mockup 1.png'
import {Link} from "react-router-dom";
const Home = () => {

    return (
        <section id={'home'}>
            <div className="container">
                <div className="home__wrap">
                    <div className="home__text">
                        <h1>ВСЕ УСЛУГИ ДЛЯ ПУТЕШЕСТВЕННИКОВ В ОДНОМ ПАКЕТЕ</h1>
                        <img className={'arrow'} src={arrow} alt=""/>
                        <p>ПУТЕШЕСТВУЙ С КОМФОРТОМ</p>
                        <button><Link to={'/sign-up'}>НАЧНИ СЕЙЧАС</Link> </button>
                    </div>
                    <img src={threePhones} alt=""/></div>
            </div>
        </section>
    );
};

export default Home;