import { useEffect, useState } from "react";
import { styled } from "styled-components";
import useHabitContext from "../context/HabitContext";
import { Habit, Progress } from "../App";
import { week } from "../constants";

const Container = styled.section`
  background-color: #fff0f0;
  grid-column: span 2;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
`;

const ProgressTracker = () => {
  const { habitList = [] }: any = useHabitContext();
  const [totalCompleted, setTotalCompleted] = useState(0);

  useEffect(() => {
    const totalChecked = habitList.reduce((acc: any, habit: Habit) => {
      habit.progress.forEach((item: Progress) => {
        if (item.checked) {
          acc[item.day] = (acc[item.day] || 0) + 1;
        }
      });
      return acc;
    }, {});

    if (Object.keys(totalChecked).length) {
      const totalCompleted_ = Object.keys(totalChecked).reduce(
        (acc: number, day: string) => {
          if (totalChecked[day] === habitList.length) {
            acc += 1;
          }
          return acc;
        },
        0
      );
      setTotalCompleted(totalCompleted_);
    } else {
      setTotalCompleted(0);
    }
  }, [habitList]);

  const renderMessage = () => {
    if (!totalCompleted) {
      return `Let's start growing flowers!`;
    } else if (totalCompleted < week.length) {
      return `Awesome! You've ${totalCompleted} flower(s)!`;
    } else {
      return `Congratulations! All your flowers have grown!`;
    }
  };

  return <Container>{renderMessage()}</Container>;
};

export default ProgressTracker;
