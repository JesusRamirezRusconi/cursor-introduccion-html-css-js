// ===== COMENTARIOS DETALLADOS LÍNEA POR LÍNEA DE JAVASCRIPT =====

// Línea 1-3: Comentarios generales sobre qué es JavaScript y su propósito
// JavaScript es un lenguaje de programación que se ejecuta en el navegador web
// Sirve para hacer que las páginas web sean interactivas y dinámicas
// A diferencia del HTML (estructura) y CSS (estilos), JS controla el comportamiento

// Línea 5: Declaración de variable global con 'let'
// 'let' declara una variable que puede cambiar su valor (a diferencia de 'const' que es constante)
// Esta variable almacena el número de clics que el usuario ha hecho en el botón
// Se inicializa en 0 porque al inicio no hay clics realizados
let contadorClicks = 0; // Tipo: number, valor inicial: 0

// Línea 8: Declaración de función usando la palabra clave 'function'
// 'function' define un bloque de código reutilizable que se puede ejecutar múltiples veces
// 'saludar' es el nombre de la función (identificador único)
// Los paréntesis () indican que no recibe parámetros de entrada
// Las llaves {} contienen el cuerpo/código de la función
function saludar() { // Esta función se ejecuta cuando se hace clic en el botón

    // Línea 11: Incremento del contador
    // '++' es el operador de incremento que aumenta el valor de la variable en 1
    // Equivalente a: contadorClicks = contadorClicks + 1
    contadorClicks++; // Ahora contadorClicks vale 1, 2, 3, etc. en cada clic


    // Línea 15-16: Declaración de constantes para elementos del DOM
    // 'const' declara una variable que NO puede cambiar su valor después de asignarse
    // 'document' es el objeto global que representa toda la página HTML
    // '.getElementById()' es un método que busca un elemento HTML por su atributo 'id'
    // "mensaje" es el id del párrafo que queremos modificar
    // Esta constante ahora contiene una referencia al elemento HTML con id="mensaje"
    const mensaje = document.getElementById("mensaje"); // Tipo: HTMLElement (elemento del DOM)

    // Línea 17: Similar a la anterior, obtenemos referencia al botón
    // "boton-interactivo" es el id del botón en el HTML
    const boton = document.getElementById("boton-interactivo"); // Tipo: HTMLElement

    // Línea 20: Modificación del texto del botón
    // '.textContent' es una propiedad que cambia el texto visible del elemento
    // El texto entre comillas se mostrará en el botón durante la animación
    boton.textContent = "Procesando..."; // Cambia el texto del botón a "Procesando..."

    // Línea 21: Deshabilita el botón para evitar clics múltiples
    // '.disabled' es una propiedad booleana (true/false) que controla si el botón responde a clics
    // true = botón deshabilitado, false = botón habilitado
    boton.disabled = true; // El botón ya no responde a clics hasta que se habilite nuevamente

    // Línea 22: Cambia la opacidad visual del botón
    // '.style' accede a los estilos CSS del elemento
    // '.opacity' controla la transparencia (0 = invisible, 1 = totalmente visible)
    // 0.7 significa 70% visible, dando efecto de "deshabilitado"
    boton.style.opacity = "0.7"; // Hace el botón semi-transparente

    // Línea 25-35: Declaración de array (arreglo) de mensajes
    // 'const' porque el array en sí no cambia, solo su contenido potencialmente
    // Los corchetes [] definen un array (lista ordenada de valores)
    // Cada elemento está separado por coma y puede ser string (texto)
    const mensajes = [ // Array que contiene 9 mensajes de texto
        "¡JavaScript cambió este texto!",        // Índice 0: primer mensaje
        "¡Otra vez! JavaScript es poderoso 🎉",   // Índice 1: segundo mensaje
        "¡Tres clics! ¿Quieres seguir probando?", // Índice 2: tercer mensaje
        "¡Cuatro clics! Eres persistente 😄",     // Índice 3: cuarto mensaje
        "¡Cinco clics! ¡Eres un experto!",       // Índice 4: quinto mensaje
        "¡Otra vez! JavaScript es poderoso 🎉",   // Índice 5: sexto mensaje (duplicado)
        "¡Tres clics! ¿Quieres seguir probando?", // Índice 6: séptimo mensaje (duplicado)
        "¡Cuatro clics! Eres persistente 😄",     // Índice 7: octavo mensaje (duplicado)
        "Felicidades por llegar al final de la pagina" // Índice 8: noveno mensaje
    ]; // Fin del array - contiene 9 elementos en total

    // Línea 38-39: Operador ternario para seleccionar mensaje
    // Operador ternario: condición ? valor_si_verdadero : valor_si_falso
    // 'contadorClicks <= mensajes.length' compara si el contador es menor o igual al tamaño del array
    // 'mensajes.length' devuelve 9 (cantidad de elementos en el array)
    // Si contador <= 9, usa mensajes[contadorClicks - 1], sino usa un mensaje genérico
    const mensajeSeleccionado = contadorClicks <= mensajes.length ? // ¿Es el contador menor o igual a 9?
        mensajes[contadorClicks - 1] : // Sí: usa el mensaje correspondiente del array (índice contador-1)
        `¡Has hecho clic ${contadorClicks} veces!`; // No: crea mensaje dinámico con template literal

    // Línea 42: Configura la transición CSS para animación de opacidad
    // '.style.transition' define cómo cambian las propiedades CSS con el tiempo
    // "opacity 0.3s ease-out" significa: propiedad 'opacity', duración 0.3 segundos, tipo 'ease-out'
    mensaje.style.transition = "opacity 0.3s ease-out"; // Prepara animación de desvanecimiento

    // Línea 43: Hace el mensaje invisible para iniciar la animación
    // Cambia la opacidad a 0 (invisible) con transición suave
    mensaje.style.opacity = "0"; // El mensaje se desvanece gradualmente

    // Línea 46-57: Función setTimeout para ejecutar código después de tiempo
    // setTimeout ejecuta una función después de milisegundos especificados
    // Sintaxis: setTimeout(función, milisegundos)
    // 300 milisegundos = 0.3 segundos (mismo tiempo que la transición)
    setTimeout(() => { // Función flecha: ejecuta después de 0.3 segundos

        // Línea 47: Cambia el contenido HTML del mensaje
        // '.innerHTML' cambia el contenido HTML interno del elemento
        mensaje.innerHTML = mensajeSeleccionado; // Inserta el mensaje seleccionado

        // Línea 48: Cambia el color del texto alternadamente
        // Operador ternario: si contadorClicks es par, usa color naranja, sino azul
        // '%' es operador módulo (resto de división), contadorClicks % 2 === 0 verifica si es par
        mensaje.style.color = contadorClicks % 2 === 0 ? "#ff6a00" : "blue"; // Color alterno

        // Línea 49: Aplica transformación de escala inicial
        // '.style.transform' aplica transformaciones CSS (rotar, escalar, mover)
        // "scale(0.95)" hace el elemento 95% de su tamaño original
        mensaje.style.transform = "scale(0.95)"; // Efecto de escala inicial pequeño

        // Línea 52-56: Segundo setTimeout anidado para animación de entrada
        // 50 milisegundos después del primer setTimeout
        setTimeout(() => { // Función que ejecuta la animación de entrada

            // Línea 53: Cambia la transición para animar todas las propiedades
            // "all 0.5s ease-in" anima todos los cambios en 0.5 segundos con efecto ease-in
            mensaje.style.transition = "all 0.5s ease-in"; // Nueva transición para entrada

            // Línea 54: Hace el mensaje visible nuevamente
            mensaje.style.opacity = "1"; // Aparece gradualmente

            // Línea 55: Restaura el tamaño original con animación
            mensaje.style.transform = "scale(1)"; // Escala vuelve a tamaño normal (100%)

        }, 50); // Ejecuta después de 50 milisegundos

    }, 300); // Ejecuta después de 300 milisegundos

    // Línea 60-64: Tercer setTimeout para restaurar el botón
    // 800 milisegundos = 0.8 segundos (después de que termine la animación)
    setTimeout(() => { // Función que restaura el botón a su estado normal

        // Línea 61: Restaura el texto original del botón
        boton.textContent = "¡Boton verde yei !"; // Texto original del botón

        // Línea 62: Habilita el botón nuevamente
        boton.disabled = false; // Ahora responde a clics otra vez

        // Línea 63: Restaura la opacidad completa
        boton.style.opacity = "1"; // Botón totalmente visible

    }, 800); // Ejecuta después de 800 milisegundos

    // Línea 67: Condicional if para mostrar alert solo en primer clic
    // 'if' ejecuta código solo si la condición es verdadera
    // 'contadorClicks === 1' compara si contadorClicks es exactamente igual a 1
    // '===' es comparación estricta (mismo valor y tipo)
    if (contadorClicks === 1) { // Solo ejecuta si es el primer clic

        // Línea 68-71: setTimeout para mostrar alert después de 1 segundo
        // 1000 milisegundos = 1 segundo
        setTimeout(() => { // Función que muestra el mensaje de bienvenida

            // Línea 69: Función alert() muestra cuadro de diálogo
            // alert() es una función del navegador que muestra mensaje emergente
            // El usuario debe hacer clic en "Aceptar" para continuar
            alert("Bienvenido a mi página web. ¡Sigue haciendo clic para ver más cambios!"); // Mensaje de bienvenida

        }, 1000); // Muestra alert después de 1 segundo

    } // Fin del bloque if

} // Fin de la función saludar()

