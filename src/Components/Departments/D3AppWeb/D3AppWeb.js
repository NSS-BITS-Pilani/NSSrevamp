import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFlip, Pagination, Navigation } from 'swiper';
import '../D3AppWeb/D3AppWeb.scss';

import 'swiper/swiper.scss';
import 'swiper/components/effect-flip/effect-flip.scss';
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";

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
                        <SwiperSlide>
                            <div className="imageContainer">
                                <img src="/assets/screencapture-localhost-3000-resources-2021-09-24-07_29_45.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageContainer">
                                <img src="/assets/screencapture-nssbitspilani-org-2021-09-24-07_26_19.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageContainer">
                                <img src="/assets/screencapture-nssbitspilani-org-contactus-2021-09-24-07_27_46.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageContainer">
                                <img src="/assets/Screenshot_20210924-071659.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageContainer">
                                <img src="/assets/Screenshot_20210924-071659.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageContainer">
                                <img src="/assets/Screenshot_20210924-071726.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageContainer">
                                <img src="/assets/Screenshot_20210924-071810.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageContainer">
                                <img src="/assets/Screenshot_20210924-071834.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageContainer">
                                <img src="/assets/Screenshot_20210924-071850.jpg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="imageContainer">
                                <img src="/assets/Screenshot_20210924-071910.jpg" alt="" />
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
