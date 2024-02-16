import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import { HeroSlide } from './HeroSlide';

export const Hero = () => {
  return (
    <Swiper
      pagination={true} 
      modules={[Pagination]} 
      className="mySwiper"
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><HeroSlide/></SwiperSlide>
      <SwiperSlide><HeroSlide/></SwiperSlide>
      <SwiperSlide><HeroSlide/></SwiperSlide>
      <SwiperSlide><HeroSlide/></SwiperSlide>
      ...
    </Swiper>
  );
}

