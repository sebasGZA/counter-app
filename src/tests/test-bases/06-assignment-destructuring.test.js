import { usContext } from "../../test-bases/06-assignment-destructuring";

describe("Tests into 06-assignment-destructuring", () => {
  test("usContext should return an object", () => {
    const age = 45;
    const alias = "Iron Man";
    const heroTest = usContext({ age, alias });

    expect(heroTest).toEqual({
      years: age,
      alias,
      coords: {
        lat: 12.23123,
        lng: 35.21321,
      },
    });

    expect(heroTest.years).toBe(age);
    expect(heroTest.alias).toBe(alias);

    expect(typeof heroTest.years).toBe("number");
    expect(typeof heroTest.alias).toBe("string");
  });
});
