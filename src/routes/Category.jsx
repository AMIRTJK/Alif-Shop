import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BasketButton from "../icons/Product/BasketButton";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/Product/product";

const Category = () => {
  const param = useParams();
  console.log(param);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(param));
  }, [dispatch]);

  return (
    <main>
      <div className="fullscreen max-w-[1192px] px-[32px] mx-auto py-[50px]">
        <div className="title-filter flex justify-between items-start">
          <div className="wrapper-text flex items-center gap-[15px]">
            <h1 className="text-[32px] font-[700]">iPhone</h1>
            <p className="font-[600] text-gray-500">104 товара</p>
          </div>
          <div className="filter">
            <label
              htmlFor=""
              value="Сортировать"
              className="text-gray-500 font-[600] text-[14px]"
            >
              Сортировать
              <select className="border-[1px] ml-2 px-[10px] py-[15px] rounded-md outline-none text-[#000] text-[14px] font-[600] w-[60%] cursor-pointer hover:bg-[#f0f0f0] hover:border-[#c4c4c4] transition-all duration-100">
                <option
                  value=""
                  className="bg-[#fff] fixed font-[600] text-[14px] hover:bg-[red]"
                >
                  Популярные
                </option>
                <option value="" className="bg-[#fff] font-[600] text-[14px]">
                  Сначала дешевые
                </option>
                <option value="" className="bg-[#fff] font-[600] text-[14px]">
                  Сначала дорогие
                </option>
                <option value="" className="bg-[#fff] font-[600] text-[14px]">
                  Новинки
                </option>
              </select>
            </label>
          </div>
        </div>
        <div className="filter-products flex justify-between items-start py-[25px]">
          <aside className="left w-[20%]">
            <div className="filter-list flex flex-col gap-[40px] overflow-auto h-[100vh] category-scrollbar">
              <div className="price-filter flex flex-col items-start gap-[15px]">
                <p className="text-[14px] font-[800]">Цена</p>
                <div className="wrapper-inputs flex items-start gap-[5px]">
                  <input
                    type="text"
                    placeholder="от 4300"
                    className="border-[1px] p-[7.5px] rounded-lg focus:outline-none focus:border-[#ffbe1f] placeholder:font-[500] placeholder:text-[#7b7b7b] w-[45%]"
                  />
                  <input
                    type="text"
                    placeholder="от 34242"
                    className="border-[1px]  p-[7.5px] rounded-lg focus:outline-none focus:border-[#ffbe1f] placeholder:font-[500] placeholder:text-[#7b7b7b] w-[45%]"
                  />
                </div>
              </div>
              <div className="filter-brand flex flex-col items-start gap-[15px]">
                <p className="text-[14px] font-[800]">Бренд</p>
                <div className="wrapper-input flex items-center gap-[10px]">
                  <input
                    id="brand"
                    type="checkbox"
                    className="w-[18.5px] h-[18.5px] cursor-pointer"
                  />
                  <label
                    htmlFor="brand"
                    className="text-[14px] font-[700] cursor-pointer"
                  >
                    Apple
                  </label>
                </div>
              </div>
              <div className="filter-model flex flex-col items-start gap-[15px]">
                <p className="text-[14px] font-[800]">Модель</p>
                <div className="wrapper-input flex items-center gap-[10px]">
                  <input
                    id="model-1"
                    type="checkbox"
                    className="w-[18.5px] h-[18.5px] cursor-pointer"
                  />
                  <label
                    htmlFor="model-1"
                    className="text-[14px] font-[700] cursor-pointer"
                  >
                    iPhone 11
                  </label>
                </div>
                <div className="wrapper-input flex items-center gap-[10px]">
                  <input
                    id="model-2"
                    type="checkbox"
                    className="w-[18.5px] h-[18.5px] cursor-pointer"
                  />
                  <label
                    htmlFor="model-2"
                    className="text-[14px] font-[700] cursor-pointer"
                  >
                    iPhone 13
                  </label>
                </div>
              </div>
              <div className="filter-memory-hdd flex flex-col items-start gap-[15px]">
                <p className="text-[14px] font-[800]">
                  Объём встроенной памяти
                </p>
                <div className="wrapper-input flex items-center gap-[10px]">
                  <input
                    id="memory-1"
                    type="checkbox"
                    className="w-[18.5px] h-[18.5px] cursor-pointer"
                  />
                  <label
                    htmlFor="memory-1"
                    className="text-[14px] font-[700] cursor-pointer"
                  >
                    1000
                  </label>
                </div>
                <div className="wrapper-input flex items-center gap-[10px]">
                  <input
                    id="memory-hdd-2"
                    type="checkbox"
                    className="w-[18.5px] h-[18.5px] cursor-pointer"
                  />
                  <label
                    htmlFor="memory-hdd-2"
                    className="text-[14px] font-[700] cursor-pointer"
                  >
                    128
                  </label>
                </div>
              </div>
              <div className="filter-memory-ram flex flex-col items-start gap-[15px]">
                <p className="text-[14px] font-[800]">
                  Объём оперативной памяти
                </p>
                <div className="wrapper-input flex items-center gap-[10px]">
                  <input
                    id="memory-ram-1"
                    type="checkbox"
                    className="w-[18.5px] h-[18.5px] cursor-pointer"
                  />
                  <label
                    htmlFor="memory-ram-1"
                    className="text-[14px] font-[700] cursor-pointer"
                  >
                    3
                  </label>
                </div>
                <div className="wrapper-input flex items-center gap-[10px]">
                  <input
                    id="memory-ram-2"
                    type="checkbox"
                    className="w-[18.5px] h-[18.5px] cursor-pointer"
                  />
                  <label
                    htmlFor="memory-ram-2"
                    className="text-[14px] font-[700] cursor-pointer"
                  >
                    4
                  </label>
                </div>
              </div>
              <div className="filter-type-display flex flex-col items-start gap-[15px]">
                <p className="text-[14px] font-[800]">Тип дисплея</p>
                <div className="wrapper-input flex items-center gap-[10px]">
                  <input
                    id="memory-type-display-1"
                    type="checkbox"
                    className="w-[18.5px] h-[18.5px] cursor-pointer"
                  />
                  <label
                    htmlFor="memory-type-display-1"
                    className="text-[14px] font-[700] cursor-pointer"
                  >
                    OLED
                  </label>
                </div>
                <div className="wrapper-input flex items-center gap-[10px]">
                  <input
                    id="memory-type-display-2"
                    type="checkbox"
                    className="w-[18.5px] h-[18.5px] cursor-pointer"
                  />
                  <label
                    htmlFor="memory-type-display-2"
                    className="text-[14px] font-[700] cursor-pointer"
                  >
                    Super Retina XDR OLED
                  </label>
                </div>
              </div>
              <div className="filter-diagonal flex flex-col items-start gap-[15px]">
                <p className="text-[14px] font-[800]">Диагональ</p>
                <div className="wrapper-input flex items-center gap-[10px]">
                  <input
                    id="memory-diagonal-1"
                    type="checkbox"
                    className="w-[18.5px] h-[18.5px] cursor-pointer"
                  />
                  <label
                    htmlFor="memory-diagonal-1"
                    className="text-[14px] font-[700] cursor-pointer"
                  >
                    4.7
                  </label>
                </div>
                <div className="wrapper-input flex items-center gap-[10px]">
                  <input
                    id="memory-diagonal-2"
                    type="checkbox"
                    className="w-[18.5px] h-[18.5px] cursor-pointer"
                  />
                  <label
                    htmlFor="memory-diagonal-2"
                    className="text-[14px] font-[700] cursor-pointer"
                  >
                    6.1
                  </label>
                </div>
                <div className="wrapper-input flex items-center gap-[10px]">
                  <input
                    id="memory-diagonal-3"
                    type="checkbox"
                    className="w-[18.5px] h-[18.5px] cursor-pointer"
                  />
                  <label
                    htmlFor="memory-diagonal-3"
                    className="text-[14px] font-[700] cursor-pointer"
                  >
                    6.7
                  </label>
                </div>
              </div>
              <div className="filter-connection flex flex-col items-start gap-[15px]">
                <p className="text-[14px] font-[800]">Диагональ</p>
                <div className="wrapper-input flex items-center gap-[10px]">
                  <input
                    id="memory-connection-1"
                    type="checkbox"
                    className="w-[18.5px] h-[18.5px] cursor-pointer"
                  />
                  <label
                    htmlFor="memory-connection-1"
                    className="text-[14px] font-[700] cursor-pointer"
                  >
                    3G
                  </label>
                </div>
                <div className="wrapper-input flex items-center gap-[10px]">
                  <input
                    id="memory-connection-2"
                    type="checkbox"
                    className="w-[18.5px] h-[18.5px] cursor-pointer"
                  />
                  <label
                    htmlFor="memory-connection-2"
                    className="text-[14px] font-[700] cursor-pointer"
                  >
                    4G (LTE)
                  </label>
                </div>
                <div className="wrapper-input flex items-center gap-[10px]">
                  <input
                    id="memory-connection-3"
                    type="checkbox"
                    className="w-[18.5px] h-[18.5px] cursor-pointer"
                  />
                  <label
                    htmlFor="memory-connection-3"
                    className="text-[14px] font-[700] cursor-pointer"
                  >
                    5G
                  </label>
                </div>
              </div>
            </div>
          </aside>
          <aside className="right w-[80%]">
            <div className="wrapper-items pl-[30px] flex flex-row justify-between flex-wrap">
              {/* {dataGetProductById.map((e) => {
                return (
                  <div className="items w-[25%] flex flex-col items-center md:items-start gap-[20px] cursor-pointer py-[25px]">
                    <Link to={`/basic/product/${e.id}`}>
                      <div className="wrapper-image h-[225px]">
                        <img
                          src={`${import.meta.env.VITE_APP_FILES_URL}${
                            e.image
                          }`}
                          alt=""
                        />
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
                        <p className="title text-left text-[14px] font-[600]">
                          {e.productName}
                        </p>
                      </div>
                    </Link>

                    <button className="flex items-center gap-[10px] bg-[#ffbe1f] px-[16px] py-[8px] rounded-lg text-[14px] font-[600] hover:bg-[#ffc01f80] cursor-pointer">
                      <BasketButton />
                      <p>В корзину</p>
                    </button>
                  </div>
                );
              })} */}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Category;
