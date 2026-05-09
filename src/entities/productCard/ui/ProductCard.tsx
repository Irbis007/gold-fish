import { Button } from "@shared/ui";
import type { ProductItem } from "../model/types";
import { FaUsers } from "react-icons/fa";
import { RiTimerLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { useCartStore } from "@entities/cart";

export function ProductCard({ ...product }: ProductItem) {
  const addToCart = useCartStore((state) => state.onAddItem);

  const {
    id,
    image,
    title,
    players,
    playingTime,
    price,
    discountPercent,
    minAge,
  } = product;
  return (
    <div className="relative flex flex-col shadow-[5px_6px_16px] shadow-slate-300 min-w-[225px] min-h-[410px] py-4 px-2 rounded-lg">
      <img src={image} alt={`product-${id}`} className="mx-auto" />
      <div className="flex-grow flex flex-col justify-end">
        <div className="flex gap-5 justify-center mt-1">
          <div className="flex items-center gap-2 text-xs">
            <FaUsers size={16} />
            {players}
          </div>
          <div className="flex items-center gap-2 text-xs">
            <RiTimerLine size={16} />
            {playingTime}
          </div>
          <div className="flex items-center gap-2 text-xs">{minAge}+</div>
        </div>
        <div className="text-center font-bold text-base mt-2">{title}</div>
        <div className="flex justify-center items-center gap-4 text-center mt-2">
          {!!discountPercent && (
            <span className="relative block w-fit text-lg before:block before:w-[120%] before:h-0.5 before:bg-black before:rotate-12 before:translate-y-4 before:-translate-x-1">
              ${price + Math.ceil((price * discountPercent) / 100)}
            </span>
          )}
          <span className="font-bold text-xl text-center">${price}</span>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center mt-3.5">
          <Button
            title="In cart"
            size="small"
            icon={<IoCartOutline size={18} />}
            onClick={() =>
              addToCart(id, product)
            }
          />
          <Button title="buy in one click" size="small" outlined />
        </div>
      </div>
      {!!discountPercent && (
        <div className="absolute  top-4 right-5 w-fit py-1 px-4 bg-[#F9A43F] rounded-2xl text-white font-semibold">
          {discountPercent}%
        </div>
      )}
    </div>
  );
}
