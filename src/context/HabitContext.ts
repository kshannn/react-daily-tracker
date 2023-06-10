import { createContext, useContext } from "react";

export const HabitContext = createContext({});

const useHabitContext = () => {
  return useContext(HabitContext);
};

export default useHabitContext;
