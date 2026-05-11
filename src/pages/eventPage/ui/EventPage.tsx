import { eventPageImg } from "@shared/assets";
import { Breadcrumbs, Button } from "@shared/ui";
import { EventsCards } from "@widgets/eventsCards";

export function EventPage() {
  return (
    <div className="container">
      <Breadcrumbs />
      <div className="md:flex gap-4">
        <div>
          <div className="title">Warhammer 40,000 Tournament</div>
          <div className="text-xl mt-3">18.12.2021</div>
          <img src={eventPageImg} alt="event img" className="w-full mt-10" />
          <div className="mt-8">
            <p>
              Higher-level ideological considerations, as well as the further
              development of various forms of activity, allow us to assess the
              significance of new proposals. Therefore, the implementation of
              the outlined planned targets requires us to analyze the
              development model. The organizational task, particularly the
              ongoing informational and propaganda support of our activities,
              facilitates the preparation and implementation of essential
              financial and administrative conditions. However, it should not be
              forgotten that the further development of various forms of
              activity plays a significant role in shaping the participants'
              positions regarding the assigned tasks. Comrades! The ongoing
              informational and propaganda support of our activities plays a
              significant role in shaping new proposals.
            </p>
            <br />
            <p>
              On the other hand, the new organizational activity model enables
              us to fulfill important tasks in developing the development model.
              Similarly, the further development of various forms of activity
              enables us to fulfill important tasks in developing development
              forms. On the other hand, the constant quantitative growth and
              scope of our activities significantly determines the positions
              taken by participants regarding the assigned tasks. The
              significance of these issues is so obvious that the new
              organizational activity model plays a significant role in shaping
              the participants' positions regarding the assigned tasks. On the
              other hand, the further development of various forms of activity
              plays an important role in the formation of new proposals.
            </p>
            <br />
            <p>
              Thus, the existing organizational structure facilitates the
              preparation and implementation of mass participation systems.
              Comrades! The framework and location for personnel training
              represent an interesting experiment in testing the directions of
              progressive development. The organization's mission, particularly
              the further development of various forms of activity, allows us to
              fulfill important tasks in developing mass participation systems.
            </p>
            <br />
            <p>
              Daily practice shows that the constant quantitative growth and
              scope of our activities represent an interesting experiment in
              testing further development directions. Our diverse and rich
              experience, constant quantitative growth and scope of our
              activities, largely determine the creation of further development
              directions. Daily practice shows that constant quantitative growth
              and scope of our activities entail the process of implementing and
              modernizing essential financial and administrative conditions.
            </p>
          </div>
        </div>
        <div className="shrink-0 w-full md:w-[350px] h-fit bg-white shadow-lg rounded-lg mt-6 md:mt-0 px-8 py-9">
          <div className="text-2xl">Hurry to register</div>
          <div className="flex flex-col gap-2 mt-8">
            <div className="flex gap-1 text-xl">
              Price:
              <span className="text-1.5xl">$10</span>
            </div>
            <div className="flex gap-1 text-xl">
              Remaining:
              <span className="text-1.5xl">7 seats</span>
            </div>
            <div className="flex gap-1 text-xl">
              Date:
              <span className="text-1.5xl">18.12.2021</span>
            </div>
            <div className="flex gap-1 text-xl">
              Time:
              <span className="text-1.5xl">19:20</span>
            </div>
          </div>
          <Button title="Registration" classes="w-full text-1.5xl font-bold mt-4" />
        </div>
      </div>
      <div className="mt-10 md:mt-20">
        <div className="text-1.5xl">It might be interesting</div>
        <EventsCards/>
      </div>
    </div>
  );
}
