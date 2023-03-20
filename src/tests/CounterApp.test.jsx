import { render, screen } from "@testing-library/react";
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
});
