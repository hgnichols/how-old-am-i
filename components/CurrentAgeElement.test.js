import { render, screen } from "@testing-library/react";
import CurrentAgeElement from "./CurrentAgeElement";
import "@testing-library/jest-dom";
import moment from "moment";
import { MY_BIRTH_DATE } from "../utils/constants";

describe("CurrentAgeElement", () => {
  it.each([
    [[2022, 4, 16], 26],
    [[2022, 10, 27], 27],
    [[2022, 10, 28], 27],
    [[2023, 1, 1], 27],
    [[1995, 10, 26], 0],
    [[1995, 10, 28], 0],
    [[1996, 10, 27], 1],
    [[3000, 10, 26], 1004],
  ])(
    "should render component with $expectedAge given $dateTime",
    async (dateTime, expectedAge) => {
      var dateTimeAsIso = new Date(dateTime).toISOString();
      render(
        <CurrentAgeElement
          todayAsMoment={moment(dateTimeAsIso)}
          myBirthDate={MY_BIRTH_DATE}
        />
      );

      const howOldAmIElement = await screen.findByText(
        /years old as of today./i
      );
      expect(howOldAmIElement).toHaveTextContent(expectedAge);
    }
  );
});
