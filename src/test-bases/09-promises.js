import { getHeroById } from "./08-import-export";

export const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);
      if (hero) {
        resolve(hero);
      } else {
        reject(`Heroe id ${id} not found`);
      }
    }, 1000);
  });
};
