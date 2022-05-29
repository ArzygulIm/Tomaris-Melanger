import React from 'react';
import Header from "./Header";
import Home from "./Home";
import './style.css'
import Footer from "./Footer";
import FastStart from "./FastStart";
import BePartner from "./BePartner";
import OneClick from "./OneClick";
import Feedback from "./Feedback";

const Main = () => {

    return (
        <div>
           <Header/>
            <Home/>
            <FastStart/>
            <BePartner/>
            <OneClick/>
            <Feedback/>
            <Footer/>
        </div>
    );
};

export default Main;