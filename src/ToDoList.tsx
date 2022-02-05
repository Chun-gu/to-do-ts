import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

const ToDoList = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<IForm>();

  const onSubmit = (data: IForm) => {
    console.log(data);
    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        {...register("toDo", { required: "필수입력입니다." })}
      />
      <span>{errors?.toDo?.message}</span>
      <button>추가</button>
    </form>
  );
};

export default ToDoList;
