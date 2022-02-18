import React from 'react'
import { Link } from "react-router-dom";
import BtnNext from './button/BtnNext';
import { useEffect } from 'react';

export default function Step10() {
  let res = [
    {isChecked: false, name: 'one',text: "Как бы я ни старалась, меня не ценят" }, 
    {isChecked: false, name: 'two',text: "Вот бы изменить отношение других людей ко мне!" }, 
    {isChecked: false, name: 'three',text: "Хочу, чтобы меня наконец-то услышали и приняли во внимание" },
    {isChecked: false, name: 'four',text: "Сделаю что угодно, лишь бы меня заметили" },
    {isChecked: false, name: 'five',text: "Мной всегда недовольны" },
    {isChecked: false, name: 'six',text: "Я часто испытываю тревогу за будущее" },
    {isChecked: false, name: 'seven',text: "Я часто испытываю тревогу за будущее" },
    {isChecked: false, name: 'eight',text: "Мне часто бывает неловко перед окружающими" },
  ];
 const [items, setItems] = React.useState([]);
 const [value, setValue] = React.useState(true);
 

  useEffect(() => {
    setItems(res)
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = items.map((user) => {
        return { ...user, isChecked: checked };
      });
      setItems(tempUser);
      setValue(false)
    } else {
      let tempUser = items.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setItems(tempUser);
      setValue(false)
    }
  };

  
  const handleRemoveChecked = () => {
    let tempUser = items.map((user) => {
      return { ...user, isChecked: false };
    });
    setItems(tempUser);
    setValue(false)
  
  }

    return (
        <div className="question question-10">
        <div className="wrapper__question">
          <h2 className="question__title">
            Выбери утверждения, которые отражают твои мысли:
          </h2>
          <div className="wrapper__answers">
         
         
            {items.map((user, index) => (
          <label className={user?.isChecked ? 'btn btn-checkbox checked' : 'btn btn-checkbox'} htmlFor={user.name} key={index}>
            <input
              type="checkbox"
              className="form-check-input"
              name={user.name}
              id={user.name}
              checked={user?.isChecked || false}
              onChange={handleChange}
            />
        {user.text}</label>
      
        ))}
               <label name="none" className={items.every((user) => user?.isChecked == false) ? 'btn btn-checkbox checked' : 'btn btn-checkbox'}>
            <input
            type="checkbox"
            className="form-check-input"
            name="allSelect"
        
            checked={items.filter((user) => user?.isChecked == false).length < 1}
            onChange={handleRemoveChecked}
          />
          Ничего из перечисленного</label>
           
          </div>
          <button className="btn next"  disabled={value ? true : false}><Link to='/step11'> Далее </Link></button>

        </div>
      </div>
    )
}
