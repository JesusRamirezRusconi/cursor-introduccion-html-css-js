// ============================================================================
// GUÍA 5: DOM (DOCUMENT OBJECT MODEL) Y EVENTOS EN JAVASCRIPT
// ============================================================================
// Esta guía te enseña a manipular HTML y responder a interacciones del usuario

// ===== 1. ¿QUÉ ES EL DOM? =====

// El DOM es una representación en forma de árbol de un documento HTML
// JavaScript puede acceder y modificar elementos HTML usando el DOM
// 'document' es el objeto principal que representa toda la página HTML

// Estructura básica del DOM:
// document (raíz)
//   └── html
//       ├── head
//       │   ├── title
//       │   └── meta
//       └── body
//           ├── div
//           ├── p
//           └── button

// ===== 2. SELECCIONAR ELEMENTOS DEL DOM =====

// === getElementById() - Busca por ID (atributo id="") ===
// Devuelve UN SOLO elemento (el primero que encuentra)
// Es el método más rápido
// Si no existe, devuelve null
let titulo = document.getElementById("titulo");
// Busca: <h1 id="titulo">Mi título</h1>

console.log(titulo); // Muestra el elemento HTML completo

// === getElementsByClassName() - Busca por CLASE (atributo class="") ===
// Devuelve una HTMLCollection (similar a array) con TODOS los elementos
let items = document.getElementsByClassName("item");
// Busca: <div class="item">...</div>

console.log(items.length); // Cantidad de elementos encontrados
console.log(items[0]); // Primer elemento con clase "item"

// === getElementsByTagName() - Busca por ETIQUETA HTML ===
// Devuelve HTMLCollection con todos los elementos de ese tipo
let parrafos = document.getElementsByTagName("p");
// Busca todos los: <p>...</p>

console.log(parrafos.length); // Cantidad de párrafos

// === querySelector() - Busca con SELECTOR CSS (más versátil) ===
// Devuelve el PRIMER elemento que coincida
// Usa sintaxis de CSS: #id, .clase, etiqueta, etc.
let primerBoton = document.querySelector("button");
// Busca primer: <button>...</button>

let elementoPorId = document.querySelector("#titulo");
// Equivalente a getElementById("titulo")

let elementoPorClase = document.querySelector(".item");
// Primer elemento con clase "item"

let elementoComplejo = document.querySelector("div.container > p.destacado");
// Busca: <p class="destacado"> que es hijo directo de <div class="container">

// === querySelectorAll() - Busca TODOS con selector CSS ===
// Devuelve NodeList (similar a array) con todos los elementos
let todosLosItems = document.querySelectorAll(".item");
// Todos los elementos con clase "item"

let botones = document.querySelectorAll("button");
// Todos los botones

// NodeList se puede recorrer con forEach
todosLosItems.forEach(function(item, indice) {
    console.log("Item " + indice + ":", item);
});

// ===== 3. MODIFICAR CONTENIDO DE ELEMENTOS =====

// === .textContent - Cambia solo el TEXTO (sin HTML) ===
let parrafo = document.querySelector("p");
console.log(parrafo.textContent); // Lee el texto actual

parrafo.textContent = "Nuevo texto"; // Cambia el texto
// <p>Texto original</p> → <p>Nuevo texto</p>

// === .innerHTML - Cambia el CONTENIDO HTML completo ===
let contenedor = document.querySelector("#contenedor");
console.log(contenedor.innerHTML); // Lee el HTML interno

contenedor.innerHTML = "<strong>Texto en negrita</strong>";
// Cambia el contenido e interpreta HTML

contenedor.innerHTML = contenedor.innerHTML + "<p>Nuevo párrafo</p>";
// Agrega nuevo contenido al existente

// === .innerText - Similar a textContent (pero respeta estilos CSS) ===
let elemento = document.querySelector(".oculto");
console.log(elemento.innerText); // No muestra texto de elementos ocultos (display:none)
console.log(elemento.textContent); // Sí muestra todo el texto

// ===== 4. MODIFICAR ATRIBUTOS =====

// === .getAttribute() - Obtiene valor de un atributo ===
let imagen = document.querySelector("img");
let rutaImagen = imagen.getAttribute("src");
// Obtiene valor del atributo src: <img src="foto.jpg">

console.log(rutaImagen); // Imprime: foto.jpg

// === .setAttribute() - Cambia o agrega un atributo ===
imagen.setAttribute("src", "nueva-foto.jpg");
// Cambia la imagen: <img src="nueva-foto.jpg">

imagen.setAttribute("alt", "Descripción de imagen");
// Agrega atributo alt: <img src="..." alt="Descripción de imagen">

