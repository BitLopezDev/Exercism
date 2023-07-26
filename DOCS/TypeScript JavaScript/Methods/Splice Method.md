The `splice` method of JavaScript changes the content of an array by removing existing elements and/or adding new elements . This method modifies the original array and returns the deleted elements as a new array .

The syntax of the `splice` method is as follows: `array.splice(start[, deleteCount[, item1[, item2[, ...]]]])`. The parameters are as follows:

- `start`: Index where to start changing the array (with 0 as origin).
- `deleteCount` (optional): An integer indicating the number of elements to remove from the old array.
- `item1, item2, ...` (optional): The elements to add to the array, starting at the index `start`.

Here is an example of how to use the `splice` method to remove and add elements in an array:

```javascript
let myArray = ['apple', 'orange', 'banana'];

let removedElements = myArray.splice(1, 1, 'kiwi', 'mango');

console.log(myArray); // ['apple', 'kiwi', 'mango', 'banana']
console.log(removedElements); // ['orange']
```

In this example, the `splice` method is used to remove 1 element from the array `myArray` starting at index 1 and add the elements `'kiwi'` and `'mango'` in its place. The original array is modified and the deleted elements are returned as a new array.

