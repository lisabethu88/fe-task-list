import axios from "axios";
import React, { useEffect, useState } from "react";
import { kBaseUrl } from "../Constants";
import { ReactComponent as GoldPin } from "../images/goldPin.svg";
import "./Card.css";
interface CardProps {
  card: object;
  cards: object[];
  setCards: React.Dispatch<React.SetStateAction<object[]>>;
}

export const Card = ({ card, cards, setCards }: CardProps) => {
  const addLikes = () => {
    // Send a request to update the like status of the specific card
    axios
      .put(`${kBaseUrl}/cards/${card["id"]}/like`)
      .then((response) => {
        // Update the individual card in the array
        const updatedCard = response.data;

        // Find the index of the updated card in the cards array
        const cardIndex = cards.findIndex((c) => c["id"] === updatedCard.id);

        if (cardIndex !== -1) {
          // Create a new array with the updated card
          const updatedCards = [...cards];
          updatedCards[cardIndex] = updatedCard;

          // Set the state with the updated array of cards
          setCards(updatedCards);
        }
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section>
      <section className="card flex flex-col items-center w-[250px] h-fit px-5 pb-5 m-3">
        <p>{card["message"]}</p>
        <p>
          {card["likes_count"]}{" "}
          <span className="material-symbols-outlined">favorite</span>
          {card["likes_count"] <= 1 ? " " : "'s "}
          <button onClick={() => addLikes()}>{"+1"}</button>
        </p>
      </section>
    </section>
  );
};
