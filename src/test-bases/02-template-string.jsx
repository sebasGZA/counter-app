//Template strings

const firstName = "Sebas";
const lastName = "Gomez";

// const fullName = firstName + " " + lastName;
const fullName = `${firstName} ${lastName}`;

console.log(fullName);

const getSaludo = (name) => {
  return `Hello ${name}`;
};

console.log(`This is a text: ${getSaludo(fullName)}`);
