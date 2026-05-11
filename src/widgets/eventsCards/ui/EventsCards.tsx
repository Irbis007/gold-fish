import { EventCard } from "@entities/event";
import { event1, event2 } from "@shared/assets";

export function EventsCards() {
  return (
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
  );
}
