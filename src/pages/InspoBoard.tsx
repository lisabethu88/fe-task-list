import React, { useState, useEffect } from "react";
import { Board } from "../Components/Board.tsx";
import { BoardList } from "../Components/BoardList.tsx";
import axios from "axios";
import { kBaseUrl } from "../Constants.js";
import { NewCardForm } from "../Components/NewCardForm.tsx";
import { NewBoardForm } from "../Components/NewBoardForm.tsx";
import logo from "../images/bulb.gif";

export const InspoBoard = () => {
  // STATE
  const [boardsData, setBoardsData] = useState<object[]>([]);
  const [selectedBoard, setSelectedBoard] = useState<Object>({});
  const [isBoardFormVisible, setIsBoardFormVisible] = useState<boolean>(true);
  const [cards, setCards] = useState<object[]>([]);
  const [newCard, setNewCard] = useState<object>({});
  const [newBoard, setNewBoard] = useState<object>({});

  useEffect(() => {
    updateBoardsList();
  }, []);

  useEffect(() => {
    console.log("hi");
    if (selectedBoard["id"] === undefined) {
      return;
    }
    axios
      .get(
        `${kBaseUrl}/boards/${selectedBoard["id"]}/cards`,
        selectedBoard["id"]
      )
      .then((response) => {
        console.log(response.data);
        setCards(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectedBoard]);

  useEffect(() => {
    if (selectedBoard["id"] === undefined) {
      return;
    }
    console.log(newCard);
    axios
      .post(`${kBaseUrl}/boards/${selectedBoard["id"]}/cards`, newCard)
      .then((response) => {
        // Update the individual card in the array
        const newCard = response.data;
        const cardsToUpdate = [...cards, newCard];
        // Set the state with the updated array of cards
        setCards(cardsToUpdate);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [newCard]);

  useEffect(() => {
    if (Object.keys(newBoard).length === 0) {
      return;
    }
    axios
      .post(`${kBaseUrl}/boards`, newBoard)
      .then((response) => {
        updateBoardsList();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [newBoard]);

  const updateBoardsList = () => {
    axios
      .get(`${kBaseUrl}/boards`)
      .then((response) => {
        setBoardsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main>
      <section className="board-container flex items-center justify-center p-5">
        {/* Selected Board  ---------------*/}
        {/* 
          <div id="selected-board" className="min-w-[200px]">
            <h2>Selected Board</h2>
            <section className="selected-board">
              {selectedBoard["title"] ? (
                <p>{selectedBoard["title"]}</p>
              ) : (
                <p>Select a Board from the List!</p>
              )}
            </section>
          </div> */}
        {/* Boards List --------------- */}
        <BoardList
          boardList={boardsData}
          selectedBoard={selectedBoard}
          setSelectedBoard={setSelectedBoard}
        />
        <img alt="lightbulb gif" className="bulb w-[50px]" src={logo} />{" "}
        {/* Create a New Board --------------- */}
        <div id="create-board">
          <section>
            <h2>Create a New Board</h2>{" "}
            <NewBoardForm setNewBoard={setNewBoard} />
            {/* {isBoardFormVisible ? (
              <>
                <NewBoardForm setNewBoard={setNewBoard} />
                <button
                  onClick={() => setIsBoardFormVisible(!isBoardFormVisible)}
                >
                  Hide New Board Form
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsBoardFormVisible(!isBoardFormVisible)}
              >
                Show New Board Form
              </button>
            )} */}
          </section>
        </div>
      </section>

      {/* Displays Selected Board and New Card Form --------------- */}

      {selectedBoard["id"] ? (
        <section className="flex flex-row m-5">
          <Board board={selectedBoard} cards={cards} setCards={setCards} />
          <NewCardForm boardId={selectedBoard["id"]} setNewCard={setNewCard} />
        </section>
      ) : null}
    </main>
  );
};
