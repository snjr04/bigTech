import React from 'react';
import {FaProductHunt} from 'react-icons/fa';
import './Catalog.scss';

const Catalog = () => {
    return (
        <section className="catalog">
            <div className="container">
                <div className="catalog__menu">
                    <div className="catalog__title-container"> {/* Добавлен контейнер */}
                        <h1 className="catalog__title">
                            Каталог товаров, работ, услуг для обеспечения государственных и муниципальных нужд
                        </h1>
                        <p>Обеспечение закупок в соответствии с Постановлением Кабинета Министров КР от 10 июня 2022
                            года № 301 "Об утверждении Типового порядка организации и осуществления закупок
                            государственными и муниципальными предприятиями, хозяйственными обществами, где 50 и более
                            процентов доли участия в уставном капитале принадлежат государству, в том числе их дочерними
                            хозяйственными обществами"</p> {/* Добавлена дополнительная информация */}
                    </div>
                    <div className="catalog__items">
                        <div className="catalog__item">
                            <div className="catalog__item-icon">
                                <FaProductHunt color="#0065dd" size={50}/>
                            </div>
                            <h3 className="catalog__item-title"><a href='#'>Название продукта</a></h3>
                            <p>Кол-во продаж: 100</p>
                        </div>
                        <div className="catalog__item">
                            <div className="catalog__item-icon">
                                <FaProductHunt color="#0065dd" size={50}/>
                            </div>
                            <h3 className="catalog__item-title"><a href='#'><a href='#'>Название продукта</a></a></h3>
                            <p>Кол-во продаж: 100</p>
                        </div>
                        <div className="catalog__item">
                            <div className="catalog__item-icon">
                                <FaProductHunt color="#0065dd" size={50}/>
                            </div>
                            <h3 className="catalog__item-title"><a href='#'>Название продукта</a></h3>
                            <p>Кол-во продаж: 100</p>
                        </div>
                        <div className="catalog__item">
                            <div className="catalog__item-icon">
                                <FaProductHunt color="#0065dd" size={50}/>
                            </div>
                            <h3 className="catalog__item-title"><a href='#'>Название продукта</a></h3>
                            <p>Кол-во продаж: 100</p>
                        </div>
                        <div className="catalog__item">
                            <div className="catalog__item-icon">
                                <FaProductHunt color="#0065dd" size={50}/>
                            </div>
                            <h3 className="catalog__item-title"><a href='#'>Название продукта</a></h3>
                            <p>Кол-во продаж: 100</p>
                        </div>
                        <div className="catalog__item">
                            <div className="catalog__item-icon">
                                <FaProductHunt color="#0065dd" size={50}/>
                            </div>
                            <h3 className="catalog__item-title"><a href='#'>Название продукта</a></h3>
                            <p>Кол-во продаж: 100</p>
                        </div>
                        <div className="catalog__item">
                            <div className="catalog__item-icon">
                                <FaProductHunt color="#0065dd" size={50}/>
                            </div>
                            <h3 className="catalog__item-title"><a href='#'>Название продукта</a></h3>
                            <p>Кол-во продаж: 100</p>
                        </div>
                        <div className="catalog__item">
                            <div className="catalog__item-icon">
                                <FaProductHunt color="#0065dd" size={50}/>
                            </div>
                            <h3 className="catalog__item-title"><a href='#'>Название продукта</a></h3>
                            <p>Кол-во продаж: 100</p>
                        </div>
                        <div className="catalog__item">
                            <div className="catalog__item-icon">
                                <FaProductHunt color="#0065dd" size={50}/>
                            </div>
                            <h3 className="catalog__item-title"><a href='#'>Название продукта</a></h3>
                            <p>Кол-во продаж: 100</p>
                        </div>
                        <div className="catalog__item">
                            <div className="catalog__item-icon">
                                <FaProductHunt color="#0065dd" size={50}/>
                            </div>
                            <h3 className="catalog__item-title"><a href='#'>Название продукта</a></h3>
                            <p>Кол-во продаж: 100</p>
                        </div>
                        <div className="catalog__item">
                            <div className="catalog__item-icon">
                                <FaProductHunt color="#0065dd" size={50}/>
                            </div>
                            <h3 className="catalog__item-title"><a href='#'>Название продукта</a></h3>
                            <p>Кол-во продаж: 100</p>
                        </div>
                        <div className="catalog__item">
                            <div className="catalog__item-icon">
                                <FaProductHunt color="#0065dd" size={50}/>
                            </div>
                            <h3 className="catalog__item-title"><a href='#'>Название продукта</a></h3>
                            <p>Кол-во продаж: 100</p>
                        </div>
                        {/* Повторите блоки по мере необходимости */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Catalog;