import React from "react";
import Bg from "../assets/BG 2.png";
import Dokumentasi from "../assets/dokumentasi.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import { Gambar1, Gambar2, Gambar3 } from "../assets/documentations/index";

function Documentation() {
  return (
    <div
      className="-mt-10 w-full h-full md:-mt-28 lg:bg-cover md:bg-cover"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      <div className="w-full pt-12 pb-10 ">
        <img
          className="mx-auto h-full w-[80%] lg:w-[80%] lg:mt-8 2xl:w-[80%] 2xl:mt-8"
          src={Dokumentasi}
          alt="Gambar Tentang"
        />

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={2}
          loop={false}
          coverflowEffect={{
            rotate: 3,
            stretch: 0,
            depth: 650,
            modifier: 2.5,
            slideShadows: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              coverflowEffect: {
                rotate: 3,
                stretch: 0,
                depth: 400,
                modifier: 3,
              },
            },
            // ketika ukuran layar >= 1024px
            1024: {
              slidesPerView: 2,
              coverflowEffect: {
                rotate: 3,
                stretch: 0,
                depth: 400,
                modifier: 3,
              },
            },
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mt-8 lg:mt-16 "
        >
          {[Gambar1, Gambar2, Gambar3, Gambar3, Gambar3].map((img, index) => (
            <SwiperSlide key={index} className="mb-8 ">
              <img
                src={img}
                className="w-[65%] sm:w-[90%] 2xl:w-[80%] mx-auto rounded-3xl"
                alt="slide_image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Documentation;
