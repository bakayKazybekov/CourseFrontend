// let allow = prompt('Сколько вам лет?');

// if (allow === '18') {
//   console.log('Вам есть 18');
// } else if (allow > 18) {
//   console.log('Вам больше 18')
// } else {
//   console.log('Вам нет 18');
// }

// allow === '18' ? console.log('Вам есть 18') : allow > 18 ? console.log('Вам больше 18') : console.log('Вам нет 18');

// if (allow === '18' || allow > 18) {
//   console.log('Вам есть 18')
// } else {
//   console.log('Вам нет 18')
// }


// if (!'') {
//   console.log(True);
// } else {
//   console.log(False);
// }

// const isAllow = allow > 18 && allow < 30 || allow > 50;

// if (isAllow) {
//   console.log('True')
// } else {
//   console.log('False')
// }

let login = prompt('Write login');
let password = prompt('Write password')

let userName = 'Admin';
let userPassword = '12345678';

if (login === userName && password === userPassword) {
  alert('Вы авторизовались')
} else {
  alert('Error')
}

console.log1