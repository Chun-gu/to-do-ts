import { toDoState } from "../atoms";
import { useRecoilValue } from "recoil";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const toDos = useRecoilValue(toDoState);

  return (
    <ul>
      {toDos.map((toDo) => (
        <ToDoItem key={toDo.id} {...toDo} />
      ))}
    </ul>
  );
};

export default ToDoList;
