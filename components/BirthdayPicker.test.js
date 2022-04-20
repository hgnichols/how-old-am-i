import { render, screen } from "@testing-library/react";
import BirthdayPicker from "./BirthdayPicker";
import "@testing-library/jest-dom";
import moment from "moment";
import { MY_BIRTH_DATE } from "../utils/constants";

describe("BirthDayPicker", () => {
  it("Renders BirthDayPicker", () => {
    render(<BirthdayPicker />);
  });
});
