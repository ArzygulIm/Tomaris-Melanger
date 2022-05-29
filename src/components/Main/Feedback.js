import React from 'react';
import btn1 from '../../images/btn.png'
import btn2 from '../../images/btn2.png'
import img1 from '../../images/image 1458.png'
import img2 from '../../images/image 1458 (1).png'
import img3 from '../../images/image 1458 (2).png'

const Feedback = () => {
    return (
        <section id={'feedback'}>
            <div className="container">
                <div className="feedback__wrap">
                    <div className="feedback__first">
                        <h5>Отзывы</h5>
                        <div >
                            <p className={'feedback__text'}>Таким образом консультация с широким активом влечет за собой процесс внедрения и
                                модернизации направлений прогрессивного развития. Разнообразный и богатый опыт
                                сложившаяся структура организации обеспечивает широкому кругу (специалистов)
                                участие в формировании модели развития.</p>
                            <div className="feedback-btn__wrap">
                                <button><img src={btn1} alt=""/></button>
                                <button><img src={btn2} alt=""/></button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="feedback__box"><img src={img1} alt=""/>
                                <div>
                                <h6>Aidana Z.</h6>
                                <p>Project manager</p></div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="feedback__box"><img src={img2} alt=""/>
                                <div>
                                <h6>Arzygul I.</h6>
                                <p>Front-end developer</p></div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="feedback__box"><img src={img3} alt=""/>
                                <div>
                                <h6>Matlyuba S.</h6>
                                <p>Back-end developer</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;