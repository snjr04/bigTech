import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation} from 'swiper/modules';
import {AiOutlineClose} from 'react-icons/ai'


const MapBanner = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [currentArea,setCurrentArea] = useState('');

    const fillColor = 'black';
    const fillColorActive = "red"

    const handleClick = (e) => {
        const clickedArea = e.target.id;
        setIsOpen(true)
        setCurrentArea(clickedArea)
        console.log(clickedArea)
    };

    const handleClose = () =>{
        setIsOpen(false)
        setCurrentArea('')
    }
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
                            <div className="container">


                            <div className="map__items">
                                <aside className="map__item">
                                    <div className="map__list">
                                        <h3 className="map__menu-title">ОТНОСИТЕЛЬНАЯ ЭКОНОМИЯ <br/> ПО ЗАКЛЮЧЕННЫМ КОНТРАКТАМ <br/> В РАЗРЕЗЕ СУБЪЕКТОВ РФ
                                        </h3>
                                        <p className="map__menu-text">Регион определяется исходя из <br/>
                                            информации об источнике <br/>
                                            финансирования заказчика</p>
                                        <div className="map__info">
                                            <div className="map__info-info">менее 2 %</div>
                                            <div className="map__info-info"> 2 — 4 %</div>
                                            <div className="map__info-info"> 4 — 6 %</div>
                                            <div className="map__info-info"> 6 — 8 %</div>
                                            <div className="map__info-info"> более 8 %</div>
                                        </div>
                                    </div>
                                </aside>
                                <div className="map__line"></div>
                                <div className="map__item">
                                    <svg fill="#576FA0" version="1.0" xmlns="http://www.w3.org/2000/svg"
                                         width="626.000000pt" height="626.000000pt" viewBox="0 0 626.000000 626.000000"
                                         preserveAspectRatio="xMidYMid meet">

                                        <g transform="translate(0.000000,626.000000) scale(0.100000,-0.100000)"
                                           fill="#000000" stroke="none">
                                            <path onClick={handleClick} id="chui" fill={currentArea === "chui" ? fillColorActive : fillColor} cursor="pointer" d="M2912 4576 c24 -29 -68 -50 -113 -26 -16 9 -19 7 -19 -13 0 -28 -17
-47 -42 -47 -10 0 -26 -4 -36 -10 -9 -5 -34 -16 -54 -24 -52 -21 -92 -86 -89
-146 2 -33 -3 -53 -17 -70 -33 -43 -36 -85 -11 -152 19 -51 24 -57 32 -41 5
10 11 19 12 21 5 6 75 -29 75 -38 0 -20 -50 -88 -67 -93 -10 -3 -54 -5 -97 -5
-62 -1 -89 -6 -124 -23 -40 -21 -42 -24 -25 -37 10 -7 17 -18 16 -25 -2 -7 24
-20 58 -31 33 -10 66 -27 72 -37 7 -11 23 -19 40 -19 15 0 42 -7 58 -16 28
-14 32 -14 43 1 15 21 63 11 71 -15 5 -15 12 -16 53 -9 42 8 48 7 63 -12 9
-12 21 -19 28 -15 6 4 15 -2 19 -15 l9 -23 6 23 c4 16 12 22 28 19 18 -2 24 4
35 37 8 22 18 48 24 57 7 13 6 20 -7 26 -15 9 -15 13 -2 48 l15 39 87 -2 c84
-2 88 -1 99 22 9 20 19 25 45 25 l34 0 -20 28 c-11 15 -16 33 -13 40 11 17
102 35 116 23 9 -7 16 -7 23 0 8 8 17 7 31 -2 15 -10 31 -10 64 -3 25 6 53 7
64 4 10 -4 29 -2 42 3 18 8 25 8 31 -2 11 -17 57 11 66 40 4 10 14 19 24 19
10 0 28 12 42 26 21 22 29 25 66 19 25 -3 44 -2 48 5 3 5 21 10 38 10 24 0 38
8 60 35 19 24 39 36 65 41 20 3 44 15 52 25 12 15 21 17 45 10 17 -4 42 -4 58
2 15 5 34 7 42 3 8 -3 17 -1 20 4 4 6 30 10 60 10 65 0 94 10 130 46 l28 28
-27 23 c-40 34 -111 31 -206 -8 -44 -18 -88 -29 -108 -27 -18 1 -36 -3 -41
-10 -6 -10 -16 -9 -47 4 -29 12 -59 15 -119 12 -53 -4 -87 -1 -100 7 -25 15
-85 1 -85 -20 0 -8 -10 -26 -23 -40 -21 -25 -25 -26 -67 -16 -25 6 -77 11
-117 11 -39 0 -75 5 -78 10 -11 18 -176 90 -204 90 -19 0 -42 15 -76 50 -27
28 -56 50 -63 50 -8 0 -27 11 -44 25 -16 14 -37 25 -45 25 -9 0 -26 8 -37 17
-12 10 -18 14 -14 9z"/>
                                            <path onClick={handleClick} fill={currentArea === "isyk-kul" ? fillColorActive : fillColor} id="isyk-kul" d="M4490 4370 c-8 -5 -25 -10 -38 -10 -12 0 -35 -13 -51 -29 -42 -42
