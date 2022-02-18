import React from 'react'
import { Link } from "react-router-dom";
import BtnNext from './button/BtnNext';



export default function Step1() {
  const [condition, setCondition] = React.useState(0);
  const checkValueBtn = (k)=> {
    setCondition(k)
  }
  const res = [
    { name: "Вечером чувствую себя разбитой" }, 
    { name: "Чувствую себя неловко, надевая юбку" }, 
    { name: "Приходится подолгу краситься, чтоб выглядеть прилично" },
    { name: "Не люблю ходить по магазинам - что не померяю, всё не то" },
    { name: "Ничего из перечисленного" },
  ];


  

 
    return (
        <div className="question">
        <div className="wrapper__question">
          <h2 className="question__title">
            Выбери утверждения, которые отражают твое состояние:
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
          <Link to="/step2" >
            <BtnNext>Далее</BtnNext>
          </Link>         
        </div>
      </div>
    )
}