// Línea 76: Declaración de segunda función
// Esta función se ejecuta cuando la página termina de cargar completamente
function paginaCargada() { // No recibe parámetros

    // Línea 77-78: console.log() imprime mensajes en la consola del navegador
    // console.log() es útil para depuración y ver qué hace el código
    // F12 abre las herramientas de desarrollador donde se ve la consola
    console.log("La página se cargó completamente"); // Mensaje informativo
    console.log("JavaScript está listo para interactuar");
   { console.log("Sirve para mostrar mensajes en la consola del navegador")};// Otro mensaje informativo

    // Línea 81: Obtiene referencia al elemento mensaje para inicialización
    const mensajeInicial = document.getElementById("mensaje"); // Referencia al párrafo

    // Línea 82: Condicional if para verificar que el elemento existe
    // 'if (mensajeInicial)' verifica si la variable no es null/undefined
    // Si el elemento no existe, el código dentro no se ejecuta
    if (mensajeInicial) { // Solo ejecuta si el elemento fue encontrado

        // Línea 83: Configura transiciones CSS iniciales
        mensajeInicial.style.transition = "all 0.3s ease"; // Transición suave para cambios futuros

        // Línea 84: Otro mensaje en consola
        console.log("Animaciones CSS preparadas"); // Confirma que las animaciones están listas

    } // Fin del bloque if

} // Fin de la función paginaCargada()

