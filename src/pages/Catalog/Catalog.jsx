import React from 'react';
import {FaProductHunt,} from 'react-icons/fa';
import {GiFurBoot,GiConsoleController,GiCongress,GiConcreteBag,GiConqueror,GiCactusPot,GiC96,GiCakeSlice,GiCalendarHalfYear,GiCannonShot,GiCannedFish,GiCarWheel,GiCauldron,GiCctvCamera} from 'react-icons/gi'

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
                        <br></br>
                        <br></br>
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
                            <h3 className="catalog__item-title"><a href='/DetailedPlan'>oбувь</a></h3>
                            <p>Кол-во продаж: 167</p>
                        </div>
                        <div className="catalog__item">
                            <div className="catalog__item-icon">
                                <GiFurBoot color="#0065dd" size={50}/>
                            </div>
                            <h3 className="catalog__item-title"><a href='/DetailedPlan'>кровать </a></h3>
                            <p>Кол-во продаж: 34</p>
                        </div>
                        <div className="catalog__item">
                            <div className="catalog__item-icon">
                                <GiConsoleController color="#0065dd" size={50}/>
                            </div>
                            <h3 className="catalog__item-title"><a href='/DetailedPlan'>ракета</a></h3>
                            <p>Кол-во продаж: 78</p>
                        </div>
                        <div className="catalog__item">
                            <div className="catalog__item-icon">
                                <GiCongress color="#0065dd" size={50}/>
                            </div>
                            <h3 className="catalog__item-title"><a href='/DetailedPlan'>сомолок</a></h3>
                            <p>Кол-во продаж: 67</p>
                        </div>
                        <div className="catalog__item">
                            <div className="catalog__item-icon">
                                <GiConcreteBag color="#0065dd" size={50}/>
                            </div>
                            <h3 className="catalog__item-title"><a href='/DetailedPlan'>кеды</a></h3>
                            <p>Кол-во продаж:56</p>
                        </div>
                        <div className="catalog__item">
                            <div className="catalog__item-icon">
                                <GiConqueror color="#0065dd" size={50}/>
                            </div>
                            <h3 className="catalog__item-title"><a href='/DetailedPlan'>камод</a></h3>
                            <p>Кол-во продаж: 45</p>
                        </div>
                        <div className="catalog__item">
                            <div className="catalog__item-icon">
                                <GiCactusPot color="#0065dd" size={50}/>
                            </div>
                            <h3 className="catalog__item-title"><a href='/DetailedPlan'>разетка</a></h3>
                            <p>Кол-во продаж: 23</p>
                        </div>
                        <div className="catalog__item">
                            <div className="catalog__item-icon">
                                <GiC96 color="#0065dd" size={50}/>
                            </div>
                            <h3 className="catalog__item-title"><a href='/DetailedPlan'>пылилсос</a></h3>
                            <p>Кол-во продаж: 456</p>
                        </div>
                        <div className="catalog__item">
                            <div className="catalog__item-icon">
                                <GiCakeSlice color="#0065dd" size={50}/>
                            </div>
                            <h3 className="catalog__item-title"><a href='/DetailedPlan'>малаток</a></h3>
                            <p>Кол-во продаж: 123</p>
                        </div>
                        <div className="catalog__item">
                            <div className="catalog__item-icon">
                                <GiCalendarHalfYear color="#0065dd" size={50}/>
                            </div>
                            <h3 className="catalog__item-title"><a href='/DetailedPlan'>кефир</a></h3>
                            <p>Кол-во продаж: 155</p>
                        </div>
                        <div className="catalog__item">
                            <div className="catalog__item-icon">
                                <GiCannonShot color="#0065dd" size={50}/>
                            </div>
                            <h3 className="catalog__item-title"><a href='/DetailedPlan'>дом</a></h3>
                            <p>Кол-во продаж: 134</p>
                        </div>
                        <div className="catalog__item">
                            <div className="catalog__item-icon">
                                <GiCannedFish color="#0065dd" size={50}/>
                            </div>
                            <h3 className="catalog__item-title"><a href='/DetailedPlan'>строитель</a></h3>
                            <p>Кол-во продаж: 10</p>
                        </div>
                        {/* Повторите блоки по мере необходимости */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Catalog;