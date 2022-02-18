import React from 'react'
import { Link } from "react-router-dom";
import BtnNext from './button/BtnNext';

export default function Step6() {
  const [condition, setCondition] = React.useState(0);
  const checkValueBtn = (k)=> {
    setCondition(k)

  }
  const res = [
    { name: "Всё полностью устраивает" }, 
    { name: " В-основном любимые вещи, но есть дыры, которые никак невыходит закрыть" }, 
    { name: "Есть пара-тройка любимых вещей, на остальное и смотреть нехочется" },
    { name: "Ничего из того, что висит в шкафу, меня не радует" },
  ];
    return (
        <div className="question question-6">
            <div className="wrapper__question">
              <h2 className="question__title">
                Насколько ты довольна своим гардеробом?
              </h2>
              <div className="wrapper__answers">
              {
              res.map((data, k) => (
                <button
                  key={k}
                  className={`btn radio-btn ${condition === k ? "active" : ""}`}
                  onClick={() => checkValueBtn(k)}
                >
                  {data.name}
                </button>
              ))
            }
              </div>
              <Link to='/step7'>
             
              <BtnNext>Далее</BtnNext>
              </Link>
             
            </div>
          </div>
    )
}
