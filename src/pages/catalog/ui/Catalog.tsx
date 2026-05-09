import { Breadcrumbs } from "@shared/ui";
import { Sidebar } from "./Sidebar";
import { cards } from "../model/consts";
import { Pagination } from "@widgets/pagination";
import { useEffect, useMemo, useState } from "react";
import { ProductCard } from "@entities/productCard";
import { useFiltersStore } from "../model/stores";
import { MdFilterAlt } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";

const MAX_CARDS = 30;

export function Catalog() {
  const [activePage, setActivePage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const { isWithDiscount, playersCount, priceRange } = useFiltersStore();

  const filteredCards = useMemo(
    () =>
      cards.filter((c) => {
        const players = c.players.split("-");
        if (isWithDiscount) {
          return !!c.discountPercent;
        }
        if (priceRange[0] > c.price || priceRange[1] < c.price) return false;
        if (+players[0] < playersCount[0] || +players[1] > playersCount[1])
          return false;

        return true;
      }),
    [isWithDiscount, playersCount, priceRange],
  );

  useEffect(() => {
    setActivePage(1);
  }, [filteredCards]);

  const currentCards = filteredCards.slice(activePage, activePage + MAX_CARDS);

  const MAX_PAGES = Math.floor(filteredCards.length / MAX_CARDS);
  return (
    <div className="container">
      <div className="hidden md:block">
        <Breadcrumbs />
      </div>
      <div className="title flex items-center justify-between">
        <span>Catalog</span>
        <div
          className={`flex items-center gap-2 cursor-pointer md:hidden hover:text-[#F9A43F] ${!isFilterOpen ? "max-md:flex" : "hidden"}`}
          onClick={() => setIsFilterOpen(true)}
        >
          <MdFilterAlt size={20} />
          <span className="text-base font-normal underline">Filter</span>
        </div>
      </div>
      <div className="md:flex gap-4">
        <div
          className={`${isFilterOpen ? "max-md:flex" : "max-md:hidden"} hidden mt-4 items-center`}
        >
          <div className="ml-4 cursor-pointer" onClick={() => setIsFilterOpen(false)}>
            <BsArrowLeft size={24}/>
          </div>
          <div className="text-center flex-grow">Filter</div>
        </div>
        <div
          className={`w-11/12 md:max-w-[260px] mx-auto mt-4 ${isFilterOpen ? "max-md:block" : "max-md:hidden"} md:block`}
        >
          <Sidebar />
        </div>
        <div
          className={`mt-4 flex-grow flex flex-col justify-center ${!isFilterOpen ? "max-md:block" : "max-md:hidden"}`}
        >
          <div className="grid max-sm:max-w-[300px] max-sm:mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  lg:justify-between gap-4">
            {currentCards.map((item) => (
              <ProductCard {...item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`mt-12 flex justify-center ${!isFilterOpen ? "max-md:block" : "max-md:hidden"}`}
      >
        <Pagination
          totalPages={MAX_PAGES}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </div>
    </div>
  );
}
