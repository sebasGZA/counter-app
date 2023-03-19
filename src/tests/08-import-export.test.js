import { getHeroById, getHeroByOwner } from "../test-bases/08-import-export";

describe("Tests into 08-import-export", () => {
  test("getHeroById should return a hero by an id", () => {
    const id = 1;
    const hero = getHeroById(id);
    expect(hero).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });

  test("getHeroById should return undefined if it does not exist", () => {
    const id = 100;
    const hero = getHeroById(id);
    expect(hero).toBeFalsy();
  });

  test("getHeroByOwner should return heroes by owner", () => {
    const owners = ["DC", "Marvel"];

    const dcHeroes = getHeroByOwner(owners[0]);
    const marvelHeroes = getHeroByOwner(owners[1]);

    expect(dcHeroes).toEqual(dcHeroes.filter((dc) => dc.owner === "DC"));

    expect(marvelHeroes).toEqual(
      marvelHeroes.filter((marvel) => marvel.owner === "Marvel")
    );

    expect(dcHeroes.length).toBe(3);
    expect(marvelHeroes.length).toBe(2);
  });
});
