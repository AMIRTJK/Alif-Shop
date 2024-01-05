import React from "react";
import "../App.css";
import emptyCart from "../assets/emptycart.png";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <main className="max-w-[1192px] mx-auto px-[32px]">
      <h1 className="text-[32px] font-[800]">Корзина</h1>
      <div className="wrapper flex flex-col gap-[20px] justify-center items-center py-[72px]">
        <img src={emptyCart} alt="" />
        <p className="text-[32px] font-[800]">Внутри пока нет товаров</p>
        <p className="font-[500]">
          Перейдите в раздел с товарами, чтобы оставить заявку
        </p>
        <Link to="/basic/catalog">
          <button className="bg-[#ffbe1f] text-center py-[16px] px-[32px] rounded-lg font-[500]">
            Перейти в раздел
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Cart;
