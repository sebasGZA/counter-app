import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe("Tests in <FirstApp/>", () => {
  const title = "Hello, I'm Sebastian";

  test("should make match with snapshot", () => {
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test("should show title into a h1 tag", () => {
    const { container, getByText } = render(<FirstApp title={title} />);
    expect(getByText(title)).toBeTruthy();

    const h1 = container.querySelector("h1");
    expect(h1.innerHTML).toContain(title);
  });
});
