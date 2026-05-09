import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  url: string;
  index: number;
  link: string
};

export function CatalogCard({ title, index, url, link }: Props) {
  const navigation = useNavigate()
  return (
    <div
      className={`group relative rounded-lg cursor-pointer overflow-hidden group ${index === 0 ? "row-start-1 row-end-3 sm:col-start-1 sm:col-end-3 md:col-start-1 md:col-end-2" : ""} w-full group-hover`}
      onClick={() => navigation(link)}
    >
      <img
        src={url}
        alt="catalog img"
        className="group-hover:scale-125 transition-transform duration-1000 relative w-full h-full z-0 object-cover"
      />
      <div
        className={`absolute w-full bottom-0 bg-[#2A2A2A] group-hover:text-[#F9A43F] text-white z-20 py-3 ${index === 0 ? "px-8" : "px-4"}`}
      >
        {title}
      </div>
    </div>
  );
}
