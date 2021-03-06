import { toDoSelector } from "../atoms";
import { useRecoilValue } from "recoil";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);

  return (
    <>
      {toDos?.map((toDo) => (
        <ToDoItem key={toDo.id} {...toDo} />
      ))}
    </>
  );
};

export default ToDoList;
