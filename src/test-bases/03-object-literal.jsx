//Object literals => copy reference
const person = {
  address: {
    city: "New York",
    lat: 14.3232,
    lng: 34.9233321,
    zip: 55321321,
  },
  age: 45,
  lastName: "Stark",
  name: "Tony",
};

console.log(person);
const person2 = { ...person };
person2.name = "Peter";

console.log(person);
console.log(person2);
