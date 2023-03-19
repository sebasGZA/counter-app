import { getHeroeByIdAsync } from "../test-bases/09-promises";

describe("Tests into 09-promises", () => {
  test("getHeroByIdAsync should return a hero", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });

  test("getHeroByIdAsync must generate an error if hero id does not exist", (done) => {
    const id = 100;

    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toBeFalsy();
        done();
      })
      .catch((err) => {
        expect(err).toBe(`Heroe id ${id} not found`);
        done();
      });
  });
});