-63 -51 -130 -51 -33 0 -63 -5 -66 -10 -4 -6 -18 -11 -33 -11 -15 0 -49 -1
-77 -2 -27 0 -54 -7 -60 -13 -5 -7 -29 -17 -52 -24 -27 -7 -49 -21 -63 -40
-15 -21 -30 -30 -48 -30 -15 0 -38 -7 -50 -16 -18 -13 -29 -14 -54 -5 -28 10
-35 8 -58 -14 -14 -14 -34 -25 -43 -25 -9 0 -17 -6 -17 -14 0 -7 -7 -19 -14
-26 -13 -10 -10 -16 20 -42 l35 -31 39 18 c22 10 41 16 43 14 31 -53 38 -73
32 -97 -4 -20 1 -36 20 -62 30 -40 30 -47 8 -72 -21 -24 -13 -31 21 -18 19 7
33 7 47 -1 11 -5 28 -8 37 -5 10 4 27 -1 38 -9 10 -8 29 -15 42 -15 13 0 36
-7 51 -14 15 -8 37 -13 48 -10 17 5 19 1 15 -30 -3 -29 -9 -37 -31 -42 -46
-10 -52 -14 -45 -25 4 -7 24 -9 50 -6 65 7 78 -7 64 -67 -6 -27 -9 -51 -6 -53
2 -3 22 -5 43 -4 21 0 78 1 126 2 54 0 98 6 115 15 15 8 33 14 40 14 17 0 15
-61 -4 -88 -18 -26 -12 -40 23 -53 24 -9 25 -13 21 -59 l-5 -49 36 15 c69 30
78 32 91 24 7 -4 10 -17 7 -29 -5 -19 -1 -21 39 -21 24 0 59 -7 78 -17 34 -16
36 -16 74 10 47 33 57 33 84 2 l21 -25 33 38 c25 29 30 41 22 55 -14 27 13 62
74 95 28 15 64 39 80 55 16 15 35 27 42 27 8 0 38 19 66 41 29 23 80 53 114
66 33 14 71 34 83 45 14 13 28 18 42 13 23 -7 48 4 110 52 25 19 56 33 72 33
19 0 30 6 34 20 4 11 18 34 32 50 23 28 29 30 97 30 60 0 76 3 91 20 16 18 17
23 4 47 -8 15 -52 66 -99 114 -69 71 -92 89 -125 95 -49 9 -97 9 -151 -1 l-41
-7 -31 56 c-23 40 -42 60 -67 70 -23 10 -35 22 -35 35 0 44 -10 52 -55 46 -52
-8 -179 9 -261 36 -47 15 -67 17 -88 9 -34 -13 -180 -13 -225 0 -22 6 -40 6
-52 -1 -14 -7 -27 -5 -49 6 -27 14 -33 14 -59 1 -26 -14 -30 -14 -41 -1 -14
17 -58 20 -80 5z"/>
                                            <path onClick={handleClick} fill={currentArea === "talas" ? fillColorActive : fillColor} id="talas" d="M1680 4311 c-19 -4 -47 -15 -63 -25 -25 -17 -29 -17 -46 -2 -20 18
