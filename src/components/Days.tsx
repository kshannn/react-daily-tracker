import { styled } from "styled-components";
import { TODAY, week } from "../constants";

const Day = styled.section`
  background-color: #ffd280;
  color: #fffcf8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;

  &.today {
    background-color: #ffc559;
  }
`;
const Days = () => {
  return (
    <>
      {week.map((day: string) => (
        <Day key={day} className={TODAY === day ? "today" : ""}>
          {day.toUpperCase()}
        </Day>
      ))}
    </>
  );
};

export default Days;
