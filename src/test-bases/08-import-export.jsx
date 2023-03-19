// import heroes, { owners } from "./data/heroes";
// import heroes, { owners } from "./data/heroes";
import heroes from "./data/heroes";
// const getHeroById = (id) => {
//   return heroes.find((heroe) => {
//     if (heroe === id) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// };
const getHeroById = (id) => heroes.find((hero) => hero.id === id);

// console.log(getHeroById(2));

const getHeroByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroByOwner(owners[1]));

export { getHeroById, getHeroByOwner };
