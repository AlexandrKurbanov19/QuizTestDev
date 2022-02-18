import React from 'react'
import { Link } from "react-router-dom";
import BtnNext from './button/BtnNext';

export default function Step3() {
  const [condition, setCondition] = React.useState(0);
  const checkValueBtn = (k)=> {
    setCondition(k)
    
  }
  const res = [
    { name: " Всё сидит так, словно на меня сшито" }, 
    { name: " Есть фасоны, которые мне не идут" }, 
    { name: "Приходится повозиться, чтоб подобрать что-то с моими формами" },
    { name: "На мне сидят только футболки, джинсы и толстовки" },
    { name: "На мне не сидит вообще ничего" },
    { name: "Другое" },
  ];
    return (
        <div className="question">
            <div className="wrapper__question">
              <h2 className="question__title">
                Как ты считаешь, насколько у тебя “стандартная” фигура?
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
              <Link to="/step4">
             
              <BtnNext>Далее</BtnNext>
              </Link>
             
            </div>
          </div>
    )
}
