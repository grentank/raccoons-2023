// const array = [];
// const object = {};

// object.age = 25;
// array.age = 25;

// object[1] = 'first index';
// array[1] = 'first index';
// console.log(array.length, object.length);

const names = [
  'Alex',
  'Bob',
  'Charlie',
  'Dave',
  'Erin',
  'Frank',
  'Geroge',
  'Harry',
  'Ivan',
  'Jacob',
];

// const returnValue = names.unshift('John');
// console.log(returnValue);
// console.log(names);

// const returnValue = names.shift();
// console.log(returnValue);
// console.log(names);

// const returnValue = names.splice(3, 2);
// console.log(returnValue);
// console.log(names);

// const returnValue = names.slice(); // shallow copy
// console.log(returnValue);
// console.log(names);
// console.log(names === returnValue);

// const fs = require('fs');

// fs.writeFileSync('./res.txt', names.join(', '), 'utf8');
// const fileData = fs.readFileSync('./app.js', 'utf8');
// const arrayOfContents = fileData.split('\n//');
// console.log(arrayOfContents);

// const returnValue = names.reverse();
// console.log(returnValue);
// console.log(names);
// console.log(returnValue === names);

// const returnValue = names.toReversed();
// console.log(returnValue);
// console.log(names);
// console.log(returnValue === names);

// const charlieIndex = names.indexOf('Charlie');
// const harryIndex = names.indexOf('Harry');
// const namesPart = names.slice(charlieIndex, harryIndex + 1);
// names.splice(
//   charlieIndex,
//   harryIndex - charlieIndex + 1,
//   ...namesPart.reverse(), // spread operator
// );
// console.log(names);

// SHALLOW COPYING ARRAYS

// const namesCopy = names.slice();
// const namesCopy = names.toReversed().toReversed();
// const namesCopy = [...names];
// console.log(namesCopy);
// console.log(namesCopy === names);

// CALLBACK METHODS

// function containsLetterE(name) {
//   return name.includes('e');
// }

// function containsLetterE(name, index) {
//     if (name.includes('e') || index % 3 === 0) return true;
//     else return false;
//   }

// const filteredNames = names.filter((name) => name.includes('e'));
// console.log(filteredNames);

const persons = [
  { name: 'Alex', age: 25 },
  { name: 'Bob', age: 15 },
  { name: 'Charlie', age: 33 },
  { name: 'Dave', age: 17 },
  { name: 'Erin', age: 55 },
  { name: 'Frank', age: 23 },
  { name: 'George', age: 43 },
];

const salary = [101, 102, 103, 104, 105, 106, 107];

// const adults = persons.filter((person) => person.age >= 18);
// console.log(adults);

// const erin = persons.find((el) => el.name === 'Erin');
// console.log(erin.age);

// const newNames = persons.map((person) => person.name);
// console.log(newNames);

const personsWithSalary = persons.map((person, index) => ({
  ...person,
  salary: salary[index],
}));
// console.log(personsWithSalary);

// const totalSalary = personsWithSalary.reduce((acc, person) => acc + person.salary, 0);
// console.log(totalSalary);

// personsWithSalary.forEach((el, index) => {
// ????
// })

// DEEP COPYING ARRAYS
// | SHALLOW COPY ---->>[...persons];
// const personsCopy = JSON.parse(JSON.stringify(persons));// <<--- DEEP COPY
// console.log(persons === personsCopy);
// personsCopy.find((el) => el.name === 'Dave').name = 'NOT DAVE';
// console.log(persons);
// console.log(personsCopy);

// const namesCopy = [...names];
// namesCopy[3] = 'NOT DAVE';
// // console.log(namesCopy);
// console.log(names);
