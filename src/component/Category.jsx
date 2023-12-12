import React from "react";

const Category = (props) => {
  return (
    <div
      className={`${
        props.modal ? "block" : "hidden"
      } modal-category w-full h-[100vh] fixed bg-[#fff] mt-[24px]`}
    >
      <div className="wrapper flex items-start gap-[25px]">
        <div className="aside-left w-[30%] bg-[#ebebeb] h-[100vh]"></div>
        <div className="aside-right w-[70%]">
          <div className="wrapper-list flex justify-between items-start gap-y-[30px] gap-x-[50px] flex-wrap w-[60%] py-[30px]">
            <ul className="wrapper-category">
              <li>
                <p className="font-[700]">iPhone</p>
              </li>
            </ul>
            <ul className="wrapper-category">
              <li>
                <p className="font-[700]">Samsung</p>
              </li>
            </ul>
            <ul className="wrapper-category">
              <li>
                <p className="font-[700]">Xioami</p>
              </li>
            </ul>
            <ul className="wrapper-category">
              <li>
                <p className="font-[700]">Другие смартфоны</p>
              </li>
            </ul>
            <ul className="wrapper-category">
              <li>
                <p className="font-[700]">Планшеты</p>
              </li>
              <li>
                <p>Электронные книги</p>
              </li>
            </ul>
            <ul className="wrapper-category">
              <li>
                <p className="font-[700]">Кнопочные телефоны</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
