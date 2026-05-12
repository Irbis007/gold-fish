import { URLS } from "@shared/consts";
import { useNavigate } from "react-router-dom";

type Props = {
  img: string;
  title: string;
  description: string;
};

export function BlogCard({ img, title, description }: Props) {
  const navigate = useNavigate();
  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-lg w-full min-w-[250px]"
      onClick={() => navigate(URLS.blog.id, {})}
    >
      <img
        src={img}
        alt="event img"
        className="group-hover:scale-125 transition-transform duration-1000 w-full h-full"
      />
      <div className="absolute bottom-0 left-0 w-full py-5 px-4 bg-[#2A2A2A] bg-opacity-80 z-10">
        <div className="group-hover:text-accent text-xl font-bold text-white ">
          {title}
        </div>
        <div className="text-white mt-2">{description}</div>
      </div>
    </div>
  );
}
