import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFlip, Pagination, Navigation } from 'swiper';
import '../D3Carousel/D3Carousel.scss';

import 'swiper/swiper.scss';
import 'swiper/components/effect-flip/effect-flip.scss';
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";

SwiperCore.use([EffectFlip, Pagination, Navigation]);

const D3Carousel = ({ dep }) => {
    const style = {width: "100%", height: "100%"};
    if (dep === "D3") {
        return (
            <div className="carouselBody">
                <Swiper
                    grabCursor={true}
                    effect={'flip'}
                    pagination={true}
                    navigation={true}
                >
                    <div style={{alignItems: "center"}}>
                        <SwiperSlide>
                            <div className="imageContainer">
                                <img src="/assets/screencapture-localhost-3000-aboutus-2021-09-24-07_30_48.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageContainer">
                                <img src="/assets/screencapture-localhost-3000-departments-2021-09-24-07_30_24.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageContainer">
                                <img src="/assets/screencapture-localhost-3000-events-2021-09-24-07_30_01.png" alt="" />
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        );
    } else 
        return null;
};

export default D3Carousel;