-56 21 -66 6 -3 -5 -17 -10 -29 -10 -13 0 -35 -9 -49 -20 -14 -11 -30 -20 -35
-20 -12 0 -22 -24 -22 -50 0 -13 -9 -20 -27 -22 -21 -2 -29 -9 -31 -27 -2 -13
1 -28 7 -34 18 -18 12 -30 -11 -24 -27 7 -49 -9 -41 -29 3 -9 -6 -27 -21 -43
-23 -24 -25 -29 -12 -47 14 -18 15 -18 45 -1 l30 18 55 -37 c66 -43 106 -53
189 -47 51 4 71 1 105 -16 22 -11 52 -21 64 -21 13 0 41 -11 63 -25 56 -34 71
-32 95 14 11 22 29 42 40 46 28 9 78 -3 88 -22 7 -11 25 -15 62 -15 43 0 58
-5 85 -29 37 -33 57 -36 75 -13 23 27 47 35 74 24 32 -12 46 6 20 25 -18 13
-18 14 0 34 11 12 25 21 31 21 7 0 19 7 26 16 9 11 24 15 50 11 21 -3 42 0 48
6 7 7 19 6 39 -2 39 -16 74 -1 100 42 l20 36 -28 9 c-23 8 -30 7 -34 -5 -5
-11 -18 -14 -58 -11 -50 4 -53 6 -58 34 -4 22 -11 30 -30 32 -14 2 -30 8 -37
14 -7 5 -29 7 -50 4 -21 -4 -58 -3 -82 1 -35 7 -48 15 -61 38 -20 36 -59 57
-112 60 -23 1 -54 14 -80 31 -32 22 -53 29 -92 30 -55 0 -129 19 -161 41 -21
14 -23 14 -75 4z"/>
                                            <path onClick={handleClick} fill={currentArea === "naryn" ? fillColorActive : fillColor} id="naryn" d="M3537 4028 c-10 -5 -28 -7 -40 -4 -11 3 -41 1 -64 -5 -30 -6 -50 -6
-64 2 -15 8 -24 7 -35 -2 -12 -10 -17 -10 -23 -1 -9 15 -101 5 -101 -11 0 -6
7 -18 16 -28 23 -25 11 -49 -25 -49 -19 0 -34 -8 -44 -24 -15 -21 -21 -23
-100 -21 -83 2 -84 1 -94 -25 -8 -20 -7 -29 3 -36 11 -7 9 -22 -9 -76 -18 -57
-26 -68 -44 -68 -12 0 -27 -9 -33 -20 -6 -11 -15 -20 -20 -20 -6 0 -10 9 -10
20 0 13 -7 20 -20 20 -10 0 -23 7 -28 16 -14 25 -106 10 -126 -21 -13 -20 -13
-25 -2 -35 9 -7 16 -7 20 -1 3 5 26 9 51 9 l45 0 0 -38 c0 -35 3 -39 31 -45
33 -7 54 -44 43 -77 -8 -27 -48 -20 -52 9 -4 27 -31 38 -50 19 -13 -12 -9 -18
27 -41 27 -17 49 -24 62 -20 13 4 28 0 40 -11 15 -13 22 -15 31 -6 16 16 51
15 67 0 10 -11 15 -10 25 5 9 11 27 17 51 17 26 0 46 7 62 22 22 20 25 21 40
6 15 -16 15 -21 -2 -75 -34 -112 -33 -110 -145 -137 -47 -11 -54 -21 -36 -48
20 -31 13 -39 -25 -28 -23 7 -41 4 -77 -13 -26 -12 -49 -23 -51 -24 -3 -2 5
-13 17 -26 l22 -23 -24 -34 -24 -35 90 -98 c61 -65 105 -103 134 -117 24 -10
47 -27 51 -36 11 -30 42 -54 66 -52 13 1 45 -8 72 -21 43 -20 59 -22 117 -16
60 5 76 12 148 61 44 30 87 54 95 54 12 0 35 -55 35 -86 0 -7 7 -14 14 -17 10
-4 16 -24 18 -59 l3 -53 60 3 c48 3 65 9 88 30 20 19 36 26 60 24 18 -2 46 4
62 12 28 15 31 15 47 -6 16 -22 16 -22 52 -3 19 11 41 32 47 48 7 16 24 45 37
66 17 24 25 48 23 70 -2 34 14 67 55 111 12 14 24 41 26 60 3 31 9 38 56 63
47 26 56 27 88 17 19 -7 54 -11 77 -11 23 1 53 1 67 1 126 -5 160 -1 204 25
40 23 51 25 106 19 l61 -7 33 39 c32 37 33 40 17 61 -20 28 -45 29 -78 3 -27
-21 -72 -26 -88 -11 -6 6 -35 11 -65 13 -53 3 -55 4 -55 31 1 33 -9 34 -76 2
-30 -13 -57 -21 -61 -17 -3 4 -3 27 2 52 9 49 6 60 -15 60 -8 0 -21 10 -29 22
-14 20 -14 24 0 39 9 10 14 30 12 49 l-3 32 -25 -19 c-21 -17 -38 -20 -109
-17 -47 1 -92 -1 -102 -6 -27 -15 -95 13 -91 36 2 11 6 36 9 58 l5 38 -41 -7
c-32 -5 -48 -3 -68 10 l-27 18 23 18 c13 11 34 19 47 19 16 0 24 6 24 18 0 17
-43 38 -105 49 -16 3 -36 10 -43 16 -7 5 -48 10 -92 10 -85 0 -94 6 -60 42
l20 21 -31 43 c-26 34 -30 46 -21 64 7 16 5 29 -6 50 -18 31 -29 33 -56 12
-26 -20 -27 -20 -77 19 -33 26 -47 32 -60 25 -23 -12 -27 -12 -31 5 -2 11 -7
12 -21 4z"/>
                                            <path onClick={handleClick} fill={currentArea === "jalal-abad" ? fillColorActive : fillColor} id="jalal-abad" d="M1398 3873 c-6 -7 -17 -13 -26 -13 -8 0 -37 -13 -64 -30 -26 -16 -59
