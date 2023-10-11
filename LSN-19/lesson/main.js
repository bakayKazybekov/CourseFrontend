const map = new Map()

const obj = {
  key: 'value',
  null: null,
}
// set
map.set(1, 'value')
map.set('value', 22)
map.set(null, null)
map.set(undefined, undefined)
map.set(false, true)
map.set({3: 3}, {2: 2})
map.set([1, 2, 3], [1, 2, 3])
// console.log(map, obj)
// get
// console.log(map.get('value'))

//delete
map.delete(null)

// has
// console.log(map.has(false))

// values

// keys
for(elem of map.values()) {
  // console.log(elem)
}
for(key of map.values()) {
  // console.log(key)
}

const forEach = map.forEach((value, key, map) => {
  // console.log(`value: ${value} key: ${key}`)
}) 

// clear

// map.clear()
// console.log(map)

// size
// console.log(map.size)


// Set

const sett = new Set([2, '2', null])
console.log(sett)

const contextObj = {
  name: 'Elena',
  age: 23,
  sayHi() {
    console.log(`this is ${this.name}`)
  }
}

setTimeout(() => {
  contextObj.sayHi()
}, 2000)