// Línea 89: Declaración de tercera función
// Esta función muestra estadísticas del contador en la consola
function mostrarEstadisticas() { // No recibe parámetros

    // Línea 90: Template literal para mensaje dinámico
    // Los backticks ` permiten insertar variables con ${variable}
    // Equivalente a: "Estadísticas: " + contadorClicks + " clics realizados"
    console.log(`Estadísticas: ${contadorClicks} clics realizados`); // Muestra contador actual

    // Línea 91: Mensaje informativo adicional
    console.log("Para ver más detalles, abre la consola del navegador (F12)"); // Instrucción para usuario

} // Fin de la función mostrarEstadisticas()

// Línea 96: addEventListener conecta función a evento
// 'window' representa la ventana del navegador
// '.addEventListener()' registra una función para que se ejecute cuando ocurre un evento
// Primer parámetro: nombre del evento ('load')
// Segundo parámetro: función a ejecutar (paginaCargada)
window.addEventListener('load', paginaCargada); // Ejecuta paginaCargada() cuando la página carga

// Línea 99: Segundo event listener
// 'beforeunload' evento que ocurre justo antes de que el usuario salga de la página
// Útil para guardar datos o mostrar estadísticas finales
window.addEventListener('beforeunload', mostrarEstadisticas); // Muestra estadísticas al salir
