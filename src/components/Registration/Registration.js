import React from 'react';
import RegistrationForm from "./RegistrationForm";
import './style.css'
import {Link} from "react-router-dom";
import close from '../../images/x.png'

const Registration = () => {
    return (
        <section id={'registration'}>
            <button className={'close'}><Link to={'/'}><img src={close} alt=""/></Link></button>
            <div className="registration__wrap">
            <h5>Стань нашим партнером
                и начни зарабатывать: </h5>
            <RegistrationForm/>
            </div>
        </section>
    );
};

export default Registration;