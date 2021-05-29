import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Pagination} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';


import './carousel.scss'

import ProfileCard from '../ProfileCard/ProfileCard';


SwiperCore.use([Pagination]);

function ControlledCarousel(props) {    

  const cards = [
      <ProfileCard imgPath="ProfilePic.png" designation="Faculty Coordinator" personName="Ashish Tiwari" />,
      <ProfileCard imgPath="ProfilePic.png" designation="Faculty Coordinator" personName="Ashish Tiwari" />,
      <ProfileCard imgPath="ProfilePic.png" designation="Faculty Coordinator" personName="Ashish Tiwari" />,
      <ProfileCard imgPath="ProfilePic.png" designation="Faculty Coordinator" personName="Ashish Tiwari" />,
      <ProfileCard imgPath="ProfilePic.png" designation="Faculty Coordinator" personName="Ashish Tiwari" />,
      <ProfileCard imgPath="ProfilePic.png" designation="Faculty Coordinator" personName="Ashish Tiwari" />
    ];

  return (
      <Swiper
      spaceBetween={20}
      slidesPerView={props.slides}
      pagination={{ clickable: true }}

      >
          {cards.map((card, index) => {
              if (index >= props.number) {
                  return null;
              }
              return <SwiperSlide><div className="car_card_about">{card}</div></SwiperSlide>;
      })}
      
    </Swiper>
  );
}

export default ControlledCarousel;