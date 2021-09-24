import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFlip, Pagination, Navigation } from 'swiper';
import './D3Carousel.scss';

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
                                <img src="/assets/OnPaste.20210330-225632.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageContainer">
                                <img src="/assets/2021-06-14_World_Blood_Donor_Day.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageContainer">
                                <img src="/assets/2021-09-01_India_At_Paralympics.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageContainer">
                                <img src="/assets/OnPaste.20210330-225518.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageContainer">
                                <img src="/assets/OnPaste.20210330-225724.png" alt="" />
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
