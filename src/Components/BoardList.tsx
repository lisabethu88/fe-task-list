import React, { useState } from "react";
import { ListGroupItem, ListGroup } from "reactstrap";
import "./BoardList.css";
interface BoardListProps {
  boardList: object[];
  selectedBoard: object;
  setSelectedBoard: React.Dispatch<React.SetStateAction<object>>;
}

export const BoardList = ({
  boardList,
  selectedBoard,
  setSelectedBoard,
}: BoardListProps) => {
  // const [isActive, setIsActive] = useState<boolean>(true);
  const toggleItem = (board: object) => {
    // setIsActive(!isActive);
    setSelectedBoard(board);
  };
  let listItemClass = "list-group-item cursor-pointer";

  return (
    <div id="boards" className="h-full">
      <section>
        <h2>Boards</h2>{" "}
        <ListGroup className="list-group overflow-y-scroll h-[200px] flex flex-col">
          {boardList.length > 0 ? (
            boardList.map((board) => (
              <ListGroupItem
                active={board === selectedBoard}
                onClick={() => toggleItem(board)}
                tag="a"
                className={listItemClass}
              >
                {board["title"]}
              </ListGroupItem>
            ))
          ) : (
            <li>No boards to display</li>
          )}
        </ListGroup>
      </section>
    </div>
  );
};
