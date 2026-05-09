import { useClickOutside } from "@shared/lib";
import { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";

type Props = {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
};

const tabItems = [
  "Board games",
  "Warhammer 40000",
  "Magic: the Gathering",
  "Game accessories",
  "Paints",
  "Products for children",
  "Accessories for model making",
];
const tabContents = [
  [
    {
      name: "Alternative thumbnails",
      counts: 34,
    },
    {
      name: "Nercomunda",
      counts: 53,
    },
    {
      name: "Warcry",
      counts: 34,
    },
    {
      name: "Warhammer 40k",
      counts: 64,
    },
    {
      name: "Lord of the Rings",
      counts: 76,
    },
    {
      name: "Warhammer: Underworlds",
      counts: 45,
    },
    {
      name: "Age of Sigmar",
      counts: 11,
    },
    {
      name: "Blood Bowl",
      counts: 1,
    },
    {
      name: "Killtem",
      counts: 9,
    },
    {
      name: "Warcry",
      counts: 12,
    },
    {
      name: "Titanicus",
      counts: 32,
    },
  ],
  [
    {
      name: "Alternative thumbnails",
      counts: 34,
    },
    {
      name: "Nercomunda",
      counts: 53,
    },
    {
      name: "Warcry",
      counts: 34,
    },
    {
      name: "Warhammer 40k",
      counts: 64,
    },
    {
      name: "Lord of the Rings",
      counts: 76,
    },
    {
      name: "Warhammer: Underworlds",
      counts: 45,
    },
    {
      name: "Age of Sigmar",
      counts: 11,
    },
  ],
  [
    {
      name: "Alternative thumbnails",
      counts: 34,
    },
    {
      name: "Nercomunda",
      counts: 53,
    },
    {
      name: "Warcry",
      counts: 34,
    },
    {
      name: "Warhammer 40k",
      counts: 64,
    },
    {
      name: "Lord of the Rings",
      counts: 76,
    },
  ],
  [
    {
      name: "Alternative thumbnails",
      counts: 34,
    },
    {
      name: "Nercomunda",
      counts: 53,
    },
    {
      name: "Warcry",
      counts: 34,
    },
    {
      name: "Warhammer 40k",
      counts: 64,
    },
  ],
  [
    {
      name: "Alternative thumbnails",
      counts: 34,
    },
    {
      name: "Nercomunda",
      counts: 53,
    },
    {
      name: "Warcry",
      counts: 34,
    },
    {
      name: "Warhammer 40k",
      counts: 64,
    },
    {
      name: "Lord of the Rings",
      counts: 76,
    },
    {
      name: "Warhammer: Underworlds",
      counts: 45,
    },
    {
      name: "Age of Sigmar",
      counts: 11,
    },
    {
      name: "Blood Bowl",
      counts: 1,
    },
    {
      name: "Killtem",
      counts: 9,
    },
    {
      name: "Warcry",
      counts: 12,
    },
  ],
  [
    {
      name: "Alternative thumbnails",
      counts: 34,
    },
    {
      name: "Nercomunda",
      counts: 53,
    },
    {
      name: "Warcry",
      counts: 34,
    },
    {
      name: "Warhammer 40k",
      counts: 64,
    },
    {
      name: "Lord of the Rings",
      counts: 76,
    },
    {
      name: "Warhammer: Underworlds",
      counts: 45,
    },
    {
      name: "Age of Sigmar",
      counts: 11,
    },
  ],
  [
    {
      name: "Alternative thumbnails",
      counts: 34,
    },
    {
      name: "Nercomunda",
      counts: 53,
    },
    {
      name: "Warcry",
      counts: 34,
    },
    {
      name: "Warhammer 40k",
      counts: 64,
    },
    {
      name: "Lord of the Rings",
      counts: 76,
    },
    {
      name: "Warhammer: Underworlds",
      counts: 45,
    },
    {
      name: "Age of Sigmar",
      counts: 11,
    },
    {
      name: "Blood Bowl",
      counts: 1,
    },
    {
      name: "Killtem",
      counts: 9,
    },
  ],
];

export const HeaderMenu = ({ isActive, setIsActive }: Props) => {
  const activeClasses = !isActive ? "grid-rows-[0fr]" : "grid-rows-[1fr]";
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useClickOutside(containerRef, () => setIsActive(false));

  return (
    <div
      className={`absolute grid left-0 top-0 w-72 sm:w-full bg-white shadow-lg shadow-[#F9A43F] transition-[grid-template-rows] duration-500 z-20 ${activeClasses}`}
      ref={containerRef}
    >
      <div
        className={`overflow-hidden flex flex-col sm:flex-row sm:max-h-[375px]`}
      >
        <div className="w-full sm:w-1/3  min-w-[190px] py-3 sm:p-0 sm:border-r border-gray-300">
          <div className="flex flex-col h-full">
            <div className="hidden sm:flex items-center gap-2 py-3 px-4 border-b border-gray-300">
              <div
                className="cursor-pointer hover:text-[#F9A43F] transition-colors"
                onClick={() => setIsActive(false)}
              >
                <IoMdClose color="inherit" size={24} />
              </div>
              All categories
            </div>
            <div className="flex flex-col h-full overflow-y-auto">
              {tabItems.map((item, i) => (
                <div
                  key={i}
                  className={`group flex justify-between items-center gap-2 w-full px-4 py-2 ${activeIndex === i ? "bg-[#F9A43F]" : ""} hover:bg-[#F9A43F] transition-colors cursor-pointer`}
                  onClick={() => setActiveIndex(i)}
                >
                  <span>{item}</span>
                  <div
                    className={`hidden sm:block group-hover:text-[black]  text-gray-500 ${activeIndex === i ? "text-[black]" : "text-gray-500"}`}
                  >
                    <MdArrowForwardIos color="inherit" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden sm:block w-full overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-8 py-4">
            {tabContents[activeIndex].map((item, i) => (
              <div key={i} className="link">
                {item.name}({item.counts})
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col py-4 sm:hidden w-full border-t border-gray-400">
          <div
            className={`w-full px-4 py-2 hover:bg-[#F9A43F] transition-colors cursor-pointer`}
          >
            Events
          </div>
          <div
            className={`w-full px-4 py-2 hover:bg-[#F9A43F] transition-colors cursor-pointer`}
          >
            Blog
          </div>
          <div
            className={`w-full px-4 py-2 hover:bg-[#F9A43F] transition-colors cursor-pointer`}
          >
            About
          </div>
          <div
            className={`w-full px-4 py-2 hover:bg-[#F9A43F] transition-colors cursor-pointer`}
          >
            Contacts
          </div>
        </div>
      </div>
    </div>
  );
};
