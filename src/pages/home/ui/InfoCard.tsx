type Props = {
  img: string,
  title: string
  description: string
}

export function InfoCard({img, title, description}: Props) {
  return (
    <div className="relative overflow-hidden rounded-lg min-w-[250px]">
      <img src={img} alt="event img" className="relative z-0 w-full h-full" />
      <div className="absolute bottom-0 left-0 w-full py-5 px-4 bg-[#2A2A2A] bg-opacity-80 z-10">
        <div className="text-xl font-bold text-white ">
          {title}
        </div>
        <div className="text-white mt-2">
          {description}
        </div>
      </div>
    </div>
  );
}
