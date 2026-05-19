import { pageEvent1, pageEvent2, pageEvent3 } from "@shared/assets";
import { EventRow } from "./EventRow";
import { URLS } from "@shared/consts";

export function Events() {
  return (
    <div className="space-y-6">
      <EventRow
        img={pageEvent1}
        title="Dungeons & Dragons games"
        date="September 25, 2021, 5:00 PM"
        link={URLS.events.id}
      />
      <EventRow
        img={pageEvent2}
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
  );
}
