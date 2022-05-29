import React from 'react';
import fastStart from '../../images/iPhone 12 mockup 2 1.png'
import fast1 from '../../images/Vectorfast1.png'
import fast2 from '../../images/Vectorfast4.png'
import fast3 from '../../images/Vectorfast3.png'
import fast4 from '../../images/Vectorfast2.png'


const FastStart = () => {
    return (
        <section id={'fast-start'}>
            <div className="container">
                <div className="fast-start__wrap">
                    <img src={fastStart} alt=""/>
                    <div className="fast-start__text">
                        <h5>Быстрый старт:</h5>
                        <div className="col12">
                            <div className="fast-start__box">
                                <div className="fast-start__img-wrap">
                                    <img src={fast1} alt=""/>
                                </div>
                                <div>
                                    <h6>Зарегистрируйся</h6>
                                    <p>Доступно на всех устройствах</p>
                                </div>
                            </div>
                            <div className="fast-start__box">
                                <div className="fast-start__img-wrap">
                                    <img src={fast2} alt=""/>
                                </div>
                                <div>
                                    <h6>Выбери, куда хочешь поехать</h6>
                                    <p>Введи город в строку поиска</p>
                                </div>
                            </div>
                            <div className="fast-start__box">
                                <div className="fast-start__img-wrap">
                                    <img src={fast3} alt=""/>
                                </div>
                                <div>
                                    <h6>Выбери дополнительные услуги</h6>
                                    <p>Закажи такси или забронируй отель</p>
                                </div>
                            </div>
                            <div className="fast-start__box">
                                <div className="fast-start__img-wrap">
                                    <img src={fast4} alt=""/>
                                </div>
                                <div>
                                    <h6>Оплати сразу же</h6>
                                    <p>Бесконтактная оплата и прозрачные цены</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FastStart;