-30 -72 -30 -18 0 -27 -9 -39 -40 -13 -34 -20 -40 -45 -40 -35 0 -96 -42 -135
-93 -18 -23 -55 -51 -98 -72 -38 -20 -69 -42 -69 -50 0 -17 34 -40 72 -49 15
-3 35 -17 44 -31 20 -30 29 -31 78 -5 41 20 76 14 76 -14 0 -8 7 -19 15 -26 9
-8 15 -30 15 -59 0 -44 2 -47 43 -69 23 -12 51 -22 62 -22 11 0 35 -9 53 -20
39 -24 52 -25 52 -5 0 8 7 15 15 15 9 0 15 -9 15 -21 0 -20 1 -20 24 -6 21 14
25 14 40 -1 15 -15 16 -11 16 55 0 77 10 95 39 69 10 -9 25 -16 34 -16 32 0
63 99 37 115 -14 9 7 45 25 45 10 0 15 -11 15 -35 0 -27 4 -35 18 -35 10 0 33
-15 51 -34 31 -31 32 -36 25 -86 -7 -52 -6 -53 16 -47 13 3 33 -1 46 -10 18
-12 27 -13 38 -4 31 26 56 -14 56 -90 0 -34 8 -36 43 -9 l25 20 42 -24 c23
-13 47 -34 54 -46 20 -42 63 -65 114 -63 31 1 53 -4 64 -14 15 -13 22 -14 48
-3 23 10 33 10 44 1 10 -8 20 -9 33 -2 10 5 26 12 35 15 10 3 20 20 23 40 8
39 37 71 59 63 8 -3 22 3 32 14 11 13 30 19 58 19 31 0 44 5 54 21 11 16 16
18 28 9 20 -17 18 -27 -10 -53 -18 -17 -22 -27 -15 -44 11 -31 24 -29 48 10
11 18 31 43 45 56 21 20 28 22 41 11 8 -7 15 -22 15 -34 0 -13 12 -28 30 -38
l31 -17 19 31 c17 28 18 34 5 48 -8 9 -15 23 -15 31 0 22 104 63 138 54 22 -5
25 -4 15 6 -31 31 -6 60 62 74 73 15 83 23 109 101 13 40 20 76 15 79 -4 3
-22 -4 -38 -16 -19 -14 -38 -20 -55 -17 -15 3 -31 0 -37 -8 -14 -17 -41 -18
-57 -2 -10 10 -18 8 -41 -5 -25 -15 -30 -15 -41 -2 -7 8 -25 15 -41 15 -34 0
-109 44 -109 63 0 20 22 37 47 37 17 0 28 -9 38 -32 11 -26 15 -30 20 -16 12
31 1 53 -30 58 -26 4 -31 10 -35 45 -5 37 -7 40 -35 39 -16 0 -38 -4 -48 -8
-19 -9 -47 8 -47 29 0 7 7 18 15 25 8 7 15 23 15 35 0 28 -36 41 -49 17 -8
-14 -15 -15 -43 -5 -18 6 -50 14 -70 17 -21 4 -41 13 -45 20 -13 22 -66 44
-137 57 -66 11 -68 11 -95 -15 -15 -14 -32 -26 -38 -26 -6 0 -30 16 -53 35
-46 39 -51 40 -68 23 -9 -9 -15 -9 -24 0 -7 7 -22 12 -34 12 -12 0 -24 7 -28
15 -3 10 -19 15 -46 15 -37 0 -42 -3 -55 -35 -24 -55 -44 -59 -109 -25 -30 17
-67 30 -81 30 -14 0 -38 8 -52 18 -22 13 -49 17 -136 17 -75 0 -112 -4 -119
-12z"/>
                                            <path onClick={handleClick} fill={currentArea === "osh" ? fillColorActive : fillColor} id="osh" d="M2602 3129 c-12 -18 -20 -20 -54 -15 -34 6 -43 3 -55 -14 -8 -11 -24
