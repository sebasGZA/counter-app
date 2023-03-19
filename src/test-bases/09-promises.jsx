import { getHeroById } from "./08-import-export";

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const hero = getHeroById(2);
//     resolve(hero);
//   }, 2000);
// });

// promise
//   .then((hero) => {
//     console.log({ hero });
//   })
//   .catch((err) => {
//     console.warn(err);
//   });

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);
      if (hero) {
        resolve(hero);
      } else {
        reject(`Heroe id ${id} not found`);
      }
    }, 2000);
  });
};

getHeroeByIdAsync(2).then(console.log).catch(console.error);
