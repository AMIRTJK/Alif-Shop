import React from "react";
const ShopList = (props) => {
  return (
    <li className="flex justify-between items-center border-y-[1px] py-[40px]">
      <p className="font-[600] hover:text-[#ffbe1f] cursor-pointer w-[120px]">
        {props.shop}
      </p>
      <div className="item flex gap-[10px]">
        <p className="bg-[#0059ffd2] rounded-lg py-[4px] px-[10px] text-[#fff] text-[12px] font-[600]">
          + Подарок
        </p>
        <p className="text-[12px] text-[#009f64] font-[600] py-[4px] px-[6px] rounded-lg bg-[#f1ffed] inline">
          Бесплатная доставка
        </p>
      </div>
      <div className="item">
        <div className="discount flex gap-[5px]">
          <p className="text-gray-500 text-[14px] font-[600]">Цена</p>
          <p className="bg-[#ff0000c7] rounded-lg py-[2.5px] px-[10px] text-[#fff] text-[11px] font-[700]">
            {props.discount}
          </p>
        </div>
        <div className="price flex items-center gap-[5px]">
          <p className="text-[20px] font-bold">{props.price} c.</p>
          <p className="text-[18px] text-[#bfc6ce] font-[600] line-through">
            {props.priceStock} c.
          </p>
        </div>
      </div>
      <div className="term">
        <p className="text-gray-500 text-[14px] font-[600]">В рассрочку</p>
        <div className="term-month flex gap-[5px] items-center">
          <p className="font-bold">
            {props.termPrice}
            <span> c.</span>
          </p>
          <p className="text-[#9ba1a7] text-[12px]">
            x{" "}
            <span className="text-black text-[16px] font-[500]">
              {props.termMonth} мес
            </span>
          </p>
        </div>
      </div>
      <div className="commission">
        <p className="text-gray-500 text-[14px] font-[600]">Комиссия</p>
        <p className="font-bold">{props.commission}%</p>
      </div>
      {props.children}
    </li>
  );
};

export default ShopList;
