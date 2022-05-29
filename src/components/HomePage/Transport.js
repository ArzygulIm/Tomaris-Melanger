import React from 'react';

const Transport = () => {
    return (
        <div>
            <div className="container">
                <div className="transport__wrap">
                    <h4>Транспорты</h4>
                    <div>
                        <h5>Авиабилеты</h5>
                        <div className="row">
                            <div className="col-4">
                                <box>
                                    <h6>Air Manas</h6>
                                    <p>100$</p><button>Бронировать</button>
                                </box>
                            </div>
                            <div className="col-4">
                                <box>
                                    <h6>Pegasus</h6>
                                    <p>120$</p>
                                    <button>Бронировать</button>
                                </box>
                            </div>
                            <div className="col-4">
                                <box>
                                    <h6>Air Uzbekstan</h6>
                                    <p>110$</p>
                                    <button>Бронировать</button>
                                </box>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5>Такси</h5>
                        <div className="row">
                            <div className="col-4">
                                <box>
                                    <h6>Жорго</h6>
                                    <p>60сом посадка 15сом/км</p>
                                    <button>Заказать</button>
                                </box>
                            </div>
                            <div className="col-4">
                                <box>
                                    <h6>Яндекс Такси</h6>
                                    <p>60сом посадка 10сом/км</p>
                                    <button>Заказать</button>
                                </box>
                            </div>
                            <div className="col-4">
                                <box>
                                    <h6>Намба</h6>
                                    <p>70сом посадка 15сом/км</p>
                                    <button>Заказать</button>
                                </box>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transport;