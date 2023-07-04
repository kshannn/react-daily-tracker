import { render, screen } from "@testing-library/react";
import ProgressTracker from "./ProgressTracker";
import useHabitContext from "../context/HabitContext";
import { Habit } from "../App";

jest.mock("../context/HabitContext"); // Mock the habit context

describe("ProgressTracker", () => {
  beforeEach(() => {
    (useHabitContext as jest.Mock).mockReturnValue({
      habitList: [
        {
          id: 1,
          name: "Habit 1",
          progress: [
            { day: "Monday", checked: true },
            { day: "Tuesday", checked: true },
            { day: "Wednesday", checked: false },
          ],
        },
        {
          id: 2,
          name: "Habit 2",
          progress: [
            { day: "Monday", checked: true },
            { day: "Tuesday", checked: true },
            { day: "Wednesday", checked: true },
          ],
        },
      ] as Habit[],
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the correct message when no habits are completed", () => {
    (useHabitContext as jest.Mock).mockReturnValue({ habitList: [] });
    render(<ProgressTracker />);
    const message = screen.getByText(`Let's start growing flowers!`);
    expect(message).toBeInTheDocument();
  });

  it("should render the correct message when some habits are completed", () => {
    (useHabitContext as jest.Mock).mockReturnValue({
      habitList: [
        {
          id: 1,
          name: "Habit 1",
          progress: [{ day: "Monday", checked: true }],
        },
        {
          id: 2,
          name: "Habit 2",
          progress: [{ day: "Monday", checked: true }],
        },
      ],
    });
    render(<ProgressTracker />);
    const message = screen.getByText(`Awesome! You've 1 flower(s)!`);
    expect(message).toBeInTheDocument();
  });

  it("should render the correct message when all habits are completed", () => {
    (useHabitContext as jest.Mock).mockReturnValue({
      habitList: [
        {
          id: 1,
          name: "Habit 1",
          progress: [
            { day: "Monday", checked: true },
            { day: "Tuesday", checked: true },
            { day: "Wednesday", checked: true },
            { day: "Thursday", checked: true },
            { day: "Friday", checked: true },
            { day: "Saturday", checked: true },
            { day: "Sunday", checked: true },
          ],
        },
        {
          id: 2,
          name: "Habit 2",
          progress: [
            { day: "Monday", checked: true },
            { day: "Tuesday", checked: true },
            { day: "Wednesday", checked: true },
            { day: "Thursday", checked: true },
            { day: "Friday", checked: true },
            { day: "Saturday", checked: true },
            { day: "Sunday", checked: true },
          ],
        },
      ],
    });
    render(<ProgressTracker />);
    const message = screen.getByText(
      `Congratulations! All your flowers have grown!`
    );
    expect(message).toBeInTheDocument();
  });
});
