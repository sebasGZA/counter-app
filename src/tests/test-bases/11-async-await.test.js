import { getImage } from "../../test-bases/11-async-await";

describe("Tests into 11-async-await", () => {
  test("getImage shoud return and url ", async () => {
    const url = await getImage();
    expect(typeof url).toBe("string");
  });
});
