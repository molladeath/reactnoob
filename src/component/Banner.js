import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";


function Banner(props) {
    return (
        <div id={props.objid} className='h-100'>
            <Swiper
        modules={[ Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={2}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
            type : "fraction"
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide className='d-flex flex-colum
        justify-content-center align-items-center' 
        style={{height : '800px'}}>양</SwiperSlide>
        <SwiperSlide className='d-flex flex-colum
        justify-content-center align-items-center' 
        style={{height : '800px'}}>현</SwiperSlide>
        <SwiperSlide className='d-flex flex-colum
        justify-content-center align-items-center' 
        style={{height : '800px'}}>영</SwiperSlide>
        </Swiper>
    </div>
    );
}

export default Banner;