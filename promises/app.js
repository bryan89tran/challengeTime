//getPeople(string, callback) -> void
//getBook(string, callback) -> void
//callback(!Array<strings>)

const getPeople = function(string, callback) {
    // strings is used to do things
    // some database call
    var returnedData = ["John", "James"];
    // setTimeout(() => {
        callback(returnedData)
    // }, 2000);
}

const getBook = function(string, callback) {
    // strings is used to do things
    // some database call
    var returnedData = ["Jones of Ark"];
    // setTimeout(() => {
        callback(returnedData)
    // }, 1000);
}

// getPeople('j', function(result){
//     console.log("getPeople: ", result) // ["John", "James"]
// });

// getBook('j', function(result){
//     console.log("getBook: ",result) // ["Jones of Ark"]
// });



const combined = function(array) {
    return function(string, callback) {
        let returnedResultsArray = [];

        for(var i = 0; i<array.length; i+=1) {
            array[i](string, function(results) {
                console.log(results);
            });
        }

        callback(returnedResultsArray);
    }
}


const getAll = combined([getPeople, getArticles]);

getAll("to", function(result) {
  console.log(result); // ["John", "James", "Jones of Ark"];
});