-20 -37 -20 -28 0 -46 -18 -46 -45 0 -30 -28 -65 -53 -65 -18 0 -19 -2 -7 -10
13 -8 13 -11 0 -24 -8 -8 -28 -17 -44 -20 -16 -3 -36 -12 -45 -19 -9 -8 -35
-24 -58 -36 -33 -17 -43 -27 -43 -46 0 -20 -5 -25 -24 -25 -13 0 -30 -10 -38
-22 l-15 -22 -45 22 c-25 11 -48 28 -51 36 -4 9 -12 16 -19 16 -17 0 -16 -57
0 -88 7 -12 10 -32 7 -43 -6 -18 -12 -20 -43 -14 -47 9 -55 14 -48 31 7 17 2
17 -41 2 -18 -7 -33 -18 -33 -25 0 -7 -16 -23 -35 -35 -19 -13 -33 -27 -31
-33 1 -6 26 -9 54 -7 43 3 52 1 62 -18 6 -11 10 -29 8 -38 -2 -9 6 -25 17 -34
19 -17 19 -19 3 -31 -15 -12 -15 -14 4 -26 19 -12 20 -23 3 -63 -5 -13 -2 -18
9 -18 8 0 24 -16 34 -36 12 -23 22 -33 26 -25 13 20 25 12 46 -29 28 -55 25
-67 -17 -81 -21 -6 -54 -23 -73 -35 -36 -25 -65 -30 -75 -14 -4 6 -15 6 -31 0
-27 -11 -67 -5 -99 15 -11 6 -35 15 -54 19 -19 3 -42 13 -52 22 -12 11 -22 13
-36 6 -10 -6 -32 -16 -50 -22 -34 -13 -51 -39 -32 -50 8 -5 7 -14 -5 -32 -24
-36 -4 -57 59 -61 l50 -3 0 -60 c0 -55 2 -59 24 -62 13 -2 35 5 50 15 14 11
41 25 59 33 29 11 35 11 43 -1 5 -8 9 -20 9 -26 0 -7 14 -20 30 -28 17 -9 29
-21 28 -28 -6 -28 18 -20 33 10 25 50 39 63 68 63 14 0 33 4 40 9 9 6 22 6 31
1 10 -6 32 -4 58 5 35 13 47 12 89 0 71 -23 231 -11 296 21 41 20 64 24 142
24 l94 0 30 46 c27 38 30 51 25 85 -5 27 -15 46 -30 56 -29 19 -31 44 -4 68
11 10 20 25 20 34 0 9 8 28 18 41 9 14 22 38 27 55 9 25 15 30 39 27 19 -2 36
4 52 19 22 21 25 21 48 5 14 -9 30 -16 35 -16 6 0 39 25 73 56 90 80 142 114
177 114 36 0 45 11 27 36 -8 10 -12 24 -9 31 9 23 -18 43 -58 43 -22 0 -39 4
-39 9 0 5 -9 11 -20 14 -12 3 -20 14 -20 26 0 14 -12 26 -43 39 -28 12 -73 52
-134 118 -51 55 -109 109 -130 120 -28 15 -38 26 -38 45 0 39 -26 28 -68 -28
-42 -55 -55 -58 -83 -15 -16 25 -16 26 11 48 15 12 26 27 24 33 -2 6 -10 2
-17 -10z"/>
                                            <path onClick={handleClick} fill={currentArea === "batken" ? fillColorActive : fillColor} id="batken" d="M1350 2625 c-8 -10 -31 -15 -71 -15 -56 0 -58 -1 -61 -27 -3 -25 -8
