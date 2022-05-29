import React from 'react';
import img1 from '../../images/Vectorinp.png'
import img2 from '../../images/Vectorinp2.png'
import img3 from '../../images/Vectorinp3.png'

const RegistrationForm = () => {
    return (
        <form>
            <div className="reg-wrap"><img src={img1} alt=""/><input type="text" placeholder={'Введите имя'}/></div>
            <div className="reg-wrap"><img src={img2} alt=""/><input type="text" placeholder={'E-mail'}/></div>
            <div className="reg-wrap"><img src={img3} alt=""/><input type="text" placeholder={'Номер телефона'}/></div>


            <div className="checkbox__wrap">
            <input className={'checkbox'} type="checkbox"/><span>Я хочу получать новости на почтовый адрес</span></div>
            <div className="checkbox__wrap">
            <input className={'checkbox'}  type="checkbox"/><span>Я согласен учавствовать в сборе данных</span></div>
            <button></button>
        </form>
    );
};

export default RegistrationForm;