import React from 'react'
import blockImg from '../assets/img/block4-woman.png'
import { Link } from "react-router-dom";
import BtnNext from './button/BtnNext';

export default function Step4() {
    return (
        <div className="question">
            <div className="wrapper__question">
              <div className="wrapper-content">
                <div className="content-item">
                  <img src={blockImg} alt="" />
                </div>
                <div className="content-item">
                  <p>
                    Когда-то я не носила ничего, кроме джинсов и футболок. Они
                    мне не нравились, но казалось, что подобрать платье на мою
                    фигуру просто нереально.
                  </p>
                  <p>
                    В один день я психанула и выбросила почти весь свой
                    гардероб. У меня остались одни джинсы и пара топов - в них я
                    и ходила на курсы стилистов.
                  </p>
                  <p>
                    <b
                      >Теперь я знаю, как одеваться стильно с любой фигурой.
                      <br />
                      И тебя научу.</b
                    >
                  </p>
                </div>
              </div>
              <Link to='/step5'>
             
              <BtnNext>Хочу стильно одеваться!</BtnNext>
              </Link>
            
            </div>
          </div>
    )
}
