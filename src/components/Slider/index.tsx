'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

import CardSlider from './CardSlider';

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardSlider
            href='/assets/images/pai.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardSlider
            href='/assets/images/pai.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardSlider
            href='/assets/images/pai.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardSlider
            href='/assets/images/pai.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardSlider
            href='/assets/images/pai.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardSlider
            href='/assets/images/pai.jpg'
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider