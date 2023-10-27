import React from 'react';
import {CiMedicalCase} from 'react-icons/ci'
import {Link} from "react-router-dom";

const Catalog = () => {
    return (
        <section className="catalog">
            <div className="container">
                <div className="catalog__menu">
                    <h2 className="catalog__title">
                        Каталог товаров, работ, услуг для обеспечения государственных и муниципальных нужд
                    </h2>
                    <div className="catalog__items">
                        <Link to="/catalog/info" className="catalog__item">
                            <span className="catalog__item-logo"><CiMedicalCase color="#0065dd" size="150"/></span>
                            <h3 className="catalog__item-title">медицинские иззделия</h3>
                            <p className="catalog__item-info">47556 позиции</p>
                        </Link>
                        <Link to="/catalog/info" className="catalog__item">
                            <span className="catalog__item-logo"><CiMedicalCase color="#0065dd" size="150"/></span>
                            <h3 className="catalog__item-title">медицинские иззделия</h3>
                            <p className="catalog__item-info">47556 позиции</p>
                        </Link>
                        <Link to="/catalog/info" className="catalog__item">
                            <span className="catalog__item-logo"><CiMedicalCase color="#0065dd" size="150"/></span>
                            <h3 className="catalog__item-title">медицинские иззделия</h3>
                            <p className="catalog__item-info">47556 позиции</p>
                        </Link>
                        <Link to="/catalog/info" className="catalog__item">
                            <span className="catalog__item-logo"><CiMedicalCase color="#0065dd" size="150"/></span>
                            <h3 className="catalog__item-title">медицинские иззделия</h3>
                            <p className="catalog__item-info">47556 позиции</p>
                        </Link>
                        <Link to="/catalog/info" className="catalog__item">
                            <span className="catalog__item-logo"><CiMedicalCase color="#0065dd" size="150"/></span>
                            <h3 className="catalog__item-title">медицинские иззделия</h3>
                            <p className="catalog__item-info">47556 позиции</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Catalog;