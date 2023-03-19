import heroes from "../data/heroes";

const getHeroById = (id) => heroes.find((hero) => hero.id === id);

const getHeroByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);

export { getHeroById, getHeroByOwner };
