import { toDoSelector, toDoState } from "../atoms";
import { useRecoilValue } from "recoil";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const [toDos, doings, dones] = useRecoilValue(toDoSelector);

  return (
    <>
      <h2>To Do</h2>
      <ul>
        {toDos.map((toDo) => (
          <ToDoItem key={toDo.id} {...toDo} />
        ))}
      </ul>
      <h2>Doing</h2>
      <ul>
        {doings.map((toDo) => (
          <ToDoItem key={toDo.id} {...toDo} />
        ))}
      </ul>
      <h2>Done</h2>
      <ul>
        {dones.map((toDo) => (
          <ToDoItem key={toDo.id} {...toDo} />
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
