import { about1, about2, about3, about4 } from "@shared/assets";
import { Breadcrumbs } from "@shared/ui";

export function About() {
  return (
    <div className="container">
      <Breadcrumbs />
      <div className="title mt-4">About</div>
      <div className="grid md:grid-cols-2 md:grid-rows-[max-content,_1fr] gap-x-8 mt-3">
        <div className="col-start-1 row-start-1 title text-xl">Our mission</div>
        <div className="md:col-start-1 md:row-start-2 row-start-3 mt-4">
          Diverse and rich experience in strengthening and developing a
          structure significantly determines the creation of a development
          model. Diverse and rich experience in consulting with a broad range of
          stakeholders enables the fulfillment of important tasks in developing
          a personnel training system that meets pressing needs. Everyday
          practice shows that initiating daily work on position development
          enables the fulfillment of important tasks in developing new
          proposals. Everyday practice shows that further development of various
          forms of activity significantly determines the creation of new
          proposals.
        </div>
        <div className="md:col-start-2 md:row-start-1 row-end-3 col-start-1 row-start-2 flex items-center gap-2 max-md:mt-2">
          <img src={about1} alt="about img" className="rounded-lg w-1/2" />
          <img src={about2} alt="img" className="rounded-lg w-1/2" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:grid-rows-[max-content,_1fr] gap-x-8 mt-8 md:mt-20">
        <div className="md:col-start-2 col-start-1 row-start-1 title text-xl">
          Our events
        </div>
        <div className="md:col-start-2 col-start-1 md:row-start-2 row-start-3 mt-4">
          It should not be forgotten, however, that strengthening and developing
          the structure represents an interesting experiment in testing the
          development model. On the other hand, the implementation of the
          planned objectives largely depends on the creation of systems of mass
          participation.
        </div>
        <div className="md:col-start-1 md:row-start-1 row-end-3 col-start-1 row-start-2 flex items-center gap-2 max-md:mt-2">
          <img src={about3} alt="about img" className="rounded-lg w-1/2" />
          <img src={about4} alt="img" className="rounded-lg w-1/2" />
        </div>
      </div>
    </div>
  );
}
