import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
        <div className="container">
          <div className="footer-info">
            <a href="mailto: suppport@skinrestart.online"
              >suppport@skinrestart.online</a
            >
            <p>PSRN: 1187746965658</p>
            <p>© 2021. Skin Restart</p>
          </div>
          <div className="footer-info">
            <p>Name: Subster Inc.</p>
            <p>Address: 340 S Lemon ##7997 Walnut CA 91789-2706</p>
          </div>
          <div className="footer-info">
            <a href="pages/privacy.html">Политика конфиденциальности</a>
            <a href="pages/terms.html">Условия использования</a>
          </div>
        </div>
      </footer>
    )
}
