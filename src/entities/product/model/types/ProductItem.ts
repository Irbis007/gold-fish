export type ProductItem = {
  id: string;
  image: string;
  title: string;
  minAge: number;
  players: `${number}-${number}`;
  playingTime: `${number}-${number}`;
  price: number;
  discountPercent?: number;
};
