import styled from "styled-components";
import "./App.css";
import { HabitContext } from "./context/HabitContext";
import { useEffect, useMemo, useState } from "react";
import Days from "./components/Days";
import HabitsContainer from "./components/HabitsContainer";
import CheckboxContainer from "./components/CheckboxContainer";
import ProgressContainer from "./components/ProgressContainer";
import ProgressTracker from "./components/ProgressTracker";
import DailyHabitHeader from "./components/DailyHabitHeader";
import ResetButton from "./components/ResetButton";
import { defaultHabitList } from "./constants";

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const GridContainer = styled.section`
  width: 75%;
  min-width: 992px;
  max-width: 1150px;
  height: fit-content;
  background-color: #ffffff;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: 200px 70px auto;
  box-shadow: #e2cce4 1px 1px 10px;
`;

export type Progress = {
  day: string;
  checked: boolean;
};

export type Habit = {
  id: number;
  name: string;
  progress: Progress[];
};

function App() {
  const [habitList, setHabitList] = useState<Habit[]>(defaultHabitList);

  useEffect(() => {
    if (localStorage.getItem("habit_progress_tracker")) {
      const stored: any = localStorage.getItem("habit_progress_tracker");
      setHabitList(JSON.parse(stored));
    }
  }, []);

  const habitContextValue = useMemo(
    () => ({ habitList, setHabitList }),
    [habitList, setHabitList]
  );

  return (
    <Container>
      <HabitContext.Provider value={habitContextValue}>
        <GridContainer>
          <ProgressTracker />
          <ProgressContainer />
          <DailyHabitHeader />
          <Days />
          <HabitsContainer />
          <CheckboxContainer />
        </GridContainer>
        <ResetButton />
      </HabitContext.Provider>
    </Container>
  );
}

export default App;
