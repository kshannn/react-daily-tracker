import { findKey } from "lodash";
import moment from "moment";

export const week = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

export const daysLookup: any = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thur: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};

const listOfHabits: string[] = [
  "Drink Water",
  "Exercise",
  "Eat Proper Meals",
  "Sleep Well",
  "Meditate",
];

export const defaultHabitList: any = listOfHabits.map(
  (habit: string, index: number) => ({
    id: index,
    name: habit,
    progress: [
      {
        day: "Monday",
        checked: false,
      },
      {
        day: "Tuesday",
        checked: false,
      },
      {
        day: "Wednesday",
        checked: false,
      },
      {
        day: "Thursday",
        checked: false,
      },
      {
        day: "Friday",
        checked: false,
      },
      {
        day: "Saturday",
        checked: false,
      },
      {
        day: "Sunday",
        checked: false,
      },
    ],
  })
);

export const TODAY: any = findKey(
  daysLookup,
  (day: string) => day === moment().format("dddd")
);
