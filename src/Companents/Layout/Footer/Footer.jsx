import React from 'react';
import style from './footer.module.css';

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
                    <p>Официальный сайт <br /> государственных закупок КР</p>
                </div>
                <div className={style['resources-section']}>
                    <h1>Официальные ресурсы</h1>
                    <p>Здесь может быть ваш рыбный текст <br /> и ссылки на официальные источники.</p>
                </div>
                

                <div className={style['contact-section']}>
                    <h1>Контакты</h1>
                    <div className="contact-section_left">
                        <a href="tel=+999 (999) 99 99 99" >
        
                           <p>+996 (999) 99 99 99</p>
        
                           <p>+996 (999) 99 99 99</p>
      
                           <p>+996 (999) 99 99 99</p>
        
                           
                        </a>
                    </div>
                </div>

                {/* <div className={style['social-section']}>
                    
                <div className="telegram-section">
                                    <a href="https://t.me/your-telegram-channel" target="_blank" rel="noopener noreferrer" className='telegram'>
                                        <img src="../public/tg.svg" alt="Telegram" />
                                        
                                    </a>
                                    <br />

                                    <a href="https://t.me/your-telegram-channel" className='whats' target="_blank" rel="noopener noreferrer">
                                        <img src="../public/whatsapp.svg" alt="Whatsapp" />
                                    </a>
                    </div>
                </div> */}
                
            </div>
        </footer>
    );
};

export default Footer;
