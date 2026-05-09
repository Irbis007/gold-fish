import { Breadcrumbs, Button, Calendar, Radio } from "@shared/ui";
import dayjs from "dayjs";
import { useMemo, useRef, useState } from "react";
import { events, labels } from "../consts";
import type { Event } from "../model/types";
import { Pagination } from "@widgets/pagination";
import { IoIosArrowRoundForward, IoIosClose } from "react-icons/io";
import { MdFilterAlt } from "react-icons/md";
import { useClickOutside } from "@shared/lib";

export function Events() {
  const currentDate = new Date();
  const maxDate = Math.max(...events.map((user) => user.date.getTime()));
  const minDate = Math.min(...events.map((user) => user.date.getTime()));

  const [activeDate, setActiveDate] = useState<Date | null>(currentDate);
  const [activeLabel, setActiveLabel] = useState<(typeof labels)[number]>(
    labels[0],
  );
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [curPage, setCurPage] = useState(1);

  const filterRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(filterRef, () => setIsFilterOpen(false));

  const curEvents = useMemo(
    () =>
      events
        .filter(
          (e) =>
            dayjs(e.date).isSame(activeDate, "date") || activeDate === null,
        )
        .filter((e) => e.label === activeLabel || activeLabel === "All"),
    [activeDate, activeLabel],
  );

  const totalPages = Math.ceil(curEvents.length / 8);

  return (
    <div className="container">
      <Breadcrumbs />
      <div className="flex justify-between">
        <span className="title">Events</span>
        <div className="hidden max-md:block cursor-pointer hover:text-accent">
          <MdFilterAlt size={24} onClick={() => setIsFilterOpen(true)} />
        </div>
      </div>
      <div className="relative flex gap-4">
        <div className="grid grid-cols-1 max-md:w-full md:grid-cols-2 gap-4">
          {curEvents.slice(curPage - 1, curPage * 8).map((event, i) => (
            <EventItem key={i} {...event} />
          ))}
        </div>
        <div
          ref={filterRef}
          className={`relative md:flex flex-col md:gap-7 max-md:absolute max-md:-top-10 max-md:right-2 z-10 max-md:shadow-xl max-md:pb-4 bg-white rounded-lg ${isFilterOpen ? "flex" : "hidden"}`}
        >
          <div className=" absolute text-accent md:hidden top-0 right-1 cursor-pointer">
            <IoIosClose size={28} onClick={() => setIsFilterOpen(false)} />
          </div>
          <div className="md:shadow-xl pt-6 px-8 pb-8 rounded-lg">
            <div className="w-44">
              <Calendar
                value={activeDate}
                onChange={(val) => {
                  if (Array.isArray(val)) return;
                  if (dayjs(val).isSame(activeDate, "date")) {
                    setActiveDate(null);
                  } else {
                    setActiveDate(val);
                  }
                }}
                maxDate={new Date(maxDate)}
                minDate={new Date(minDate)}
              />
            </div>
          </div>
          <div className="md:shadow-xl md:pt-7 px-6 pb-8 rounded-lg">
            <div className="title text-xl max-md:text-center">Topics</div>
            <div className="flex flex-col gap-2 mt-4">
              {labels.map((label, i) => (
                <Radio
                  labelClasses={`${label === activeLabel && "font-bold text-accent"}`}
                  key={i}
                  group="events-topics"
                  label={label}
                  isSelected={activeLabel === label}
                  onChange={() => setActiveLabel(label)}
                />
              ))}
            </div>
          </div>
          <Button classes="md:hidden w-5/6 mx-auto" title="Apply" />
        </div>
      </div>
      <div className="mt-8">
        <Pagination
          activePage={curPage}
          setActivePage={setCurPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}

const EventItem = ({ title, description, img, price, date }: Event) => {
  const textDate = dayjs(date).format("DD.MM.YYYY HH:MM");
  const shortDescription = description.slice(0, 80) + "...";
  return (
    <div
      className={`group relative overflow-hidden rounded-lg w-full cursor-pointer h-[350px] max-md:h-[340px]`}
    >
      <img
        src={img}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div
        className={`absolute w-full transition-all h-1/3 group-hover:h-full bottom-0 left-0 bg-accent-black 
          bg-opacity-70 px-2 py-4 group-hover:py-8`}
      >
        <div className="group flex justify-between ">
          <div>
            <div className="text-accent lg:text-xl font-bold">{title}</div>
            <div className="text-white underline text-sm lg:text-base">
              {textDate}
            </div>
          </div>

          <div className="text-white text-xl font-bold">${price}</div>
        </div>
        <div className="flex gap-2 items-end">
          <div className="text-white overflow-hidden w-full">
            <span className="block group-hover:hidden truncate">
              {shortDescription}
            </span>
            <span className="hidden group-hover:block">{description}</span>
          </div>
          <button
            className="flex justify-center items-center shrink-0 border border-white rounded-3xl w-14 h-7
          text-white group-hover:text-accent group-hover:border-accent"
          >
            <IoIosArrowRoundForward size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
