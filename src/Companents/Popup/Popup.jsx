import React from 'react';

const Popup = () => {

    return (
        <>
            <header className="feedback">
                <div className="feedback__head">
                    <div className="container">
                        <div className="feedback__menu">


                            <h2 className="feedback__head-name">
                                Менеджер
                            </h2>
                            <p className="feedback__head-info">
                                Отвечает на 100% сообщений <br/>
                                Обычно в течении 2 ч.
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <section className="feedback__main">
                <div className="container">
                    <div className="feedback__main">
                        <div className="feedback__items">
                            <div className="feedback__bg">
                            </div>
                            <div className="feedback__massage">
                                <p className="feedback__message-text">
                                    help me please
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <div className="feedback__form">
                        <form className="feedback__form-form">
                            <input placeholder="Введите сообщение" type="text"
                                   className="feedback__form-input"/>
                            <button className="feedback__form-btn">Отправить</button>
                        </form>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Popup;