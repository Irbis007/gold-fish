import {
  catalog1,
  catalog2,
  catalog3,
  catalog4,
  catalog5,
} from "@shared/assets";
import { URLS } from "@shared/consts";

export const catalog = [
  {
    url: catalog1,
    title: "Board games",
    link: `${URLS.catalog.products.boardGames}`,
  },
  {
    url: catalog2,
    title: "Wargames",
    link: `${URLS.catalog.products.warhammer}`,
  },
  {
    url: catalog3,
    title: "Paints",
    link: `${URLS.catalog.products.paints}`,
  },
  {
    url: catalog4,
    title: "Magic:the Cathering",
    link: `${URLS.catalog.products.magicCathering}`,
  },
  {
    url: catalog5,
    title: "The entire catalog",
    link: `${URLS.catalog.default}`,
  },
];
