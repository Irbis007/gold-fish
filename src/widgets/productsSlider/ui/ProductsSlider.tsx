import { ProductCard, type ProductItem } from "@entities/product";
import useEmblaCarousel from "embla-carousel-react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

type Props = {
  products: ProductItem[];
};

export function ProductsSlider({ products }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div className="relative">
      <div className="" ref={emblaRef}>
        <div className="flex">
          {products.map((product, i) => (
            <div className="ml-5" key={i}>
              <ProductCard {...product} />
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
