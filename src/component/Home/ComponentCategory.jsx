import React, { useEffect, useState } from "react";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../api/Home/home";
import { Link } from "react-router-dom";

const ComponentCategory = (props) => {
  const [hoverCategory, setHoverCategory] = useState(0);

  const dispatch = useDispatch();
  // Reducers
  const dataGetCategories = useSelector(
    (store) => store.home.dataGetCategories
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div
      className={`${
        props.modal ? "block" : "hidden"
      } modal-category w-full h-[100vh] fixed bg-[#00000071] mt-[24px]`}
    >
      <div className="wrapper flex items-start gap-[25px] bg-[#fff]">
        <div className="aside-left overflow-hidden py-[40px] flex justify-end items-center w-[38%] bg-[#f3f4f5] h-[80vh]">
          <ul className="category-scrollbar w-[50%] overflow-auto h-[100%]">
            {dataGetCategories.map((e, index) => {
              if (index !== 0) {
                return (
                  <li
                    onMouseEnter={() => setHoverCategory(e.id)}
                    key={e.id}
                    className="hover:bg-[#ffffff] py-[12.5px] px-[17.5px] rounded-md rounded-tr-none rounded-br-none cursor-pointer"
                  >
                    <a className="text-[14px] font-[600]">{e.categoryName}</a>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <div className="aside-right w-[70%]">
          <div className="wrapper-list flex justify-between items-start gap-y-[30px] gap-x-[50px] flex-wrap w-[60%] py-[30px]">
            {dataGetCategories.map((e) => {
              return e.subCategories.map((e2) => {
                if (e.id === hoverCategory) {
                  return (
                    <ul key={e2.id} className="wrapper-category">
                      <Link to={`category/${e2.id}`}>
                        <li onClick={() => props.set(false)}>
                          <p className="font-[700] text-[#000] hover:text-[#ffbe1f] cursor-pointer">
                            {`${e2.subCategoryName} (${e2.id})`}
                          </p>
                        </li>
                      </Link>
                    </ul>
                  );
                }
              });
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentCategory;
