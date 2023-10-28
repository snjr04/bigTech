import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import {Autoplay, Navigation } from 'swiper/modules';




const Companies = () => {
    return (
        <section className="companies">
            <div className="container">
                <div className="companies__menu">
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={1}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        navigation={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay,Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="companies__items">
                                <div className="companies__item">
                                    <img className="companies__img" src="./public/gas.svg" alt="company"/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="companies__items">
                                <div className="companies__item">
                                    <img className="companies__image" src="./public/a-bank.svg" alt="companya"/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="companies__items">
                                <div className="companies__item">
                                    <img className="companies__img" src="./public/manas.svg" alt="company m"/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="companies__items">
                                <div className="companies__item">
                                    <img className="companies__img" src="./public/megacom.svg" alt="company mega"/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="companies__items">
                                <div className="companies__item">
                                    <img className="companies__img" src="./public/tv.svg" alt="company"/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="companies__items">
                                <div className="companies__item">
                                    <img className="companies__img" src="./public/alpha.svg" alt="company al"/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="companies__items">
                                <div className="companies__item">
                                    <img className="companies__img" src="./public/bank.svg" alt="company bank"/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="companies__items">
                                <div className="companies__item">
                                    <img className="companies__img" src="./public/gold.svg" alt="companyg"/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="companies__items">
                                <div className="companies__item">
                                    <img className="companies__img" src="./public/way.svg" alt="companyw"/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="companies__items">
                                <div className="companies__item">
                                    <img className="companies__img" src="./public/kelechek.svg" alt="companyw"/>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="companies__items">
                                <div className="companies__item">
                                    <img className="companies__img" src="./public/aiu.svg" alt="companyw"/>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                    <img src="a-bank.svg" alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Companies;