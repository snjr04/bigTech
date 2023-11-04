import React from 'react';
import s from './Header.module.scss';

const Header = () => {
    return (
        <header className={s.header}> <div className={s['search-region']}>
            <div className="container">

                <div className={s.logo}>
                    <div className={s['logo-telegram']}>
                        <img src="bg.jpg" alt="Логотип" />
                    </div>
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
                    </div><div className={s.centeredText}>
                    </div>
                </div>

                {/* Second Block: Logo and Telegram Link */}

                <nav>
                    <ul className={s['navbar']}>
                        <li><a href="#">Тендер</a></li>
                        <li><a href="/Contracts">Закупки</a></li>
                        <li><a href="/Catalog">Каталог</a></li>
                        <li><a href="/Plans">Планы</a></li>
                        <li><a href="/Documents">Документы</a></li>
                        <li><a href="/Questions">Часто задаваемые вопросы</a></li>
                        <li><a href="/news">Новости</a></li>
                    </ul>
                    <div className={s['menu-select']}>
                        <select>
                            <option>Закупки</option>
                            <option>Контракты</option>
                            <option>Каталог</option>
                            <option>Планирование</option>
                            <option>Объявление</option>
                            <option>Аналитические данные</option>
                            <option >News</option>
                        </select>
                    </div>
                </nav>

            </div>



        </div>
        </header>
    );
};
export default Header;