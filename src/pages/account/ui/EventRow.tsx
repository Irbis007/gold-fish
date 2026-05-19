import { Button } from "@shared/ui";
import { useNavigate } from "react-router-dom";

type Props = {
  img: string;
  title: string;
  date: string;
  link: string;
};

export function EventRow({ img, title, date, link }: Props) {
  const navigate = useNavigate();
  return (
    <div className={"flex gap-8 cursor-pointer md:cursor-auto md:pointer-events-none"} onClick={() => navigate(link)}>
      <img src={img} alt="" className="w-16 h-16 rounded-lg object-cover" />
      <div className="grow font-bold">
        <div className="text-1.5xl">{title}</div>
        <div>{date}</div>
      </div>
      <Button title="Learn more" classes="hidden md:block pointer-events-auto" onClick={() => navigate(link)} outlined />
    </div>
  );
}
