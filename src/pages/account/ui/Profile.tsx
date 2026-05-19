import { ProductCard } from "@entities/product";
import { event1, event2, levelBronze, levelGold, levelSilver, pageEvent3, product1 } from "@shared/assets";
import { EventRow } from "./EventRow";
import { URLS } from "@shared/consts";
import { FaUser } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";
import { LoyaltyCard } from "./LoyaltyCard";
import { Level } from "./Level";
import { useMenuStore } from "../model/stores";

export function Profile() {
  const setIsMenuOpen = useMenuStore(state => state.setIsMenuOpen)
  const maxExp = 10000;
  const curExp = 1200;
  const barW = (curExp * 100) / maxExp;
  return (
    <div className="w-full">
      <div className="flex items-center">
        <div className="flex justify-center items-center rounded-full w-20 h-20 bg-zinc-300 mr-7">
          <FaUser size={28} color="white" />
        </div>
        <div className="flex-grow font-bold text-1.5xl">Name Surname</div>
        <div className="hidden md:flex">
          <div className="hidden md:flex items-center border border-accent justify-center w-7 h-7 rounded-full mr-4">
            <IoMdCheckmark size={18} className="text-accent" />
          </div>
          <div className="fon-bold text-lg">Newbie</div>
        </div>
        <div
          className="md:hidden cursor-pointer block text-accent"
          onClick={() => setIsMenuOpen(true)}
        >
          <TfiMenuAlt size={28} />
        </div>
      </div>
      <div className="mt-7">
        <div className="font-bold text-1.5xl">Loyalty card</div>
        <div className="grid min-[880px]:grid-cols-[minmax(100px,445px),1fr] mt-6 gap-4 lg:gap-10 items-center">
          <div className="min-w-[280px]">
            <LoyaltyCard />
          </div>
          <div className="space-y-4 w-full min-w-[330px]">
            <Level
              icon={levelBronze}
              title={`5% "Newbie"`}
              status="received"
              needsExperience="500"
            />
            <Level
              icon={levelSilver}
              title={`10% "Amateur"`}
              status="in progress"
              needsExperience="5000"
            />
            <Level
              icon={levelGold}
              title={`5% "Professional"`}
              status="closed"
              needsExperience="10000"
            />
          </div>
          <div className="flex flex-col gap-2 md:flex-row items-end md:items-center col-start-1 min-[880px]:col-end-3 mt-8 md:mt-1">
            <div className="relative rounded-lg w-full h-3 shadow-md bg-white">
              <div
                className={`absolute top-0 left-0 rounded-lg h-full bg-gradient-to-t to-accent from-[#FB791B]`}
                style={{ width: barW + "%" }}
              ></div>
            </div>
            <div className="pl-14 text-1.5xl">
              {curExp}/{maxExp}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-20">
        <div className="text-1.5xl">My events</div>
        <div className="space-y-7 mt-7">
          <EventRow
            img={event1}
            title="Dungeons & Dragons games"
            date="September 25, 2021, 5:00 PM"
            link={URLS.events.id}
          />
          <EventRow
            img={event2}
            title="Board Game Night"
            date="October 10, 2021, 7:00 PM"
            link={URLS.events.id}
          />
          <EventRow
            img={pageEvent3}
            title="Warhammer 40,000 Tournament"
            date="November 19, 2021, 5:00 PM"
            link={URLS.events.id}
          />
        </div>
        <div className="mt-10 md:mt-20">
          <div className="text-1.5xl">We recommend for you</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
            <ProductCard
              image={product1}
              title="Broken Realms: Horrek's Dreadlance"
              players="2-6"
              playingTime="30-60"
              price={28}
              id="2"
              minAge={18}
            />
            <ProductCard
              image={product1}
              title="Broken Realms: Horrek's Dreadlance"
              players="2-6"
              playingTime="30-60"
              price={28}
              id="2"
              minAge={18}
            />
            <ProductCard
              image={product1}
              title="Broken Realms: Horrek's Dreadlance"
              players="2-6"
              playingTime="30-60"
              price={28}
              id="2"
              minAge={18}
            />
            <ProductCard
              image={product1}
              title="Broken Realms: Horrek's Dreadlance"
              players="2-6"
              playingTime="30-60"
              price={28}
              id="2"
              minAge={18}
            />
            <ProductCard
              image={product1}
              title="Broken Realms: Horrek's Dreadlance"
              players="2-6"
              playingTime="30-60"
              price={28}
              id="2"
              minAge={18}
            />
            <ProductCard
              image={product1}
              title="Broken Realms: Horrek's Dreadlance"
              players="2-6"
              playingTime="30-60"
              price={28}
              id="2"
              minAge={18}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
