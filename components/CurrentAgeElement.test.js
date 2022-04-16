import { render, screen } from "@testing-library/react";
import CurrentAgeElement from "./CurrentAgeElement";
import "@testing-library/jest-dom";
import moment from "moment";

describe("CurrentAgeElement", () => {
  it.each([["2022-4-16", 26], ["2022-10-27", 26], ["2022-10-28"]])(
    "should render ",
    (dateTime, expectedAge) => {
      render(<CurrentAgeElement todayAsMoment={moment(dateTime)} />);

      const howOldAmIElement = screen.findByText(`years old as of today.`);
      expect(howOldAmIElement).toHaveTextContent(expectedAge);
    }
  );
});
