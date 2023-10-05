import React from "react";
import Logo from "../../assets/svg-icons/logo.svg";
import HeaderMenuIcon from "../../assets/svg-icons/header-menu.svg";
import { HOME_URL } from "../../routes";
import { useNavigate } from "react-router";

const HeaderCustom = () => {
    const navigate = useNavigate();
  return (
    <div className="absolute left-1/2 -translate-x-1/2 w-full top-0 border-b border-white z-50">
      <div className="relative">
        <div className="container mx-auto grid grid-cols-3 justify-between items-center header-custom">
          <ul className="flex gap-12 items-center">
            <li>SHOP</li>
            <li>INSPIRATIONS</li>
            <li>BLOG</li>
          </ul>
          <div className="py-[21.5px] px-[73px] border-l border-r border-white max-w-[300px] mx-auto">
            <img src={Logo} className="cursor-pointer" onClick={()=>navigate(HOME_URL)}/>
          </div>
          <ul className="flex gap-12 justify-end items-center absolute right-[30px]">
            <li>SEARCH</li>
            <li>CART</li>
            <li>
              <button className="text-[#946039] py-2 px-[18px] bg-white text-sm">
                LOGIN
              </button>
            </li>
            <li><img src={HeaderMenuIcon}/></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderCustom;
