import React from "react";
import { styled } from "styled-components";

const Container = styled.section`
  background-color: #ffa5a5;
  color: #fffeff;
  grid-column: span 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-weight: 500;
`;

const DailyHabitHeader = () => {
  return <Container>DAILY HABIT</Container>;
};

export default DailyHabitHeader;
