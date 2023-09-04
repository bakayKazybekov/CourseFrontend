//// N1
const numbers = [1, 2, 3, 4, 5];
const join = numbers.join(', ');
// console.log(join);

//// N2
const fruits = ["apple", "banana", "cherry", "date", "fig"];
fruits.splice(2, 2);
// console.log(fruits);

//// N3
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concat = array1.concat(array2);
// console.log(concat);

//// N4
const words = ["apple", "banana", "cherry"];
const wordsMap = words.map((i) =>  i.length)
// console.log(wordsMap);

//// N5
const inputString = "Hello World";
const lowerCase = inputString.toLowerCase();
// console.log(lowerCase);


//// N6
const inputString2 = "Hello World";
const upperCase = inputString2.toUpperCase();
// console.log(upperCase);

//// N7
const fruits2 = ["apple", "banana", "cherry"];
const index = fruits2.indexOf("apple");
// console.log(index);

//// N8
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach((i) => i.length);
// console.log(numbers2);

//// N9
const stringWithWhitespace = " Hello, World! ";
const deleteSpace = stringWithWhitespace.trim();
// console.log(stringWithWhitespace)
// console.log(deleteSpace);

//// N10
const fruits3 = ["apple", "banana", "cherry"];
// if (fruits3.includes("cherry")) {
//   console.log(true);
// } else {
//   console.log(false)
// }

//// N11
const sentence = "Hello, how are you?";
const split = sentence.split(' ');
// console.log(split);

//// N12
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flatArr = nestedArray.flat(Infinity);
// console.log(flatArr);

//// N13
const string1 = "Hello";
const string2 = "World";
const strConcat = string1.concat(string2);
// console.log(strConcat);

//// N14
const numbers3 = [1, 2, 3, 4, 5];
// console.log(numbers3.length);

//// N15
const csvData = "John,Doe,30,Engineer";
const dataSplit = csvData.split(',');
// console.log(dataSplit);

//// N16
const students = [ { 
  name: "Alice", 
  subject: "Math" 
}, { 
  name: "Bob", 
  subject: "Physics" 
}, { 
  name: "Charlie", 
  subject: "Math" 
}, { 
  name: "David", 
  subject: "Chemistry" 
}, ];
const studentNames = students.map((i) => {
  // console.log(i.name)
});

const lowerCaseNames = students.map((i) => {
  // console.log(i.name.toLowerCase())
});

const mathFilt = students.filter((i) => i.subject === "Math" && i);
// console.log(mathFilt);

const mathStudentNames = students.filter((i) => {
  if (i.subject === "Math") {
    return i.name;
  }
});
console.log(mathStudentNames);

// const namesJoin = mathFilt.join(', ');
// console.log(namesJoin);