import type { ProductItem } from "@entities/product";
import { FaTrashAlt } from "react-icons/fa";
import { useCartStore } from "../model/stores";

type Props = ProductItem & {
  count: number;
};

export function CartItem({count, ...product }: Props) {
  const onAddProduct = useCartStore((state) => state.onAddItem);
  const onRemoveProduct = useCartStore((state) => state.onRemoveItem);
  const onDeleteProduct = useCartStore((state) => state.onDeleteItem);

  const { title, price, image, id } = product;
  return (
    <div className="flex items-center gap-4">
      <div className="w-24 h-24 rounded-lg border-2 border-zinc-100 bg-white">
        <img src={image} alt="" />
      </div>
      <div className="grow title text-xl">{title}</div>
      <div className="title text-xl">${price}</div>

      <div className="flex items-center gap-2 justify-center w-26 pl-10 font-bold ">
        <span className="cursor-pointer select-none" onClick={() => onRemoveProduct(id)}>
          -
        </span>
        <span>{count} ct</span>
        <span
          className="cursor-pointer select-none"
          onClick={() => onAddProduct(id, product)}
        >
          +
        </span>
      </div>
      <div className="cursor-pointer">
        <FaTrashAlt size={24} onClick={() => onDeleteProduct(id)} />
      </div>
    </div>
  );
}
