function someFn(arg) {
  return arg ** 3
}
console.log(someFn(4));


function func(num) {
  return num ** 2;
}
console.log(func(7));


function sum(a, b) {
  return a + b;
}
console.log(sum(2, 6));


function operation(a, b, c) {
  return (a - b) / c;
}
console.log(operation(40, 2, 2));


function week(day) {
  if (day === 1) {
    console.log('Понидельник');
  } else if (day === 2) {
    console.log('Вторник');
  } else if (day === 3) {
    console.log('Среда');
  } else if (day === 4) {
    console.log('Четверг');
  } else if (day === 5) {
    console.log('Пятница');
  } else if (day === 6) {
    console.log('Суббота');
  } else if (day === 7) {
    console.log('Воскресенье');
  }
}
week(6);


let arr = [2, 7, 3, 8, 5, 5, 10];

function hasDuplicates(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return true;
    }
  }
    return false;
}
  
if (hasDuplicates(arr)) {
  console.log('да');
} else {
  console.log('нет');
}


let array2 = [2, 7, 3, 8, 5, 10];
let arrayCheck = 0;
for (let i = 0; i < array2.length; i++) {
  if (array2[i] === array2[i - 1]) {
    arrayCheck = 1;
  }
}
if (arrayCheck === 1) {
  console.log('да');
} else {
  console.log('нет')
}


function func2(num1, num2) {
  if (num1 === num2) {
    return true;
  } else {
    return false;
  }
}
console.log(func2(2, 2));


function func3(num1, num2) {
  if (num1 + num2 > 10) {
    return true;
  } else {
    return false;
  }
}

console.log(func3(3, 8));


function func4(num) {
  if (num < 0) {
    return true;
  } else {
    return false;
  }
}
console.log(func4(2));
