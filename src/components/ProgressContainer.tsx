import { styled } from "styled-components";
import useHabitContext from "../context/HabitContext";
import { daysLookup, week } from "../constants";
import { Habit } from "../App";

const Container = styled.section`
  grid-column: span 7;
  display: grid;
  grid-template-columns: repeat(7, minmax(65px, 1fr));
`;

const ProgressItem = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
`;
const ProgressContainer = () => {
  const { habitList = [] }: any = useHabitContext();

  return (
    <Container>
      {week.map((day: string) => {
        const count = habitList.reduce((acc: number, curr: Habit) => {
          const status = curr.progress.filter(
            (c: any) => c.day === daysLookup[day]
          )[0].checked;

          if (status) {
            acc += 1;
          }
          return acc;
        }, 0);

        const percentageFulfilled = (count / habitList.length) * 100;

        let item: any = "";

        if (percentageFulfilled === 0) {
          item = "sunflower0";
        } else if (percentageFulfilled <= 21) {
          item = "sunflower1";
        } else if (percentageFulfilled > 21 && percentageFulfilled <= 40) {
          item = "sunflower2";
        } else if (percentageFulfilled > 41 && percentageFulfilled <= 60) {
          item = "sunflower3";
        } else if (percentageFulfilled > 61 && percentageFulfilled <= 80) {
          item = "sunflower4";
        } else {
          item = "sunflower5";
        }

        return <ProgressItem src={`images/${item}.png`} key={day} />;
      })}
    </Container>
  );
};

export default ProgressContainer;
