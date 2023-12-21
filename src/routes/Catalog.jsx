import React, { useEffect } from "react";

// API QUERY
import { getCategories, getProducts } from "../api/Home/home";
// Redux Hook
import { useDispatch, useSelector } from "react-redux";
// Reducers State Functions

const Catalog = () => {
  const dispatch = useDispatch();
  // Reducers
  const dataGetCategories = useSelector(
    (store) => store.home.dataGetCategories
  );
  console.log(dataGetCategories);

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
                <img src="src/assets/category-image-2.jpg" alt="" />
              </div>
              <div className="wrapper-text flex flex-col gap-[10px]">
                <p className="font-[600] hover:text-[#ffbe1f] cursor-pointer">
                  {e.categoryName}
                </p>
                <div className="wrapper-list  flex flex-wrap gap-[5px]">
                  {e.subCategories.map((el) => {
                    return (
                      <p className="text-[13px] font-[600] text-[#73787d] hover:text-[#ffbe1f] cursor-pointer">
                        {el.subCategoryName + ","}
                      </p>
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
