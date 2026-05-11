import { useState, type ReactNode } from "react";
import { IoIosArrowDown } from "react-icons/io";

type Props = {
  title: ReactNode;
  content: ReactNode;
  absoluteContent?: boolean;
  containerClasses?: string;
  customArrow?: ReactNode;
  titleClasses?: string;
  contentClasses?: string;
  isOpened?: true
};
export function Dropdown({
  title,
  content,
  absoluteContent,
  containerClasses,
  titleClasses,
  isOpened
}: Props) {
  const [open, setOpen] = useState(!!isOpened);
  return (
    <div className={`relative ${containerClasses}`}>
      <div
        className={`select-none cursor-pointer flex items-center gap-4 text-xl font-bold ${titleClasses}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        {title}
        <div
          className={`mt-1 transition-[transform] duration-300 ${open ? "rotate-180" : "rotate-0"}`}
        >
          <IoIosArrowDown size={24} />
        </div>
      </div>
      <div
        className={`${absoluteContent && "absolute"} grid transition-all duration-500 ${!open ? "grid-rows-[0fr]" : "grid-rows-[1fr] pt-4"}`}
      >
        <div className={`min-h-0 overflow-hidden`}>{content}</div>
      </div>
    </div>
  );
}
