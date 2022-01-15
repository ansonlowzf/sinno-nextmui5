import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Pagination, Navigation]);

const ImageSwiper = ({ imagesLinks }) => {
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      navigation
    >
      {imagesLinks.map(({ imgSrc, imgAlt }, i) => (
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
