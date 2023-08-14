function func(a, b) {
  let res = a + b;
  console.log(res);
}

let func1 = func;
let f = func1;
// f(543, 2);


function param (num, str, massage, arr) {
  console.log(num, str, massage, arr);
}

// param(123, 'jfosal', 'hello', [2, 4, 'fkfsa'])


function param2 (obj) {
  console.log(obj)
}


function calc1 (a = 0, b = 0) {
  console.log(a + b);
}
// calc1(5, 849);

function calc2 (n1, n2) {
  let str = ' is result';
  let sum = n1 + n2;
  let res = sum + str;
  return res;
}

// let result1 = calc2;
// let result = calc2(5, 5);
console.log(result);

function func3 (num) {
  if (num === 10) {
    return 'Number = 10';
  } else {
    return 'Number - 10'
  }
}
