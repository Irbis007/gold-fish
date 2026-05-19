import type { ProductItem } from "@entities/product";

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