-28 -44 -31 -26 -2 -49 -11 -59 -23 -10 -10 -28 -19 -40 -19 -25 0 -35 -17
-35 -59 0 -33 -16 -51 -46 -51 -13 0 -26 -4 -29 -10 -9 -15 -35 -12 -35 4 0 8
11 23 25 34 41 33 35 42 -41 57 -17 3 -42 17 -54 31 -14 14 -35 24 -50 24 -15
0 -44 13 -65 30 -21 17 -45 30 -54 30 -9 0 -54 -12 -100 -25 -47 -14 -97 -25
-112 -25 -17 0 -32 -9 -43 -25 -20 -30 -20 -54 -1 -82 14 -20 13 -22 -17 -32
-39 -14 -38 -14 -38 7 0 9 -9 23 -19 29 -18 11 -22 8 -41 -45 -15 -40 -20 -67
-15 -92 4 -19 8 -63 8 -97 2 -62 12 -89 22 -61 5 11 18 14 53 10 36 -3 51 0
61 12 18 22 89 21 119 -2 34 -27 180 -21 204 8 23 28 28 25 28 -15 0 -40 10
-43 51 -14 22 16 41 19 85 17 55 -3 59 -5 89 -48 19 -27 30 -53 27 -66 -6 -30
27 -39 73 -20 26 11 42 13 55 6 27 -15 30 -13 46 25 16 40 50 57 93 49 20 -4
30 -1 34 9 3 9 29 20 59 26 39 9 56 17 63 34 6 12 24 26 40 31 17 5 40 13 52
19 16 7 32 4 65 -12 25 -11 51 -21 59 -21 8 0 20 -5 27 -12 7 -7 46 -13 94
-14 70 -2 86 1 117 21 20 13 48 27 64 30 32 8 33 11 7 53 -17 28 -23 32 -35
22 -12 -10 -18 -5 -32 24 -10 22 -27 39 -40 42 -26 7 -28 13 -11 50 10 22 10
28 -5 39 -20 14 -22 31 -4 39 8 3 6 9 -8 21 -13 11 -19 25 -17 45 5 40 -17 47
-74 25 -29 -11 -57 -15 -77 -11 -28 6 -36 2 -58 -25 -32 -39 -59 -34 -59 11 0
35 -15 39 -39 9 -14 -18 -21 -20 -38 -10 -12 6 -24 19 -27 29 -3 9 -28 25 -55
35 -59 21 -56 21 -71 2z"/>
                                        </g>
                                    </svg>
                                    {isOpen && (
                                        <div className="popup">
                                            <div className="popup__menu">
                                                <h2 className="popup__title">область</h2>
                                                <div className="popup__items">
                                                    <div className="popup__item">
                                                        <p className="popup__price">6,15%</p>
                                                        <p className="popup__text">Относительная экономия при <br/> заключении контрактов</p>
                                                    </div>
                                                    <div className="map__line"></div>
                                                    <div className="popup__item">
                                                        <p className="popup__price">2,39 млрд C</p>
                                                        <p className="popup__text">Экономия при заключении <br/> контрактов</p>
                                                    </div>
                                                </div>
                                                <div className="popup__line"></div>
                                                <h3 className="popup__subtitle">Региональные заказчики: 1,42 млрд C (5,25%)</h3>
                                                <p className="popup__subtext">из них органы государственной власти, казённые учреждения и иные ПБС: <span className="popup__info">0,68 млрд C (4,03%)Муниципальные заказчики: 0,96 млрд ₽ (8,27%)</span></p>
                                                <h3 className="popup__subtitle">Муниципальные заказчики: 0,96 млрд ₽ (8,27%)</h3>
                                                <p className="popup__subtext">из них органы местного самоуправления, в том числе их территориальные
                                                    органы, муниципальные казённые учреждения и иные ПБС: <span className="popup__info">0,64 млрд C (6,82%)</span></p>
                                                <div className="popup__line"></div>
                                            </div>
                                            <div className="popup__close" onClick={handleClose}>
                                               <AiOutlineClose size="25"/>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container">

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="telegram">
                <img src="./public/Telegram.svg" alt="telegram" className="telegram-img"/>
            </div>
        </section>
    );
};
export default MapBanner;