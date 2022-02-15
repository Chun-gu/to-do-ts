import React from "react";
import { useRecoilState } from "recoil";
import { categoryState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDoList from "./ToDoList";

const ToDo = () => {
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };
  return (
    <>
      <h1>To-dos</h1>
      <CreateToDo />
      <select value={category} onInput={onInput}>
        <option value="TO_DO">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      <ToDoList />
    </>
  );
};

export default ToDo;
