import { about, event1, event2, info1, info2, info3 } from "@shared/assets";

import Slider from "./Slider";
import { ProductsSlider } from "@widgets/productsSlider";
import { catalog, products, productsWithDiscount } from "../model/consts";
import { Button } from "@shared/ui";
import { EventCard } from "./EventCard";
import { InfoCard } from "./InfoCard";
import { CatalogCard } from "./CatalogCard";
import { Contacts } from "@widgets/contacts";

export function Home() {
  return (
    <>
      <Slider />
      <div className="container mt-10">
        <div className="title">Catalog</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr] mt-6 grid-rows-[repeat(6,_175px)] sm:grid-rows-[repeat(4,_175px)] md:grid-rows-[repeat(2,_175px)] gap-4 mad:gap-8">
          {catalog.map((item, i) => (
            <CatalogCard key={i} {...item} index={i} />
          ))}
        </div>
      </div>
      <div className="container mt-20">
        <div className="title">Hurry to buy</div>
        <div className="overflow-x-clip mt-5">
          <ProductsSlider products={products} />
        </div>
      </div>
      <div className="container mt-20">
        <div className="title">Special offers</div>
        <div className="overflow-x-clip mt-5">
          <ProductsSlider products={productsWithDiscount} />
        </div>
      </div>
      <div className="container mt-20">
        <div className="title">Upcoming events</div>
        <div className="flex gap-4 mt-5 overflow-x-scroll md:overflow-auto">
          <EventCard
            img={event1}
            title="Halloween with GoldFish"
            date="October 31, 2021, 7:00 PM"
            description="We will gather to find out who the Mafia really was and what
                will happen to those who were killed..."
          />
          <EventCard
            img={event2}
            title="Warhammer Tournament"
            date="November 9, 2021, 6:30 PM"
            description="Ready to fight in a fierce Warhammer battle? No? We'll definitely teach you!"
          />
        </div>
        <div className="flex justify-center mt-5">
          <Button title="Learn more" size="large" />
        </div>
      </div>
      <div className="container mt-20">
        <div className="title">More interesting information</div>
        <div className="flex gap-4 overflow-x-auto">
          <InfoCard
            img={info1}
            title="Aeronautics Imperialis: Game Introduction"
            description="Let's take a closer look at the rules of the game."
          />
          <InfoCard
            img={info2}
            title="The Best Steam Board Games to Play with Friends During Quarantine"
            description="According to the 2021 rating"
          />
          <InfoCard
            img={info3}
            title="Desirable but unlikely releases"
            description={`A short list of "if only..."`}
          />
        </div>
        <div className="flex justify-center mt-9">
          <Button
            title="Learn more"
            classes="text-black"
            size="large"
            outlined
          />
        </div>
      </div>
      <div className="container mt-20">
        <div className="grid mt-7 grid-cols-1 md:grid-cols-2 md:justify-between justify-center">
          <div className="title col-start-1 col-end-2 row-start-1 row-end-2">
            About the "GoldFish" gaming center
          </div>
          <div className="col-start-1 col-end-2 md:row-start-2 md:row-end-3 row-start-3 row-end-4 mt-3 mx-auto md:mx-0">
            GoldFish is a store where you can find the perfect gift for yourself
            and your loved ones.
            <br />
            <br />
            Our store offers thousands of board games to suit every taste:
            simple and more complex, family and adults-only, for two and for
            large groups, detective and logic games, role-playing and strategy
            board games. GoldFish also regularly hosts its own game libraries,
            including tournaments for Magic: the Gathering (from Wizards of the
            Coast) and Warhammer (from Games Workshop).
            <br />
            <br />
            In our store, you can find the necessary accessories for your
            favorite games (card sleeves and collection sleeves), tools for
            decorating and painting figurines yourself (cases, stands, Vallejo
            paints, etc.), and much more.
            <br />
            <br />
            GoldFish is not only a board game store but also a full-fledged
            hobby center. Here you can rent tables to play with friends, take
            training and master classes on the games you're interested in, make
            new friends, and join the gaming community!
          </div>
          <img
            src={about}
            alt="about img"
            className="md:col-start-2 md:col-end-3 md:row-start-1 object-cover md:row-end-3 row-start-2 row-end-3 w-full h-full rounded-lg md:rounded-none"
          />
        </div>
      </div>
      <div className="container mt-20">
        <Contacts />
      </div>
    </>
  );
}
