import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe("Tests in <FirstApp/>", () => {
  const title = "Hello, I'm Sebastian";

  test("should make match with snapshot", () => {
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test("should show title into a h1 tag", () => {
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByText(title)).toBeTruthy();

    const h1 = container.querySelector("h1");

    expect(h1.innerHTML).toContain(title);
    expect(getByTestId("test-title")).toBeTruthy();
    expect(getByTestId("test-title").innerHTML).toBe(title);
  });

  test("should show subtitle send by props", () => {
    const subtitle = "I'm a subtitle";
    const { getAllByText } = render(
      <FirstApp title={title} subTitle={subtitle} />
    );

    // expect(getByText(subtitle)).toBeTruthy();
    expect(getAllByText(subtitle)).toBeTruthy();
    expect(getAllByText(subtitle).length).toBe(2);
  });
});
