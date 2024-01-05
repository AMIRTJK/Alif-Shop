import { React, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";

// ICONS =============
import LogoHeader from "../icons/Layout/LogoHeader";
import Menu from "../icons/Layout/Menu";
import CloseMenu from "../icons/Layout/CloseMenu";
import Search from "../icons/Layout/Search";
import Location from "../icons/Layout/Location";
import Sign from "../icons/Layout/Sign";
import Basket from "../icons/Layout/Basket";

// COMPONENTS ================
import Category from "../component/Home/Category";

// IMAGE
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import telegram from "../assets/telegram.svg";

// Modal Location
import LocationModal from "../component/Home/LocationModal";

// Modal Sign
import SignModal from "../component/Home/SignModal";

// Import Reducers
import { setLocationModal, setSignModal } from "../reducers/Home/home";

const Root = () => {
  const dispatch = useDispatch();
  const [menu, setMenu] = useState(true);
  const [showCategory, setShowCategory] = useState(false);
  return (
    <>
      <main>
        <div className="main-header bg-[#fff] w-full h-[30px] mb-[100px]">
          <header className="fixed bg-[#fff] z-40 w-full py-[24px] border-b-[1px] mb-[24px]">
            <nav className="menu-category max-w-[1192px] px-[32px] gap-[10px] mx-auto flex items-center justify-between">
              <Link to="/basic">
                <LogoHeader />
              </Link>
              <button
                onClick={() => {
                  setMenu(!menu);
                  setShowCategory(!showCategory);
                }}
                className="flex items-center gap-[2.5px] bg-[#ffbe1f] py-[12px] px-[16px] rounded-lg hover:bg-[#ffc01f8a] transition-all duration-100"
              >
                <Menu menu={menu} />
                <CloseMenu menu={menu} />
                <p className="text-[14px] font-[600]">Каталог товаров</p>
              </button>
              <form className="w-[50%] hidden md:flex">
                <input
                  type="text"
                  placeholder="название товара или артикул"
                  className="w-full border-[2px] border-r-[0px] border-gray-300 py-[10px] px-[16px] rounded-md rounded-br-none rounded-tr-none focus:outline-none focus:border-[#ffbe1f] text-[15px] font-[600]"
                />
                <button className="bg-[#ffbe1f] rounded-md rounded-bl-none rounded-tl-none px-[16px]">
                  <Search />
                </button>
              </form>
              <div className="panel-nav items-center justify-between gap-[15px] hidden md:flex">
                <button
                  onClick={() => {
                    dispatch(setLocationModal(true));
                  }}
                  className="item flex flex-col items-center gap-[2px]"
                >
                  <Location />
                  <p className="text-[12px] text-[#73787d] font-[600] hover:text-[#ffbe1f]">
                    Душанбе
                  </p>
                </button>
                {/* Modal Location */}
                <LocationModal />
                <button
                  onClick={() => {
                    dispatch(setSignModal(true));
                  }}
                  className="item flex flex-col items-center gap-[2px]"
                >
                  <Sign />
                  <p className="text-[12px] text-[#73787d] font-[600] hover:text-[#ffbe1f]">
                    Войти
                  </p>
                </button>
                {/* Modal Sign */}
                <SignModal />
                <Link to="cart">
                  <button className="item flex flex-col items-center gap-[2px]">
                    <Basket />
                    <p className="text-[12px] text-[#73787d] font-[600] hover:text-[#ffbe1f]">
                      Корзина
                    </p>
                  </button>
                </Link>
              </div>
            </nav>
            <Category modal={showCategory} />
          </header>
        </div>
        <Outlet />
        <footer className="bg-[#222222] py-[50px]">
          <div className="footer-top max-w-[1192px] border-b-[1px] py-[25px] border-[#f3f4f522] mx-auto px-[32px] flex flex-wrap md:flex-nowrap justify-between items-start text-[#fff]">
            <ul className="flex-col flex gap-[20px]">
              <li>
                <p className="text-[#9ba1a7] text-[14px] font-[500]">
                  Телефоны справочной службы
                </p>
              </li>
              <li>
                <a href="tel:900" className="font-[700] hover:text-[#ffbe1f]">
                  900
                </a>
              </li>
              <li>
                <a
                  href="tel:+992 48-888-1111"
                  className="font-[700] hover:text-[#ffbe1f]"
                >
                  +992 48-888-1111
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/alifshopbot"
                  className="font-[700] hover:text-[#ffbe1f]"
                >
                  @alifshop_tj
                </a>
              </li>
            </ul>
            <ul className="flex-col flex gap-[20px]">
              <Link to="catalog">
                <li>
                  <p className="font-[500] hover:text-[#ffbe1f]">
                    Каталог товаров
                  </p>
                </li>
              </Link>
              <Link to="catalog">
                <li>
                  <p className="font-[500] hover:text-[#ffbe1f]">Смартфоны</p>
                </li>
              </Link>
              <Link to="catalog">
                <li>
                  <p className="font-[500] hover:text-[#ffbe1f]">Телевизоры</p>
                </li>
              </Link>
            </ul>
            <ul className="flex-col flex gap-[20px]">
              <Link to="catalog">
                <li>
                  <p className="font-[500] hover:text-[#ffbe1f]">
                    Стиральные машины
                  </p>
                </li>
              </Link>
              <Link to="catalog">
                <li>
                  <p className="font-[500] hover:text-[#ffbe1f]">
                    Кондиционеры
                  </p>
                </li>
              </Link>
            </ul>
            <ul className="flex-col flex gap-[20px]">
              <li>
                <p className="text-[#9ba1a7] text-[14px] font-[500]">
                  Мы в соцмедиа
                </p>
              </li>
              <li className="flex gap-[20px] items-start">
                <a href="">
                  <img
                    src={facebook}
                    alt="Facebook"
                    className="hover:scale-110 transition-all duration-200"
                  />
                </a>
                <a href="">
                  <img
                    src={instagram}
                    alt="Instagram"
                    className="hover:scale-110 transition-all duration-200"
                  />
                </a>
                <a href="">
                  <img
                    src={telegram}
                    alt="Telegram"
                    className="hover:scale-110 transition-all duration-200"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-bottom max-w-[1192px] py-[25px] m-auto px-[32px] text-[#fff] flex justify-between items-start">
            <p className="text-[#9ba1a7] text-[14px] font-[500]">
              © 2023 ОАО «Алиф Банк». г. Душанбе, 101 мкр-н, ул. Багаутдинова, 9
            </p>
            <a href="#" className="hover:text-[#ffbe1f] font-[500]">
              support@alif.tj
            </a>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Root;
