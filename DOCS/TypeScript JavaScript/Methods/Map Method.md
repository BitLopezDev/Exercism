[El método `map` es una función incorporada en TypeScript que crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map) [1](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map). El método `map` invoca la función [[Callbacks]] pasada por argumento para cada elemento del Array y devuelve un nuevo Array como resultado [2](https://bing.com/search?q=m%C3%A9todo+map).

Aquí hay un ejemplo que multiplica por dos los valores de un array:

```typescript
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(x => x * 2);
console.log(doubled); // [2, 4, 6, 8]
```

Copy

El método `map` toma dos parámetros: una función callback y un valor opcional `thisArg`. La función callback toma tres argumentos: el valor actual, el índice actual y el array fuente [1](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map).


```javascript
const conversionMap = new Map([
  ['a', '1'],
  ['b', '2'],
  ['c', '3']
]);

const inputString = 'abc';
const outputString = [...inputString].map(char => conversionMap.get(char)).join('');

console.log(outputString); // '123'
```




tag: 
- methods