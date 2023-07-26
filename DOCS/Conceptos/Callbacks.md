[Una función callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción](https://developer.mozilla.org/es/docs/Glossary/Callback_function) [1](https://developer.mozilla.org/es/docs/Glossary/Callback_function). [Las funciones callback suelen utilizarse mucho en bibliotecas y frameworks, como las aplicaciones JavaScript jQuery, Angular o node.js](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/que-es-un-callback/) [2](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/que-es-un-callback/).

Un buen ejemplo de función callback son los controladores de eventos, que se utilizan, por ejemplo, en elementos HTML como los botones. La función callback siempre tiene un efecto determinado que está relacionado con ciertas circunstancias. [En otras palabras, solo se invoca si ha tenido lugar otra acción claramente definida](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/que-es-un-callback/) [2](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/que-es-un-callback/).

Aquí hay un ejemplo simple de una función callback en JavaScript:

```javascript
function saludar(nombre) {
  alert("Hola " + nombre);
}

function procesarEntradaUsuario(callback) {
  var nombre = prompt("Por favor ingresa tu nombre.");
  callback(nombre);
}

procesarEntradaUsuario(saludar);
```

Copy

Espero que esto ayude. Déjame saber si tienes más preguntas.