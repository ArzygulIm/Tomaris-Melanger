import React, {useEffect,useState} from 'react';
import {getWeather} from "../../actions";
import {useDispatch} from "react-redux";
import './style.css'
import HomepageForm from "./HomepageForm";
import Weather from "./Weather";
import Map from "./Map";
import Header from "../Main/Header";
import Hotels from "./Hotels";
import CityInfo from "./CityInfo";
import Transport from "./Transport";
import Translator from "./Translator";

const HomePage = () => {
    const [name,setName] = useState('Bishkek')

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getWeather('Bishkek'))
    }, [])
    return (
        <div className={'homepage'}>
            <Header/>
            <div className={'homepage-form'}>
                <HomepageForm
                    name={name}
                    setName={setName}
                />
            </div>
            <div style={{display:'flex',justifyContent:"space-around",marginTop:"25px"}}>
            <Weather/>
            <CityInfo name={name}/>
            </div>
            <Translator/>
            <Hotels/>
            <Transport/>
            <Map/>
        </div>
    );
};

export default HomePage;