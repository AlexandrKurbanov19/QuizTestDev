import React from 'react'
import { Link } from "react-router-dom";
import BtnNext from './button/BtnNext';

export default function Step5() {
  const [condition, setCondition] = React.useState(0);
  const checkValueBtn = (k)=> {
    setCondition(k)
  }
  const res = [
    { name: "Всегда" }, 
    { name: "Часто" }, 
    { name: "Иногда" },
    { name: "Никогда" },
  ];

    return (
        <div className="question">
        <div className="wrapper__question">
          <h2 className="question__title">
            Как часто ты злишься на своё отражение в зеркале?
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
          <Link to='/step6'>
          
          <BtnNext>Далее</BtnNext>
          </Link>
         
        </div>
      </div>
    )
}
