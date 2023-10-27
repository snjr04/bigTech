import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Link} from 'react-router-dom'


import {Autoplay, Pagination, Navigation} from 'swiper/modules';

export default function NewsBanner() {
    return (
        <section className="banner">
            <div className="container">
                    <Swiper
                        spaceBetween={100}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={false}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Link to='/news' className="banner__list">
                                <div className="banner__menu">
                                    <h2 className="banner__title">
                                        В Таласе по инициативе "Альянс Алтын" <br/> пройдет масштабный субботник
                                    </h2>
                                    <p className="banner__text">О такой инициативе было заявлено на круглом столе
                                        «Безопасная среда – безопасная страна», организованном компанией «Альянс Алтын»,
                                        которя разрабатывает золоторудное месторождение Джеруй в Таласской области.</p>
                                    <img src="./public/bg.jpg" alt="image" className="banner__image"/>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to='/news' className="banner__list">
                                <div className="banner__menu">
                                    <h2 className="banner__title">
                                        В Таласе по инициативе "Альянс Алтын" <br/> пройдет масштабный субботник
                                    </h2>
                                    <p className="banner__text">О такой инициативе было заявлено на круглом столе
                                        «Безопасная среда – безопасная страна», организованном компанией «Альянс Алтын»,
                                        которя разрабатывает золоторудное месторождение Джеруй в Таласской области.</p>
                                    <img src="./public/bg.jpg" alt="image" className="banner__image"/>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to='/news' className="banner__list">
                                <div className="banner__menu">
                                    <h2 className="banner__title">
                                        В Таласе по инициативе "Альянс Алтын" <br/> пройдет масштабный субботник
                                    </h2>
                                    <p className="banner__text">О такой инициативе было заявлено на круглом столе
                                        «Безопасная среда – безопасная страна», организованном компанией «Альянс Алтын»,
                                        которя разрабатывает золоторудное месторождение Джеруй в Таласской области.</p>
                                    <img src="./public/bg.jpg" alt="image" className="banner__image"/>
                                </div>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
        </section>
    );
}
