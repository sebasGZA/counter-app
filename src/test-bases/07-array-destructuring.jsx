//Array destructuring

const people = ["Goku", "Vegeta", "Trunks"];

const [, p2, p3] = people;

console.log(p2);
console.log(p3);

const returnArray = () => {
  return ["abc", 123];
};

const [text, numbers] = returnArray();
console.log(text, numbers);

const useState = (value) => {
  return [
    value,
    () => {
      console.log(value);
    },
  ];
};

const [person, setPerson] = useState("Goku");
console.log(person);
setPerson();
