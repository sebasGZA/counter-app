import { getActiveUser, getUser } from "../../test-bases/05-functions";

describe("Tests into 05-functions", () => {
  test("getUser must return an object", () => {
    const testUser = {
      uid: "13213",
      username: "TheKing123",
    };

    const user = getUser();
    expect(user).toEqual(testUser);
  });

  test("getActiveUser must return an object", () => {
    const name = "Sebastian";

    const user = getActiveUser(name);
    expect(user).toStrictEqual({
      uid: "ASDSAD5",
      username: name,
    });
  });
});
