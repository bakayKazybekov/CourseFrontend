let number1 = 0;
let number2 = -1;
let number3 = 4;

console.log(number3, number1, number2)


let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');

num1 > num2 ? console.log(num1) : console.log(num2);


let num3 = -6;
let num4 = -3;
let num5 = -6;
let num6 = 0;
let num7 = -1;

if (num3 > num4 && num3 > num5 && num3 > num6 && num3 > num7) {
  console.log(num3);
} else if (num4 > num3 && num4 > num5 && num4 > num6 && num4 > num7) {
  console.log(num4);
} else if (num5 > num4 && num5 > num3 && num5 > num6 && num5 > num7) {
  console.log(num5);
} else if (num6 > num4 && num6 > num5 && num6 > num3 && num6 > num7) {
  console.log(num6);
} else if (num7 > num4 && num7 > num5 && num7 > num6 && num7 > num3) {
  console.log(num7);
}
// 'num5 will never be greater than num3' не понял(


let x = 10;
let y = 7;

x > y ? console.log('x больше, чем y') : y > x ? console.log('x не больше, чем y') : console.log('Error');


let checkNumber = prompt('Введите число');

if (checkNumber % 2 === 0) {
  console.log("Число " + checkNumber + " четное")
} else {
  console.log("Число " + checkNumber + " нечетное")
}

let check = prompt('Введите целое число');

if (check > 0 && check.length === 1) {
  console.log("Число " + check + " однозначное положительное")
} else if (check < 0 && check.length === 2) {
  console.log("Число " + check + " однозначное отрицательное")
} else if (check > 0 && check.length === 2) {
  console.log("Число " + check + " двузначное положительное")
} else if (check < 0 && check.length === 3) {
  console.log("Число " + check + " двузначное отрицательное")
} else if (check > 0 && check.length === 3) {
  console.log("Число " + check + " трехзначное положительное")
} else if (check < 0 && check.length === 4) {
  console.log("Число " + check + " трехзначное отрицательное")
} else {
  console.log("Ошибка")
}