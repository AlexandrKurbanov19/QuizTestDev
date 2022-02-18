import React from 'react'
import LogoImg from '../assets/img/logo.svg'

export default function Logo() {
    return (
        <div className="logo">
          <img src={LogoImg} alt="" />
          <p className="logo__text">
            <span className="pink-element">Елена Артемьева,</span><br />
            б<span className="pink-element">(л)</span>огиня счастья
          </p>
        </div>
    )
}
