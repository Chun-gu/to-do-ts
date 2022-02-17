import CategorySelection from "./CategorySelection";
import CreateToDo from "./CreateToDo";
import ToDoList from "./ToDoList";

const ToDo = () => {
  return (
    <>
      <h1>To-dos</h1>
      <CreateToDo />
      <CategorySelection />
      <ToDoList />
    </>
  );
};

export default ToDo;
