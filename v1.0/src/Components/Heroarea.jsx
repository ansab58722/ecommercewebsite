
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import  "../css/Heroarea.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules

import { Navigation,Pagination,Autoplay} from 'swiper/modules';

const Heroarea = () => {
  return (
    <div>
 <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        
        speed={1900}
        navigation={true}
        autoplay={{
          delay: 700,
          disableOnInteraction: false,
        }}
        autoHeight={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >

   <SwiperSlide><img src="images/h4.jpg" alt="" /></SwiperSlide>
        <SwiperSlide>
          <img src="images/hero1.jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide><img src="images/hero3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="images/hero2.jpg" alt="" /></SwiperSlide>
       
       
      </Swiper>
      
    </div>
  )
}

export default Heroarea