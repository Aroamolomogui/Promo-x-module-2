"use strict";

/* mostrar el menu
1._ crear la variable (botón hamburgues,lista del ul)
2._Añadir el evento click sobre el botón.
3._ crear funcionalidad (expande la lista de la ul en este caos usareos el toggle quita y pone cada vez qu ese hace click add o remove sólo lo realiza una vez)*/

const btnMenu = document.querySelector(".js_Menu");
const listMenu = document.querySelector(".js_menu_list");

btnMenu.addEventListener("clcik", (event) => {
  // ocurrirá cuando haga clcik la usuaria

  console.log("ha hecho click");

  // al tener la clase hidden para el css donde se oculta el menú hamburguesa le tenemos qu eponer un classList.togle que hará que siempre que se clicke se oculte
  listMenu.classList.toggle("hidden");
});

/* 
quiero que al escribir en el input de mostrar se debe rellenar on un mensaje

1._ Variables de : span, input, boton span.
2.: sibre quien escucho el evento
3._Pintar en el spam es valor del input
*/

const inputName = document.querySelector(".js_Name");
const spanName = document.querySelector(".js_span_name");
const btnMostrar = document.querySelector(".js_btn_mostrar");

/*aquí estás diciendo lo siguiente: oye btn de mostrar cuando en el input del nombre la usuaria ponga su nombre (value del input) quiero que modifiques el contenido del span (bienvenida) esto es una concatenación. como la página cuando meto el valor en el input (nombre de quien sea) la pag se me refresca por este motivo usamos el prevent defaul sobre ese evento y siempre la 1º línea de código.
 */
btnMostrar.addEventListener("click", (event) => {
  event.preventDefault();

  const valueInput = inputName.value;
  spanName.innerHTML = "Bienvenida" + valueInput;
});

const form = document.querySelector(".js_form");

form.addEventListener("input", () => {
  console.log(event.currentTarget);
  console.log(event.target);
});
