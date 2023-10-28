import React from 'react';
import style from './footer.module.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <nav>
                    <ul className={style['nav-list']}>
                        <li><a href="/supplier">Поставщикам</a></li>
                        <li><a href="/customer">Заказчикам</a></li>
                        <li><a href="/statistics">Статистика</a></li>
                        <li><a href="/sitemap">Карта сайта</a></li>
                    </ul>
                </nav>
                <div className={style.divider}></div>
                <div className={style['logo-section']}>
                    <a href="">
                        <img src="../vite.svg" alt="LOGO" />
                    </a>
                    <p>Официальный сайт <br /> государственных закупок КР</p>
                </div>
                <div className={style['resources-section']}>
                    <h1>Официальные ресурсы</h1>
                    <p>Здесь может быть ваш рыбный текст <br /> и ссылки на официальные источники.</p>
                </div>
                <div className={style['faq-section']}>
                    <h1>Часто задаваемые <br /> вопросы и опрос</h1>
                    <div className="telegram-section">
                        <a href="https://t.me/your-telegram-channel" target="_blank" rel="noopener noreferrer">
                            <img src="../telegram_icon.png" alt="Telegram" />
                        </a>
                    </div>
                </div>
                <div className={style['back-to-top']}>
                    <button onClick={scrollToTop}>Наверх</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
