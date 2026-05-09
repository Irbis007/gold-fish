import { logo } from "@shared/assets";
import { URLS } from "@shared/consts";
import { Button } from "@shared/ui";
import { FaInstagram } from "react-icons/fa";
import { LiaFacebookSquare } from "react-icons/lia";
import { RiVkLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="bg-[#2a2a2a] w-full mt-20 pt-14 pb-20 text-white">
      <div className="container grid justify-center md:justify-between text-center md:text-start ">
        <img
          src={logo}
          alt="logo img"
          className="mx-auto md:mx-0 w-32 md:w-40 md:col-start-1"
        />
        <div className="row-start-4 md:row-start-2 col-start-1 mt-6 md:mt-0">
          Moscow, Taganskaya metro <br />
          station Maly Drovyanoy Lane 6
        </div>
        <div className="md:row-start-1 md:row-end-3 md:col-start-2 flex flex-col gap-2 mt-8 md:mt-0">
          <div className="text-xl font-bold">Catalog</div>
          <div className="flex-col gap-1 hidden md:flex">
            <div className="link">Warhammer 40000</div>
            <div className="link">Board games</div>
            <div className="link">Magic: the Gathering</div>
            <div className="link">Game accessories</div>
            <div className="link">Paints</div>
            <div className="link">Accessories for modeling</div>
          </div>
        </div>
        <div className="md:row-start-1 md:row-end-3 md:col-start-3 flex flex-col gap-2 mt-2 md:mt-0">
          <div className="link font-bold text-xl">Club Rules</div>
          <Link to={URLS.events} className="link font-bold text-xl">Events</Link>
          <Link to={URLS.about} className="link font-bold text-xl">About</Link>
          <Link to={URLS.contacts} className="link font-bold text-xl">Contacts</Link>
          <Link to={URLS.blog} className="link font-bold text-xl">Blog</Link>
        </div>
        <div className="md:row-start-1 md:row-end-3 md:col-start-4 hidden md:flex flex-col gap-2">
          <div className="link font-bold text-xl">Payment and delivery</div>
          <div className="link font-bold text-xl">Warranty and returns</div>
        </div>
        <div className="md:row-start-1 md:row-end-3 md:col-start-5 flex flex-col items-center md:items-end">
          <div className="hidden md:block">
            <Button title="Request a call" outlined />
          </div>
          <div className="mt-6">
            <div className="font-bold">1 (234) 567 89 00</div>
            <div className="font-bold">some@mail.com</div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <FaInstagram size={28} color="#F9A43F" />
            <RiVkLine size={32} color="#F9A43F" />
            <LiaFacebookSquare size={32} color="#F9A43F" />
          </div>
        </div>
      </div>
    </div>
  );
}
