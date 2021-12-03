import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import Image from "Next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Pagination, Navigation]);

const ImageSlider = ({ imageLinks }) => {
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      navigation
    >
      {imageLinks.map(({ imgSrc, imgAlt }, i) => (
        <SwiperSlide key={i}>
          <Image
            src={imgSrc}
            alt={imgAlt}
            layout="responsive"
            width={620}
            height={350}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
