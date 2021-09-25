import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFlip, Pagination, Navigation } from 'swiper';
import '../D3AppWeb/D3AppWeb.scss';

import 'swiper/swiper.scss';
import 'swiper/components/effect-flip/effect-flip.scss';
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";
import { background } from '@chakra-ui/styled-system';

SwiperCore.use([EffectFlip, Pagination, Navigation]);

const D3AppWeb = ({ dep }) => {
    const style = {width: "100%", height: "100%"};
    if (dep === "D3") {
        return (
            <div className="webCarouselBody">
                <Swiper
                    grabCursor={true}
                    effect={'flip'}
                    pagination={true}
                    navigation={true}
                >
                    <div style={{alignItems: "center"}}>
                        <SwiperSlide>
                            <div className="imageContainer">
                                <img src="/assets/web_screenshots_initiatives.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageContainer">
                                <img src="/assets/web_screenshots_aboutus.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageContainer">
                                <img src="/assets/web_screenshots_cdy.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageContainer">
                                <img src="/assets/app-mockup-ios-screenshot-4-default0.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageContainer">
                                <img src="/assets/Screenshot_20210924-201917_Mockup.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageContainer">
                                <img src="/assets/Screenshot_20210924-202225_Mockup.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        );
    } else 
        return null;
};

export default D3AppWeb;
