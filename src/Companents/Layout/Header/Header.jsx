import React from 'react';
import s from './Header.module.css';

const Header = () => {
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


