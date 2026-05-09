import { CartItem, useCartStore } from "@entities/cart";
import { Breadcrumbs, Button } from "@shared/ui";
import { IoCart } from "react-icons/io5";

export function Cart() {
  const products = Object.entries(useCartStore((state) => state.cardItems));
  const totalSummary = useCartStore((state) => state.totalSummary);
  return (
    <div className="container">
      <Breadcrumbs />
      <div className="title">Cart</div>
      <div className="flex gap-4">
        {products.length ? (
          <>
            <div className="flex flex-col gap-2 w-full">
              {products.map(([id, item], i) => (
                <CartItem
                  key={i}
                  {...item.product}
                  id={id}
                  count={item.count}
                />
              ))}
            </div>
            <div className="w-[350px] shadow-lg pt-8 px-8 pb-12 rounded-lg bg-white">
              <div className="title">
                <span className="text-xl">Sum:</span> ${totalSummary}
              </div>
              <Button title="Place an order" classes="w-full mt-6" />
              <Button title="Buy in 1 click" outlined classes="w-full mt-3" />
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center w-full mt-10 text-zinc-300">
            <IoCart size={168} />
            <div className="title">Your cart is empty</div>
          </div>
        )}
      </div>
    </div>
  );
}
