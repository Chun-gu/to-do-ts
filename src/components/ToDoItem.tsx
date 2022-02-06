import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

const ToDoItem = ({ id, text, category }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);

  const changeCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    console.log(name);
    setToDos((prevToDos) => {
      return prevToDos.map((toDo) =>
        toDo.id === id ? { ...toDo, category: name as IToDo["category"] } : toDo
      );
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== "TO_DO" && (
        <button name={"TO_DO"} onClick={changeCategory}>
          To-do
        </button>
      )}
      {category !== "DOING" && (
        <button name={"DOING"} onClick={changeCategory}>
          Doing
        </button>
      )}
      {category !== "DONE" && (
        <button name={"DONE"} onClick={changeCategory}>
          Done
        </button>
      )}
    </li>
  );
};

export default ToDoItem;
