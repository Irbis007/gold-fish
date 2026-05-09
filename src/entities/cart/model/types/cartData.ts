import type { ProductItem } from "@entities/productCard";

export type CartData = {
  totalSummary: number;
  cardItems: Record<
    string,
    {
      product: ProductItem;
      count: number;
    }
  >;
};
