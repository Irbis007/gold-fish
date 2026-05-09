export type Product = {
  id: number | string;
  images: string[];
  title: string;
  minAge: number;
  players: `${number}-${number}`;
  playingTime: `${number}-${number}`;
  price: number;
  discountPercent?: number;
};
