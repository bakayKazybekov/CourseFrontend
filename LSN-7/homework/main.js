// N1
const words = ["apple", "banana", "cherry"];
const wordsMap = words.map((e) => {
  console.log([e.length]);
})

// N2
const numbers = [1, 2, 3, 4, 5];
const numbersFilter = numbers.filter((e) => {
  if (e % 2 === 0) {
    console.log(e);
  }
})

// N3
const words2 = ["apple", "banana", "cherry"];
const words2Filter = words2.filter((e) => {
  if (e.includes('a')) {
    console.log(e);
  }
})

// N4
const numbers2 = [8, 12, 5, 20, 3];
const numbers2Find = numbers2.find((e) => {
  if (e > 10) {
    console.log(e);
  }
})

// N5
const fruits = ["apple", "banana"];
fruits.push('pineapple');
console.log(fruits);

// N6
const fruits2 = ["apple", "banana", "cherry"];
fruits2.pop();
console.log(fruits2);

// N7
const fruits3 = ["apple", "banana"];
fruits3.unshift('pineapple');
console.log(fruits3);

// N8
const fruits4 = ["apple", "banana", "cherry"];
fruits4.shift();
console.log(fruits4);

// N9
const numbers3 = [3, 1, 4, 1, 5, 9, 2];
const numbers3Sort = numbers3.sort((a, b) => a - b);
console.log(numbers3Sort);

// N10


// N11
const numbers4 = [1, 2, 3, 4, 5];
numbers4.reverse();
console.log(numbers4);

// N12
const fruits5 = ["apple", "banana", "cherry"];
fruits5.includes('apple') && console.log(fruits5);