import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

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
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={changeCategory}>
          To-do
        </button>
      )}
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={changeCategory}>
          Doing
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={changeCategory}>
          Done
        </button>
      )}
    </li>
  );
};

export default ToDoItem;
