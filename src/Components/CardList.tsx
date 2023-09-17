import React from "react";
import { Card } from "./Card.tsx";
import "./CardList.css";

interface CardListProps {
  cards: object[];
  setCards: React.Dispatch<React.SetStateAction<object[]>>;
  boardTitle: string;
  boardOwner: string;
}
export const CardList = ({
  boardTitle,
  boardOwner,
  cards,
  setCards,
}: CardListProps) => {
  console.log(cards);
  return (
    <section id="card-list" className="flex flex-col">
      <h3>
        Cards for {boardTitle} by {boardOwner}
      </h3>
      <section className="flex flex-row flex-wrap h-fit w-full p-5 my-5">
        {cards.length > 0 ? (
          cards.map((card: object) => {
            return <Card card={card} cards={cards} setCards={setCards} />;
          })
        ) : (
          <p className="bg-[#cfddbcff] min-w-[150px] p-4 h-fit border-[5px] border-[#9da68cff]">
            <span className="material-symbols-outlined ">error</span> No cards
            to display.
          </p>
        )}
      </section>
    </section>
  );
};
