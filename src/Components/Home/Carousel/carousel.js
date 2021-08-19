import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Pagination} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import sanityClient from '../../../client';

import './carousel.scss'

import EventCard from '../EventCard/eventcard';
import { useSelector} from 'react-redux';

SwiperCore.use([Pagination]);

function ControlledCarousel(props) {
  
  const initiatives = useSelector((state) => state.initiatives);

  return (
      <Swiper
      spaceBetween={20}
      slidesPerView={props.slides}
      pagination={{ clickable: true }}

    >
      {initiatives.map((event) => <SwiperSlide><div className="car_card"><EventCard eventName={event.title} eventInfo={event.information} imgPath={event.imageurl} eventType={event.eventType}/></div></SwiperSlide>)}
    </Swiper>
  );
}

export default ControlledCarousel;