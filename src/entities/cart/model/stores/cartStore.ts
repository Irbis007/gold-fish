import type { ProductItem } from "@entities/productCard";
import { create } from "zustand";
import type { CartData } from "../types/cartData";
import { immer } from "zustand/middleware/immer";

type CartStore = CartData & {
  productsCount: number;
  onRemoveItem: (id: string) => void;
  onDeleteItem: (id: string) => void;
  onAddItem: (id: string, product: ProductItem) => void;
};

const countTotalSummary = (items: CartData["cardItems"]): number => {
  return Object.values(items).reduce((cur, product) => {
    return product.count * product.product.price + cur;
  }, 0);
};
const getProductsCount = (items: CartData["cardItems"]): number => {
  return Object.values(items).reduce((cur, product) => {
    return product.count + cur;
  }, 0);
};

export const useCartStore = create<CartStore>()(
  immer((set) => ({
    totalSummary: 0,
    cardItems: {},
    productsCount: 0,
    onDeleteItem: (id) =>
      set((state) => {
        delete state.cardItems[id];
        state.productsCount = getProductsCount(state.cardItems);
        state.totalSummary = countTotalSummary(state.cardItems);
      }),
    onRemoveItem: (id) =>
      set((state) => {
        if (state.cardItems[id].count == 1) {
          delete state.cardItems[id];
        } else {
          state.cardItems[id].count -= 1;
        }
        state.productsCount = getProductsCount(state.cardItems);
        state.totalSummary = countTotalSummary(state.cardItems);
      }),
    onAddItem: (id, product) =>
      set((state) => {
        if (state.cardItems[id]) {
          state.cardItems[id].count += 1;
        } else {
          state.cardItems[id] = {
            product,
            count: 1,
          };
        }
        state.productsCount = getProductsCount(state.cardItems);
        state.totalSummary = countTotalSummary(state.cardItems);
      }),
  })),
);
