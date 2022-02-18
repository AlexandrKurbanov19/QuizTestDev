import React from 'react'
import icon1 from '../../assets/img/icon/border-bottom.svg'
import icon2 from '../../assets/img/icon/check-pink.svg'
import { Link } from "react-router-dom";
import Timer from '../timer/Timer';

export default function SubscribeModal() {
    return (
      <div className='modalBG active'>
              <div className="popap-subscribe active">
        <div className="popap-wrapper">
          <h3>Все 3 курса по 1 подписке!</h3>
          <div className="timer">
            <div className="timer__text">
              И только сегодня я делаю подарок:
              <span className="white"> скидка 40% при оплате за 10 минут! </span>
            </div>
      <Timer />
          </div>
          <p>
            Подпишись и начни меняться УЖЕ СEГОДНЯ!

          </p>
          <div className="price__block">
            <div className="row">
              <p><b>7 дней</b></p>
              <img src={icon1} alt=""></img>
              <p className="price-week"><b>$1,99</b></p>
            </div>
            <div className="row">
              <p><b>Подписка</b></p>
              <img src={icon1} alt=""></img>
              <p className="price-week"><b>$89,99/ 2 месяца</b></p>
            </div>
            <div className="row">
              <p><b> Цена сегодня</b></p>
              <img src={icon1} alt=""></img>
              <p className="price-week main-price">
                <b> $1,99</b>
              </p>
            </div>
          </div>
        
          <h3 className="about-subscribe">Что ты получишь после оплаты?</h3>
          <ul className="success-list">
            <li className="list-item">
              <span className="line-list">
                <img src={icon2} alt=""></img></span>
              Персональную консультацию с автором курса
            </li>
            <li className="list-item">
              <span className="line-list">
                <img src={icon2} alt=""></img></span>
              Доступ к материалам всем курсов на 1 месяц
            </li>
            <li className="list-item">
              <span className="line-list">
                <img src={icon2} alt=""></img></span>
              Доступ в закрытый чат 
            </li>
            <li className="list-item">
              <span className="line-list">
                <img src={icon2} alt=""></img></span>
              Поддержку от меня и приглашенных экспертов курса
            </li>
          </ul>
         <Link to='/Checkout'>
         <button className="btn last goToCheckout">ПЕРЕЙТИ К ОПЛАТЕ</button>
         </Link>
        </div>
      </div>
      </div>
  
    )
}
