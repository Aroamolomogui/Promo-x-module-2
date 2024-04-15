"use stricti";
/*llamo a mi clase que voy a modificar*/
const sectionB = document.querySelector(".section-b");

/* oye ponle a la section-b de html añadele un estilo que haga que se oculte pero te lo pido desde JavaScript
/*classList.add() sirve para añadir una o más clases a un elemento

*/

sectionB.classList.add("hidden");
/*sectionB.classList.add('hidden', 'otraClase', 'otraMas');
 Así hasta aburrirnos*/

/*la sección B y actualmente está oculta y ahora queremos que se muestre de nuevo y, además, se oculte la sección A.*/

const sectionA = document.querySelector(".section-a");
const sectrionB = document.querySelector(".section-b");

sectionA.classList.add("hidden");

sectionB.classList.remove("hidden");
console.log("muéstrame lo que añade");
