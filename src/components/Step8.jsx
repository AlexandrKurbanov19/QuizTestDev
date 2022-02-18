import React from 'react'
import { Link } from "react-router-dom";
import BtnNext from './button/BtnNext';

export default function Step8() {
  const [condition, setCondition] = React.useState(0);
  const checkValueBtn = (k)=> {
    setCondition(k)
  }
  const res = [
    { name: " Очень сильно" }, 
    { name: " Сильно" }, 
    { name: "Не особо" },
    { name: "Слабо" },
    { name: "Очень слабо" },
  ];
    return (
        <div className="question question-8">
            <div className="wrapper__question">
              <h2 className="question__title">
                Насколько ты чувствительна к критике?
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
              <Link to='/step9'>
              <BtnNext> Далее</BtnNext>
              </Link>
              
            </div>
          </div>
    )
}
