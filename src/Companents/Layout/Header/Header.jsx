import React from 'react';
import s from './Header.module.css';

const Header = () => {
<<<<<<< HEAD
  return (
    <header className={s.header}>
      {/* First Block: Search and Region Selection */}
      <div className={s['search-region']}>
        <div className={s.search}>
          <input type="text" placeholder="Поиск..." />
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
          <img src="1.jpg" alt="Логотип" />
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
          <li><a href="#">Контракты</a></li>
          <li><a href="#">Каталог</a></li>
          <li><a href="#">Планирование</a></li>
          <li><a href="#">Объявление</a></li>
          <li><a href="#">Аналитические данные</a></li>
          <li><a href="#">Планы</a></li>
        </ul>
        <div className={s['menu-select']}>
          <select>
            <option value="Бишкек">Закупки</option>
            <option value="Ош">Контракты</option>
            <option value="Баткен">Каталог</option>
            <option value="Ыссык Куль">Планирование</option>
            <option value="Нарын">Объявление</option>
            <option value="Талас">Аналитические данные</option>
            <option value="Жалал-Абад">Планы</option>
          </select>
        </div>
      </nav>
    </header>
  );
};
``
export default Header;

=======
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
                        <Link className="header__links" to="/Contracts">Контракты</Link>
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
>>>>>>> 065e96f2f3c7cd3307baebe707c9a0ca2968d87d

