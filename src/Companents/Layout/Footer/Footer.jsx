import React from 'react';
import style from './footer.module.scss';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <footer className={style.footer}>
            <div className={style.container}>
                
                <div className={style['logo-section']}>
                    <a href="">
                        <img src="../vite.svg" alt="LOGO" />
                    </a>
                    <br />
                    <br />
                    <p className={style['light']}>Официальный сайт <br />  государственных закупок КР</p>
                </div>
                <div className={style['resources-section']}>
                    <h1>Официальные ресурсы</h1>
                    <br />
                    <p className={style['light']}>Здесь может быть ваш рыбный текст <br /> и ссылки на официальные источники.</p>
                </div>
                

                <div className={style['contact-section']}>
                    <h1>Контакты</h1>
                    <br />
                    <div className="contact-section_left">
                        <p className={style['light']}>+996 (999) 99 99 99</p>
                        <a href="https://t.me/ваш-telegram-канал" target="_blank" rel="noopener noreferrer" >
                           <p className={style['text']}><strong>t.me/BigTech</strong></p>
                        </a>
                    </div>
                </div>

                
            </div>
        </footer>
    );
};

export default Footer;