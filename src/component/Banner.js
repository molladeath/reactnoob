import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import mbanner from "./css/mbanner.module.css";


function Banner(props) {
    const bannerdb = {
        mainBanner :[
            {
                title : ['h2태그에 삽입되는 큰 타이틀','p태크에 들어가는 설명문구'],
                type : 'a',
                href : ['http://www.github.com', '_black'],
                cls : ['event','bg-light']
            },
            {
                title : ['두번째기획배너이름','작은 설명문구'],
                type : 'Link',
                href : ['/promotion2', ''],
                cls : ['project','bg-danger']
            },
            {
                title : ['세번째기획배너이름','작은 설명문구'],
                type : 'Link',
                href : ['/promotion3', ''],
                cls : ['project','bg-info']
            }
        ]
    }



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
     {
        bannerdb.mainBanner.map((value,index)=>{
            return (
                <SwiperSlide className={mbanner.item +" "+value.cls.join(" ")}>
                <div>
                    <h2>
                        {value.title[0]}
                    </h2>
                    <p>
                        {value.title[1]}
                    </p>
                </div>
            </SwiperSlide>
        )
        })
       
    }</Swiper>  
    </div>
    );
}

export default Banner;