import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            {/* First Block: Search and Region Selection */}
            <div className="container">
                <div className={s['search-region']}>
                    <div className={s.search}>
                        <input type="text" placeholder="Поиск..."/>
                    </div>
                    <div className={s['region-select']}>
                        <select>
                            <option value="Бишкек">Бишкек</option>
                            <option value="Ош">Ош</option>
                            <option value="Баткен">Баткен</option>
                            <option value="Ыссык Куль">Ыссык Куль</option>
                            <option value="Нарын">Нарын</option>
                            <option value="Талас">Талас</option>
                            <option value="Жалал-Абад">Жалал-Абад</option>
                        </select>
                    </div>
                </div>

                {/* Second Block: Logo and Telegram Link */}
                <div className={s['logo-telegram']}>
                    <div className={s.logo}>
                        <img src="1.jpg" alt="Логотип"/>
                    </div>
                    <div className={s.centeredText}>
                        Официальный Портал Государственных Закупок Кыргызской Республики
                    </div>
                    <div className={s.telegram}>
                        <a href="https://web.telegram.org/a/" target="_blank" rel="noopener noreferrer">
                            <img src="tg.svg" alt="Telegram"/>
                        </a>
                    </div>
                </div>

                {/* Third Block: Navigation Panel */}
                <nav>
                    <ul className={s['navbar']}>
                        <li><a href="#">Закупки</a></li>
                        <li><a href="/Contract">Контракты</a></li>
                        <li><a href="/Catalog">Каталог</a></li>
                        <li><a href="#">Планирование</a></li>
                        <li><a href="#">Объявление</a></li>
                        <li><a href="#">Аналитические данные</a></li>
                        <li><a href="/news">News</a></li>
                    </ul>
                    <div className={s['menu-select']}>
                        <select>
                            <option><a>Закупки</a></option>
                            <option><a href="/Contract">Контракты</a></option>
                            <option><a href="/Catalog">Каталог</a></option>
                            <option><a>Планирование</a></option>
                            <option><a>Объявление</a></option>
                            <option><a>Аналитические данные</a></option>
                            <option href="/news"><a href="/news">News</a></option>
                        </select>
                    </div>
                </nav>
            </div>
        </header>
    );
};
``
export default Header;
