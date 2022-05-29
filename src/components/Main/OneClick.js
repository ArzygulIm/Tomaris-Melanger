import React from 'react';
import oneClickImg from '../../images/Mask Group.png'

const OneClick = () => {
    return (
        <section id={'one-click'}>
            <div className="container one-click__container">
                <div className="one-click__wrap">
                    <div className="one-click__text">
                        <h5>Хватит Одного Клика</h5>
                        <p>Приложение скоро будет доступно для бета
                            тестирования в AppStore и Google Play</p>
                    </div>
                    <img className={'one-click__img'} src={oneClickImg} alt=""/></div>
            </div>
        </section>
    );
};

export default OneClick;