import React from 'react'
import dress from '../assets/img/icon/002-dress.png'
import diamond from '../assets/img/icon/001-diamond-ring.png'
import smiling from '../assets/img/icon/003-smiling.png'
import subscribe from '../assets/img/subscribe.png'
import subscribe2 from '../assets/img/mobile-subscribe.png'
import star from '../assets/img/icon/bx_bx-calendar-star.png'
import group from '../assets/img/icon/Group.png'
import Comments from './Comments'
import SubscribeModal from './modal/SubscribeModal'


export default function Step16() {
  const [modalSubscribe, setModalSubscribe] = React.useState(false)

  const handleShowModal = () => {
    setModalSubscribe(prev => !prev)
  }

    return (
      <div className="question question-16">
        {modalSubscribe ?  <SubscribeModal/> : null}
       
      <div className="wrapper__question">
        <div className="wrapper-success">
          <h2>Нужны ли тебе эти курсы?</h2>

          <div className="success-box">
            <div className="success-container">
              <h2>
                <img
                  src={diamond}
                  alt=""
                />Mr.Right-for-you
              </h2>

              <ul className="success-list">
                <li className="list-item">
                  <span className="line-list"> — </span> Тебе часто бывает
                  стыдно перед окружающими за поведение своих родителей,
                  детей, друзей и кавалеров
                </li>
                <li className="list-item">
                  <span className="line-list"> — </span> Ты часто вспоминаешь
                  тех, с кем поссорилась, и думаешь: “Вот, что надо было
                  им тогда сказать!”
                </li>
                <li className="list-item">
                  <span className="line-list"> — </span> Тебе часто кажется,
                  что мужчины делают некоторые вещи тебе назло
                </li>
              </ul>
            </div>
          </div>
          <div className="success-box">
            <div className="success-container">
              <h2>
                <img src={dress} alt="" />
                Dress to Die for
              </h2>
              <ul className="success-list">
                <li className="list-item">
                  <span className="line-list"> — </span> Поход по магазинам
                  для тебя - синоним кошмара
                </li>
                <li className="list-item">
                  <span className="line-list"> — </span> Прямо сейчас тебе
                  нечего надеть на свидание
                </li>
                <li className="list-item">
                  <span className="line-list"> — </span> Ты и забыла, каково
                  это - улыбаться отражению в зеркале
                </li>
              </ul>
            </div>
          </div>
          <div className="success-box">
            <div className="success-container">
              <h2>
                <img src={smiling} alt="" />
                Killer Face
              </h2>
              <ul className="success-list">
                <li className="list-item">
                  <span className="line-list"> — </span> Макияж больше не
                  может скрыть твои мешки под глазами
                </li>
                <li className="list-item">
                  <span className="line-list"> — </span> Ты часто недосыпаешь
                </li>
                <li className="list-item">
                  <span className="line-list"> — </span> У тебя уже есть
                  мимические морщины
                </li>
              </ul>
            </div>
          </div>

          <div className="subscribe">
            <div className="subscribe-title">
              Если ты согласна хотя бы с одним <br />
              из этих утверждений - тогда <br />
              <span className="pink"> тебе точно нужны мои курсы! </span>
            </div>
            <div className="subscribe-content">
              <img
                src={subscribe}
                alt=""
                className="desktop-subscribe"
              />
              <img
                src={subscribe2}
                alt=""
                className="mobile-subscribe"
              />
              <div className="subscribe-text">
                <p>
                  <img src={star} alt="" />
                  Тем более сейчас, когда они доступны по единой подписке
                  за 599 руб
                </p>
                <br />
                <p>
                  <img src={group} alt="" /> И когда у моих
                  подписчиц наконец-то есть возможность общаться, делиться
                  опытом и поддерживать друг друга.
                </p>
              </div>
            </div>
            <button onClick={handleShowModal} className="btn last subscribe-btn openSubscribe">
              Подписаться сейчас!
            </button>
          </div>
          <Comments/>
                
        <button onClick={handleShowModal} className="btn last openSubscribe">
          Изменить свою жизнь прямо сейчас
        </button>
        </div>
      </div>
    </div>
    )
}
