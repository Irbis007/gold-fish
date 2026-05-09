import {
  pageEvent1,
  pageEvent2,
  pageEvent3,
  pageEvent4,
  pageEvent5,
  pageEvent6,
} from "@shared/assets";
import type { Event } from "../model/types";
import { labels } from "./labels";

const data = [
  {
    title: "Halloween with GoldFish",
    price: 10,
    description:
      "We will gather to find out who was Mafia after all and what will happen to those who were killed.",
  },
  {
    title: "Board Game Night",
    price: 8,
    description:
      "Weekly board game sessions featuring a variety of games. Meetings take place in anti-cafes, cafes, and libraries.",
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
    weekAgo.getTime() + Math.random() * (now.getTime() + 1 - weekAgo.getTime());

  return new Date(randomTime);
};

const getEvents = () => {
  const arr: Event[] = [];

  arr.push(
    {
      title: "Halloween with GoldFish",
      date: new Date(),
      price: 10,
      description:
        "We will gather to find out who was Mafia after all and what will happen to those who were killed.",
      img: pageEvent1,
      label: "Magic: the Cathering",
    },
    {
      title: "Board Game Night",
      date: new Date(),
      price: 8,
      description:
        "Weekly board game sessions featuring a variety of games. Meetings take place in anti-cafes, cafes, and libraries.",
      img: pageEvent2,
      label: "Education",
    },
    {
      title: "Halloween with GoldFish",
      date: new Date(),
      price: 10,
      description:
        "We will gather to find out who was Mafia after all and what will happen to those who were killed.",
      img: pageEvent3,
      label: "Game nights",
    },
    {
      title: "Board Game Night",
      date: new Date(),
      price: 8,
      description:
        "Weekly board game sessions featuring a variety of games. Meetings take place in anti-cafes, cafes, and libraries.",
      img: pageEvent4,
      label: "Team battles",
    },
    {
      title: "Halloween with GoldFish",
      date: new Date(),
      price: 10,
      description:
        "We will gather to find out who was Mafia after all and what will happen to those who were killed.",
      img: pageEvent5,
      label: "Education",
    },
    {
      title: "Board Game Night",
      date: new Date(),
      price: 8,
      description:
        "Weekly board game sessions featuring a variety of games. Meetings take place in anti-cafes, cafes, and libraries.",
      img: pageEvent6,
      label: "Warhammer 40000",
    },
  );

  for (let i = 0; i < 100; i++) {
    const item = Math.floor(Math.random() * 2);
    const imgI = Math.floor(Math.random() * 6);
    const labelI = Math.floor(Math.random() * 4);
    arr.push({
      ...data[item],
      img: imgs[imgI],
      date: getRandomDate(),
      label: labels.slice(1, labels.length)[labelI],
    });
  }
  return arr;
};

export const events = getEvents();
