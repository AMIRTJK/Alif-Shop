import React, { useState } from "react";
import { Close } from "@mui/icons-material";
// Import Reducers
import { setSignModal } from "../../reducers/Home/home";
import { useSelector, useDispatch } from "react-redux";

const SignModal = () => {
  const dispatch = useDispatch();
  const signModal = useSelector((store) => store.home.signModal);

  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div
      className={`${
        signModal ? "block" : "hidden"
      } modal-container bg-[#00000060] w-full h-full fixed z-10 top-0 left-0 flex justify-center items-center`}
    >
      <div className="modal bg-[#fff] w-[20%] px-[20px] py-[40px] absolute z-20 rounded-lg">
        <div className="wrapper-close flex justify-between items-center">
          <p className="font-bold text-[18px]">Вход</p>
          <button onClick={() => dispatch(setSignModal(false))}>
            <Close
              sx={{ fontSize: "25px" }}
              className="text-[#73787d] cursor-pointer hover:text-[#ffbe1f]"
            />
          </button>
        </div>
        <form className="wrapper-list mt-[50px] flex flex-col items-center justify-center gap-[15px] text-center">
          <p className="font-bold text-[14px]">Введите номер телефона</p>
          <p className="text-[13px] font-[600] w-[80%]">
            Мы отправим вам СМС с кодом подтверждения
          </p>
          <input
            onChange={(event) => {
              if (/^\d*$/.test(event.target.value)) {
                setPhoneNumber(event.target.value);
              }
            }}
            value={phoneNumber}
            type="tel"
            placeholder="Номер телефона"
            className="border-[1px] rounded-lg p-[12.5px] placeholder:font-[600] w-full outline-none focus:border-[#ffbe1f]"
          />
          <button
            type="submit"
            className="bg-[#ffbe1f] rounded-lg w-full py-[15px] font-bold hover:bg-[#ffc01f80] mt-[40px]"
          >
            Получить код
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignModal;
