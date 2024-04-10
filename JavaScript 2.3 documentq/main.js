"use strict";

const paragraph = document.querySelector(".paragraph");
paragraph.innerHTML = "Hola Mundo";

// Aqui lo que haces es traerte el elemento del html, en este caso el primer elemenmto de la lista de nombre que seria Aroa
//al usuar el query selector no te traes el valor en concreto  sino el elemnto de html osea toda la lista

//para acceder al valor concreto no al elemento html hay que poner esto nombre.innerHTML

const nombre = document.querySelector(".name");
console.log(nombre);

const title = document.querySelector(".title");

/**estas dos cosas son equivalente
 * la primera aopcion estas rescribiendo el texto de forma manual y la parte varibnale seria la del nombre de la persona que depnde de la lista que tengamo
 */

title.innerHTML = "la adalaber seleccionada es " + nombre.innerHTML;

console.log(title.innerHTML);

title.innerHTML = title.innerHTML + nombre.innerHTML;
