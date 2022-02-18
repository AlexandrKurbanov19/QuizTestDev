import React from 'react'
import image from '../assets/img/block11.png'
import { Link } from "react-router-dom";
import BtnNext from './button/BtnNext';

export default function Step11() {
    return (
        <div className="question question-11">
            <div className="wrapper__question">
              <div className="wrapper-content">
                <div className="content-item">
                  <img src={image} alt="" />
                </div>
                <div className="content-item">
                  <p>
                    Раньше я очень старалась быть “хорошей” и “правильной”. И
                    часто чувствовала вину перед близкими, когда это не
                    получалось.
                  </p>
                  <p>
                    <b>
                      Психологическая сепарация помогла мне обрести уверенность
                      в себе. В моём курсе этому посвящено отдельное видео.
                    </b>
                  </p>
                </div>
              </div>
              <Link to='/step12'>
             
              <BtnNext>  Хочу обрести <br />
                уверенность в себе!</BtnNext>
              </Link>
            
            </div>
          </div>
    )
}
