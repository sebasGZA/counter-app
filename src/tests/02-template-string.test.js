import { getGreeting } from "../test-bases/02-template-string";

describe("Test into 02-template-string", () => {
  test('getGreeting must return "Hello Sebastian"', () => {
    const name = "Sebastian";
    const message = getGreeting(name);

    expect(message).toBe(`Hello Sebastian`);
  });
});
