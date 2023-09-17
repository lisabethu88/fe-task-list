import React, { useState, useEffect } from "react";
import { kBaseUrl } from "../Constants";
import axios from "axios";
import { Card } from "./Card.tsx";
import { CardLink } from "reactstrap";
import { CardList } from "./CardList.tsx";
import "./Board.css";

interface BoardProps {
  board: Object;
  cards: object[];
  setCards: React.Dispatch<React.SetStateAction<object[]>>;
}

export const Board = ({ board, cards, setCards }: BoardProps) => {
  return (
    <section id="board" className="text-center min-w-[350px] m-5">
      <CardList
        boardTitle={board["title"]}
        boardOwner={board["owner"]}
        cards={cards}
        setCards={setCards}
      />
    </section>
  );
};
