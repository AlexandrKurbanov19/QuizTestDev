import React from 'react'
import { Link } from "react-router-dom";
import BtnNext from './button/BtnNext';

export default function Step12() {
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
      <div className="question question-12">
      <div className="wrapper__question">
        <h2 className="question__title">
          Как часто ты делаешь то, что нужно другим, не оставляя времени
          на себя?
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
        <Link to='/step13'>
        <BtnNext>  Далее</BtnNext>
        </Link>
       
      </div>
    </div>
    )
}
