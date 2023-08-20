import { render, screen } from "@testing-library/react";
// import { Login } from "../../Pages/Login/Login";
import "@testing-library/jest-dom";
import { Contact } from "../Contact";

test("Should load Contact component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
