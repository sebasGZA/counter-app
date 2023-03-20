import { returnArray } from "../../test-bases/07-array-destructuring";

describe("Tests into 07-array-destructuring", () => {
  test("Should return a string and a number", () => {
    const [letters, numbers] = returnArray();

    expect(letters).toBe("ABC");
    expect(numbers).toBe(123);

    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");

    expect(letters).toEqual(expect.any(String));
  });
});
