//Functions

// function greet(name) {
//   return `Hello , ${name}`;
// }

// const greet = function(name) {
//   return `Hello , ${name}`;
// }

const greet = (name) => `Hello ${name}`;

console.log(greet("goku"));

const getUser = () => ({
  uid: "13213",
  username: "TheKing123",
});

console.log(getUser());

// function getActiveUser(name) {
//   return {
//     uid: "ASDSAD5",
//     username: name,
//   };
// }

const getActiveUser = (name) => ({
  uid: "ASDSAD5",
  username: name,
});

const activeUser = getActiveUser("Sebas");

console.log(activeUser);
