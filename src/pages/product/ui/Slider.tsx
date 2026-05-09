import { productImg1, productImg2, productImg3 } from "@shared/assets";
import { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const slides = [productImg1, productImg2, productImg3];
export function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onNextSlide = () => {
    if (activeIndex === slides.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prev) => prev + 1);
    }
  };
  const onPrevSlide = () => {
    if (activeIndex === 0) {
      setActiveIndex(slides.length - 1);
    } else {
      setActiveIndex((prev) => prev - 1);
    }
  };
  return (
    <div className="flex gap-6">
      <div className="flex items-center gap-6 w-full">
        <div className="flex flex-col gap-6 items-center w-max">
          <div className="flex justify-center items-center rotate-90 w-6 h-6 cursor-pointer">
            <MdArrowBackIos onClick={onPrevSlide} size={24} />
          </div>
          {slides.map((item, i) => (
            <div
              className={`flex shrink-0 justify-center items-center w-16 h-16 p-1 rounded-lg bg-white border-2 
              cursor-pointer ${activeIndex === i && "border-zinc-400"}`}
              key={i}
              onClick={() => setActiveIndex(i)}
            >
              <img src={item} alt="" className="h-full" />
            </div>
          ))}
          <div className="flex justify-center items-center rotate-90 w-6 h-6 cursor-pointer">
            <MdArrowForwardIos onClick={onNextSlide} size={24} />
          </div>
        </div>
        <div className="flex grow items-center">
          <div className="flex justify-center items-center w-6 h-6 cursor-pointer">
            <MdArrowBackIos onClick={onPrevSlide} size={24} />
          </div>
          <div className="flex items-center justify-center border-2 border-zinc-100 bg-white rounded-lg w-full aspect-[1.36/1]">
            <img src={slides[activeIndex]} alt="slide" className="h-full" />
          </div>
          <div className="flex justify-center items-center w-6 h-6 cursor-pointer">
            <MdArrowForwardIos onClick={onNextSlide} size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
