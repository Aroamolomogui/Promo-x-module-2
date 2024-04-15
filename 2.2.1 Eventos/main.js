"use strict";

console.log("funcionando");

/*nosotros no creamos eventos desde JavaScript sino que un evento se genera pero desde JavaScript podemos saber que ha sucedido. Ejemplos de eventos:

**click en un botón
*scroll en la página
*un cambio en el contenido de un input
*expira un temporizador
*llegan los datos del servidor
*/

/*1  ¿Sobre quien quieres escuchar el evento click? sobre el botón al que hemos llamado con la clase Alert, pues sobre ese debes aplicar el document.querys*/
// elemento de HTML//
const button = document.querySelector("Alert");

// listener sobre el elemento, con tipo de evento y el código a ejecutarse

// listener sobre el elemento, con tipo de evento y el código a ejecutarse
button.addEventListener("click", () => {
  console.log("Alerta");
});
