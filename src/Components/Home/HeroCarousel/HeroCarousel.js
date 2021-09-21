import React from 'react';
import classes from "./HeroCarousel.scss";
import { Carousel } from 'react-bootstrap';

const HeroCarousel = (props) => {

   
    return (
        <div className="heroCarousel">
        <Carousel fade className="CarouselImg">
  <Carousel.Item interval={4000}>
    <img
      className="d-block w-100"
      src="/assets/allnss2fin.jpeg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item  interval={3000}>
    <img
      className="d-block w-100"
      src="/assets/CdY-min.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="/assets/junooneve-min.JPG"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
        </div>
    );
}

export default HeroCarousel;