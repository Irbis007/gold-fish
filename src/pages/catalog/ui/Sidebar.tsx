import { Button, Checkbox, Dropdown, Input, NavLink } from "@shared/ui";
import { Range } from "react-range";
import { Link } from "react-router-dom";
import { boardGames, categories } from "../model/consts";
import { useFiltersStore } from "../model/stores";

const ages = [
  "3-5 years",
  "6-7 years",
  "8-12 years",
  "13-15 years",
  "16-17 years",
  "more then 18 years",
];

const availabilityArr = ["in stock", "made to order", "not available"];

const PLAYERS_LABEL_LEN = 8;

export function Sidebar() {
  const priceVal = useFiltersStore((state) => state.priceRange);
  const players = useFiltersStore((state) => state.playersCount);
  const withDiscount = useFiltersStore((state) => state.isWithDiscount);
  const selectedAges = useFiltersStore((state) => state.selectedAges);
  const availability = useFiltersStore((state) => state.availability);

  const changeVal = useFiltersStore((state) => state.onChangeValByKey);
  const clearFilters = useFiltersStore((state) => state.clearFilters);
  const apply = () => {};
  return (
    <div className="flex flex-col h-fit rounded-lg shadow-lg min-w-[260px]">
      <div className="py-5 px-4 border-b border-gray-300">
        <div className="">
          <Dropdown
            title="All categories"
            content={
              <div className="flex flex-col gap-3 pl-3 mt-2">
                <Dropdown
                  title={"Board games"}
                  content={
                    <div className="flex flex-col gap-2 py-2 pl-4">
                      {boardGames.map((item, i) => (
                        <Link key={i} to={item.link} className="link">
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  }
                />
                {categories.map((item, i) => (
                  <NavLink key={i} to={item.link} className="text-xl font-bold">
                    {item.title}
                  </NavLink>
                ))}
              </div>
            }
          />
        </div>
      </div>
      <div className="py-7 px-5 border-b border-gray-300">
        <Dropdown
          title="Price"
          content={
            <div className="p-1">
              <div className="flex justify-between gap-5 mt-5">
                <Input
                  type="number"
                  value={priceVal[0]}
                  onChange={(val) =>
                    changeVal("priceRange", [val, priceVal[1]])
                  }
                  size="small"
                  max={100}
                  min={0}
                  label="from"
                />
                <Input
                  type="number"
                  value={priceVal[1]}
                  onChange={(val) =>
                    changeVal("priceRange", [priceVal[0], val])
                  }
                  size="small"
                  max={100}
                  min={0}
                  label="to"
                />
              </div>
              <div className="mt-7">
                <Range
                  values={priceVal}
                  onChange={(val) => changeVal("priceRange", val)}
                  min={0}
                  max={100}
                  renderThumb={({ props }) => {
                    return (
                      <div
                        {...props}
                        key={props.key}
                        className="w-2 h-2 rounded-full bg-[#2a2a2a]"
                      ></div>
                    );
                  }}
                  renderTrack={({ props, children }) => {
                    return (
                      <div
                        {...props}
                        ref={props.ref}
                        className="w-full h-0.5 bg-[#2a2a2a]"
                      >
                        {children}
                      </div>
                    );
                  }}
                />
              </div>
              <div className="mt-5">
                <Checkbox
                  checked={withDiscount}
                  onChange={(val) => changeVal("isWithDiscount", val)}
                  label="Only with Discount"
                />
              </div>
            </div>
          }
        />
      </div>
      <div className="py-7 px-5 border-b border-gray-300">
        <Dropdown
          title="Ages"
          content={
            <div className="flex gap-2 flex-col pl-2 mt-5">
              {ages.map((item, i) => (
                <Checkbox
                  key={i}
                  checked={!!selectedAges[item]}
                  onChange={(val) =>
                    changeVal("selectedAges", {
                      ...selectedAges,
                      [item]: val,
                    })
                  }
                  label={item}
                />
              ))}
            </div>
          }
        />
      </div>
      <div className="py-7 px-5 border-b border-gray-300">
        <Dropdown
          title="Availability"
          content={
            <div className="flex gap-2 flex-col pl-2 mt-5">
              {availabilityArr.map((item, i) => (
                <Checkbox
                  key={i}
                  checked={!!availability[item]}
                  onChange={(val) =>
                    changeVal("availability", {
                      ...availability,
                      [item]: val,
                    })
                  }
                  label={item}
                />
              ))}
            </div>
          }
        />
      </div>
      <div className="py-7 px-5">
        <Range
          label="sdsffddfs"
          values={players}
          onChange={(val) => changeVal("playersCount", val)}
          min={0}
          max={7}
          renderThumb={({ props }) => {
            return (
              <div
                {...props}
                key={props.key}
                className="w-2 h-2 rounded-full bg-[#2a2a2a]"
              ></div>
            );
          }}
          renderTrack={({ props, children }) => {
            return (
              <div
                {...props}
                ref={props.ref}
                className="w-full h-0.5 bg-[#2a2a2a]"
              >
                {children}
              </div>
            );
          }}
        />
        <div className="flex justify-between relative mt-2">
          {Array.from({ length: PLAYERS_LABEL_LEN }, (_, i) => i).map((i) => {
            let value: string | number = i;
            if (i === 0) value = "Any";
            if (i === 7) value = "More";
            return (
              <span
                className="absolute text-sm -bottom-5 -translate-x-1/2"
                style={{
                  left: `${(i / (PLAYERS_LABEL_LEN - 1)) * 100}%`,
                }}
                key={i}
              >
                {value}
              </span>
            );
          })}
        </div>
        <div className="max-md:hidden">
          <Button
            title="Clear filters"
            classes="w-full hover:bg-[#2a2a2a20] border-[#2a2a2a] text-[#2a2a2a] mt-12"
            onClick={() => clearFilters()}
            outlined
          />
        </div>
        <div className="md:hidden">
          <Button
            title="Apply"
            classes="w-full mt-12"
            onClick={() => apply()}
          />
        </div>
      </div>
    </div>
  );
}
