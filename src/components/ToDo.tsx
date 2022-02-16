import React from "react";
import { useRecoilState } from "recoil";
import { Categories, categoryState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDoList from "./ToDoList";

const ToDo = () => {
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <>
      <h1>To-dos</h1>
      <CreateToDo />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <ToDoList />
    </>
  );
};

export default ToDo;
