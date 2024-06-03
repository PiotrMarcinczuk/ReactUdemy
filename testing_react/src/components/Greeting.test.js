import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";
describe("Greeting component", () => {
  test("renders Hello World", () => {
    //Arrange
    render(<Greeting />);

    //Act
    // ... nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World!", {
      exact: false,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'good to see you' if the button was NOT clicked", () => {
    render(<Greeting />);
    const pElement = screen.getByText("It's a good to see you!");
    expect(pElement).toBeInTheDocument();
  });

  test("renders 'Changed!' if the button was clicked", () => {
    //arange
    render(<Greeting />);

    //act
    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl);

    //assert
    const pElement = screen.getByText("Changed!");
    expect(pElement).toBeInTheDocument();
  });
});
