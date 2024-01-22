import React, { useEffect } from "react";

// API QUERY
import { getCategories, getProducts } from "../api/Home/home";
// Redux Hook
import { useDispatch, useSelector } from "react-redux";
// Reducers State Functions

import { Link } from "react-router-dom";

const Catalog = () => {
  const dispatch = useDispatch();
  // Reducers
  const dataGetCategories = useSelector(
    (store) => store.home.dataGetCategories
  );

  // useEffect
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <main className="max-w-[1192px] mx-auto p-[32px]">
      <h1 className="text-[32px] font-[800]">Каталог товаров</h1>
      <div className="wrapper-items mt-[25px] gap-[25px] flex justify-start items-start flex-wrap">
        {dataGetCategories.map((e) => {
          return (
            <div
              key={e.id}
              className="item w-[18%] flex flex-col items-start justify-center gap-[20px]"
            >
              <div className="wrapper-image">
                <img
                  src={`${import.meta.env.VITE_APP_FILES_URL}${
                    e.categoryImage
                  }`}
                  alt=""
                />
              </div>
              <div className="wrapper-text flex flex-col gap-[10px]">
                <Link to="/basic/category/:category">
                  <p className="font-[600] hover:text-[#ffbe1f] cursor-pointer">
                    {e.categoryName}
                  </p>
                </Link>
                <div className="wrapper-list  flex flex-wrap gap-[5px]">
                  {e.subCategories.map((el) => {
                    return (
                      <Link to="/basic/category/:category">
                        <p
                          key={el.id}
                          className="text-[13px] font-[600] text-[#73787d] hover:text-[#ffbe1f] cursor-pointer"
                        >
                          {el.subCategoryName + ","}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Catalog;
