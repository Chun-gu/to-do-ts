import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IForm {
  toDoInput: string;
}

const CreateToDo = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);

  const onSubmit = ({ toDoInput }: IForm) => {
    setToDos((prev) => [
      ...prev,
      { id: Date.now(), text: toDoInput, category },
    ]);
    setValue("toDoInput", "");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        {...register("toDoInput", { required: "필수입력입니다." })}
      />
      <span>{errors?.toDoInput?.message}</span>
      <button>추가</button>
    </form>
  );
};

export default CreateToDo;
