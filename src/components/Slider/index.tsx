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
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardSlider
            href='/assets/projects/fincheck.png'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardSlider
            href='/assets/projects/waiterapp.png'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardSlider
            href='/assets/projects/coffedeliveryapp.png'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardSlider
            href='/assets/projects/fetching.png'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardSlider
            href='/assets/projects/fetching.png'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardSlider
            href='/assets/projects/fetching.png'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardSlider
            href='/assets/projects/fetching.png'
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider