One way to remove an element from an array based on its value is to use the `filter` method. This method creates a new array with all elements that pass the test implemented by the provided function. Here’s an example:

```javascript
let myArray = [1, 2, 3, 4, 5];

let filteredArray = myArray.filter(function(element) {
  return element !== 3;
});

console.log(filteredArray); // [1, 2, 4, 5]
```


In this example, the `filter` method is used to create a new array that contains all elements from `myArray` except for the element with value `3`. The original array is not modified.

Another way to remove an element from an array based on its value is to use the `splice` method in combination with the `indexOf` method. The `indexOf` method can be used to find the index of the element to be removed, and the `splice` method can be used to remove it. Here’s an example:

```javascript
let myArray = [1, 2, 3, 4, 5];

let index = myArray.indexOf(3);

if (index !== -1) {
  myArray.splice(index, 1);
}

console.log(myArray); // [1, 2, 4, 5]
```



In this example, the `indexOf` method is used to find the index of the element with value `3` in the array. If the element is found (i.e., if its index is not `-1`), the `splice` method is used to remove it from the array. The original array is modified.


tag: 
- HowTo