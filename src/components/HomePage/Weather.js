import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";


const Weather = () => {

    const data = useSelector(state=>state.weather)
    const [weather,setWeather] =useState("")
    useEffect(() => {
        if (data?.weather) {
            setWeather(data.weather[0].main)
        }
    }, [data])

    return (
        <div>

                {data?.name ? <h2>{data?.name}</h2> : <h2>City</h2>}
                {data?.main?.temp ? <h2>{Math.round(+data?.main?.temp - 273.15) + '° C'}</h2> :
                    <h2>Temperature</h2>}
                {data?.weather?<h2>{data.weather[0].main}</h2> : <h2>Weather</h2>}


                <div style={{width:"90%",height:"100px"}}>
                    {weather==='Clouds?'?
                        <p>Отличная погода чтобы гулять</p>:
                        weather==='Clear'?
                            <p>Жаркооооо! Мороженное будем заказать?</p>:
                            weather==='Rain'?
                                <p>Не забудьте зонтик</p>:
                                weather==='Haze'?
                                    <p>В тумане лучше сидеть дома</p>:
                                    weather==='Snow'?
                                        <p>Урраааааа! Слепим снеговика!</p>:
                                        null}
                </div>

        </div>
    );
};

export default Weather;