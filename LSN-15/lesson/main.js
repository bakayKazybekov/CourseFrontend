// console.log('1')
const promise = new Promise((resolve, reject) => {
  let a = 2;
  let b = 2;
  if (a === b) {
    resolve('a равно b')
  } else {
    reject('a не равно b')
  }
  // console.log('2')
});

// console.log('3')

// promise.then((response) => {
//   // console.log(response, 'верно')
//   // console.log('4')
// })

// promise.catch((error) => {
//   // console.log(error, 'Ошибка')
// })

// promise.finally(() => {
//   // console.log('Финал')
// })

// console.log('5')

const promise2 = new Promise((resolve, reject) => [
  resolve('Это')
])

// promise2
//   .then((res) => {
//     // return `${res} промис`
//   })
//   .then((res) => {
//     // return `${res} !`
//   })
//   .then((res) => {
//     // console.log(res)
//     })

// 
// Promise.all([promise, promise2])
//   .then((response) => {
//     console.log(response)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//     console.log('Final')
//   })

//
function sum (x, y) {
  return new Promise((res) => {
    const result = x + y
    res(result)
  })
}



async function test () {
  const res = await sum(1, 2).then((response) => {
    return response
  })
  return console.log(res);
}

// test();

function makeHttpRequest (method, url) {
  return new Promise((res, rej) => {

  });
}

makeHttpRequest('GET');