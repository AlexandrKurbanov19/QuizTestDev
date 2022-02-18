import React from 'react'
import icon1 from '../assets/img/check.svg';

export default function Checkout() {
  const [check, setCheck] = React.useState(false);
  const handleCheckbox = () => {
    setCheck(prev => !prev)
  }
  return (
    <div className="question checkout">
    <div className="wrapper__question">
      <div className="wrapper-success">
        <h2>Чтобы получить доступ к курсу, введите данные карты</h2>
        <div className="checkout-form">
          <img src="img/payment.svg" alt="" />
          <div className="numCard">
            <input
              type="num"
       
              className="cardNumberInp"
              placeholder="****   ****   ****   ****"
            />
          </div>
          <div className="wrapper-inp">
            <div className="dateCard">
              <input
                type="text"
         
                className="cardDateInp date-mm"
             
                placeholder="MM"
                required
              />
              <span>/</span>
              <input
                type="text"
          
                className="cardDateInp date-yy"
            
                placeholder="YY"
                required
              />
            </div>
            <div className="cvvCard">
              <input
                type="num"
                name="date"
                className="cardCvvInp"
                placeholder="CVC / CVV"
              />
            </div>
          </div>
          <div className="cardName">
            <input
              type="text"
              name="name"
              className="cardholderName"
              placeholder="IVANOV IVAN"
            />
            <img src={icon1} alt="" />
          </div>
          <div className="card-errors"></div>
          <div className="payment-status"></div>
          <div onClick={handleCheckbox} className={check ? "agrement checked" : 'agrement' } >
            Я принимаю Условия обслуживания и Политику
            конфиденциальности.
          </div>
          <button className="btn next payment-btn" disabled={check ? false : true}>Оплатить 599 ₽</button>
        </div>
        <p className="support">
          Have a question? If so, we are always ready to help you:
          <a href="mailto:support@nowun.online">support@nowun.online</a>
        </p>
        <div className="guarented">
          <p>
            *Ваш 10-дневный пробный период продлится до 17 ноября 2021
            года. Вы можете отменить его в любое время до этой даты, и с
            вас не будет снята полная стоимость программы. Никаких
            лишних вопросов, никаких скрытых условий. Если вы не
            отмените подписку до 17 ноября 2021 года, будет произведен
            платеж в размере 1599 рублей за месяц. EveryBodyYoga
            автоматически снимет деньги с вашей карты 1599 рублей за
            месяц, и вы не потеряете доступ к своему аккаунту. Возврат
            средств или зачет неполных месяцев не производится. Вы может
            отменить подписку в любое время онлайн.
          </p>
          <img src="img/guarantee-ru 2.svg" alt="" />
        </div>
        <div className="guarented-info">
          <p>
            <img src={icon1} alt="check" /> No commitment -
            cancel any time
          </p>
          <p><img src={icon1} alt="check" /> Protected data</p>
        </div>
      </div>
    </div>
  </div>
  )
}
