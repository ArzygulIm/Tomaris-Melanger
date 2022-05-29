import React from 'react';
import colImg2 from '../../images/Vector.png'
import colImg1 from '../../images/Vector2.png'
import colImg5 from '../../images/Vector3.png'
import colImg4 from '../../images/Vector4.png'
import colImg3 from '../../images/Vector5.png'


const BePartner = () => {
    return (
        <section id={"be-partner"}>
            <div className="container">
                <div className="be-partner__wrap">
                    <h5>Стань нашим партнером и начни зарабатывать: </h5>
                    <p className={'be-partner__text'}>Автоматизируй свой бизнес вместе с нами. Подключись к нашей системе бронирования, что бы получать
                        новых клиентов и распределить нагрузку равномерно на весь день. Мы предоставляем удобные
                        инструменты для формирования отчетов в несколько кликов и многое другое. </p>
                    <div className="row">
                        <div className="col-1">
                            <div className="be-partner__box">
                                <div>
                                    <img src={colImg1} alt=""/>
                                </div>
                                <p>Просмотривайте
                                    историю заказа</p>
                            </div>

                        </div>
                        <div className="col-1">
                            <div className="be-partner__box">
                                <div><img src={colImg2} alt=""/></div>
                                <p>Создание отчета
                                    неделя/месяц/год </p>
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="be-partner__box">
                                <div><img src={colImg3} alt=""/></div>
                                <p>Обратная связь
                                    от клиентов</p>
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="be-partner__box">
                                <div><img src={colImg4} alt=""/></div>
                                <p>Контроль качества
                                    работы сотрудников</p>
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="be-partner__box">
                                <div><img src={colImg5} alt=""/></div>
                                <p>Бесконтактная
                                    оплата услуг</p>
                            </div>
                        </div>
                    </div>
                    <button>Стать партнером</button>
                </div>
            </div>
        </section>
    );
};

export default BePartner;