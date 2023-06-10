import Checkbox from "@mui/material/Checkbox";
import { styled } from "styled-components";
import useHabitContext from "../context/HabitContext";
import { Habit, Progress } from "../App";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme/buttonTheme";
import { TODAY, daysLookup } from "../constants";

const Container = styled.section`
  background-color: #fff0f0;
  grid-column: span 7;
`;
const CheckboxRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 60px;
`;

const CheckboxItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &.today {
    background-color: #ffe0e0;
  }
`;

const CheckboxContainer = () => {
  const { habitList = [], setHabitList }: any = useHabitContext();

  const updateCheckbox = (id: number, i: number) => {
    const updated = habitList.map((habit: Habit) => {
      if (id === habit.id) {
        const updatedProgress = habit.progress.map(
          (progress: Progress, index: number) => {
            if (index === i) {
              return {
                ...progress,
                checked: !progress.checked,
              };
            }
            return progress;
          }
        );
        return {
          ...habit,
          progress: updatedProgress,
        };
      }
      return habit;
    });
    setHabitList(updated);
    localStorage.setItem("habit_progress_tracker", JSON.stringify(updated));
  };

  return (
    <Container>
      {habitList.length &&
        habitList.map(
          ({ progress, id }: { progress: Progress[]; id: number }) => (
            <CheckboxRow key={id}>
              {progress.map(
                (
                  { day, checked }: { day: string; checked: boolean },
                  index: number
                ) => (
                  <ThemeProvider theme={theme}>
                    <CheckboxItemWrapper
                      className={daysLookup[TODAY] === day ? "today" : ""}
                    >
                      <Checkbox
                        key={day}
                        checked={checked}
                        onChange={() => {
                          updateCheckbox(id, index);
                        }}
                        disableRipple={true}
                      />
                    </CheckboxItemWrapper>
                  </ThemeProvider>
                )
              )}
            </CheckboxRow>
          )
        )}
    </Container>
  );
};

export default CheckboxContainer;
