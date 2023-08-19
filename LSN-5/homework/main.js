let obj = {
  a: {
    b: 3,
  },
}
console.log(obj);


let obj2 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
}
delete obj2.a;
delete obj2.b;
console.log(obj2);


let obj3 = {};
for (let i = 0; i < 5; i++) {
  obj3['age' + i] = i;
}
console.log(obj3);


let obj4 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
}
let result = obj4['a'] + obj4['c'];
console.log(result);


let obj5 = {
  test: 1, 
  test1: 2, 
  test3: 3 
}

let obj6 = { 
  test4: 4, 
  test5: 5, 
  test6: 6 
}

let obj7 = { 
  test: 1, 
  test1: 2, 
  test3: 3 
}

let object = {
  ...obj5,
  ...obj6,
  ...obj7,
}
console.log(object);

function getObj() {
  return this;
}

let city1 = {
  name: 'Барселона',
  population: '1,62 млн',
  getName () {
    return this.name;
  },
  // exportStr () {
  //   for (let key in this) {
  //     if (key === ['name']) {
  //       return city1.key + ' = ' + city1.name;
  //     }
  //   }
  // },
  getCity () {
    return getObj();
  }
}
console.log(city1.getCity());
// console.log(city1.exportStr());


let city2 = {
  name: 'Мадрид',
  population: '3,2 млн',
  getName () {
    return this.name;
  },
  getCity () {
    return getObj();
  }
}
console.log(city2.getCity());

let obj8 = {
  method1 () {
    return 'строка1';
  },
  method2 () {
    return 'строка2';
  },
  method3 () {
    return 'строка3';
  },
}
console.log(obj8.method1());
console.log(obj8.method2());
console.log(obj8.method3());

