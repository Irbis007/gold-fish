import { slide1, slide2, slide3 } from "@shared/assets";
import { Button } from "@shared/ui/Button";
import useEmblaCarousel from "embla-carousel-react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const sliders = [
  {
    title: "Board game wargame",
    subtitle: "Warhammer games",
    image: slide1,
  },
  {
    title: "The most popular card game",
    subtitle: "Magic: the Gathering",
    image: slide2,
  },
  {
    title: "Try games of different genres",
    subtitle: "The entire catalog",
    image: slide3,
  },
  {
    title: "Board game wargame",
    subtitle: "Warhammer games",
    image: slide1,
  },
  {
    title: "The most popular card game",
    subtitle: "Magic: the Gathering",
    image: slide2,
  },
  {
    title: "Try games of different genres",
    subtitle: "The entire catalog",
    image: slide3,
  },
];
export default function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {sliders.map((slide, i) => (
            <div
              key={i}
              className={`relative flex shrink-0 items-center mr-4 justify-center text-white`}
            >
              <div className="absolute flex items-end justify-between max-w-[100vw] w-full h-full px-4 py-6">
                <div className="">
                  <div className="md:text-sm text-xs">{slide.subtitle}</div>
                  <div className="md:text-3xl text-xl font-bold">
                    {slide.subtitle}
                  </div>
                </div>

                <Button title="Learn more" />
              </div>
              <img src={slide.image} alt="slide img" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-2 right-2 -translate-y-1/2 flex justify-between gap-3">
        <button
          className="flex justify-center items-center bg-gray-600 w-6 h-6 pl-1.5 rounded-full"
          onClick={() => emblaApi?.scrollPrev()}
        >
          <MdArrowBackIos color="white" size={16} />
        </button>
        <button
          className="flex justify-center items-center bg-gray-600 w-6 h-6  rounded-full"
          onClick={() => emblaApi?.scrollNext()}
        >
          <MdArrowForwardIos color="white" />
        </button>
      </div>
    </div>
  );
}
