import React from "react";
import { styled } from "styled-components";
import useHabitContext from "../context/HabitContext";

const Container = styled.section`
  background-color: #ffcece;
  grid-column: span 2;
  text-align: center;
`;

const HabitItem = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  word-break: break-word;

  &.odd {
    background: #fef0f0;
  }
`;
const HabitsContainer = () => {
  const { habitList = [] }: any = useHabitContext();

  return (
    <Container>
      {habitList.map(({ id, name }: { id: number; name: string }) => (
        <HabitItem key={id} className={id % 2 === 0 ? "even" : "odd"}>
          {name}
        </HabitItem>
      ))}
    </Container>
  );
};

export default HabitsContainer;
