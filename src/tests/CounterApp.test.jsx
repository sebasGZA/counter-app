import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../CounterApp";

describe("Tests in <CounterApp/>", () => {
  const value = 100;
  const { container } = render(<CounterApp value={value} />);

  test("should make match with snapshot", () => {
    expect(container).toMatchSnapshot();
  });

  test("should show the init value", () => {
    render(<CounterApp value={value} />);

    expect(screen.getByText(value)).toBeTruthy();
    expect(
      screen.getByRole("heading", {
        level: 2,
      }).innerHTML
    ).toContain(value.toString());
  });

  test("should increment + 1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("101")).toBeTruthy();
  });

  test("should decrement - 1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("99")).toBeTruthy();
  });

  test("should reset value to 100", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("-1"));
    // fireEvent.click(screen.getByText("Reset"));

    fireEvent.click(
      screen.getByRole("button", {
        name: "btn-reset",
      })
    );

    expect(screen.getByText(value)).toBeTruthy();
  });
});
