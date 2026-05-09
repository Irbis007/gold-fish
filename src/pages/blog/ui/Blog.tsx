import { Breadcrumbs, Button, Radio } from "@shared/ui";
import { Pagination } from "@widgets/pagination";
import { useRef, useState } from "react";
import { useBlogThemes } from "../model/stores";
import { blogs } from "../model/consts";
import type { Blog } from "../model/types";
import { MdFilterAlt } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useClickOutside } from "@shared/lib";

export function Blog() {
  const [activePage, setActivePage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filterRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(filterRef, () => setIsFilterOpen(false));

  const BLOGS_TO_SHOW = 6 * (activePage - 1);
  const shownBlogs = blogs.slice(BLOGS_TO_SHOW, BLOGS_TO_SHOW + 6);
  const totalPages = Math.ceil(blogs.length / 6);

  const themes = useBlogThemes((state) => state.themes);
  const changeTheme = useBlogThemes((state) => state.onChange);
  return (
    <div className="container">
      <Breadcrumbs />

      <div className="flex justify-between items-center">
        <div className="title mt-2">Blog</div>
        <div className="hover:text-accent cursor-pointer md:hidden">
          <MdFilterAlt size={24} onClick={() => setIsFilterOpen(true)} />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex gap-4 relative">
          <BlogItem {...shownBlogs[0]} size="big" />
          <div
            className={`shadow-lg py-7 px-6 shrink-0 bg-white rounded-lg right-1 -top-10 max-md:absolute z-10 ${isFilterOpen ? "block" : "max-md:hidden"}`}
            ref={filterRef}
          >
            <div className="absolute top-2 right-2 text-accent cursor-pointer md:hidden">
              <IoMdClose size={24} onClick={() => setIsFilterOpen(false)} />
            </div>
            <div className="title text-xl">Article Topics</div>
            <div className="flex flex-col gap-2 mt-4">
              {themes.map((item, i) => (
                <Radio
                  key={i}
                  isSelected={item.isSelected}
                  onChange={(e) => changeTheme(i, e)}
                  label={item.title}
                  group="blog-themes"
                />
              ))}
              <Button
                title="Apply"
                classes="mt-4 md:hidden"
                onClick={() => setIsFilterOpen(false)}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-4 max-md:flex-col">
          <BlogItem {...shownBlogs[1]} size="small" />
          <BlogItem {...shownBlogs[2]} size="small" />
        </div>
        <div className="flex gap-4">
          <BlogItem {...shownBlogs[3]} size="big" />
        </div>
        <div className="flex gap-4 max-md:flex-col">
          <BlogItem {...shownBlogs[4]} size="small" />
          <BlogItem {...shownBlogs[5]} size="small" />
        </div>
      </div>
      <div className="mt-4">
        <Pagination
          totalPages={totalPages}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </div>
    </div>
  );
}

const BlogItem = ({
  title,
  description,
  img,
  size,
}: Blog & { size: "small" | "big" }) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg w-full cursor-pointer max-md:h-[340px] ${size === "big" ? "md:h-[450px]" : "md:h-[350px]"}`}
    >
      <img
        src={img}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div
        className={`absolute w-full bottom-0 left-0 bg-accent-black bg-opacity-70 px-2 py-4 ${size === "big" ? "md:py-5 md:px-10" : "md:py-5 md:px-6"}`}
      >
        <div className="text-accent">{title}</div>
        <div className="text-white ">{description}</div>
      </div>
    </div>
  );
};
