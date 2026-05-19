import { BlogCard } from "@entities/blog";
import { ProductCard } from "@entities/product";
import {
  blogPageImg1,
  blogPageImg2,
  blogPageImg3,
  blogPageImg4,
  blogPageImg5,
  info1,
  info2,
  product1,
  product2,
  product3,
  product4,
} from "@shared/assets";
import { Breadcrumbs } from "@shared/ui";
import { v4 } from "uuid";

export function BlogPage() {
  return (
    <div className="container">
      <Breadcrumbs />
      <div className="title mt-2">
        AERONAUTIKA IMPERIALIS: INTRODUCTION TO THE GAME
      </div>
      <div className="mt-3">18.12.2021</div>

      <div className="flex flex-col gap-16">
        <div className="">
          <img
            src={blogPageImg1}
            alt="blog img"
            className="rounded-lg mx-auto mt-9"
          />
          <p className="mt-7">
            Hooray! The first Aeronautics Imperialis boxes are about to reach
            their lucky owners, so it's time to take a look at the rules of this
            wonderful game, explore some of the features available to players,
            as well as possible squadron build options and a brief description
            of each aircraft currently available. Whether you're already
            considering purchasing this box, or are confused about which side to
            choose, this article should be helpful!
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="font-bold text-1.5xl">The Imperial Navy</div>
            <p className="mt-9">
              The Imperial Navy is arguably the greatest power in the galaxy,
              controlling stars and planets with vast fleets and countless ships
              and aircraft. While battlecruisers are renowned as deadly masters
              of interstellar combat, the enemies of humanity equally fear
              Thunderbolts* and Marauders, terrifyingly effective sky-killers,
              conduits of the Emperor's wrath, capable of raining death on both
              ground targets and airborne vessels.
            </p>
          </div>
          <img
            src={blogPageImg2}
            alt="blog img"
            className="max-w-[540px] md:w-1/2 object-cover rounded-lg"
          />
        </div>
        <div>
          <div className="font-bold text-1.5xl">The Imperial Navy</div>

          <p>
            <span className="font-bold">The Imperial Navy is TENACITY</span>
            Even the lightest Imperial aircraft, like the Thunderbolt, are quite
            durable and far from easy to kill, making your roster look quite
            robust. And yes, think of these vehicles more as tanks with wings
            and indecent thrust than as aircraft.
          </p>
          <br />
          <p>
            <span className="font-bold">The Imperial Navy is FLEXIBILITY</span>
            Even the starter set gives you a certain amount of flexibility in
            your roster, offering a wealth of options for assembling your
            squadron. If you want to use speed and cunning to achieve victory,
            go with Thunderbolts. But if you want to meet the enemy head-on and
            endure a hail of fire and still emerge victorious, then load up on
            Marauders.
          </p>
          <br />
          <p>
            <span className="font-bold">
              The Imperial Navy is the master of medium-range combat.
            </span>
            Most Imperial Navy vehicles are well-armed. In aeronautics, distance
            to the target is often everything, which is why Imperial weapons,
            which excel at medium range, are so valuable. Keep the enemy under
            fire while preventing them from getting close, and soon only the
            wreckage of enemy vehicles will be burning on the battlefield.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="font-bold text-1.5xl">The Thunderbolt</div>
            <p className="mt-9">
              Calling the Thunderbolt a versatile weapon is a pretty good idea.
              Even if you were to build your roster entirely out of these
              Imperial Navy workhorses, you'd still get a pretty hefty paycheck.
            </p>
            <br />
            <p>
              Besides its generally decent stats, the Thunderbolt boasts the
              best Ace Manoeuvres characteristic in the game (at least for
              now!). We'll certainly explore the Thunderbolt in more detail in
              the future, but for now, suffice it to say that this war machine
              is capable of literally circling most opponents it encounters.
            </p>
          </div>
          <img
            src={blogPageImg3}
            alt="blog img"
            className="max-w-[540px] md:w-1/2 object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="font-bold text-1.5xl">The Thunderbolt Fury</div>
            <p className="mt-9">
              The Thunderbolt Fury is another type of vehicle available to the
              Imperial Navy. For a few extra points, it gains better armament
              than its lighter counterpart, specifically an Avenger Bolt Cannon
              in place of quadruple autocannons. If you have a few extra points
              when compiling your list, rest assured that this is a worthy
              investment, as Furies are quite capable of dispatching lighter
              vehicles with a single salvo. Just be mindful of your firing arcs,
              as while this interceptor has impressive firepower, its firing
              angle is quite limited, and you can only engage targets directly
              in front of you.
              <br />
              The Marauder Bomber
            </p>
          </div>
          <img
            src={blogPageImg4}
            alt="blog img"
            className="max-w-[540px] md:w-1/2 object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="font-bold text-1.5xl">Marauder Destroyer</div>
            <p className="mt-9">
              Yes, you won't find this particular Marauder variant in the Wings
              of Vengeance set, but if you're a true Imperial Navy fan, you'll
              want to pick up a box of these aerial fortresses first thing in
              the morning. Sure, they're damn slow, but you wouldn't envy any
              enemy that gets within range of their guns! Even those enemies
              that manage to outflank the Marauder will find themselves in the
              crosshairs of its tail guns, which are comparable in power to
              those of lighter vehicles. If you're not afraid of fire from the
              rear, you can even safely allow the enemy to get behind you to
              maximize the damage you inflict on the enemy, firing from both the
              nose and tail guns.
            </p>
          </div>
          <img
            src={blogPageImg5}
            alt="blog img"
            className="max-w-[540px] md:w-1/2 object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="mt-10 md:mt-20">
        <div className="text-1.5xl">Learn more</div>
        <div className="flex gap-4">
          <BlogCard
            img={info1}
            title="Aeronautics Imperialis: Game Introduction"
            description="Let's take a closer look at the rules of the game."
          />
          <BlogCard
            img={info2}
            title="The Best Steam Board Games to Play with Friends During Quarantine"
            description="According to the 2021 rating"
          />
        </div>
      </div>
      <div className="mt-10 md:mt-20">
        <div className="title text-1.5xl">We recommend for you</div>
        <div className="grid py-6 gap-4 grid-cols-[repeat(4,250px)] lg:grid-cols-4 max-lg:overflow-auto">
          <ProductCard
            image={product1}
            title="Warhammer 40,000: Chaos Space Marines"
            price={29}
            players="2-6"
            playingTime="30-60"
            id={v4()}
            minAge={18}
          />
          <ProductCard
            image={product2}
            title="On the mars"
            price={29}
            players="2-6"
            playingTime="30-60"
            id={v4()}
            minAge={18}
          />
          <ProductCard
            image={product3}
            title="Broken Realms: Horrek's Dreadlance"
            price={29}
            players="2-6"
            playingTime="30-60"
            id={v4()}
            minAge={18}
          />
          <ProductCard
            image={product4}
            title="Star Wars Outer Rim"
            price={29}
            players="2-6"
            playingTime="30-60"
            id={v4()}
            minAge={18}
          />
        </div>
      </div>
    </div>
  );
}
