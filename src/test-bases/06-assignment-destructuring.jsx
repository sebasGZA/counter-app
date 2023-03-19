//destructuring assignment

const person = {
  age: 45,
  name: "Tony",
  alias: "IronMan",
};

// const { age, name: name2, password } = person;

// console.log(person.age);
// console.log(person.name);
// console.log(person.password);
// console.log(age, name2, password);

const useContext = ({ age, name, alias, range = "Captain" }) => {
  //   console.log({ age, name, password, range });
  return {
    alias,
    years: age,
    coords: {
      lat: 12.23123,
      lng: 35.21321,
    },
  };
};

const {
  alias,
  years,
  coords: { lat, lng },
} = useContext(person);

console.log(alias, years);
console.log(lat, lng);
