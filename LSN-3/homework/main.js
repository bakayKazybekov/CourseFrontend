for (let i = 1; i <= 100; i++) {
  console.log(i);
}


for (let i = 11; i <= 33; i++) {
  console.log(i);
}


for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}

console.log(sum);


let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}


let array2 = [1, 2, 3, 4, 5];
let result = 0;
for (let i = 0; i < array2.length; i++) {
  result += array2[i]
}

console.log(result);

const obj = {
  green: 'зеленый',
  red: 'красный',
  blue: 'голубой',
}
for (let key in obj) {
  console.log(key, obj[key])
}


let obj2 = {
  Коля: '200',
  Вася: '300',
  Петя: '400',
}
for (let key in obj2) {
  console.log(key + ' - зарплата ' + obj2[key] + ' долларов');
}


let array3 = [2, 5, 9, 15, 0, 4];
for (let i = 0; i < array3.length; i++) {
  if (3 < array3[i] && array3[i] < 10) {
    console.log(array3[i])
  }
}


let array4 = [5, 7, -3, 5, -6, -2];
let arrayMultiply = 0;
for (let i = 0; i < array4.length; i++) {
  if (array4[i] > 0) {
    arrayMultiply += array4[i]
  }
}

console.log(arrayMultiply);


let array5 = [1, 2, 5, 9, 4, 13, 4, 10];
for (let i = 0; i < array5.length; i++) {
  if (array5[i] === 4) {
    console.log('Есть!')
    break
  }
}

let array6 = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < array6.length; i++) {
  if (array6[i][0] === 1 || array6[i][0] === 2 || array6[i][0] === 5) {
    console.log(array6[i]);
  }
}

let array7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let array7Result = '-';
for (let i = 0; i < array7.length; i++) {
  array7Result += array7[i];
  array7Result += '-';
}
console.log(array7Result);


let weekArray = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
for (let i = 0; i < weekArray.length; i++) {
  if (i === 0 || i ===1 || i === 2 || i === 3 || i === 4) {
    console.log(weekArray[i]);
  } else if (i === 5) {
    console.log(weekArray[i] + 'как сделать жирный шрифт');
  } else if (i === 6) {
    console.log(weekArray[i] + 'как сделать жирный шрифт');
  }
}


let weekArray2 = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
for (let i = 0; i < weekArray2.length; i++) {
  i === 0 ? console.log(weekArray2[i]) : i === 1 ? console.log(weekArray2[i] + ' как сделать текст курсивным') : i === 2 || i === 3 || i === 4 || i === 5 || i === 6 ? console.log(weekArray2[i]) : console.log('Error')
}

 
let n = 1000;
let numIter = 0;

while (n >= 50) {
  n /= 2;
  numIter++;
}

console.log(n);
console.log(numIter);
