import { styled } from "styled-components";
import useHabitContext from "../context/HabitContext";
import { defaultHabitList } from "../constants";

const ResetBtn = styled.button`
  width: fit-content;
  background: #fccece;
  border: none;
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 8px;

  &:hover,
  &:visited {
    cursor: pointer;
    background: #faa5a5;
    color: #fffeff;
  }
`;

const ResetButton = () => {
  const { setHabitList }: any = useHabitContext();

  const resetAll = () => {
    localStorage.removeItem("habit_progress_tracker");
    setHabitList([...defaultHabitList]);
  };

  return <ResetBtn onClick={resetAll}>Reset</ResetBtn>;
};

export default ResetButton;