// === .removeAttribute() - Elimina un atributo ===
imagen.removeAttribute("title");
// Elimina atributo title si existe

// === Acceso directo a atributos comunes ===
let enlace = document.querySelector("a");
enlace.href = "https://www.ejemplo.com"; // Cambia atributo href
enlace.target = "_blank"; // Abre en nueva pestaña

let input = document.querySelector("input");
input.value = "Texto por defecto"; // Cambia valor de input
input.placeholder = "Escribe aquí..."; // Cambia placeholder

// ===== 5. MODIFICAR ESTILOS CSS =====

// === .style - Accede a estilos inline del elemento ===
let caja = document.querySelector(".caja");

// Cambiar un estilo (camelCase para propiedades con guión)
caja.style.color = "red"; // Cambia color de texto
caja.style.backgroundColor = "yellow"; // Cambia color de fondo (background-color)
caja.style.fontSize = "20px"; // Cambia tamaño de fuente (font-size)
caja.style.border = "2px solid black"; // Agrega borde
caja.style.padding = "10px"; // Agrega padding
caja.style.margin = "20px"; // Agrega margin

// Cambiar múltiples estilos
caja.style.cssText = "color: blue; background-color: lightblue; padding: 15px;";
// Cambia varios estilos a la vez

// === .classList - Manipula clases CSS del elemento ===
let boton = document.querySelector("button");

// .add() agrega una clase
boton.classList.add("activo");
// <button class="activo">

// .remove() elimina una clase
boton.classList.remove("activo");
// <button class="">

// .toggle() alterna una clase (si existe la elimina, si no existe la agrega)
boton.classList.toggle("activo");
// Si tenía "activo" la elimina, si no la tenía la agrega

// .contains() verifica si tiene una clase (devuelve true/false)
if (boton.classList.contains("activo")) {
    console.log("El botón está activo");
}

// .replace() reemplaza una clase por otra
boton.classList.replace("viejo", "nuevo");
// Cambia clase "viejo" por "nuevo"

// ===== 6. CREAR Y AGREGAR ELEMENTOS =====

// === document.createElement() - Crea nuevo elemento HTML ===
let nuevoDiv = document.createElement("div");
// Crea: <div></div> (aún no está en la página)

// Configurar el nuevo elemento
nuevoDiv.textContent = "Soy un div nuevo";
nuevoDiv.className = "caja"; // Agrega clase
nuevoDiv.id = "miDiv"; // Agrega id

// === .appendChild() - Agrega elemento al FINAL de otro ===
let contenedor2 = document.querySelector("#contenedor");
contenedor2.appendChild(nuevoDiv);
// Agrega el div al final de #contenedor

// Ejemplo completo: crear párrafo con texto
let nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este es un nuevo párrafo";
nuevoParrafo.style.color = "blue";
document.body.appendChild(nuevoParrafo); // Agrega al body

// === .insertBefore() - Inserta elemento ANTES de otro ===
let referencia = document.querySelector("#referencia");
let nuevo = document.createElement("div");
nuevo.textContent = "Insertado antes";
referencia.parentNode.insertBefore(nuevo, referencia);
// Inserta 'nuevo' antes de 'referencia'

// === .append() - Agrega múltiples elementos o texto (más moderno) ===
contenedor2.append(nuevoDiv, "texto adicional", otroElemento);

// === .prepend() - Agrega al INICIO (más moderno) ===
contenedor2.prepend(nuevoDiv);
// Agrega al inicio de contenedor2

// ===== 7. ELIMINAR Y REEMPLAZAR ELEMENTOS =====

// === .remove() - Elimina el elemento del DOM ===
let elementoAEliminar = document.querySelector(".eliminar");
elementoAEliminar.remove();
// El elemento desaparece de la página

// === .removeChild() - Elimina un hijo (forma antigua) ===
let padre = document.querySelector("#padre");
let hijo = document.querySelector("#hijo");
padre.removeChild(hijo);
// Elimina 'hijo' que está dentro de 'padre'

// === .replaceChild() - Reemplaza un hijo por otro ===
let nuevoHijo = document.createElement("div");
nuevoHijo.textContent = "Nuevo contenido";
padre.replaceChild(nuevoHijo, hijo);
// Reemplaza 'hijo' con 'nuevoHijo'

// ===== 8. NAVEGAR POR EL DOM =====

// === Relaciones entre elementos ===
let elemento2 = document.querySelector("#miElemento");

// Padre
let padre2 = elemento2.parentElement;
// Elemento que contiene a elemento2

// Hijos
let hijos = elemento2.children;
// HTMLCollection con todos los hijos directos

