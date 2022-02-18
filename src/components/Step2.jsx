import React from 'react'
import { Link } from "react-router-dom";
import BtnNext from './button/BtnNext';

export default function Step2() {
  const [condition, setCondition] = React.useState(0);
  const checkValueBtn = (k)=> {
    setCondition(k)
  }
  const res = [
    { name: "1-2 минуты" }, 
    { name: "10-15 минут" }, 
    { name: "30 минут" },
    { name: "1 час" },
    { name: "2 часа" },
    { name: "Больше двух часов" },
  ];

    return (
        <div className="question">
            <div className="wrapper__question">
              <h2 className="question__title">
                Сколько времени в день ты тратишь на выбор одежды и макияж?
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
              <Link to="/step3">
             
              <BtnNext>Далее</BtnNext>
              </Link>
            
            </div>
          </div>
    )
}
