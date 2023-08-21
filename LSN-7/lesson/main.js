const arr = [1, 34, 667, 45, 43, 123, 45, 23, 34, 1];
function unique (arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let y = 0; y < res.length; y++) {
      if (arr[i] !== res[y]) {
        res.push(arr[i]);
      }
    }
  }
  return;
}
console.log(unique(arr));

