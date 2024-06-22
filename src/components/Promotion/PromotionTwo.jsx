import style from "./PromotionTwo.module.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Product from "../Products/Product";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const PromotionTwo = () => {
  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.titleContainer}></div>
        <h1>
          {" "}
          <b className={style.titleLeft}>YOU MIGHT LIKE THIS</b>
        </h1>
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={70}
          navigation={true}
          modules={[Navigation]}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide className={style.slide}>
            <Product
              key={1}
              title={"ralph lauren"}
              subTitle={"awesome sweater pro mesh"}
              price={"20"}
              url={
                "https://www.asphaltgold.com/cdn/shop/files/9ef54fd120c2af23b3127939c0c6a8b558c9e555_710671929001_Polo_Ralph_Lauren_Estate_Rib_Quarter_Zip_Pullover_Polo_Black_os_1_320x320.jpg?v=1718974013"
              }
            ></Product>
          </SwiperSlide>
          <SwiperSlide className={style.slide}>
            <Product
              key={1}
              title={"ralph lauren"}
              subTitle={"awesome sweater pro mesh"}
              price={"20"}
              url={
                "https://www.asphaltgold.com/cdn/shop/files/9ef54fd120c2af23b3127939c0c6a8b558c9e555_710671929001_Polo_Ralph_Lauren_Estate_Rib_Quarter_Zip_Pullover_Polo_Black_os_1_320x320.jpg?v=1718974013"
              }
            ></Product>
          </SwiperSlide>
          <SwiperSlide className={style.slide}>
            <Product
              key={1}
              title={"ralph lauren"}
              subTitle={"awesome sweater pro mesh"}
              price={"20"}
              url={
                "https://www.asphaltgold.com/cdn/shop/files/9ef54fd120c2af23b3127939c0c6a8b558c9e555_710671929001_Polo_Ralph_Lauren_Estate_Rib_Quarter_Zip_Pullover_Polo_Black_os_1_320x320.jpg?v=1718974013"
              }
            ></Product>
          </SwiperSlide>
          <SwiperSlide className={style.slide}>
            <Product
              key={1}
              title={"ralph lauren"}
              subTitle={"awesome sweater pro mesh"}
              price={"20"}
              url={
                "https://www.asphaltgold.com/cdn/shop/files/9ef54fd120c2af23b3127939c0c6a8b558c9e555_710671929001_Polo_Ralph_Lauren_Estate_Rib_Quarter_Zip_Pullover_Polo_Black_os_1_320x320.jpg?v=1718974013"
              }
            ></Product>
          </SwiperSlide>
          <SwiperSlide className={style.slide}>
            <Product
              key={1}
              title={"ralph lauren"}
              subTitle={"awesome sweater pro mesh"}
              price={"20"}
              url={
                "https://www.asphaltgold.com/cdn/shop/files/9ef54fd120c2af23b3127939c0c6a8b558c9e555_710671929001_Polo_Ralph_Lauren_Estate_Rib_Quarter_Zip_Pullover_Polo_Black_os_1_320x320.jpg?v=1718974013"
              }
            ></Product>
          </SwiperSlide>
          <SwiperSlide className={style.slide}>
            <Product
              key={1}
              title={"ralph lauren"}
              subTitle={"awesome sweater pro mesh"}
              price={"20"}
              url={
                "https://www.asphaltgold.com/cdn/shop/files/9ef54fd120c2af23b3127939c0c6a8b558c9e555_710671929001_Polo_Ralph_Lauren_Estate_Rib_Quarter_Zip_Pullover_Polo_Black_os_1_320x320.jpg?v=1718974013"
              }
            ></Product>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default PromotionTwo;
