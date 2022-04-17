import { render, screen } from "@testing-library/react";
import TimeUntillNextAge from "./TimeUntillNextAge";
import "@testing-library/jest-dom";
import moment from "moment";

describe("TimeUntilNextAge", () => {
  it.each([
    [[2022, 4, 17], "I will turn 27 in 6 months and 10 days."],
    [[2022, 10, 26], "I will turn 27 in 1 days."],
    [[2022, 10, 28], "I will turn 28 in 11 months and 29 days."],
    [[2022, 10, 1], "I will turn 27 in 26 days."],
    [[2022, 9, 26], "I will turn 27 in 1 months."],
    [[2022, 8, 27], "I will turn 27 in 2 months."],
    [[2022, 8, 31], "I will turn 27 in 1 months and 26 days."],
    [[2022, 1, 1], "I will turn 27 in 9 months and 24 days."],
    [[2023, 1, 1], "I will turn 28 in 9 months and 24 days."],
    [[2023, 12, 10], "I will turn 29 in 10 months and 16 days."],
    [[2024, 2, 29], "I will turn 29 in 7 months and 26 days."],
    [[2024, 2, 28], "I will turn 29 in 7 months and 27 days."],
    [
      [2022, 10, 27],
      "I will turn 27 in ...right now! It's yo fucking birthday biiiiiiiiiiiitch.",
    ],
    [
      [2023, 10, 27],
      "I will turn 28 in ...right now! It's yo fucking birthday biiiiiiiiiiiitch.",
    ],
  ])(
    "should render component with $expectedString given $dateTime",
    async (dateTime, expectedString) => {
      var dateTimeAsIso = new Date(dateTime).toISOString();
      render(<TimeUntillNextAge todayAsMoment={moment(dateTimeAsIso)} />);

      const timeUntillNextBirthdayElement = await screen.findByText(
        /I will turn/i
      );
      expect(timeUntillNextBirthdayElement).toHaveTextContent(expectedString);
    }
  );
});
