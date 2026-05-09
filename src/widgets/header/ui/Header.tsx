import { logo } from "@shared/assets";
import { URLS } from "@shared/consts";
import { SearchInput } from "@shared/ui";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { IoCartSharp, IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { HeaderMenu } from "./HeaderMenu";
import { useState } from "react";
import { useOverflowStore } from "@shared/lib";
import { useCartStore } from "@entities/cart";
export function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const setOverflow = useOverflowStore((state) => state.setIsOverflowActive);

  setOverflow(isMenuActive);

  const productsCount = useCartStore((state) => state.productsCount);
  return (
    <>
      <div className="bg-[#2A2A2A]">
        <div className="container mx-auto py-5 flex items-center justify-between sm:justify-normal gap-2">
          <div className="block sm:hidden cursor-pointer">
            {!isMenuActive ? (
              <IoMenu
                color="white"
                size={24}
                onClick={() => setIsMenuActive(true)}
              />
            ) : (
              <IoClose
                color="#F9A43F"
                size={24}
                onClick={() => setIsMenuActive(false)}
              />
            )}
          </div>
          <Link to={URLS.home}>
            <img src={logo} alt="logo" className="max-w-max h-7 sm:h-full" />
          </Link>
          <div className="hidden sm:block ml-8 w-full ">
            <SearchInput />
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <FaPhoneAlt color="white" size={24} />
            <span className="text-nowrap text-white text-base lg:text-xl">
              +1 (234) 569-78-00
            </span>
          </div>
          <div className="flex gap-2 items-center lg:ml-16 md:ml-6 ml-4">
            <FaUser size={20} color="white" />
            <Link to={URLS.cart} className="relative">
              <IoCartSharp size={24} color="white" />
              {!!productsCount && (
                <div className="absolute -top-1 -right-1 aspect-square flex justify-center items-center min-w-4 
                min-h-4 p-0.5 rounded-full bg-accent text-white text-xs">
                  {productsCount}
                </div>
              )}
            </Link>
          </div>
        </div>
      </div>
      <div className="container relative ">
        <div className="hidden sm:flex items-center justify-between py-5">
          <div className="flex items-center gap-2">
            <div className="link" onClick={() => setIsMenuActive(true)}>
              <IoMenu color="inherit" size={24} />
            </div>
            <div className="link">
              <Link to={URLS.catalog.default}>Catalog</Link>
            </div>
          </div>
          <Link to={`${URLS.catalog.default}/warhammer`} className="link">Wharhammer</Link>
          <Link to={`${URLS.catalog.default}/magic-the-cathering`} className="link">Magic:the Cathering</Link>
          <Link to={URLS.events} className="link">
            Events
          </Link>
          <Link to={URLS.about} className="link">
            About
          </Link>
          <Link to={URLS.contacts} className="link">
            Contacts
          </Link>
        </div>

        <HeaderMenu isActive={isMenuActive} setIsActive={setIsMenuActive} />
      </div>
    </>
  );
}
