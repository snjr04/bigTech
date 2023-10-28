import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation} from 'swiper/modules';


const MapBanner = () => {
    return (
        <section className="map">
            <div className="container">
                <div className="map__menu">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="map__list">
                                <span className="map__map">
                                    <img className="map__image" src="./public/map-of-kyrgyzstan.svg" alt="map"/>
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h2 className="map__title">me</h2>
                        </SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};
export default MapBanner;