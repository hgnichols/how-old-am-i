import { render } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe.skip("Home", () => {
  it("renders home", () => {
    render(<Home />);
  });
});
