import React from 'react'
import img1Desctop from '../assets/img/succes1.png'
import img1Mobile from '../assets/img/mobile/succes1.png'
import img2Desctop from '../assets/img/succes2.png'
import img2Mobile from '../assets/img/mobile/succes2.png'
import img3Desctop from '../assets/img/succes3.png'
import img3Mobile from '../assets/img/mobile/sucess3.png'
import validator from 'validator'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function Step15() {
  let navigate = useNavigate();

  const [emailError, setEmailError] = React.useState('')
  const [nameError, setNameError] = React.useState('')
  const [disabled, setDisabled]  = React.useState(true)

  const validateEmail = (e) => {
    let email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('');
      localStorage.setItem('valid', 'valid')
    } else {
      setEmailError('Введите корректный емайл!');
      localStorage.setItem('valid', 'no valid')
    }
    handleNextQuestion()
  }

  const validName = (e) => {
    if (e.target.value < 2) {
      setNameError('Поля обязательно для заполнения!');
      localStorage.setItem('valid', 'no valid')
    } else {
      localStorage.setItem('valid', 'valid')
      setNameError('');
  
    }
    handleNextQuestion()
  }

  const handleNextQuestion = () => {
 
    if (localStorage.getItem('valid') === 'valid') {
      setDisabled(false)
      
    } else {
      setDisabled(true)
 
    }
  }

  const handlerSendForm = () => {
    navigate('/step16');
  }
    return (
      <div className="question question-15">
      <div className="wrapper__question">
        <h2 className="question__title">Спасибо, что прошла тест!</h2>
        <div className="wrapper-success">
          <p>
            Он помог мне лучше тебя понять. И знаешь, у меня тоже были
            похожие проблемы. Смотри, в чём я могу поделиться с тобой
            своим опытом.С моей помощью уже больше тысячи женщин встретили
            мужчину мечты, стали красивее, увереннее в себе и счастливее.
          </p>
          <div className="success-box">
            <div className="succes-img">
              <img src={img1Desctop} alt="" className="desktop-img" />
              <img
                src={img1Mobile}
                alt=""
                className="mobile-img"
              />
            </div>
            <div className="succes-text">
              <h2>
                Mr.Right-for-you

                <span className="price">4990 ₽</span>
              </h2>
              <p>
                Ты узнаешь, что на самом деле ищешь в мужчине - и безмерно
                удивишься.
              </p>
              <p>
                Ты поймёшь, почему до этого вечно выбирала не тех - но не
                расстроишься.
              </p>
              <p>
                Ты найдёшь свою истинную мотивацию в отношениях - и
                составишь план.
              </p>
              <p>
                Ты выяснишь, какой мужчина нужен именно тебе - и больше
                никогда не ошибёшься.
              </p>
            </div>
          </div>
          <div className="success-box">
            <div className="succes-text">
              <h2>
                Dress to Die for <br />
                <span className="title-text"
                  >Пусть твоё платье скажет всё за тебя</span
                >

                <span className="price">2990 ₽</span>
              </h2>

              <ul className="success-list">
                На этом курсе я разбираю:
                <li className="list-item">
                  <span className="line-list"> — </span> почему мы часто не
                  позволяем себе выглядеть так, как хотим
                </li>
                <li className="list-item">
                  <span className="line-list"> — </span> какое впечатление мы
                  на самом деле производим своей одеждой
                </li>
                <li className="list-item">
                  <span className="line-list"> — </span> базовые правила
                  подбора гардероба, которые подходят всем вне зависимости
                  от фигуры
                </li>
              </ul>
            </div>
            <div className="succes-img">
              <img src={img2Desctop} alt="" className="desktop-img" />
              <img
                src={img2Mobile}
                alt=""
                className="mobile-img"
              />
            </div>
          </div>
          <div className="success-box">
            <div className="succes-img">
              <img src={img3Desctop} alt="" className="desktop-img" />
              <img
                src={img3Mobile}
                alt=""
                className="mobile-img"
              />
            </div>
            <div className="succes-text">
              <h2>
                Killer Face

                <br />
                <span className="title-text"> Сотри морщины с лица</span>

                <span className="price"> 3990 ₽</span>
              </h2>

              <ul className="success-list">
                <li className="list-item">
                  <span className="line-list"> — </span> о привычках, которые
                  нас старят
                </li>
                <li className="list-item">
                  <span className="line-list"> — </span> о том, почему уже в
                  20 лет могут появиться морщины
                </li>
                <li className="list-item">
                  <span className="line-list"> — </span> о том, как я
                  попробовала ботокс и к каким ужасным последствиям это
                  привело
                </li>
                <li className="list-item">
                  <span className="line-list"> — </span> о том, как я долго
                  боялась что-то делать со своим лицом, и почему, наконец,
                  решилась
                </li>
                <li className="list-item">
                  <span className="line-list"> — </span> о самых эффективных
                  упражнениях, которые изменили мое лицо за 3 недели
                </li>
              </ul>
            </div>
          </div>
          <div className="gift-form">
            <h3 className="form-title">
              А ещё у меня есть для тебя маленький, но очень полезный
              сюрприз.
            </h3>
            <p className="form-content">
              Я дарю тебе секретный чек-лист для похода в магазин.
               <span className="pink"
                > С ним ты всегда будешь уходить из торгового центра
                счастливая и с шикарной обновкой!</span
              >
            </p>
            <form action="#" method="POST">
              <p className="form-text">
                Введи своё имя и адрес электронной почты, чтобы получить
                бесплатный чек-лист:
              </p>
              <input
                type="text"
                name="name"
                className="giftName"
                onChange={(e) => validName(e)}
                placeholder="Введи свое имя"
              />
                  <span className='form-error'>{nameError}</span>
              <input
                type="email"
                id="userEmail" 
                onChange={(e) => validateEmail(e)}
                name="email"
                className="giftEmail"
                placeholder="Введи адрес электронной почты"
              />
                          <span className='form-error'>{emailError}</span>
              <button className="btn send-form" onClick={handlerSendForm} disabled={disabled ? disabled : false}>
              Получить бесплатный <br />
                чек-лист
              </button>
             

          
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}
