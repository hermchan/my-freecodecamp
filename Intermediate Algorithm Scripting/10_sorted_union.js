/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/

function uniteUnique(arr) {

  var temp = [];

  for (var i = 0; i < arguments.length; i++) {
    var arrayArguments = arguments[i];

    for (var j = 0; j < arrayArguments.length; j++) {
      var indexValue = arrayArguments[j];
      console.log(indexValue);

      if (temp.indexOf(indexValue) === -1) {
        temp.push(indexValue);
      }
    }
  }
  return temp;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
