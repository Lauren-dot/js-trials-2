"use strict";


// 1. printIndices
function printIndices(items) {
  // Print each item in the list, followed by its index.
  //   The output should look like this:
  //       apple 0
  //       berry 1
  //       cherry 2
  for (const i in items) {
    console.log(items[i] + " " + i);
  };
}


// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  let result = [];

  var i = 0;
  while (i < items.length) {
    if (i % 2 === 0) {
      result.push(items[i])
    }
    i++;
  };

  console.log(result);
}


// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code

  let sorted_items = items.sort((a, b) => a - b);
  let sliced_items = sorted_items.slice(0, n);
  let reversed_items = sliced_items.reverse();

  console.log(reversed_items)
}
