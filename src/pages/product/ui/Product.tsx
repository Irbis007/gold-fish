import { FaUsers } from "react-icons/fa";
import { Slider } from "./Slider";
import { Breadcrumbs, Button, Dropdown } from "@shared/ui";
import { RiTimerLine } from "react-icons/ri";
import { Tabulation } from "./Tabulation";
import { ProductCard } from "@entities/product";
import { product2, product3 } from "@shared/assets";

export function Product() {
  return (
    <div className="container">
      <Breadcrumbs />
      <div className="title">Jenga</div>
      <div className="flex gap-3">
        <div className="flex grow flex-col">
          <Slider />
          <div className="">
            <Tabulation />
          </div>
        </div>

        <div className="w-[300px] shrink-0">
          <div className="w-full bg-white rounded-lg shadow-lg ">
            <div className="pt-5 px-8 pb-7">
              <div className="text-xs text-right">Product code: 842672</div>
              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center gap-2">
                  <FaUsers size={28} />
                  2-6
                </div>
                <div className="flex items-center gap-2">
                  <RiTimerLine size={28} />
                  30-60
                </div>
                <div className="text-2xl">6+</div>
              </div>
              <div
                className="relative block w-fit mx-auto mt-6 before:block before:w-[120%] before:h-0.5 before:bg-black 
            before:translate-y-4 before:-translate-x-1 text-xl"
              >
                $40.00
              </div>
              <div className="mt-3 text-4xl  text-center">$31.00</div>
              <Button classes="w-full mt-6" title="In Cart" />
              <Button classes="w-full mt-5" title="By in 1 click" outlined />
            </div>
            <div className="flex flex-col gap-3 pt-5 px-8 pb-7 border-t">
              <Dropdown
                title={"Delivery"}
                content={
                  <div className="flex flex-col gap-1 pl-2">
                    <span>In-store pickup: today</span>
                    <span>Pickup from 761 locations: 1-3 days</span>
                    <span>Courier delivery: 1-3 days</span>
                    <span>Delivery by mail: from 3 days</span>
                  </div>
                }
                titleClasses="justify-between"
              />
              <Dropdown
                title={"Payment"}
                content={
                  <div className="flex flex-col gap-1 pl-2">
                    <Button title="Ask a question" disabled outlined />
                  </div>
                }
                titleClasses="justify-between"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-4 items-center">
            <div className="title text-xl text-center">
              Customers who bought this item also bought
            </div>
            <div className="w-[255px]">
              <ProductCard
                id={'1'}
                title="Broken Realms: Horrek's Dreadlance"
                players="2-3"
                playingTime="30-60"
                minAge={18}
                image={product3}
                price={30}
              />
            </div>
            <div className="w-[255px]">
              <ProductCard
                id={'1'}
                title="Broken Realms: Horrek's Dreadlance"
                players="2-3"
                playingTime="30-60"
                minAge={18}
                image={product2}
                price={30}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
