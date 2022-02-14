import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";

const ImageSwiper = ({ imageLinks }) => {
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {imageLinks.map(({ imgSrc, imgAlt }, i) => (
        <SwiperSlide key={i}>
          <Image
            src={imgSrc}
            alt={imgAlt}
            layout="responsive"
            width={800}
            height={450}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
