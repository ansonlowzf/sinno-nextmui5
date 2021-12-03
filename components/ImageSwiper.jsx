import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import NextImage from "Next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Pagination, Navigation]);

const ImageSwiper = ({ imageLinks }) => {
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      navigation
    >
      {imageLinks.map(({ imgSrc, imgAlt }, i) => (
        <SwiperSlide key={i}>
          <NextImage
            src={imgSrc}
            alt={imgAlt}
            layout="responsive"
            width={800}
            height={600}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
