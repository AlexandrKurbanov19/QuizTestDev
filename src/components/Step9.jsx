import React from 'react'
import { Link } from "react-router-dom";
import BtnNext from './button/BtnNext';

export default function Step9() {
  const [condition, setCondition] = React.useState(0);
  const checkValueBtn = (k)=> {
    setCondition(k)
  }
  const res = [
    { name: " Регулярно" }, 
    { name: " Часто" }, 
    { name: "Иногда" },
    { name: "Редко" },
    { name: "Почти никогда" },
  ];
    return (
        <div className="question question-9">
            <div className="wrapper__question">
              <h2 className="question__title">
                Как часто ты обижаешься на окружающих?
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
              <Link to='/step10'>
              <BtnNext> Далее</BtnNext>
              </Link>
             
            </div>
          </div>
        
    )
}
