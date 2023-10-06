import React from "react";
import Logo from "../../assets/svg-icons/logo.svg";
import LogoBlack from "../../assets/svg-icons/logo-black.svg";
import HeaderMenuIcon from "../../assets/svg-icons/header-menu.svg";
import { AI_RECONIZATION_URL, HOME_URL, useRouter } from "../../routes";
import { useNavigate } from "react-router";
import HeaderMenuDark from "../../assets/svg-icons/header-menu-icon-dark.svg";

const HeaderCustom = () => {
  const navigate = useNavigate();
  const router = useRouter();
  const { pathname } = router;
  const getHeaderClass = () => {
    if (pathname === AI_RECONIZATION_URL) {
      return "header-dark";
    } else {
      return "header-white";
    }
  };

  return (
    <div className={getHeaderClass()}>
      <div className="relative">
        <div className="container mx-auto grid grid-cols-3 justify-between items-center header-custom">
          <ul className="flex gap-12 items-center">
            <li>SHOP</li>
            <li>INSPIRATIONS</li>
            <li>BLOG</li>
          </ul>
          <div className="py-[21.5px] px-[73px] border-l border-r border-white max-w-[300px] mx-auto header-border-black">
            <img
              src={pathname === AI_RECONIZATION_URL ? LogoBlack : Logo}
              className="cursor-pointer max-w-[154px] w-full"
              onClick={() => navigate(HOME_URL)}
            />
          </div>
          <ul className="flex gap-12 justify-end items-center absolute right-[30px]">
            <li>SEARCH</li>
            <li>CART</li>
            <li>
              <button className="text-[#946039] py-2 px-[18px] bg-white text-sm header-login-btn-dark">
                LOGIN
              </button>
            </li>
            <li>
              <img
                src={
                  pathname === AI_RECONIZATION_URL
                    ? HeaderMenuDark
                    : HeaderMenuIcon
                }
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderCustom;
