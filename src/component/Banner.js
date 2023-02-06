import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import mbanner from "./css/mbanner.module.css";
import bannerdb from "./json/bannerdb.json"
import {Link} from 'react-router-dom';

function Banner(props) {
    
    return (
        <div id={props.objid} className='h-100'>
            <Swiper
        modules={[ Pagination, Autoplay]}
        loop={true}
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
        
        >
     {
        bannerdb.mainBanner.map((value,idx)=>{
            return (
                <SwiperSlide key={'sw'+idx } className={mbanner.item +" "+value.cls.join(" ")}>
                <div className='mt-4'>
                    <h2>
                        {value.title[0]}
                    </h2>
                    <p className='mb-5'>
                        {value.title[1]}
                    </p>
                    {
                      value.type == 'a' ? 
                        <a href={value.href[0]} target={value.href[1]}><h3>{value.atext}</h3></a> : 
                        <Link to={value.href[0]}><h3 className=''>{value.atext}</h3></Link>  
                    }
                </div>
            </SwiperSlide>
        )
        })
       
    }</Swiper>  
    </div>
    );
}

export default Banner;