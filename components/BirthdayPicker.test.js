import { render, screen } from "@testing-library/react";
import BirthdayPicker from "./BirthdayPicker";
import "@testing-library/jest-dom";

describe("BirthDayPicker", () => {
  it("Renders BirthDayPicker", () => {
    render(<BirthdayPicker />);
  });
});
