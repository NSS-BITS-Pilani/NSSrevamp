import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFlip, Pagination, Navigation } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/effect-flip/effect-flip.scss';
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";

SwiperCore.use([EffectFlip, Pagination, Navigation]);

const D3Carousel = ({ dep }) => {
    const style = {width: "100%", height: "100%"};
    if (dep === "D3") {
        return (
            <div style={{width: "35rem", height: "max-content", margin: "2rem auto"}}>
                <Swiper
                    grabCursor={true}
                    effect={'flip'}
                    pagination={true}
                    navigation={true}
                >
                    <div style={{alignItems: "center"}}>
                        <SwiperSlide><img src="/assets/2021-02-10_Bits_Cycling_Day.jpg" alt="" style={{borderRadius: "1rem"}} /></SwiperSlide>
                        <SwiperSlide><img src="/assets/2021-04-16_Cyber_Security_Talk.jpg" alt="" style={{borderRadius: "1rem"}} /></SwiperSlide>
                        <SwiperSlide><img src="/assets/2021-06-14_World_Blood_Donor_Day.jpg" alt="" style={{borderRadius: "1rem"}} /></SwiperSlide>
                        <SwiperSlide><img src="/assets/2021-09-01_India_At_Paralympics.jpg" alt="" style={{borderRadius: "1rem"}} /></SwiperSlide>
                    </div>
                </Swiper>
            </div>
        );
    } else 
        return null;
};

export default D3Carousel;
