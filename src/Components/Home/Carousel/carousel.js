import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Pagination} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';


import './carousel.scss'

import EventCard from '../EventCard/eventcard';


SwiperCore.use([Pagination]);

function ControlledCarousel(props) {    

  const events = [
        { eventName: "Junoon", eventInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra.", imgPath: "home_initiatives.png"},
        { eventName: "Junoon", eventInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra.", imgPath: "home_initiatives.png" },
        { eventName: "Junoon", eventInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra.", imgPath: "home_initiatives.png" }
    ];

  return (
      <Swiper
      spaceBetween={20}
      slidesPerView={props.slides}
      pagination={{ clickable: true }}

    >
          <SwiperSlide><div className="car_card"><EventCard eventName={events[0].eventName} eventInfo={events[0].eventInfo} imgPath={events[0].imgPath}/></div></SwiperSlide>
          <SwiperSlide><div className="car_card"><EventCard eventName={events[1].eventName} eventInfo={events[0].eventInfo} imgPath={events[0].imgPath} /></div></SwiperSlide>
          <SwiperSlide><div className="car_card"><EventCard eventName={events[2].eventName} eventInfo={events[0].eventInfo} imgPath={events[0].imgPath} /></div></SwiperSlide>
          <SwiperSlide><div className="car_card"><EventCard eventName={events[0].eventName} eventInfo={events[0].eventInfo} imgPath={events[0].imgPath} /></div></SwiperSlide>
          <SwiperSlide><div className="car_card"><EventCard eventName={events[1].eventName} eventInfo={events[0].eventInfo} imgPath={events[0].imgPath} /></div></SwiperSlide>
          <SwiperSlide><div className="car_card"><EventCard eventName={events[2].eventName} eventInfo={events[0].eventInfo} imgPath={events[0].imgPath} /></div></SwiperSlide>
      
    </Swiper>
  );
}

export default ControlledCarousel;