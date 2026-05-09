import { labels } from "../../consts";

export type Event = {
  title: string;
  description: string;
  img: string;
  date: Date;
  price: number;
  label: (typeof labels)[number];
};
