import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../api/Home/home";
import { getProductsFromCart } from "../api/Product/product";
import tvImage from "../assets/televizor-yasin-smart32-32dyuym-1665653449917-xl.webp";
import { Close } from "@mui/icons-material";
import BasketButton from "../icons/Product/BasketButton";
import { getToken } from "../utils/token";

import { addProductToCart } from "../api/Product/product";

import ShopList from "../component/Product/ShopList";

const Product = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const dispatch = useDispatch();
  const dataGetProducts = useSelector((store) => store.home.dataGetProducts);
  const dataGetProductsFromCart = useSelector(
    (store) => store.product.dataGetProductsFromCart
  );

  console.log(dataGetProductsFromCart);

  const [modalImage, setModalImage] = useState(false);

  const myToken = getToken();

  // useEffect
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProductsFromCart());
  }, [dispatch]);
  return (
    <main>
      <div className="container">
        <p className="text-[12px] text-[#009f64] font-[600] py-[4px] px-[6px] rounded-lg bg-[#f1ffed] inline">
          Бесплатная доставка
        </p>
        <div className="wrapper-content flex justify-between items-center gap-[20px] pb-[25px] w-[90%] mx-auto">
          <aside className="left w-[50%]">
            <div
              onClick={() => setModalImage(true)}
              className="wrapper-image cursor-pointer"
            >
              {dataGetProducts.map((e) => {
                if (e.id === productId) {
                  return (
                    <img
                      key={e.id}
                      src={`${import.meta.env.VITE_APP_FILES_URL}${e.image}`}
                      alt=""
                    />
                  );
                }
              })}
            </div>
            <div
              className={`${
                modalImage ? "block" : "hidden"
              } modal-image w-full h-full bg-[#fff] flex justify-center items-center fixed top-0 left-0 z-50`}
            >
              <button onClick={() => setModalImage(false)}>
                <Close className="absolute right-[1%] top-[2%] hover:text-[#ffbe1f] cursor-pointer" />
              </button>
              {dataGetProducts.map((e) => {
                if (e.id === productId) {
                  return (
                    <img
                      key={e.id}
                      className="w-[50%] cursor-pointer"
                      src={`${import.meta.env.VITE_APP_FILES_URL}${e.image}`}
                      alt=""
                    />
                  );
                }
              })}
            </div>
          </aside>
          <aside className="right">
            {dataGetProducts.map((e) => {
              if (e.id === productId) {
                return (
                  <div
                    key={e.id}
                    className="wrapper-text flex flex-col gap-[45px]"
                  >
                    <div className="title flex flex-col gap-[10px] ">
                      <p className="text-[24px] leading-8 font-[500]">
                        {e.productName + "Yasin-Smart32, 32дюйм."}
                      </p>
                      <p className="text-[14px] text-gray-500 font-[500]">
                        Код товара:{" "}
                      </p>
                    </div>
                    <div className="prices flex flex-col gap-[10px] border-b-[1px] border-gray-300 pb-[25px]">
                      <div className="wrapper-price flex items-center gap-[10px]">
                        <p className="text-[32px] font-bold">
                          {e.price + " c."}
                        </p>
                        <p className="text-[24px] line-through text-[#c4c9ce] font-[500]">
                          {e.price * 1.067 + " c."}{" "}
                        </p>
                        <p className="bg-[#ff0000c7] rounded-lg py-[2.5px] px-[10px] text-[#fff] text-[11px] font-[600]">
                          {"-" + e.discountPrice + "%"}
                        </p>
                      </div>
                      <p className="text-gray-500 text-[18px] font-[600]">{`В рассрочку ${Math.floor(
                        e.price / 24
                      )}c./мес.`}</p>
                    </div>
                    <ul className="wrapper-description flex flex-col gap-[10px]">
                      <li>
                        <p className="text-gray-500  font-[500]">
                          Диагональ{" "}
                          <span className="text-[#000]">32 дюйм.</span>
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-500 txet-[#73787d] font-[500]">
                          Разрешение HD<span className="text-[#000]"> HD</span>
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-500 txet-[#73787d] font-[500]">
                          Разрешение
                          <span className="text-[#000]"> 1366x768</span>
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-500 txet-[#73787d] font-[500]">
                          Суммарная мощность звука
                          <span className="text-[#000]"> 10 Вт</span>
                        </p>
                      </li>
                      <li>
                        <p className="text-gray-500 txet-[#73787d] font-[500]">
                          Количество динамиков
                          <span className="text-[#000]"> 2</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                );
              }
            })}
          </aside>
        </div>
        <div className="wrapper-purchase py-[30px]">
          <ul className="wrapper-list flex w-full bg-[#f3f4f5]">
            <li className="bg-white pt-[20px] pb-[16px] px-[32px] border-b-[3px] border-[#ffbe1f] text-[14px] font-bold cursor-pointer">
              <p>Магазины</p>
            </li>
            <li className="pt-[20px] pb-[16px] px-[32px] text-[14px] font-[600] text-[#73787d] hover:text-[#ffbe1f] cursor-pointer">
              <p>Характеристики</p>
            </li>
          </ul>
          <div className="wrapper-payment flex justify-between items-start gap-[10px] mt-[30px]">
            <div className="payment-method flex flex-col gap-[5px] ">
              <p className="text-gray-500 text-[14px] font-[600]">
                Способ оплаты
              </p>
              <div className="wrapper-buttons flex items-start gap-[10px]">
                <button className="border-[2px] border-[#ffbe1f] py-[10px] px-[56px] rounded-lg text-[14px] font-bold">
                  В рассрочку
                </button>
                <button className="border-[2px] border-[#ecf0f3] bg-[#ecf0f3] py-[10px] px-[56px] rounded-lg text-[14px] font-bold">
                  Наличными
                </button>
              </div>
            </div>
            <div className="payment-term flex flex-col gap-[5px]">
              <p className="text-gray-500 text-[14px] font-[600]">
                Срок рассрочки
              </p>
              <div className="buttons-list flex border-[1px] rounded-lg">
                <button className="py-[8px] px-[24px] border-r-[1px] font-[600] flex items-center justify-center">
                  3
                </button>
                <button className="py-[8px] px-[24px] border-r-[1px] font-[600] flex items-center justify-center">
                  6
                </button>
                <button className="py-[8px] px-[24px] border-r-[1px] font-[600] flex items-center justify-center">
                  9
                </button>
                <button className="py-[8px] px-[24px] border-r-[1px] font-[600] flex items-center justify-center">
                  12
                </button>
                <button className="py-[8px] px-[24px] border-r-[1px] font-[600] flex items-center justify-center">
                  18
                </button>
                <button className="py-[8px] px-[24px] border-r-[1px] font-[700] flex items-center justify-center bg-[#ffe9b3]">
                  24<span className="text-[11px]">мес</span>
                </button>
              </div>
            </div>
          </div>
          <ul className="wrapper-shops-list mt-[30px]">
            {dataGetProducts.map((e) => {
              if (e.id === productId) {
                return (
                  <div key={e.id}>
                    <ShopList
                      shop="Arzon Shop"
                      discount="-36%"
                      price={e.price}
                      priceStock={e.price * 1.09}
                      termPrice={Math.floor(e.price / 24)}
                      termMonth="24"
                      commission="37"
                    >
                      <button
                        onClick={() => {
                          addProductToCart(e.id);
                          console.log(e.id);
                        }}
                        className="card flex items-center gap-[10px] bg-[#ffbe1f] px-[16px] py-[8px] rounded-lg text-[14px] font-[600] hover:bg-[#ffc01f80] cursor-pointer"
                      >
                        <BasketButton />
                        <p>В корзину</p>
                      </button>
                    </ShopList>
                    <ShopList
                      shop="Uyutniy Dom"
                      discount="-36%"
                      price={Math.round(e.price / 1.02)}
                      priceStock={e.price * 1.06}
                      termPrice={Math.floor(e.price / 1.02 / 24)}
                      termMonth="24"
                      commission="37"
                    >
                      <button
                        onClick={() => addProductToCart(e)}
                        className="card flex items-center gap-[10px] bg-[#ffbe1f] px-[16px] py-[8px] rounded-lg text-[14px] font-[600] hover:bg-[#ffc01f80] cursor-pointer"
                      >
                        <BasketButton />
                        <p>В корзину</p>
                      </button>
                    </ShopList>
                    <ShopList
                      shop="Kushoniyon 902"
                      discount="-36%"
                      price={Math.round(e.price / 1.01)}
                      priceStock={e.price * 1.03}
                      termPrice={Math.floor(e.price / 1.01 / 24)}
                      termMonth="24"
                      commission="37"
                    >
                      <button
                        onClick={() => addProductToCart(e)}
                        className="card flex items-center gap-[10px] bg-[#ffbe1f] px-[16px] py-[8px] rounded-lg text-[14px] font-[600] hover:bg-[#ffc01f80] cursor-pointer"
                      >
                        <BasketButton />
                        <p>В корзину</p>
                      </button>
                    </ShopList>
                  </div>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Product;
