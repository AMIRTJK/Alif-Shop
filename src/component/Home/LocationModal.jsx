import React from "react";
import { Close } from "@mui/icons-material";
// Import Reducers
import { setLocationModal } from "../../reducers/Home/home";
import { useSelector, useDispatch } from "react-redux";

const LocationModal = () => {
  const dispatch = useDispatch();
  const locationModal = useSelector((store) => store.home.locationModal);

  return (
    <div
      className={`${
        locationModal ? "block" : "hidden"
      } modal-container bg-[#00000060] w-full h-full fixed z-10 top-0 left-0 flex justify-center items-start pt-[60px]`}
    >
      <div className="modal bg-[#fff] w-[26%] p-[40px] absolute z-20">
        <div className="wrapper-close flex justify-end">
          <button onClick={() => dispatch(setLocationModal(false))}>
            <Close
              sx={{ fontSize: "20px" }}
              className="text-[#73787d] cursor-pointer hover:text-[#ffbe1f]"
            />
          </button>
        </div>
        <div className="wrapper-list flex gap-[15px] justify-between items-start flex-wrap">
          <p className="font-[600] text-[18px] w-full">Выберите ваш город</p>
          <button className="item active py-[15px] w-[48%] rounded-lg hover:bg-[#ffc01f80]">
            <p className="font-bold">Душанбе</p>
          </button>
          <button className="item bg-gray-100 py-[15px] w-[48%] rounded-lg hover:bg-gray-200">
            <p className="font-[600]">Худжанд</p>
          </button>
          <button className="item bg-gray-100 py-[15px] w-[48%] rounded-lg hover:bg-gray-200">
            <p className="font-[600]">Вахдат</p>
          </button>
          <button className="item bg-gray-100 py-[15px] w-[48%] rounded-lg hover:bg-gray-200">
            <p className="font-[600]">Турсунзаде</p>
          </button>
          <button className="item bg-gray-100 py-[15px] w-[48%] rounded-lg hover:bg-gray-200">
            <p className="font-[600]">Гиссар</p>
          </button>
          <button className="item bg-gray-100 py-[15px] w-[48%] rounded-lg hover:bg-gray-200">
            <p className="font-[600]">Бохтар</p>
          </button>
          <button className="item bg-gray-100 py-[15px] w-[48%] rounded-lg hover:bg-gray-200">
            <p className="font-[600]">Куляб</p>
          </button>
          <button className="item bg-gray-100 py-[15px] w-[48%] rounded-lg hover:bg-gray-200">
            <p className="font-[600]">Истаравшан</p>
          </button>
          <button className="item bg-gray-100 py-[15px] w-[48%] rounded-lg hover:bg-gray-200">
            <p className="font-[600]">Исфара</p>
          </button>
          <button className="item bg-gray-100 py-[15px] w-[48%] rounded-lg hover:bg-gray-200">
            <p className="font-[600]">Канибадам</p>
          </button>
          <button className="item bg-gray-100 py-[15px] w-[48%] rounded-lg hover:bg-gray-200">
            <p className="font-[600]">Пенджикент</p>
          </button>
          <button className="item bg-gray-100 py-[15px] w-[48%] rounded-lg hover:bg-gray-200">
            <p className="font-[600]">Бустон</p>
          </button>
          <button className="item bg-gray-100 py-[15px] w-[48%] rounded-lg hover:bg-gray-200">
            <p className="font-[600]">Гафуров</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
