import React from 'react'
import imageOne from '../assets/img/block7-1.png'
import imageTwo from '../assets/img/block7-2.png'
import { Link } from "react-router-dom";
import BtnNext from './button/BtnNext';

export default function Step7() {
    return (
        <div className="question question-7">
        <div className="wrapper__question">
          <div className="wrapper-content">
            <div className="content-item">
              <img src={imageOne} alt="" />
              <img src={imageTwo} alt="" />
            </div>
            <div className="content-item">
              <p>Три года назад я не знала, как жить.</p>
              <p>
                Меня в очередной раз подло бросил парень. Напоследок он
                сказал, что я выгляжу, как старуха. Я посмотрела в зеркало -
                и увидела в нём морщины, сухо поджатые губы и второй
                подбородок.
              </p>
              <p>
                Тогда я впервые за много лет расплакалась, и это стало моей
                ежедневной привычкой.
              </p>
              <p>
                Но в один момент слёзы закончились.Я занялась фейс-фитнесом
                и вылепила себе такое лицо, какое захотела.
              </p>
              <p>
                <b
                  >Тебя я тоже могу этому научить. <br />
                  Не веришь? Сравни мои фото <br />
                  тогда и сейчас!</b
                >
              </p>
            </div>
          </div>
          <Link to='/step8'>
         
          <BtnNext>    Хочу избавиться от <br />
            морщин!</BtnNext>
          </Link>
         
        </div>
      </div>
    )
}
