import { Dropdown } from "@shared/ui";

export const FAQTab = () => {
  return (
    <div className="">
      <div className="border-b py-6 border-zinc-200">
        <Dropdown
          title="How to place an order?"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus voluptate velit quae dolorem 
          omnis nam rem quis consectetur, in totam itaque eaque modi molestias nesciunt soluta mollitia tempora fugiat."
          titleClasses="justify-between"
        />
      </div>
      <div className="border-b py-6 border-zinc-200">
        <Dropdown
          title="How to choose a game?"
          content={
            <p>
              <span>
                If a group is planning to play a board game, consider the
                average age of the players. Some games are less active and
                unlikely to appeal to young people, while more active ones won't
                appeal to older people.
              </span>
              <br />
              <br />
              <span>
                Many games are designed for larger groups, while others are
                strictly for two. Individual options are also available, but
                most often the number of players ranges from two to four. The
                number of players a game is designed for is stated on the
                packaging. It's important to decide upfront how many people will
                participate. Some board games can be boring for only two people.
                If you'll mostly be playing with two people, avoid games
                designed for larger groups.
              </span>
              <br />
              <br />
              <span>
                How the players interact during the game is also important.
                There are two main options: every man for himself or in a team.
                Props can include cards, dice, paper and pencils, as well as
                special equipment included in the box.
              </span>
              <br />
              <br />
              <span>
                There are several types of board games: intellectual, creative,
                active, and cooperative. Intellectual games are more suitable
                for children who need to develop logic and erudition. They can
                train their memory and thinking skills in an entertaining
                format. These games include memo games, which require them to
                memorize pictures or words. Strategic and economic games develop
                entrepreneurial and strategic skills and teach them effective
                planning. Creative games develop imagination and require more
                concentration. Active games are more appealing to groups because
                they focus on interaction between players. In a cooperative
                game, a child will develop speech and communication skills
                through interaction with other players.
              </span>
              <br />
              <br />
              <span>
                Games are also chosen based on their duration: from a few
                minutes to several hours. The playing time also depends on the
                number of participants and their familiarity with the rules.
              </span>
            </p>
          }
          titleClasses="justify-between"
        />
      </div>
      <div className="border-b py-6 border-zinc-200">
        <Dropdown
          title="How to pay for an order?"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus voluptate velit quae dolorem 
          omnis nam rem quis consectetur, in totam itaque eaque modi molestias nesciunt soluta mollitia tempora fugiat."
          titleClasses="justify-between"
        />
      </div>
      <div className="border-b py-6 border-zinc-200">
        <Dropdown
          title="How can I change my order after placing it?"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus voluptate velit quae dolorem 
          omnis nam rem quis consectetur, in totam itaque eaque modi molestias nesciunt soluta mollitia tempora fugiat."
          titleClasses="justify-between"
        />
      </div>
      <div className="border-b py-6 border-zinc-200">
        <Dropdown
          title="What should I do if my order hasn't arrived?"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus voluptate velit quae dolorem 
          omnis nam rem quis consectetur, in totam itaque eaque modi molestias nesciunt soluta mollitia tempora fugiat."
          titleClasses="justify-between"
        />
      </div>
      <div className="border-b py-6 border-zinc-200">
        <Dropdown
          title="How to return an item?"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus voluptate velit quae dolorem 
          omnis nam rem quis consectetur, in totam itaque eaque modi molestias nesciunt soluta mollitia tempora fugiat."
          titleClasses="justify-between"
        />
      </div>
    </div>
  );
};
