import style from "./PromotionTwo.module.css";
import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Product from "../Products/Product";
import { useOutletContext } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Skeleton } from "@mui/material";

const PromotionTwo = () => {
  const [products, loading, error] = useOutletContext();

  return (
    <>
      {" "}
      {loading ? (
        <div className={style.mainContainer}>
          <Skeleton variant="text" height={40} width="20%" />
          <Skeleton variant="rounded" height={200} />
        </div>
      ) : (
        <div className={style.mainContainer}>
          <div className={style.titleContainer}></div>
          <h1>
            {" "}
            <b className={style.titleLeft}>YOU MIGHT LIKE THIS</b>
          </h1>
          <Swiper
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={20}
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
            {products &&
              products.map((p) => (
                <>
                  <SwiperSlide className={style.slide} key={p.id}>
                    <div className={style.productCon} key={p.id}>
                      <Product
                        key={p.id}
                        title={p.title.slice(0, 20) + "..."}
                        price={p.price}
                        url={p.image}
                        id={p.id}
                      ></Product>
                    </div>
                  </SwiperSlide>
                </>
              ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default PromotionTwo;
