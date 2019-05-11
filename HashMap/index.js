let hash = require('string-hash');

class SmartMap {
  constructor() {
    this.list = []
  }

  get(x) {
    return this.list[hash(x)]
  }

  set(x, y) {
    this.list[hash(x)] = y
  }

}
// 
const disctionary = {
  "tom": { phoneNUmber: 12345677, address: 1234 }
}

class DumbMap {
  constructor() {
    this.list = []
  }
  set(x, y) {
    this.list.push([x, y])
  }

  get(x) {
    let result

    this.list.forEach(pairs => {
      if (pairs[0] === x) {
        result = pairs[1]
      }
    })

    return result
  }
}

let m = new DumbMap()
m.set('x', 1)
m.set('y', 2)

console.time('with very few records in the map')
m.get('I_DONT_EXIST')
console.timeEnd('with very few records in the map')

m = new DumbMap()

for (x = 0; x < 1000000; x++) {
  m.set(`element${x}`, x)
}

console.time('with lots of records in the map')
m.get('I_DONT_EXIST')
console.timeEnd('with lots of records in the map')