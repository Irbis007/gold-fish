import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import type { CalendarValue } from "../model";
import { Calendar as LibCalendar } from "react-calendar";
import type { ComponentProps } from "react";
type Props = Omit<ComponentProps<typeof LibCalendar>, "value" | "onChange"> & {
  value: CalendarValue;
  onChange: (val: CalendarValue) => void;
};

export function Calendar({ value, onChange, maxDate, minDate }: Props) {
  return (
    <LibCalendar
      value={value}
      onChange={onChange}
      maxDate={maxDate}
      minDate={minDate}
      prevLabel={<IoIosArrowBack />}
      nextLabel={<IoIosArrowForward />}
      tileClassName={({ date }) => {
        const defaultClasses = "text-start rounded-lg w-6 h-6 max-w-6 px-0.5";
        if (!value || Array.isArray(value)) return defaultClasses;
        if (date.getTime() > value.getTime())
          return "text-gray-400 cursor-not-allowed " + defaultClasses;
        return defaultClasses;
      }}
      formatShortWeekday={(_, date) =>
        ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"][date.getDay()]
      }
      next2Label={false}
      prev2Label={false}
    />
  );
}
