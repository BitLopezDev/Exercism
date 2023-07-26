
[The `reduce` method is an inbuilt TypeScript function that is used to apply a function against two values of the array as to reduce it to a single value](https://www.geeksforgeeks.org/typescript-array-reduce-method/) [1](https://www.geeksforgeeks.org/typescript-array-reduce-method/). [It executes a provided function for each value of the array (from left-to-right) and the return value of the function is stored in an accumulator](https://stackoverflow.com/questions/14087489/typescript-and-array-reduce-function) [2](https://stackoverflow.com/questions/14087489/typescript-and-array-reduce-function).

Here’s an example that sums up the values of an array:

```typescript
let total = [0, 1, 2, 3].reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(total); // 6
```

Copy

The `reduce` method takes two parameters: a callback function and an optional initial value. [The callback function takes four arguments: the accumulator, the current value, the current index, and the source array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) [3](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).



```typescript

export const nuc_map: { [key: string]: string } = { 'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U' }

export function toRna3(DNA: string): string {

  return [...DNA].reduce((output, letter) => {

    if (!(Object.keys(nuc_map).includes(letter))) throw Error('Invalid input DNA.')

    output += nuc_map[letter]; return output

  }, '')

}
```

