// const { printTable } = require('console-table-printer');

const people = require("./mock_data.json");

function HashMap() {

  this.list = [];


}

/**
 * Insert the key value pair into the hashmap
 * @param {String} key   
 * @param {Object} value
 * @return {void}
 */
HashMap.prototype.set = function (key, value) {

  let hashedKey = this.hash(key);
  value["hash"] = hashedKey.toString();
  value["name"] = key;
  console.log(hashedKey)
  this.list[hashedKey] = value;


}

HashMap.prototype.get = function () {

}

HashMap.prototype.hash = function (key) {
  var max = 100;
  var hash = 0;
  // if (!key) return hash;
  for (i = 0; i < key.length; i++) {
    char = key.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
  // return Math.abs(max ? hash % max : hash);

}

const practiceMap = new HashMap();
practiceMap.set("Alva Penna", people["Alva Penna"]);
practiceMap.set("Sancho Edmonston", people["Sancho Edmonston"]);
console.log(practiceMap.list);
// printTable(practiceMap.list)

// function(max) {
// var hash = 0;
// if (!this.length) return hash;
// for (i = 0; i < this.length; i++) {
//   char = this.charCodeAt(i);
//   hash = ((hash << 5) - hash) + char;
//   hash = hash & hash; // Convert to 32bit integer
// }
// return Math.abs(max ? hash % max : hash);
// };

// const practiceMap2 = new HashMap();

// for (var person in people) {
//   // console.log(person)

//   practiceMap2.set(person, people[person]);

// }

// printTable(practiceMap2.list)