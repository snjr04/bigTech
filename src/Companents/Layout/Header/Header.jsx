import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__logo-telegram">
                    <div className="header__logo">
                        <img src="1.jpg" alt="Логотип"/>
                    </div>
                    <div className="header__centeredText">
                        Официальный Портал Государственных Закупок Кыргызской Республики
                    </div>
                    <div className="header__telegram">
                        <a href="https://web.telegram.org/a/" target="_blank" rel="noopener noreferrer">
                            <img src="tg.svg" alt="Telegram"/>
                        </a>
                    </div>
                </div>
                <hr/>
                <nav>
                    <div className="header__navbar">
                        <Link className="header__links" to="#">Закупки</Link>
                        <Link className="header__links" to="#">Контракты</Link>
                        <Link className="header__links" to="/catalog">Каталог</Link>
                        <Link className="header__links" to="#">Планирование</Link>
                        <Link className="header__links" to="#">Объявление</Link>
                        <Link className="header__links" to="#">Аналитические данные</Link>
                        <Link className="header__links" to="#">Планы</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;