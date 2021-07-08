import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Pagination} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import sanityClient from '../../../client';

import './carousel.scss'

import EventCard from '../EventCard/eventcard';


SwiperCore.use([Pagination]);

function ControlledCarousel(props) {
  
  const [initiatives, setInitiatives] = useState([]);
  async function fetchData() {
        const dataArray = await sanityClient.fetch('*[_type == "initiative"]');
        setInitiatives(dataArray);
    }

    React.useEffect(() => {
        fetchData();
    }, []);

  return (
      <Swiper
      spaceBetween={20}
      slidesPerView={props.slides}
      pagination={{ clickable: true }}

    >
      {initiatives.map((event) => <SwiperSlide><div className="car_card"><EventCard eventName={event.title} eventInfo={event.information} imgPath={event.imgurl} eventType={event.eventType}/></div></SwiperSlide>)}
    </Swiper>
  );
}

export default ControlledCarousel;