let primerHijo = elemento2.firstElementChild;
// Primer hijo

let ultimoHijo = elemento2.lastElementChild;
// Último hijo

// Hermanos
let hermanoSiguiente = elemento2.nextElementSibling;
// Siguiente elemento al mismo nivel

let hermanoAnterior = elemento2.previousElementSibling;
// Elemento anterior al mismo nivel

// ===== 9. EVENTOS =====

// Los eventos son acciones que ocurren en la página
// Ejemplos: clic, tecla presionada, mouse movido, etc.

// === addEventListener() - Escucha eventos ===
// Sintaxis: elemento.addEventListener(tipoEvento, función)
let boton2 = document.querySelector("#miBoton");

boton2.addEventListener("click", function() {
    // Esta función se ejecuta cuando se hace clic en el botón
    console.log("¡Botón clickeado!");
});

// === Eventos comunes del MOUSE ===

// click - Un clic completo (presionar y soltar)
boton2.addEventListener("click", function(evento) {
    console.log("Click en:", evento.target);
    // evento.target es el elemento que recibió el clic
});

// dblclick - Doble clic
boton2.addEventListener("dblclick", function() {
    console.log("Doble clic");
});

// mouseenter - Mouse entra al elemento
let caja2 = document.querySelector(".caja");
caja2.addEventListener("mouseenter", function() {
    caja2.style.backgroundColor = "lightblue";
});

// mouseleave - Mouse sale del elemento
caja2.addEventListener("mouseleave", function() {
    caja2.style.backgroundColor = "white";
});

// mousemove - Mouse se mueve sobre el elemento
caja2.addEventListener("mousemove", function(e) {
    console.log("Posición X:", e.clientX, "Y:", e.clientY);
});

// === Eventos del TECLADO ===

// keydown - Tecla presionada
document.addEventListener("keydown", function(evento) {
    console.log("Tecla presionada:", evento.key);
    // evento.key contiene la tecla: "a", "Enter", "ArrowUp", etc.
});

// keyup - Tecla soltada
document.addEventListener("keyup", function(evento) {
    console.log("Tecla soltada:", evento.key);
});

// keypress - Tecla presionada (solo caracteres, obsoleto)

// === Eventos de FORMULARIOS ===

let input2 = document.querySelector("input");

// input - Cada vez que cambia el valor
input2.addEventListener("input", function(e) {
    console.log("Valor actual:", e.target.value);
});

// change - Cuando pierde foco y el valor cambió
input2.addEventListener("change", function(e) {
    console.log("Valor final:", e.target.value);
});

// focus - Elemento recibe foco
input2.addEventListener("focus", function() {
    input2.style.borderColor = "blue";
});

// blur - Elemento pierde foco
input2.addEventListener("blur", function() {
    input2.style.borderColor = "gray";
});

// submit - Formulario enviado
let formulario = document.querySelector("form");
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault(); // Previene envío por defecto
    console.log("Formulario enviado");
});

// === Eventos de VENTANA ===

// load - Página cargada completamente
window.addEventListener("load", function() {
    console.log("Página cargada");
});

// resize - Ventana redimensionada
window.addEventListener("resize", function() {
    console.log("Ancho:", window.innerWidth, "Alto:", window.innerHeight);
});

// scroll - Usuario hace scroll
window.addEventListener("scroll", function() {
    console.log("Scroll en posición:", window.scrollY);
});

// ===== 10. OBJETO EVENTO =====

// El primer parámetro de la función es el objeto evento
// Contiene información sobre el evento ocurrido
boton2.addEventListener("click", function(evento) {
    // También llamado 'e' o 'event' comúnmente
    
    console.log(evento.type); // Tipo de evento: "click"
    console.log(evento.target); // Elemento que disparó el evento
    console.log(evento.currentTarget); // Elemento que tiene el listener
    console.log(evento.clientX, evento.clientY); // Posición del mouse
    console.log(evento.key); // Tecla presionada (en eventos de teclado)
    console.log(evento.timeStamp); // Momento en que ocurrió
});

// === Métodos útiles del objeto evento ===

// preventDefault() - Previene acción por defecto
let enlace2 = document.querySelector("a");
enlace2.addEventListener("click", function(e) {
    e.preventDefault(); // Evita que el enlace navegue
    console.log("Enlace clickeado pero no navega");
});

// stopPropagation() - Detiene propagación del evento
let padre3 = document.querySelector(".padre");
let hijo2 = document.querySelector(".hijo");

hijo2.addEventListener("click", function(e) {
    e.stopPropagation(); // Evita que el evento llegue al padre
    console.log("Click en hijo");
});

