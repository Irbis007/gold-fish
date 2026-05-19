import { Breadcrumbs, NavLink } from "@shared/ui";
import { IoMdClose } from "react-icons/io";
import { URLS } from "@shared/consts";
import { useRef } from "react";
import { useClickOutside } from "@shared/lib";
import { useMenuStore } from "../model/stores";
import { Outlet } from "react-router-dom";

const menuItems = [
  {
    link: URLS.account.profile,
    title: "Profile",
  },
  {
    link: URLS.account.orders,
    title: "Orders",
  },
  {
    link: URLS.account.events,
    title: "Events",
  },
  {
    link: URLS.account.settings,
    title: "Settings",
  },
];

export function AccountWrapper() {
  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);
  const setIsMenuOpen = useMenuStore((state) => state.setIsMenuOpen);
  const menuRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(menuRef, () => setIsMenuOpen(false));

  return (
    <div className="container">
      <Breadcrumbs />
      <div className="title">Personal account</div>
      <div className="relative flex gap-7 mt-5">
        <div
          className={`absolute md:static top-6 right-2 z-20 md:flex flex-col gap-2 bg-white shadow-lg 
            h-fit rounded-lg pt-7 pr-24 pb-12 pl-10 ${isMenuOpen ? "flex" : "hidden"}`}
          ref={menuRef}
        >
          {menuItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.link}
              onClick={() => setIsMenuOpen(false)}
              className="bold text-1.5xl"
            >
              {item.title}
            </NavLink>
          ))}
          <div
            className="md:hidden absolute top-1 right-1 text-accent cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <IoMdClose size={24} />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
