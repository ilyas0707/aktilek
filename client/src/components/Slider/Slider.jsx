import React from 'react'
import Styles from './Slider.module.css'

import Image from './../../assets/images/slider.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'

import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Pagination, Navigation])

export const Slider = () => {
    return (
        <div className={Styles.slider}>
            <div className="container">
                <h3 className={Styles.heading}>Что о нас говорят наши родители</h3>
                <Swiper
                    speed={1000}
                    centeredSlides={true}
                    // allowTouchMove={false}
                    grabCursor={true}
                    spaceBetween={100}
                    slidesPerView={1}
                    // effect="fade"
                    navigation={{ clickable: true }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        480: {
                            navigation: false
                        }
                    }}
                    style={{ padding: '0px 90px 90px 90px' }}
                >
                    <SwiperSlide>
                        <div className={Styles.slide}>
                            <div className={Styles.image}>
                                <img src={ Image } alt="slider"/>
                            </div>
                            <div className={Styles.text}>
                                <p style={{marginBottom: '30px'}}>“Со спокойной душой каждый день отпускаем детей в школу. Зная, что они получат не только знания в полном объеме, но и человеческое внимание, заботу и интересную школьную жизнь. И, что не мало важно, - здоровое полноценное питание”.</p>
                                <p style={{marginBottom: '30px'}}>“Я, как мама, наблюдаю за тем как администрация школы и весь коллектив радеет за детей. За их образование, разностороннее развитие и теплое человеческое отношение внутри школы”.</p>
                                <p>Семья Гуляевых</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={Styles.slide}>
                            <div className={Styles.image}>
                                <img src={ Image } alt="slider"/>
                            </div>
                            <div className={Styles.text}>
                                <p style={{marginBottom: '30px'}}>“Со спокойной душой каждый день отпускаем детей в школу. Зная, что они получат не только знания в полном объеме, но и человеческое внимание, заботу и интересную школьную жизнь. И, что не мало важно, - здоровое полноценное питание”.</p>
                                <p style={{marginBottom: '30px'}}>“Я, как мама, наблюдаю за тем как администрация школы и весь коллектив радеет за детей. За их образование, разностороннее развитие и теплое человеческое отношение внутри школы”.</p>
                                <p>Семья Гуляевых</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={Styles.slide}>
                            <div className={Styles.image}>
                                <img src={ Image } alt="slider"/>
                            </div>
                            <div className={Styles.text}>
                                <p style={{marginBottom: '30px'}}>“Со спокойной душой каждый день отпускаем детей в школу. Зная, что они получат не только знания в полном объеме, но и человеческое внимание, заботу и интересную школьную жизнь. И, что не мало важно, - здоровое полноценное питание”.</p>
                                <p style={{marginBottom: '30px'}}>“Я, как мама, наблюдаю за тем как администрация школы и весь коллектив радеет за детей. За их образование, разностороннее развитие и теплое человеческое отношение внутри школы”.</p>
                                <p>Семья Гуляевых</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
