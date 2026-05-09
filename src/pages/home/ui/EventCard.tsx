type Props = {
  img: string;
  title: string;
  date: string;
  description: string;
};

export function EventCard({ img, title, date, description }: Props) {
  return (
    <div className="relative overflow-hidden rounded-lg aspect-[1.36/1] min-w-[290px]">
      <img
        src={img}
        alt="event img"
        className="relative z-0 w-full h-full"
      />
      <div className="absolute bottom-0 left-0  w-full py-3 px-2 ms:py-5 ms:px-8 bg-[#2A2A2A] bg-opacity-80 z-10">
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <div className="text-base md:text-lg font-bold text-[#F9A43F] ">
            {title}
          </div>
          <div className="font-[family-name:Open_sans_,sans-serif] text-white">
            {date}
          </div>
        </div>
        <div className="text-white mt-2 text-sm md:text-base">
          {description}
        </div>
      </div>
    </div>
  );
}
