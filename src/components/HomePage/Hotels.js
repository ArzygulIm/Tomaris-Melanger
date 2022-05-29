import React, {useState} from 'react';
import {CITY_INFO} from "../../config";

const Hotels = () => {
    const [cityID, setCityID] = useState(0)
    return (
        <div>
            <div className="row">

                        <div className="col-3">
                            <div className="hotels__box">
                                <img src={CITY_INFO[0].hotel[0].img} alt=""/>
                                <h6>{CITY_INFO[0].hotel[0].name}</h6>
                                <p>{CITY_INFO[0].hotel[0].description}</p>
                                <button>Бронировать</button>
                            </div>
                        </div>

                <div className="col-3">
                    <div className="hotels__box">
                        <img src={CITY_INFO[0].hotel[1].img} alt=""/>
                        <h6>{CITY_INFO[0].hotel[1].name}</h6>
                        <p>{CITY_INFO[0].hotel[1].description}</p>
                        <button>Бронировать</button>
                    </div>
                </div>

                <div className="col-3">
                    <div className="hotels__box">
                        <img src={CITY_INFO[0].hotel[2].img} alt=""/>
                        <h6>{CITY_INFO[0].hotel[2].name}</h6>
                        <p>{CITY_INFO[0].hotel[2].description}</p>
                        <button>Бронировать</button>
                    </div>
                </div>

                <div className="col-3">
                    <div className="hotels__box">
                        <img src={CITY_INFO[0].hotel[3].img} alt=""/>
                        <h6>{CITY_INFO[0].hotel[3].name}</h6>
                        <p>{CITY_INFO[0].hotel[3].description}</p>
                        <button>Бронировать</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Hotels;