padre3.addEventListener("click", function() {
    console.log("Click en padre"); // No se ejecuta si hijo detiene propagación
});

// ===== 11. REMOVER EVENT LISTENERS =====

// Para remover un listener, la función debe tener nombre
function manejarClick() {
    console.log("Click manejado");
}

// Agregar listener
boton2.addEventListener("click", manejarClick);

// Remover listener (debe ser la MISMA función)
boton2.removeEventListener("click", manejarClick);

// ===== 12. DELEGACIÓN DE EVENTOS =====

// Agregar un listener al padre para manejar eventos de los hijos
// Útil cuando hay muchos elementos o se crean dinámicamente
let lista = document.querySelector("#lista");

// En lugar de agregar listener a cada <li>
// Agrega uno solo al <ul> padre
lista.addEventListener("click", function(evento) {
    // Verifica qué elemento fue clickeado
    if (evento.target.tagName === "LI") {
        console.log("Clickeaste:", evento.target.textContent);
    }
});

// Funciona incluso con elementos agregados después
let nuevoItem = document.createElement("li");
nuevoItem.textContent = "Nuevo item";
lista.appendChild(nuevoItem);
// El nuevo item ya responde a clicks sin agregar listener adicional

// ===== 13. TIMERS (TEMPORIZADORES) =====

// === setTimeout() - Ejecuta código DESPUÉS de cierto tiempo ===
// Sintaxis: setTimeout(función, milisegundos)
setTimeout(function() {
    console.log("Esto se ejecuta después de 2 segundos");
}, 2000); // 2000 milisegundos = 2 segundos

// Guardar referencia para cancelarlo
let temporizador = setTimeout(function() {
    console.log("Esto no se ejecutará");
}, 3000);

// clearTimeout() cancela el setTimeout
clearTimeout(temporizador);

// === setInterval() - Ejecuta código REPETIDAMENTE cada cierto tiempo ===
// Sintaxis: setInterval(función, milisegundos)
let contador = 0;
let intervalo = setInterval(function() {
    contador++;
    console.log("Contador:", contador);
    
    if (contador >= 5) {
        clearInterval(intervalo); // Detiene el intervalo
    }
}, 1000); // Se ejecuta cada 1 segundo

// ===== 14. EJEMPLOS PRÁCTICOS =====

// === Cambiar tema (modo oscuro/claro) ===
let botonTema = document.querySelector("#cambiarTema");
botonTema.addEventListener("click", function() {
    document.body.classList.toggle("modo-oscuro");
});

// === Contador de clics ===
let contadorClics = 0;
let botonContar = document.querySelector("#contar");
let display = document.querySelector("#display");

botonContar.addEventListener("click", function() {
    contadorClics++;
    display.textContent = "Clics: " + contadorClics;
});

// === Validación de formulario ===
let form = document.querySelector("#miFormulario");
let inputEmail = document.querySelector("#email");
let mensajeError = document.querySelector("#error");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // Previene envío
    
    if (!inputEmail.value.includes("@")) {
        mensajeError.textContent = "Email inválido";
        mensajeError.style.color = "red";
    } else {
        mensajeError.textContent = "Email válido";
        mensajeError.style.color = "green";
    }
});

// === Toggle (mostrar/ocultar) elemento ===
let botonToggle = document.querySelector("#toggle");
let elementoToggle = document.querySelector("#elemento");

botonToggle.addEventListener("click", function() {
    if (elementoToggle.style.display === "none") {
        elementoToggle.style.display = "block";
    } else {
        elementoToggle.style.display = "none";
    }
});

// ===== 15. BUENAS PRÁCTICAS =====

// ✅ Usar addEventListener en lugar de atributos HTML onclick=""
// ✅ Usar querySelector/querySelectorAll (más flexibles)
// ✅ Verificar que el elemento existe antes de manipularlo
let elemento3 = document.querySelector("#miElemento");
if (elemento3) {
    elemento3.textContent = "Nuevo texto"; // ✅ Seguro
}

// ✅ Usar delegación de eventos para listas dinámicas
// ✅ Remover event listeners cuando no se necesiten más
// ✅ Usar preventDefault() con cuidado
// ✅ Nombrar funciones de eventos descriptivamente
function manejarClickBoton() { // ✅ Bien
    // ...
}

function f() { // ❌ Mal (no descriptivo)
    // ...
}

// ===== FIN DE LA GUÍA 5 =====
console.log("\n✅ Guía 5 completada: DOM y Eventos");
console.log("\n🎉 ¡Felicidades! Has completado todas las guías de JavaScript");
console.log("📚 Practica estos conceptos creando proyectos propios");

