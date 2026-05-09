import {
  pageEvent1,
  pageEvent2,
  pageEvent3,
  pageEvent4,
  pageEvent5,
  pageEvent6,
} from "@shared/assets";
import type { Event } from "../model/types";

const data: Event[] = [
  {
    title: "Halloween with GoldFish",
    date: new Date("31.10.2022 19:00"),
    price: 10,
    description:
      "We will gather to find out who was Mafia after all and what will happen to those who were killed.",
    img: "",
  },
  {
    title: "Board Game Night",
    date: new Date("31.10.2022 19:00"),
    price: 8,
    description:
      "Weekly board game sessions featuring a variety of games. Meetings take place in anti-cafes, cafes, and libraries.",
    img: "",
  },
];

const imgs = [
  pageEvent1,
  pageEvent2,
  pageEvent3,
  pageEvent4,
  pageEvent5,
  pageEvent6,
];

const getRandomDate = () => {
  const now = new Date();

  const weekAgo = new Date();
  weekAgo.setDate(now.getDate() - 7);

  const randomTime =
    weekAgo.getTime() + Math.random() * (now.getTime() - weekAgo.getTime());

  return new Date(randomTime);
};

const getEvents = () => {
  const arr: Event[] = [];

  for (let i = 0; i < 20; i++) {
    const item = Math.floor(Math.random() * 2);
    const imgI = Math.floor(Math.random() * 6);
    arr.push({
      ...data[item],
      img: imgs[imgI],
      date: getRandomDate(),
    });
  }
  return arr;
};

export const events = getEvents();
