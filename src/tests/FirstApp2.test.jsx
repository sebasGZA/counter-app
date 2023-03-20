import { render, screen } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe("Tests in <FirstApp/>", () => {
  const title = "Hello, I'm Sebastian";
  const { container } = render(<FirstApp title={title} />);

  test("should make match with snapshot", () => {
    expect(container).toMatchSnapshot();
  });

  test("should show message 'Hello, I'm Sebastian'", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("should show title into a h1 tag", () => {
    render(<FirstApp title={title} />);

    expect(
      screen.getByRole("heading", {
        level: 1,
      }).innerHTML
    ).toContain(title);
  });

  test("should show the subtitle sent by props", () => {
    const subtitle = "I'm a subtitle";
    render(<FirstApp title={title} subTitle={subtitle} />);

    expect(screen.getAllByText(subtitle)).toBeTruthy();
    expect(screen.getAllByText(subtitle).length).toBe(2);
  });
});
