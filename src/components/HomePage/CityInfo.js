import React, {useState} from 'react';
import {CITY_INFO} from "../../config";

const CityInfo = ({name}) => {
    const [cityID,setCityID] = useState(0)

    return (
        <div className={'city-info'}>
            <h5>{CITY_INFO[cityID].name}</h5>
            <p>{CITY_INFO[cityID].description}</p>
        </div>
    );
};

export default CityInfo;