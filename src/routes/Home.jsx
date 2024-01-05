import React, { useRef, useState, useEffect } from "react";
import "../App.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import {
  Autoplay,
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import banner1 from "../assets/banner-1.jpg";
import banner2 from "../assets/banner-2.png";

import BasketButton from "../icons/Product/BasketButton";

import { Link } from "react-router-dom";

// API QUERY
import { getCategories, getProducts } from "../api/Home/home";
// Redux Hook
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../utils/token";

// Reducers State Functions

const Home = () => {
  const myToken = getToken();
  console.log(myToken);
  let monthPrice = null;

  const dispatch = useDispatch();
  // Reducers
  const dataGetCategories = useSelector(
    (store) => store.home.dataGetCategories
  );
  const dataGetProducts = useSelector((store) => store.home.dataGetProducts);
  console.log(dataGetProducts);
  // useEffect
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <main>
      <div className="max-w-[1192px] px-[32px] mx-auto">
        <div className="fullscreen hidden md:block">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={banner1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={banner2} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="wrapper-products-list md:mt-[100px]">
        <div className="container">
          {/* Get Categories */}
          <h1 className="main-title">Популярные категории</h1>

          <div className="wrapper-items flex flex-wrap justify-between gap-[20px] items-center py-[25px]">
            {dataGetCategories.map((e) => {
              return (
                <div
                  key={e.id}
                  className="item md:w-[15%] w-[40%] flex flex-col items-center gap-[5px] hover:text-[#ffbe1f] cursor-pointer"
                >
                  <div className="wrapper-image">
                    <img src="src/assets/category-image-1.jpg" alt="" />
                  </div>
                  <div className="wrapper-text">
                    <p className="font-[600] text-center">{e.categoryName}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="wrapper-discounts-products mt-[75px]">
            <div className="wrapper-text flex gap-[10px] items-center">
              <h2 className="main-title">Самые горячие скидки</h2>
              <p>🔥</p>
              <p className="text-[#3e75a8] font-[600] hover:text-[#ffbe1f] cursor-pointer">
                Смотреть все
              </p>
            </div>
            <div className="wrapper-items">
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                className="mySwiper2"
                cssMode={true}
                navigation={true}
                pagination={false}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              >
                {dataGetProducts.map((e) => {
                  return (
                    <SwiperSlide key={e.id}>
                      <Link to={`product/${e.id}`}>
                        <div className="items flex flex-col items-center md:items-start gap-[20px] cursor-pointer py-[25px]">
                          <div className="wrapper-image">
                            <img src="src/assets/tv.webp" alt="" />
                          </div>
                          <div className="wrapper-content flex flex-col items-start gap-[5px]">
                            <div className="discounts flex items-center gap-[5px]">
                              <p className="bg-[#ff0000c7] rounded-lg py-[2.5px] px-[10px] text-[#fff] text-[11px] font-[600]">
                                {"-" + e.discountPrice + "%"}
                              </p>
                              <p className="bg-[#0059ffd2] rounded-lg py-[2.5px] px-[10px] text-[#fff] text-[12px] font-[600]">
                                +Подарок
                              </p>
                            </div>
                            <div className="price flex items-start gap-[5px]">
                              <p className="text-[16px] font-bold">{e.price}</p>
                              <p className="text-[14px] text-[#9ba1a7] font-[600]">
                                {e.price * 1.067}
                              </p>
                            </div>
                            <div className="month flex items-start gap-[5px]">
                              <p className="font-[500] text-[#9ba1a7] text-[14px]">
                                {Math.floor(e.price / 24)}
                              </p>
                              <p className="font-[500] text-[#9ba1a7] text-[14px]">
                                x24 мес
                              </p>
                            </div>
                            <p className="title text-[14px] font-[600]">
                              {e.productName}
                            </p>
                            <button className="flex items-center gap-[10px] bg-[#ffbe1f] px-[16px] py-[8px] rounded-lg text-[14px] font-[600] hover:bg-[#ffc01f80] cursor-pointer">
                              <BasketButton />
                              <p>В корзину</p>
                            </button>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            {/* Обогреватели */}
            <div className="wrapper-text flex gap-[10px] items-center">
              <h3 className="main-title">Обогреватели</h3>
              <p className="text-[#3e75a8] font-[600] hover:text-[#ffbe1f] cursor-pointer">
                Смотреть все
              </p>
            </div>
            <div className="wrapper-items">
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                className="mySwiper2"
                cssMode={true}
                navigation={true}
                pagination={false}
                mousewheel={true}
                modules={[Navigation, Pagination, Mousewheel]}
              >
                {dataGetProducts.map((e) => {
                  return (
                    <SwiperSlide key={e.id}>
                      <Link to={`/basic/product/${e.id}`}>
                        <div className="items flex flex-col items-center md:items-start gap-[20px] cursor-pointer py-[25px]">
                          <div className="wrapper-image">
                            <img src="src/assets/obogrev.webp" alt="" />
                          </div>
                          <div className="wrapper-content flex flex-col items-start gap-[5px]">
                            <div className="price flex items-start gap-[5px]">
                              <p className="text-[16px] font-bold">{e.price}</p>
                              <p className="text-[14px] text-[#9ba1a7] font-[600] line-through">
                                {e.price * 1.1}
                              </p>
                            </div>
                            <div className="month flex items-start gap-[5px]">
                              <p className="font-[500] text-[#9ba1a7] text-[14px]">
                                {Math.floor(e.price / 24)}
                              </p>
                              <p className="font-[500] text-[#9ba1a7] text-[14px]">
                                x24 мес
                              </p>
                            </div>
                            <p className="title text-[14px] font-[600]">
                              {e.productName}
                            </p>
                            <button className="flex items-center gap-[10px] bg-[#ffbe1f] px-[16px] py-[8px] rounded-lg text-[14px] font-[600] hover:bg-[#ffc01f80] cursor-pointer">
                              <BasketButton />
                              <p>В корзину</p>
                            </button>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
